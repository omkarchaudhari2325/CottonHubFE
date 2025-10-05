import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.scss"
// import "./components/Blogs/Blog.scss"
import Body from "./components/Layout/Body.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import SignUp from "./components/Authentication/SignUp.jsx";
import Error from "./components/Error/Error.jsx";
import SignIn from "./components/Authentication/SignIn.jsx";
import Demo from "./components/Demo/Demo.jsx";
import Predict from "./components/Prediction/Predict.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import Solution from "./components/Solution/Solution.jsx";
import AllDisease from "./pages/AllDisease.jsx";
import Blogs from "./pages/Blogs.jsx";
import Dashboard from "./components/UserDashboard/Dashboard.jsx";
import ForgotPassword from "./components/forgotPassword/ForgotPassword.jsx";
import UserNotValid from "./components/UserDashboard/UserNotValid.jsx";
import Shimmer from "./components/Shimmer/Shimmer.jsx";
import LoginShimmer from "./components/Shimmer/LoginShimmer.jsx";
import History from "./components/Prediction/History.jsx";
import Interceptor from "./Interceptors/Interceptor.jsx";
import EditUser from "./components/UserDashboard/EditUser.jsx";
import Aphid from "./components/Diseases/All_Diseases/Aphid.jsx";
import ArmyWorm from "./components/Diseases/All_Diseases/ArmyWorm.jsx";
import TargetSpot from "./components/Diseases/All_Diseases/TargetSpot.jsx";
import GreenBollRott from "./components/Diseases/All_Diseases/GreenBollRott.jsx";
import CottonBollRott from "./components/Diseases/All_Diseases/CottonBollRott.jsx";
import Healthy from "./components/Diseases/All_Diseases/Healthy.jsx";
import PowderyMildew from "./components/Diseases/All_Diseases/PowderyMildew.jsx";
import BacterialBlight from "./components/Diseases/All_Diseases/BacterialBlight.jsx";
import HomeBlog from "./components/Blogs/HomeBlog.jsx";
import ChangePass from "./components/ChangePassword/ChangePass.jsx";
// import Disease from "./components/Diseases/Disease.jsx";
// import Aphids from "./components/Diseases/All_Diseases/Aphids.jsx";
// import Aphids from "./components/Diseases/All_Diseases/Aphid.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/register",
        element: <SignUp />,
      },

      {
        path : "/signin",
        element : <SignIn />
      },
      {
        path :  "/demo",
        element : <Demo />
      },
      {
        path : "/predict",
        element : <Predict />
      },
      {
        path : "/contact",
        element : <Contact />
      },
      {
        path : "/about",
        element : <About />
      },
      {
        path : "/solution/:id",
        element : <Solution />
      },
      {
        path : "/all-diseases",
        element : <AllDisease />
      },
      {
        path : "/blogs",
        element : <Blogs />
      },{
        path : "/dashboard",
        element : <Dashboard />,

      },
      {
        path : "/forgot-password",
        element : <ForgotPassword />
      },{
        path : "/inValidUser",
        element : <UserNotValid />
      },
      {
        path : "/shimmer",
        element : <LoginShimmer />
      },
      {
        path : "/dashboard/history",
        element : <History />
      },
      {
        path : "/interceptor",
        element : <Interceptor />
      },{
        path : "/dashboard/edit-user/:id",
        element : <EditUser />
      },
      {
        path : "/all-diseases/aphids",
        element : <Aphid />

      },
      {
        path : "/all-diseases/army-worm",
        element : <ArmyWorm />

      },
      {
        path : "/all-diseases/target-spot",
        element : <TargetSpot />

      },
      {
        path : "/all-diseases/green-boll-rot",
        element : <GreenBollRott />

      },
      {
        path : "/all-diseases/cotton-boll-rot",
        element : <CottonBollRott />

      },
      {
        path : "/all-diseases/healthy",
        element : <Healthy />

      },
      {
        path : "/all-diseases/powdery-mildew",
        element : <PowderyMildew />

      },
      {
        path : "/all-diseases/bacterial-blight",
        element : <BacterialBlight />

      },
      {
        path : "/home-blog",
        element : <HomeBlog />
      },
      {
        path : "/dashboard/change-pass",
        element : <ChangePass />
      }

    ],
    errorElement: <Error />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
