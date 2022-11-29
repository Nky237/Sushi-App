import React, {useState} from 'react';
import logo1 from '../asset/logo1.jpg'
import logo2 from '../asset/logo2.png'
import logo3 from '../asset/logo3.png'
import logo4 from '../asset/logo4.png'
import logo5 from '../asset/logo5.png'
import logo7 from '../asset/logo7.png'
import './Menu.css';



const Menu = ({data}) => {
  const[noOfElement, setnoOfElement]  = useState(4)
const loadMore = ()=>{
    setnoOfElement(noOfElement + noOfElement)
}
const loadLess = ()=>{
    setnoOfElement(noOfElement -4)
}
  const slice = data.slice(0, noOfElement);
  return (
    <div className='d-flex pt-5' style={{'backgroundColor': '#E5E5E5'}}>
        <div className='bar d-flex flex-column'>
          <img src={logo1} alt='' /> 
          <img src={logo7} alt='' /> 
          <div className='w-100 pink' style={{'backgroundColor': '#F1D5BB', 'height':'50px'}}>
          <img src={logo3}  alt='' /> 
          </div>
          <img src={logo4} alt='' /> 
          <img src={logo5} alt='' /> 
          <img src={logo2} alt='' /> 
        </div>
        <div style={{'width': '85%'}}>
        <h1 className='text-center'>SUSHI FOOD</h1>
        <div className='d-flex flex-column'>
        <div className='d-flex flex-wrap mx-5 justify-content-end' style={{'width': '80%'}}> 
        {
          data && slice?.map((item, index) =>(
                <div className='m-3 p-3 card mb-4' style={{'width': '20%'}} > 
                    <img src={item?.food} />
                    <p>{item?.name}</p>
                </div>
          ))
       }
        </div>
        <div style={{margin:'70px auto', width: '380px'}} className='d-flex'> 
        <button className='w-100  btn-dark ' onClick={()=> loadMore()}>Load More</button>
        <button className='w-100  mx-4' disabled = {noOfElement == 4}  onClick={()=> loadLess()}>Load Less</button>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Menu