const PHONE_NUMBER = "5492612712021";

// Catálogo completo con imágenes de Unsplash preparadas para Fast-Food
const products = [
  { 
    id: 1, 
    name: "Hamburguesa Completa", 
    category: "Hamburguesas", 
    price: 4500, 
    desc: "Medallón casero, doble queso, lechuga, tomate, jamón y huevo frito.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300"
  },
  { 
    id: 2, 
    name: "Lomo Reyperoli", 
    category: "Lomos", 
    price: 6000, 
    desc: "Lomo de carne tierno, queso, jamón, huevo, lechuga y tomate en pan artesanal.",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=300"
  },
  { 
    id: 3, 
    name: "Pancho Especial", 
    category: "Panchos", 
    price: 2500, 
    desc: "Salchicha gigante con lluvia de papas pay y salsa a elección.",
    image: "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?w=300"
  },
  { 
    id: 4, 
    name: "Salchipapa Familiar", 
    category: "Salchipapas", 
    price: 5000, 
    desc: "Porción abundante de papas fritas crocantes con salchichas y aderezos.",
    image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?w=300"
  },
  { 
    id: 5, 
    name: "Empanada Carne Mechada", 
    category: "Empanadas", 
    price: 1200, 
    desc: "Carne cortada a cuchillo, jugosa y bien sazonada.",
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=300"
  },
  { 
    id: 6, 
    name: "Empanada Jamón y Queso", 
    category: "Empanadas", 
    price: 1000, 
    desc: "Abundante queso derretido y jamón cocido seleccionado.",
    image: "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?w=300"
  },
  { 
    id: 7, 
    name: "Empanada Criolla", 
    category: "Empanadas", 
    price: 1100, 
    desc: "Receta tradicional mendocina horneada al punto justo.",
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=300"
  },
  { 
    id: 8, 
    name: "Papas Fritas Grandes", 
    category: "Papas", 
    price: 3000, 
    desc: "Papas bastón doradas y crocantes por fuera, suaves por dentro.",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=300"
  }
];

const cart = {};

document.addEventListener("DOMContentLoaded", () => {
  renderCategories();
  renderMenu();
  document.getElementById("btn-send-whatsapp").addEventListener("click", sendOrderToWhatsApp);
});

function renderCategories() {
  const nav = document.getElementById("category-nav");
  const categories = ["Todos", ...new Set(products.map(p => p.category))];

  categories.forEach((cat, index) => {
    const btn = document.createElement("button");
    btn.className = `cat-btn ${index === 0 ? 'active' : ''}`;
    btn.innerText = cat;
    btn.onclick = () => filterCategory(cat, btn);
    nav.appendChild(btn);
  });
}

function filterCategory(category, btnElement) {
  document.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active"));
  btnElement.classList.add("active");

  const sections = document.querySelectorAll(".menu-section");
  sections.forEach(sec => {
    if (category === "Todos" || sec.dataset.category === category) {
      sec.style.display = "block";
    } else {
      sec.style.display = "none";
    }
  });
}

function renderMenu() {
  const container = document.getElementById("menu-container");
  const categories = [...new Set(products.map(p => p.category))];

  categories.forEach(category => {
    const section = document.createElement("div");
    section.className = "menu-section";
    section.dataset.category = category;

    const title = document.createElement("h2");
    title.className = "category-title";
    title.innerText = category;
    section.appendChild(title);

    products.filter(p => p.category === category).forEach(product => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-img">
        <div class="product-details">
          <h3>${product.name}</h3>
          <p>${product.desc}</p>
          <div class="product-bottom">
            <span class="product-price">$${product.price.toLocaleString()}</span>
            <div class="qty-controls">
              <button class="btn-qty" onclick="changeQty(${product.id}, -1)">-</button>
              <span id="qty-${product.id}" class="qty-number">0</span>
              <button class="btn-qty" onclick="changeQty(${product.id}, 1)">+</button>
            </div>
          </div>
        </div>
      `;
      section.appendChild(card);
    });

    container.appendChild(section);
  });
}

function changeQty(productId, amount) {
  if (!cart[productId]) cart[productId] = 0;
  cart[productId] += amount;

  if (cart[productId] < 0) cart[productId] = 0;

  document.getElementById(`qty-${productId}`).innerText = cart[productId];
  calculateTotal();
}

function calculateTotal() {
  let total = 0;
  for (const id in cart) {
    const product = products.find(p => p.id == id);
    total += cart[id] * product.price;
  }
  document.getElementById("total-price").innerText = `$${total.toLocaleString()}`;
}

function sendOrderToWhatsApp() {
  const name = document.getElementById("name").value.trim();
  const address = document.getElementById("address").value.trim();
  const payment = document.getElementById("payment").value;
  const notes = document.getElementById("notes").value.trim();

  let hasItems = false;
  let message = "👑 *NUEVO PEDIDO - REYPEROLI* 👑\n\n";

  for (const id in cart) {
    if (cart[id] > 0) {
      hasItems = true;
      const product = products.find(p => p.id == id);
      const subtotal = cart[id] * product.price;
      message += `• ${cart[id]}x ${product.name} ($${subtotal.toLocaleString()})\n`;
    }
  }

  if (!hasItems) {
    alert("Por favor elegí al menos un producto de la lista.");
    return;
  }

  if (!name || !address) {
    alert("Por favor completá tu Nombre y Dirección para hacer la entrega.");
    return;
  }

  let total = 0;
  for (const id in cart) {
    const product = products.find(p => p.id == id);
    total += cart[id] * product.price;
  }

  message += `\n💰 *Total:* $${total.toLocaleString()}`;
  message += `\n\n👤 *Cliente:* ${name}`;
  message += `\n📍 *Dirección:* ${address}`;
  message += `\n💳 *Medio de Pago:* ${payment}`;
  if (notes) message += `\n📝 *Aclaraciones:* ${notes}`;

  const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, "_blank");
}