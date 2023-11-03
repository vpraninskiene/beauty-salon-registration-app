import RegisterForm from "../../components/RegisterForm/RegisterForm";
import { Link } from "react-router-dom";


export const RegisterPage = () => {
  return (
    <div>
      <Link to="/login">Login</Link>
        <h1>Register</h1>
        
        <RegisterForm/>
    </div>
  )
}