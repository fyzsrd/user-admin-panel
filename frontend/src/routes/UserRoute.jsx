import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";


const UserRoute=({children})=>{
    const {token, user}=useSelector((store)=>store.user);
    if(!token || user?.role !== 'user') return <Navigate to='/' />;
    return children;

}

export default UserRoute;