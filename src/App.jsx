import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Order from './components/Order'
import ProductsList from './components/ProductsList'
import ProductEdit from './components/ProductEdit'
import AddProduct from './components/AddProducts'

function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/orders" element={<Order />} />
          <Route path="/products-list" element={<ProductsList />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/product-edit/:id" element={<ProductEdit />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
