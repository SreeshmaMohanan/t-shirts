import React, { useEffect } from 'react'
import { Row,Col, Card,Button } from 'react-bootstrap'
import { addToWishList } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { fetchShirts } from '../redux/slices/tshirtSlice'
import Tcard from './Tcard'

function Home() {
  const allTshirts = useSelector((state)=>state.tshirtSlice.allTshirts)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchShirts())

  },[])
  return (
    <div>
        <Row  className='ms-5'>
        { 
        allTshirts.length>0?allTshirts.map(shirts=>(
        <Col className='mb-2' sm={12} md={6} lg={4} xl={3}>
        <Tcard shirts={shirts}/> 
        </Col>)):
       <p className='text-danger fw-folder fs-4'>Nothing to display!!!</p>}
        </Row>
    </div>
  )
}

export default Home