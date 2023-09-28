import React from 'react'
import styled from 'styled-components'

const HeaderWrapper = styled.header`
  background-color: #fff; /* Change the background color as needed */
  padding: 16px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2); /* Add the box shadow here */
`

const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const OrderText = styled.p`
  margin: 0;
  font-size: 18px;
`

const OrderId = styled.p`
  margin: 0;
  font-size: 18px;
`

const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

const Button = styled.button`
  background-color: transparent;
  border: none;
  //   color: #fff; /* Change the button text color as needed */
  font-weight: bold;
  cursor: pointer;
  font-size: 18px;
  &:hover {
    text-decoration: underline;
  }
`

const Header = () => {
  return (
    <HeaderWrapper>
      <OrderInfo>
        <OrderText>Order</OrderText>
        <OrderId>Order ID: 12345</OrderId>
      </OrderInfo>
      <OrderId>Order ID: 12345</OrderId>
      <ActionButtons>
        <Button>Back</Button>
        <Button>Approve Order</Button>
      </ActionButtons>
    </HeaderWrapper>
  )
}

export default Header
