import { Navigate } from "react-router";

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (!isLoggedIn || isLoggedIn === "false") {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
