import { url, displayError } from "../export/export-import.js";

import { getExistingFavs } from "../API/utils.js";

async function getTeams() {
    try {
        const response = await url

        const data = await response.json();

        console.log(data);
        
    } catch(error) {
        console.log(error);
        displayError("error", error, ".container");
    }
}

getTeams();

const productContainer = document.querySelector(".product-container");

const favourites = getExistingFavs();


if (favourites.length === 0) {
    productContainer.innerHTML = "No favourites yet";
}

favourites.forEach(favourite => {
    productContainer.innerHTML += `<div class="product">
                                      <h3>${favourite.name}</h3>
                                      <i class="fa fa-heart"></i>
                                     </div>`;
});
