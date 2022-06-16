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
const Allarts = [{
    name: "",
    img: "",
    autor: "",
    genero: "",
    chord: "",
    id: "",
    link: "",
    popular: true
}]

//Object

class Art {
    constructor(name, img, genero, id, popular) {
        this.name = name;
        this.img = img;
        this.genero = genero;
        this.id = id
        this.popular = popular;
    }
    toString() {
        return this.name + ', ' + this.img + ', ' + this.genero + this.id + ', ' + this.popular;
    }
}

// Firestore data converter
const artsConverter = {
    toFirestore: (art) => {
        return {
            name: art.name,
            img: art.img,
            genero: art.genero,
            id: art.id,
            popular: art.popular
        };
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new Art(data.name, data.img, data.genero, data.id, data.popular);
    }
};

artsPopular()

let myUser;
async function artsPopular() {

    const valores = window.location.search;

    //Mostramos los valores en consola:
    console.log(valores);

    const urlSearchParams = new URLSearchParams(valores);
    const id = urlSearchParams.get("id");
    console.log("El id es:", id);


    const docRef = doc(db, "arts", id).withConverter(artsConverter);
    const docSnap = await getDoc(docRef);
    myUser = docSnap.data().name;

    for (let i = Allarts.length; i > 0; i--) {
        Allarts.pop();
    }
    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());



        const arts = docSnap.data();
        Allarts.push(arts)
        showSong(Allarts)
        songsPopular()
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
    console.log(myUser)
}


function showSong(arts) {
    let html = '';



    arts.forEach(function(arts) {

        html += `
    <div class="chords-art__container--text">

        <div class="chords-art__container--img">
            <img src="${arts.img}" alt="${arts.name}">
        </div>
        <div   class="chords-art__container--title">
            <h1>${arts.name}</h1>   
            <div class="icon-art">
                    <a class="icon-fav">
                        <span class="material-icons">favorite
                </span>
                    <a class="icon-share">
                        <span class="material-icons">
                        share
                </span>
                    </a>
            </div>
        </div>

    </div>

      `;
    });

    $('#chords-song').html(html);
}


//ArrayList
const Allsongs = [{
    name: "",
    img: "",
    autor: "",
    genero: "",
    chord: "",
    id: "",
    link: "",
    popular: true
}]

//Object

class Song {
    constructor(name, img, autor, genero, chord, id, link, popular) {
        this.name = name;
        this.img = img;
        this.autor = autor;
        this.genero = genero;
        this.chord = chord;
        this.id = id
        this.link = link
        this.popular = popular;
    }
    toString() {
        return this.name + ', ' + this.img + ', ' + this.autor + ', ' + this.genero + this.chord + this.id + ', ' + this.link + ',' + this.popular;
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
            popular: song.popular
        };
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new Song(data.name, data.img, data.autor, data.genero, data.chord, data.id, data.link, data.popular);
    }
};



async function songsPopular() {


    const q = query(collection(db, "songs"), where("autor", "==", myUser)).withConverter(songConverter);

    console.log('hola' + '${myUser}')
    const querySnapshot = await getDocs(q);
    for (let i = Allsongs.length; i > 0; i--) {
        Allsongs.pop();
    }
    querySnapshot.forEach((doc) => {
        const songs = doc.data();
        Allsongs.push(songs)
        showArtSongs(Allsongs);
        console.log(2 + Allsongs)
        console.log(doc.id, " => ", doc.data());
    });

}

function showArtSongs(songs) {
    let html = '';
    songs.forEach(function(songs) {

        html += `
        <div class="galeria-listsong">
          <img src="${songs.img}" alt="${songs.name}" width="200px" />
          <a href="song.html?id=${songs.id}">${songs.name}</a>
        </div>
      `;
    });

    $('#songsArts').html(html);
}