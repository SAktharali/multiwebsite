import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Hero from './pages/Hero'
import Images from './pages/Images'
import Todo from './pages/Todo'
import Gallery from './pages/Gallery'
import Register from './pages/Register'
const App = () => {
  return (
 
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/hero' element={<Hero/>}/>
    <Route path='/images' element={<Images/>}/>
    <Route path='/todo' element={<Todo/>}/>
    <Route path='/gallery' element={<Gallery/>}/>
    <Route path='/register' element={<Register/>}/>
   </Routes>
  )
}

export default App