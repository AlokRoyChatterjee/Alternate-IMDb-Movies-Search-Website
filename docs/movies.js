const apinumber = "3fd2be6f0c70a2a598f084ddfb75487c";
const api = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apinumber}&page=1`;
const image = "https://image.tmdb.org/t/p/w1280";
const apiquery = `https://api.themoviedb.org/3/search/movie?api_key=${apinumber}&query=`;
const form = document.getElementById("form");
const main = document.getElementById("main");
const search = document.getElementById("search");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = search.value;
  if (searchTerm && searchTerm !== "") {
    getmovieinfo(apiquery + searchTerm);
    search.value = "";
  } else history.go(0);
});
const getmovieinfo = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  movieinfo(data.results);
};
getmovieinfo(api);
const movieinfo = (movies) => {
  main.innerHTML = "";
  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;
    const moviepart = document.createElement("div");
    moviepart.classList.add("movie");
    moviepart.innerHTML = `
    <img
      src="${image + poster_path}"
      alt="${title}"
    />
    <div >
      <h3 style="font-size:80px;">${title}</h3>
    </div>
    <div style="font-size:80px;">
      <h3 style="font-size:80px;">Movie Info</h3>
      ${overview}
    </div>
  `;
    main.appendChild(moviepart);
  });
};





