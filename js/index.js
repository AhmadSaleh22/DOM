const siteContent = {
  nav: {
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'About',
    'nav-item-6': 'Contact',
    'img-src': 'img/logo.png',
  },
  cta: {
    h1: 'DOM Is Awesome',
    button: 'Get Started',
    'img-src': 'img/header-img.png',
  },
  'main-content': {
    'features-h4': 'Features',
    'features-content':
      'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'about-h4': 'About',
    'about-content':
      'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'middle-img-src': 'img/mid-page.jpg',
    'services-h4': 'Services',
    'services-content':
      'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'product-h4': 'Product',
    'product-content':
      'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'vision-h4': 'Vision',
    'vision-content':
      'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
  },
  contact: {
    'contact-h4': 'Contact',
    address: '123 Way 456 Street Somewhere, USA',
    phone: '1 (888) 888-8888',
    email: 'sales@greatidea.io',
  },
  footer: {
    copyright: 'Copyright Great Idea! 2020',
  },
};

// write your code here


//initializing constants
const nav = document.querySelector('nav')
const navBar = document.querySelectorAll('a')
const Image = document.querySelectorAll('img')
const BigTitle = document.querySelector('h1')
const BtnToReplace = document.querySelector('button')
const secFeature = document.querySelectorAll('h4')
const paragrap = document.querySelectorAll('p')



// -------------------------------------- logo / img ------------------------------------------------------//

// set logo for website 
// 1- let logo to import element from html file "document"
// 2- setAttribute for the website
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// ------------------------------------------------------ navbar -----------------------------------------------//

// Set green color for navbar items

for(i=0 ; i<secFeature.length ; i++){
  secFeature[i].style.color='green';
}


//set names from jason to navbar

navBar[0].textContent = siteContent.nav['nav-item-1'];
navBar[1].textContent = siteContent.nav['nav-item-2'];
navBar[2].textContent = siteContent.nav['nav-item-3'];
navBar[3].textContent = siteContent.nav['nav-item-4'];
navBar[4].textContent = siteContent.nav['nav-item-5'];
navBar[5].textContent = siteContent.nav['nav-item-6'];

for (i=0 ; i<navBar.length ; i++){
  navBar[i].style.color = 'green';
}

//creating element
const newLink1 = document.createElement('a');
newLink1.textContent = 'Map';
//set href
newLink1.href = '#';
//use appendChild to get the same property of ul
nav.appendChild(newLink1);

// creating second element
const newLink2 = document.createElement('a')
newLink2.textContent = 'Developers'
newLink2.href = '#'
nav.prepend(newLink2)



// ------------------------------------------------------ sections -----------------------------------------------//


Image[1].setAttribute('src', siteContent['cta']['img-src'])
Image[2].setAttribute('src', siteContent['main-content']['middle-img-src'])

BigTitle.innerHTML = "Dom <br>Is <br>Awesome!"


secFeature[0].textContent = siteContent['main-content']['features-h4']
paragrap[0].textContent = siteContent['main-content']['features-content']

secFeature[1].textContent = siteContent['main-content']['about-h4']
paragrap[1].textContent = siteContent['main-content']['about-content']


secFeature[2].textContent = siteContent['main-content']['services-h4']
paragrap[2].textContent = siteContent['main-content']['services-content']

secFeature[3].textContent = siteContent['main-content']['features-h4']
paragrap[3].textContent = siteContent['main-content']['features-content']

secFeature[4].textContent = siteContent['main-content']['vision-h4']
paragrap[4].textContent = siteContent['main-content']['vision-content']


// --------------------------- footer / contact -------------------------------//


secFeature[5].textContent = siteContent['contact']['contact-h4']
paragrap[5].textContent = siteContent['contact']['address']
paragrap[6].textContent = siteContent['contact']['phone']
paragrap[7].textContent = siteContent['contact']['email']



// --------------------------- footer / copyright -------------------------------//
paragrap[8].textContent = siteContent['footer']['copyright']





// -----------------------------------------   Stretch Goals if needed  ------------------------------

BtnToReplace.textContent = siteContent['cta']['BtnToReplace']
BtnToReplace.addEventListener('click', (event) => {
  location.reload();
})
