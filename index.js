function handleSubmit(ev){
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
    const div = document.querySelector('#stats');

    const list = renderList(name, age, gender, feet, inches, textColor, bgcolor)
    div.appendChild(list);

    heading.textContent = name + '\'s Stats'

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
  const listItem = document.createElement('li')
  if(val2 !== undefined){
    listItem.textContent = `${itemName}: ${val1}' ${val2}"`
  }else{
    listItem.textContent = `${itemName}: ${val1}`
  }
  return listItem
}

function renderList(name, age, gender, feet, inches, textColor, bgcolor){
    const list = document.createElement('ul')
    const nameItem = renderListItem('Name', name)
    const ageItem = renderListItem('Age', age)
    const genderItem = renderListItem('Gender', gender)
    const heightItem = renderListItem('Height', feet, inches)
    const colorItem = renderListItem('Text color', textColor)
    const bgcolorItem = renderListItem('Background color', bgcolor)

    const colorDiv = renderColor(textColor)
    colorItem.appendChild(colorDiv)
    const bgcolorDiv = renderColor(bgcolor)
    bgcolorItem.appendChild(bgcolorDiv)

    list.appendChild(nameItem)
    list.appendChild(ageItem)
    list.appendChild(genderItem)
    list.appendChild(heightItem)
    list.appendChild(colorItem)
    list.appendChild(bgcolorItem)

    return list;
}
const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', handleSubmit)