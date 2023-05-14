import { AppContent, AppSidebar, AppFooter, AppHeader } from '../../components/index'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser, fetchDelete, getSingleUser, updateUser } from '../../actions/userAction'
import { BrowserRouter, Routes, Route, redirect, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom"
//import { useNavigate  } from 'react-router-dom';
import { Outlet, Link } from "react-router-dom";

function Update() {
  let navigate = useNavigate();
  const getUser = useSelector((state) => state.userReducers.user)
  const dispatch = useDispatch();
  const params = useParams()
  // const navigate = useNavigate();
  const u_id = params.id;

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [age, setAge] = useState("")
  const [id, setId] = useState("")
  const [password, setPassword] = useState("")
  const [file, setImage] = useState("")


  useEffect(() => {
    dispatch(getSingleUser(u_id))
  }, [])


  // setName(getUser.name)
  // setEmail(getUser.email)
  // setAge(getUser.age)
  useEffect(() => {
    if (getUser) {
      setName(getUser.name)
      setEmail(getUser.email)
      setAge(getUser.age)
      setId(getUser.id)
      setPassword(getUser.password)

    }
  }, [getUser])


  function update() {
    // let data={name,password,email,age,id}
    const formData = new FormData();
    formData.append("image", file)
    formData.append("name", name)
    formData.append("email", email)
    formData.append("age", age)
    formData.append("password", password)
    formData.append("id", id)


    dispatch(updateUser(formData))

    dispatch(fetchUser())
    toast("Wow so easy!");
    navigate("/list")

  }



  return (
    <>

      <div>
        <AppSidebar />
        <ToastContainer />
        <div className="wrapper d-flex flex-column min-vh-100 bg-light">
          <AppHeader />
          <div className="body flex-grow-1 px-3">
            <div className='container m-3 boader'>

              <h1>Update User Form</h1>
              <form >
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Name</label>
                  <input type="text" className="form-control" name="name" value={name} onChange={(e) => { setName(e.target.value) }} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name" />

                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1" >Email</label>
                  <input type="email" className="form-control" name='email' value={email} onChange={(e) => { setEmail(e.target.value) }} id="exampleInputPassword1" placeholder="Enter Email"></input>
                </div>

                <div className="form-group">
                  <label htmlFor="exampleInputPassword1" >Age</label>
                  <input type="text" className="form-control" name='age' value={age} onChange={(e) => { setAge(e.target.value) }} id="exampleInputPassword1" placeholder="Enter age"></input>
                </div>


                <div className="form-group">
                  <label htmlFor="exampleInputPassword1" >Password</label>
                  <input type="password" className="form-control" name='password' value={password} onChange={(e) => { setPassword(e.target.value) }} id="exampleInputPassword1" placeholder="Enter password"></input>
                </div>



                <div className="form-group">
                  <label htmlFor="image">file</label>
                  <input type="file" className="form-control" name='image' onChange={(e) => { setImage(e.target.files[0]) }} id="image" placeholder="image"></input>
                  <img style={{ maxHeight: "200px", maxWidth: "200px" }} src={"http://localhost:301/" + getUser.image} />
                </div>
                <button type="submit" onClick={update} className="btn btn-primary">Submit</button>
              </form>

            </div>
          </div>
          <AppFooter />
        </div>
      </div>

    </>
  )

}


export default Update
