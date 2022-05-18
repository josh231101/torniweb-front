import React from 'react'
import { connect } from 'react-redux'
import './index.css'
const mapStateToProps = () => ({})
const Dashboard = () => {

  return (
    <div style={{ backgroundImage: 'url("images/dashboard.jpeg")' }} class="dashboard-container">
      <h1>BIENVENIDO AL ADMIN TORNIWEB</h1>
    </div>
  )
}

export default connect(mapStateToProps)(Dashboard)
