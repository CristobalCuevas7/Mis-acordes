import { onAuthStateChanged, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";
import { app, userIcon, userName, auth, db } from "./firebase.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js";

db;
app;


auth
onAuthStateChanged(auth, async(user) => {
    if (user) {

        console.log('sign in');
        const uid = user.uid;

        userName.setAttribute('href', 'profile.html');
        userIcon.setAttribute('href', 'profile.html');

        const docRef = doc(db, "users", uid);
        console.log(uid)
        console.log(docRef)
        const docSnap = await getDoc(docRef);
        console.log(docSnap)

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            userName.textContent = docSnap.data().name;

        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");

        }

    } else {
        userName.textContent = 'Iniciar Sesión';
        console.log('sign out');

    }
});


const signinForm = document.querySelector('#signin-form');
auth;

let errorCode;
let errorMessage;

// Fuction login
signinForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.querySelector('#signin-email').value;

    const password = document.querySelector('#signin-password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            console.log('sign in')
            window.location.href = "http://127.0.0.1:5500/profile.html";
        })
        .catch((error) => {
            errorCode = error.code;
            errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
            isValidate();

            // ..
        });



});

function isValidate() {
    if (errorCode == "auth/wrong-password") {
        swal("Contraseña incorrecta", "Introduce una contraseña válida", "error")
    };
    if (errorCode == "auth/user-not-found") {
        swal("El usuario no existe", "Introduzca un usuario existente", "error")
    };
    if (errorCode == "auth/too-many-requests") {
        swal("Demasiadas solicitudes fallida", "Intentelo mas tarde.", "error")
    };
}