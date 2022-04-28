import { Routes, Route } from 'react-router-dom';

import Home from './routes/Home/Home.component';
import Navigation from './routes/Navigation/Navigation.component';
import ProductDetails from './routes/ProductDetails/ProductDetail.component';

const Cart = () => {
  return (
    <>
      <h1>Cart Page</h1>
      <div>

      </div>
    </>
  )
}

const Profile = () => {
  return (
    <>
      <h1>Profile</h1>
      <div>

      </div>
    </>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path='/product-details' element={<ProductDetails />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/profile' element={<Profile />} />
      </Route>
    </Routes>
  )
};

export default App;
