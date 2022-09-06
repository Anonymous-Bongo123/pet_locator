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
function submit() {
    pet_name = document.getElementById("pet_name").value;
    localStorage.setItem("pet_name", pet_name);
    animal = document.getElementById("animal").value;
    localStorage.setItem("animal", animal);
    pet_breed = document.getElementById("pet_breed").value;
    localStorage.setItem("pet_breed", pet_breed);
    window.location = "pet_lost_list.html"
}