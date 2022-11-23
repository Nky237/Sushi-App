import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignUp from './Pages/SignUp';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
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
          <Route path="menu" element={<Menu />} />
          <Route path="login" element={<Login />} />  
      </Routes>
    </Router>
    </div>
  );
}

export default App;
