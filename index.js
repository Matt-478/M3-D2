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
    .then(body => {

      console.log(body) 
      console.log(body.data) //array of objects inside the promise

      const row = document.querySelector(".special-row")

      for(let i = 0; i < body.data.length; i++) {
        const obj = body.data[i]

        const col = document.createElement("div")
        col.className = "col-3"

        col.innerHTML = `
        <div class="card p-2 cb mx-2 mb-4" style="min-width: 150px; max-width: 200px;"> 
          <img src="${obj.album.cover_medium}" class="card-img-top" alt="..."> 
          <div class="card-body"> 
            <h6 class="card-title">${obj.album.title}</h6> 
          </div> 
        </div> 
        `

        row.appendChild(col)
      }



      // let title = document.querySelector(".ultimate-card-eminem .card-body h6")
      // let img = document.querySelector(".ultimate-card-eminem img")
      // let artistName = document.querySelector(".ultimate-card-eminem .card-body p")

      // title.innerHTML = body.data[1].title
      // img.src = body.data[1].album.cover_medium
      // artistName.innerHTML = body.data[1].artist.name



      // <h5 class="m-4">Recently played</h5>


        {/* <div class="container-fluid d-flex justify-content-start flex-wrap"> */}

        {/* <div class="card p-2 cb mx-2 mb-4" style="min-width: 150px; max-width: 200px;"> */}
        {/* <img src="./assets/album.jpg" class="card-img-top" alt="..."> */}
        {/* <div class="card-body"> */}
        {/* <h6 class="card-title">Django Soundtrack</h6> */}
        {/* <div class="play-btn-2 "></div> */}
        {/* <a href="./artist-page.html" style="text-decoration-color: white;"> */}
        {/* <p class="cardtext">Some Great Arist!</p> */}
        {/* </a> */}
        {/* </div> */}
        {/* </div> */}
    })
    .catch(err => {
      console.error(err)
    });
}

// function metallicaChange () {
// }

// function behemothChange () {
// }

window.onload = () => {
  eminemChange()
  // metallicaChange()
  // behemothChange()
}