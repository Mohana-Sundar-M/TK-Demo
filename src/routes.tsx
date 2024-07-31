import { Navigate, RouteObject } from "react-router-dom";
import Login from "./pages/login/Login";
import PageNotFound from "./pages/page-not-found/PageNotFound";
import MainContainer from "./components/main-container/MainContainer";
import Profile from "./pages/profile/Profile";
import PersonalDetails from "./pages/profile/personal-details/PersonalDetails";
import MyBookings from "./pages/profile/my-bookings/MyBookings";
import CustomerSupport from "./pages/profile/customer-support/CustomerSupport";
import TermsCondition from "./pages/t&c/TermsCondition";
import Faq from "./pages/profile/faq/Faq";
import FeedBack from "./pages/profile/feedback/FeedBack";
import Theater from "./pages/theater/Theater";

// const userInfo = sessionStorage.userInfo && JSON.parse(sessionStorage.userInfo);

export const routes: RouteObject[] = [
  {
    path: "/",
    children: [
      // {
      //     path: "",
      //     element: (
      //         userInfo?.user_key?.length ? (userInfo?.role === "Admin" ? <Navigate to="/admin/" replace /> : <Navigate to="/" replace />) : <Navigate to="/login" replace />
      //     )
      // },
      {
        path: "",
        element: <MainContainer />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "404",
        element: <PageNotFound />,
      },
      {
        path: "theaters",
        element: <Theater />,
      },
      {
        path: "profile",
        children: [
          {
            path: "",
            element: (
              <Profile>
                <PersonalDetails />
              </Profile>
            ),
          },
          {
            path: "bookings",
            element: (
              <Profile>
                <MyBookings />
              </Profile>
            ),
          },
          {
            path: "customer-support",
            element: (
              <Profile>
                <CustomerSupport />
              </Profile>
            ),
          },
          {
            path: "terms-conditions",
            element: (
              <Profile>
                <TermsCondition />
              </Profile>
            ),
          },
          {
            path: "faq",
            element: (
              <Profile>
                <Faq />
              </Profile>
            ),
          },
          {
            path: "feedback",
            element: (
              <Profile>
                <FeedBack />
              </Profile>
            ),
          },
        ],
      },
      {
        path: "*",
        element: <Navigate to="404" replace />,
      },
    ],
  },
];
