import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";
import { app, db } from "./firebase.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js";

const iconFav = document.querySelector('#icon-fav')

const valores = window.location.search;
const urlSearchParams = new URLSearchParams(valores);
const id = urlSearchParams.get("id");
console.log("El id es:", id);


iconFav.addEventListener("click", function() {
    initUser()
})


async function initUser() {



    const ref = doc(db, "users", user.uid)
    await updateDoc(ref, {
        "fav": push(id)
    });

};