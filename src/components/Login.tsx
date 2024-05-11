import "@styles/auth.scss";
import AuthForm from "@components/forms/AuthForm/AuthForm";

export default function Login() {
  return (
    <div className="auth-container">
      <img src="owl-logo.svg" />
      <AuthForm />
    </div>
  );
}
