fetch('Yala.json')
    .then(respose => respose.json())
    .then(data => {

        if(!localStorage.getItem("YalaData")){
            localStorage.setItem('YalaData', JSON.stringify(data));
        }

        const YalaData = JSON.parse(localStorage.getItem("YalaData"))

        const titles = document.getElementById("plan");

        titles.innerText = YalaData.yala.introduction.title;

        const display = document.getElementById("plans");

        display.innerText = YalaData.yala.introduction.content;

        const displays = document.getElementById("title");

        displays.innerText = YalaData.yala.conservation.title;

        const text = document.getElementById("contents");

        text.innerText = YalaData.yala.conservation.content;

        const texts = document.getElementById("paragraph");

        texts.innerText = YalaData.yala.conservation.intro;

    })
    .catch(error => {
        console.log('Error fetching data :', error)
    });