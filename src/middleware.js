import { NextResponse } from "next/server";
// import { jwtDecode } from "jwt-decode";
import { authPages, studentPages, teacherPages } from "./utils/apiPath";
import { ROLE_TOKEN_KEY, TEACHER, TOKEN_KEY } from "./utils/constant";

export const middleware = (request) => {
  let authToken = request.cookies.get(TOKEN_KEY)?.value;
  let roleBaseToken = request.cookies.get(ROLE_TOKEN_KEY)?.value;

  const isTokenExpired = () => {
    if (authToken) {
      import("jwt-decode").then(({ jwtDecode }) => {
        const decodedToken = jwtDecode(authToken);
        const currentTime = Date.now() / 1000;
        console.log(currentTime, decodedToken);

        return decodedToken.exp < currentTime;
      });
    }
    return false;
  };

  const isLoginPage = authPages.includes(request.nextUrl.pathname);
  const userPaths = request.nextUrl.pathname;

  if (authToken && !isTokenExpired()) {
    const userPages = roleBaseToken === TEACHER ? teacherPages : studentPages;

    if (
      isLoginPage ||
      (!userPages.includes(request.nextUrl.pathname) &&
        !userPages.some((pages) => userPaths.startsWith(pages)))
    ) {
      return NextResponse.redirect(new URL(userPages[0], request.url));
    }
  } else if (!isLoginPage) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }
};

export const config = {
  matcher: [
    "/",
    "/signin",
    "/parallel/:path*",
    "/intercepting/:path*",
    "/dashboard/:path*",
  ],
};
