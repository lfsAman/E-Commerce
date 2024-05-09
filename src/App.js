
import './App.css';
import AdminRouters from './Routers/AdminRouters';
import CoustmerRouter from './Routers/CoustmerRouter';
import Cart from './customer/components/Cart/Cart';
import Checkout from './customer/components/Checkout/Checkout';
import Footer from './customer/components/Footer/Footer';
import Navigation from "./customer/components/Navigation/Navigation"
import Order from './customer/components/Order/Order';
import OrderDetails from './customer/components/Order/OrderDetails';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';
import Product from './customer/components/Products/Product';
import HomePage from './customer/pages/HomePage/HomePage.jsx';
import { Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="">

      <Routes>
        <Route path='/*' element={<CoustmerRouter/>}/>
        <Route path='/admin/*' element={<AdminRouters/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
