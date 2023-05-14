//import React, {  useState, useMemo } from 'react'
// import axios from 'axios';
import {  AppSidebar, AppFooter, AppHeader } from '../../components/index'
import { useDispatch } from 'react-redux';
import React  from 'react';
import  { useState,useEffect} from 'react';

import {addUser,fetchUser} from "../../actions/userAction"
import {  Link } from "react-router-dom";
import {useNavigate} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddUser()
{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [password, setPassword] = useState("");
    const [file, setImage] = useState("");

    const dispatch=useDispatch();  
    let navigate = useNavigate();

    useEffect(() => {
      if (localStorage.getItem("toast_message")) {
        toast(localStorage.getItem("toast_message"));
        localStorage.removeItem("toast_message")
      }
  
    }, [])



 async function ADDUSER(e)
    {
      
      e.preventDefault();
    if (name.length <= 2) {
    //  localStorage.setItem("toast_message", "name should must gratter then two character")
        toast("name should must gratter then two character");
       navigate("/add")
      }
    else if (!email.endsWith("@gmail.com")) {

      //localStorage.setItem("toast_message", "email must contain '@gmail.com' in end of line ")
      toast("email must contain '@gmail.com' in end of line ");
      return navigate("/add")
    }
    else if (age.length <= 0) {
      //localStorage.setItem("toast_message", "Age must not empty ")
      toast("Age must not empty");
      return navigate("/add")
    }
    else if (password.length <= 5) {

      //localStorage.setItem("toast_message", "password must gratter then 5 character")
      toast("password must gratter then 5 character");
      return navigate("/add")
    }

    else
    {

      const formData = new FormData();
    formData.append("image", file)
    formData.append("name", name)
    formData.append("email", email)
    formData.append("age", age)
    formData.append("password", password)
    dispatch(addUser(formData))
    dispatch(fetchUser())
      localStorage.setItem("toasta_message", "successfully registration")
      return  navigate("/list")
    

    }

          
        //  const   formData=new FormData();
        //  formData.append("image",file)
        //  formData.append("name",name)
        //  formData.append("email",email)
        //  formData.append("age",age)
        //  formData.append("password",password)

      

        //        dispatch(addUser(formData)) 
        //       dispatch(fetchUser())    
        //       navigate("/list")
                    
    }
 
    return(
        <>

<div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
      <ToastContainer />
        <AppHeader />
        <div className="body flex-grow-1 px-3">
        <div className='container m-3 boader'>
           <h1>ADD FORM
           <Link className="btn btn-primary" to="/list">Back</Link>
           </h1>
        <form >
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Name</label>
    <input type="text"  className="form-control" name="name" value={name}  onChange={(e) => { setName(e.target.value) }} id="exampleInputEmail1" aria-describedby="emailHelp"  placeholder="Enter name" />
    
    </div>
    <div className="form-group">
    <label htmlFor="exampleInputPassword1">Email</label>
    <input type="email" className="form-control" name='email' value={email}  onChange={(e) => { setEmail(e.target.value) }} id="exampleInputPassword1" placeholder="Enter Email" />
   </div>

   <div className="form-group">
    <label htmlFor="exampleInputPassword1">Age</label>
    <input type="text" className="form-control" name='age' value={age}  onChange={(e) => { setAge(e.target.value) }} id="exampleInputPassword1" placeholder="Enter age" />
   </div>

   <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" name='password' value={password}  onChange={(e) => { setPassword(e.target.value) }} id="exampleInputPassword1" placeholder="Enter password"></input>
   </div>
   
   <div className="form-group">
    <label htmlFor="image">file</label>
    <input type="file" className="form-control" name='image'   onChange={(e) => { setImage(e.target.files[0]) }} id="image" placeholder="image"></input>
   </div>
   
  <button type="submit"  onClick={ADDUSER} className="btn btn-primary">Submit</button>
</form>             
          
        </div>
        </div>
        <AppFooter />
      </div>
    </div>

       
        </>
    )
}

export default AddUser;