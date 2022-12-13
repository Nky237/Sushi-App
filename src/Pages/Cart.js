import React, { useState } from 'react'
import logo1 from '../asset/logo1.jpg'
import logo2 from '../asset/logo2.png'
import logo3 from '../asset/logo3.png'
import logo4 from '../asset/logo4.png'
import logo5 from '../asset/logo5.png'
import logo7 from '../asset/logo7.png'
import './Menu.css'
import { Link } from 'react-router-dom'
import food3 from '../asset/food3.png'
import food4 from '../asset/food4.png'
import food5 from '../asset/food5.png'
import food6 from '../asset/food6.png'
import './Cart.css'
import Button from '../components/Button'


const Cart = ({data}) => {
  let user = JSON.parse(sessionStorage.getItem('user'))
  const[Count, setCount] = useState(0)
  const Increase = ()=>{
      setCount(Count => Count + 1)
  }
  const decrease = ()=>{
      setCount(Count => Count - 1)
  }
  const Reset = ()=>{
      setCount(0)
  }
  
  return (
    <div>
      <h1>{`WELCOME ${user?.name}`}</h1>
      <div className='d-flex all'>
      <div className='bar d-flex flex-column'>
         <Link to='/menu'><img src={logo1} alt='' /></Link>  
          <img src={logo7} alt='' /> 
          <div className='w-100 pink' style={{'backgroundColor': '#F1D5BB', 'height':'50px'}}>
          <img src={logo3}  alt='' /> 
          </div>
          <Link to='/cart'> <img src={logo4} alt=''/> </Link> 
          <img src={logo5} alt='' /> 
          <img src={logo2} alt='' /> 
        </div>
        <div className='cont mt-4 d-flex'>
            <div className='first'>
            <h1 className='pt-3 text-center'>CART</h1>
              <div className='d-flex conty justify-content-around'> 
              <span className='d-flex'>
                <img src={food3} />
                <div>
                <p>SmashedA</p> 
                <p>$20.00</p>
                </div>                
                </span>
                <p className='coun'>{Count}</p>
              <p onClick={Increase} className ='fw-bolder'>+</p>
              <p onClick={Reset} className ='fw-bolder'>R</p>
             <p onClick={decrease} className ='fw-bolder' disabled = {Count == 0}>X</p>
                </div>
              <div className='d-flex justify-content-around'> 
                <span className='d-flex'>
                <img src={food4} />
                <div>
                <p>Yin & Yang</p>
                <p>$20.00</p>
                </div> 
                </span>
                <p className='coun'>{Count}</p>
              <p onClick={Increase} className ='fw-bolder'>+</p>
              <p onClick={Reset} className ='fw-bolder'>R</p>
             <p onClick={decrease} className ='fw-bolder' disabled = {Count == 0}>X</p>
              </div>
              <div className='d-flex justify-content-around'> 
              <span className='d-flex'>
              <img src={food5} />
              <div>
              <p>Pancakes</p> 
              <p>$20.00</p> 
              </div>
              </span>
              <p className='coun'>{Count}</p>
              <p onClick={Increase} className ='fw-bolder'>+</p>
              <p onClick={Reset} className ='fw-bolder'>R</p>
             <p onClick={decrease} className ='fw-bolder' disabled = {Count == 0}>X</p>
            </div>
            <div className='d-flex justify-content-around'>
              <span className='d-flex'>
              <img src={food6} />
             <div>
             <p>Ranchero</p> 
              <p>$20.00</p> 
             </div>
              </span>
              <p className='coun'>{Count}</p>
              <p onClick={Increase} className ='fw-bolder'>+</p>
              <p onClick={Reset} className ='fw-bolder'>R</p>
             <p onClick={decrease} className ='fw-bolder' disabled = {Count == 0}>X</p>
            </div>
            </div>
            <div className='second'>
              <div className='sec-text' style={{'backgroundColor': '#F1D5BB'}}>
                <div className='inside'>
                <h2>Your Subtotal</h2>
                <span>Subtotal</span> <span>$80.00</span>
                <Button text={'Confirm Order'} className='w-100' />
                </div>
              </div>
              <div className='sec-text pt-3'>
                <h2>Promo Code</h2>
                <span>enter promo code</span> 
                <Button text={'Apply'}  />
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Cart