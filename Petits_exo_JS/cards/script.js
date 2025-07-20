const body = document.querySelector("body")
const onion = document.querySelector(".onion");
const buttonValidate = document.getElementById("buttonValidate");    

    onion.addEventListener('click', ()=>{

        body.style.backgroundColor = (body.style.backgroundColor === "rgb(94, 125, 90)") ? "rgb(43, 42, 42)" : "rgb(94, 125, 90)"
    })

buttonValidate.addEventListener('click', (event)=> {
event.preventDefault()

const cards = document.getElementById('cards');
const nom  = document.getElementById("nom").value;
const prenom  = document.getElementById("prenom").value;
const adresse = document.getElementById("adresse").value;
const entreprise = document.getElementById("entreprise").value;
const description = document.getElementById("description").value;
const humeur = document.getElementById("humeur").value;  
const form = document.querySelector("form");

const file = imageProfil.files[0];

if (file) {
    
    const reader = new FileReader();
    reader.onload = function (e) {
        const imageProfil = document.getElementById("imageProfil");
        const imgURL = e.target.result
        console.log(imageProfil);
        
        let card = document.createElement('div')
        card.classList.add('card')
        card.innerHTML = 
        `<img src="${imgURL}" alt="${nom} ${prenom}">
        <div>
            <p>Nom : ${nom}</p>
            <p>Prénom : ${prenom}</p>
            <p>Adresse : ${adresse}</p>
            <p>Entreprise : ${entreprise}</p>
            <p>Description : </p><span>${description}</span>
            <p>Vous êtes d'humeur ${humeur}? <button class="${humeur}"> ${humeur} Power !</button></p>
            </div>`;
            cards.append(card)
        }
        let saveCard = JSON.parse(localStorage.getItem)
        reader.readAsDataURL(file)
    }
form.reset();
})