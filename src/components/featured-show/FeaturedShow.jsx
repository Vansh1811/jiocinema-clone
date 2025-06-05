import styles from './featured-show.module.css'

const FeaturedShow = ({ movie }) => {
  if (!movie) {
    return null // or return a fallback UI, like a loading spinner or "No movie available"
  }

  return (
    <div className={styles.featuredShow}>
      <img src={movie.imageUrl} alt="poster" />
      <div className={styles.movieTitle}>
        {movie.title}
      </div>
    </div>
  )
}

export default FeaturedShow
