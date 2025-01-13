const getMovie = async () => {
    const url = "https://portiaportia.github.io/json/movies.json";
  
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  };
  
  const showMovies = async () => {
    const movies = await getMovie();
    const movieSection = document.getElementById("movie-body");
  
    movies.forEach((movie) =>
      movieSection.appendChild(getMovieItem(movie))
    );
  };
  
  const getMovieItem = (movie) => {
    const movieSection = document.createElement("section");
    movieSection.classList.add("movie");
  
    const img = document.createElement("img");
    img.src = movie.img; // Set the image source directly from the JSON data
    img.alt = movie.title;
    img.classList.add('movie-img');
    movieSection.appendChild(img);
  
    const details = document.createElement('div');
    details.classList.add('movie-details');
    movieSection.appendChild(details);
  
    const title = document.createElement('h1');
    title.innerHTML = movie.title;
    details.appendChild(title);
  
    const movieInfo = document.createElement('ul');
    
    // Create list items for movie details
    const directors = document.createElement('li');
    directors.innerHTML = `<strong>Director:</strong> ${movie.director}`;
    movieInfo.appendChild(directors);
  
    const actors = document.createElement('li');
    actors.innerHTML = `<strong>Actors:</strong> ${movie.actors.join(', ')}`;
    movieInfo.appendChild(actors);
  
    const year = document.createElement('li');
    year.innerHTML = `<strong>Year Released:</strong> ${movie.year}`;
    movieInfo.appendChild(year);
  
    const genres = document.createElement('li');
    genres.innerHTML = `<strong>Genres:</strong> ${movie.genres.join(', ')}`;
    movieInfo.appendChild(genres);
  
    const synopsis = document.createElement('li');
    synopsis.innerHTML = `<strong>Synopsis:</strong> ${movie.description}`;
    movieInfo.appendChild(synopsis);
  
    details.appendChild(movieInfo);
  
    return movieSection;
  };
  
  
  window.onload = () => showMovies();
  