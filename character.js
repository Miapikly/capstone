//Generate a Random Character function

function generateChar(){
    let cont = document.getElementById("container2")
    cont.innerHTML=""
        let randomNumber = Math.floor(Math.random()*characters.length)
        let i=randomNumber
        let random=characters[i]
        console.log(random)
        cont.innerHTML += `
        <h3>Name: ${random.name}</h3>
        <h3>Story: ${random.story}</h3>
        <h3>Role: ${random.role}</h3>
        <br>
        `
        cont.style.padding="0.5em"
        cont.style.marginTop="1em"
        cont.style.textAlign="center"
        cont.style.color="gold"
        cont.style.width="50%"
        cont.style.borderRadius="3em"
        cont.style.fontSize="2em"
        cont.style.wordSpacing="0.1em"

        console.log(random)
}

//Render the randomized character's card

function show(showing){
    const container = document.getElementById("render");
    const charadiv = document.getElementById("charadiv");

    charadiv.innerHTML=showing.length;
    let html="";
    for(let i=0;i<showing.length;i++){
        const characters=showing[i];

        html+=`
        <div class="character">
            <h3>${characters.name}</h3>
            <p class="stock ${characters.story}</p>
            <p class="description">${characters.role}</p>
        </div>
        `;
    }

    container.innerHTML=html;
}  

//Search Function

document.getElementById("searchInput").addEventListener('input', search);
function search(){
    let searched = document.getElementById("searchInput").value;
     if(!searched || searched.trim() === " ") return show(characters);
    searched = searched.toLowerCase().trim();
    let searchWords=searched.split(" ").filter(word => word.length > 0);

let filtered = characters.filter(character => {
        let char=[
            character.name,
            character.story,
            character.role
        ].join(" ").toLowerCase();

        return searchWords.every(word=>char.includes(word)); 
     })

     console.log(filtered)
     show(filtered)
}

show(characters);

//Search History Function

document.getElementById("searchInput").addEventListener('keydown', function(e){
    if(e.key === 'Enter'){
        const searchWords = document.getElementById('searchInput').value.trim().toLowerCase();
        console.log('Enter key pressed for search:', searchWords);
      
        const savedSearches= JSON.parse(localStorage.getItem(searchWords)) || [];
        if(savedSearches>=8){
            savedSearches.shift();
        };
        if(!savedSearches.includes(searchWords)){
            savedSearches.push(searchWords);
        }
        localStorage.setItem('savedSearches', JSON.stringify(savedSearches))
    }
});