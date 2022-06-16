import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js";

export const firebaseConfig = {
    apiKey: "AIzaSyADnMAoZwrqVvnHDCoFhFzIAeW-PFFA_lA",
    authDomain: "mis-acordes-88369.firebaseapp.com",
    projectId: "mis-acordes-88369",
    storageBucket: "mis-acordes-88369.appspot.com",
    messagingSenderId: "610442833861",
    appId: "1:610442833861:web:7bfe839b07f78ccc82a5ac",
    measurementId: "G-HP9Q5WVWT8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Selectors
export const userIcon = document.querySelector('#user-icon');
export const userName = document.querySelector('#user-name');
export const profileName = document.querySelector('#profile-name');
export const logout = document.querySelector('#logout')

export const auth = getAuth();





export const getUsers = () => getDocs(collection(db, "users"))