
import { Button } from "@nextui-org/button";
import { auth, signIn, signOut } from "next-auth/react";


function SignIn(){
    return(
        <form 
        action={async ()=>{
            "use client";
            await signIn('google');
            variant="secondary"
        }}
        >
        <Button>Sign in with Google</Button>
    </form>
    );
}


function SignOut(){
    return (
        <Button onClick={()=> signOut()}
        variant="secondary"
        size="lg"
        Sign out
        ></Button>
    );
}


export default async function LoginScreen(){
    const session = await auth();
    const user = session?.user?.email;

  return (
    <main className="flex h-full flex-col items-center
    justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-200 to-blue-500">
      <div className="space-y-6">
        <h1 className="text-6xl font-semibold text-semibold text-white drop-shadow-md">
            Auth
        </h1>
        <p className="text-white text-lg">
            Login 
        </p>
      </div>
      <div>
        <Button variant="secondary" size="lg">
        <div>{user ? <SignOut>{`Welcome ${user}`}</SignOut> : <SignIn />}</div>
        </Button>
      </div>
    </main>
  )
}