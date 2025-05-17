import { useContext } from "react";
import AuthContext from "../auth/AuthContext/AuthContext";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div>
        <div className="min-h-screen pb-20 flex justify-center items-center">
          <span className="loading loading-bars loading-lg"></span>
        </div>
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to={"/login"}></Navigate>;
};

export default PrivateRoute;
