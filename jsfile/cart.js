
let addItem= document.querySelector("#addItem");

function displayCart(data){
    AllProducts.forEach(element => {
       const{id,name,brand,img,desc,price}=element;
   
       if(data==id){
       
           // console.log();
           let a=`<tr><td><a href="#"><i class="far fa-times-circle"></i></a></td>
          <td><img src="https://res.cloudinary.com/denokpulg/image/upload/v1656522837/t-shirt/products/f8_rzwttg.jpg" alt=""></td>
          <td>Cartroon Astronaut T-Shirt</td>
          <td>${id}</td>
          <td><input type="number"></td>
          <td>$115</td>
          </tr>`;
       console.log(id);
       }
    //    console.log(data);
   });}
displayCart(ids);
console.log(ids);