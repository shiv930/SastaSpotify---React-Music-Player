import React from 'react'
import { Outlet } from 'react-router'

const AuthLayout = () => {
  return (
    <div className='h-screen'>
{/* <h1>i am authlayout</h1> */}
      <Outlet/>
    </div>
  )
}

export default AuthLayout
