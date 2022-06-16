import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";
import { app, userIcon, userName, auth, profileName, logout, db } from "./firebase.js";
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
            profileName.textContent = docSnap.data().name;

        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");

        }

    } else {
        userName.textContent = 'Iniciar Sesión';
        console.log('sign out');

    }
});


logout.addEventListener('click', (e) => {
    e.preventDefault();
    swal({
            title: "¿Quieres cerrar sesión?",
            text: "Puedes volver a iniciar sesión desde la página de inicio",
            icon: "warning",
            buttons: ["Cancelar", "Cerrar"],
            dangerMode: true,
        })
        .then((sesionClose) => {
            if (sesionClose) {

                auth.signOut().then(userCredential => {
                    console.log('sing out')
                    window.location.href = "http://127.0.0.1:5500/logIn.html";
                });
                swal("Sesión cerrada con exito", {
                    icon: "success",
                });
            }
        });

});