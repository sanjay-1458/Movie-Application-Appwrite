import { useState, useEffect } from "react";
import { useDebounce } from "react-use";
import React from "react";
import Search from "./components/Search";
import Spinner from "./components/Spinner";
import MovieCard from "./components/MovieCard";
import { getTrendingMovies, updateSearchCount } from "./appwrite";
const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const bannedKeywords = import.meta.end.VITE_BANNED_KEYWORDS ? import.meta.env.VITE_BANNED_KEYWORDS.split(",")
  : [];
const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};
function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [trendingMovies,setTrendingMovies]=useState([]);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  useDebounce(() => setDebouncedSearchTerm(searchTerm), 500, [searchTerm]);

  const fetchMovies = async (query = "") => {
    setIsLoading(true);
    setErrorMessage("");
    try {
      const endpoint = query
        ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(
            query
          )}&include_adult=false`
        : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
      const response = await fetch(endpoint, API_OPTIONS);
      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }
      const data = await response.json();
      // console.log(data);
      if (data.response === "False") {
        setErrorMessage(Error || "Failed to fetch movies");
        setMovieList([]);
        return;
      }
      if (data.results) {
        

        const filteredMovies = data.results.filter((movie) => {
          const lowerTitle = movie.title.toLowerCase();
          const lowerOverview = movie.overview
            ? movie.overview.toLowerCase()
            : "";
          return !bannedKeywords.some(
            (keyword) =>
              lowerTitle.includes(keyword) || lowerOverview.includes(keyword)
          );
        });
        const sortedMovies = filteredMovies.sort(
          (a, b) => b.popularity - a.popularity
        );
        setMovieList(sortedMovies);
      } else {
        setErrorMessage("Failed to fetch movies");
        setMovieList([]);
      }
      if(query && data.results.length>0){
        await updateSearchCount(query,data.results[0]);
      }
    } catch (err) {
      console.log(`Error fetching movies: ${err}`);
      setErrorMessage("Error fetching movies. Check API");
    } finally {
      setIsLoading(false);
    }
  };

  const loadTrendingMovies=async()=>{
    try{
      const movies=await getTrendingMovies();
      setTrendingMovies(movies);
    }
    catch(err){
      console.log(`Error while fetching trending movies: ${err}`);
    }
  }


  useEffect(() => {
    fetchMovies(debouncedSearchTerm);
  }, [debouncedSearchTerm]);
  useEffect(()=>{
    loadTrendingMovies();
  },[]);
  return (
    <main>
      <div className="pattern"></div>
      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="Banner"></img>
          <h1>
            Find <span className="text-gradient">Movies</span>
          </h1>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>
        {trendingMovies.length>0 && (
          <section className="trending">
            <h2>Trending Movies</h2>
            <ul>
              {trendingMovies.map((movie,index)=>(
                <li key={movie.$id}>
                  <p>{index+1}</p>
                  <img src={movie.poster_url} alt={movie.title}></img>
                </li>

              ))}
            </ul>
          </section>
        )}
        <section className="all-movies">
          <h2>All Movies</h2>
          {isLoading ? (
            <Spinner />
          ) : errorMessage ? (
            <p className="text-red-500">{errorMessage}</p>
          ) : (
            <ul>
              {movieList.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
}

export default App;
