const PHONE_NUMBER = "5492612754765"; // Acá va el número de tu amiga

// Catálogo completo de Reyperoli
const products = [
  // 🍕 PIZZAS
  {
    id: 1,
    name: "Muzza Común",
    category: "Pizzas",
    price: 12000,
    desc: "Salsa casera, abundante muzzarella, orégano y aceitunas.",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300"
  },
  {
    id: 2,
    name: "Muzza Especial",
    category: "Pizzas",
    price: 16000,
    desc: "Salsa, muzzarella, jamón cocido, morrones y aceitunas.",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=300"
  },
  {
    id: 3,
    name: "Muzza a Caballo",
    category: "Pizzas",
    price: 18000,
    desc: "Pizza de muzzarella cubierta con una lluvia de papas fritas y huevos fritos.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300"
  },

  // 🍔 SÁNDWICHES
  {
    id: 4,
    name: "Combo 3 Hamburguesas Chicas",
    category: "Sándwiches",
    price: 10000,
    desc: "3 hamburguesas simples ideales para compartir.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300"
  },
  {
    id: 5,
    name: "Hamburguesa + Papas",
    category: "Sándwiches",
    price: 14000,
    desc: "Hamburguesa completa acompañada con porción de papas fritas.",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=300"
  },
  {
    id: 6,
    name: "Lomo Mediano + Papas",
    category: "Sándwiches",
    price: 20000,
    desc: "Sándwich de lomo completo en pan artesanal, acompañado con papas fritas.",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=300"
  },
  {
    id: 7,
    name: "Lomo Reyperoli + Papas",
    category: "Sándwiches",
    price: 22000,
    desc: "El especial de la casa super completo con papas fritas crocantes.",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=300"
  },
  {
    id: 8,
    name: "Promo: 2 Lomos Medianos + Papas",
    category: "Sándwiches",
    price: 30000,
    desc: "2 sándwiches de lomo medianos completos con porción abundante de papas fritas.",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=300"
  },

  // 🥟 EMPANADAS
  {
    id: 9,
    name: "Docena Empanadas Comunes",
    category: "Empanadas",
    price: 13000,
    desc: "12 empanadas tradicionales horneadas (carne o pollo).",
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=300"
  },
  {
    id: 10,
    name: "Docena Jamón y Queso",
    category: "Empanadas",
    price: 16000,
    desc: "12 empanadas repletas de queso derretido y jamón.",
    image: "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?w=300"
  },
  {
    id: 11,
    name: "Docena Carne Mechada",
    category: "Empanadas",
    price: 18000,
    desc: "12 empanadas de carne mechada corte a cuchillo super jugosas.",
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=300"
  },

  // 🌭 PANCHOS
  {
    id: 12,
    name: "Pancho Común",
    category: "Panchos",
    price: 3000,
    desc: "Pancho clásico con lluvia de papas pay y salsas a elección.",
    image: "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?w=300"
  },
  {
    id: 13,
    name: "Promo 2 Panchos",
    category: "Panchos",
    price: 5000,
    desc: "2 panchos clásicos con aderezos y papas pay.",
    image: "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?w=300"
  },
  {
    id: 14,
    name: "Pancho con Poncho",
    category: "Panchos",
    price: 6000,
    desc: "Pancho gigante envuelto en una capa crocante de queso gratinado y panceta.",
    image: "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?w=300"
  },

  // 🍟 PAPAS FRITAS
  {
    id: 15,
    name: "Papas Fritas - Cono",
    category: "Papas Fritas",
    price: 4500,
    desc: "Porción individual de papas bastón bien crocantes.",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=300"
  },
  {
    id: 16,
    name: "Papas Fritas - Bandeja Mediana",
    category: "Papas Fritas",
    price: 8000,
    desc: "Bandeja mediana de papas doradas para compartir.",
    image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?w=300"
  },
  {
    id: 17,
    name: "Papas Fritas - Bandeja Grande",
    category: "Papas Fritas",
    price: 10000,
    desc: "Bandeja familiar super abundante de papas bastón crocantes.",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=300"
  },

  // 🥤 BEBIDAS
  {
    id: 18,
    name: "Coca-Cola 500ml",
    category: "Bebidas",
    price: 2500,
    desc: "Botella individual 500ml bien fría.",
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=300"
  },
  {
    id: 19,
    name: "Coca-Cola 1L",
    category: "Bebidas",
    price: 3500,
    desc: "Botella de 1 Litro.",
    image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=300"
  },
  {
    id: 20,
    name: "Coca-Cola 1,5L",
    category: "Bebidas",
    price: 4500,
    desc: "Botella de 1,5 Litros.",
    image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=300"
  },
  {
    id: 21,
    name: "Coca-Cola 2,5L",
    category: "Bebidas",
    price: 6500,
    desc: "Botella grande de 2,5 Litros.",
    image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=300"
  },
  {
    id: 22,
    name: "Coca-Cola 2,5L (Retornable)",
    category: "Bebidas",
    price: 4500,
    desc: "Retornable 2,5 L (Requiere entregar envase).",
    image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=300"
  },
  {
    id: 23,
    name: "Agua Saborizada 500ml",
    category: "Bebidas",
    price: 1500,
    desc: "Agua saborizada Levité / Aquarius 500ml bien fría.",
    image: "https://images.unsplash.com/photo-1556881286-fc6915169721?w=300"
  },
  {
    id: 24,
    name: "Agua Saborizada 1,5L",
    category: "Bebidas",
    price: 3000,
    desc: "Agua saborizada Levité / Aquarius 1,5 Litros.",
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=300"
  },
  {
    id: 25,
    name: "Latón Quilmes",
    category: "Bebidas",
    price: 4500,
    desc: "Lata de cerveza Quilmes bien helada.",
    image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=300"
  },
  {
    id: 26,
    name: "Latón Schneider",
    category: "Bebidas",
    price: 4000,
    desc: "Lata de cerveza Schneider bien helada.",
    image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=300"
  },
  {
    id: 27,
    name: "Quilmes Botella de Vidrio",
    category: "Bebidas",
    price: 5500,
    desc: "Cerveza Quilmes en botella clásica de vidrio 1L.",
    image: "https://images.unsplash.com/photo-1600788886242-5c96aabe3757?w=300"
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
  nav.innerHTML = ""; // Limpia si había categorías anteriores
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
  container.innerHTML = ""; // Limpia la lista previa
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