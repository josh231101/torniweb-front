import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = ({ user, settings, dispatch }) => ({
  dispatch,
  user,
  logo: settings.logo,
})

const Login = ({ dispatch }) => {
  const onFinish = e => {
    e.preventDefault()
    console.log('target: ', e.target.elements)
    dispatch({
      type: 'user/LOGIN',
      payload: {
        // TODO: Change this
        email: '****',
        password: '****'
      },
    })
  }

  return (
    <div>
      <form onSubmit={onFinish}>
      <input name="email" type="email" placeholder="email@domain.com" />
      <input name="password" type="password" placeholder="Abcd" />
      <button type="submit">Log In</button>
      </form>
    </div>
  )
}

export default connect(mapStateToProps)(Login)
