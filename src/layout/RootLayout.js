import React from 'react'
import { Outlet } from 'react-router-dom'

function RootLayout() {
    return (
        <>
            <header>This is RootLayout.</header>
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default RootLayout
