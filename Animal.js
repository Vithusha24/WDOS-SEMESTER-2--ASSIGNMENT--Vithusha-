
document.addEventListener('DOMContentLoaded', function() {
    fetch('Animal.json')
        .then(response => response.json()) 
        .then(data => {

            if(!localStorage.getItem("AnimalData")){
                localStorage.setItem('AnimalData', JSON.stringify(data));
            }
            
            const display = document.getElementById("animal");

            const AnimalData = JSON.parse(localStorage.getItem("AnimalData"))
            display.innerText = data.animals[0].name;

            const displays = document.getElementById("intro");

    
            displays.innerText = AnimalData.animals[0].description;

            const title = document.getElementById("deer");


            title.innerText = AnimalData.animals[1].name;


            const intro = document.getElementById("deers");


            intro.innerText = AnimalData.animals[1].description;

            const titles = document.getElementById("fish");
            titles.innerText = AnimalData.animals[2].name

            const descrip = document.getElementById("fishes");
            descrip.innerText = AnimalData.animals[2].description

            const blue = document.getElementById("bird");
            blue.innerText = AnimalData.animals[3].name

            const birddescrip = document.getElementById("birds");
            birddescrip.innerText = AnimalData.animals[3].description

            const animal  = document.getElementById("elephant");
            animal.innerText = AnimalData.animals[4].name

            const animals = document.getElementById("elephants");
            animals.innerText = AnimalData.animals[4].description


            const king  = document.getElementById("vulture");
            king.innerText = AnimalData.animals[5].name

            const kings = document.getElementById("vultures");
            king.innerText = AnimalData.animals[5].description

            const park  = document.getElementById("national");
            park.innerText = AnimalData.nationalParks[0].name

            const parks  = document.getElementById("wilpattu");
            parks.innerText = AnimalData.nationalParks[0].description


            const learn  = document.getElementById("links");
            learn.innerText = AnimalData.nationalParks[0].link


            const yala  = document.getElementById("Yala park");
            yala.innerText = AnimalData.nationalParks[1].name

            const name  = document.getElementById("about");
            name.innerText = AnimalData.nationalParks[1].description


            const learns  = document.getElementById("links yala");
            learns.innerText = AnimalData.nationalParks[1].link         
        })
        .catch(error => {
            
            console.log('Error fetching data:', error);
        });
});