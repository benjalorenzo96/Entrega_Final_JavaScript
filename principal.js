let allContainerCart = document.querySelector('.products');
let containerBuyCart = document.querySelector('.card-items');
let priceTotal = document.querySelector('.price-total')
let amountProduct = document.querySelector('.count-product');

let buyThings = [];
let totalCard = 0;
let countProduct = 0;

// Check for previously saved cart in local storage and update cart if present
let savedCart = JSON.parse(localStorage.getItem('cart'));
if (savedCart) {
    buyThings = savedCart;
    countProduct = buyThings.length;
    totalCard = buyThings.reduce((acc, curr) => {
        return acc + parseFloat(curr.price) * parseFloat(curr.amount);
    }, 0);
    totalCard = totalCard.toFixed(2);
    loadHtml();
}

loadEventListeners();
function loadEventListeners(){
    allContainerCart.addEventListener('click', addProduct);
    containerBuyCart.addEventListener('click', deleteProduct);
}

function addProduct(e){
    e.preventDefault();
    if (e.target.classList.contains('btn-add-cart')) {
        const selectProduct = e.target.parentElement;
        readTheContent(selectProduct);
    }
}

function deleteProduct(e) {
    if (e.target.classList.contains('delete-product')) {
        const deleteId = e.target.getAttribute('data-id');
        buyThings = buyThings.filter(product => product.id !== deleteId);
        countProduct--;
    }
    
    if (buyThings.length === 0) {
        totalCard = 0;
    } else {
        totalCard = buyThings.reduce((acc, curr) => {
            return acc + parseFloat(curr.price) * parseFloat(curr.amount);
        }, 0);
        totalCard = totalCard.toFixed(3);
    }
    saveCart();
    loadHtml();
}

function readTheContent(product){
    const infoProduct = {
        image: product.querySelector('div img').src,
        title: product.querySelector('.title').textContent,
        price: product.querySelector('div p span').textContent,
        id: product.querySelector('a').getAttribute('data-id'),
        amount: 1
    }

    const exist = buyThings.some(product => product.id === infoProduct.id);
    if (exist) {
        const pro = buyThings.map(product => {
            if (product.id === infoProduct.id) {
                product.amount++;
                return product;
            } else {
                return product
            }
        });
        buyThings = [...pro];
    } else {
        buyThings = [...buyThings, infoProduct]
        countProduct++;
    }
    saveCart();
    loadHtml();
}

function loadHtml(){
    clearHtml();
    buyThings.forEach(product => {
        const {image, title, price, amount, id} = product;
        const row = document.createElement('div');
        row.classList.add('item');
        row.innerHTML = `
            <img src="${image}" alt="">
            <div class="item-content">
                <h5>${title}</h5>
                <h5 class="cart-price">$${price}</h5>
                <h6>Cantidad: ${amount}</h6>
            </div>
            <span class="delete-product" data-id="${id}">❌</span>
        `;

        containerBuyCart.appendChild(row);
    });

    priceTotal.innerHTML = totalCard;
    amountProduct.innerHTML = countProduct;
}

function clearHtml(){
    containerBuyCart.innerHTML = '';
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(buyThings));
}

const buyButton = document.getElementById("buy-button");
const loader = document.getElementById("loader");

buyButton.addEventListener("click", () => {
  loader.style.display = "block";
  setTimeout(() => {
    window.location.href = "pagar.html";
  }, 1500);
});


  
