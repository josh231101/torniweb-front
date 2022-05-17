import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = () => ({})
const Dashboard = () => {

  return (
    <div>
      <h1>BIENVENIDO A TORNIWEB</h1>
      <p>Dashboard</p>
    </div>
  )
}

export default connect(mapStateToProps)(Dashboard)
