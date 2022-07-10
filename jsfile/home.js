
// slidebar in js mode
let slides = document.querySelectorAll('.slideContainer');
let nextSlide = document.querySelector('#next');
let prevSlide = document.querySelector('#prev');
let index = 0;

// console.log(slides);````````````

// difference event handling vs event listener 
function next() {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;//douts
    slides[index].classList.add("active");
}

function slide() {

    nextSlide.addEventListener('click', function next1() {
        slides[index].classList.remove("active");
        index = (index + 1) % slides.length;//douts
        slides[index].classList.add("active");
    })
    prevSlide.addEventListener('click', function prev() {
        slides[index].classList.remove("active");
        index = (index - 1 + slides.length) % slides.length;//douts
        slides[index].classList.add("active");
    })
}
setInterval(next, 1000);
slide();



// newFeatures Product
let featureProducts = [...products];
// console.log(featureProducts);
// console.log(products);
// // newArival Product
let arivalProducts = [...newProducts];
const feature = document.querySelector('#featureProducts');
const arival = document.querySelector('#arivalProducts');
const displayHomeProduct = (data) => {
    feature.innerHTML = data.map(product => {
        // console.log(product);
        const { id, name, brand, img, desc, price } = product;
        return `<div class="product-card" onclick="window.location.href ='../shop.html';">
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
</div>`}).join(" ");
    arival.innerHTML = arivalProducts.map(product => {
        const { id, name, brand, img, desc, price } = product;
        return `<div class="product-card" onclick="window.location.href ='../shop.html';">
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
    </div>`}).join(" ");
}
displayHomeProduct(featureProducts);