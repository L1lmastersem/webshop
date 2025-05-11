  const cartIcon = document.querySelector('.cart-icon');
  const cartPanel = document.getElementById('cart-panel');
  const closeCart = document.getElementById('close-cart');
  const overlay = document.getElementById('cart-overlay');

  cartIcon.addEventListener('click', () => {
    cartPanel.classList.add('show');
    overlay.classList.remove('hidden');
  });

  closeCart.addEventListener('click', () => {
    cartPanel.classList.remove('show');
    overlay.classList.add('hidden');
  });

  overlay.addEventListener('click', () => {
    cartPanel.classList.remove('show');
    overlay.classList.add('hidden');
  });