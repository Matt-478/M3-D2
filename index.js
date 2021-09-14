function eminemChange () {
  fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem", {
"method": "GET",
"headers": {
  "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
  "x-rapidapi-key": "87cf04f455mshd260e6df25f60bap1b8868jsne2efda3b987d"
}
})
    .then(response => {
      // console.log(response)
      return response.json()
    })
    // DOM stuff
    .then(body => {
      console.log(body)
      console.log(body.data[1].title)

      let title = document.querySelector(".ultimate-card-eminem .card-body h6")
      let img = document.querySelector(".ultimate-card-eminem img")
      let artistName = document.querySelector(".ultimate-card-eminem .card-body p")

      title.innerHTML = body.data[1].title
      img.src = body.data[1].album.cover_medium
      artistName.innerHTML = body.data[1].artist.name
    })
    .catch(err => {
      console.error(err)
    });
}

function metallicaChange () {
  fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=metallica", {
"method": "GET",
"headers": {
  "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
  "x-rapidapi-key": "87cf04f455mshd260e6df25f60bap1b8868jsne2efda3b987d"
}
})
    .then(response => {
      return response.json()
    })
    .then(body => {
      console.log(body.data[1])

      let titleMetallica = document.querySelector(".ultimate-card-metallica .card-body h6")
      let imgMetallica = document.querySelector(".ultimate-card-metallica img")
      let artistNameMetallica = document.querySelector(".ultimate-card-metallica .card-body p")

      titleMetallica.innerHTML = body.data[2].title
      imgMetallica .src = body.data[1].album.cover_medium
      artistNameMetallica .innerHTML = body.data[1].artist.name
    })
    .catch(err => {
      console.error(err);
  })
}

function behemothChange () {
  fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=behemoth", {
  "method": "GET",
  "headers": {
    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    "x-rapidapi-key": "87cf04f455mshd260e6df25f60bap1b8868jsne2efda3b987d"
  }
  })
  .then(response => {
    return response.json()
  })
  .then(body => {
    console.log("___________________________")
      console.log(body.data[1])


      let titleBehemot = document.querySelector(".ultimate-card-behemot .card-body h6")
      let imgBehemot = document.querySelector(".ultimate-card-behemot img")
      let artistNameBehemot = document.querySelector(".ultimate-card-behemot .card-body p")

      titleBehemot.innerHTML = body.data[2].title
      imgBehemot .src = body.data[1].album.cover_medium
      artistNameBehemot .innerHTML = body.data[1].artist.name
    })
  .catch(err => {
  console.error(err);
  })
}

window.onload = () => {
  eminemChange()
  metallicaChange()
  behemothChange()
}