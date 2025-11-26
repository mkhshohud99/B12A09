import { createBrowserRouter } from "react-router";
import RootLayout from "../root/RootLayout";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivetRout from "./PrivetRout";
import Profile from "../pages/Profile";
import ServiceDetails from "../pages/ServiceDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path: '/services',
            Component: Services,
        },
        {
            path:'/login',
            Component: Login
        },
        {
            path:'/signup',
            Component: Register
        },
        {
            path: '/profile',
            element: <PrivetRout><Profile></Profile></PrivetRout>
        },
        {
            path: '/details/:id',
            element: <PrivetRout><ServiceDetails></ServiceDetails></PrivetRout>
        }
    ]
  },
]);

export default router;