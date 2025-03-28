const pokemon = [
    {
        thumbnail: '001.png',
        id: 'N°01',
        name: 'bulbasaur',
        type: ['plant', 'poison'],
    },
    {
        thumbnail: '002.png',
        id: 'N°02',
        name: 'charmander',
        type: ['fire'],
    },
    {
        thumbnail: '003.png',
        id: 'N°03',
        name: 'caterpie',
        type: ['bug'],
    },
    {
        thumbnail: '004.png',
        id: 'N°04',
        name: 'kakuna',
        type: ['bug', 'poison'],
    },
    {
        thumbnail: '005.png',
        id: 'N°05',
        name: 'rattata',
        type: ['plant'],
    },
    {
        thumbnail: '006.png',
        id: 'N°06',
        name: 'pikachu',
        type: ['normal'],
    },
    {
        thumbnail: '007.png',
        id: 'N°07',
        name: 'vulpix',
        type: ['fire', 'plant'],
    },
    {
        thumbnail: '008.png',
        id: 'N°08',
        name: 'jigglypuff',
        type: ['normal', 'fairy'],
    },
    {
        thumbnail: '009.png',
        id: 'N°09',
        name: 'mew',
        type: ['phychic'],
    },
    {
        thumbnail: '010.png',
        id: 'N°10',
        name: 'ponyta',
        type: ['fire'],
    },
    {
        thumbnail: '011.png',
        id: 'N°11',
        name: 'cloyster',
        type: ['ice', 'water'],
    },
    {
        thumbnail: '012.png',
        id: 'N°12',
        name: 'groundor',
        type: ['ground'],
    },
    {
        thumbnail: '013.png',
        id: 'N°13',
        name: 'cubone',
        type: ['ground'],
    },
    {
        thumbnail: '014.png',
        id: 'N°14',
        name: 'tentacruel',
        type: ['poison', 'water'],
    },
    {
        thumbnail: '015.png',
        id: 'N°15',
        name: 'darkrai',
        type: ['dark'],
    },
    {
        thumbnail: '016.png',
        id: 'N°16',
        name: 'diglett',
        type: ['ground'],
    }
]



for (let i = 0; i < pokemon.length; i++) {
    console.log(pokemon[i].thumbnail);
    const node = document.createElement("div");
    document.getElementById("content").appendChild(node);
    node.classList.add("card");

    const image = document.createElement("img");
    node.appendChild(image);
    image.classList.add("img");
    image.src = "media/" + pokemon[i].thumbnail;

    const id = document.createElement("id");
    node.appendChild(id);
    node.classList.add("idnum")
    id.innerText = '\n' + pokemon[i].id;

    const name = document.createElement("name");
    node.appendChild(name);
    node.classList.add("name");
    name.innerText = '\n' + pokemon[i].name + '\n';

    for (let j = 0; j < pokemon[i].type.length; j++) {
        const button = document.createElement("button");
        node.appendChild(button);
        button.innerText = pokemon[i].type[j];
        button.classList.add('button');
        button.classList.add(pokemon[i].type[j]);

    }



}
