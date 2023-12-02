import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteShirt } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Wishlist() {
    const wisharr=useSelector((state)=>state.wishlistReducer)
  const dispatch=useDispatch()
  const handleCArtWishlist=(shirts)=>{
    dispatch(addToCart(shirts))
    dispatch(deleteShirt(shirts.id))
  }
  return (
    <div>
      <Row >
      { 
      wisharr.length>0?
       wisharr.map((shirts,index)=>(
            
    <Col style={{marginTop:'70px'}} className='mb-5' sm={12} md={6} lg={4} xl={3}>
     <Card  className='shadow rounded bg-light' style={{ width: '18rem',height:'24rem' }}>
     <Card.Img variant="top" style={{height:'250px'}} src={shirts.imageUrl} />
     <Card.Body>
       <Card.Title>{shirts?.category}</Card.Title>
       <Card.Text>
         <h5>$ {shirts?.price}</h5>
       </Card.Text>
  
     <div className='d-flex justify-content-between align-items-center'>
        <Button style={{border:'none',fontSize:'20px'}} onClick={()=>dispatch(deleteShirt(shirts.id))} className='btn btn-light bg-transparent '> <i className='fa-solid fa-trash text-danger' variant></i></Button>
         <Button style={{border:'none',fontSize:'20px'}} onClick={()=>handleCArtWishlist(shirts)}  className='btn btn-light me-3 bg-transparent'> <i class="fa-solid fa-cart-plus text-success" varient></i></Button>
     </div>
     </Card.Body>
   </Card>
   </Col>
       )):<div className='d-flex flex-column w-100 justify-content-center align-items-center'>
         <img className='img-fluid m-5 p-5' height={'400px'} src="https://ibella.us/admin_assets/CustomImage/wishlist-empty.jpg" alt="" />
         
         <Link to='/' className='btn btn-success rounded mb-3'>Back to home</Link></div>}
     </Row>
    </div>
  )
}


export default Wishlist