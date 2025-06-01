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
    name: "Training Shorts",
    price: 35,
    img: "img/men-shirt1.webp",
    desc: "Designed for peak performance. Lightweight, breathable, and made to move with you.",
    link: "product3.html"
  },
    {
    name: "Athletic Hoodie",
    price: 49,
    img: "img/men-shirt1.webp",
    desc: "Layer up with our premium stretch hoodie.",
    link: "product3.html"
  },
    {
    name: "Athletic Hoodie",
    price: 49,
    img: "img/men-shirts4.webp",
    desc: "Layer up with our premium stretch hoodie.",
    link: "product3.html"
  },
    {
    name: "Athletic Hoodie",
    price: 49,
    img: "img/men-shirts5.webp",
    desc: "Layer up with our premium stretch hoodie.",
    link: "product3.html"
  },
    {
    name: "Athletic Hoodie",
    price: 49,
    img: "img/men-shirts6.webp",
    desc: "Layer up with our premium stretch hoodie.",
    link: "product3.html"
  },
    {
    name: "Athletic Hoodie",
    price: 49,
    img: "img/men-shirts7.webp",
    desc: "Layer up with our premium stretch hoodie.",
    link: "product3.html"
  },
    {
    name: "Athletic Hoodie",
    price: 49,
    img: "img/men-shirts8.webp",
    desc: "Layer up with our premium stretch hoodie.",
    link: "product3.html"
  },
    {
    name: "Athletic Hoodie",
    price: 49,
    img: "img/men-shirts9.webp",
    desc: "Layer up with our premium stretch hoodie.",
    link: "product3.html"
  },
    {
    name: "Athletic Hoodie",
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