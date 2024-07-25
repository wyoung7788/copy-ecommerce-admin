
import { doSocialLogin } from "app/actions";
const LoginForm = () => {
    return (
        <form action={doSocialLogin}>

            <button className= "bg-slate-500 rounded-lg text-center" type="submit" name="action" value="google">
                Sign in with Google
            </button>
        </form>
    )
}
export default LoginForm