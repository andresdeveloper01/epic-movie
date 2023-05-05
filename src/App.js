import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Details from './pages/Details'
import Home from './pages/Home'
import List from './pages/List'
import SearchedMovies from './pages/SearchedMovies'

function App () {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/list/:search/:page' element={<List />} />
        <Route path='/details/:id' element={<Details />} />
        <Route path='/search/:keyword' element={<SearchedMovies />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
