import React from 'react'
import { Layout as AntLayout, Menu } from 'antd'
import styled from 'styled-components'

const { Header, Content } = AntLayout

const StyledContent = styled(Content)`
  padding: 1rem;
`

export default function Layout({ children }) {
  return (
    <AntLayout>
      <Header>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['/']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="/">Home</Menu.Item>
          <Menu.Item key="/posts">Posts</Menu.Item>
          <Menu.Item key="/users">Users</Menu.Item>
          <Menu.Item key="/todos">Todos</Menu.Item>
        </Menu>
      </Header>
      <StyledContent>{children}</StyledContent>
    </AntLayout>
  )
}
