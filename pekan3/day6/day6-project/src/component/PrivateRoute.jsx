import { useContext } from "react";
import { Form, Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

function PrivateRoute ({children}){
    const {isAuthenticated} = useContext(AuthContext)
    const location = useLocation()

    if(!isAuthenticated){
        return <Navigate to="/login" state={{ from: location}} replace />
    }

    return children
}

export default PrivateRoute