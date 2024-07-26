import LoginForm from "components/LoginForm";
import Nav from "components/Nav";
import Menu from "components/Menu";
export default function Home(){
  return(
    <div>
      <Menu/>
      <h1 className="text-center"> Log in here</h1>
      <LoginForm/>
    </div>
  );
}