var allProducts = JSON.parse(localStorage.getItem("allProducts"));

var categoryvariable = localStorage.getItem("categoryvariable") || "#";
var currentPage = 1;
var currentNum = 1;
console.log("current", currentNum);
var displayArray = [];
for (var i = 0; i < allProducts.length; i++) {
  if (categoryvariable === "#") {
    displayArray = allProducts;
    break;
  } else if (allProducts[i].category == categoryvariable) {
    displayArray.push(allProducts[i]);
  }
}

display(displayArray, 1, currentPage);

var cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];

// SORT FUNCTION

function display(displayArray, n, currentPage) {
  let m = n * 15;
  let k = m - 15;
  var z;
  if (displayArray.length > m) z = m;
  else z = displayArray.length;
  console.log("okoko", k, z);
  document.querySelector(".products").innerText = "";
  document.querySelector(".pagination").innerText = "";

  for (var i = k; i < z; i++) {
    let elem = displayArray[i];
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
    ratingDiv.innerHTML =
      '  <span id="review" class="bgwhite"><i class="fa fa-star bgwhite" aria-hidden="true"></i><i class="fa fa-star bgwhite" aria-hidden="true"></i><i class="fa fa-star bgwhite" aria-hidden="true"></i><i class="fa fa-star bgwhite" aria-hidden="true"></i><i class="fa fa-star-half-o bgwhite" aria-hidden="true"></i>4.2/5</span>';

    var extraGift = document.createElement("div");
    extraGift.setAttribute("class", "extraGift bagwhite");
    extraGift.innerText = "Enjoy Free Gift";
    var addBagButton = document.createElement("div");
    addBagButton.innerText = "Add to Bag";
    addBagButton.setAttribute("id", "addBagButton");
    addBagButton.addEventListener("click", function () {
      addToBag(elem);
    });
    detailDiv.append(productDiv, priceDiv, extraGift, ratingDiv);
    card.append(featured, imgDiv, detailDiv, addBagButton);
    card.addEventListener("click", function () {
      showProduct(elem);
    });
    document.querySelector(".products").append(card);
  }
  const paginationSize = Math.ceil(displayArray.length / 15);
  console.log(displayArray, "displayArray");
  console.log(paginationSize, "paginationSize");
  let start = 0;
  let end = 5;
  if (currentPage <= 3) {
    start = 0;
    end = 5;
  } else {
    start = currentPage - 3;
    end = currentPage + 2;
  }
  if (currentPage >= paginationSize) {
    end = paginationSize - 1;
  }
  for (let p = start; p < end; p++) {
    var span = document.createElement("span");
    let className = "span" + (p + 1);
    span.setAttribute("class", className);
    span.innerText = p + 1;
    span.addEventListener("click", function () {
      currentPage = p + 1;
      display(displayArray, p + 1, currentPage);
    });
    document.querySelector(".pagination").append(span);
  }

  let activeClassName = ".span" + currentPage;
  console.log(activeClassName, "act");
  let element = document.querySelector(activeClassName);
  element.setAttribute("class", "active");
  // displayArray.forEach(function (elem, index) {
  //   var card = document.createElement("div");
  //   card.setAttribute("class", "bagwhite card");
  //   var featured = document.createElement("div");
  //   featured.setAttribute("class", "featured bagwhite");
  //   var imgDiv = document.createElement("div");
  //   imgDiv.setAttribute("class", "imgDiv bagwhite");
  //   var detailDiv = document.createElement("div");
  //   detailDiv.setAttribute("class", "detailDiv bagwhite");
  //   featured.innerText = "FEATURED";
  //   var img = document.createElement("img");
  //   img.setAttribute("class", "img bagwhite");
  //   img.setAttribute("src", elem.image);
  //   imgDiv.append(img);
  //   var productDiv = document.createElement("div");
  //   productDiv.setAttribute("class", "productDiv bagwhite");
  //   productDiv.innerText = elem.name;

  //   var priceDiv = document.createElement("div");
  //   priceDiv.setAttribute("class", "priceDiv bagwhite");

  //   var mrp = document.createElement("span");
  //   mrp.setAttribute("class", "mrp bagwhite");
  //   mrp.innerText = "MRP: ";

  //   var strikedPrice = document.createElement("span");
  //   strikedPrice.setAttribute("class", "strikedPrice bagwhite");
  //   strikedPrice.innerText = elem.strikedoffprice;

  //   var price = document.createElement("span");
  //   price.setAttribute("class", "price bagwhite");
  //   price.innerText = elem.price;

  //   var discount = document.createElement("span");
  //   discount.setAttribute("class", "discount bagwhite");
  //   discount.innerText = "10%";
  //   priceDiv.append(mrp, strikedPrice, price, discount);
  //   var ratingDiv = document.createElement("div");
  //   ratingDiv.setAttribute("class", "ratingDiv bagwhite");
  //   ratingDiv.innerText = "* * * * *(4.5)";

  //   var extraGift = document.createElement("div");
  //   extraGift.setAttribute("class", "extraGift bagwhite");
  //   extraGift.innerText = "Enjoy Free Gift";
  //   var addBagButton = document.createElement("div");
  //   addBagButton.innerText = "Add to Bag";
  //   addBagButton.setAttribute("id", "addBagButton");
  //   addBagButton.addEventListener("click", function () {
  //     addToBag(elem);
  //   });
  //   detailDiv.append(productDiv, priceDiv, extraGift, ratingDiv);
  //   card.append(featured, imgDiv, detailDiv, addBagButton);
  //   card.addEventListener("click", function () {
  //     showProduct(elem);
  //   });
  //   document.querySelector(".products").append(card);
  // });
}

function addToBag(elem) {
  event.stopPropagation();
  console.log("------", event);
  for (var i = 0; i < cartProducts.length; i++) {
    if (cartProducts[i].name == elem.name) {
      return;
    }
  }
  cartProducts.push(elem);
  localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
}

function showProduct(elem) {
  localStorage.setItem("specificProduct", JSON.stringify(elem));
  location.href = "product.html";
}

// Sort function HIGH TO LOW

document.getElementById("HtoL").addEventListener("click", function () {
  highToLow(displayArray);
});
document.getElementById("HtoL1").addEventListener("click", function () {
  highToLow(displayArray);
});

function highToLow(arr) {
  displayArray.sort(function (a, b) {
    return b.price - a.price;
  });
  display(displayArray, currentNum);
}

document.getElementById("LtoH").addEventListener("click", function () {
  LowToHigh(displayArray);
});
document.getElementById("LtoH1").addEventListener("click", function () {
  LowToHigh(displayArray);
});

function LowToHigh(arr) {
  displayArray.sort(function (a, b) {
    return a.price - b.price;
  });
  display(displayArray, currentNum);
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
