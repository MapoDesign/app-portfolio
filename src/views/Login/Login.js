import SignUpForm from "../../Components/Form/signUpForm";
import useTitle from "../../useTitle";

export default function List() {
  useTitle("Test login");

  return (
    <div className="container">
      <h1>Login</h1>

      <SignUpForm />
    </div>
  );
}
