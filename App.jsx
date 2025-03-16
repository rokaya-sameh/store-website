
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
import Pokie from './Pokie'
import Meals from './Meals'
import SingleMeal from './SingleMeal'
import HomesSinglePage from './singleHome'




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
      <Route path='/pokie' element={<Pokie/>}></Route>
      <Route path='/Meals' element={<Meals/>}></Route>
      <Route path='/Product/:id' element={<ProductSinglePage/>}></Route>
      <Route path='/Meals/:id' element={<SingleMeal/>}></Route>
      <Route path='/Home/:id' element={<HomesSinglePage/>}></Route>
      
     </Routes>
    
     <Footer/>
     </BrowserRouter>  
     </CartProvider>
  )
}

export default App
