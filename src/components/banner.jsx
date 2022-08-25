import styles from "./banner.module.css"

const Banner = ({buttonText = 'Find Cafe', handleClick}) => {
  return (
    <div className={styles.container}>
      <div className={styles.heroText}>
        <h1 className={styles.logo}>Café Studio</h1>
        <p className={styles.subTitle}>We know the best coffee shops near you</p>
        <button onClick={handleClick} className={styles.button}>
          {buttonText}
        </button>
      </div>
      <div className={styles.heroImage} />
    </div>
  )
}

export default Banner;