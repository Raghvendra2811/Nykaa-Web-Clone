var element = JSON.parse(localStorage.getItem("specificProduct")) || {};
var cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];
console.log(element);
var image = document.getElementById("image");
image.setAttribute("src", element.image);
var productname = document.getElementById("product-name");
productname.innerText = element.name;

var strikedoffprice = document.getElementsByClassName("strikedPrice");
strikedoffprice[0].innerText = element.strikedoffprice;

var originalprice = document.getElementsByClassName("price");
originalprice[0].innerText = element.price;

function changeHeart() {
  var filledHeart = document.querySelector(".fa-heart-o");
  var emptyHeart = document.querySelector(".fa-heart");
  if (filledHeart) filledHeart.setAttribute("class", "fa fa-heart bgwhite");
  if (emptyHeart) emptyHeart.setAttribute("class", "fa fa-heart-o bgwhite");
}

document
  .getElementById("descriptin-li")
  .addEventListener("click", showDescription);
function showDescription() {
  document.getElementById("writingsec").innerText = "";
  var p1 = document.createElement("p");
  p1.innerText =
    " Your skin’s youth powered by nature’s ingenuity. StarringImmortelle Super extract, a naturally derived alternative toretinol, this multi-purpose face oil helps to defy thevisible signs of aging and intensely nourish your skin.Younger-looking skin from the 1st use.";
  var b1 = document.createElement("b");
  var b2 = document.createElement("b");
  var br1 = document.createElement("br");
  var p2 = document.createElement("p");

  b1.innerText = "Benefits:";
  p2.append(b1);
  var br2 = document.createElement("br");
  var p3 = document.createElement("p");
  p3.innerText =
    "- After 28 days, skin looks plumped-up and feels denser. Skin glows with vibrant luminosity.";
  var br3 = document.createElement("br");
  p3.append(br3);
  var p4 = document.createElement("p");
  p4.innerText =
    " - Visible efficacy on wrinkles, firmness, skin volume, evenness and vibrancy.";
  var br4 = document.createElement("br");
  p4.append(br4);
  var p5 = document.createElement("p");
  p5.innerText =
    " - Patent pending in France. Tested under dermatological supervision.";
  var br5 = document.createElement("br");

  b2.innerText = "L'Occitane’s Commitments:";
  var p6 = document.createElement("p");
  p6.append(b2);
  var br6 = document.createElement("br");
  var p7 = document.createElement("p");
  p7.innerText = "- 40 years of expertise in natural origin ingredients";
  var br3 = document.createElement("br");
  p7.append(br6);
  var p8 = document.createElement("p");
  p8.innerText = " - Sustainably-sourced Immortelle";
  var br7 = document.createElement("br");
  p8.append(br7);
  var p9 = document.createElement("p");
  var br9 = document.createElement("br");
  p9.innerText = "- Printed on paper obtained from sustainable forests";
  document
    .getElementById("writingsec")
    .append(p1, br1, b1, br2, p3, p4, p5, br5, p6, br9, p7, p8, p9);
}

document.getElementById("addBag").addEventListener("click", function () {
  addToBag(element);
});

function addToBag(elem) {
  console.log("------", event);
  for (var i = 0; i < cartProducts.length; i++) {
    if (cartProducts[i].name == elem.name) {
      return;
    }
  }
  cartProducts.push(elem);
  localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
}

document
  .getElementById("Ingredients-li")
  .addEventListener("click", showIngredients);
function showIngredients() {
  document.getElementById("writingsec").innerText = "";
  var br1 = document.createElement("br");
  var br2 = document.createElement("br");

  var p1 = document.createElement("p");
  var p2 = document.createElement("p");
  var p3 = document.createElement("p");
  var p4 = document.createElement("p");
  var p5 = document.createElement("p");

  var b1 = document.createElement("b");
  b1.innerText = "Key Ingredients:";
  p1.append(b1);

  var b2 = document.createElement("b");
  b2.innerText = "- Immortelle Super Extract";
  p2.append(b2);
  p2.innerText =
    " This naturally derived retinol alternative helps to enhance skin’s volume and structure.";

  var b3 = document.createElement("b");
  b3.innerText = "- Immortelle Essential Oil";
  p3.append(b3);
  p3.innerText =
    " Naturally derived antioxidant powerhouse, alternative to vitamin E.";

  var b4 = document.createElement("b");
  b4.innerText = "- Immortelle Oil Extract:";
  p4.append(b4);
  p4.innerText =
    " With omegas 9 and 6 known for their nourishing properties.- Exclusive Patented Complex";

  var b5 = document.createElement("b");
  b5.innerText = "Full Ingredient List:";
  p5.append(b4);
  p5.innerText =
    "Caprylic/Capric Triglyceride, Helianthus Annuus (Sunflower) Seed Oil, Octyldodecanol, Coco-Caprylate/Caprate, Squalane, Borago Officinalis Seed Oil, Helichrysum Italicum Flower Oil, Helichrysum Italicum Flower/Stem Extract, Helichrysum Italicum Extract, Echium Plantagineum Seed Oil, Camelina Sativa Seed Oil, Oenothera Biennis (Evening Primrose) Oil, Hippophae Rhamnoides Fruit Oil";

  document.getElementById("writingsec").append(p1, br1, p2, p3, p4, br2, p5);
}

document
  .getElementById("How-To-Use-li")
  .addEventListener("click", showHowToUse);
function showHowToUse() {
  document.getElementById("writingsec").innerText = "";
  // var list=document.createElement("ul");
  var p1 = document.createElement("p");
  var p2 = document.createElement("p");
  var p3 = document.createElement("p");
  p1.innerText =
    "- On a clean face, apply a few drops of the serum and gently massage it into the skin using your fingertips.";
  p2.innerText =
    "- Follow with the application of a light moisturiser for locking in the hydration";
  p3.innerText = "- For best results, use twice daily.";
  document.getElementById("writingsec").append(p1, p2, p3);
  // document.getElementById("writingsec").append(ul);
}
