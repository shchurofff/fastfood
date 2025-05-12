import { Route, Routes } from 'react-router'
import { Header } from './components/header'
import { Cart } from './pages/cart'
import { Menu } from './pages/menu'
import { NotFound } from './pages/not-found'
import './scss/app.scss'
import { useState } from 'react'

function App() {
  const [searchValue, setSearchValue] = useState('')
  console.log(searchValue)

  return (
    <div className="wrapper">
      <Header value={searchValue} searching={(value) => setSearchValue(value)} />
      <div className="content">
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
