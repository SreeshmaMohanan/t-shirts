import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { emptyCart, removeFromCart } from '../redux/slices/cartSlice'

function Cart() {
    const cartArr=useSelector(state=>state.cartReducer)
    const dispatch =useDispatch()
    const[total,setTotal]=useState(0)
    const navigate=useNavigate()
    const totalCartAmount=()=>{
        if(cartArr.length>0){
          setTotal(cartArr.map(item=>item.price).reduce((s1,s2)=>s1+s2))
        }else{
          setTotal(0)
        }
      }
    const handleCart=()=>{
        dispatch(emptyCart())
        alert("Order placed successfully!!!")
        navigate('/')
      }
      useEffect(()=>{
        totalCartAmount()
      },[cartArr])
  return (
    <div>{
        cartArr?.length>0?
        
         <div className='row'>
           <div className='col-sm-12'>
           <table style={{marginTop:'100px'}} className='table table-sm ms-5 me-5  table-striped shadow w-75 p-5'>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    cartArr.map((product,index)=>(<tr>
  
                    <td>{index+1}</td>
                    <td>{product?.category}</td>
                    <td>${product?.price}</td>
                    <td><button className='btn btn-transparent' onClick={()=>dispatch(removeFromCart(product.id))}><i className='fa-solid fw-bold fa-trash text-danger'></i></button></td>
                  </tr> ))
                  }
                  {
                    <tr>
                        <th><p>Total</p></th>
                        <th><p>Total Products: {cartArr.length}</p></th>
                        <th colSpan={'2'}><p>Total Price:${total}</p></th>
                    </tr>
                  }
                </tbody>
              </table>
              <div className="w-25 ms-auto"><button onClick={handleCart} className='btn btn-dark m-5 rounded'>Check-out</button></div>
          </div>
             
           
           </div>
           
       :<div className='d-flex flex-column w-100 justify-content-center align-items-center'>
        <img className=' img-fluid' height={'400px'} src="https://cdn.dribbble.com/users/2046015/screenshots/4591856/first_white_girl_drbl.gif" alt="" />
        <h3 className='fw-bolder text-dark mt-3'>Your cart is empty!!!</h3>
        <Link to='/' className='btn btn-success rounded mb-3'>Back to home</Link></div>
      }
      </div>
     
  )
}

export default Cart