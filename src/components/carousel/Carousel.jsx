import styles from './carousel.module.css';

const Carousel = () => {
  const slides = [
    {
      id: 1,
      title: "FC Barcelona vs Real Madrid",
      subtitle: "El Clásico",
      description: "The ultimate football rivalry continues.",
      image: "https://wallpapercave.com/wp/wp1863004.jpg"
    },
    {
      id: 2,
      title: "The Dark Knight Rises ",
      subtitle: "IMDb 9.0",
      description: "Now Streaming on Prime Video",
      image: "https://wallpaperbat.com/img/89880578-the-dark-knight-rises-hd-wallpaper.jpg"
    },
    {
      id: 9,
      title: "Avengers: Endgame",
      subtitle: "Superhero Blockbuster",
      description: "The final stand against Thanos.",
      image: "https://images.alphacoders.com/111/1119553.jpg"
    },
    
    {
      id: 3,
      title: "Stranger Things",
      subtitle: "Season 4",
      description: "New Episodes Weekly",
      image: "https://static.displate.com/1200x857/displate/2022-09-05/67f549944a390c766fd186979ddb0f97_76ae2aa56db908b08a17c67a7371903a.jpg"
    }
  ];

  return (
    <section className={styles.carousel}>
      <div className={styles.slider}>
        {slides.map(slide => (
          <div className={styles.slide} key={slide.id}>
            <img src={slide.image} alt={slide.title} className={styles.image} />
            <div className={styles.caption}>
              <h2>{slide.title}</h2>
              <h4>{slide.subtitle}</h4>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Carousel;
//       <Shows title="Hindi Movies" movies={hindiMovies} />
//       <Shows title="Top Rated Movies" movies={topMovies} />