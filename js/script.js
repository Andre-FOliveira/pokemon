const botaoAlteraTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imgBtTrocaTema = document.querySelector(".imagem-botao");


botaoAlteraTema.addEventListener("click", () => {
    const modoDarkOn = body.classList.contains("modo-dark");

    body.classList.toggle("modo-dark");

    if (modoDarkOn) {

        // body.classList.remove("modo-dark");
        imgBtTrocaTema.setAttribute("src", "./src/img/sun.png");
    } else {

        // body.classList.add("modo-dark");
        imgBtTrocaTema.setAttribute("src", "./src/img/moon.png");
    }
});

let url1 = 'https://pokeapi.co/api/v2/pokemon/25/';
fetch(url1)
    .then((response) => {
        return response.json();
    })

    .then((data) => {

        console.log(data);
        document.getElementById('nome1').innerHTML = data['name'];
        document.getElementById('type1').innerHTML = data['types']['0']['type']['name'];
        document.getElementById('type1-1').innerHTML = data['types']['0']['type']['name'];
        let img1 = data['sprites']['other']['dream_world']['front_default'];
        document.getElementById('pic').setAttribute('src', img1);
    })


let url2 = 'https://pokeapi.co/api/v2/pokemon/1/';
fetch(url2)
    .then((response) => {
        return response.json();
    })

    .then((data) => {

        console.log(data);
        document.getElementById('nome2').innerHTML = data['name'];
        document.getElementById('type2').innerHTML = data['types']['0']['type']['name'];
        document.getElementById('type1-2').innerHTML = data['types']['1']['type']['name'];
        let img2 = data['sprites']['other']['dream_world']['front_default'];
        document.getElementById('buba').setAttribute('src', img2);
    })

let url3 = 'https://pokeapi.co/api/v2/pokemon/37/';
fetch(url3)
    .then((response) => {
        return response.json();
    })

    .then((data) => {

        console.log(data);
        document.getElementById('nome3').innerHTML = data['name'];
        document.getElementById('type3').innerHTML = data['types']['0']['type']['name'];
        document.getElementById('type1-3').innerHTML = data['types']['0']['type']['name'];
        let img3 = data['sprites']['other']['dream_world']['front_default'];
        document.getElementById('vulpix').setAttribute('src', img3);
    })

let url4 = 'https://pokeapi.co/api/v2/pokemon/52/';
fetch(url4)
    .then((response) => {
        return response.json();
    })

    .then((data) => {

        console.log(data);
        document.getElementById('nome4').innerHTML = data['name'];
        document.getElementById('type4').innerHTML = data['types']['0']['type']['name'];
        document.getElementById('type1-4').innerHTML = data['types']['0']['type']['name'];
        let img4 = data['sprites']['other']['dream_world']['front_default'];
        document.getElementById('meowth').setAttribute('src', img4);

    })

let url5 = 'https://pokeapi.co/api/v2/pokemon/7/';
fetch(url5)
    .then((response) => {
        return response.json();
    })

    .then((data) => {

        console.log(data);
        document.getElementById('nome5').innerHTML = data['name'];
        document.getElementById('type5').innerHTML = data['types']['0']['type']['name'];
        document.getElementById('type1-5').innerHTML = data['types']['0']['type']['name'];
        let img5 = data['sprites']['other']['dream_world']['front_default'];
        document.getElementById('squirtle').setAttribute('src', img5);

    })

let url6 = 'https://pokeapi.co/api/v2/pokemon/4/';
fetch(url6)
    .then((response) => {
        return response.json();
    })

    .then((data) => {

        console.log(data);
        document.getElementById('nome6').innerHTML = data['name'];
        document.getElementById('type6').innerHTML = data['types']['0']['type']['name'];
        document.getElementById('type1-6').innerHTML = data['types']['0']['type']['name'];
        let img6 = data['sprites']['other']['dream_world']['front_default'];
        document.getElementById('charmander').setAttribute('src', img6);

    })

let url7 = 'https://pokeapi.co/api/v2/pokemon/12/';
fetch(url7)
    .then((response) => {
        return response.json();
    })

    .then((data) => {

        console.log(data);
        document.getElementById('nome7').innerHTML = data['name'];
        document.getElementById('type7').innerHTML = data['types']['0']['type']['name'];
        document.getElementById('type1-7').innerHTML = data['types']['1']['type']['name'];
        let img7 = data['sprites']['other']['dream_world']['front_default'];
        document.getElementById('ponyta').setAttribute('src', img7);

    })

let url8 = 'https://pokeapi.co/api/v2/pokemon/120/';
fetch(url8)
    .then((response) => {
        return response.json();
    })

    .then((data) => {

        console.log(data);
        document.getElementById('nome8').innerHTML = data['name'];
        document.getElementById('type8').innerHTML = data['types']['0']['type']['name'];
        document.getElementById('type1-8').innerHTML = data['types']['0']['type']['name'];
        let img8 = data['sprites']['other']['dream_world']['front_default'];
        document.getElementById('staryu').setAttribute('src', img8);

    })

let url9 = 'https://pokeapi.co/api/v2/pokemon/133/';
fetch(url9)
    .then((response) => {
        return response.json();
    })

    .then((data) => {

        console.log(data);
        document.getElementById('nome9').innerHTML = data['name'];
        document.getElementById('type9').innerHTML = data['types']['0']['type']['name'];
        document.getElementById('type1-9').innerHTML = data['types']['0']['type']['name'];
        let img9 = data['sprites']['other']['dream_world']['front_default'];
        document.getElementById('eevee').setAttribute('src', img9);

    })

let url10 = 'https://pokeapi.co/api/v2/pokemon/150/';
fetch(url10)
    .then((response) => {
        return response.json();
    })

    .then((data) => {

        console.log(data);
        document.getElementById('nome10').innerHTML = data['name'];
        document.getElementById('type10').innerHTML = data['types']['0']['type']['name'];
        document.getElementById('type1-10').innerHTML = data['types']['0']['type']['name'];
        let img10 = data['sprites']['other']['dream_world']['front_default'];
        document.getElementById('mewtwo').setAttribute('src', img10);
    })


let url11 = 'https://pokeapi.co/api/v2/pokemon/228/';
fetch(url11)
    .then((response) => {
        return response.json();
    })

    .then((data) => {

        console.log(data);
        document.getElementById('nome11').innerHTML = data['name'];
        document.getElementById('type11').innerHTML = data['types']['0']['type']['name'];
        document.getElementById('type1-11').innerHTML = data['types']['1']['type']['name'];
        let img11 = data['sprites']['other']['dream_world']['front_default'];
        document.getElementById('houndour').setAttribute('src', img11);
    })


let url12 = 'https://pokeapi.co/api/v2/pokemon/324/';
fetch(url12)
    .then((response) => {
        return response.json();
    })

    .then((data) => {

        console.log(data);
        document.getElementById('nome12').innerHTML = data['name'];
        document.getElementById('type12').innerHTML = data['types']['0']['type']['name'];
        document.getElementById('type1-12').innerHTML = data['types']['0']['type']['name'];
        let img12 = data['sprites']['other']['dream_world']['front_default'];
        document.getElementById('torkoal').setAttribute('src', img12);
    })