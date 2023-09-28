import React from 'react'
import styled from 'styled-components'

const HeaderWrapper = styled.header`
  background-color: #3cb371;
  padding: 16px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled.h1`
  color: #fff;
  margin: 0;
  font-size: 24px;
  margin-right: 32px;
`

const Nav = styled.nav``

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 40px;
`

const NavItem = styled.li``

const NavLink = styled.a`
  text-decoration: none;
  color: #fff; /* Change the link color as needed */
  font-weight: bold;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`
const IconsWrapper = styled.div`
  display: flex;
  gap: 20px;
`

const CartIcon = styled.div`
  width: 24px;
  height: 24px;
  background-color: #fff;
  cursor: pointer;
`
const NameText = styled.div`
  font-size: 12px;
  color: #fff;
  cursor: pointer;
`
const DropdownIcon = styled.div`
  width: 8px;
  height: 8px;
  background-color: #fff;
  cursor: pointer;
`

const NavigationHeader = () => {
  return (
    <HeaderWrapper>
      <Logo>Recoo</Logo>
      <Nav>
        <NavList>
          <NavItem>
            <NavLink>Store</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Order</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Analytics</NavLink>
          </NavItem>
        </NavList>
      </Nav>
      <IconsWrapper>
        <CartIcon />
        <NameText>Hello, Swati</NameText>
        <DropdownIcon />
      </IconsWrapper>
    </HeaderWrapper>
  )
}

export default NavigationHeader
