import LoginForm from "components/LoginForm";
import Menu from "components/Menu";
const HomePage = async () => {
  return(
    <div className="">
      <Menu/>
      <div className="text-right top-10 right-10">
      <h1 className=""> Log in here</h1>
      <LoginForm/>
      </div>
    </div>
  );
}

export default HomePage;
