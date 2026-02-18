import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepges from'../Pages/Homepges'
import Shoppges from '../Pages/Shoppges'
import Collectionpges from '../Pages/Collectionpges'
import Blogpges from '../Pages/Blogpges'
import Contactpges from '../Pages/Contactpges'


export default function Routing() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Homepges />
        },
        {
            path: "/Shop",
            element: <Shoppges />
        },
         {
            path: "/Collection",
            element: <Collectionpges />
        },
         {
            path: "/Blog",
            element: <Blogpges />
        },
         {
            path: "/Contact",
            element: <Contactpges />
        },




    ])
    return (
        <div>
            <RouterProvider router={router} />

        </div>
    )
}