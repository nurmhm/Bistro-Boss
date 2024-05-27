import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Pages/Shared/Loading";

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useContext(AuthContext);
  const location = useLocation();

  if (isLoading) {
    return <Loading />;
  }

  if (user) {
    return children;
  }

  return <Navigate to='/login' state={{ from: location }} replace />;
};

export default PrivateRoute;
