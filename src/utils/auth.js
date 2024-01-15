"use server";

import { cookies } from "next/headers";
import { ROLE_TOKEN_KEY, TOKEN_KEY } from "./constant";

export const setAuthToken = (token) => {
  if (token !== undefined && token !== null) {
    cookies().set(TOKEN_KEY, token);
  }
};

export const setAuthTokenRole = (token) => {
  if (token !== undefined && token !== null) {
    cookies().set(ROLE_TOKEN_KEY, token);
  }
};
