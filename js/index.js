const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let codeImg = document.getElementById('cta-img');
codeImg.setAttribute('src', siteContent['cta']['img-src'])

let middleImage = document.getElementById('middle-img');
middleImage.setAttribute('src', siteContent['main-content']['middle-img-src'])

let navBar = document.querySelectorAll('nav a')
navBar[0].textContent = siteContent['nav']['nav-item-1']
navBar[1].textContent = siteContent['nav']['nav-item-2']
navBar[2].textContent = siteContent['nav']['nav-item-3']
navBar[3].textContent = siteContent['nav']['nav-item-4']
navBar[4].textContent = siteContent['nav']['nav-item-5']
navBar[5].textContent = siteContent['nav']['nav-item-6']


let bigHeading = document.querySelector('h1')
bigHeading.textContent = siteContent['cta']['h1']

let topButton = document.querySelector('button')
topButton.textContent = siteContent['cta']['button']

let topContent = document.querySelectorAll('.text-content h4')
topContent[0].textContent = siteContent['main-content']['features-h4']
topContent[1].textContent = siteContent['main-content']['about-h4']
topContent[2].textContent = siteContent['main-content']['services-h4']
topContent[3].textContent = siteContent['main-content']['product-h4']
topContent[4].textContent = siteContent['main-content']['vision-h4']

let topText = document.querySelectorAll('.text-content p')
topText[0].textContent = siteContent['main-content']['features-content']
topText[1].textContent = siteContent['main-content']['about-content']
topText[2].textContent = siteContent['main-content']['services-content']
topText[3].textContent = siteContent['main-content']['product-content']
topText[4].textContent = siteContent['main-content']['vision-content']

let contactHeader = document.querySelector('.contact h4')
contactHeader.textContent = siteContent['contact']['contact-h4']

let contactInfo = document.querySelectorAll('.contact p')
contactInfo[0].textContent = siteContent['contact']['address']
contactInfo[1].textContent = siteContent['contact']['phone']
contactInfo[2].textContent = siteContent['contact']['email']

let copyRight = document.querySelector('footer p')
copyRight.textContent = siteContent['footer']['copyright']