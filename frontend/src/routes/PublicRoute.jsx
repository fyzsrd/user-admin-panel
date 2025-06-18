// routes/PublicRoute.jsx
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const { token, user } = useSelector((store) => store.user);

  if (token && user) {
    if (user.role === 'admin') return <Navigate to="/admin" />;
    return <Navigate to="/home" />;
  }

  return children;
};

export default PublicRoute;
