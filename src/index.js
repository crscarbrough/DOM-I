const siteContent = {
  // DO NOT CHANGE THIS OBJECT
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2021",
  },
  images: {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log("project wired!");

//Condensed way to return the entire nav
const links = document.querySelectorAll("a");

links.forEach(
  (currentValue, i) =>
    (currentValue.textContent = Object.values(siteContent.nav)[i])
);

const addLink = document.querySelector("nav");

// //Creates a new link
// const newAtag = document.createElement("a");
// //Sets the text
// newAtag.textContent = "Outreach";
// //sets the url
// newAtag.href = "#";
// //Adds the new link to the end of the nav
// addLink.appendChild(newAtag);

// //Creates a new link
// const newH3 = document.createElement("h3");
// //Sets the text
// newH3.textContent = "Navigation";
// //Style
// newH3.style.fontSize = "20px";
// //Adds the new link to the beginning of the nav
// addLink.prepend(newH3);

//DOM is Awesome
const ctaH1 = document.querySelectorAll("h1");
ctaH1[0].innerHTML = siteContent["cta"]["h1"];
//Get Started Button
const btn = document.querySelectorAll("button");
btn[0].textContent = siteContent["cta"]["button"];

//Images
//Round
const ctaImg = document.getElementById("cta-img");
ctaImg.src = siteContent.images["cta-img"];
//Long Mid
const midImg = document.getElementById("middle-img");
midImg.src = siteContent.images["accent-img"];
//Logo
const logoImg = document.getElementById("logo-img");
logoImg.src = siteContent.images["logo-img"];

//H4 Titles
const topH4 = document.querySelectorAll("h4");
topH4[0].textContent = siteContent["main-content"]["features-h4"];
topH4[1].textContent = siteContent["main-content"]["about-h4"];
topH4[2].textContent = siteContent["main-content"]["services-h4"];
topH4[3].textContent = siteContent["main-content"]["product-h4"];
topH4[4].textContent = siteContent["main-content"]["vision-h4"];
topH4[5].textContent = siteContent["contact"]["contact-h4"];

//Paragraphs
const pTag = document.querySelectorAll("p");
pTag[0].textContent = siteContent["main-content"]["features-content"];
pTag[1].textContent = siteContent["main-content"]["about-content"];
pTag[2].textContent = siteContent["main-content"]["services-content"];
pTag[3].textContent = siteContent["main-content"]["product-content"];
pTag[4].textContent = siteContent["main-content"]["vision-content"];
pTag[5].textContent = siteContent["contact"]["address"];
pTag[6].textContent = siteContent["contact"]["phone"];
pTag[7].textContent = siteContent["contact"]["email"];

//Footer
const footer = document.querySelector("footer a");
footer.textContent = siteContent["footer"]["copyright"];
