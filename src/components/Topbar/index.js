import React from 'react'
import { connect } from 'react-redux'
import { Tooltip, Switch } from 'antd'
import UserMenu from 'components/Topbar/UserMenu'
import './style.css'
import Menu from 'components/Menu'

const mapStateToProps = ({ dispatch, settings }) => ({
  dispatch,
  theme: settings.theme,
})

const TopBar = ({ dispatch, selectedDomain, theme }) => {
  const setTheme = nextTheme => {
    dispatch({
      type: 'settings/SET_THEME',
      payload: {
        theme: nextTheme,
      },
    })
    dispatch({
      type: 'settings/CHANGE_SETTING',
      payload: {
        setting: 'menuColor',
        value: nextTheme === 'dark' ? 'dark' : 'gray',
      },
    })
    dispatch({
      type: 'settings/SET_PRIMARY_COLOR',
      payload: {
        color: nextTheme === 'dark' ? '#184A7B' : '#184A7B',
      },
    })
  }
  return (
    <nav className="topbar">
      <div className="mr-auto">
        <Menu />
      </div>
      <div className="ml-auto">
        <UserMenu />
      </div>
    </nav>
  )
}

export default connect(mapStateToProps)(TopBar)
