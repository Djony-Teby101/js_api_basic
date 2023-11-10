let button=document.getElementById('button');
let image=document.getElementById('image');
let pokeNumber=document.getElementById('number');
let pokeName=document.getElementById('name');

const changePokemon=async ()=>{
    let randomNumber=Math.ceil(Math.random() *150 )+1;
    // récupere le path de l'api.
    let requestString=`https://pokeapi.co/api/v2/pokemon/${randomNumber} `;
    
    // recuperer la data de l'api.
    let data= await fetch(requestString);
   


    let response=await data.json();
    console.log(response);

    image.src=response.sprites.front_default;
    pokeNumber.textContent=`# ${response.id}`;
    pokeName.textContent=response.name

}

button.addEventListener("click", changePokemon);