import LoginForm from "../LoginForm/LoginForm";
import { RegisterLinkCard } from "../RegisterLinkCard/RegisterLinkCard";
import "../WelcomeCard/WelcomeCard.css";

export const WlcomeCard = () => {
    return (
        <div className="welcome-block-wrapper">
            <LoginForm/>
            <RegisterLinkCard/>
        </div>
    );
}