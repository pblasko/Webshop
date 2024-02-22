const btn = document.querySelector('button').addEventListener("click", myFunction);

const wrapper = document.querySelector('.background-wrapper');
const card = document.querySelector('.card');

function myFunction() {
    console.log('something');
    wrapper.classList.add('showColors');
    card.classList.add('hiddenCard');
}

navigator.geolocation.getCurrentPosition((position) => {
    console.log(position)
    console.log(position.timestamp)
    console.log(new Date(position.timestamp))
    let {latitude, longitude} = position.coords;
    /*var map = L.map('map').setView([latitude, longitude], 15);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 20,
        minZoom: 1,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    L.marker = L.marker([latitude, longitude]).addTo(map);*/
    getData(latitude, longitude)
})

function getData(latitude, longitude) {
    fetch("https://api.opencagedata.com/geocode/v1/json?q=" + latitude + "%2C" + longitude + "&key=ce3f79a61d2b41309b782d58c08fe6ee")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        console.log(json.timestamp.created_http);
        console.log(new Date(json.timestamp.created_http).getTime());
        console.log(json.results[0].annotations.timezone.offset_sec);
        const localtimeint = new Date(json.timestamp.created_http).getTime() + json.results[0].annotations.timezone.offset_sec;
        console.log(localtimeint);
        console.log(new Date(localtimeint));
      });
}

