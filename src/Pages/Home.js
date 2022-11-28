import React from 'react'
import Bg from '../asset/Bg.png'
import chef3 from '../asset/chef3.jpg'
import chef2 from '../asset/chef2.jfif'
import chef1 from '../asset/chef1.jfif'
import './Home.css'
import Button from '../components/Button'
import SignUp from './SignUp'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div className='Home'>
      <Carousel>
      <Carousel.Item>
      <div className='home-img'>
        <img src={Bg} alt='bg-image' />
      </div>
        <Carousel.Caption>
        <div className='home-text'>
        <h1>WELCOME TO SUSHI FOOD APP</h1>
        <p>
        People eat with their eyes and Sushi creates an easy way for customers to order when they 
        can see beautiful photos of your food
        </p>
        <div className='btn d-flex justify-content-center'>
         <Link to='/login'><Button  text='LOGIN'/></Link>
         <Link to='/sign'><Button text={'SIGNUP'}/></Link> 
        </div>
    </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className='home-img'>
        <img src={chef3} alt='bg-image' />
      </div>
        <Carousel.Caption>
        <div className='home-text'>
        <h1>YOU HAVE COME TO THE RIGHT PLACE</h1>
        <p>
        People eat with their eyes and Sushi creates an easy way for customers to order when they 
        can see beautiful photos of your food
        </p>
        <div className='btn d-flex justify-content-center'>
        <Link to='/login'><Button  text='LOGIN'/></Link>
         <Link to='/sign'><Button text={'SIGNUP'}/></Link> 
        </div>
    </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className='home-img'>
        <img src={chef2} alt='bg-image' />
      </div>
        <Carousel.Caption>
        <div className='home-text'>
        <h1>WE ARE HERE TO GIVE YOU THE BEST</h1>
        <p>
        People eat with their eyes and Sushi creates an easy way for customers to order when they 
        can see beautiful photos of your food
        </p>
        <div className='btn d-flex justify-content-center'>
        <Link to='/login'><Button  text='LOGIN'/></Link>
         <Link to='/sign'><Button text={'SIGNUP'}/></Link> 
        </div>
    </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className='home-img'>
        <img src={chef1} alt='bg-image' />
      </div>
        <Carousel.Caption>
        <div className='home-text'>
        <h1>ARE YOU READY TO TASTE OUR FOOD</h1>
        <p>
        People eat with their eyes and Sushi creates an easy way for customers to order when they 
        can see beautiful photos of your food
        </p>
        <div className='btn d-flex justify-content-center'>
        <Link to='/login'><Button  text='LOGIN'/></Link>
         <Link to='/sign'><Button text={'SIGNUP'}/></Link> 
        </div>
    </div>
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Home