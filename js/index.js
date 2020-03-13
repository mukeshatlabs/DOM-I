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

//Set nav elements
let navElements = document.getElementsByTagName(`a`);
navElements[0].textContent = siteContent["nav"]["nav-item-1"];
navElements[1].textContent = siteContent["nav"]["nav-item-2"];
navElements[2].textContent = siteContent["nav"]["nav-item-3"];
navElements[3].textContent = siteContent["nav"]["nav-item-4"];
navElements[4].textContent = siteContent["nav"]["nav-item-5"];
navElements[5].textContent = siteContent["nav"]["nav-item-6"];

//Set CTAs
document.querySelector(`h1`).textContent = siteContent["cta"]["h1"];
document.querySelector(`button`).textContent = siteContent["cta"]["button"];
document.querySelector(`#cta-img`).src = siteContent["cta"]["img-src"];

//Set main content h4s
document.querySelectorAll(`.main-content .top-content .text-content`)[0].querySelector(`h4`).textContent = siteContent["main-content"]["features-h4"];
document.querySelectorAll(`.main-content .top-content .text-content`)[1].querySelector(`h4`).textContent = siteContent["main-content"]["about-h4"];

document.querySelectorAll(`.main-content .bottom-content .text-content`)[0].querySelector(`h4`).textContent = siteContent["main-content"]["services-h4"];
document.querySelectorAll(`.main-content .bottom-content .text-content`)[1].querySelector(`h4`).textContent = siteContent["main-content"]["product-h4"];
document.querySelectorAll(`.main-content .bottom-content .text-content`)[2].querySelector(`h4`).textContent = siteContent["main-content"]["vision-h4"];

//Set main content ps
document.querySelectorAll(`.main-content .top-content .text-content`)[0].querySelector(`p`).textContent = siteContent["main-content"]["features-content"];
document.querySelectorAll(`.main-content .top-content .text-content`)[1].querySelector(`p`).textContent = siteContent["main-content"]["about-content"];

document.querySelectorAll(`.main-content .bottom-content .text-content`)[0].querySelector(`p`).textContent = siteContent["main-content"]["services-content"];
document.querySelectorAll(`.main-content .bottom-content .text-content`)[1].querySelector(`p`).textContent = siteContent["main-content"]["product-content"];
document.querySelectorAll(`.main-content .bottom-content .text-content`)[2].querySelector(`p`).textContent = siteContent["main-content"]["vision-content"];

//set middle image
document.querySelector(`.middle-img`).src = siteContent["main-content"]["middle-img-src"];

//set contact details
document.querySelectorAll(`.contact h4`)[0].textContent = siteContent["contact"]["contact-h4"];
document.querySelectorAll(`.contact p`)[0].textContent = siteContent["contact"]["address"];
document.querySelectorAll(`.contact p`)[1].textContent = siteContent["contact"]["phone"];
document.querySelectorAll(`.contact p`)[2].textContent = siteContent["contact"]["email"];

//footer details
document.querySelectorAll(`footer p`)[0].textContent = siteContent["footer"]["copyright"];

//change color to green
document.querySelectorAll('a').forEach(element => {element.style.color=`green`;});


//prepend an element
const navElement1 = document.createElement(`a`)
navElement1.textContent = `Home`;
navElement1.style.color = `green`;
document.querySelector(`.container header nav`).prepend(navElement1);

const navElement2 = document.createElement(`a`)
navElement2.textContent = `Login`;
navElement2.style.color = `green`;
document.querySelector(`.container header nav`).append(navElement2);