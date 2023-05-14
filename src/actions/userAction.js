import axios from 'axios';
export const fetchUser=()=>{
    return async function (dispatch)
    {
        await fetch('http://localhost:301/users',{method:"GET"})
        .then((res) => {res.json().then((users)=>{
             // console.log("action",users.data)
             dispatch(setUsers(users.data))
        })})
       
    }
}



export const setUsers =(users)=>{
    if(users)
    {
        return{
            type:"SET_USER",
            payload:users,
        }
    }
}

//eng get list


//delete 
export const fetchDelete=(props)=>{
    // console.log("delete id==",props)
    return async function (dispatch)
    {
        fetch("http://localhost:301/user-delete?id="+props, {
            method: "DELETE"
         }).then((results) => {
            results.json().then((res)=>{
              
                localStorage.setItem("toast_message", res.message)
                dispatch(setDelete(props))
            })
            .catch((error)=>{

            })
           
         })

      
    }
}

export const setDelete=(props=null)=>{
    if(props)
    {
        return{
            type:"DELETE_USER",
            payload:props,
        }
    }
}

//end delete


//add user
export const addUser=(props)=>{
    console.log("add new user",props)
    
    return async function (dispatch)
    {   


     

                const res = await axios.post(
                  "http://localhost:301/user-add",
                  props
                );
                    console.log(res)
               
                if(res.data)
                {
                    localStorage.setItem("toast_message", res.message)
                    dispatch(AddUser(props))
                }
                else
                {
                    localStorage.setItem("toast_message", res.message)
                }
               
    }
}

export const AddUser=(props)=>{
    console.log("image ===", props.get("image"))
  let file=  props.get("image")
  let image=`/uploaded-files/${file.name}`
  let name=   props.get("name")
  let email=  props.get("email")
  let age=    props.get("age")
  let password=    props.get("password")
 
  let obj={name,email,age,password,image}
    if(props)
    {
        return{
            type:"ADD_USER",
            payload:obj,
        }
       
    }
 
}

// end add user 






//get single  user

export const getSingleUser=(props)=>{
   // console.log("delete id==",props)
    return async function (dispatch)
    {
        
      
    
        fetch("http://localhost:301/single-user?id="+props)
        .then((results) => {
           results.json().then((resp) => {
              console.log("select single user resp==",resp.data)
              dispatch(setSingleUser(resp.data))
           })
        })
     }
  
}

export const setSingleUser=(props=null)=>{
    if(props)
    {
        return{
            type:"GET_SINGLE_USER",
            payload:props,
        }
    }
}


//end get user user




//update
export const updateUser=(props)=>{
 console.log("update id==",props.get("id"))
     return async function (dispatch)
     {
         
  

      
    try {
        const res = await axios.put(
          "http://localhost:301/user-update?id="+props.get("id"),
          props
        );
        console.log("json",res.json)
        res.json().then((res)=>{
            if(res.data)
            {
                localStorage.setItem("toast_message", res.message)
                dispatch(update_user(props))
            }
            else{
                localStorage.setItem("toast_message", res.message)
            }
        })
      
      } catch (ex) {
        console.log(ex);
      }


 
      }
   
 }
 
 export const update_user=(props)=>{
    
    if(props)
     {
         return{
             type:"UPDATE_USER",
             payload:props,
         }
     }
 }
 
 // end update




 //login
export const User_Login=(props)=>{
    
    // let navigate = useNavigate();
   
    return async function (dispatch)
    {   
        // localStorage.getItem("user_info")        
         fetch("http://localhost:301/user-login", {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body:  JSON.stringify(props)
        }).then((res)=>{
                 res.json().then((res)=>{
                    // console.log("login======",res.data)
                    if(res.data)
                    {
                        localStorage.setItem("user_info",JSON.stringify(res.data))
                        dispatch(setLogin(props))
                    }
                    // else{
                    //     navigate("/login")
                    // }
                   
                   
                 })
          
        })

      
    }
}

export const setLogin=(props=null)=>{
    
    if(props)
     {
         return{
             type:"LOGIN"
            
         }
     }
 }