import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../redux/slices/cartSlice'
import { addToWishList } from '../redux/slices/wishlistSlice'

function Tcard({shirts}) {
    const allTshirts = useSelector((state)=>state.tshirtSlice.allTshirts)
    const dispatch=useDispatch()
  return (
    <>
      <Card  className='shadow rounded bg-light border' style={{ width: '18rem',height:'27rem',marginTop:'90px' }}>
          <Card.Img className='img-fluid rounded mt-1' variant="top" style={{height:'250px'}} 
          src={shirts?.imageUrl}
          />
          <Card.Body>
            <Card.Title>Category : <span className='text-danger'>{shirts?.category}</span></Card.Title>
            <Card.Text>
                <p>{shirts?.name}</p>
              <h5 className='text-dark fw-bolder'>$ {shirts?.price}</h5>
            </Card.Text>
    
          <div className='d-flex justify-content-between align-items-center'>
             <Button style={{border:'none',fontSize:'20px'}} onClick={()=>dispatch(addToWishList(shirts))}  className='btn btn-light  ps-3 pe-3' > <i className='fa-solid fa-heart text-danger' variant></i></Button>
              <Button style={{border:'none',fontSize:'20px'}}onClick={()=>dispatch(addToCart(shirts))}   className='btn btn-light ps-3 pe-3'> <i class="fa-solid fa-cart-plus text-success" varient></i></Button>
          </div>
          </Card.Body>
        </Card></>
  )
}

export default Tcard