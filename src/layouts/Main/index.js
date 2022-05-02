import React from 'react'
import { withRouter } from 'react-router-dom'

function MainLayout({ children }) {
  return (
    <div>
      <h1>MainLayout</h1>
      { children }
    </div>
  )
}

export default withRouter(MainLayout)
