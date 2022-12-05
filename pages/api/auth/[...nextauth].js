import NextAuth from "next-auth"
import SpotifyProvider from "next-auth/providers/spotify";
import { LOGIN_URL } from "../../../utils/spotify";


export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    SpotifyProvider({
      clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
      authorization: LOGIN_URL
    })
  ]
  ,
  secret : process.env.JWT_SECRET,
  pages: {
    signIn : '/login',
},
callbacks:{
  async jwt({token,account,user}){
    // Initial sign in
    if (account && user) {
      return {
        ...token,
        accessToken: account.access_token,
        accessTokenExpires: Date.now() + account.expires_at * 1000,
        refreshToken: account.refresh_token,
        user,
      }
    }

    // Return previous token if the access token has not expired yet
    if (Date.now() < token.accessTokenExpires) {
      console.log('Access token is valid');
      return token
    }

    // Access token has expired, try to update it
    return await refreshAccessToken(token)
    console.log('ACCESS token has Expired, REFRESHING.....')
  },
      
  }
}


export default NextAuth(authOptions)