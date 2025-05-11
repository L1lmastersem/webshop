let cartItems = [];
let subtotal = 0;

const cartIcon = document.getElementById('cart-icon');
const cartPanel = document.getElementById('cart-panel');
const closeCart = document.getElementById('close-cart');
const overlay = document.getElementById('cart-overlay');
const cartItemsContainer = document.getElementById('cart-items');
const subtotalDisplay = document.getElementById('subtotal');
const cartCount = document.getElementById('cart-count');


cartIcon.addEventListener('click', () => {
  cartPanel.classList.add('show');
  overlay.classList.remove('hidden');
});


function closeCartPanel() {
  cartPanel.classList.remove('show');
  overlay.classList.add('hidden');
}

closeCart.addEventListener('click', closeCartPanel);
overlay.addEventListener('click', closeCartPanel);

function addToCart(product) {
  cartItems.push(product);
  updateCartUI();
}

function updateCartUI() {

  cartCount.textContent = cartItems.length;

  cartItemsContainer.innerHTML = '';

  if (cartItems.length === 0) {
    cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
    subtotalDisplay.textContent = '0.00';
    return;
  }

  subtotal = 0;
  cartItems.forEach((item, index) => {
    subtotal += item.price;

    const itemDiv = document.createElement('div');
    itemDiv.classList.add('cart-item');
    itemDiv.innerHTML = `
      <p><strong>${item.name}</strong> - €${item.price.toFixed(2)}</p>
      <button onclick="removeFromCart(${index})">Remove</button>
    `;
    cartItemsContainer.appendChild(itemDiv);
  });

  subtotalDisplay.textContent = subtotal.toFixed(2);
}

function removeFromCart(index) {
  cartItems.splice(index, 1);
  updateCartUI();
}