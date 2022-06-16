const contentSong = document.querySelector('#songsPopular')
const add = document.querySelector('#add-song')
const iconAdd = document.querySelector('#icon-add')


add.addEventListener("click", function() {
    contentSong.classList.toggle("display")
    if (iconAdd.textContent == "expand_more") {
        iconAdd.textContent = "chevron_right"
    } else {
        iconAdd.textContent = "expand_more"
    }

})

const addSongRock = document.querySelector('#add-song-rock')
const contentSongRock = document.querySelector('#songsRock')
const iconSongRock = document.querySelector('#icon-song-rock')
addSongRock.addEventListener("click", function() {
    if (iconSongRock.textContent == "chevron_right") {
        iconSongRock.textContent = "expand_more"
        contentSongRock.classList.remove("expand")
        contentSongRock.classList.add("songs__container--song")
    } else {
        contentSongRock.classList.add("expand")
        contentSongRock.classList.remove("songs__container--song")
        iconSongRock.textContent = "chevron_right"
    }

})

const addSongPop = document.querySelector('#add-song-pop')
const contentSongPop = document.querySelector('#songsPop')
const iconSongPop = document.querySelector('#icon-add-pop')
addSongPop.addEventListener("click", function() {
    if (iconSongPop.textContent == "chevron_right") {
        iconSongPop.textContent = "expand_more"
        contentSongPop.classList.remove("expand")
        contentSongPop.classList.add("songs__container--song")
    } else {
        contentSongPop.classList.add("expand")
        contentSongPop.classList.remove("songs__container--song")
        iconSongPop.textContent = "chevron_right"
    }

})

const addSongIndie = document.querySelector('#add-song-indie')
const contentSongIndie = document.querySelector('#songsIndie')
const iconSongIndie = document.querySelector('#icon-add-indie')
addSongIndie.addEventListener("click", function() {
    if (iconSongIndie.textContent == "chevron_right") {
        iconSongIndie.textContent = "expand_more"
        contentSongIndie.classList.remove("expand")
        contentSongIndie.classList.add("songs__container--song")
    } else {
        contentSongIndie.classList.add("expand")
        contentSongIndie.classList.remove("songs__container--song")
        iconSongIndie.textContent = "chevron_right"
    }

})

const addSongReggaeton = document.querySelector('#add-song-reggaeton')
const contentSongReggaeton = document.querySelector('#songsReggaeton')
const iconSongReggaeton = document.querySelector('#icon-add-reggaeton')
addSongReggaeton.addEventListener("click", function() {
    if (iconSongReggaeton.textContent == "chevron_right") {
        iconSongReggaeton.textContent = "expand_more"
        contentSongReggaeton.classList.remove("expand")
        contentSongReggaeton.classList.add("songs__container--song")
    } else {
        contentSongReggaeton.classList.add("expand")
        contentSongReggaeton.classList.remove("songs__container--song")
        iconSongReggaeton.textContent = "chevron_right"
    }

})

const addSongFlamenco = document.querySelector('#add-song-flamenco')
const contentSongFlamenco = document.querySelector('#songsFlamenco')
const iconSongFlamenco = document.querySelector('#icon-add-flamenco')
addSongFlamenco.addEventListener("click", function() {
    if (iconSongFlamenco.textContent == "chevron_right") {
        iconSongFlamenco.textContent = "expand_more"
        contentSongFlamenco.classList.remove("expand")
        contentSongFlamenco.classList.add("songs__container--song")
    } else {
        contentSongFlamenco.classList.add("expand")
        contentSongFlamenco.classList.remove("songs__container--song")
        iconSongFlamenco.textContent = "chevron_right"
    }

})

const addSongRumba = document.querySelector('#add-song-rumba')
const contentSongRumba = document.querySelector('#songsRumba')
const iconSongRumba = document.querySelector('#icon-add-rumba')
addSongRumba.addEventListener("click", function() {
    if (iconSongRumba.textContent == "chevron_right") {
        iconSongRumba.textContent = "expand_more"
        contentSongRumba.classList.remove("expand")
        contentSongRumba.classList.add("songs__container--song")
    } else {
        contentSongRumba.classList.add("expand")
        contentSongRumba.classList.remove("songs__container--song")
        iconSongRumba.textContent = "chevron_right"
    }

})


const addSongTradicional = document.querySelector('#add-song-tradicional')
const contentSongTradicional = document.querySelector('#songsTradicional')
const iconSongTradicional = document.querySelector('#icon-add-tradicional')
addSongTradicional.addEventListener("click", function() {
    if (iconSongTradicional.textContent == "chevron_right") {
        iconSongTradicional.textContent = "expand_more"
        contentSongTradicional.classList.remove("expand")
        contentSongTradicional.classList.add("songs__container--song")
    } else {
        contentSongTradicional.classList.add("expand")
        contentSongTradicional.classList.remove("songs__container--song")
        iconSongTradicional.textContent = "chevron_right"
    }

})