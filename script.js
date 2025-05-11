// Cart state
let cartItems = [];
let subtotal = 0;

// DOM elements
const cartIcon = document.getElementById('cart-icon');
const cartPanel = document.getElementById('cart-panel');
const closeCart = document.getElementById('close-cart');
const overlay = document.getElementById('cart-overlay');
const cartItemsContainer = document.getElementById('cart-items');
const subtotalDisplay = document.getElementById('subtotal');
const cartCount = document.getElementById('cart-count');

// Show cart
cartIcon.addEventListener('click', () => {
  cartPanel.classList.add('show');
  overlay.classList.remove('hidden');
});

// Hide cart
function closeCartPanel() {
  cartPanel.classList.remove('show');
  overlay.classList.add('hidden');
}

closeCart.addEventListener('click', closeCartPanel);
overlay.addEventListener('click', closeCartPanel);

// Add product to cart (example call)
function addToCart(product) {
  cartItems.push(product);
  updateCartUI();
}

// Update cart UI
function updateCartUI() {
  // Update cart count
  cartCount.textContent = cartItems.length;

  // Clear current items
  cartItemsContainer.innerHTML = '';

  // Render items
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

// Remove item
function removeFromCart(index) {
  cartItems.splice(index, 1);
  updateCartUI();
}

// Example usage — replace with actual buttons
// Example product: { name: "Wrist Wraps", price: 14.99 }
// You could add buttons with: <button onclick='addToCart({ name: "Wrist Wraps", price: 14.99 })'>Add to Cart</button>
