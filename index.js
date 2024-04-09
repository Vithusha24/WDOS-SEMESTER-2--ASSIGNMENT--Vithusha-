fetch('index.json')
    .then(response => response.json())
    .then(data => {

        if(!localStorage.getItem("indexData")){
            localStorage.setItem('indexData', JSON.stringify(data));
        }
        
        
        const indexData = JSON.parse(localStorage.getItem("indexData"))
        
        document.getElementById("title").innerText = indexData.mainContent.intro.title;
        document.getElementById("description").innerText = indexData.mainContent.intro.description;
        document.getElementById("langer").innerText = indexData.mainContent.sections[0].title;
        document.getElementById("descriptionlangur").innerText = indexData.mainContent.sections[0].description;
        document.getElementById("loris").innerText = indexData.mainContent.sections[1].title;
        document.getElementById("descriptionloris").innerText = indexData.mainContent.sections[1].description;
        document.getElementById("lily").innerText = indexData.mainContent.sections[2].title;
        document.getElementById("descriptionlily").innerText = indexData.mainContent.sections[2].description;

        
        const otherAttractionsTitle = document.getElementById("title"); 
        otherAttractionsTitle.innerText = indexData.mainContent.otherAttractions.title;

        const otherAttractionsPoints = document.querySelectorAll("#mountain, #mountains, #effort");
        const otherAttractionsPlanning = document.querySelectorAll("#planning, #plan, #plans");

        
        indexData.mainContent.otherAttractions.points.forEach((point, index) => {
            otherAttractionsPoints[index].innerText = point;
        });

        indexData.mainContent.otherAttractions.planning.forEach((plan, index) => {
            otherAttractionsPlanning[index].innerText = plan;
        });
    })
    .catch(error => {
        console.log('Error fetching data:', error);
    });

    var news_subscription_form = JSON.parse(localStorage.getItem('news_subscription_form'));
            if (!news_subscription_form) {
                news_subscription_form = [];
                localStorage.setItem('news_subscription_form', JSON.stringify(news_subscription_form));
            }

    document.getElementById('FormLetter').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get input value
        const email = document.getElementById('email').value;
        
        // Check if the email already exists in subscriptions
        const existingSubscription = news_subscription_form.includes(email);
        
        if (existingSubscription) {
            alert('You are already subscribed to the newsletter.');
        } else {
            // Add the new email to the list of newsletter subscriptions
            news_subscription_form.push(email);
            localStorage.setItem('news_subscription_form', JSON.stringify(news_subscription_form));
            alert('Thank you for subscribing to the newsletter!');
        }
    });

   // index.js

   document.addEventListener('DOMContentLoaded', function() {
    // Check if the user is logged in and is an admin
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.role === "user") {
        // Display the edit button
        document.getElementById("editContentBtn").style.display = "block";
    }

    // Add click event listener to the edit button
    document.getElementById("editContentBtn").addEventListener("click", function() {
        // Redirect to the content editor page
        window.location.href = "Editor.html";
    });

    // Other JavaScript code you may have...
});
