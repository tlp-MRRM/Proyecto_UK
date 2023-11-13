import React from 'react'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { PageNotFound404 } from '../components/NotFound'

export const NotFoundPage = () => {
    return (
        <>
            <Nav />
            <PageNotFound404 />
            <Footer />
        </>
    )
}
