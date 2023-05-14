import './scss/style.scss'
import React, { Component, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//import { HashRouter, Route, Routes } from 'react-router-dom'
import List from './components/Admin_pannel/list'
import Add from './components/Admin_pannel/add'
import Update from './components/Admin_pannel/update'
import Epub from './components/Admin_pannel/e_pub'

import DefaultLayout from './layout/DefaultLayout'
import Login from "./views/pages/login/Login"
import Protected from './components/protected';
import Register from "./views/pages/register/Register"


class App extends Component {
  render() {
    return (
     
      <BrowserRouter>
        <Routes>
          <Route exact key="1" path='/list' element={<Protected Cmp={List} />} />
          <Route exact key="2" path='/add' element={<Protected Cmp={Add} />} />
          <Route exact key="3" path='/update/:id' element={<Protected Cmp={Update} />} />
          <Route exact path="/register" name="Register Page" element={<Register />} />
          <Route exact key="4" path="*" name="Home"   element={<Protected Cmp={DefaultLayout} />}   />
          <Route exact key="5" path="/login" element={<Login />} />
          <Route exact key="5" path="/e-pub" element={<Epub />} />
         
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App
