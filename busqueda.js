const searchInput = document.querySelector('.buscar input');
const productsList = document.querySelectorAll('.carts');
const productsContainer = document.querySelector('.products');

searchInput.addEventListener('keyup', function(event) {
  const searchTerm = event.target.value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
  
  productsList.forEach(function(product) {
    const title = product.querySelector('.title').textContent.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    const match = title.includes(searchTerm);
    
    if (match) {
      product.style.display = 'inline-block';
    } else {
      product.style.display = 'none';
    }
  });

  // Cambiar flex-wrap del contenedor de productos según la cantidad de elementos visibles
  const visibleProducts = document.querySelectorAll('.carts[style*="display: inline-block"]');
  if (visibleProducts.length > 1) {
    productsContainer.style.flexWrap = 'nowrap';
  } else {
    productsContainer.style.flexWrap = 'wrap';
  }
});

const todasLasCamisetasBtn = document.getElementById("todas-camisetas-button");
todasLasCamisetasBtn.addEventListener("click", function() {
  const target = todasLasCamisetasBtn.getAttribute("data-target");
  const carts = document.querySelectorAll(target);
  carts.forEach(function(cart) {
    cart.style.display = "block";
  });
});

function showCamisetas(img) {
  const target = img.getAttribute("data-target");
  const carts = document.querySelectorAll(target);
  carts.forEach(function(cart) {
    cart.style.display = "block";
  });
}

