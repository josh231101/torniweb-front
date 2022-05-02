import React from 'react'
import { withRouter } from 'react-router-dom'

const LoginLayout = ({ children}) =>  {
  return (
    <div>
      <h1>Login Layout</h1>
      { children }
    </div>
  )
}

export default withRouter(LoginLayout)
