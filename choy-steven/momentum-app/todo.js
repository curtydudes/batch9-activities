
let addToDoButton = document.getElementById("add-to-do-button");
let toDoContainer = document.getElementById("to-do-container")
let inputField = document.getElementById("add-to-do");

addToDoButton.addEventListener('click', function(toDoEvent){
    toDoEvent.preventDefault();
    var paragraph = document.createElement('li');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through"
    })

})