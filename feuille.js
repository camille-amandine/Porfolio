

const imageArray = document.querySelectorAll(".image img")

imageArray.forEach((image)=> {
    image.addEventListener("mouseenter", eventReaction);
    image.addEventListener("mouseout", retourReaction)
})



// changer taille photo en l'aggrandissant

function eventReaction(event){
    event.target.style.height = "320px"
    console.log (event.target)
}

function retourReaction(event){
    event.target.style.height = "300px"
}

function reaction(changement){
    document.querySelector("#portfolio").classList.toggle("logowhite");
    document.querySelector("#portfolio").classList.toggle("nouveau");

    
    console.log("hello")
}

function textMove() {
    console.log(window.scrollY)
    console.log( window.innerHeight / 2)
    const title = document.querySelector("#portfolio")
    if(window.scrollY > window.innerHeight) {
        console.log('Fin animation : je dépasse')
    } else {
        // Je descends le texte en fonction du nombre de pixel que j'ai scroll (scrollY)
        title.style.top = window.scrollY + 'px'

        // Ratio sur ce que j'ai déjà descendu, permet de grossir le texte peu à peu
        let scale = 1 + window.scrollY / window.innerHeight
        title.style.transform = "scale(" +  scale + ")"
        
    }

    // Si j'ai scroll 80% de ma zone blanche je change la couleur du texte
    if(window.scrollY / window.innerHeight > 0.8) {
        title.classList.add('nouveau')
    } else {
        title.classList.remove('nouveau')
    }
}

window.addEventListener("scroll",textMove)