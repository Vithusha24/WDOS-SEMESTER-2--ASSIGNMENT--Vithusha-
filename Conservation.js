fetch('Conservation.json')
    .then(response => response.json())
    .then(data => {


        if(!localStorage.getItem("conservationData")){
            localStorage.setItem('conservationData', JSON.stringify(data));
        }
        
        const conservationData = JSON.parse(localStorage.getItem("conservationData"));
        document.getElementById("Title").innerText = conservationData.div.h1;

        const indexSection = conservationData.sections[0];
        document.getElementById("introTitle").innerText = indexSection.div.section.h2.text;
        document.getElementById('introDescription').innerText = indexSection.div.section.p.text;


        const gallerySection = conservationData.sections[1];
        document.getElementById('galleryTitle').innerText = gallerySection.h2;

        const flexContainer = document.querySelector('.flex-container');
        gallerySection.div.div.forEach((item, index) => {
            const galleryItem = document.createElement('div');
            galleryItem.className = item.class;
            galleryItem.innerHTML = `<p id="item${index}">${item.p}</p>`;
            flexContainer.appendChild(galleryItem);
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });