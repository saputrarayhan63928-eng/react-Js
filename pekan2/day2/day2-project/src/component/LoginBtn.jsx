function LoginBtn(props) {
    const isLoggedIn = props.isLoggedIn;

  return (
   <>
   <button onClick={props.onClick}>{isLoggedIn ? "Logout" : "Login"}</button>
   </>
  );
}

export default LoginBtn;