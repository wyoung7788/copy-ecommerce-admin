//unique to a route
import { Button } from "@nextui-org/button";
import { getSession, signIn, signOut } from "next-auth/react";
import LoginScreen from "components/LoginScreen";
export default async function Home(){
  return (

    <LoginScreen></LoginScreen>
  )
}