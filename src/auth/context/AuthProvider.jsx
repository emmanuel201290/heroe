import React from 'react'
import { AuthContext } from './AuthContext'
import { useReducer } from 'react'
import { authReducer } from './authReducer'
import {types} from '../types/types'

//Hide Order component,cuando recibimos los children

const initialState = {
    logged: false
}

const init = ()=>{
     const user = JSON.parse(localStorage.getItem('user'))

     return {
      logged: !!user,
      user: user
     }
}


export const AuthProvider = ({children}) => {

    //Cuando se requiere un mayor manejo de los estado se maneja un useReducer y no un useState.
    const [ authState, dispatch ] = useReducer(authReducer, initialState, init)

    const login = (name = '')=>{
      const user = {id: 'ABC', name}
      const action = {
            type: types.login,
            payload:  user
        }

        localStorage.setItem('user', JSON.stringify(user))
       dispatch(action)
    }

    const logout = () =>{
      localStorage.removeItem('user')
      const action = {
        type: types.logout
      }

      dispatch(action)
    }

  return (
   <AuthContext.Provider value={{
    ...authState,
    login: login,
    logout: logout
   }}>
     {children}
   </AuthContext.Provider>
  )
}
