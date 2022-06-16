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
    genero: "",
    id: "",
    songs: [],
    popular: true
}]

//Object

class Art {
    constructor(name, img, genero, id, songs, popular) {
        this.name = name;
        this.img = img;
        this.genero = genero;
        this.id = id;
        this.songs = songs
        this.popular = popular;
    }
    toString() {
        return this.name + ', ' + this.img + ', ' + ', ' + this.genero + this.id + this.songs + ', ' + this.popular;
    }
}

// Firestore data converter
const artConverter = {
    toFirestore: (art) => {
        return {
            name: art.name,
            img: art.img,
            genero: art.genero,
            id: art.id,
            songs: art.songs,
            popular: art.popular
        };
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new Art(data.name, data.img, data.genero, data.id, data.songs, data.popular);
    }
};

artsPopular()
artsRock()
artsPop()
artsIndie()
artsReggaeton()
artsFlamenco()
artsRumba()
artsTradicional()
    //Show Most Popular

async function artsPopular() {
    const q = query(collection(db, "arts"), where("popular", "==", true)).withConverter(artConverter);
    const querySnapshot = await getDocs(q);
    for (let i = Allarts.length; i > 0; i--) {
        Allarts.pop();
    }



    querySnapshot.forEach((doc) => {


        const arts = doc.data();

        Allarts.push(arts)
        showArts(Allarts);
        console.log(doc.id, " => ", doc.data());
    });
}

function showArts(arts) {
    let html = '';



    arts.forEach(function(arts) {

        html += `
        <div class="galeria__item--arts">
          <img src="${arts.img}" alt="${arts.name}" width="200px" />
          <a href="art.html?id=${arts.id}">${arts.name}</a>
        </div>
      `;
    });

    $('#songsPopular').html(html);
}


//Show Rock

async function artsRock() {
    const q = query(collection(db, "arts"), where("genero", "==", "rock")).withConverter(artConverter);

    const querySnapshot = await getDocs(q);
    for (let i = Allarts.length; i > 0; i--) {
        Allarts.pop();
    }
    querySnapshot.forEach((doc) => {

        const arts = doc.data();

        Allarts.push(arts)
        showRock(Allarts);
        console.log(doc.id, " => ", doc.data());
    });
}

function showRock(arts) {
    let html = '';
    arts.forEach(function(arts) {

        html += `
        <div class="galeria__item--arts">
          <img src="${arts.img}" alt="${arts.name}" width="200px" />
          <a href="art.html?id=${arts.id}">${arts.name}</a>
        </div>
      `;
    });

    $('#songsRock').html(html);
}

//Show pop

async function artsPop() {
    const q = query(collection(db, "arts"), where("genero", "==", "pop")).withConverter(artConverter);

    const querySnapshot = await getDocs(q);
    for (let i = Allarts.length; i > 0; i--) {
        Allarts.pop();
    }


    querySnapshot.forEach((doc) => {
        const arts = doc.data();

        Allarts.push(arts)
        showPop(Allarts);
        console.log(doc.id, " => ", doc.data());
    });
}

function showPop(arts) {
    let html = '';
    arts.forEach(function(arts) {

        html += `
        <div class="galeria__item--arts">
          <img src="${arts.img}" alt="${arts.name}" width="200px" />
          <a href="art.html?id=${arts.id}">${arts.name}</a>
        </div>
      `;
    });

    $('#songsPop').html(html);
}

//Show Indie

async function artsIndie() {
    const q = query(collection(db, "arts"), where("genero", "==", "indie")).withConverter(artConverter);

    const querySnapshot = await getDocs(q);
    for (let i = Allarts.length; i > 0; i--) {
        Allarts.pop();
    }
    querySnapshot.forEach((doc) => {
        const arts = doc.data();

        Allarts.push(arts)
        showIndie(Allarts);
        console.log(doc.id, " => ", doc.data());
    });

}

function showIndie(arts) {
    let html = '';
    arts.forEach(function(arts) {

        html += `
        <div class="galeria__item--arts">
          <img src="${arts.img}" alt="${arts.name}" width="200px" />
          <a href="art.html?id=${arts.id}">${arts.name}</a>
        </div>
      `;
    });

    $('#songsIndie').html(html);
}
//Show Reggaeton

async function artsReggaeton() {
    const q = query(collection(db, "arts"), where("genero", "==", "reggaeton")).withConverter(artConverter);

    const querySnapshot = await getDocs(q);
    for (let i = Allarts.length; i > 0; i--) {
        Allarts.pop();
    }
    querySnapshot.forEach((doc) => {
        const arts = doc.data();

        Allarts.push(arts)
        showReggaeton(Allarts);
        console.log(doc.id, " => ", doc.data());
    });

}

function showReggaeton(arts) {
    let html = '';
    arts.forEach(function(arts) {

        html += `
        <div class="galeria__item--arts">
          <img src="${arts.img}" alt="${arts.name}" width="200px" />
          <a href="art.html?id=${arts.id}">${arts.name}</a>
        </div>
      `;
    });

    $('#songsReggaeton').html(html);
}
//Show Flamenco

async function artsFlamenco() {
    const q = query(collection(db, "arts"), where("genero", "==", "flamenco")).withConverter(artConverter);

    const querySnapshot = await getDocs(q);
    for (let i = Allarts.length; i > 0; i--) {
        Allarts.pop();
    }
    querySnapshot.forEach((doc) => {
        const arts = doc.data();

        Allarts.push(arts)
        showFlamenco(Allarts);
        console.log(doc.id, " => ", doc.data());
    });

}

function showFlamenco(arts) {
    let html = '';
    arts.forEach(function(arts) {

        html += `
        <div class="galeria__item--arts">
          <img src="${arts.img}" alt="${arts.name}" width="200px" />
          <a href="art.html?id=${arts.id}">${arts.name}</a>
        </div>
      `;
    });

    $('#songsFlamenco').html(html);
}
//Show Rumba

async function artsRumba() {
    const q = query(collection(db, "arts"), where("genero", "==", "rumba")).withConverter(artConverter);

    const querySnapshot = await getDocs(q);
    for (let i = Allarts.length; i > 0; i--) {
        Allarts.pop();
    }
    querySnapshot.forEach((doc) => {
        const arts = doc.data();

        Allarts.push(arts)
        showRumba(Allarts);
        console.log(doc.id, " => ", doc.data());
    });

}

function showRumba(arts) {
    let html = '';
    arts.forEach(function(arts) {

        html += `
        <div class="galeria__item--arts">
          <img src="${arts.img}" alt="${arts.name}" width="200px" />
          <a href="art.html?id=${arts.id}">${arts.name}</a>
        </div>
      `;
    });

    $('#songsRumba').html(html);
}
//Show Tradicional

async function artsTradicional() {
    const q = query(collection(db, "arts"), where("genero", "==", "tradicional")).withConverter(artConverter);

    const querySnapshot = await getDocs(q);
    for (let i = Allarts.length; i > 0; i--) {
        Allarts.pop();
    }
    querySnapshot.forEach((doc) => {
        const arts = doc.data();
        Allarts.push(arts)
        showTradicional(Allarts);
        console.log(doc.id, " => ", doc.data());
    });

}

function showTradicional(arts) {
    let html = '';
    arts.forEach(function(arts) {

        html += `
        <div class="galeria__item--arts">
          <img src="${arts.img}" alt="${arts.name}" width="200px" />
          <a href="art.html?id=${arts.id}">${arts.name}</a>
        </div>
      `;
    });

    $('#songsTradicional').html(html);
}