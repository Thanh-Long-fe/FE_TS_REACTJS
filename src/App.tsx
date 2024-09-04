
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { LayoutClient } from './component/LayoutClient'
import { Home } from './page/Home'
import { ListProducts } from './page/ListProducts'
import { ProductsDetail } from './page/ProductsDetail'
import UserProfile from './page/Profile'
import LayoutAdmin from './component/LayoutAdmin'
import Dashboard from './admin/Dashboard'
import TableProducts from './admin/Products'
import ProductForm from './admin/ProductForm'
import UserTable from './admin/User'
import TableOrders from './admin/Order'

function App() {
 

  return (
   <Routes>
      <Route path='/' element={<LayoutClient><Home/></LayoutClient>}/>
      <Route path='/our-products' element={<LayoutClient><ListProducts/></LayoutClient>}/>
      <Route path='/product-detail' element={<LayoutClient><ProductsDetail/></LayoutClient>}/>
      <Route path='/me' element={<LayoutClient><UserProfile/></LayoutClient>}/>

      <Route path='/admin' element={<LayoutAdmin><Dashboard/></LayoutAdmin>}/>
      <Route path='/admin/products' element={<LayoutAdmin><TableProducts/></LayoutAdmin>}/>
      <Route path='/admin/user' element={<LayoutAdmin><UserTable/></LayoutAdmin>}/>
      <Route path='/admin/order' element={<LayoutAdmin><TableOrders/></LayoutAdmin>}/>
      <Route path='/admin/products/add' element={<LayoutAdmin><ProductForm/></LayoutAdmin>}/>


   </Routes>
    
  )
}

export default App
