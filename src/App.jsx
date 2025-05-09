import { useEffect, useState } from 'react'
import { Categories } from './components/categories'
import { Header } from './components/header'
import { PizzaBlock } from './components/pizza-block'
import { Sort } from './components/sort'
import './scss/app.scss'

function App() {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('https://681d2344f74de1d219aee895.mockapi.io/items')
      .then((responce) => {
        return responce.json()
      })
      .then((json) => {
        setItems(json)
      })
  }, [])

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {items.map((pizza) => (
              <PizzaBlock key={pizza.id} {...pizza} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
