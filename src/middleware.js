import { NextResponse } from "next/server"

const user = true;
const token = 'newToken'

export const middleware = (request) => {
    const cookies = request.cookies.get('token')
    // if (!user) {
    //     return NextResponse.redirect(new URL('/login', request.url));
    // }
    // return NextResponse.next();
    if(!cookies || cookies.value != token){
        return NextResponse.redirect(new URL('/login', request.url))
    }
    return NextResponse.next();
}

export const config = {
    matcher: ['/dashboard', '/services']
}