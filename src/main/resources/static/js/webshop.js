const ageBtn = document.querySelector('#age-btn').addEventListener("click", ageValidation);

const hamburger = document.querySelector('.hamburger-icon');
const ageCard = document.querySelector('.my-card');
const mobileMenu = document.querySelector('.mobile-menu-wrapper');
const closeBtn = document.querySelector('.close-icon');

function ageValidation() {
    document.cookie = "status=1";
    hamburger.classList.add('showOne');
    hamburger.addEventListener('click', openMobileMenu);
    ageCard.classList.add('hiddenOne');
    getHiddenToElement(ageCard);
}

function openMobileMenu() {
    hamburger.classList.remove('showOne');
    hamburger.classList.add('hidden');
    closeBtn.classList.remove('hidden');
    closeBtn.classList.add('showOne');
    closeBtn.addEventListener('click', closeMobileMenu);
    mobileMenu.classList.remove('hiddenTwo');
    mobileMenu.classList.add('showTwo');
    getShowToElement(mobileMenu);
}

function closeMobileMenu() {
    closeBtn.classList.remove('showOne');
    closeBtn.classList.add('hidden');
    hamburger.classList.remove('hidden');
    hamburger.classList.add('showOne');
    hamburger.addEventListener('click', openMobileMenu);
    mobileMenu.classList.remove('showTwo');
    mobileMenu.classList.add('hiddenTwo');
    getHiddenToElement(mobileMenu);
}

function getHiddenToElement(item) {
    setTimeout(() => {
        item.classList.add('hidden');
    }, "2000");
}

function getShowToElement(item) {
    item.classList.remove('hidden');
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
    if(document.cookie) {
        if(document.cookie == 'status=0') {
            console.log('status 0');
            changeHomepageNull();
        } else if(document.cookie == 'status=1') {
            console.log('status 1');
            changeHomepageOne();
        } else if(document.cookie == 'status=2') {
            console.log('status 2');
        } else {
            console.log('status error');
        }
    } else {
        document.cookie = "status=0";
        changeHomepageNull();
    }
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

function changeHomepageNull() {
    ageCard.classList.remove('hidden');
    ageCard.classList.remove('show1');
    ageCard.classList.add('show1');
}

function changeHomepageOne() {
    hamburger.classList.add('showOne');
    hamburger.addEventListener('click', openMobileMenu);
    ageCard.classList.add('hidden');
}

function doSomething() {
    console.log(window.innerWidth);
    closeBtn.classList.remove('showOne');
    closeBtn.classList.add('hidden');
    hamburger.classList.remove('hidden');
    hamburger.classList.add('showOne');
    hamburger.addEventListener('click', openMobileMenu);
    mobileMenu.classList.remove('showTwo');
    mobileMenu.classList.add('hiddenTwo');
    getHiddenToElement(mobileMenu);
}

// when Resize browser, check window-width; refresh if current device indice not initial device indice
window.addEventListener('resize', doSomething, true);
