import { clerkMiddleware, createRouteMatcher, currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoutes=createRouteMatcher(
  [
    "/",
    "/sign-up","/sign-in","/startup/:id","/user/:id*","/api/webhooks/clerk","/create","/api(.*)"
  ]
  
)
export default  clerkMiddleware(async(auth,req)=>{
  if(isPublicRoutes(req)){
    return  NextResponse.next();
 }

  return  NextResponse.redirect(new URL('/sign-up', req.url));

});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};