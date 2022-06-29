let AllProducts = [...products,...newProducts];


{/* <div class="product-card">
                    <img src="../img/products/f7.jpg" alt="">
                    <div class="desc">
                        <span>adidas</span>
                        <h5>Cartoon Astronaut T-Shirt</h5>
                        <div class="star">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                        <h4>&#8377; 885</h4>
                    </div>
                    <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
                </div> */}
const createProducts = document.querySelector('.feature-row');

const displayProduct = ()=> {
    createProducts.innerHTML=AllProducts.map(product => {
    console.log(product);
    const{id,name,brand,img,desc,price}=product;
    return`<div class="product-card">
    <img src="${img}" alt="">
    <div class="desc">
        <span>${brand}</span>
        <h5>${name}</h5>
        <div class="star">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
        </div>
        <h4>&#8377; ${price}</h4>
    </div>
    <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
</div>`
    
});
};
displayProduct();

