  /*cart*/
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

  /*darkmode*/
  const toggleButton = document.getElementById('dark-mode-toggle');
  const body = document.body;

    if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
  }

  toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
      localStorage.setItem('darkMode', 'enabled');
    } else {
      localStorage.setItem('darkMode', 'disabled');
    }
  });

/*search*/
document.addEventListener("DOMContentLoaded", function () {
  const searchToggle = document.querySelector(".search-toggle");
  const searchContainer = document.querySelector(".search-container");
  const searchInput = document.querySelector(".search-input");
  const searchResults = document.getElementById("search-results");

  const products = [
{
    name: "Performance Shirt",
    price: 29,
    img: "img/men-shirt1.webp",
    desc: "Breathable and sweat-wicking for every session.",
    link: "product.html"
  },
    {
    name: "Power T-shirt",
    price: 29,
    img: "img/men-shirt1.webp",
    desc: "Breathable and sweat-wicking for every session.",
    link: "product3.html"
  },
    {
    name: "Ribbed T-shirt",
    price: 29,
    img: "img/men-shirt1.webp",
    desc: "Breathable and sweat-wicking for every session.",
    link: "product3.html"
  },
    {
    name: "Essentials T=shirt",
    price: 49,
    img: "img/men-shirts4.webp",
    desc: "Layer up with our premium stretch hoodie.",
    link: "product3.html"
  },
    {
    name: "Legacy T-shirt",
    price: 49,
    img: "img/men-shirts5.webp",
    desc: "Layer up with our premium stretch hoodie.",
    link: "product3.html"
  },
    {
    name: "Warp knit LS T-shirt",
    price: 49,
    img: "img/men-shirts6.webp",
    desc: "Layer up with our premium stretch hoodie.",
    link: "product3.html"
  },
    {
    name: "Warp knit T-shirt",
    price: 49,
    img: "img/men-shirts7.webp",
    desc: "Layer up with our premium stretch hoodie.",
    link: "product3.html"
  },
    {
    name: "Crest T-shirt",
    price: 49,
    img: "img/men-shirts8.webp",
    desc: "Layer up with our premium stretch hoodie.",
    link: "product3.html"
  },
    {
    name: "Lightweight Slub T-shirt",
    price: 49,
    img: "img/men-shirts9.webp",
    desc: "Layer up with our premium stretch hoodie.",
    link: "product3.html"
  },
    {
    name: "Oversized T-shirt",
    price: 49,
    img: "img/men-shirts10.webp",
    desc: "Layer up with our premium stretch hoodie.",
    link: "product3.html"
  },
    {
    name: "Athletic Hoodie",
    price: 49,
    img: "img/men-shirts11.webp",
    desc: "Layer up with our premium stretch hoodie.",
    link: "product3.html"
  },
    {
    name: "Athletic Hoodie",
    price: 49,
    img: "img/men-shirts12.webp",
    desc: "Layer up with our premium stretch hoodie.",
    link: "product3.html"
  },
    {
    name: "Athletic Hoodie",
    price: 49,
    img: "img/men-shirts13.webp",
    desc: "Layer up with our premium stretch hoodie.",
    link: "product3.html"
  },
    {
    name: "Athletic Hoodie",
    price: 49,
    img: "img/men-shirts14.webp",
    desc: "Layer up with our premium stretch hoodie.",
    link: "product3.html"
  },
    {
    name: "Athletic Hoodie",
    price: 49,
    img: "img/men-shirts15.webp",
    desc: "Layer up with our premium stretch hoodie.",
    link: "product3.html"
  },
    {
    name: "Athletic Hoodie",
    price: 49,
    img: "img/men-shirts15.webp",
    desc: "Layer up with our premium stretch hoodie.",
    link: "product3.html"
  },
    {
    name: "Athletic Hoodie",
    price: 49,
    img: "img/men-shirts15.webp",
    desc: "Layer up with our premium stretch hoodie.",
    link: "product3.html"
  },
    {
    name: "Athletic Hoodie",
    price: 49,
    img: "img/men-shirts15.webp",
    desc: "Layer up with our premium stretch hoodie.",
    link: "product3.html"
  },
    {
    name: "Athletic Hoodie",
    price: 49,
    img: "img/men-shirts15.webp",
    desc: "Layer up with our premium stretch hoodie.",
    link: "product3.html"
  },
    {
    name: "Athletic Hoodie",
    price: 49,
    img: "img/men-shirts15.webp",
    desc: "Layer up with our premium stretch hoodie.",
    link: "product3.html"
  },
    {
    name: "Athletic Hoodie",
    price: 49,
    img: "img/men-shirts15.webp",
    desc: "Layer up with our premium stretch hoodie.",
    link: "product3.html"
  },
    {
    name: "Athletic Hoodie",
    price: 49,
    img: "img/men-shirts16.webp",
    desc: "Layer up with our premium stretch hoodie.",
    link: "product3.html"
  },
    {
    name: "Athletic Hoodie",
    price: 49,
    img: "img/men-shirts17.webp",
    desc: "Layer up with our premium stretch hoodie.",
    link: "product3.html"
  },
    {
    name: "Athletic Hoodie",
    price: 49,
    img: "img/men-shirts18.webp",
    desc: "Layer up with our premium stretch hoodie.",
    link: "product3.html"
  },
    {
    name: "Athletic Hoodie",
    price: 49,
    img: "img/men-shirts19.webp",
    desc: "Layer up with our premium stretch hoodie.",
    link: "product3.html"
  },
    {
    name: "Athletic Hoodie",
    price: 49,
    img: "img/men-shirts20.webp",
    desc: "Layer up with our premium stretch hoodie.",
    link: "product3.html"
  },
  ];

  function displayResults(query) {
    const filtered = products.filter(item =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );

    if (filtered.length === 0) {
      searchResults.innerHTML = "<p>No results found</p>";
    } else {
      searchResults.innerHTML = filtered
        .map(
          item => `
            <a href="${item.link}" class="result-item">
              <img src="${item.img}" alt="${item.name}" />
              <div class="result-info">
                <h4>${item.name}</h4>
                <p>${item.desc}</p>
                <span>€${item.price}</span>
              </div>
            </a>
          `
        )
        .join("");
    }

    searchResults.classList.remove("hidden");
  }

  searchToggle.addEventListener("click", () => {
    searchContainer.classList.toggle("active");
    if (searchContainer.classList.contains("active")) {
      searchInput.focus();
    } else {
      searchInput.blur();
      searchResults.classList.add("hidden");
    }
  });

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim();
    if (query) {
      displayResults(query);
    } else {
      searchResults.classList.add("hidden");
    }
  });

  document.addEventListener("click", (e) => {
    if (!searchContainer.contains(e.target) && !searchResults.contains(e.target)) {
      searchResults.classList.add("hidden");
    }
  });
});

window.addEventListener('load', () => {
  if (!localStorage.getItem("cookieConsent")) {
    document.getElementById("cookieBanner").style.display = "block";
  }
});

function acceptCookies() {
  localStorage.setItem("cookieConsent", JSON.stringify({
    essential: true,
    analytics: true,
    marketing: true
  }));
  document.getElementById("cookieBanner").style.display = "none";
}

function openCookieSettings() {
  document.getElementById("cookieSettingsModal").style.display = "flex";
}

function closeCookieSettings() {
  document.getElementById("cookieSettingsModal").style.display = "none";
}

document.getElementById("cookieSettingsForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const analytics = this.analytics.checked;
  const marketing = this.marketing.checked;

  localStorage.setItem("cookieConsent", JSON.stringify({
    essential: true,
    analytics,
    marketing
  }));

  closeCookieSettings();
  document.getElementById("cookieBanner").style.display = "none";
});
