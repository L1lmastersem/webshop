 /*product*/
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
    name: "Essentials T-shirt",
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

const grid = document.querySelector('.product-grid');

const productsPerPage = 5;
let currentIndex = 0;

const productGrid = document.querySelector('.product-grid');
const loader = document.getElementById('loading');

function loadMoreProducts() {
  const nextProducts = products.slice(currentIndex, currentIndex + productsPerPage);

  nextProducts.forEach(product => {
    const card = document.createElement('a');
    card.href = product.link;
    card.className = 'product-card fade-in-section';
    card.innerHTML = `
      <img src="${product.img}" alt="${product.name}" />
      <div class="product-info">
        <h3>${product.name} <span>€${product.price}</span></h3>
        <p>${product.desc}</p>
      </div>
    `;
    productGrid.appendChild(card);

    requestAnimationFrame(() => {
      card.classList.add('visible');
    });
  });

  currentIndex += productsPerPage;

  if (currentIndex >= products.length) {
    observer.unobserve(loader);
    loader.style.display = 'none';
  }
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      loadMoreProducts();
    }
  });
}, {
  root: null,
  rootMargin: "0px",
  threshold: 0.25
});

document.addEventListener("DOMContentLoaded", () => {
  loadMoreProducts();
  if (loader) observer.observe(loader);
});

document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("filter-toggle");
  const filterPanel = document.getElementById("filter-panel");

  toggleBtn.addEventListener("click", () => {
    filterPanel.classList.toggle("show");
  });
});

/*filter*/
document.querySelector(".apply-filters").addEventListener("click", () => {
  const selectedPrice = document.querySelector('input[name="price"]:checked')?.value;

  let filteredProducts = [...products];

  if (selectedPrice === 'cheapest') {
    const min = Math.min(...products.map(p => p.price));
    filteredProducts = products.filter(p => p.price === min);
  } else if (selectedPrice === 'expensive') {
    const max = Math.max(...products.map(p => p.price));
    filteredProducts = products.filter(p => p.price === max);
  }

  productGrid.innerHTML = '';
  currentIndex = 0;

  observer.unobserve(loader);
  loader.style.display = 'none';

  filteredProducts.forEach(product => {
    const card = document.createElement('a');
    card.href = product.link;
    card.className = 'product-card fade-in-section';
    card.setAttribute('data-price', product.price);
    card.innerHTML = `
      <img src="${product.img}" alt="${product.name}" />
      <div class="product-info">
        <h3>${product.name} <span>€${product.price}</span></h3>
        <p>${product.desc}</p>
      </div>
    `;
    productGrid.appendChild(card);
    requestAnimationFrame(() => card.classList.add('visible'));
  });
});

/*search*/
document.addEventListener("DOMContentLoaded", function () {
  const searchToggle = document.querySelector(".search-toggle");
  const searchContainer = document.querySelector(".search-container");
  const searchInput = document.querySelector(".search-input");
  const searchResults = document.getElementById("search-results");


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