document.getElementById("menuBarResponsive").addEventListener("click",menubarOpen);

function menubarOpen(){
    var maindiv = document.createElement("div");
    maindiv.setAttribute("id","menubarOpen");
    
    var div = document.createElement("div");
    var imge  = document.createElement("img");
    var divIcon  =document.createElement("div");

    imge.setAttribute("src","https://nykaa.netlify.app/static/media/NykaaLogo.7512b4b1.svg");
    divIcon.innerHTML='<i class="fa-solid fa-arrow-right" id="closeMenuBar"></i>';
    divIcon.addEventListener("click",closeMenuBar);
    div.setAttribute("id","menubarOpenHead");
    div.append(imge,divIcon);
    
    var a4=document.createElement("a");
    var childDiv4 = document.createElement("div");
    var icon4 = document.createElement("div");
    var h44 = document.createElement("h4")
    icon4.innerHTML='<i class="fa-solid fa-globe"></i>';
    h44.innerText="All Products";
    childDiv4.append(icon4,h44);
    a4.append(childDiv4);
    a4.addEventListener("click",allProductClick);
    
    a4.setAttribute("class","menubarDivs");

    
    var a2=document.createElement("a");
    var childDiv2 = document.createElement("div");
    var icon2 = document.createElement("div");
    var h42  = document.createElement("h4")
    icon2.innerHTML='<i class="fa-solid fa-user"></i>';
    h42.innerHTML='Hello, <span id="userName"> Guest</span>';
    childDiv2.append(icon2,h42);
    a2.append(childDiv2);
    a2.setAttribute("class","menubarDivs");
    a2.addEventListener("click",userClick);

    var a1=document.createElement("a");
    var childDiv = document.createElement("div");
    var icon = document.createElement("div");
    var h4  = document.createElement("div");
    icon.innerHTML='<i class="fa-solid fa-shirt"></i>';
    h4.innerHTML='<details><summary title="Categories">Categories</summary><p>Men</p><p>Women</p><p>Kids</p><p>Skin</p><p>Hair</p></details>'
    childDiv.append(icon,h4);
    a1.append(childDiv);
    a1.setAttribute("class","menubarDivs");

    a2.addEventListener("click",categoriesClick);

    var a3=document.createElement("a");
    var childDiv3 = document.createElement("div");
    var icon3= document.createElement("div");
    var h43 = document.createElement("h4")
    icon3.innerHTML='<i class="fa-solid fa-mobile"></i>';
    h43.innerText="Get App";
    childDiv3.append(icon3,h43);
    a3.append(childDiv3);
    a3.setAttribute("class","menubarDivs");
    maindiv.append(div,a4,a2,a1,a3);

    document.querySelector("html").append(maindiv);
}


function closeMenuBar(){
    document.querySelector("html > div:last-child").remove();
}

function allProductClick(){
    localStorage.setItem("categoryvariable","#");
    location.href="products.html";
}
function userClick(){
    
    location.href="index.html";
}
function categoriesClick(){
    localStorage.setItem("categoryvariable","#");
    location.href="product.html";
}


document.getElementById("nykaaLogo").addEventListener("click",openHome);

function openHome(){
  location.href="homepage.html";
}

document.getElementById("makeup-click").addEventListener("click",categorySelctionFunction1);
document.getElementById("skin-click").addEventListener("click",categorySelctionFunction2);
document.getElementById("appliances-click").addEventListener("click",categorySelctionFunction3);
document.getElementById("bath-click").addEventListener("click",categorySelctionFunction4);
document.getElementById("natural-click").addEventListener("click",categorySelctionFunction5);
document.getElementById("mom-click").addEventListener("click",categorySelctionFunction6);
document.getElementById("health-click").addEventListener("click",categorySelctionFunction7);
document.getElementById("men-click").addEventListener("click",categorySelctionFunction8);
document.getElementById("fragrance-click").addEventListener("click",categorySelctionFunction9);
document.getElementById("pop-click").addEventListener("click",categorySelctionFunction10);
document.getElementById("hair-click").addEventListener("click",categorySelctionFunction11);

function categorySelctionFunction1(){
  localStorage.setItem("categoryvariable","makeup")
}
function categorySelctionFunction2(){
  localStorage.setItem("categoryvariable","skin")
}
function categorySelctionFunction3(){
  localStorage.setItem("categoryvariable","appliances")
}
function categorySelctionFunction4(){
  localStorage.setItem("categoryvariable","bath")
}
function categorySelctionFunction5(){
  localStorage.setItem("categoryvariable","natural")
}
function categorySelctionFunction6(){
  localStorage.setItem("categoryvariable","mom&baby")
}
function categorySelctionFunction7(){
  localStorage.setItem("categoryvariable","health")
}
function categorySelctionFunction8(){
  localStorage.setItem("categoryvariable","men")
}
function categorySelctionFunction9(){
  localStorage.setItem("categoryvariable","fragrance")
}
function categorySelctionFunction10(){
  localStorage.setItem("categoryvariable","popups")
}
function categorySelctionFunction11(){
  localStorage.setItem("categoryvariable","hair")
}


//Cart Functionality



  
  document.querySelector("#cartIcon").addEventListener("click", showCart);
  
  
  function showCart(){
    let cartBox = document.createElement("div");
    cartBox.setAttribute("id", "cartBox");
    let cartMain = document.createElement("div");
    let cartHead = document.createElement("div");
    let cartFoot = document.createElement("div");
    let embedTag = document.createElement("embed");
    cartHead.setAttribute("id", "cartHeader");
    cartHead.innerHTML =
      '<div id="cartHeader"><i class="fa-solid fa-arrow-left"></i><h2>Bag</h2></div>';
    embedTag.setAttribute("type", "text/html");
    embedTag.setAttribute("src", "cart.html");
    embedTag.setAttribute("id", "embedCart");
    embedTag.setAttribute("onclick", "updateCart()");
    cartMain.append(embedTag);
    cartBox.append(cartHead, cartMain);
    document.querySelector("html").append(cartBox);
    cartHead.childNodes[0].childNodes[0].addEventListener("click", removeElement);
    document.querySelector("body").setAttribute("class", "opacityClass");
  }
  function showNull() {
    let cartBox = document.createElement("div");
    cartBox.setAttribute("id", "cartBox");
    let cartHead = document.createElement("div");
    let noItems = document.createElement("div");
    let noItemsImg = document.createElement("div");
    let noItemsSubHead = document.createElement("p");
    let noItemsHead = document.createElement("h2");
    let noItemsGoToShop = document.createElement("button");
    
    noItems.setAttribute("id","noItems");
  
    cartHead.setAttribute("id", "cartHeader");
    noItemsHead.innerText="Your Shopping Bag is Empty";
    noItemsSubHead.innerText="This feels too light! Go on, add all your favourites";
    noItemsGoToShop.innerHTML="Start Shopping";
    noItems.append(noItemsImg,noItemsHead,noItemsSubHead,noItemsGoToShop);
    cartBox.append(cartHead, noItems);
    document.querySelector("html").append(cartBox);
    cartHead.childNodes[0].childNodes[0].addEventListener("click", removeElement);
    document.querySelector("body").setAttribute("class", "opacityClass");
  //   document.querySelector("body").addEventListener("class",removeCartSection);
  }
  
  function removeElement() {
    event.target.parentElement.parentElement.parentElement.remove();
    document.querySelector("body").classList.remove("opacityClass");
  }
  
  function getTotal(cartProducts) {
    var cartTotal = cartProducts.reduce(function (sum, ele) {
      return sum + Number(ele.price);
    }, 0);
  
    if (cartTotal > 499) {
      return cartTotal;
    }
    return cartTotal + 70;
  }
  
 