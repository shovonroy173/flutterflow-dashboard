import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/Main/Main";
import PrivateRoute from "./PrivateRoute";

import SignIn from "../Pages/Auth/SignIn/SignIn";
import ForgatePassword from "../Pages/Auth/ForgatePassword/ForgatePassword";
import VerifyCode from "../Pages/Auth/VerifyCode/VerifyCode";
import NewPass from "../Pages/Auth/NewPass/NewPass";

import Dashboard from "../Pages/Dashboard/Dashboard";
import UserList from "../Pages/UserList/UserList";
import Conversations from "../Pages/Conversations/Conversations";
import Calls from "../Pages/Calls/Calls";
import AiTranslation from "../Pages/AiTranslation/AiTranslation";
import Earnings from "../Pages/Earnings/Earnings";
import Broadcasts from "../Pages/Broadcasts/Broadcasts";
import SettingsPage from "../Pages/Settings/Settings";
import Security from "../Pages/Security/Security";
import Avatars from "../Pages/Avatars/Avatars";
import Disputes from "../Pages/Disputes/Disputes";
import Analytics from "../Pages/Analytics/Analytics";
import Retention from "../Pages/Retention/Retention";
import Infrastructure from "../Pages/Infrastructure/Infrastructure";

export const router = createBrowserRouter([
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/forgate-password",
    element: <ForgatePassword />,
  },
  {
    path: "/verify-code",
    element: <VerifyCode />,
  },
  {
    path: "/new-password",
    element: <NewPass />,
  },
  {
    element: <PrivateRoute />,
    children: [
      {
        path: "/",
        element: <MainLayout />,
        children: [
          { path: "/", element: <Dashboard /> },
          { path: "/dashboard", element: <Dashboard /> },
          { path: "/users", element: <UserList /> },
          { path: "/user-list", element: <UserList /> },
          { path: "/conversations", element: <Conversations /> },
          { path: "/calls", element: <Calls /> },
          { path: "/ai-translation", element: <AiTranslation /> },
          { path: "/analysis-page", element: <AiTranslation /> },
          { path: "/payments", element: <Earnings /> },
          { path: "/earnings", element: <Earnings /> },
          { path: "/broadcasts", element: <Broadcasts /> },
          { path: "/settings", element: <SettingsPage /> },
          { path: "/security", element: <Security /> },
          { path: "/avatars", element: <Avatars /> },
          { path: "/disputes", element: <Disputes /> },
          { path: "/analytics", element: <Analytics /> },
          { path: "/retention", element: <Retention /> },
          { path: "/infrastructure", element: <Infrastructure /> },
        ],
      },
    ],
  },
]);
