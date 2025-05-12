import { useEffect, useState } from 'react'
import { Categories } from '../../components/categories'
import { PizzaBlock } from '../../components/pizza-block'
import { Skeleton } from '../../components/pizza-block/skeleton'
import { Sort } from '../../components/sort'

export const Menu = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const [isActiveCategory, setIsActiveCategory] = useState(0)
  const [sortValue, setSortValue] = useState({ name: 'популярности', sort: 'rating' })

  useEffect(() => {
    setIsLoading(true)
    fetch(
      `https://681d2344f74de1d219aee895.mockapi.io/items?${
        isActiveCategory > 0 ? `category=${isActiveCategory}` : ''
      }&sortBy=${sortValue.sort}&order=desc`
    )
      .then((responce) => {
        return responce.json()
      })
      .then((json) => {
        setItems(json)
        setIsLoading(false)
        window.scrollTo(0, 0)
      })
  }, [isActiveCategory, sortValue])
  return (
    <div className="container">
      <div className="content__top">
        <Categories value={isActiveCategory} setIsActiveCategory={(i) => setIsActiveCategory(i)} />
        <Sort value={sortValue} setSortValue={(i) => setSortValue(i)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
          : items.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)}
      </div>
    </div>
  )
}
