import React, { useContext, useState } from 'react';
import axios from 'axios';
import { contextObject } from '../Body/Apipage';
import Nav from '../Nav/Nav';

function CentralAdminForm() {

  const url = useContext(contextObject.defaultapi); 

    const [data, setData] = useState({
        shopname:"",
        shopdescription:"",
        shoplogo:"",
        shopcontactemail:"",
        shopcontactphonenumber:"",
        shopcontactaddress:"",
    })

    function handle(e){
        setData({ ...data, [e.target.name]: e.target.value });
        console.log(data)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(url, {
            shopname:data.shopname,
            shopdescription:data.shopdescription,
            shoplogo:data.shoplogo,
            shopcontactemail:data.shopcontactemail,
            shopcontactphonenumber:data.shopcontactphonenumber,
            shopcontactaddress:data.shopcontactaddress,
        })
        .then(res=>{
            console.log(res.data)
        })
        .catch(error =>{
            console.error("Error Posting Data" , error)
        })
      };

  return (
    <div className=''>
        <div>
              <Nav />
        </div>
        <div>
              <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username:</label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      value={data.username}
                      onChange={handle}
                    />
                <input type="submit" value="Submit" />
              </form>
        </div>
    </div>
  )
}

export default CentralAdminForm