import React from 'react'
import { Nav, Navbar, Container, Badge, Col, Row, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
// import { useSelector } from 'react-redux'
import { Form, Link } from 'react-router-dom'
import { searchShirts } from '../redux/slices/tshirtSlice'

function Header() {
    const whishlist = useSelector((state) => state.wishlistReducer)
    const cart = useSelector((state) => state.cartReducer)
    const dispatch = useDispatch()

    return (
        <div>
            <Navbar style={{ zIndex: '1' }} expand="lg" className="bg-dark position-fixed w-100">
                <Container>
                    <Navbar.Brand className='bold text-light'>Tee-Rex</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link className='btn rounded m-2 p-2' ><Link style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }} to='/wishlist'><i className='fa-solid fa-heart text-warning'></i> Wishlist <Badge className='ms-2 rounded' bg="secondary">
                                {whishlist.length}
                            </Badge> </Link></Nav.Link>
                            <Nav.Link className='btn rounded m-2 p-2' ><Link style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }} to='/cart'> <i className='fa-solid fa-cart-shopping text-warning me-2'></i>
                                Cart
                                <Badge className='ms-2 rounded' bg="secondary">
                                    {cart.length}
                                </Badge></Link></Nav.Link>
                            <div className='d-flex p-3 align-items-center'>
                                <input onChange={(e) => dispatch(searchShirts(e.target.value))} type="text" className='form-control' placeholder='search by category' />
                               <i style={{ marginLeft: '-30px' }} class="fa-solid fa-magnifying-glass fa-rotate-90"></i>
                            </div>


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header