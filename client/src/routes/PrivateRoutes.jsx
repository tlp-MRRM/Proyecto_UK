import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContexts'
import { Navigate, Outlet } from 'react-router-dom'
export const PrivateRoutes = () => {
    const { isAuthenticated } = useContext(AuthContext)
    return (
        isAuthenticated() ? < Outlet /> : <Navigate to="/iniciar-sesion" />
    )
}
