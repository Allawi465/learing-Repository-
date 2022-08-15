import { url, findGame, searchGames, displayError } from "../export/export-import.js";


async function getTeams() {
    try {
        const response = await url

        const data = await response.json();

        console.log(data);

        findGame(data);
        searchGames(data);
        
    } catch(error) {
        console.log(error);
        displayError("error", error, ".container");
    }
}

getTeams();

