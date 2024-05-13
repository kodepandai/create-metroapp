import config from "config";
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  let storage = request.cookies.get(config.authStore);

  if (request.nextUrl.pathname.startsWith("/login")) {
    if (!storage) {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  if (request.nextUrl.pathname.startsWith("/admin")) {
    if (storage) {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL("/login", request.url));
  }
}
