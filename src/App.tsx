
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { LayoutClient } from './component/LayoutClient'
import { Home } from './page/Home'
import { ListProducts } from './page/ListProducts'
import { ProductsDetail } from './page/ProductsDetail'
import UserProfile from './page/Profile'
import LayoutAdmin from './component/LayoutAdmin'
import Dashboard from './admin/Dashboard'

function App() {
 

  return (
   <Routes>
      <Route path='/' element={<LayoutClient><Home/></LayoutClient>}/>
      <Route path='/our-products' element={<LayoutClient><ListProducts/></LayoutClient>}/>
      <Route path='/product-detail' element={<LayoutClient><ProductsDetail/></LayoutClient>}/>
      <Route path='/me' element={<LayoutClient><UserProfile/></LayoutClient>}/>

      <Route path='/admin' element={<LayoutAdmin><Dashboard/></LayoutAdmin>}/>

   </Routes>
    
  )
}

export default App
