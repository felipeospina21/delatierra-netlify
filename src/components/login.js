import React, { useState } from "react"
import { navigate } from "gatsby"
import { handleLogin, isLoggedIn } from "../services/auth"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"

import "./login.scss"

const Login = () => {
  const [loginCredentials, setLoginCredentials] = useState({
    email: ``,
    password: ``,
  })

  const handleUpdate = event => {
    setLoginCredentials({
      ...loginCredentials,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    setLoginCredentials({ ...loginCredentials })
    handleLogin(loginCredentials)
  }

  if (isLoggedIn()) {
    navigate(`/app/inventario`)
  } 

  return (
    <>
      <h2 className="login-title">log in</h2>
      <form
        className="login-form"
        method="post"
        onSubmit={event => {
          handleSubmit(event)
        }}
      >
        <label>Username</label>
        <input type="email" name="email" onChange={handleUpdate} />

        <label>Password</label>
        <input type="password" name="password" onChange={handleUpdate} />

        <input className="login-input-btn" type="submit" value="Log In" />
      </form>
      <ToastContainer />
    </>
  )
}

export default Login
