// Java Script document 

//An array with grocery items 
let groceries = ['bananas', 'lemons', 'eggs', 'coffee'];

//The following function displays each item in the array as list elements in the<ul>tag. 

let itemList = document.querySelector('#itemList');  //selects the id itemList and creates variable 
let input = document.getElementById("input"); //gets element by ID and creates variable 

function displayList() {
    itemList.innerHTML = "";
    for (i = 0; i < groceries.length; i++) {
        let item = document.createElement('li');
        item.innerHTML = groceries[i] + "<span class = 'close'> \u00D7</span>";  //Each created list element contains a span element with a class named close. 
        //Each span element has a value of ‘\u00D7’, which represents the character ‘x’ in unicode.
        itemList.appendChild(item);
    }
}
displayList() //calls displayList function

//the following function updates the grocery items array 
//by getting the value of the text in the <input> tag and adding it to the array.

function updateList() {
    if (input.value === "") {                        //If the input text field is empty, displays an alert to the user 
        alert("Please insert an item")               //indicating that they should insert an item. Else, add the input text to the array.
    } else {
        groceries.push(input.value);
    }
    input.value = '';                               //resets the input text’s value to an empty string.
    displayList()                                   //calls displayList() function to update array items
}

//the callback function of the following addEventListener when the event is triggered, 
//deletes the item from the array and set the display style to none for the specific list parent element.
itemList.addEventListener("click", (event) => {    //a click event listener of the html element with the ID of itemList.
    if (event.target.tagName === 'SPAN') {
        event.target.parentElement.style.display = "none"                   
        let index = groceries.indexOf(event.target.parentElement.firstChild.textContent);          
        groceries.splice(index, 1);        
    }
    if (event.target.tagName === 'LI') {          //If the event’s tag name is a list tag, toggle a checked class on the event element.
        event.target.classList.toggle('checked')
    }
})

//a key up event listener of the HTML element with an input ID.
//If the event key code is equal to ‘13’ (the key code for the ‘Enter’ key), 
//trigger a function on the element with an addButton ID.
input.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
        updateList()
    }
})