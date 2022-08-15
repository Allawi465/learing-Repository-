import { getExistingFavs } from "../API/utils.js";

// Using exports method

export const pets = {
    1: "cat",
    name: "Mia",
    "age-pets": 12,
};

function displayErrors(message = "Unknown error") {
    return `<div class="error">${message}</div>`;
};


// export functions to js/API/filterAPIcall.js 

export const url = fetch("https://free-to-play-games-database.p.rapidapi.com/api/games", {
    "headers": {
       "x-rapidapi-key": "d252199cafmshb9ddfac0121f925p1d5962jsn8b7da9697655"
    }
});

export function displayError(messageType, message, target) {
    const element = document.querySelector(target);

    element.innerHTML = `<div class="message ${messageType}">${message}</div>`;
}

export function findGame(data) {
    const namesContainer = document.querySelector(".product-container");
    
    namesContainer.innerHTML = "";

    const favourites = getExistingFavs();


    for (let i = 0; i < data.length; i++) {
        const id = data[i].id
        const name = data[i].title

        let cssClass = "far";

        const doesObjectExist = favourites.find(function(fav) {
            // console.log(fav)
            return parseInt(fav.id) === id;
        });
    
        // console.log(doesObjectExist);

        if (doesObjectExist) {
            cssClass = "fa";
        }

        if (i === 10) {
            break;
        }

        namesContainer.innerHTML += `<div class="product">
                                      <h3>${name}</h3>
                                      <p>Platform: ${data[i].platform}</p>
                                      <time class="details-date">Released: ${data[i].release_date}</time>
                                      <a href="Game-details.html?id=${id}" class="result">Click me</a>
                                      <i class="${cssClass} fa-heart" data-id="${id}" data-name="${name}"></i>
                                     </div>`;

    }
    
    const favButtons = document.querySelectorAll(".product i");

    favButtons.forEach((button) => {
        button.addEventListener("click", handleClick);
    });
    
    function handleClick() {
        // console.log(event);
        this.classList.toggle("fa");
        this.classList.toggle("far")
        const name = this.dataset.name;
        const id = this.dataset.id;
        

        // console.log(id, name);

        const currentFavs = getExistingFavs();
        // console.log(currentFavs);

        const productEcists = currentFavs.find(function(fav) {
            return fav.id === id;
        })

        if (productEcists === undefined) {
            const product = { id: id, name: name };
            currentFavs.push(product);
            saveFavs(currentFavs);
        } else {
            const newFavs = currentFavs.filter(fav => fav.id !== id);
            saveFavs(newFavs);
        }
    } 
}

export function searchGames(data) {
    const search = document.querySelector(".search");

    search.onkeyup = function(event) {
        console.log(event);

        const searchValue = event.target.value.trim().toLowerCase();

        const filteredGames = data.filter(function (data) {
            if (data.title.toLowerCase().startsWith(searchValue)) {
                return true;
            }
        });

        findGame(filteredGames);
    };
}

function saveFavs(favs) {
    localStorage.setItem("favourites", JSON.stringify(favs))
}
