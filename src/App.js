import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/homepage/Home';
import Login from './pages/auth/Login';
import Cart from './pages/cart/Cart';
import Products from './pages/products/Products';
import WishList from './pages/wishList/WishList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignUp from './pages/auth/SignUp';

function App() {
  return (
    <>
      <ToastContainer
        position='bottom-center'
        theme='dark'
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/products' element={<Products />} />
        <Route path='/wishlist' element={<WishList />} />
        <Route path='*' element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
