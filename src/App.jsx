import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Order from './components/Order'
import ProductsList from './components/ProductsList'
import ProductEdit from './components/ProductEdit'
import AddProduct from './components/AddProducts'
import ApprovedOrder from './components/ApprovedOrder'
import CancelOrder from './components/CancelOrder'
import Bestseller from './components/BestSeller'
import SiteDetail from './components/SiteDetail'
import CloudBox from './components/CloudBox'
import Login from './components/Login'
import SignUp from './components/SignUp'
import { createContext, useState } from 'react'

export const MyContext = createContext();

function App() {

  const [sidebarMove, setSidebarMove] = useState(false);


  function toggleSideNav() {
    setSidebarMove(!sidebarMove);
  }

  return (

    <div className={sidebarMove === true ? "nav_open sidebar_minimize" : ""}>

      <MyContext.Provider value={{ sidebarMove, setSidebarMove, toggleSideNav }}>
        <BrowserRouter>
          <Routes>
            <Route path="/xx" element={<Home />} />
            <Route path="/" element={<Order />} />
            <Route path="/products-list" element={<ProductsList />} />
            <Route path="/approved-order" element={<ApprovedOrder />} />
            <Route path="/cancel-order" element={<CancelOrder />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/best-seller" element={<Bestseller />} />
            <Route path="/site-detail" element={<SiteDetail />} />
            <Route path="/up-box" element={<CloudBox />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/product-edit/:id" element={<ProductEdit />} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>

    </div>
  )
}

export default App
