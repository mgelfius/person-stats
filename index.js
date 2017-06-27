function changeHeading(ev){
    ev.preventDefault()
    const f = ev.target
    const name = f.personName.value
    const age = f.personAge.value
    const textColor = f.color.value
    const gender = f.personGender.value
    const feet = f.heightFeet.value
    const inches = f.heightInches.value
    const bgcolor = f.bgcolor.value
    const heading = document.querySelector('h1')
    const divName = document.querySelector('#divName')
    const divAge = document.querySelector('#divAge')
    const divGender = document.querySelector('#divGender')
    const divHeight = document.querySelector('#divHeight')
    const div = document.querySelector("#stats")


    const list = document.createElement('ul')
    const nameItem = document.createElement('li')
    nameItem.textContent = `Name: ${name}`
    const ageItem = document.createElement('li')
    ageItem.textContent = `Age: ${age}`
    const genderItem = document.createElement('li')
    genderItem.textContent = `Gender: ${gender}`
    const heightItem = document.createElement('li')
    heightItem.textContent = `Height: ${feet}' ${inches}"`
    const colorItem = document.createElement('li')
    colorItem.textContent = `Favorite Color: ${textColor}`

    const colorDiv = renderColor(textColor)
    colorItem.appendChild(colorDiv)

    div.appendChild(list);
    list.appendChild(nameItem)
    list.appendChild(ageItem)
    list.appendChild(genderItem)
    list.appendChild(heightItem)
    list.appendChild(colorItem)

    heading.innerHTML = name + '\'s Stats'
/*
    divName.innerHTML = 'Name: ' + name
    divAge.innerHTML = 'Age: ' + age
    divGender.textContent = 'Gender: ' + gender
    divHeight.textContent = 'Height: ' + feet + '\' ' + inches + '"'
*/
    document.getElementById('stats').style.color = textColor
    document.getElementById('stats').style.background = bgcolor
    document.getElementById('statsHead').style.color = textColor
    document.getElementById('statsHead').style.background = bgcolor
}

function renderColor(textColor){
    const colorDiv = document.createElement('div')
    colorDiv.style.backgroundColor = textColor;
    colorDiv.style.width = '6rem'
    colorDiv.style.height = '3rem'
    return colorDiv
}

//val2 will only be used for height because I have it split into feet and inches
function renderListItem(itemName, val1, val2){
  
}
const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', changeHeading)