const charactersEpisode = document.getElementById("char-episode");
const showInformation = document.getElementById("heroes");
const listCharacters = document.getElementById("list-of-characters");
const allPlanets = document.getElementById("planets");
const listPlanets = document.getElementById("list-of-planets");
const nextPagePlanet = document.getElementById("the-next-planet");

const BASE = "http://swapi.dev/api/";
const toHttps = (url) => 
  url[4].toLowerCase() === "s" ? url : url.slice(0, 4) + "s" + url.slice(4);
const getInformation = (url) =>  {
const newUrl = toHttps(url);
  return fetch(newUrl)
    .then((res) => res.json())
    .catch("error");
};

function showEpisode (num) {
  return `${BASE}films/${num}/`;
}
let episode;
showInformation.addEventListener("click", () => {  
let item = charactersEpisode.options[charactersEpisode.selectedIndex].value;
if (item === "1") {
  episode = showEpisode (4);
} else if (item === "2") {
  episode = showEpisode (5);
} else if (item === "3") {
  episode = showEpisode (6);
} else if (item === "4") {
  episode = showEpisode (1);
} else if (item === "5") {
  episode = showEpisode (2);
} else if (item === "6") {
  episode = showEpisode (3);
}
console.log(episode)

let characters = "";
 getInformation(episode)
    .then((res) => res.characters.map(getInformation))
    .then((res) => Promise.all(res))
    .then((res) => {
      res.map((elem) => {
        characters += `<div class="characters-information">
                          <h4>Name</h4><h3>: ${elem.name},</h3>
                          <h4>Birth year</h4><h3>: ${elem.birth_year},</h3>
                          <h4>Gender</h3><h3>: ${elem.gender}.</h3>
                      </div>`;
        listCharacters.innerHTML = `${characters}`;
        showInformation
      });
    });
});

let page = 1;
function genPlanets(page) {
  return `${BASE}planets/?page=${page}`;
}
allPlanets.addEventListener("click", () => {
  getInformation(genPlanets(page)).then((res) => {
let planet = "";
      res.results.forEach((elem) => {
        planet += `<div class="planet-list">
                    <h4>name</h4><h3>: ${elem.name},</h3>
                    <h4>orbital</h4><h3>: ${elem.orbital_period}.</h3>
                  </div>`;
      listPlanets.innerHTML = `${planet}`;
    });
  });
});

let nextPlanet = 1;
nextPagePlanet.addEventListener("click", () => {
  if (nextPlanet > 16) { 
    return
  } else {
    
    getInformation(genPlanets(page += 1)).then((res) => {
      let planet = "";
      res.results.forEach((elem) => {
        planet += `<div class="planet-list">
                    <h4>name</h4><h3>: ${elem.name},</h3>
                    <h4>orbital</h4><h3>: ${elem.orbital_period}.</h3>
                  </div>`;
      listPlanets.innerHTML = `${planet}`;
      });
        nextPlanet += page;
    });
  }
});