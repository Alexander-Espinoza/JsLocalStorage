var formMovie = document.querySelector(".form-movie");
formMovie.addEventListener("submit", function (e) {
  let movie = document.querySelector(".add-movie").value;
  guardarMovie(movie);
  mostrarMovie(movie);
});

var button = document
  .querySelector(".button-eraser-movie")
  .addEventListener("click", function () {
    let movie = document.querySelector(".input-eraser-movie").value;
    borrarMovie(movie);
  });

var forMEraser = document
  .querySelector(".eraser-movie")
  .addEventListener("submit", function () {
    let movie = document.querySelector(".input-eraser-movie").value;
    borrarMovie(movie);
  });

mostrarMovies();

function guardarMovie(movie) {
  localStorage.setItem(movie, movie);
  document.querySelector(".add-movie").value = "";
}

function mostrarMovies() {
  for (i in localStorage) {
    if (typeof localStorage[i] == "string") {
      ul = document.getElementsByClassName("title")[0];
      let li = document.createElement("li");
      console.log(li);
      li.textContent = localStorage[i];
      ul.appendChild(li);
    }
  }
}

function mostrarMovie(movie) {
  ul = document.getElementsByClassName("title")[0];
  let li = document.createElement("li");
  li.textContent = movie;
  ul.appendChild(li);
}

function borrarMovie(movie) {
  if (localStorage.getItem(movie)) {
    localStorage.removeItem(movie);
    document.querySelector(".input-eraser-movie").value = "";
    ul = document.getElementsByClassName("title")[0];
    ul.innerHTML = "";
    mostrarMovies();
  }
}
