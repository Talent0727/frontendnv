import '../style/App.css';
import Home from '../features/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutInfo from '../features/Layout/AboutInfo';
import FaqInfo from '../features/views/FaqInfo';
import Location from '../features/views/Location';
import OptionsOne from '../features/views/OptionsOne';
import OptionsTwo from '../features/views/OptionsTwo';
import Shop from '../features/products/Shop';
import Login from '../features/Login/Login';
import Register from '../features/Login/Register';
import Wish from '../features/wish/Wish';
import Cart from '../features/shopping/Cart';
import Account from '../features/Login/Account';
import Blog from '../features/blogs/Blog';
import BlogItem from '../components/blogs/BlogItem';
import Product from '../features/products/Product';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Order from '../features/orders/Order';

function App() {
  return (
    <>
      <ToastContainer position='bottom-center' limit={1} />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutInfo />} />
          <Route path='/faq' element={<FaqInfo />} />
          <Route path='/location' element={<Location />} />
          <Route path='/options1' element={<OptionsOne />} />
          <Route path='/options2' element={<OptionsTwo />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/wish' element={<Wish />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/account' element={<Account />} />
          <Route path='/blogs' element={<Blog />} />
          <Route path='/blogs/:id' element={<BlogItem />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='/order/:id' element={<Order />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
