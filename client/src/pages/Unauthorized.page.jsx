import React from 'react'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { Unauthorized } from '../components/Unauthorized'

export const UnauthorizedPage = () => {
    return (
        <>
            <Nav />
            <Unauthorized />
            <Footer />
        </>
    )
}
