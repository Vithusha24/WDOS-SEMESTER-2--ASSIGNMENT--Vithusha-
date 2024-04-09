const get_data_button = document.getElementById("select");
if (get_data_button)
  get_data_button.addEventListener("click", function (e) {

    const selectPage = document.querySelector(".selection").value;
    let textarea = document.querySelector(".textarea");
    

    if (selectPage == "index") {
      textarea.value = localStorage.getItem("indexData");
    }
    if (selectPage == "Introduction") {
      textarea.value = localStorage.getItem("introData");
    }

    if (selectPage == "Conservation") {
      textarea.value = localStorage.getItem("conservationData");
    }

    if (selectPage == "Leopard") {
      textarea.value = localStorage.getItem("LeopardData");
    }

    if (selectPage == "Animal") {
      textarea.value = localStorage.getItem("AnimalData");
    }

    if (selectPage == "Wilpattu") {
      textarea.value = localStorage.getItem("WilpattuData");
    }

    if (selectPage == "Yala") {
      textarea.value = localStorage.getItem("YalaData");
    }
  });

const editPageButton = document.getElementById("save");

if (editPageButton) {
  editPageButton.addEventListener("click", function (e) {
    e.preventDefault();

    const selectPage = document.querySelector(".selection").value;
    const textareaValue = document.querySelector(".textarea").value;

    if (selectPage && textareaValue) {
      if (selectPage == "index") {
        localStorage.setItem("indexData", textareaValue);
      }

      if (selectPage == "Introduction") {
        localStorage.setItem("introData", textareaValue);
      }

      if (selectPage == "Conservation") {
        localStorage.setItem("conservationData", textareaValue);
      }

      if (selectPage == "Leopard") {
        localStorage.setItem("LeopardData", textareaValue);
      }

      if (selectPage == "Animal") {
        localStorage.setItem("AnimalData", textareaValue);
      }
      

      if (selectPage == "Wilpattu") {
        localStorage.setItem("WilpattuData", textareaValue);
      }

      if (selectPage == "Yala") {
        localStorage.setItem("YalaData", textareaValue);
      }

      
      alert("Data saved to local storage!");
    } else {
      console.log(
        "Error: Something went wrong. Make sure both page and textarea have values."
      );
    }
  });
}