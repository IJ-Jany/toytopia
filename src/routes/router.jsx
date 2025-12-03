import MainLayout from "../layouts/MainLayout";

import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import Error from "../pages/Error";
import ToyDetails from "../pages/ToyDetails";
import Loading from "../components/Loading";
import PrivateRouter from "../context/PrivateRouter";
import ForgetPassword from "../components/ForgetPassword";
import AllToys from "../pages/AllToys";
import About from "../components/About";
import Support from "../components/Support";

const router = createBrowserRouter([
    {
path:"/",
Component:MainLayout,
children:[
    {
     path:"/",
     Component:Home,
     loader:()=> fetch("/toys.json").then(res=> res.json())
    },
    {
     path:"/login",
     Component:Login   
    },
     {
     path:"/about",
     Component:About   
    },
     {
     path:"/support",
     Component:Support   
    },
    {
        path:"/register",    
     Component:Register
    },
    {
        path:"/profile",
     element:<PrivateRouter><Profile></Profile></PrivateRouter>,
    },
     {
        path:"/alltoys",
     element:<AllToys></AllToys>,
      loader:()=> fetch("/toys.json").then(res=> res.json()),
         hydrateFallbackElement:<Loading></Loading>
    },
    {
        path:'/toys/:id',
        element:<ToyDetails></ToyDetails>,
         loader:()=> fetch("/toys.json").then(res=> res.json()),
         hydrateFallbackElement:<Loading></Loading>
    },
    {
        path:'/forgetpassword',
        Component:ForgetPassword
    }
     ]
    },
    {
        path:"/*",
        Component:Error
    }
])

export default router