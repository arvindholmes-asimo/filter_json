
let customData = document.getElementById('customData');
let customData1 = document.getElementById('customData1');
let searchBtn = document.querySelector('.btnSearch')
let SEARCHINPUT = document.getElementById('searchBox');

let pokemonJsonData = [];

(async () => {
    try {
        let res = await fetch('https://api.imgflip.com/get_memes')
        let jsonData = await res.json();
        if (jsonData && jsonData.data && jsonData.data.memes) { // check if the necessary properties exist
            pokemonJsonData = jsonData;
            console.log("pokemonJsonData", pokemonJsonData);
            renderPokemon(pokemonJsonData.data.memes);
        }
    } catch (error) {
        error => console.error(error)
    }
})();


SEARCHINPUT.addEventListener('change', handleSearch)

function handleSearch() {
    let searchTerm = SEARCHINPUT.value.toLowerCase().trim();
    let getItem = document.getElementById('customData');
    getItem.style.display = "none";
    console.log("searchTerm", searchTerm);


    const FILTEREDDATA = pokemonJsonData.data.memes.filter(meme => meme.name.includes(searchTerm));

    console.log('FILTEREDDATA', FILTEREDDATA);

    // SEARCHINPUT.value = "";

    renderPokemon1(FILTEREDDATA);


}

function renderPokemon(memes) {
    memes.forEach(meme => {
        const memeElement = document.createElement('div');
        memeElement.innerHTML = `<div class='card'>
        <div class='img'> <img class="img-fluid" height="100" width="100" src="${meme.url}"> </div>
            <div class='context'>
                <p>${meme.name}</p>
        </div>`;
        customData.appendChild(memeElement);
    }
    )
}



function renderPokemon1(memes) {
    memes.forEach(meme => {
        const memeElement = document.createElement('div');
        memeElement.innerHTML = `<div class='card'>
        <div class='img'> <img class="img-fluid" height="100" width="100" src="${meme.url}"> </div>
            <div class='context'>
                <p>${meme.name}</p>
        </div>`;
        customData1.appendChild(memeElement);
    }
    )
}

