const detailContainer = document.querySelector(".game-details");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id)

const url = fetch("https://free-to-play-games-database.p.rapidapi.com/api/game?id=" + id, {
    "headers": {
       "x-rapidapi-key": "d252199cafmshb9ddfac0121f925p1d5962jsn8b7da9697655"
    }
});

async function detailGame() {
    try {
        const response = await url 

        const details = await response.json();

        console.log(details);

        createHtml(details);
        
        
    } catch(error) {
        console.log(error);
    }
}

detailGame();


function createHtml(details) {
    detailContainer.innerHTML = `<h1>${details.title}</h1>
                                <div class="details-image2" 
                                style="background-image: url('${details.thumbnail}')"></div>
                                <div class="details-description">${details.short_description}</div>
                                <time class="details-date">Released: ${details.release_date}</time>`;
}