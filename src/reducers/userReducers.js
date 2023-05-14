

const productsInitialState={
   list:[],
   user:{}
}


const userReducer=(state=productsInitialState,action)=>
{
    
    switch(action.type)
    {
       case "SET_USER":
          
           return {
                ...state,
           list: action.payload
           };
           
         case "DELETE_USER":
            let newList=state.list.filter((user)=>user.id !== action.payload)
           return {
              ...state,
             list: newList
            }
           
         case  "ADD_USER":
            return{
               ...state,
               list:[...state.list,action.payload]   
            }
          
            case "GET_SINGLE_USER":
               return{
                  ...state,
                  user:action.payload 
               }

               case "UPDATE_USER":
                  
                  return{
                     ...state
                     
                  }
                  case "LOGIN":  
           default:
            return state
    }
}

export default userReducer;