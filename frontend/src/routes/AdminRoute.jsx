import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";


const AdminRoute =({children})=>{
    const {token, user}=useSelector((store)=>store.user);
    if (!token || user?.role !== 'admin') return <Navigate to="/" />;
  return children;

}

export default AdminRoute