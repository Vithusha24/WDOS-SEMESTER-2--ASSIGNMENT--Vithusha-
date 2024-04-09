fetch('Wilpattu.json')
    .then(respose => respose.json())
    .then(data => {

        if(!localStorage.getItem("WilpattuData")){
            localStorage.setItem('WilpattuData', JSON.stringify(data));
        }

        const display = document.getElementById("titles");

        const WilpattuData = JSON.parse(localStorage.getItem("WilpattuData"));


        display.innerText = WilpattuData.wilpattu.introduction.title;

        const displays = document.getElementById("intro");

        displays.innerText = WilpattuData.wilpattu.introduction.content;


        const descrip = document.getElementById("explore");

        descrip.innerText = WilpattuData.wilpattu.description.title;

        const introduction = document.getElementById("wilpattu");

        introduction.innerText = WilpattuData.wilpattu.description.content;











    })
    .catch(error => {
        console.log('Error fetching data :', error)
    });