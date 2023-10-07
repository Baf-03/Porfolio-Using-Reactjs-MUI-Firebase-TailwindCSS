import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const AuthRoute = () => {
  return (
    <>
    {localStorage.getItem("uid") =="MzZwFVqf4ZXNIqgqJ9WjXaOvu5F2"?( <Navigate to={"/"} />):(<Outlet/>)}
    </>
  )
}

export default AuthRoute