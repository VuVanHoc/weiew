import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { COOKIES } from "./config/constant";

export function middleware(request: NextRequest) {
	const accessToken = request.cookies.get(COOKIES.ACCESS_TOKEN)?.value;
	const pathname = request.nextUrl.pathname;

	if (pathname === "/admin/login") {
		return NextResponse.next();
	}

	if (!accessToken) {
		return NextResponse.redirect(new URL("/admin/login", request.url));
	}

	if (pathname === "/admin") {
		return NextResponse.redirect(
			new URL("/admin/create-blog", request.url),
		);
	}

	return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
	matcher: "/admin/:path*",
};
