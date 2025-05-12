import styles from './index.module.scss'

export const SearchInput = ({ value, searching }) => {
  return (
    <div className={styles.container}>
      <input
        value={value}
        onChange={() => searching(event.target.value)}
        className={styles.search}
        type="text"
        placeholder="Поиск пиццы..."
      />
    </div>
  )
}
