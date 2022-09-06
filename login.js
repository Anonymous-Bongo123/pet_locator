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
function create() {
    username = document.getElementById("username").value;
    localStorage.setItem("username", username);
    window.location = "did_pet_lost.html";
}
function signUp() {
    window.location = "sign_up.html";
}