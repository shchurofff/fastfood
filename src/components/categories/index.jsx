import { useState } from 'react'

export const Categories = () => {
  let categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

  const [isActive, setIsActive] = useState(0)

  return (
    <div className="categories">
      <ul>
        {categories.map((category, i) => (
          <li className={isActive === i ? 'active' : ''} onClick={() => setIsActive(i)}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  )
}
