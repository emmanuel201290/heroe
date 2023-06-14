import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../auth/context'
import {Navigate } from 'react-router-dom'

//**Children signiifca que es un HOC */
export const PrivateRoute = ({children}) => {

    const { logged } = useContext(AuthContext)

  return (logged) ? children : <Navigate to="/login"/>
}
