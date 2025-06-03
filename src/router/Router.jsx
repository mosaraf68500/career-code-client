import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import Registetion from "../authentication/Registetion";
import SignIn from "../authentication/SignIn";
import JobsApplyNow from "../pages/JobsApplyNow";

export const router=createBrowserRouter([
    {
        path:"/",
        Component:RootLayout,
        children:[
            {
                index:true,Component:Home
            },
            {
                path:"register",
                Component:Registetion
            },
            {
                path:"signIn",
                Component:SignIn
            },
            {
                path:"jobs/:id",
                Component:JobsApplyNow,
                loader:({params})=>fetch(`http://localhost:3000/jobs/${params.id}`)
            }
        ]
    }
])