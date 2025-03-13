
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './NavBar'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import Footer from './Footer'
import Product from './product'
import ProductSinglePage from './ProductSinglePage'
import { CartProvider } from './Cart'



function App() {
  

  return (
  
    < CartProvider>
      <BrowserRouter>
      <NavBar/>
      
     <Routes>
      <Route path='/' element={<Home/>}></Route> 
      <Route path='/About' element={<About/>}></Route>
      <Route path='/products' element={<Product/>}></Route>
      <Route path='/Contact' element={<Contact/>}></Route>
      <Route path='/Product/:id' element={<ProductSinglePage/>}></Route>
      
     </Routes>
    
     <Footer/>
     </BrowserRouter>  
     </CartProvider>
  )
}

export default App
