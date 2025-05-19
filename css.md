# Project Explorer website
## A website for my planned projects and stories
### 1. Global Rest & Box Model
```
*{
    margin: 0 auto;
    box-sizing: border-box;
    padding: 0 auto;
}
```
### 2. Use of CSS Variables
```
:root{
    background: fixed;
    --main-color: rgb(144, 144, 150);
}
```
### 3. Organized CSS Structure
```
/* Light Theme */

.light{
    background-color: rgb(144, 144, 150);

    & .nav{
        background-color: cadetblue;
        list-style-type: none;
        padding: 2em;
        display: flex;
        
    }
}
```
### 4. Responsive Design
```
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
### 5. Typography Styling
```
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
```
### 6. Color Scheme & Contrast
```
    & #dark-btn{
        background-color: slategrey;
        padding: 1em;
        border-radius: 2em;
        color: red;
        font-size: 1.5em;
        margin: 1.4em 1em 1em 1em;
        font-family: "Coral Pixels",serif;
    }
```
### 7. Flexbox/Grid Usage
```
    & form{
        display: flex;
        margin-top: 5em;
        flex-direction: column;
        font-family: "Flavors", serif;
        background-color: azure;
        padding: 10em;
        flex-wrap: wrap;
    }
```
### 8. Button & Input Styling
```
    & #search-btn{
        width: 15%;
        height: 5em;
        border-radius: 2em;
        background-color: darkcyan;
        border: 0.25em dotted lavenderblush;
        color: lavenderblush;
    }
```
### 9. Component Reusability
```
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
```
### 10. CSS Transitions
```
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
```
### 11. Hover/Focus Effects
```
    & nav a:hover{
        background-color: rgb(91, 190, 158);
        padding: 0.5em;
        border-radius: 1em;
        color: darksalmon;
        border: papayawhip 0.1em dotted;
    }
```
### 12. Layout Containers
```
    & .container{
        background-color: rgb(85, 84, 126);
        width: 75em;
        height: 18.75em;
    }
```
### 13. Utility Classes
```
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
```
### 14. Use of Psuedo-classes/elements
```
    & nav a:hover{
        background-color: rgb(91, 190, 158);
        padding: 0.5em;
        border-radius: 1em;
        color: darksalmon;
        border: papayawhip 0.1em dotted;
    }
```
### 15. Shadows & Borders
```
    & nav a:hover{
        background-color: rgb(91, 190, 158);
        padding: 0.5em;
        border-radius: 1em;
        color: darksalmon;
        border: papayawhip 0.1em dotted;
    }
```
### 16. Theme Customization
```
.dark{
    background-color: rgb(70, 63, 70);
}
```
### 17. Naming Conventions
```
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
```
### 18. Cleanliness & Commenting
```
.light{
    background-color: rgb(144, 144, 150);

    & .nav{
        background-color: cadetblue;
        list-style-type: none;
        padding: 2em;
        display: flex;
        
    }
}
```