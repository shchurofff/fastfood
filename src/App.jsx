import { useEffect, useState } from 'react'
import { Categories } from './components/categories'
import { Header } from './components/header'
import { PizzaBlock } from './components/pizza-block'
import { Sort } from './components/sort'
import './scss/app.scss'
import { Skeleton } from './components/pizza-block/skeleton'

function App() {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('https://681d2344f74de1d219aee895.mockapi.io/items')
      .then((responce) => {
        return responce.json()
      })
      .then((json) => {
        setItems(json)
        setIsLoading(false)
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
            {isLoading
              ? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
              : items.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
