import React from 'react'
import  { useEffect } from 'react';
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DefaultLayout = () => {

  useEffect(()=>{
    if(localStorage.getItem("toast_message"))
    {
      toast.success(localStorage.getItem("toast_message"));
      localStorage.removeItem("toast_message")
    }

       },[])
   
  return (
    <div>
      <AppSidebar />

      <ToastContainer />

      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <AppContent />
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default DefaultLayout
