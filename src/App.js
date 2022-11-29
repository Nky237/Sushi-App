import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import SignUp from './Pages/SignUp';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import food1 from './asset/food7.png'
import food2 from './asset/food2.png'
import food3 from './asset/food3.png'
import food4 from './asset/food4.png'
import food5 from './asset/food5.png'
import food6 from './asset/food6.png'


function App() {
  const data = [
    {food: food1, name: 'Sushi'},
    {food: food2, name: 'Yin & Yang'},
    {food: food3, name: 'Pancakes'},
    {food: food4, name: 'Huevos Rancheros'},
    {food: food5, name: 'Rancheros (Tofu)'},
    {food: food6, name: 'Breakkie Roll'},
    {food: food1, name: 'Sushi'},
    {food: food2, name: 'Yin & Yang'},
    {food: food3, name: 'Pancakes'},
    {food: food4, name: 'Huevos Rancheros'},
    {food: food5, name: 'Rancheros (Tofu)'},
    {food: food6, name: 'Breakkie Roll'},
    {food: food1, name: 'Sushi'},
    {food: food2, name: 'Yin & Yang'},
    {food: food3, name: 'Pancakes'},
    {food: food4, name: 'Huevos Rancheros'},
    {food: food5, name: 'Rancheros (Tofu)'},
    {food: food6, name: 'Breakkie Roll'},
    {food: food1, name: 'Sushi'},
    {food: food2, name: 'Yin & Yang'},
    {food: food3, name: 'Pancakes'},
    {food: food4, name: 'Huevos Rancheros'},
    {food: food5, name: 'Rancheros (Tofu)'},
    {food: food6, name: 'Breakkie Roll'},
      ]
  return (
    <div className="App">
        <Router>
        {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Menu</Link>
          </li>
          <li>
            <Link to="/contact">Login</Link>
          </li>
          <li>
            <Link to="/sign">SignUp</Link>
          </li>
        </ul>
      </nav> */}
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='sign' element={<SignUp />} />
          <Route path="cart" element={<Cart />} />
          <Route path="menu" element={<Menu data = {data} />} />
          <Route path="login" element={<Login />} />  
      </Routes>
    </Router>
    </div>
  );
}

export default App;
