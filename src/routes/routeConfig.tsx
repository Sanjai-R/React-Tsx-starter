import React from "react";

import HomePage from "../pages/home";
import AuthPage from "../pages/auth";
interface IRoute {
  path?: string;
  index?: boolean;
  children?: React.ReactNode;
  caseSensitive?: boolean;
  id?: string;
  element?: React.ReactNode | null;
  exact?: boolean;
}

export const routes: Array<IRoute> = [
  { path: "/", element: <HomePage />, exact: true },
  { path: "/auth", element: <AuthPage />, exact: true },
];
