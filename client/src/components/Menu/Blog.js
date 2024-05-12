import {React} from 'react';
import CentralAdminLeft from '../Admin/CentralAdminLeft';
import CentralAdminTop from '../Admin/CentralAdminTop';
import { useFormik, Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';



export default function Blog(){
  
    return(
        <>
        <div className='admin'>
            <div className='centraladmintop'>
                <CentralAdminTop />
            </div>
            
            <div className='centraladmin'>
                <div className='adminleft'>
                    <CentralAdminLeft />
                </div>
                <div className='adminright p-3'>
                    <h2>Blog</h2>
                    <form className='blogform'>   
                        <label> Title</label>                 
                        <input type='text' placeholder='Enter Blog Title' />
                        <label className='mt-3'> Message</label>                 
                        <textarea placeholder='Enter Blog Message . . .' />
                        <input type='file' placeholder='Enter Blog Title' className='mt-3 border-0' />
                        <Button color="primary" variant="contained" fullWidth type="submit" style={{ margin: '10px 0' }}>
                        Submit
                      </Button>
                     </form>
 
                     
                </div>
            </div>
        </div>
        </>
    )
}