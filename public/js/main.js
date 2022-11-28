let addMoreIngredients = document.getElementById('addMoreIngredients')
let addMoreInstructions = document.getElementById('addMoreInstructions')
let ingredients = document.getElementById('ingredientList');
let instructions = document.getElementById('instructions')
let ingredientContainer = document.getElementById('ingredientContainer')
let dropDown = document.getElementById('dropDownMenu')
let toggleEdit = document.getElementById('toggleEditMode')
let editButton = document.querySelectorAll('.editButton')
let minValue = document.querySelectorAll('#minimumNeeded')
let itemQuantityValue = document.querySelectorAll('#itemQuantity')
let groupPantryItem = document.querySelectorAll('.pantryItem')
let groupPantryButton = document.getElementById('groupPantrySubmitButton')
let inventory = document.querySelectorAll('.inventory')
let groupRecipeList = document.querySelectorAll('.recipeIngredient')
let productName = document.querySelectorAll('.productName')
const form = document.querySelectorAll('.groupPantryEditForm')
const successMessage = document.querySelector('#successMessage')


form.forEach(form => {
    form.addEventListener('submit', (e)=> {
        e.preventDefault()
        successMessage.classList.add('show')
        setTimeout(() => form.submit(), 2000)
    })
})


// form.addEventListener('submit', (e) =>{
//     e.preventDefault()
//     successMessage.classList.add('show')
//     setTimeout(()=> form.submit(), 2000)
// })



productName.forEach(product => {
    groupProductList.push(product.innerText)
})


//need to find a way to cache the ingredients in the pantry to compare them to the recipes in the recipe cards
groupRecipeList.forEach(element => {
    if(element.innerText.split(' ')[1].match(groupProductList)){
        element.style.color = 'red'
    }
    // console.log(element.innerText.split(' ')[1])
})

inventory.forEach(element =>{
    Number(element.children[0].innerHTML) > Number(element.children[2].innerHTML) ? 
    element.closest('li').style.backgroundColor = 'yellow' : console.log('well stocked')
})







// if(minValue >= itemQuantityValue){
//     console.log(minValue)
//     console.log(Number(minValue))
    
// }




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