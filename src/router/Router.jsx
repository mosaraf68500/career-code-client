import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import Registetion from "../authentication/Registetion";

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
            }
        ]
    }
])