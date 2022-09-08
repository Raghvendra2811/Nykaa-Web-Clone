var cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [
  {
    image_url:
      "https://content.shop4reebok.com/static/Product-EX4296/reebok_EX4296_1.jpg.plp",
    name: "MEN'S REEBOK RUNNING ROADMAP SHOES",
    price: "1170",
    strikedoffprice: "2599",
    qty: 1,
  },
  {
    image_url:
      "https://content.shop4reebok.com/static/Product-EX3921/reebok_EX3921_1.jpg.plp",
    name: "MEN'S REEBOK SWIM ARUBA FLIP SLIPPERS ",
    price: 699,
    strikedoffprice: 999,
    qty: 1,
  },
  {
    image_url:
      "https://content.shop4reebok.com/static/Product-EX4160/reebok_EX4160_1.jpg.plp",
    name: " MEN'S REEBOK RUNNING AUSTIN SHOES",
    price: 945,
    strikedoffprice: 2099,
    qty: 1,
  },
  {
    image_url:
      "https://content.shop4reebok.com/static/Product-FV8798/MEN_SWIM_SLIPPERS_FV8798_1.jpg.plp",
    name: "MEN'S REEBOK SWIM AVENGER FLIP LP SLIPPERS",
    price: 399,
    strikedoffprice: 799,
    qty: 1,
  },
];
display(cartProducts);

function display(products) {
    if(cartProducts.length>=1){
        document.getElementById("products").style.display="block";
        document.getElementById("couponAll").style.display="block";
        document.getElementById("billHead").style.display="block";
        document.getElementById("cartFooter").style.display="flex";
        document.getElementById("showEmpty").style.display="none";
        displayProducts(cartProducts);
    }
    else{
        
        document.getElementById("products").style.display="none";
        document.getElementById("couponAll").style.display="none";
        document.getElementById("billHead").style.display="none";
        document.getElementById("cartFooter").style.display="none";
        document.getElementById("showEmpty").style.display="block";

    }
    
}

function displayProducts(products){
    document.querySelector("#products").innerText = "";
products.map(function (elem, index) {
    let productDiv = document.createElement("div");
    let productDescription = document.createElement("div");
    let prodcutimg = document.createElement("img");
    let productName = document.createElement("p");
    let deleteIcon = document.createElement("div");
    let amountDiv = document.createElement("div");
    let qtyDiv = document.createElement("div");
    let priceDiv = document.createElement("div");
    let discountAmt = document.createElement("p");
    let actualAmt = document.createElement("h4");

    prodcutimg.setAttribute("src", elem.image_url);
    productName.innerText = elem.name;
    deleteIcon.innerHTML = '<i class="fa-solid fa-trash"></i>';
    qtyDiv.innerHTML =
      '<p>Quantity</p><span id="qtySpan"></span> : <select id="mySelect"> <option value="1">1</option> <option value="2">2</option> <option value="3">3</option> <option value="4">4</option> <option value="5">5</option> </select>';
    qtyDiv.childNodes[3].value = elem.qty;
    qtyDiv.childNodes[3].addEventListener("change", function () {
      changeQty(elem);
    });
    // console.log(deleteIcon.childNodes);
    deleteIcon.childNodes[0].addEventListener("click", function () {
      deleteItem(elem, index);
    });
    discountAmt.innerText = elem.strikedoffprice;
    actualAmt.innerText = elem.price;
    // Quantity Selecter
    priceDiv.append(discountAmt, actualAmt);
    productDescription.append(prodcutimg, productName, deleteIcon);
    productDescription.setAttribute("class", "productDescription");
    amountDiv.append(qtyDiv, priceDiv);
    amountDiv.setAttribute("class", "amountdiv");
    productDiv.append(productDescription, amountDiv);
    document.getElementById("products").append(productDiv);
    productDiv.setAttribute("class", "productDiv");
    qtyDiv.setAttribute("class", "qtyDiv");
    document.getElementById("billItems").innerText = cartProducts.length;
    document.getElementById("bagMrp").innerText = bagMrp(cartProducts);
    document.getElementById("bagDiscount").innerText =
    bagDiscount(cartProducts);
    if(bagDiscount(cartProducts)>=499){
        
        document.getElementById("shippingCost").innerText =0;
    }
    else{
        document.getElementById("shippingCost").innerText =70;

    }
    if(localStorage.getItem("couponApplied")==1){
      document.getElementById("couponAmount").innerText = (bagDiscount(cartProducts)*10/100).toFixed(1);
      
    }
    else{
      document.getElementById("couponAmount").innerText = 0;

    }
    document.getElementById("total").innerText = getTotal();
    document.getElementById("grandTotal").innerText =
    document.getElementById("total").innerText;

  });
}


function getShipping(arr){
    if(bagMrp(arr)>=499){
        return "0";
    }
    return "70";
}
function bagDiscount(arr) {
  return (
    arr.reduce(function (sum, ele) {
      return sum + +ele.strikedoffprice;
    }, 0) - bagOrignalPrice(arr)
  );
}

function bagMrp(arr) {
  return arr.reduce(function (sum, ele) {
    return sum + +ele.strikedoffprice;
  }, 0);
}
function bagOrignalPrice(arr) {
  return arr.reduce(function (sum, ele) {
    return sum + +ele.price;
  }, 0);
}

function getTotal() {
  return (Number(document.getElementById("bagMrp").innerText) -Number(document.getElementById("bagDiscount").innerText) +Number(document.getElementById("couponAmount").innerText)+Number(document.getElementById("shippingCost").innerText));
}

function changeQty(elem) {
  var qtyValue = event.target.value;
  var priceOfItem = elem.price;
  var discountItem = elem.strikedoffprice;
  var qtyItem = elem.qty;

  elem.price = (Number(priceOfItem) / Number(qtyItem)) * Number(qtyValue);
  elem.strikedoffprice =
    (Number(discountItem) / Number(qtyItem)) * Number(qtyValue);
  elem.qty = qtyValue;
  localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  display(cartProducts);
}

function deleteItem(elem, index) {
  var maindiv = event.target.parentElement.parentElement.parentElement;
  maindiv.setAttribute("class", "animation");
  maindiv.innerText = "";
  let warning = document.createElement("h4");
  warning.setAttribute("class", "removeWarning");
  let yesOrNo = document.createElement("div");
  yesOrNo.setAttribute("class", "yesOrNo");
  let yesButton = document.createElement("button");
  let noButton = document.createElement("button");

  warning.innerText = "Remove item from Bag?";
  yesButton.innerText = "Yes";
  yesButton.addEventListener("click", function () {
    removeItemFromCart(index);
  });
  noButton.innerText = "No";

  yesOrNo.append(yesButton, noButton);
  maindiv.append(warning, yesOrNo);
  noButton.addEventListener("click", function () {
    display(cartProducts);
  });
}

function removeItemFromCart(index) {
  cartProducts.splice(index, 1);
  localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  display(cartProducts);
}

document.getElementById("coupons").addEventListener("click",openCoupons);

function openCoupons(){
  var couponBox = document.getElementById("couponApply");

  if(couponBox.style.display=="none"){
    couponBox.style.display="block";
  }
  else{
    couponBox.style.display="none";

  }

}

document.querySelector("form").addEventListener("submit",applyCoupon);

function applyCoupon(){
  event.preventDefault();
  if(document.getElementById("couponcode").value=="NAYKAA10"){
    
    localStorage.setItem("couponApplied",1);
  }
  else{
    
    localStorage.setItem("couponApplied",0);
  }
  display(cartProducts);
}