
import { doSocialLogin } from "app/actions";
const LoginForm = () => {
    return (
        <form action={doSocialLogin}>

            <button className= "bg-slate-500 size-40 top-11 rounded-lg text-center width-20" type="submit" name="action" value="google">
                Sign in with Google
            </button>
        </form>
    )
}
export default LoginForm