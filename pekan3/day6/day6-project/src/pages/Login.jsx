import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";

function Login(){
    const { login } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || "/checkout";

    const handleLogin =  () =>{
        login();
        navigate(from, {replace: true})
    }

    return(
        <div style={{ textAlign: "center", marginTop: "80px" }}>
            <h2>Login</h2>
            <p>Silahkan Login Terlebih Dahulu Untuk Melanjutkan Checkout</p>
            <button onClick={handleLogin} className="button" >Login</button>
        </div>
    )
}

export default Login