import NextAuth from "next-auth"
import SpotifyProvider from "next-auth/providers/spotify";
import spotifyApi, { LOGIN_URL } from "../../../utils/spotify";


async function refreshAccessToken(token){
  try{
    spotifyApi.setAccessToken(token.accessToken);
    spotifyApi.setRefreshToken(token.refreshToken);

    const {body:refreshedToken} = await spotifyApi.refreshAccessToken();
console.log("Refreshed token is",refreshedToken);
return {
  ...token,
  accessToken:refreshedToken.access_token,
  accessTokenExpires:Date.now + refreshedToken.expires_in *1000 ,
  refreshedToken:refreshedToken.refresh_token ?? token.refreshToken,
}

  }catch(error){
    console.log(error);
    return {
      ...token,
      error:"Refresh token"
    }
  }
}


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
    console.log('ACCESS token has Expired, REFRESHING.....')
    return await refreshAccessToken(token)
  },
  async session({ session, token }) {
    session.user.accessToken = token.accessToken
    session.user.refreshToken = token.refreshToken;
    session.user.username = token.username;

    return session

      }
  }
}


export default NextAuth(authOptions)