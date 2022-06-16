import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";
import { app, db, userIcon, userName } from "./firebase.js";
import { doc, getDoc, collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js";

db;
app;


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

        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");

        }


    } else {
        userName.textContent = 'Iniciar Sesión';
        console.log('sign out');

    }
});

//ArrayList
const Allsongs = [{
    name: "",
    img: "",
    autor: "",
    genero: "",
    chord: "",
    id: "",
    link: "",
    autor_id: "",
    popular: true
}]

//Object

class Song {
    constructor(name, img, autor, genero, chord, id, link, autor_id, popular) {
        this.name = name;
        this.img = img;
        this.autor = autor;
        this.genero = genero;
        this.chord = chord;
        this.id = id
        this.link = link
        this.autor_id = autor_id
        this.popular = popular;
    }
    toString() {
        return this.name + ', ' + this.img + ', ' + this.autor + ', ' + this.genero + this.chord + this.id + ', ' + this.link + ',' + this.autor_id + ',' + this.popular;
    }
}

// Firestore data converter
const songConverter = {
    toFirestore: (song) => {
        return {
            name: song.name,
            img: song.img,
            autor: song.autor,
            genero: song.genero,
            chord: song.chord,
            id: song.id,
            link: song.link,
            autor_id: song.autor_id,
            popular: song.popular
        };
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new Song(data.name, data.img, data.autor, data.genero, data.chord, data.id, data.link, data.autor_id, data.popular);
    }
};

songsPopular()

async function songsPopular() {

    const valores = window.location.search;

    //Mostramos los valores en consola:
    console.log(valores);

    const urlSearchParams = new URLSearchParams(valores);
    const id = urlSearchParams.get("id");
    console.log("El id es:", id);


    const docRef = doc(db, "songs", id).withConverter(songConverter);
    const docSnap = await getDoc(docRef);
    for (let i = Allsongs.length; i > 0; i--) {
        Allsongs.pop();
    }
    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        const songs = docSnap.data();
        Allsongs.push(songs)
        showSong(Allsongs)
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}

function showSong(songs) {
    let html = '';



    songs.forEach(function(songs) {

        html += `
    <div class="chords-song__container--text">

        <div class="chords-song__container--img">
            <img src="${songs.img}" alt="${songs.name}">
        </div>
        <div   class="chords-song__container--title">
            <h1>${songs.name}</h1>
            <a href="art.html?id=${songs.autor_id}">${songs.autor}</a>
            
            <div class="icon-song">
                    <a class="icon-fav">
                        <span class="material-icons">favorite
                </span>
                    </a>
                    <a class="icon-play">
                        <span class="material-icons">
                        play_arrow
                </span>
                    </a>
                    <a class="icon-share">
                        <span class="material-icons">
                        share
                </span>
                    </a>
            </div>
        </div>

        <div class="song-video">

        <iframe width="200" height="130" src="${songs.link}" class="video-stream" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

    </div>

    <div class="chords-song__chords">
        <div class="chords-song__chords--text">
            <pre>${songs.chord}</pre>

        </div>
    </div>
      `;
    });

    $('#chords-song').html(html);
}