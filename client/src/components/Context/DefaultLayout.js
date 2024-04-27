import { useStateContext } from "../Context/ContextProvider";
import { Navigate, Outlet} from "react-router-dom";

export default function DefaultLayout() {
    const {token}= useStateContext()
    
    if(!token){
        return <Navigate to='/home'/>
    }


    return (
      <>
        
              
         <Outlet />
        
      </>
    )
  }