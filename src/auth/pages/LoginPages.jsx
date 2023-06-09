import React from 'react'
import { useContext } from 'react';

import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context';

export const LoginPages = () => {

 const { login } = useContext(AuthContext)

  const navigate = useNavigate();

  const onLogin = () => {

    login('Emmanuel Martinez');

    navigate('/',{
      replace:true
    })
  }
  return (
    <div className='container mt-5'>
      <h1>login</h1>
      <hr/>

      <button className='btn btn-primary'
      onClick={onLogin}>
        login
      </button>
    </div>
  )
}
