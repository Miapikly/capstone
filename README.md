 # Task Manager Code Explanation
 This document provides a detailed explanation of the Task Manager web application code. The application is a simple but complete task management built with HTML, CSS, Javascript.

 ## Table of Contents
 1. [HTML Structure](#html-structure)
 2. [CSS Structure](#css-structure)
 3. [Javascript Functionality](#javascript-functionality)
 4. [Event Handling](#event-handling)
 5. [DOM Elements](#dom-elements)
 6. [Data Array](#data-array)
 7. [UI Rendering](#ui-rendering)
 8. [Data Management](#data-management)
 9. [Event Flow](#event-flow)
 
 ## HTML Structure
 The HTML structure defines the user interface of the Task Manager Application:
 ```javascript
 //Index Page
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="capstone.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bungee+Hairline&family=Coral+Pixels&family=Flavors&family=Fredericka+the+Great&family=Micro+5&family=Rubik+Puddles&display=swap" rel="stylesheet">
</head>
<body class="light">
    <form id="loginForm" onsubmit="return validate()">
        <label for="name">Name: Letters and Numbers Only</label>
        <input type=text id="name" name="name">
        <button type="submit" id="submit">Submit</button>
        <button id="light-btn" class="active">
            Light Theme
        </button>
        <button id="dark-btn">
            Dark Theme
        </button>
        <div id="time"></div>
    </form>
    <script src="capstone.js"></script>
        <script>
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
   </script>
</body>
</html>
```
Key HTML Elements
 - A body element with the light class to default the theme to white theme
 - A form section to get a user's username and validate it
 - A 'label' element to tell the user what they need in their username
 - An 'input' element for the user to type their username
 - A submit button for the user to submit or change user if it does not follow the regex rules
 - Two buttons, light-btn and dark-btn, used for user to choose their theme preference
 - A 'div' for the time active display

## CSS Styling
The CSS styling defines the visual appearance of the task manager
```javascript
:root{
    background: fixed;
}

*{
    margin: 0 auto;
    box-sizing: border-box;
    padding: 0 auto;
}

.light{
    background-color: rgb(144, 144, 150);

    & .nav{
        background-color: cadetblue;
        list-style-type: none;
        padding: 2em;
        display: flex;
        
    }
    
    & a{
        text-decoration: none;
        color: gold;
        font-size: 2.5em;
        font-family: "Fredericka the Great", serif;
        font-weight: 400;
        font-style: normal;
        transition-property: padding, background-color, color, border-radius, border;
        transition-duration: 1s;
    }
    
    & nav a:hover{
        background-color: rgb(91, 190, 158);
        padding: 0.5em;
        border-radius: 1em;
        color: darksalmon;
        border: papayawhip 0.1em dotted;
    }
    
    & .container{
        background-color: honeydew;
        width: 75em;
        height: 18.75em;
    
    
    }
    
    & .box1{
        background-color: honeydew;
        height: 18.75em;
        width: 31.25em;
    
    
    }
    & .box{
        display: flex;
        flex-wrap: wrap;
    }
    
    /* .box3{
        background-color: gold;
        height: 9.375em;
        width: 9.375em;
        position: relative;
        bottom: 35em;
    } */
    
    & .box4{
        background-color: brown;
    
        height: 25em;
        width: 18.75em;
        bottom: 15em;
    }
    
    & .box5{
        border-radius: 0.5em;
        top: 5em;
        background-color: rgb(222, 43, 43);
        height: 25em;
        width: 21.875em;
    
    }
    
    & .layout {
        width: 100%;
      
        display: grid;
        grid:
          "header header header" auto
          "leftSide body rightSide" 1fr
          "footer footer footer" auto
          / auto 1fr auto;
        gap: 8px;
    }
      
    & .header { 
        grid-area: header; 
        background-color: floralwhite;
        height: 150px;
        width: 100%;
    }
    
    & .leftSide { 
        grid-area: leftSide; 
        background-color: lavender;
        width: 300px;
    
    }
    
    & .body { 
        grid-area: body; 
        background-color: lightcoral;
        width: 1650px;
        height: 900px;
    }
    
    & .rightSide { 
        grid-area: rightSide;
        background-color: rgb(202, 253, 200); 
        width: 300px;
    }
    
    & .footer { 
        grid-area: footer; 
        background-color: mistyrose;
        height: 150px;
        width: 100%;
    
    }
    
    & h2{
        text-align: center;
        margin-top: 3em;
        font-size: 3em;
        font-family: "Coral Pixels", serif;
        background-color: honeydew;
        padding: 0.75em;
    }
    
    & input{
        border-radius: 5em;
        padding: 3em;
        width: 75%;
    }

    
    & #searchInput{
/*         margin-top: 2em; */
        width: 75%;
        margin: 2em 1em 1em 5em;
        background-color: lavenderblush;
        border: 0.25em dashed darkcyan;
    }

    & #search-btn{
        width: 15%;
        height: 5em;
        border-radius: 2em;
        background-color: darkcyan;
        border: 0.25em dotted lavenderblush;
        color: lavenderblush;
    }
    
    & label{
        font-size: 5em;
        color: rgb(244, 139, 139);
    }
    
    & form{
        display: flex;
        margin-top: 5em;
        flex-direction: column;
        font-family: "Flavors", serif;
        background-color: azure;
        padding: 10em;
        flex-wrap: wrap;
    }
    
    & #submit{
        width: 10em;
        height: 3em;
        font-size: 2.5em;
        font-family: "Bungee Hairline", serif;
        font-weight: bold;
        color: lightseagreen;
        background-color: papayawhip;
        border-radius: 3em;
        border: 0.25em dashed peachpuff;
        margin-top: 1em;
    }
    
    & #generate-char{
        border-radius: 3em;
        display: flex;
        width: 15em;
        text-align: center;
        height: 2.5em;
        font-size: 2.5em;
        font-family: "Bungee Hairline", serif;
        font-weight: bold;
        margin-top: 2em;
        background-color: antiquewhite;
        color: rgb(113, 189, 182);
        border: 0.05em dashed peachpuff;
    }

    & #container2{
        background-color: azure;
        font-family: "Micro 5", serif;
    }
    
    & #render{
        display: flex;
    }

    & .character{
        background-color: rgb(202, 194, 245);
        margin: 1em;
        padding: 1em;
        text-align: center;
        border-radius: 1.5em;
        color: crimson;
        font-family: "Fredericka The Great", serif;
        font-size: 1em;
    }

    & #light-btn{
        background-color: aliceblue;
        padding: 1em;
        border-radius: 2em;
        color: brown;
        font-size: 1.5em;
        margin: 1.4em 1em 1em 1em;
        font-family: "Coral Pixels",serif;
    }

    & #dark-btn{
        background-color: slategrey;
        padding: 1em;
        border-radius: 2em;
        color: red;
        font-size: 1.5em;
        margin: 1.4em 1em 1em 1em;
        font-family: "Coral Pixels",serif;
    }

    & .footer{
        display: flex;
        justify-content: center;
    }

    & #time{
        text-align: center;
        font-size: 5em;
        color: rgb(0, 0, 0);
        font-family: "Micro 5", serif;
    }

    & #desc{
        font-size: 2em;
        text-align: center;
        font-family: "Fredericka the Great", serif;
        margin: 1em 5em 1em 5em;
        color: rgb(48, 152, 116);
        padding: 2.5em;
        background-color: rgb(229, 255, 246);
        border-radius: 3em;
    }

    & h1{
        color: crimson;
        font-size: 5em;
        text-align: center;
        font-family: "Micro 5", serif;
        margin: 3em 5em 1em 5em;
    }
}

.dark{
    background-color: rgb(70, 63, 70);

    & .nav{
        background-color: darkslategrey;
        list-style-type: none;
        padding: 2em;
        display: flex;
        
    }
    
    & a{
        text-decoration: none;
        color: gold;
        font-size: 2.5em;
        font-family: "Fredericka the Great", serif;
        font-weight: 400;
        font-style: normal;
        transition-property: padding, background-color, color, border-radius, border;
        transition-duration: 1s;
    }
    
    & nav a:hover{
        background-color: rgb(91, 190, 158);
        padding: 0.5em;
        border-radius: 1em;
        color: darksalmon;
        border: papayawhip 0.1em dotted;
    }
    
/*     & body{
        background-color: rgb(144, 144, 150);
    } */
    
    & .container{
        background-color: rgb(85, 84, 126);
        width: 75em;
        height: 18.75em;
    
    
    }
    
    & .box1{
        background-color: rgb(85, 84, 126);
        height: 18.75em;
        width: 31.25em;
    
    
    }
    & .box{
        display: flex;
        flex-wrap: wrap;
    }
    
    
    & .box5{
        border-radius: 0.5em;
        top: 5em;
        background-color: rgb(223, 27, 27);
        height: 25em;
        width: 21.875em;
    
    }
    
    
    & .layout {
        width: 100%;
      
        display: grid;
        grid:
          "header header header" auto
          "leftSide body rightSide" 1fr
          "footer footer footer" auto
          / auto 1fr auto;
        gap: 8px;
    }
      
    & .header { 
        grid-area: header; 
        background-color: rgb(92, 54, 63);
        height: 9.375em;
        width: 100%;
    }
    
    & .leftSide { 
        grid-area: leftSide; 
        background-color: rgb(62, 62, 77);
        width: 18.75em;
    
    }
    
    & .body { 
        grid-area: body; 
        background-color: rgb(67, 44, 67);
        width:103.125em;
        height: 56.25em;
    }
    
    & .rightSide { 
        grid-area: rightSide;
        background-color: rgb(64, 87, 80); 
        width: 18.75em;
    }
    
    & .footer { 
        grid-area: footer; 
        background-color: rgb(121, 83, 89);
        height: 9.375em;
        width: 100%;
    
    }
    
    & h2{
        text-align: center;
        margin-top: 3em;
        font-size: 3em;
        font-family: "Coral Pixels", serif;
        background-color: rgb(90, 86, 114);
        padding: 0.75em;
    }
    
    & input{
        border-radius: 5em;
        padding: 3em;
        width: 75%;
    }

    & #searchInput{
        margin-top: 2em;
    }
    
    & label{
        font-size: 5em;
        color: rgb(255, 5, 5);
    }
    
    & form{
        display: flex;
        margin-top: 5em;
        flex-direction: column;
        font-family: "Flavors", serif;
        background-color: rgb(70, 110, 110);
        padding: 10em;
        flex-wrap: wrap;
    }
    
    & #submit{
        width: 10em;
        height: 3em;
        font-size: 2.5em;
        font-family: "Bungee Hairline", serif;
        font-weight: bold;
        color: rgb(0, 255, 242);
        background-color: rgb(186, 147, 85);
        border-radius: 3em;
        border: 0.25em dashed peachpuff;
        margin-top: 1em;
    }

    & #name{
        background-color: bisque;
    }

    & #searchInput{
        /*         margin-top: 2em; */
        width: 75%;
        margin: 2em 1em 1em 5em;
        background-color: rgb(250, 37, 108);
        border: 0.25em dashed darkcyan;
    }

    & #search-btn{
        width: 15%;
        height: 5em;
        border-radius: 2em;
        background-color: darkcyan;
        border: 0.25em dotted rgb(250, 37, 108);
        color: rgb(250,37,108);
    }
    
    & #generate-char{
        border-radius: 3em;
        display: flex;
        width: 15em;
        text-align: center;
        height: 2.5em;
        font-size: 2.5em;
        font-family: "Bungee Hairline", serif;
        font-weight: bold;
        margin-top: 2em;
        background-color: rgb(190, 150, 94);
        color: rgb(0, 255, 229);
        border: 0.05em dashed peachpuff;
    }

    & #container2{
        background-color: rgb(65, 102, 104);
        font-family: "Micro 5", serif;
    }

    & #render{
        display: flex;
    }

    & .character{
        background-color: rgb(202, 194, 245);
        margin: 1em;
        padding: 1em;
        text-align: center;
        border-radius: 1.5em;
        color: crimson;
        font-family: "Fredericka The Great", serif;
        font-size: 1em;
        flex-wrap: wrap;
    }
    
    & #light-btn{
        background-color: aliceblue;
        padding: 1em;
        border-radius: 2em;
        color: brown;
        font-size: 1.5em;
        margin: 1.4em 1em 1em 1em;
        font-family: "Coral Pixels",serif;
    }

    & #dark-btn{
        background-color: slategrey;
        padding: 1em;
        border-radius: 2em;
        color: red;
        font-size: 1.5em;
        margin: 1.4em 1em 1em 1em;
        font-family: "Coral Pixels",serif;
    }

    & .footer{
        display: flex;
        justify-content: center;
    }
    
    & #time{
        text-align: center;
        font-size: 5em;
        color: white;
        font-family: "Micro 5", serif;
    }

    & #desc{
        font-size: 2em;
        text-align: center;
        font-family: "Fredericka the Great", serif;
        margin: 1em 5em 1em 5em;
        color: turquoise;
        padding: 2.5em;
        background-color: rgb(51, 88, 153);
        border-radius: 3em;
    }

    & h1{
        color: crimson;
        font-size: 5em;
        text-align: center;
        font-family: "Micro 5", serif;
        margin: 3em 5em 1em 5em;
    }
}

h3{
    margin-top: 1em;
}

@media only screen and (max-width: 756px) {
    .box {
      width: 75%;
    }
    .nav{
        flex-direction: column;
    }
    .form{
        width: 100%;
        height: 100%;
        padding: 2em;
    }
    label{
        font-size: 10%;
    }
    #submit{
        width: 5em;
    }
  }
```

Key CSS features
1. **Reset styles**: Sets default margins, padding, and box-sizing for all elements
2. **Navigation styles**: Uses flexbox to organize the listed pages and uses background, color, and border radius to make them more appealing, which when hovered over, change
3. **Container Styling**: Creates a webpage with a gray background with boxes used to display contrasting colors, making a more detailed background
4. **Theme Styles**: Uses nested classes in order to change the webpage appearance as directed by theme preference
5. **Character card**: Styles each card with background color, color, unique font, spacing, and flexbox layout
6. **Button Styles**: Defines appearance for submit buttons, theme buttons, and the generation button
7. **Breakpoints**: Uses breakpoints in order to make a more responsive design based on user's screen size

## Javascript Functionality
The Javascript code handles all the dynamic behavior of the Project Explorer:
### DOM Elements

```javascipt
let container1=document.getElementById("container1")
let themeBtn=document.getElementsByClassName("theme")

const form = document.querySelector("#form");
const input = document.querySelector("#name");
const output = document.querySelector("#output");
console.log(input)

const lightBtn = document.getElementById('light-btn'); 
const darkBtn = document.getElementById('dark-btn'); 
const body = document.body; 
```
This section selects all the necessary DOM elements that will be manipulated

### Data Array
```javascript
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
    },
    {
        name: "Arumei",
        story: "Afterlife Cinema",
        role: "Cult leader's child, joined with Toshi, but Ikeda doesn't like them."
    },
    {
        name: "Vamuli",
        story: "Afterlife Cinema",
        role: "Cult leader who is secretly a time looper, trying to save everyone from their deaths by putting them in a simulation."
    },
    {
        name: "Aepil",
        story: "The Aperture of a Swallowtail",
        role: "The God of conciousness and conscience. A sardine's favorite."
    },
    {
        name: "Daegeha",
        story: "The Aperture of a Swallowtail",
        role: "The God of Shangri-La and the barrier of life and death. Rules the land and is the boss of the other Gods in purgatory. Works closely with Aepil."
    },
    {
        name: "Tomenri",
        story: "The Aperture of a Swallowtail",
        role: "The God of Memento Mori. Newest God and can interact with the real world as a ghost but only to those who knew her and mustn't cause any harm."
    },
    {
        name: "Kisharu",
        story: "The Aperture of a Swallowtail",
        role: "Newly deceased human brought over by Tomenri as a friend. Becomes more involved than wished and becomes a God himself at a different point."
    }
];
```
Given data that will be used to show in the document as needed


### UI Rendering
```javascript
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

let time=0
setInterval(()=>{
    time++
    console.log(time)
    document.getElementById('time').innerHTML=`Time: ${time}`
}, 1000);

```
These functions handle UI updates:
- `generateChar()` : Generates a random character and adds styles to the container
- `show(showing)` : Displays the information of all the characters in the array
- `search()` : Displays the character cards based on what a user has searched for
- `setInterval` : Displays the time as time active increases

### Event Handling
```javascript
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
        //saveYourSearch(searchWords);
       
    }
});

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
setTheme(savedTheme);
document.cookie=`theme = ${savedTheme}; expires=Thu, 10 Jan 2026 00:00:00 UTC;`
});  
```
These event listeners allow for these functions to occur
- Filters items based on searched terms
- Selects a search when the E key is pressed for easier searching
- Changes theme based on a button click
- Adds the theme into the local storage to be accessed again upon opening the page again
- Creates cookie based on theme change
### Data Management
```javascript
//Method 1: Local Storage

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
setTheme(savedTheme);
document.cookie=`theme = ${savedTheme}; expires=Thu, 10 Jan 2026 00:00:00 UTC;`
});  

```
This function implements the core task operations:
- Gives a user-friendly shortcut
- Gets the search user made from the local storage and saves it as an array or initializes the array
- The max-amount of saved searches is 8, deletes the oldest search to make room for a new search
- If a a user's search hasn't been searched before, it will be added to the array
- The searches in the local storage are turned into strings
- Saves the theme preference in the local storage
- When the page is opened again, it will use the saved theme from the local storage
- Adds a cookie based on user's theme preference

## Event Flow
The typical flow of operation is:
1. User logs in -> `validate()` -> `setInterval()` -> `setTheme(theme)`
2. User goes to the character page -> `show(showing)`  
3. User presses generate button -> `generateChar()`
4. User searches on the character page -> `search()` -> `function(e)`
5. User changes theme -> `setTheme(theme)`

This pattern ensures that:
- The time active does not reset when the page is changed
- Theme is set already and if changed, the theme and its data will be changed accordingly
- Based on what a user wants to use on the character page, select functions will do select actions, meaning that the page will only do what the user wants it to do