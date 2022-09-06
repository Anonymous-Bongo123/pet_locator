const firebaseConfig = {
    apiKey: "AIzaSyD4DuwiMCDiyeopSRCAJUksdilKUsx137k",
    authDomain: "kwwiitter.firebaseapp.com",
    databaseURL: "https://kwwiitter-default-rtdb.firebaseio.com",
    projectId: "kwwiitter",
    storageBucket: "kwwiitter.appspot.com",
    messagingSenderId: "1063054492646",
    appId: "1:1063054492646:web:53dbf5d823f21a8bb18c27",
    measurementId: "G-3SBSGY91YZ"
  };
firebase.initializeApp(firebaseConfig);
function signUp() {
    username = document.getElementById("username").value;
    localStorage.setItem("username", username);
    password = document.getElementById("password").value;
    localStorage.setItem("password", password);
    phone_number = document.getElementById("phone_number").value;
    localStorage.setItem("phone_number", phone_number);
    window.location = "did_pet_lost.html";
}