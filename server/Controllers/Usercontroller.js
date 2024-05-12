const express = require("express");
const mongoose  = require('mongoose');
const morgan = require('morgan');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const User = require('../models/User');
const Token = require('../models/Token');
const { validationResult } = require('express-validator');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const gravatar = require('gravatar');
const dotenv = require('dotenv');
var store = require('store');
const multer = require("multer");
var path = require('path');




dotenv.config();
app.use(cors());

const URL = "mongodb://127.0.0.1:27017/myshop";

require('dotenv').config();

app.set("view engine", "ejs");
app.use(morgan('tiny'));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'uploads')));
app.use(express.static('public'));


app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ parameterLimit:50000, extended: true, limit: '50mb' })); 

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Expose-Headers", "Content-Range"); 
  next();
});

mongoose.connect(URL,{ 
  useNewUrlParser:true,
  useUnifiedTopology:true 
})
mongoose.connection.on('open',()=>console.log("Mongodb Connected"))
mongoose.connection.on('error',(e)=> console.log(e))

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


// userRouter.post('/signup', 
const Signupuser = async (req, res) =>{
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.json({ errors: errors.array()});
  }
  const { 
    firstname,
    lastname,
    phonenumber,
    email,
    password,
    userType,
    secretKey,
    avatar,
  location} = req.body;
    try{

      let user = await User.findOne({email, phonenumber});
      if(user){
        res.json("User Already exists");
      }
      else{
      const avatar = gravatar.url(email, {
        s:'200',
        r: 'pg',
        d:'mm'
      })

user = new User({
  firstname,
  lastname,
  phonenumber,
  email,
  password,
  userType,
  secretKey,
  avatar,
  location
});

const salt = await bcrypt.genSalt(10);

user.password = await bcrypt.hash(password, salt);

await user.save();
    const payload ={
      user:{
        id: user.id
      }
    };

    jwt.sign(
      payload, 
      process.env.jwtSecret,
      {expiresIn: '1d'}, 
      (err, token) =>{
        if(err) throw err;
        res.json({token});
        console.log(`Signup token: ${token}`)
      }
      );
    }
    
    } catch (err) {
      console.error(err.message)
      res.json('An error occurred');
    }
};

// userRouter.get("/users", (req, res) => {
const Users = async (req, res) => {
  User.find()
  .then(user => res.json(user))
};

const Loginuser = async(req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password, secretKey } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ error: 'Username and password are required' });
    }

    let user = await User.findOne({ email });

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
};

// userRouter.post('/logout', (req, res) => {
const Logoutuser = async (req, res) => {
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
  });
};

// userRouter.delete('/users/:id', async (req, res) => {
const Deleteuser = async (req, res) => {
    try {
      const userId = req.params.id;
      const deletedUser = await User.findByIdAndDelete(userId);
      
      if (!deletedUser) {
        return res.status(404).json({ error: 'User not found' });
      }
      
      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
//   userRouter.get('/users/:id', async (req, res) => {
  const Finduser = async (req, res) => {
    const userId = req.params.id;
  
    try {
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      return res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
//   userRouter.put('/users/:id', async (req, res) => {
const Updateuser =  async (req, res) => {
   
      let result = await User.updateOne(
        { _id : req.params.id}, 
        { $set: req.body  }
      )
     res.send({ result });
  };

  module.exports = { Updateuser,Finduser,Deleteuser, Logoutuser, Loginuser, Users, Signupuser }