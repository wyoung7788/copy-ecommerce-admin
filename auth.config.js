
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { signIn, signOut } from "next-auth/react"
 
const options ={
  providers: [Google({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  })],
}

export {signIn , signOut}
export default (req, res) => NextAuth(req, res, options)