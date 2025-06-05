import { useEffect, useState } from "react";
import Carousel from "../components/carousel/Carousel";
import Channels from "../components/channels/Channels";
import Header from "../components/header/Header";
import Shows from "../components/shows/Shows";
import Tags from "../components/tags/Tags";
import Footer from "../components/footer/Footer";


import './Home.css'; // we'll define showsContainer here

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [dramaMovies, setDramaMovies] = useState([]);
  const [hindiMovies, setHindiMovies] = useState([]);
  const [topMovies, setTopMovies] = useState([]);
  const [japaneseMovies, setJapaneseMovies] = useState([]);
  const [actionMovies, setActionMovies] = useState([]);
  const [romanceMovies, setRomanceMovies] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);
  const [thrillerMovies, setThrillerMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch("http://localhost:4000/movies");
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();

        setMovies(data);
        setDramaMovies(data.filter(m => m.genre.includes("Drama")).slice(0, 6));
        setActionMovies(data.filter(m => m.genre.includes("Action")).slice(0, 6));
        setHindiMovies(data.filter(m => m.language === "Hindi").slice(0, 6));
        setTopMovies(data.filter(m => m.imdb >= 8.5).slice(0, 6));
        setJapaneseMovies(data.filter(m => m.country === "Japan").slice(0, 6));
        setRomanceMovies(data.filter(m => m.genre.includes("Romance")).slice(0, 6));
        setComedyMovies(data.filter(m => m.genre.includes("Comedy")).slice(0, 6));
        setThrillerMovies(data.filter(m => m.genre.includes("Thriller")).slice(0, 6));
      } catch (err) {
        console.error("Failed to fetch movies:", err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) return <h1 style={{ color: "white", textAlign: "center" }}>Loading...</h1>;
  if (movies.length === 0) return <h1 style={{ color: "white", textAlign: "center" }}>No movies found.</h1>;

  return (
    <>
      <Header movies={movies} />
      <Tags />
      <Carousel />
      <Channels />

      <div className="showsContainer"><Shows title="Drama Movies" movies={dramaMovies} /></div>
      <div className="showsContainer"><Shows title="Hindi Language Movies" movies={hindiMovies} /></div>
      <div className="showsContainer"><Shows title="Japanese Movies" movies={japaneseMovies} /></div>
      <div className="showsContainer"><Shows title="Highly Rated Movies" movies={topMovies} /></div>
      <div className="showsContainer"><Shows title="Action Movies" movies={actionMovies} /></div>
      <div className="showsContainer"><Shows title="Romance Movies" movies={romanceMovies} /></div>
      <div className="showsContainer"><Shows title="Comedy Movies" movies={comedyMovies} /></div>
      <div className="showsContainer"><Shows title="Thriller Movies" movies={thrillerMovies} /></div>

      <Footer />
    </>
  );
}
