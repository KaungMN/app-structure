import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import RootLayout from '../layout/RootLayout'
import AboutUs from '../pages/AboutUs'
import Home from '../pages/Home'
import NoMatch from '../pages/NoMatch'

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<RootLayout />}>
                <Route path="home" element={<Home />} />
                <Route path="about-us" element={<AboutUs />} />
            </Route>
            <Route path="*" element={<NoMatch />} />
        </>
    )
)
