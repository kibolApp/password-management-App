import { useStateContext } from "../Context/ContextProvider";
import { Navigate, Outlet } from "react-router-dom";

export default function GuestLayout() {
    const {token}= useStateContext()
    
    if(token){
        return <Navigate to='/main'/>
    }


    return (
      <>
        
              
         <Outlet />
        
      </>
    )
  }