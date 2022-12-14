import { NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'

// This function can be marked `async` if using `await` inside
export async function middleware(req) {
const token = await getToken({req,secret:process.env.JWT_SECRET}) 

const {pathname} =  req.nextUrl;

if(pathname.includes("/api/auth") || token){
  return NextResponse.next();
}

if(!token && pathname !=="/login"){
  return NextResponse.redirect("/login")
}
}


