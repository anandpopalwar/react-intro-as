import React, { lazy, Suspense, useContext, useState } from 'react'
import ReactDOM from 'react-dom/client'

//importing components from other component files
import NavBar from './component/NavBar'
import CardsContainer from './component/CardsContainer'
// import About from './component/About'
import NotFoundb from './component/Error'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
// import Contact from './component/Contact'
import RestourantData from './component/RestourantData'
import Parent from './component/accordian'
import UserProfilePage from './component/UserProfilePage'
//context data is provided
import UserContext from './component/utils/UserContext'
//importing provider fro redux to use store
import { Provider } from 'react-redux'
//imporrting store to use with provider
import Store from './component/utils/store'

// import Login from './component/Login'
// import Logout from './component/Logout'


//importing component with lazy() for code spillting and lazy loading {lazy} will be imported from react
// importing file function syntax 
//       const component_name = lazy(()=> import ('component/path')) 
//it makes our react app faster and with that we have to use <Suspense></Suspense> componet and import that form react {Suspense}
//eg.    <Suspense>
//            <component /> which is imported with lazy () 
//       </Suspense>



const Login = lazy(() => import('./component/Login'));
const Contact = lazy(() => import('./component/Contact'));
const About = lazy(() => import('./component/About'));
const UserProfilePage = lazy(() => import('./component/UserProfilePage'))
const Cart = lazy(() => import('./component/Cart'))


const MainApp = () => {
    const [user, setUser] = useState(UserContext)
    return (
        <Provider store={Store} >
            <UserContext.Provider value={
                {
                    user: user,
                    setUser: setUser
                }
            } >

                <NavBar />
                <Outlet />

            </UserContext.Provider>

        </Provider>
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
            {
                path: '/acc',
                element: <Parent />
            },
            {
                path: '/profile',
                element: <UserProfilePage />
            },
            {
                path: '/cart',
                element: <Cart/>
            }
        ]
    },

])


const Root = ReactDOM.createRoot(document.getElementById('root'));

Root.render(
    <RouterProvider
        router={appLayout}
    />
)

