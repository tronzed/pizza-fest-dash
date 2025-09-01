import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Order from './components/Order'
import Products from './components/Products'
import ProductDetail from './components/ProductDetail'

function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/orders" element={<Order />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product-edit/:id" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
