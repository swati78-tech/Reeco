import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  margin: 16px 100px;
  flex-wrap: nowrap;
  border: 2px solid #f1f1f1;
  border-radius: 16px;
`
const ItemContainer = styled.div`
  height: 100px;
  width: 15%;
  margin: 3px;
  text-align: center;
`
const TitleText = styled.p`
  font-size: 16px;
`
const DescriptionText = styled.p`
  font-size: 16px;
  font-weight: bold;
`
const Divider = styled.div`
  margin: 16px;
  background-color: #f1f1f1;
  width: 2px;
  height: 80px;
`

const ProductStatus = () => {
  return (
    <Container>
      <ItemContainer>
        <TitleText>Supplier</TitleText>
        <DescriptionText>East Cost Fruits & vegitables</DescriptionText>
      </ItemContainer>
      <Divider></Divider>
      <ItemContainer>
        <TitleText>Shipping date</TitleText>
        <DescriptionText>Thu, Feb 10</DescriptionText>
      </ItemContainer>
      <Divider></Divider>
      <ItemContainer>
        <TitleText>Total</TitleText>
        <DescriptionText>15028.3</DescriptionText>
      </ItemContainer>
      <Divider></Divider>
      <ItemContainer>
        <TitleText>Category</TitleText>
        <DescriptionText>Icons</DescriptionText>
      </ItemContainer>
      <Divider></Divider>
      <ItemContainer>
        <TitleText>Department</TitleText>
        <DescriptionText>300-444-678</DescriptionText>
      </ItemContainer>
      <Divider></Divider>
      <ItemContainer>
        <TitleText>Status</TitleText>
        <DescriptionText>Awaiting your approval</DescriptionText>
      </ItemContainer>
    </Container>
  )
}

export default ProductStatus
