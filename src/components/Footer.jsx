import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div>
         <div style={{width:'100%',height:'500px'}}className='bg-dark text-light d-flex justify-content-center align-items-center flex-wrap'>
        <Row className='d-flex flex-row justify-content-evenly m-3' >
            <Col lg={4} md={12} sm={12}  style={{width:'400px'}}>
                <h4 className='text-light'>
               {" "}
              Tee-Rex</h4>
              <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum vero saepe repellendus voluptatum delectus ullam.</p>

            </Col>
            <Col lg={3} md={12} sm={12} className='d-flex flex-column'>
            <h4 className='text-light'>Links</h4>
                <Link to={'/home'} className='' style={{textDecoration:'none',color:'black'}}>
                    Home
                </Link>
                <Link to={'/cart'} className='' style={{textDecoration:'none',color:'black'}}>
                    Cart
                </Link>
                <Link to={'/wishlist'} className='' style={{textDecoration:'none',color:'black'}}>
                    Wishlist
                </Link>
            </Col>
           
           <Col lg={3} md={12} sm={12}>
           <h4 className='text-light'>Contact Us</h4>
                <Link to={'/home'} className='' style={{textDecoration:'none',color:'black'}}>
                    contact
                </Link>
             <div className='d-flex'>
                   <input type="text" className='rounded border-none' placeholder='enter your email'/> <button className=' btn btn-danger ms-3'>Subscribe</button>
                   
             </div>
             <div className='mb-5'>
             <i class="fa-brands fa-instagram fs-4 m-2"></i>
             <i class="fa-brands fa-facebook fs-4 m-2"></i>
             <i class="fa-brands fa-twitter fs-4 m-2"></i>
             <i class="fa-brands fa-whatsapp fs-4 m-2"></i>
             </div>
            


            
            </Col>

        </Row>
       
        
    </div>
    </div>
  )
}

export default Footer