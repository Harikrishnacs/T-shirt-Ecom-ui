let showpro = document.querySelector(".sproduct");
let addcartbtn = document.querySelector("#addCart");
const params = new URLSearchParams(window.location.search);
// console.log(params);
const ids = params.get('id');
// console.log(ids);
let AllProducts = [...productData];

function displayProduct(data) {
    AllProducts.forEach(element => {
        const { id, name, brand, img, desc, price } = element;

        if (element.id == ids) {
            var addProductCart = element;
            //  put the Object into the Storage
            localStorage.setItem('cart', JSON.stringify(addProductCart));

            // retrive the object from localStorage
            var retriveProductCart = localStorage.getItem('cart');
               console.log(JSON.parse(retriveProductCart));




            showpro.innerHTML = `<div class="main-product">  <img src="${img}" id="MainImg" alt="">
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



    });
}

displayProduct(ids);



// console.log(localStorage);
function changeProduct(){

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
}


changeProduct();

// increase a cartnu

function addnumcart() {
let cartnum=document.querySelector(".numchange")
let  addcart=document.querySelector("#addcart");
// console.log(addcart);
let count=0;
addcart.addEventListener("click", function () {
     cartnum.innerHTML=count++;
});
}


// localStorage
let addCart = document.querySelector("#addcart");
addCart.addEventListener('click', function () {
    // additem();
});