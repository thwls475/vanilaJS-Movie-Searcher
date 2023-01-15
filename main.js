const searchBtn = document.querySelector(".header-search-btn");
const mainSearch = document.querySelector(".main-search");
const searchInput = document.querySelector("#search-input");
const mainSearchBtn = document.querySelector(".main-search-btn");
const movieSection = document.querySelector('.movie');
const searchBar = document.querySelector('.search-bar');
const mainLogo = document.querySelector('.main-logo');
const mainHeader = document.querySelector('.main-header');


mainSearchBtn.addEventListener("click", () => {
  console.log(mainSearch.value);
  fetchMovies(mainSearch.value);
})

searchBtn.addEventListener("click", () => {
  console.log(searchInput.value);
  fetchMovies(searchInput.value);
})

const fetchMovies = async (title) => {
  const res = await axios.get(`https://www.omdbapi.com/?apikey=7035c60c&s=${title}`);
  const movies = res.data.Search;
  const cardList = createCardList(movies);
  movieSection.innerHTML = cardList;
  deleteSearch();
}

const deleteSearch = () => {
  searchBar.style.display = "none";
  mainLogo.style.display = "none";
  movieSection.style.zIndex = "10";
  movieSection.style.position = "relative";
  mainHeader.style.zIndex = "10";
  searchBtn.style.zIndex = "10";
}

const createCardElement = (movie) => {
  const el = `
    <div class="movie-wrapper">
      <img class="poster" src='${movie.Poster}'></img>
      <div class="title">${movie.Title}</div>
      <p class="year">${movie.Year}</p>
    </div>
  `;
  return el;
}

const createCardList = (movies) => {
  const cardList = movies.map((movie) => createCardElement(movie));
  console.log(cardList);
  return cardList;
}

