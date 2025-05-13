  let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  let subtotal = 0;

  const cartIcon = document.getElementById('cart-icon');
  const cartPanel = document.getElementById('cart-panel');
  const closeCart = document.getElementById('close-cart');
  const overlay = document.getElementById('cart-overlay');
  const cartItemsContainer = document.getElementById('cart-items');
  const subtotalDisplay = document.getElementById('subtotal');
  const cartCount = document.getElementById('cart-count');

  if (cartIcon && cartPanel && overlay) {
    cartIcon.addEventListener('click', () => {
      cartPanel.classList.add('show');
      overlay.classList.remove('hidden');
    });

    function closeCartPanel() {
      cartPanel.classList.remove('show');
      overlay.classList.add('hidden');
    }

    closeCart?.addEventListener('click', closeCartPanel);
    overlay?.addEventListener('click', closeCartPanel);
  }

  function addToCart(product) {
    cartItems.push(product);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    updateCartUI();
  }

  function removeFromCart(index) {
    cartItems.splice(index, 1);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    updateCartUI();
  }

  function updateCartUI() {
    if (!cartItemsContainer || !subtotalDisplay || !cartCount) return;

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

  document.addEventListener('DOMContentLoaded', updateCartUI);

  function addToCartFromProductPage(name, price) {
    const product = { name, price };
    cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.push(product);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    updateCartUI();
  }

  window.addToCartFromProductPage = addToCartFromProductPage;
