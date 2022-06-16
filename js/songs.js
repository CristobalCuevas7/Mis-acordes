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
    id: "",
    autor_id: "",
    popular: true
}]

//Object

class Song {
    constructor(name, img, autor, genero, id, autor_id, popular) {
        this.name = name;
        this.img = img;
        this.autor = autor;
        this.genero = genero;
        this.id = id;
        this.autor_id = autor_id;
        this.popular = popular;
    }
    toString() {
        return this.name + ', ' + this.img + ', ' + this.autor + ', ' + this.genero + this.id + ', ' + this.autor_id + this.popular;
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
            id: song.id,
            autor_id: song.autor_id,
            popular: song.popular
        };
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new Song(data.name, data.img, data.autor, data.genero, data.id, data.autor_id, data.popular);
    }
};

songsPopular()
songsRock()
songsPop()
songsIndie()
songsReggaeton()
songsFlamenco()
songsRumba()
songsTradicional()
    //Show Most Popular

async function songsPopular() {
    const q = query(collection(db, "songs"), where("popular", "==", true)).withConverter(songConverter);
    const querySnapshot = await getDocs(q);
    for (let i = Allsongs.length; i > 0; i--) {
        Allsongs.pop();
    }



    querySnapshot.forEach((doc) => {


        const songs = doc.data();

        Allsongs.push(songs)
        showSongs(Allsongs);
        console.log(2 + Allsongs)
        console.log(doc.id, " => ", doc.data());
    });
}

function showSongs(songs) {
    let html = '';



    songs.forEach(function(songs) {

        html += `
        <div class="galeria-item">
          <img src="${songs.img}" alt="${songs.name}" width="200px" />
          <a href="song.html?id=${songs.id}">${songs.name}</a>
          <a href="art.html?id=${songs.autor_id}">(${songs.autor})</a>
        </div>
      `;
    });

    $('#songsPopular').html(html);
}


//Show Rock

async function songsRock() {
    const q = query(collection(db, "songs"), where("genero", "==", "rock")).withConverter(songConverter);

    const querySnapshot = await getDocs(q);
    for (let i = Allsongs.length; i > 0; i--) {
        Allsongs.pop();
    }
    querySnapshot.forEach((doc) => {

        const songs = doc.data();

        Allsongs.push(songs)
        showRock(Allsongs);
        console.log(doc.id, " => ", doc.data());
    });
}

function showRock(songs) {
    let html = '';
    songs.forEach(function(songs) {

        html += `
        <div class="galeria-item">
          <img src="${songs.img}" alt="${songs.name}" width="200px" />
          <a href="song.html?id=${songs.id}">${songs.name}</a>
          <a href="art.html?id=${songs.autor_id}">(${songs.autor})</a>
        </div>
      `;
    });

    $('#songsRock').html(html);
}

//Show pop

async function songsPop() {
    const q = query(collection(db, "songs"), where("genero", "==", "pop")).withConverter(songConverter);

    const querySnapshot = await getDocs(q);
    for (let i = Allsongs.length; i > 0; i--) {
        Allsongs.pop();
    }


    querySnapshot.forEach((doc) => {
        const songs = doc.data();

        Allsongs.push(songs)
        showPop(Allsongs);
        console.log(doc.id, " => ", doc.data());
    });
}

function showPop(songs) {
    let html = '';
    songs.forEach(function(songs) {

        html += `
        <div class="galeria-item">
          <img src="${songs.img}" alt="${songs.name}" width="200px" />
          <a href="song.html?id=${songs.id}">${songs.name}</a>
          <a href="art.html?id=${songs.autor_id}">(${songs.autor})</a>
        </div>
      `;
    });

    $('#songsPop').html(html);
}

//Show Indie

async function songsIndie() {
    const q = query(collection(db, "songs"), where("genero", "==", "indie")).withConverter(songConverter);

    const querySnapshot = await getDocs(q);
    for (let i = Allsongs.length; i > 0; i--) {
        Allsongs.pop();
    }
    querySnapshot.forEach((doc) => {
        const songs = doc.data();

        Allsongs.push(songs)
        showIndie(Allsongs);
        console.log(doc.id, " => ", doc.data());
    });

}

function showIndie(songs) {
    let html = '';
    songs.forEach(function(songs) {

        html += `
        <div class="galeria-item">
          <img src="${songs.img}" alt="${songs.name}" width="200px" />
          <a href="song.html?id=${songs.id}">${songs.name}</a>
          <a href="art.html?id=${songs.autor_id}">(${songs.autor})</a>
        </div>
      `;
    });

    $('#songsIndie').html(html);
}
//Show Reggaeton

async function songsReggaeton() {
    const q = query(collection(db, "songs"), where("genero", "==", "reggaeton")).withConverter(songConverter);

    const querySnapshot = await getDocs(q);
    for (let i = Allsongs.length; i > 0; i--) {
        Allsongs.pop();
    }
    querySnapshot.forEach((doc) => {
        const songs = doc.data();

        Allsongs.push(songs)
        showReggaeton(Allsongs);
        console.log(doc.id, " => ", doc.data());
    });

}

function showReggaeton(songs) {
    let html = '';
    songs.forEach(function(songs) {

        html += `
        <div class="galeria-item">
          <img src="${songs.img}" alt="${songs.name}" width="200px" />
          <a href="song.html?id=${songs.id}">${songs.name}</a>
          <a href="art.html?id=${songs.autor_id}">(${songs.autor})</a>
        </div>
      `;
    });

    $('#songsReggaeton').html(html);
}
//Show Flamenco

async function songsFlamenco() {
    const q = query(collection(db, "songs"), where("genero", "==", "flamenco")).withConverter(songConverter);

    const querySnapshot = await getDocs(q);
    for (let i = Allsongs.length; i > 0; i--) {
        Allsongs.pop();
    }
    querySnapshot.forEach((doc) => {
        const songs = doc.data();

        Allsongs.push(songs)
        showFlamenco(Allsongs);
        console.log(doc.id, " => ", doc.data());
    });

}

function showFlamenco(songs) {
    let html = '';
    songs.forEach(function(songs) {

        html += `
        <div class="galeria-item">
          <img src="${songs.img}" alt="${songs.name}" width="200px" />
          <a href="song.html?id=${songs.id}">${songs.name}</a>
          <a href="art.html?id=${songs.autor_id}">(${songs.autor})</a>
        </div>
      `;
    });

    $('#songsFlamenco').html(html);
}
//Show Rumba

async function songsRumba() {
    const q = query(collection(db, "songs"), where("genero", "==", "rumba")).withConverter(songConverter);

    const querySnapshot = await getDocs(q);
    for (let i = Allsongs.length; i > 0; i--) {
        Allsongs.pop();
    }
    querySnapshot.forEach((doc) => {
        const songs = doc.data();

        Allsongs.push(songs)
        showRumba(Allsongs);
        console.log(doc.id, " => ", doc.data());
    });

}

function showRumba(songs) {
    let html = '';
    songs.forEach(function(songs) {

        html += `
        <div class="galeria-item">
        <img src="${songs.img}" alt="${songs.name}" width="200px" />
        <a href="song.html?id=${songs.id}">${songs.name}</a>
        <a href="art.html?id=${songs.autor_id}">(${songs.autor})</a>
      </div>
      `;
    });

    $('#songsRumba').html(html);
}
//Show Tradicional

async function songsTradicional() {
    const q = query(collection(db, "songs"), where("genero", "==", "tradicional")).withConverter(songConverter);

    const querySnapshot = await getDocs(q);
    for (let i = Allsongs.length; i > 0; i--) {
        Allsongs.pop();
    }
    querySnapshot.forEach((doc) => {
        const songs = doc.data();
        Allsongs.push(songs)
        showTradicional(Allsongs);
        console.log(doc.id, " => ", doc.data());
    });

}

function showTradicional(songs) {
    let html = '';
    songs.forEach(function(songs) {

        html += `
        <div class="galeria-item">
        <img src="${songs.img}" alt="${songs.name}" width="200px" />
        <a href="song.html?id=${songs.id}">${songs.name}</a>
        <a href="art.html?id=${songs.autor_id}">(${songs.autor})</a>
      </div>
      `;
    });

    $('#songsTradicional').html(html);
}