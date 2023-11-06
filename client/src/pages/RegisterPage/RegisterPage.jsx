import RegisterForm from "../../components/RegisterForm/RegisterForm";
import { Link } from "react-router-dom";
import "../RegisterPage/RegisterPage.css";

export const RegisterPage = () => {
  return (
    <div className="registration-page-wrapper">
      <Link to="/login"></Link>
        <RegisterForm/>
    </div>
  );
}