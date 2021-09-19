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
        col.classList.add("card", "col-4", "p-2", "mx-2", "mb-4", "cb")
        col.setAttribute("style", "min-width: 150px; max-width: 200px;")

        col.innerHTML = `
        <img src="${obj.album.cover_medium}" class="card-img-top" alt="..." style="height: 182px; width: 182px; object-fit: cover;">
        <div class="card-body">
          <h6 class="card-title">${obj.album.title}</h6>
          <a href="./artist-page.html" style="text-decoration-color: white;">
          <p class="cardtext">${obj.artist.name}</p>
          </a>
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

function metallicaChange () {
  fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=metallica", {
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
    
          const row2 = document.querySelector(".special-row2")
          console.log(row2)
    
          for(let i = 0; i < body.data.length; i++) {
            const obj = body.data[i]
    
            const col = document.createElement("div")
            col.classList.add("card", "col-4", "p-2", "mx-2", "mb-4", "cb")
            col.setAttribute("style", "min-width: 150px; max-width: 200px;")
    
            col.innerHTML = `
            <img src="${obj.album.cover_medium}" class="card-img-top" alt="..." style="height: 182px; width: 182px; object-fit: cover;">
            <div class="card-body">
              <h6 class="card-title">${obj.album.title}</h6>
              <a href="./artist-page.html" style="text-decoration-color: white;">
              <p class="cardtext">${obj.artist.name}</p>
              </a>
            </div>
            `
    
            row2.appendChild(col)
}})
  .catch(err => console.log(err))
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
    
          console.log(body) 
          console.log(body.data) //array of objects inside the promise
    
          const row = document.querySelector(".special-row3")
          console.log(row)
    
          for(let i = 0; i < body.data.length; i++) {
            const obj = body.data[i]
    
            const col = document.createElement("div")
            col.classList.add("card", "col-4", "p-2", "mx-2", "mb-4", "cb")
            col.setAttribute("style", "min-width: 150px; max-width: 200px;")
    
            col.innerHTML = `
            <img src="${obj.album.cover_medium}" class="card-img-top" alt="..." style="height: 182px; width: 182px; object-fit: cover;">
            <div class="card-body">
              <h6 class="card-title">${obj.album.title}</h6>
              <a href="./artist-page.html" style="text-decoration-color: white;">
              <p class="cardtext">${obj.artist.name}</p>
              </a>
            </div>
            `
    
            row.appendChild(col)
}})
  .catch(err => console.log(err))
}

window.onload = () => {
  eminemChange()
  metallicaChange()
  behemothChange()
}