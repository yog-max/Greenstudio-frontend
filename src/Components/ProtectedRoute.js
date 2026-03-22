import { Navigate } from "react-router-dom";

function ProtectedRoute({children})
{
    const token = sessionStorage.getItem("adminToken");

    if(!token)
    {
        return <Navigate to="/Admin-Login" replace />;
    }

    return children;


}
export default ProtectedRoute;