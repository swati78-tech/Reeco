// src/components/ProductsTable.js

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../ActionCreators'
import styled from 'styled-components'
import TickCrossToggle from './TickCrossToggle'
import myImage from '../assets/AppleGreenSmith.png'

const ContentWrapper = styled.div`
  border: 2px solid #f1f1f1;
  border-radius: 16px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  padding: 16px;
  margin: 16px 100px;
`

const TableWrapper = styled.header``

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`

const TableHead = styled.thead`
  background-color: #f5f5f5;
`

const TableHeaderCell = styled.th`
  padding: 12px;
  text-align: left;
  border-bottom: 2px solid #ddd;
`
const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`

const TableCell = styled.td`
  padding: 12px;
  text-align: center;
  border-bottom: 1px solid #ddd;
`
const SearchField = styled.input`
  padding: 12px;
  width: 40%;
  border: 2px solid #f1f1f1;
  border-radius: 16px;
  margin-bottom: 12px;
`

const ProductsTable = () => {
  const dispatch = useDispatch()
  const produts = useSelector((state) => state.products.products)
  const loading = useSelector((state) => state.products.loading)
  const error = useSelector((state) => state.products.error)

  // const [dataProduts, setDataProduts] = useState(produts)
  const [searchInput, setSearchInput] = useState('')

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  // useEffect(() => {
  //   // Function to filter produts based on search criteria
  //   const filterdProducts = dataProduts.filter((product) =>
  //     product.title.toLowerCase().includes(searchInput.toLowerCase())
  //   )
  //   setDataProduts(filterdProducts)
  // }, [searchInput, dataProduts])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value)
  }

  return (
    <ContentWrapper>
      <SearchField
        id='searchfield'
        type='text'
        placeholder='Search....'
        value={searchInput}
        onChange={handleSearchInputChange}
      />
      <TableWrapper>
        <Table>
          <TableHead>
            <tr>
              <TableHeaderCell></TableHeaderCell>
              <TableHeaderCell>Product Name</TableHeaderCell>
              <TableHeaderCell>Brand</TableHeaderCell>
              <TableHeaderCell>Price</TableHeaderCell>
              <TableHeaderCell>Quantity</TableHeaderCell>
              <TableHeaderCell>Total</TableHeaderCell>
              <TableHeaderCell>Status</TableHeaderCell>
            </tr>
          </TableHead>
          <tbody>
            {produts.map((member) => (
              <TableRow key={member.id}>
                <TableCell>
                  <img src={myImage} alt='apple' style={{ width: '24px' }} />
                </TableCell>
                <TableCell>{member.title + ',' + member.description}</TableCell>
                <TableCell>{member.brand}</TableCell>
                <TableCell>{member.price}</TableCell>
                <TableCell>{member.quantity}</TableCell>
                <TableCell>{member.quantity * member.price}</TableCell>
                <TableCell style={{ width: '200px' }}>
                  <TickCrossToggle />
                </TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </TableWrapper>
    </ContentWrapper>
  )
}

export default ProductsTable
