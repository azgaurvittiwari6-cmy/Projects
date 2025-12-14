// Application State
let currentUser = null;
let products = [];
let orders = [];

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
  initializeApp();
});

function initializeApp() {
  // Check if user is already logged in
  const savedUser = localStorage.getItem('currentUser');
  if (savedUser) {
    currentUser = savedUser;
    showMainApp();
  } else {
    showLoginPage();
  }

  // Initialize products
  initializeProducts();

  // Load orders from localStorage
  loadOrders();

  // Setup event listeners
  setupEventListeners();
}

function setupEventListeners() {
  // Login form
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', handleLogin);
  }

  // Logout button
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', handleLogout);
  }

  // Orders link
  const ordersLink = document.getElementById('ordersLink');
  if (ordersLink) {
    ordersLink.addEventListener('click', (e) => {
      e.preventDefault();
      showOrdersPage();
    });
  }

  // Logo link (back to products)
  const appLogo = document.querySelector('.app-logo');
  if (appLogo) {
    appLogo.addEventListener('click', (e) => {
      e.preventDefault();
      showProductsPage();
    });
  }
}

function handleLogin(e) {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value;

  if (username && password) {
    // Simple authentication (in real app, this would be server-side)
    currentUser = username;
    localStorage.setItem('currentUser', username);

    // Add smooth transition
    const loginPage = document.getElementById('loginPage');
    loginPage.style.animation = 'fadeOut 0.3s ease';

    setTimeout(() => {
      showMainApp();
    }, 300);
  }
}

function handleLogout() {
  currentUser = null;
  localStorage.removeItem('currentUser');

  const mainApp = document.getElementById('mainApp');
  mainApp.style.animation = 'fadeOut 0.3s ease';

  setTimeout(() => {
    showLoginPage();
    // Reset form
    document.getElementById('loginForm').reset();
  }, 300);
}

function showLoginPage() {
  document.getElementById('loginPage').classList.remove('hidden');
  document.getElementById('mainApp').classList.add('hidden');
}

function showMainApp() {
  document.getElementById('loginPage').classList.add('hidden');
  document.getElementById('mainApp').classList.remove('hidden');
  showProductsPage();
}

function showProductsPage() {
  document.getElementById('productsPage').classList.remove('hidden');
  document.getElementById('ordersPage').classList.add('hidden');
}

function showOrdersPage() {
  document.getElementById('productsPage').classList.add('hidden');
  document.getElementById('ordersPage').classList.remove('hidden');
  displayOrders();
}

// Initialize sample products
function initializeProducts() {
  products = [
    {
      id: 1,
      name: 'Premium Headphones',
      price: 299.99,
      icon: '🎧'
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: 399.99,
      icon: '⌚'
    },
    {
      id: 3,
      name: 'Wireless Keyboard',
      price: 149.99,
      icon: '⌨️'
    },
    {
      id: 4,
      name: 'Gaming Mouse',
      price: 79.99,
      icon: '🖱️'
    },
    {
      id: 5,
      name: 'USB-C Hub',
      price: 59.99,
      icon: '🔌'
    },
    {
      id: 6,
      name: 'Laptop Stand',
      price: 49.99,
      icon: '💻'
    },
    {
      id: 7,
      name: 'Webcam HD',
      price: 129.99,
      icon: '📷'
    },
    {
      id: 8,
      name: 'Desk Lamp',
      price: 39.99,
      icon: '💡'
    }
  ];

  displayProducts();
}

function displayProducts() {
  const productsGrid = document.getElementById('productsGrid');
  if (!productsGrid) return;

  productsGrid.innerHTML = products.map((product, index) => `
    <div class="product-card" style="animation-delay: ${index * 0.1}s">
      <div class="product-image">${product.icon}</div>
      <h3 class="product-title">${product.name}</h3>
      <div class="product-price">$${product.price.toFixed(2)}</div>
      <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
        Add to Cart
      </button>
    </div>
  `).join('');
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  // Create order
  const order = {
    id: Date.now(),
    productId: product.id,
    productName: product.name,
    price: product.price,
    icon: product.icon,
    date: new Date().toLocaleDateString(),
    user: currentUser
  };

  orders.push(order);
  saveOrders();

  // Show order confirmation modal
  showOrderConfirmationModal(product);
}

function showOrderConfirmationModal(product) {
  const modal = document.getElementById('orderConfirmationModal');
  const productDetails = document.getElementById('modalProductDetails');

  // Update product details in modal
  productDetails.innerHTML = `
    <div class="modal-product-icon">${product.icon}</div>
    <div class="modal-product-info">
      <div class="modal-product-name">${product.name}</div>
      <div class="modal-product-price">$${product.price.toFixed(2)}</div>
    </div>
  `;

  // Show modal
  modal.classList.remove('hidden');

  // Create confetti
  createConfetti();

  // Setup modal close handlers
  setupModalHandlers();
}

function createConfetti() {
  const container = document.getElementById('confettiContainer');
  container.innerHTML = ''; // Clear previous confetti

  const colors = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
  ];

  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDelay = Math.random() * 0.5 + 's';
    confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
    container.appendChild(confetti);
  }
}

function setupModalHandlers() {
  const modal = document.getElementById('orderConfirmationModal');
  const closeBtn = document.getElementById('closeModal');
  const continueBtn = document.getElementById('continueShoppingBtn');
  const viewOrdersBtn = document.getElementById('viewOrdersBtn');

  // Close button
  closeBtn.onclick = () => {
    modal.classList.add('hidden');
  };

  // Continue shopping button
  continueBtn.onclick = () => {
    modal.classList.add('hidden');
  };

  // View orders button
  viewOrdersBtn.onclick = () => {
    modal.classList.add('hidden');
    showOrdersPage();
  };

  // Close on outside click
  modal.onclick = (e) => {
    if (e.target === modal) {
      modal.classList.add('hidden');
    }
  };
}

function saveOrders() {
  localStorage.setItem('orders', JSON.stringify(orders));
}

function loadOrders() {
  const savedOrders = localStorage.getItem('orders');
  if (savedOrders) {
    orders = JSON.parse(savedOrders);
    // Filter orders for current user
    orders = orders.filter(order => order.user === currentUser);
  }
}

function displayOrders() {
  const ordersContent = document.getElementById('ordersContent');
  if (!ordersContent) return;

  // Filter orders for current user
  const userOrders = orders.filter(order => order.user === currentUser);

  if (userOrders.length === 0) {
    ordersContent.innerHTML = `
      <div class="no-orders">
        <div class="no-orders-icon">📦</div>
        <h1>No orders</h1>
        <p>You haven't placed any orders yet. Start shopping to see your orders here!</p>
      </div>
    `;
  } else {
    ordersContent.innerHTML = `
      <div class="products-grid">
        ${userOrders.map((order, index) => `
          <div class="product-card" style="animation-delay: ${index * 0.1}s">
            <div class="product-image">${order.icon}</div>
            <h3 class="product-title">${order.productName}</h3>
            <div class="product-price">$${order.price.toFixed(2)}</div>
            <p style="color: var(--text-secondary); margin-top: 0.5rem;">
              Ordered on ${order.date}
            </p>
          </div>
        `).join('')}
      </div>
    `;
  }
}

// Add fadeOut animation
const fadeOutStyle = document.createElement('style');
fadeOutStyle.textContent = `
  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;
document.head.appendChild(fadeOutStyle);
