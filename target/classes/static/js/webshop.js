const btn = document.querySelector('button').addEventListener("click", myFunction);
const btn1 = document.getElementById('dataBtn').addEventListener("click", getData);
const wrapper = document.querySelector('.background-wrapper')

function myFunction() {
    console.log('something')
    //wrapper.classList.add('showColors')
}

navigator.geolocation.getCurrentPosition((position) => {
    console.log(position)
    console.log(position.timestamp)
    console.log(new Date(position.timestamp))
    let {latitude, longitude} = position.coords;
    var map = L.map('map').setView([latitude, longitude], 15);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 20,
        minZoom: 1,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    L.marker = L.marker([latitude, longitude]).addTo(map);
    getData(latitude, longitude)
})

function getData(latitude, longitude) {
    fetch("https://api.opencagedata.com/geocode/v1/json?q=" + latitude + "%2C" + longitude + "&key=ce3f79a61d2b41309b782d58c08fe6ee")
      .then((response) => response.json())
      .then((json) => console.log(json));
}

