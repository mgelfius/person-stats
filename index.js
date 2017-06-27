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
    heading.innerHTML = name + "'s Stats"
    const divName = document.querySelector("#divName")
    divName.innerHTML = "Name: " + name
    const divAge = document.querySelector("#divAge")
    divAge.innerHTML = "Age: " + age
    const divGender = document.querySelector("#divGender")
    divGender.textContent = "Gender: " + gender
    const divHeight = document.querySelector("#divHeight")
    divHeight.textContent = "Height: " + feet + "' " + inches + '"'
    document.getElementById("stats").style.color = textColor
}

const personForm = document.querySelector("#person-form")
personForm.addEventListener('submit', changeHeading)