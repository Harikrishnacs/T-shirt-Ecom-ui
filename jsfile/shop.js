//get the current AllProducts
let AllProducts = [...productData];


const createProducts = document.querySelector('.featureRow');

const displayShopProduct = () => {
    // console.log(AllProducts.length);
    if (AllProducts.length < 1) {
        createProducts.innerHTML = '<h1>Sorry no Products</h1>'
        return;
    }


    createProducts.innerHTML = AllProducts.map(product => {
        // console.log(product);
        const { id, name, brand, img, desc, price } = product;
        return `<div class="product-card" onclick="window.location.href='./sproduct.html?id=${id}&name=${name}';">
    <img src="${img}" alt=""   >
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

    }).join(' ');
};

displayShopProduct();



// filter
const form = document.querySelector('.form');
const searchInput = document.querySelector('.search-input');

form.addEventListener('keyup', () => {
    // console.log(form);
    const inputvalue = searchInput.value;
    AllProducts = productData.filter((product) => {

        return product.brand.toLowerCase().includes(inputvalue);

    });
    displayShopProduct();
});

// filter Button product
// add the brands in innerhtml
const brands = document.querySelector('.Brand');
const displayBtn = () => {
    const buttons = ['All', ...new Set(productData.map((product) => product.brand))];
    // console.log(buttons);
    brands.innerHTML = buttons.map((brandname) => {
        return `<a class="brand-btn" data-id="${brandname}">${brandname}</a>`;
    }).join('');
};
displayBtn();


// filter btn
brands.addEventListener('click', (e) => {
    const el = e.target;
    // console.log(el);
    if (el.classList.contains('brand-btn')) {
        console.log(el.dataset.id);
        if (el.dataset.id === 'All') {
            AllProducts = [...productData];

        }
        else {
            AllProducts = productData.filter((product) => {

                return product.brand == el.dataset.id;

            });
        }
        searchInput.value = '';
        displayShopProduct();
    }
});

