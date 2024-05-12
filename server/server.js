const express = require("express");
const mongoose  = require('mongoose');
const morgan = require('morgan');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const Products = require('../server/models/Products');
const Blog = require('../server/models/Blog');
const cookieParser = require('cookie-parser');
const gravatar = require('gravatar');
const dotenv = require('dotenv');
const multer = require("multer");
var path = require('path');


dotenv.config();
app.use(cors());

const URL = "mongodb://127.0.0.1:27017/showbux";


const port = process.env.PORT;

require('dotenv').config();

app.set("view engine", "ejs");
app.use(morgan('tiny'));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'uploads')));
app.use(express.static('public'));


app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ parameterLimit: 50000, extended: false, limit: '50mb' }));
// app.use(bodyParser.urlencoded({ parameterLimit: 50000, extended: true, limit: '50mb' }));

mongoose.connect(URL,{ 
  useNewUrlParser:true,
  useUnifiedTopology:true 
})
mongoose.connection.on('open',()=>console.log("Mongodb Connected"))
mongoose.connection.on('error',(e)=> console.log(e))

mongoose.set('strictQuery', false);

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads");
    },
    filename: function (req, file, cb) {
      console.log(req.file);
      const uniqueSuffix = Date.now();
      cb(null, file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname));
    }
  });
  
  const upload = multer({ storage: storage });



app.get("/", function (req, res) {
    res.send("Welcome to MyShop Server");
  });

 app.post("./signupuser", async(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  
    const { email, password, secretKey } = req.body;
  
    try {
      if (!email || !password) {
        return res.status(400).json({ error: 'Username and password are required' });
      }
  
      let user = await Peoducts.findOne({ email });
  
      if (!user) {
        return res.status(401).json({ error: 'Invalid Credentials A' });
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
  
      if (!isMatch) {
        return res.status(401).json({ error: 'Invalid Credentials: Password is incorrect' });
      }
  
  else{ 
  const payload = {
  user: {
    id: user.id,
  },
  };
  
  jwt.sign(
  payload,
  process.env.jwtSecret,
  { expiresIn: '1d' },
  async (err, token) => {
    if (err) throw err;
  
    try {
      const newToken = new Token({
        token: token
      });
      await newToken.save();
      console.log(`Token saved to the database.`);
      
      res.json({ token, user });
      const UserId = user._id;
      store.set('user', UserId )
  
      console.log(`Login token: ${token} and userID: ${UserId}`);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to save token to the database.' });
    }
  }
  );
  }
  
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  })

  app.post("./loginuser", async(req, res) =>{
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
    
      const { email, password, secretKey } = req.body;
    
      try {
        if (!email || !password) {
          return res.status(400).json({ error: 'Username and password are required' });
        }
    
        let user = await Peoducts.findOne({ email });
    
        if (!user) {
          return res.status(401).json({ error: 'Invalid Credentials A' });
        }
    
        const isMatch = await bcrypt.compare(password, user.password);
    
        if (!isMatch) {
          return res.status(401).json({ error: 'Invalid Credentials: Password is incorrect' });
        }
    
    else{ 
    const payload = {
    user: {
      id: user.id,
    },
    };
    
    jwt.sign(
    payload,
    process.env.jwtSecret,
    { expiresIn: '1d' },
    async (err, token) => {
      if (err) throw err;
    
      try {
        const newToken = new Token({
          token: token
        });
        await newToken.save();
        console.log(`Token saved to the database.`);
        
        res.json({ token, user });
        const UserId = user._id;
        store.set('user', UserId )
    
        console.log(`Login token: ${token} and userID: ${UserId}`);
      } catch (error) {
        return res.status(500).json({ error: 'Failed to save token to the database.' });
      }
    }
    );
    }
    
      } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error' });
      }
    })

    app.post('/logoutuser',async (req, res) => {
      const {Utoken} = req.body;
      Token.findOneAndDelete({ Utoken }, (err, doc) => {
        if (err) {
          console.error(err);
          res.status(500).json({ message: 'An error occurred during logout' });
        } else if (!doc) {
          res.status(404).json({ message: 'Token not found or already expired' });
        } else {
          res.json({ message: 'Logout successful' });
        }
      })
    })

app.delete('./deleteuser', async (req, res) => {
  try {
    const userId = req.params.id;
    const deletedUser = await Peoducts.findByIdAndDelete(userId);
    
    if (!deletedUser) {
      return res.status(404).json({ error: 'Peoducts not found' });
    }
    
    res.json({ message: 'Peoducts deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

)

app.get('/users/:id', async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await Peoducts.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'Peoducts not found' });
    }
    return res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.put('/updateuser/:id', async (req, res) => {
 
  let result = await Peoducts.updateOne(
    { _id : req.params.id}, 
    { $set: req.body  }
  )
 res.send({ result });
});


  app.post('/productregistry', async (req, res) =>{
    const { productID, productCategory,avatar, productName, productDescription, price, productImages , stockAvailability, productReviews} = req.body;
      try{
        let product = await Products.findOne({productName});
        if(product){
          res.json("Products Already exists");
        }
        else{
              const avatar = gravatar.url(email, {
                  s:'200',
                  r: 'pg',
                  d:'mm'
              });
  
              product = new Products({ productID, productCategory, avatar, productName, productDescription, price, productImages , stockAvailability, productReviews});
              await product.save();
              res.json(product);
              console.log(`Signup token: ${product}`)
      }
      
      } catch (err) {
        console.error(err.message)
        res.json('An error occurred');
      }
  })

  app.get('/productdisplay', async(req, res) =>{
    Products.find()
    .then(product => res.json(product))
  })
  app.delete('/productdelete',  async (req, res) => {
    try {
      const productID = req.params.id;
      const productDelete = await Products.findByIdAndDelete(productID);
      
      if (!productDelete) {
        return res.status(404).json({ error: 'Products not found' });
      }
      
      res.json({ message: 'Products deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  })

  app.get('/productSearch', async (req, res) => {
    const productID = req.params.id;
    
    try {
      const product = await Products.findById(productID);
      if (!product) {
        return res.status(404).json({ error: 'Products not found' });
      }
      return res.json(product);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  })

  app.put('/productupdate', async (req, res) => {
   
    let product = await Products.updateOne(
      { _id : req.params.id}, 
      { $set: req.body  }
    )
   res.send({ result });
});


app.post('/blog',  async (req, res) => {
  const { customerID, BlogID, BlogImage, BlogViews, BlogPostImage, BlogTitle, BlogAuthor, BlogCategory, BlogMessage  } = req.body;
  try{
    let blog = await Blog.findOne({blog});
    if(blog){
      res.json("Blog Already exists");
    }
    else{
          blog = new Blog({customerID, BlogID, BlogImage, BlogViews, BlogPostImage, BlogTitle, BlogAuthor, BlogCategory, BlogMessage});
          await blog.save();
          res.json(blog);
          console.log(`Blog Elements: ${blog}`)
  }
  
  } catch (err) {
    console.error(err.message)
    res.json('An error occurred');
  }
})


app.listen(port, error => {
      if (error) throw error;
      console.log('Your MyShop Server is running on port 6969');
    });

