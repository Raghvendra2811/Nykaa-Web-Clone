import { allProducts } from "./data.js";

var categoryvariable = "skin";

var displayArray = [];
for (var i = 0; i < allProducts.length; i++) {
  if (categoryvariable === "#") {
    displayArray = allProducts;
    break;
  } else if (allProducts[i].category == categoryvariable) {
    displayArray.push(allProducts[i]);
  }
}

display(displayArray);

// SORT FUNCTION

function display(displayArray) {
  document.querySelector(".products").innerText="";
  displayArray.forEach(function (elem, index) {
    var card = document.createElement("div");
    card.setAttribute("class", "bagwhite card");
    var featured = document.createElement("div");
    featured.setAttribute("class", "featured bagwhite");
    var imgDiv = document.createElement("div");
    imgDiv.setAttribute("class", "imgDiv bagwhite");
    var detailDiv = document.createElement("div");
    detailDiv.setAttribute("class", "detailDiv bagwhite");
    featured.innerText = "FEATURED";
    var img = document.createElement("img");
    img.setAttribute("class", "img bagwhite");
    img.setAttribute("src", elem.image);
    imgDiv.append(img);
    var productDiv = document.createElement("div");
    productDiv.setAttribute("class", "productDiv bagwhite");
    productDiv.innerText = elem.name;

    var priceDiv = document.createElement("div");
    priceDiv.setAttribute("class", "priceDiv bagwhite");

    var mrp = document.createElement("span");
    mrp.setAttribute("class", "mrp bagwhite");
    mrp.innerText = "MRP: ";

    var strikedPrice = document.createElement("span");
    strikedPrice.setAttribute("class", "strikedPrice bagwhite");
    strikedPrice.innerText = elem.strikedoffprice;

    var price = document.createElement("span");
    price.setAttribute("class", "price bagwhite");
    price.innerText = elem.price;

    var discount = document.createElement("span");
    discount.setAttribute("class", "discount bagwhite");
    discount.innerText = "10%";
    priceDiv.append(mrp, strikedPrice, price, discount);
    var ratingDiv = document.createElement("div");
    ratingDiv.setAttribute("class", "ratingDiv bagwhite");
    ratingDiv.innerText = "* * * * *(4.5)";

    var extraGift = document.createElement("div");
    extraGift.setAttribute("class", "extraGift bagwhite");
    extraGift.innerText = "Enjoy Free Gift";

    detailDiv.append(productDiv, priceDiv, extraGift, ratingDiv);
    card.append(featured, imgDiv, detailDiv);
    card.addEventListener("click", function () {
      showProduct(elem);
    });
    document.querySelector(".products").append(card);
  });
}

function showProduct(elem) {
  localStorage.setItem("specificProduct",elem);
  location.href="product.html";
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
