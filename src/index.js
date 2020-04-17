// no DOMContentLoaded, placed 'defer' in script tag
const puppyUrl =`http://localhost:3000/puppies`
const puppyContainer = document.getElementById('puppy-container')
const puppyForm = document.getElementById('new-puppy-form')

function getPuppy(){
    return fetch(puppyUrl)
    .then(resp => resp.json())
}

getPuppy()
.then(puppies => {
    puppies.forEach(puppy => {
        renderPuppies(puppy)
    })
})

function renderPuppies(puppy){
    let puppyCard = document.createElement('div')
    puppyCard.className = 'puppy-card'

    puppyCard.innerHTML = `
        <img class="puppy-image" src="${puppy.imageUrl}" alt="Picture did not render" class="thumbnail">
        <div class="puppy-details">
            <h3>${puppy.name}</h3>
            <p class="age">Age: ${puppy.age} months</p>
            <p class="breed">Breed: ${puppy.breed}</p>
            <p class="personality">Personality: ${puppy.personality}</p>
        </div>`

        puppyContainer.append(puppyCard)

}

puppyForm.addEventListener('submit', function(event){
    event.preventDefault()
    addDog()
    puppyForm.reset()
})

function addDog(dog_data){
    let newDog = {
        "name": dog_data.name.value,
        "Age In Months": dog_data.ageInMonths.value,
        "Breed": dog_data.breed.value,
        "Personality": dog_data.personality.value,
        "Image Address": dog_data.imageUrl.value
    }

    fetch
}
