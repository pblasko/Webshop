const ageBtn = document.querySelector('#age-btn').addEventListener("click", ageValidation);

const hamburger = document.querySelector('.hamburger-icon');
const ageCard = document.querySelector('.my-card');
const mobileMenu = document.querySelector('.mobile-menu-wrapper');

function ageValidation() {
    console.log('click me');
    hamburger.classList.add('showOne');
    hamburger.addEventListener('click', openMobileMenu);
    ageCard.classList.add('hiddenOne');
    getHiddenToElement(ageCard);
}

function openMobileMenu() {
    console.log('menu');
    mobileMenu.classList.add('showTwo');
    getShowToElement(mobileMenu);
}

function getHiddenToElement(item) {
    item.classList.remove('show');
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

function changeHomepageOne() {
    wrapper.classList.remove('showColors');
    wrapper.classList.remove('wrapperStatusNull');
    wrapper.classList.add('wrapperStatusOne');
    card.classList.remove('hiddenCard');
    card.classList.remove('showCard');
    card.classList.add('cardStatusOne');
    menu.classList.remove('hiddenUl');
    menu.classList.add('menu-items');
    first_li.classList.remove('hidden_li');
    first_li.classList.add('show_li');
    setTimeout(() => {
      second_li.classList.remove('hidden_li');
      second_li.classList.add('show_li');
    }, "1000");
    setTimeout(() => {
      third_li.classList.remove('hidden_li');
      third_li.classList.add('show_li');
    }, "2000");
    setTimeout(() => {
      fourth_li.classList.remove('hidden_li');
      fourth_li.classList.add('show_li');
    }, "3000");
    hamburger.classList.add('show_li');
    sectionTwo.classList.remove('hidden-section');
    sectionTwo.classList.add('show-section');
    sectionThree.classList.remove('hidden-section');
    sectionThree.classList.add('show-section');
}

function openMobilMenu() {
    mobilMenuWrapper.classList.remove('closeMobilMenuWrapper');
    mobilMenuWrapper.classList.add('openMobilMenuWrapper');
    mobilMenu.classList.remove('closeMobilMenu');
    mobilMenu.classList.add('openMobilMenu');
}

function closeMobilMenu() {
    mobilMenuWrapper.classList.remove('openMobilMenuWrapper');
    mobilMenuWrapper.classList.add('closeMobilMenuWrapper');
    mobilMenu.classList.remove('openMobilMenu');
    mobilMenu.classList.add('closeMobilMenu');
}
