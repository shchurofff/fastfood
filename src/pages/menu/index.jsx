import { useEffect, useState } from 'react'
import { Categories } from '../../components/categories'
import { PizzaBlock } from '../../components/pizza-block'
import { Sort } from '../../components/sort'
import { Skeleton } from '../../components/pizza-block/skeleton'

export const Menu = () => {
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
    <>
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
    </>
  )
}
