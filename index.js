function changeHeading(ev){
    ev.preventDefault();
    const f = ev.target
    const name = f.personName.value;
    const age = f.personAge.value
    const textColor = f.color.value
    const gender = f.personGender.value
    const feet = f.heightFeet.value
    const inches = f.heightInches.value
    const heading = document.querySelector("h1")
    const divName = document.querySelector("#divName")
    const divAge = document.querySelector("#divAge")
    const divGender = document.querySelector("#divGender")
    const divHeight = document.querySelector("#divHeight")
    
    heading.innerHTML = name + "'s Stats"
    divName.innerHTML = "Name: " + name
    divAge.innerHTML = "Age: " + age
    divGender.textContent = "Gender: " + gender
    divHeight.textContent = "Height: " + feet + "' " + inches + '"'

    document.getElementById("stats").style.color = textColor
}

const personForm = document.querySelector("#person-form")
personForm.addEventListener('submit', changeHeading)