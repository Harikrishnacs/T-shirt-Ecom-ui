
let addItem = document.querySelector("#addItem");
// let  addCart = document.querySelector("#addcart");
// console.log(addItem);

// function displayCart(data) {
//    AllProducts.forEach(element => {
//       const { id, name, brand, img, desc, price } = element;

//       if (data == id) {

//          // console.log();
//          let a = `<tr><td><a href="#"><i class="far fa-times-circle"></i></a></td>
//           <td><img src="https://res.cloudinary.com/denokpulg/image/upload/v1656522837/t-shirt/products/f8_rzwttg.jpg" alt=""></td>
//           <td>Cartroon Astronaut T-Shirt</td>
//           <td>${id}</td>
//           <td><input type="number"></td>
//           <td>$115</td>
//           </tr>`;
//          console.log(id);
//       }
//       //    console.log(data);
//    });
// }
// displayCart(ids);
// console.log(ids);
// var retriveProductCart = localStorage.getItem('cart');
// const cartData = JSON.parse(retriveProductCart);
// let data;
// console.log(addItem, addCart);
let retriveProductCart = localStorage.getItem('cart');
let cartData = JSON.parse(retriveProductCart);
// console.log(retriveProductCart);
additem();
function additem() {

   const { id, name, brand, img, desc, price } = cartData;
   const tr = document.createElement('tr');
   let td1 = document.createElement('td');
   let td2 = document.createElement('td');
   let td3 = document.createElement('td');
   let td4 = document.createElement('td');
   let td5 = document.createElement('td');
   let td6 = document.createElement('td');
   let a = document.createElement('a');
   let i = document.createElement('i');
   let image = document.createElement('img');
   let productname = document.createTextNode(`${name}`);
   let prices = document.createTextNode(`${price}`);
   let subtotal = document.createTextNode(`${price}`);
   let input = document.createElement('input');
   tr.append(td1, td2, td3, td4, td5, td6);
   td1.appendChild(a);
   a.appendChild(i);
   i.className = 'far fa-times-circle';
   td2.appendChild(image);
   image.src = `${img}`;
   td3.appendChild(productname);
   td4.appendChild(prices);
   td5.appendChild(input);
   input.className = 'value';
   input.type = 'number';
   // let value= document.querySelector('value');
   // let mul=input.value; 
   // value.addEventListener('keyup', function() {var subtotal = (Number(`${price}`)*Number('mul'));
   // console.log(subtotal);});
   // let total=eval(subtotal*mul);

   td6.appendChild(subtotal);
   // console.log(tr);
   addItem.append(tr);
}

