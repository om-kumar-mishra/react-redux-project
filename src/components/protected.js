//import React, {  useState, useMemo } from 'react'
import {useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState,useMemo } from "react";
import {addUser,User_Login} from "../actions/userAction"

import {useNavigate} from "react-router-dom"
function Protected(props)
{
    // console.log("cmp" ,props.Cmp)
   
    let navigate = useNavigate();
    useEffect(()=>{
        // const   Cmp=props.Cmp
      if(!localStorage.getItem("user_info") )
      {
        
        navigate("/login")
      } 
           },[])
    

           return(
          
            <props.Cmp />    
             )

    
   
}

export default Protected;