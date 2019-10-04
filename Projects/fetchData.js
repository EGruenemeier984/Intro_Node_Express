const pokeName = document.getElementById('userInput').value;
fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
    .then(response => response.json())
    .then(
        data => {
            const {
                ...pokemon
            } = data.sprites;
            const {
                ...type
            } = data.species;
            console.log(pokemon);
            console.log(type.name);
            selector = document.querySelector('.pokemon');
            selectorName = document.querySelector('.name');
            selector.innerHTML = `<img height="500px" width="500px" src="${pokemon.front_shiny}" />`
            selectorName.innerHTML = `<h3>Name: ${type.name} </h3> `
        }
    );


/// reload page