import styles from './header.module.css'
import JCLogo from '../../assets/jc_logo_v2.svg'
import crown from '../../assets/crown.svg'
import searchIcon from '../../assets/ic_search.svg'
import voiceSearchIcon from '../../assets/voice-search.svg'
import jioIcon from '../../assets/jio-logo.png'
import { useEffect, useState } from 'react'
import Show from '../show/Show'

const Header = (props) => {
  const navLinks = ["Home", "Sports", "Movies", "TV Shows", "More"]
  const [searchTitle, setSearchTitle] = useState("")
  const [filteredMovies, setFilteredMovies] = useState([])

  useEffect(() => {
    if (searchTitle !== "") {
      const filterMovies = props.movies.filter((movie) =>
        movie.title.toUpperCase().indexOf(searchTitle.toUpperCase()) === 0
      )
      setFilteredMovies(filterMovies)
    } else {
      setFilteredMovies([])
    }
  }, [searchTitle, props.movies])

  return (
    <>
      <header className={styles.header}>

        <nav className={styles.navigation}>

          <div className={styles.logo}>
              <img src={JCLogo} alt='logo' />
              <div className={styles.premium}>
                  <img src={crown} alt="crown" />
                  <p>Go Premium</p>
              </div>
          </div>

          <ul className={styles.navLinks}>
            {
             navLinks.map((link) => {
               <li key={link} className={styles.navLink}>{link}</li>
              })
            }
          </ul>

        </nav>

        <div className={styles.search}>
          
          <div className={styles.searchBox}>
            <div className={styles.headerIcon}>
              <img src={searchIcon} alt="search" />
            </div>

            <input
              type="text"
              onChange={(event) => setSearchTitle(event.target.value)}
              className={styles.searchInput}
              placeholder='Movies, Shows and more '
            />

            <div className={styles.headerIcon}>
              <img src={voiceSearchIcon} alt="voice" />
            </div>
          </div>

          <img className={styles.usericon} src={jioIcon} alt="user" />
        </div>
      </header>

      {filteredMovies.length !== 0 && (
        <div className={styles.searchResults}>
          {filteredMovies.map((movie) => (
            <Show key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </>
  )
}

export default Header
