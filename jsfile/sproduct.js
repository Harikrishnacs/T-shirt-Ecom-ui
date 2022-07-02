let showpro= document.querySelector(".sproduct");
let addcartbtn= document.querySelector("#addCart");
const params = new URLSearchParams(window.location.search);
// console.log(params);
const ids = params.get('id');

let AllProducts = [...products,...newProducts];

function displayProduct(data){
 AllProducts.forEach(element => {
    const{id,name,brand,img,desc,price}=element;

    if(data==id){
    
        // console.log();
       showpro.innerHTML=`<div class="main-product">
           <img src="${img}" id="MainImg" alt="">
       </div>
       <div class="small-product">
           <img src="${img}"
               class="smallImg" alt="">
        
           <img src="https://res.cloudinary.com/denokpulg/image/upload/v1656522836/t-shirt/products/f2_gtuuw6.jpg"
               class="smallImg" alt="">
           <img src="https://res.cloudinary.com/denokpulg/image/upload/v1656522836/t-shirt/products/f3_o9tore.jpg"
               class="smallImg" alt="">
           <img src="https://res.cloudinary.com/denokpulg/image/upload/v1656522833/t-shirt/products/f4_pnpcel.jpg"
               class="smallImg" alt="">
       </div>`;
      
    }
   
 });}

 displayProduct(ids);






let MainImg = document.getElementById("MainImg");
let SmallImage = document.getElementsByClassName("smallImg");
SmallImage[0].onclick = function() {  
    MainImg.src=SmallImage[0].src;
    
}
SmallImage[1].onclick = function() {    
    MainImg.src=SmallImage[1].src;
}
SmallImage[2].onclick = function() {    
    MainImg.src=SmallImage[2].src;
}
SmallImage[3].onclick = function() {    
    MainImg.src=SmallImage[3].src;
    }





let cartnum=document.querySelector(".numchange")
let  addcart=document.querySelector("#addcart");
console.log(addcart);
let count=0;
addcart.addEventListener("click", function () {
     cartnum.innerHTML=count++;
});


// localStorage


// console.log(localStorage.setItem("displayProduct", ids));