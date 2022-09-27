let addMoreIngredients = document.getElementById('addMoreIngredients')
let addMoreInstructions = document.getElementById('addMoreInstructions')
let ingredients = document.getElementById('ingredientList');
let instructions = document.getElementById('instructions')
let ingredientContainer = document.getElementById('ingredientContainer')


var bttn = document.getElementsByClassName('trash');
for(var i = 0; i < bttn.length; i++) {
  bttn[i].addEventListener("click", deleteIt);
}

addMoreIngredients.onclick = function(){ 
    let newField = document.createElement('input');
    let newSpan = document.createElement('span')
    let newIcon = document.createElement('i')
    newIcon.addEventListener('click', deleteIt)
    newField.setAttribute('type','text');
    newField.setAttribute('name','ingredients')
    newField.setAttribute('placeholder','ingredient')
    newSpan.setAttribute('class','ingredientContainer')
    newIcon.setAttribute('class', 'fa-solid fa-trash-can trash newTrash')
    ingredients.appendChild(newSpan).appendChild(newField)
    newSpan.appendChild(newIcon)
} 
addMoreInstructions.onclick = function(){ 
    let newField = document.createElement('input')
    let newSpan = document.createElement('span')
    let newIcon = document.createElement('i')
    newIcon.addEventListener('click', deleteIt)
    newField.setAttribute('type','text');
    newField.setAttribute('name','instruction')
    newField.setAttribute('placeholder','instruction')
    newIcon.setAttribute('class', 'fa-solid fa-trash-can trash newTrash')
    instructions.appendChild(newSpan).appendChild(newField)
    newSpan.appendChild(newIcon)
} 


function deleteIt(){
    this.parentElement.remove()
}