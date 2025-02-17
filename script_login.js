
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js';

<script src="config.js"></script>
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);


console.log('Script.js foi carregado corretamente!');

 
  document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.getElementById('loginButton');
    const passwordInput = document.getElementById('password');
  
    if (loginButton && passwordInput) {
      // Evento de clique no botão de login
      loginButton.addEventListener('click', loginUser);
  
      // Evento para permitir o login com Enter no campo de senha
      passwordInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
          loginUser();
        }
      });
    }
  });

  
  // Função para realizar o login
  function loginUser() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('Usuário logado:', user);
        localStorage.setItem("userEmail", user.email);
        console.log(user.email)
        window.location.href = "wiki.html";
      })
      .catch((error) => {
        console.error('Erro ao fazer login:', error.message);
        alert("Erro ao fazer login: " + error.message);
      });
  };
  
  
