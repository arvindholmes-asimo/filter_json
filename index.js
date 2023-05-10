
let customData = document.getElementById('customData');
let SEARCHINPUT = document.getElementById('searchBox');


fetch('https://api.imgflip.com/get_memes')
    .then(response => response.json())
    .then(jsonData => {
        // console.log("jsonData", jsonData);
        renderPokemon(jsonData.data.memes);

        SEARCHINPUT.addEventListener('input', () => {
            let searchTerm = SEARCHINPUT.value.toLowerCase().trim();
            const FILTEREDDATA = jsonData.data.memes.filter(meme => meme.name.toLowerCase().includes(searchTerm));
            console.log("FILTEREDDATA", FILTEREDDATA);
            renderPokemon(FILTEREDDATA);
        })
    })
    .catch(error => {
        console.error(error)
    });



function renderPokemon(memes) {
    customData.innerHTML = '';
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


