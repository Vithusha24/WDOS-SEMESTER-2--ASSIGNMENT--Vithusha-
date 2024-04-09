fetch('introduction.json')
    .then(response => response.json())
    .then(data => {

        if(!localStorage.getItem("introData")){
            localStorage.setItem('introData', JSON.stringify(data));
        }


        const IntroData = JSON.parse(localStorage.getItem("introData"))


        const display = document.getElementById("title");
        display.innerText = IntroData.main.sections[0].content;

        const sinharajaName = document.getElementById("sinharaja");
        sinharajaName.innerText = IntroData.main.sections[1].items[0].name;

        const sinharajaDescription = document.getElementById("intro");
        sinharajaDescription.innerText = IntroData.main.sections[1].items[0].description;

        const hortan = document.getElementById("park");
        hortan.innerText = IntroData.main.sections[1].items[1].name; 

        const hortanDescription = document.getElementById("parks");
        hortanDescription.innerText = IntroData.main.sections[1].items[1].description;

        const kumanapark = document.getElementById("kumana");
        kumanapark.innerText = IntroData.main.sections[1].items[2].name; 

        const kumanaparks = document.getElementById("kumanadescription");
        kumanaparks.innerText = IntroData.main.sections[1].items[2].description;


        const leopard = document.getElementById("names");
        leopard.innerText = IntroData.main.sections[2].items[0].animal;

        const leopardDescription = document.getElementById("introduction");
        leopardDescription.innerText = IntroData.main.sections[2].items[0].fact;

        const asian = document.getElementById("elephant");
        asian.innerText = IntroData.main.sections[2].items[1].animal;

        const asianDescription = document.getElementById("elephantintro");
        asianDescription.innerText = IntroData.main.sections[2].items[1].fact;

        const srilanka = document.getElementById("bird");
        srilanka.innerText = IntroData.main.sections[2].items[2].animal;

        const birdDescription = document.getElementById("birdintro");
        birdDescription.innerText = IntroData.main.sections[2].items[2].fact;


    })
    .catch(error => {
        console.log('Error fetching data :', error)
    });