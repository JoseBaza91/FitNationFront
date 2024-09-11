import LoginComponent from "../components/Login";


const LoginPage = ({ setUserIsLogged }) => {
  return (
    <LoginComponent setUserIsLogged={setUserIsLogged} />
  )
};

export default LoginPage;
