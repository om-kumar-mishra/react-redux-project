import {useSelector, useDispatch } from "react-redux";
import { AppSidebar, AppFooter, AppHeader } from '../../components/index'
import React , { useEffect} from "react";
import {fetchUser,fetchDelete} from '../../actions/userAction'
import { useState } from "react";

import {  Link } from "react-router-dom";
import { ToastContainer ,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function Table()
{
  //const [list , setList] = useState([]);
 

  const dispatch=useDispatch();
     


  function Delete(id)
  {
    if(window.confirm("are you sure you want delete the element "))
    {
     
      dispatch(fetchDelete(id))
      toast("successfully deleted")
      toast(localStorage.getItem("toast_message"));
      localStorage.removeItem("toast_message")
     
    }
  
  }


  useEffect(()=>{
    dispatch(fetchUser()) 
    //  fetch('http://localhost:301/users',{method:"GET"})
    // .then((res) => {res.json().then((users)=>{
    //       console.log("action",users.data)
    //     // dispatch(setUsers(users.data))
    //     setList(users.data)
    // })})
       },[])

       useEffect(() => {
        if (localStorage.getItem("toast_message")) {
          toast(localStorage.getItem("toast_message"));
          localStorage.removeItem("toast_message")
        }
    
      },[])
    
          
       
  const list=useSelector((state)=> state.userReducers.list )
  //const user=useSelector((state)=> state.userReducers )
     
 


//update data





    return(

        <>
        
        <div>
      <AppSidebar />
      <ToastContainer />
      <div className="wrapper d-flex flex-column min-vh-100 bg-dark d-flex  justify-content-center  ">
        <AppHeader />
        <div className="body flex-grow-1 px-3  rounded bg-light ml-5 mb-5" style={{width:"95%" ,boxShadow:"8px 8px 6px 8px sky"}}>
          <div className="d-flex ">
          <h3>Add User</h3>
          <div className=" d-block justify-content-end mt-2" style={{marginLeft:"950px"}}>
          <Link className="btn btn-primary " to="/add">Add User</Link>
          </div>
          
          </div>

        <div>
   
        <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">S.No</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      {/* <th scope="col">Password</th> */}

      <th scope="col">Age</th>
      <th scope="col">Image</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>

{

  list.map((elem,index)=>{
    // let url="";
     return(
      <>
        <tr key={elem.id}>

           <th scope="row">{index+1}</th>
           <td>{elem.name}</td>
           <td>{elem.email}</td>
           {/* <td>{elem.password}</td> */}
           <td>{elem.age}</td>
           <td><img style={{maxHeight:"70px",maxWidth:"70px"}} src={"http://localhost:301/"+elem.image} />   </td>
           {/* <td>{elem.image} </td>   */}
           <td>
            <button className="btn btn-danger" onClick={()=>Delete(elem.id)}>Delete</button>
           
             <Link className="btn btn-primary ml-5"   to={`/update/${elem.id}`}  > Update</Link>
           </td>

            </tr>
      </>
     )
  })

}   
  </tbody>
</table>
      
 
        </div>
        </div>
        <AppFooter />
      </div>
    </div> 
           
    <ToastContainer />
       
      </>
    )
}

export default Table;