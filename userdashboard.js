if(localStorage.getItem("userlog")){
    document.getElementById("edit").innerHTML = `
    <button id="editContentBtn" style="display: none; background-color: #090909; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;">Edit Content</button>`
}

