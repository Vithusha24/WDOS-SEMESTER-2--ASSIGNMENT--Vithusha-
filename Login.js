document.addEventListener("DOMContentLoaded", function() {
    if (!localStorage.getItem("users")) {
      const initialUsers = {
        "users": [
          {
            "username": "admin",
            "password": "admin",
            "role": "admin",
            "email": "admin@admin.com"
          },
          {
            "username": "user",
            "password": "user",
            "role": "site_user",
            "email": "user@user.com"
          }
        ]
      };
      localStorage.setItem("users", JSON.stringify(initialUsers));
    }
    
    const loginForm = document.getElementById("loginForm");
    const registrationForm = document.getElementById("registrationForm");
    const loginLink = document.getElementById("loginLink");
    const registerLink = document.getElementById("registerLink");
    const message = document.getElementById("message");
  
    loginForm.addEventListener("submit", loginUser);
    registrationForm.addEventListener("submit", registerUser);
    registerLink.addEventListener("click", showRegistrationForm);
    loginLink.addEventListener("click", showLoginForm);
  
    function loginUser(event) {
      event.preventDefault();
      const username = document.getElementById("loginUsername").value;
      const password = document.getElementById("loginPassword").value;
  
      const storedUsers = localStorage.getItem("users");
      if (storedUsers) {
        const users = JSON.parse(storedUsers).users || [];
  
        const user = users.find(u => u.username === username && u.password === password);
        if (user) {


          message.textContent = "Login successful";


          if (user.role === "admin") {
            window.location.href = "admindashboard.html";
            localStorage.setItem("userlog",JSON.stringify("admin"));
          }
           else if (user.role === "site_user") {
            localStorage.setItem("userlog",JSON.stringify("user"));
            window.location.href = "userdashboard.html";
          }
           else {
            window.location.href = "index.html";
            //new user
          }
        } else {
          message.textContent = "Invalid username or password";
        }
      } else {
        message.textContent = "No users found";
      }
    }
  
    function registerUser(event) {
      event.preventDefault();
      const username = document.getElementById("registerUsername").value;
      const email = document.getElementById("registerEmail").value;
      const password = document.getElementById("registerPassword").value;
      
      let users = JSON.parse(localStorage.getItem("users")).users || [];
      
      if (users.find(u => u.username === username)) {
        message.textContent = "User already exists";
        return;
      }
      
      users.push({ username, password, email, role: "site_user" });
      
      localStorage.setItem("users", JSON.stringify({ users }));
      message.textContent = "Registration successful";
    }
  
    function showRegistrationForm(event) {
      event.preventDefault();
      loginForm.style.display = "none";
      registrationForm.style.display = "block";
      message.textContent = ""; 
    }
  
    function showLoginForm(event) {
      event.preventDefault();
      loginForm.style.display = "block";
      registrationForm.style.display = "none";
      message.textContent = ""; 
    }
  });
  