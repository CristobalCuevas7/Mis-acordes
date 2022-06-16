import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";
import { app, db } from "./firebase.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js";


app;
db;

const signupForm = document.querySelector('#signup-form');
let user;
let errorCode;
let errorMessage;

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    initCreateUser();

});

function initCreateUser() {
    const email = document.querySelector('#signup-email').value;
    const password = document.querySelector('#signup-password').value;
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            user = userCredential.user;
            console.log(user);
            initUser();

        })
        .catch((error) => {
            errorCode = error.code;
            errorMessage = error.message;

            isValidate();
            console.log(errorCode);
            console.log(errorMessage);
            // ..
        });
}

async function initUser() {

    const name = document.querySelector('#signup-name').value;
    const data = {
        name: name,
    };

    console.log(data.userid)

    await setDoc(doc(db, "users", user.uid), data);
    initView();

};

function initView() {
    window.location.href = "http://127.0.0.1:5500/index.html";
}

function isValidate() {
    if (errorCode == "auth/email-already-exists") {
        swal("El email ya existe", "El email utilizado ya existe. Inserte uno nuevo.", "error")
    };
    if (errorCode == "auth/email-already-in-use") {
        swal("El email ya existe", "El email utilizado ya existe. Inserte uno nuevo.  ", "error")
    };
    if (errorCode == "auth/invalid-email") {
        swal("Email inválido", "El email utilizado no es válido. Intentelo de nuevo", "error")
    };
    if (errorCode == "auth/invalid-password") {
        swal("Contraseña inválida", "La contraseña utilizada no es valida. Debe contener al menos 6 carácteres", "error")
    };
    if (errorCode == "auth/weak-password") {
        swal("Contraseña débil", "La contraseña utilizada es demasiado débil. Debe contener al menos 6 carácteres", "error")
    };
    if (errorCode == "auth/too-many-requests") {
        swal("Demasiadas solicitudes fallida", "Intentelo mas tarde.", "error")
    };
}