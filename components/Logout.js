import { Logout } from "app/actions";

const Logout = () => {
    return (
        <form action={Logout}>
            <button className= "bg-blue-400 my-2 text-white p-1 rounded"
            type="submit">
            Logout
            </button>
        </form>
    )
}

export default Logout