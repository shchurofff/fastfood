import { Route, Routes } from 'react-router'
import { Header } from './components/header'
import { Cart } from './pages/cart'
import { Menu } from './pages/menu'
import { NotFound } from './pages/not-found'
import './scss/app.scss'

function App() {
  return (
    <div className="wrapper">
      <Header />
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
