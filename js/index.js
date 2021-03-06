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

// Navigation Content
let navItems = document.querySelectorAll("a");
for (let i = 0; i < navItems.length; i++) {
  navItems[i].textContent = siteContent.nav[`nav-item-${i + 1}`];
}

for (let i = 0; i <navItems.length; i++){
  navItems[i].style.color = "green";
}

const newAnchorTag = document.createElement('a');
newAnchorTag.href = "#";
newAnchorTag.textContent = "Blog";
newAnchorTag.style.color = "green";

const mainNav = document.querySelector('nav');
mainNav.appendChild(newAnchorTag);

const newTagTwo = document.createElement('a');
newTagTwo.href = "#";
newTagTwo.textContent = "Portfolio";
mainNav.prepend(newTagTwo);
newTagTwo.style.color = "green";

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// CTA Content
const ctaText = document.querySelector('.cta-text h1');
ctaText.textContent = "Dom\r\n " + "Is\r\n " + "Awesome";
// siteContent["cta"]["h1"]
ctaText.setAttribute('style', 'white-space: pre-line');

const ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = siteContent["cta"]["button"]

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

// Main Content
mainContentH4 = Array.from(document.querySelectorAll(".main-content .text-content h4"));
mainContentH4[0].textContent = siteContent["main-content"]["features-h4"];
mainContentH4[1].textContent = siteContent["main-content"]["about-h4"];
mainContentH4[2].textContent = siteContent["main-content"]["services-h4"];
mainContentH4[3].textContent = siteContent["main-content"]["product-h4"];
mainContentH4[4].textContent = siteContent["main-content"]["vision-h4"];

for (let i = 0; i < mainContentH4.length; i++){
  mainContentH4[i].style.color = "lightblue";
}

mainContentText = Array.from(document.querySelectorAll(".main-content .text-content p"));
mainContentText[0].textContent = siteContent["main-content"]["features-content"];
mainContentText[1].textContent = siteContent["main-content"]["about-content"];
mainContentText[2].textContent = siteContent["main-content"]["services-content"];
mainContentText[3].textContent = siteContent["main-content"]["product-content"];
mainContentText[4].textContent = siteContent["main-content"]["vision-content"];

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src'])

// Contact
const contactHeader = document.querySelector(".contact h4");
contactHeader.textContent = siteContent["contact"]["contact-h4"]

const contactText = Array.from(document.querySelectorAll(".contact p"));
contactText[0].textContent = siteContent["contact"]["address"];
contactText[1].textContent = siteContent["contact"]["phone"];
contactText[2].textContent = siteContent["contact"]["email"];

for (let i = 0; i < contactText.length; i++){
  contactText[i].style.color = "green";
}

contactHeader.style.color = "green";
// Footer
const footerText = document.querySelector("footer");
footerText.textContent = siteContent["footer"]["copyright"];