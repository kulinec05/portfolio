import About from "./pages/About"
import Projects from "./pages/Projects"
import Home from "./pages"
import { Children } from "react"
import MainLayout from "./layouts/MainLayout"
export const ROUTES = [
    {
        path: '/',
        element: <MainLayout />,
        children: [{
            path: 'home',
            element: <Home />,

        },
        {
            path: 'about',
            element: <About />
        }
            ,
        {
            path: 'projects',
            element: <Projects />
        }]
    },
]