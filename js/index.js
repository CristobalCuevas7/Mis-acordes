import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";
import { app, db, userIcon, userName } from "./firebase.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js";
app;
db;

const auth = getAuth();
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

            document.getElementById('bt-index').style.display = 'none';
            document.getElementById('h2-index').textContent = '¡Bienvenido, ' + docSnap.data().name + '!';
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");

        }

    } else {
        userName.textContent = 'Iniciar Sesión';
        console.log('sign out');

    }
});