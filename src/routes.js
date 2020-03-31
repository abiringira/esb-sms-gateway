import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import Dashboard from "./views/Dashboard";
import Users from "./views/Users";
import SendNewNotification from "./views/SendNewNotification";
import Errors from "./views/Errors";
import ResendNotification from "./views/ResendNotification";
import Notifications from "./views/Notifications";
import login from "./views/Login";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/login" />
  },
  {
    path: "/login",
    layout: DefaultLayout,
    component: login
  },
  {
    path: "/dashboard",
    layout: DefaultLayout,
    component: Dashboard
  },
  {
    path: "/users",
    layout: DefaultLayout,
    component: Users
  },
  {
    path: "/send-new-notification",
    layout: DefaultLayout,
    component: SendNewNotification
  },
  {
    path: "/errors",
    layout: DefaultLayout,
    component: Errors
  },
  {
    path: "/resend-notification",
    layout: DefaultLayout,
    component: ResendNotification
  },
  {
    path: "/notifications",
    layout: DefaultLayout,
    component: Notifications
  },
  
];
