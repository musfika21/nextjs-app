import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request) {

    const dummyData = {
        role: "user",
        email: "test@admin.com"
    };
    // console.log("result", request.nextUrl.pathname.includes('/services')) // eta just ei path ache kina dekhte
    // console.log("result", request.nextUrl.pathname.startsWith('/services'))
    let isServicePage = request.nextUrl.pathname.startsWith('/services');
    const isAdmin = dummyData.role == "admin";

    const currentCookie = request.cookies.get("nextjs-token");
    console.log("current cookie", currentCookie)

    if (isServicePage && !isAdmin) {
        return NextResponse.redirect(new URL('/login', request.url)) // url change kore component load korbe
        // return NextResponse.rewrite(new URL('/login', request.url)) //url change korbe na shudhu component ta load korbe
    }
    return NextResponse.next();
}