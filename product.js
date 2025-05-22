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



];

const grid = document.querySelector('.product-grid');

products.forEach(product => {
  const card = document.createElement('a');
  card.href = product.link;
  card.className ='product-card fade-in-section';
  card.innerHTML = `
    <img src="${product.img}" alt="${product.name}" />
    <div class="product-info">
      <h3>${product.name} <span>${product.price}</span></h3>
      <p>${product.desc}</p>
    </div>
  `;
  grid.appendChild(card);
});