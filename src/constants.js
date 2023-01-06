import About from "./pages/About"
import Projects from "./pages/Projects"
import PageNotFound from "./pages/PageNotFound"
import Home from "./pages"
import MainLayout from "./layouts/MainLayout"
export const ROUTES = [
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { index: true, element: <Home /> }, 
            {
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
            },
            { path: "*", element: <PageNotFound /> },
        ]
    },
]