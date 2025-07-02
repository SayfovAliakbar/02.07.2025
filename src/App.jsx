import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/home/home'
import Layout from './pages/layout/layout'
import About from './pages/about/about'
import Vacancies from './pages/vacancies/vacancies'
import News from './pages/news/news'
import Statiya from './pages/statiya/statiya'
import Contact from './pages/contact/contact'
import Other from './pages/other/other'
import Takelaj from './pages/takelaj/takelaj'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='vacancies' element={<Vacancies/>}/>
        <Route path='news' element={<News/>}/>
        <Route path='statiya' element={<Statiya/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='other' element={<Other/>}/>
        <Route path='takelaj' element={<Takelaj/>}/>
      </Route>
    </Routes>
  )
}

export default App