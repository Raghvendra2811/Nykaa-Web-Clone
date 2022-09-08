var dataArr=[{
    productImage:"https://honasa-mamaearth-production.imgix.net/u/b/ubtan_scurb_wash_u8j8uwoqnpyohxlf.jpg",
    productName:"MamaEarth Utban Face Wash",
    quantity: 2,
    property:50+"ml",
    sellPrice:"₹"+1800,
    actualPrice:"₹"+600,
},
{
    productImage:"https://cdn.shopify.com/s/files/1/0272/4714/9155/products/himalaya-men-intense-oil-clear-lemon-face-wash-100ml_1024x1024.jpg?v=1627641338",
    productName:"Himalya Men Face Wash",
    quantity: 1,
    property:50+"ml",
    sellPrice:"₹"+1000,
    actualPrice:"₹"+600,
}
]
var calcObj={
totalQuantity:2,
subTotal:"₹"+1200,
shipping:"Free",
discount:"₹"+0,
grandTotal:"₹"+1200,
}

var pTopLeft=document.createElement("p");
pTopLeft.innerText=calcObj.totalQuantity+" Items in your Bag";
pTopLeft.setAttribute("id","pTopLeft");
 var pTopRight =document.createElement("p");
 pTopRight.innerText="EDIT";
 pTopRight.setAttribute("id","pTopRight")
 document.getElementById("top").append(pTopLeft,pTopRight);
 console.log(pTopLeft,pTopRight,calcObj.totalQuantity)
 if(calcObj.totalQuantity>1){
    dataArr.map(function(elem){
        var mainDiv=document.createElement("div");
        mainDiv.setAttribute("id","mainDiv");
        var imageDiv=document.createElement("div");
        var image =document.createElement("img");
        image.setAttribute("id","pdImage");
        image.setAttribute("alt",elem.productName);
        image.setAttribute("src",elem.productImage);
        imageDiv.setAttribute("id","imageDiv");
        var desDiv=document.createElement("div");
        desDiv.setAttribute("id","desDiv");
        var div1=document.createElement("div");
        var p1=document.createElement("p");
        p1.innerText=elem.productName;
        div1.setAttribute("id","div1");
        var div2=document.createElement("div");
        div2.setAttribute("id","div2");
        div2.innerText=elem.property;
        var div3=document.createElement("div");
        div3.setAttribute("id","div3");
       var p31=document.createElement("p");
       p31.innerText="QTY : "+elem.quantity;
       p31.setAttribute("id","p31");
       
        var p32=document.createElement("p");
       p32.innerText=elem.actualPrice;
       p32.setAttribute("id","p32");
       div3.append(p31,p32);
       div1.append(p1);
       desDiv.append(div1,div2,div3);
       imageDiv.append(image);
       mainDiv.append(imageDiv,desDiv);
       document.getElementById("mid").append(mainDiv);
    })
 }
 var pb11=document.createElement("p");//1
 pb11.innerText="Sub Total";
 pb11.setAttribute("id","pb11");
 var pb12=document.createElement("p");
 pb12.innerText=calcObj.subTotal;
 pb12.setAttribute("id","pb12");
 document.getElementById("divb1").append(pb11,pb12);
 var pb21=document.createElement("p");//2
 pb21.innerText="Shipping Charge";
 pb21.setAttribute("id","pb21");
 var pb22=document.createElement("p");
 pb22.innerText=calcObj.shipping;
 pb22.setAttribute("id","pb22");
 document.getElementById("divb2").append(pb21,pb22);
 var pb31=document.createElement("p");//3
 pb31.innerText="Discount";
 pb31.setAttribute("id","pb31");
 var pb32=document.createElement("p");
 pb32.innerText="-"+calcObj.discount;
 pb32.setAttribute("id","pb32");
 document.getElementById("divb3").append(pb31,pb32);
 var pb41=document.createElement("p");//4
 pb41.innerText="Grand Total";
 pb41.setAttribute("id","pb41");
 var pb42=document.createElement("p");
 pb42.innerText=calcObj.grandTotal;
 pb42.setAttribute("id","pb42");
 document.getElementById("divb4").append(pb41,pb42);
    

//  bottom low

var addressObj=JSON.parse(localStorage.getItem("shipaddress"));
console.log(addressObj);
var title=document.getElementById("bl1");
title.innerText="Shipping Address";

var Uname=document.getElementById("bl2");
Uname.innerText=addressObj.username;


var Uaddress=document.getElementById("bl3");
Uaddress.innerText=addressObj.userAddress;


var Ucode=document.getElementById("bl4");
Ucode.innerText=addressObj.userPincode;


var Country=document.getElementById("bl5");
Country.innerText=addressObj.countryName;

var Unumber=document.getElementById("bl6");
Unumber.innerText=addressObj.userNumber;


