import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Cart from './components/Cart';
import Header from './components/Header';
import Footer from './components/Footer';
import Wishlist from './components/Wishlist';

function App() {
  return (
    <p>
        <Header/>
      <div>
       
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/wishlist' element={<Wishlist/>}/>
  
        </Routes>
        
       
      </div>
      <Footer/>
    </p>
  );
}

export default App;
