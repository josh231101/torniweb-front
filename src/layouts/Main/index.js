import React from 'react'
import { withRouter } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons'
import Topbar from 'components/Topbar'
import './style.css'

const { Header, Content, Footer, Sider } = Layout

function MainLayout({ children }) {
  return (
    <Layout>
      {/* <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="logo" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['4']}
        items={[UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
          (icon, index) => ({
            key: String(index + 1),
            icon: React.createElement(icon),
            label: `nav ${index + 1}`,
          }),
        )}
      />
    </Sider>
    <Layout>
      <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
      <Content style={{ margin: '24px 16px 0' }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
          { children }
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>TorniWeb 2022</Footer>
    </Layout> */}
      <Layout>
        <Layout.Header>
          <div className="">
            {/** NAVIGATION */}
            <Menu />
          </div>
          <Topbar />
        </Layout.Header>
        <Layout.Content style={{ height: '100%', position: 'relative' }}>
          <div className="content-layout">
            <div className="content-layout__frame">
              {children}
            </div>
          </div>
        </Layout.Content>
      </Layout>{' '}
    </Layout>
  )
}

export default withRouter(MainLayout)
