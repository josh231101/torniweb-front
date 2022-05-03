import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = () => ({})
const Dashboard = ({ dispatch }) => {
  const handleLogout = () => dispatch({
    type: 'user/LOGOUT',
  })
  return (
    <div>
      <h1>BIENVENIDO A TORNIWEB</h1>
      <p>Dashboard</p>
      <button onClick={handleLogout}>Log out</button>
    </div>
  )
}

export default connect(mapStateToProps)(Dashboard)
