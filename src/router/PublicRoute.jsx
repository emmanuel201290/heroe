import React from 'react'
import { useContext } from 'react'
import { AuthContext, AuthProvider } from '../auth/context'
import {Navigate} from 'react-router-dom'

export const PublicRoute = ({children}) => {
    const {logged} = useContext(AuthContext)
  return (!logged) ? children : <Navigate to="/marvel"/>
}
