# Project Explorer website
## A website for my planned projects and stories

### 1. Variable Naming & Indentation
``` 
const characters = []
```

```
setInterval(()=>{
    time++
    console.log(time)
    document.getElementById('time').innerHTML=`Time: ${time}`
}, 1000);
```
### 2. Function Naming and Modular Logic
```
function setTheme(theme){
    console.log("here")
    if (theme === 'dark') { 
            body.classList.remove('light'); 
            body.classList.add('dark'); 

            } else { 
            body.classList.remove('dark'); 
            body.classList.add('light'); 
    } 
    localStorage.setItem('theme-preference', theme); 
}
```
### 3. Array and Objects Usage
```
const characters = [
    {
        name: "Ikeda",
        story: "Afterlife Cinema",
        role: "Worked against the cult in order to help his friend, Toshi, get her mother back."
    },
    {
        name: "Toshi",
        story: "Afterlife Cinema",
        role: "Formed a group with her friends to infiltrate the cult's base to find her mother."
    }
```
### 4. Array Methods
```
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
```

### 5. Looping/Iteration 

```
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
```
### 6. JSON Data Handling
```

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
        //saveYourSearch(searchWords);
       
    }
});
```
### 7. Web Storage (local/session)
```
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
        //saveYourSearch(searchWords);
       
    }
});
```
### 8. Saving/Retrieving User Data
```
const savedTheme = localStorage.getItem('theme-preference');
```
### 9. Cookies with Expiry
```
document.cookie=`theme = ${savedTheme}; expires=Thu, 10 Jan 2026 00:00:00 UTC;`
```
### 10. DOM Manipulation
```
document.createElement('p')
```
### 11. CSS Manipulation via JS
```
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
```
### 12. Theme Preference
```
function setTheme(theme){
    console.log("here")
    if (theme === 'dark') { 
            body.classList.remove('light'); 
            body.classList.add('dark'); 

            } else { 
            body.classList.remove('dark'); 
            body.classList.add('light'); 
    } 
    localStorage.setItem('theme-preference', theme); 
}

lightBtn.addEventListener('click', () => setTheme('light')); 
darkBtn.addEventListener('click', () => setTheme('dark')); 

document.addEventListener('DOMContentLoaded', () => {
    
const savedTheme = localStorage.getItem('theme-preference');
document.createElement('p')
setTheme(savedTheme);
document.cookie=`theme = ${savedTheme}; expires=Thu, 10 Jan 2026 00:00:00 UTC;`
});  
```
### 13. Comments & Code Readability
```
// DOM elements 

let container1=document.getElementById("container1")
let themeBtn=document.getElementsByClassName("theme")

const form = document.querySelector("#form");
const input = document.querySelector("#name");
const output = document.querySelector("#output");
console.log(input)

const lightBtn = document.getElementById('light-btn'); 
const darkBtn = document.getElementById('dark-btn'); 
const body = document.body; 

//Theme Preference function

function setTheme(theme){
    console.log("here")
    if (theme === 'dark') { 
            body.classList.remove('light'); 
            body.classList.add('dark'); 

            } else { 
            body.classList.remove('dark'); 
            body.classList.add('light'); 
    } 
    localStorage.setItem('theme-preference', theme); 
}

lightBtn.addEventListener('click', () => setTheme('light')); 
darkBtn.addEventListener('click', () => setTheme('dark')); 

document.addEventListener('DOMContentLoaded', () => {
    
const savedTheme = localStorage.getItem('theme-preference');
document.createElement('p')
setTheme(savedTheme);
document.cookie=`theme = ${savedTheme}; expires=Thu, 10 Jan 2026 00:00:00 UTC;`
});  
```
### 14. Error Handling & Debugging
```
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
```
### 15. Regex Validation
```
function validate(){
    const inputName=document.getElementById('name').value.trim()
    const output=document.querySelector('.output');

    let re=/^[A-Za-z0-9]+$/
    if(!re.test(inputName)){
        console.log(inputName+ " doesn't meet the requirements")
        output.textContent="Name must contain only letters and numbers (no underscores)"
        return false;
    }

    window.location.href="home.html";
    return false;
}
```
### 16. Timer & Date Object
```
let time=0
setInterval(()=>{
    time++
    console.log(time)
    document.getElementById('time').innerHTML=`Time: ${time}`
}, 1000);
```
### 17. Math, String, Random Methods
```

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
```
### 18. Event Listeners & Shortcuts
```
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
```
### 19. Real Time Search & History
```
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
```
### 20. CRUD Functionality
```
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
```