const apiKey = "8745e3a4"; // paste your OMDb key
const movieInput = document.getElementById("movieInput");
const searchBtn = document.getElementById("searchBtn");
const results = document.getElementById("results");

searchBtn.addEventListener("click", searchMovies);
movieInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") searchMovies();
});

async function searchMovies() {
  const query = movieInput.value.trim();
  if (!query) {
    results.innerHTML = "<p>Please enter a movie title.</p>";
    return;
  }

  const url = `https://www.omdbapi.com/?s=${encodeURIComponent(query)}&apikey=${apiKey}`;

  try {
    results.innerHTML = "<p>Loading...</p>";
    const response = await fetch(url);
    const data = await response.json();

    if (data.Response === "False") {
      throw new Error(data.Error || "No movies found");
    }

    displayMovies(data.Search);
  } catch (error) {
    results.innerHTML = `<p>${error.message}</p>`;
  }
}

function displayMovies(movies) {
  results.innerHTML = "";

  movies.forEach(movie => {
    const poster = movie.Poster !== "N/A"
      ? movie.Poster
      : "https://via.placeholder.com/160x230?text=No+Image";

    const card = document.createElement("div");
    card.classList.add("movie-card");
    card.innerHTML = `
      <img src="${poster}" alt="${movie.Title}">
      <h3>${movie.Title}</h3>
      <p>${movie.Year}</p>
    `;
    results.appendChild(card);
  });
}