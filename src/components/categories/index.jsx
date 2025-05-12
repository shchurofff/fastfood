export const Categories = ({ value, setIsActiveCategory }) => {
  let categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

  return (
    <div className="categories">
      <ul>
        {categories.map((category, i) => (
          <li
            key={i}
            className={value === i ? 'active' : ''}
            onClick={() => setIsActiveCategory(i)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  )
}
