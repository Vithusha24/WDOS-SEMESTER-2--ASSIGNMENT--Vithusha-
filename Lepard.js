document.addEventListener('DOMContentLoaded', (event) => {
    fetch('Lepard.json')
        .then(response => response.json())
        .then(data => {
            if(!localStorage.getItem("LeopardData")){
                localStorage.setItem('LeopardData', JSON.stringify(data));
            }

            const LeopardData = JSON.parse(localStorage.getItem("LeopardData"))


            
            const titleElement = document.getElementById("Title");
            titleElement.innerText = LeopardData.body.div.h1; 

            const introElement = document.getElementById("intro");
            introElement.innerText = LeopardData.body.section[0].h2.text; 

            const locationElement = document.getElementById("location");
            locationElement.innerText = LeopardData.body.section[0].p.text; 

            
            const lossElement = document.getElementById("hapitat");
            lossElement.innerText = LeopardData.body.section[1].div[0].h3; 
            
            
            const habitElement = document.getElementById("hunt");
            habitElement.innerText = LeopardData.body.section[1].div[1].h3;
            
            const habitsElement = document.getElementById("hunts");
            habitsElement.innerText = LeopardData.body.section[1].div[2].h3;

            const threatElement = document.getElementById("Threat");
            threatElement.innerText = LeopardData.body.section[2].div[0].h2; 

            const threatsElement = document.getElementById("loss");
            threatsElement.innerText = LeopardData.body.section[2].div[1].h2; 

            const illegalElement = document.getElementById("life");
            illegalElement.innerText = LeopardData.body.section[2].div[2].h2; 


            const paragraphElement = document.getElementById("Leopard");
            paragraphElement.innerText = LeopardData.body.section[1].div[0].p;

            const leopardsElement = document.getElementById("Leopard1");
            leopardsElement.innerText = LeopardData.body.section[1].div[1].p;

            const leopardintroElement = document.getElementById("Leopard2");
            leopardintroElement.innerText = LeopardData.body.section[1].div[2].p;



            const protectElement = document.getElementById("Protect1");
            protectElement.innerText = LeopardData.body.section[2].div[0].p;

            const protectintroElement = document.getElementById("Protect2");
            protectintroElement.innerText = LeopardData.body.section[2].div[1].p;

            const protectsintroElement = document.getElementById("Protect3");
            protectsintroElement.innerText = LeopardData.body.section[2].div[2].p;




        })
        .catch(error => {
            console.log('Error fetching data:', error);
        });
});