//Array for characters

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


//Time Active Function

let time=0
setInterval(()=>{
    time++
    console.log(time)
    document.getElementById('time').innerHTML=`Time: ${time}`
}, 1000);


