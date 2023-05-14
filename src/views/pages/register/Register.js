import React from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
// import axios from 'axios';
// import { AppContent, AppSidebar, AppFooter, AppHeader } from '../../../components/index'
import { useDispatch } from 'react-redux';
// import React, { useEffect,useMemo } from 'react';
import { useState ,useEffect} from 'react';

import { addUser, fetchUser } from "../../../actions/userAction"
// import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"


const Register = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
  const [file, setImage] = useState("");

  const dispatch = useDispatch();

  let navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("toast_message")) {
      toast(localStorage.getItem("toast_message"));
      localStorage.removeItem("toast_message")
    }

  }, [])



  async function ADDUSER(e) {

    e.preventDefault();
     console.log( age)
    if (name.length <= 2) {
     // localStorage.setItem("toast_message", "name should must grater then two character")
      toast("name should must gratter then two character");
      return navigate("/register")
    }
    else if (!email.endsWith("@gmail.com")) {

      ///localStorage.setItem("toast_message", "email must contain '@gmail.com' in end of line ")
      toast("email must contain '@gmail.com' in end of line ");
      return navigate("/register")
    }
    else if (age.length <= 0) {
      toast("Age must not empty");
      return navigate("/register")
    }
    else if (password.length <= 5) {

      toast("password must gratter then 5 character");
      return navigate("/register")
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
          localStorage.setItem("toast_message", "successfully registration")
      return navigate("/login")
    

    }



    // const formData = new FormData();
    // formData.append("image", file)
    // formData.append("name", name)
    // formData.append("email", email)
    // formData.append("age", age)
    // formData.append("password", password)
    // dispatch(addUser(formData))
    // dispatch(fetchUser())
    //       localStorage.setItem("toast_message", "successfully registration")
    //   return navigate("/login")
    
  }


  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
      <ToastContainer />
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <h1>Register</h1>
                  <p className="text-medium-emphasis">Create your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    < CFormInput placeholder="Username" autoComplete="username" name="name" value={name} onChange={(e) => { setName(e.target.value) }} />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput placeholder="Email" autoComplete="email" name='email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Password"
                      autoComplete="new-password"
                      name='password' value={password} onChange={(e) => { setPassword(e.target.value) }}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="number"
                      placeholder="Enter Age"

                      name='age' value={age} onChange={(e) => { setAge(e.target.value) }}
                    />
                  </CInputGroup>


                  <CInputGroup className="mb-3">

                    <CFormInput
                      type="file"
                      placeholder="Enter age"
                      name='image' onChange={(e) => { setImage(e.target.files[0]) }}

                    />
                  </CInputGroup>

                  <div className="d-grid">
                    <CButton onClick={ADDUSER} color="success">Create Account</CButton>
                  </div>


                  <div className="d-grid mt-3 btn-primary">
                    <CButton className="btn btn-primary" onClick={()=>navigate("/login")} color="success">Login</CButton>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
