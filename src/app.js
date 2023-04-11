import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'

//importing components from other component files
import NavBar from './component/NavBar'
import CardsContainer from './component/CardsContainer'
// import About from './component/About'
import NotFoundb from './component/Error'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
// import Contact from './component/Contact'
import RestourantData from './component/RestourantData'
// import Login from './component/Login'
// import Logout from './component/Logout'


const Login = lazy(() => import('./component/Login') );
const Contact = lazy(() => import('./component/Contact') );
const About = lazy(() => import('./component/About') );


const MainApp = () => {
    return (
        <div>
            <NavBar />
            <Outlet />

        </div>
    )
}



const appLayout = createBrowserRouter([
    {
        path: '/',
        element: <MainApp />,
        errorElement: <NotFoundb />,
        children: [
            {
                path: '/',
                element: <CardsContainer />
            },
            {
                path: '/about',
                element: 
                <Suspense >
                    <About />
                </Suspense>
            },
            {
                path: '/contact',
                element:
                <Suspense >
                    <Contact />
                </Suspense> 
            },
            {
                path: '/restro',
                element: <RestourantData />
            },
            {
                path: '/login',
                element:
                    <Suspense fallback={<h1>show somthing 🟢📴🔴✨⚡🛵📴🥵🔎🍗⚡✨✨⭐</h1>} >
                        <Login />
                    </Suspense>
            },
            // {
            //     path:'/logout',
            //     element:<Logout />
            // },
        ]
    },

])


const Root = ReactDOM.createRoot(document.getElementById('root'));

Root.render(
    <RouterProvider
        router={appLayout}
    />
)

