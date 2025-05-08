import { Categories } from './components/categories'
import { Header } from './components/header'
import { PizzaBlock } from './components/pizza-block'
import { Sort } from './components/sort'
import './scss/app.scss'
import pizzas from './assets/db.json'

function App() {
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
            {pizzas.map((pizza) => (
              <PizzaBlock {...pizza} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
