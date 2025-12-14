// Food Database with Chemical and Herbal Content
const foodDatabase = [
    {
        id: 1,
        name: "Coca-Cola",
        category: "Beverages",
        icon: "🥤",
        chemicals: [
            { name: "Phosphoric Acid", amount: "0.05%" },
            { name: "Caffeine", amount: "34mg/355ml" },
            { name: "Caramel Color (E150d)", amount: "0.02%" },
            { name: "Natural Flavors", amount: "Trace" },
            { name: "Citric Acid", amount: "0.01%" }
        ],
        herbals: []
    },
    {
        id: 2,
        name: "Lay's Potato Chips",
        category: "Snacks",
        icon: "🥔",
        chemicals: [
            { name: "Monosodium Glutamate (MSG)", amount: "0.5%" },
            { name: "Sodium", amount: "170mg/28g" },
            { name: "Artificial Flavoring", amount: "0.3%" },
            { name: "Citric Acid", amount: "0.1%" }
        ],
        herbals: [
            { name: "Onion Powder", amount: "0.2%" },
            { name: "Garlic Powder", amount: "0.15%" }
        ]
    },
    {
        id: 3,
        name: "Kellogg's Corn Flakes",
        category: "Cereals",
        icon: "🌽",
        chemicals: [
            { name: "BHT (Preservative)", amount: "0.002%" },
            { name: "Iron", amount: "8mg/100g" },
            { name: "Niacinamide", amount: "5mg/100g" },
            { name: "Vitamin B6", amount: "0.5mg/100g" }
        ],
        herbals: [
            { name: "Malt Extract", amount: "2%" }
        ]
    },
    {
        id: 4,
        name: "Oreo Cookies",
        category: "Biscuits",
        icon: "🍪",
        chemicals: [
            { name: "High Fructose Corn Syrup", amount: "12%" },
            { name: "Soy Lecithin (E322)", amount: "0.5%" },
            { name: "Artificial Flavor", amount: "0.2%" },
            { name: "Sodium Bicarbonate", amount: "0.8%" },
            { name: "Cocoa Processed with Alkali", amount: "4%" }
        ],
        herbals: [
            { name: "Vanilla Extract", amount: "0.1%" }
        ]
    },
    {
        id: 5,
        name: "Maggi Noodles",
        category: "Instant Food",
        icon: "🍜",
        chemicals: [
            { name: "Monosodium Glutamate (MSG)", amount: "0.6%" },
            { name: "Sodium", amount: "820mg/100g" },
            { name: "Tartrazine (E102)", amount: "0.01%" },
            { name: "Citric Acid", amount: "0.3%" }
        ],
        herbals: [
            { name: "Onion Powder", amount: "1.2%" },
            { name: "Garlic Powder", amount: "0.8%" },
            { name: "Turmeric", amount: "0.5%" },
            { name: "Chili Powder", amount: "0.3%" }
        ]
    },
    {
        id: 6,
        name: "Nutella",
        category: "Spreads",
        icon: "🍫",
        chemicals: [
            { name: "Soy Lecithin (E322)", amount: "0.4%" },
            { name: "Vanillin", amount: "0.05%" }
        ],
        herbals: [
            { name: "Cocoa", amount: "7.4%" },
            { name: "Vanilla Extract", amount: "0.1%" }
        ]
    },
    {
        id: 7,
        name: "Pringles",
        category: "Snacks",
        icon: "🥫",
        chemicals: [
            { name: "Monosodium Glutamate (MSG)", amount: "0.7%" },
            { name: "Sodium", amount: "150mg/28g" },
            { name: "Maltodextrin", amount: "2%" },
            { name: "Disodium Inosinate", amount: "0.1%" },
            { name: "Disodium Guanylate", amount: "0.1%" }
        ],
        herbals: [
            { name: "Onion Powder", amount: "0.5%" },
            { name: "Garlic Powder", amount: "0.3%" }
        ]
    },
    {
        id: 8,
        name: "Red Bull Energy Drink",
        category: "Beverages",
        icon: "🥫",
        chemicals: [
            { name: "Caffeine", amount: "80mg/250ml" },
            { name: "Taurine", amount: "1000mg/250ml" },
            { name: "Glucuronolactone", amount: "600mg/250ml" },
            { name: "Niacinamide", amount: "20mg/250ml" },
            { name: "Pantothenic Acid", amount: "5mg/250ml" }
        ],
        herbals: []
    },
    {
        id: 9,
        name: "Doritos",
        category: "Snacks",
        icon: "🔺",
        chemicals: [
            { name: "Monosodium Glutamate (MSG)", amount: "0.8%" },
            { name: "Sodium", amount: "210mg/28g" },
            { name: "Red 40 Lake", amount: "0.02%" },
            { name: "Yellow 6 Lake", amount: "0.02%" },
            { name: "Citric Acid", amount: "0.5%" }
        ],
        herbals: [
            { name: "Onion Powder", amount: "0.6%" },
            { name: "Garlic Powder", amount: "0.4%" },
            { name: "Paprika", amount: "0.3%" }
        ]
    },
    {
        id: 10,
        name: "Bread (White)",
        category: "Bakery",
        icon: "🍞",
        chemicals: [
            { name: "Calcium Propionate (E282)", amount: "0.3%" },
            { name: "Sodium Stearoyl Lactylate", amount: "0.2%" },
            { name: "Ascorbic Acid", amount: "0.01%" }
        ],
        herbals: []
    },
    {
        id: 11,
        name: "Yogurt (Flavored)",
        category: "Dairy",
        icon: "🥛",
        chemicals: [
            { name: "Pectin", amount: "0.5%" },
            { name: "Citric Acid", amount: "0.2%" },
            { name: "Artificial Flavoring", amount: "0.1%" },
            { name: "Potassium Sorbate", amount: "0.05%" }
        ],
        herbals: [
            { name: "Vanilla Extract", amount: "0.2%" }
        ]
    },
    {
        id: 12,
        name: "Ketchup",
        category: "Condiments",
        icon: "🍅",
        chemicals: [
            { name: "High Fructose Corn Syrup", amount: "22%" },
            { name: "Sodium Benzoate", amount: "0.1%" },
            { name: "Citric Acid", amount: "0.3%" }
        ],
        herbals: [
            { name: "Onion Powder", amount: "0.5%" },
            { name: "Garlic Powder", amount: "0.3%" }
        ]
    },
    {
        id: 13,
        name: "Chocolate Bar (Milk)",
        category: "Confectionery",
        icon: "🍫",
        chemicals: [
            { name: "Soy Lecithin (E322)", amount: "0.5%" },
            { name: "Vanillin", amount: "0.08%" },
            { name: "Polyglycerol Polyricinoleate", amount: "0.3%" }
        ],
        herbals: [
            { name: "Cocoa", amount: "25%" },
            { name: "Vanilla Extract", amount: "0.1%" }
        ]
    },
    {
        id: 14,
        name: "Ice Cream (Vanilla)",
        category: "Frozen Desserts",
        icon: "🍦",
        chemicals: [
            { name: "Mono and Diglycerides", amount: "0.3%" },
            { name: "Guar Gum", amount: "0.2%" },
            { name: "Carrageenan", amount: "0.15%" },
            { name: "Artificial Flavor", amount: "0.1%" }
        ],
        herbals: [
            { name: "Vanilla Extract", amount: "0.5%" }
        ]
    },
    {
        id: 15,
        name: "Instant Coffee",
        category: "Beverages",
        icon: "☕",
        chemicals: [
            { name: "Caffeine", amount: "60mg/tsp" },
            { name: "Acrylamide", amount: "Trace" }
        ],
        herbals: []
    },
    {
        id: 16,
        name: "Cheese (Processed)",
        category: "Dairy",
        icon: "🧀",
        chemicals: [
            { name: "Sodium Phosphate", amount: "3%" },
            { name: "Sodium Citrate", amount: "2%" },
            { name: "Sorbic Acid", amount: "0.2%" },
            { name: "Artificial Color", amount: "0.05%" }
        ],
        herbals: []
    },
    {
        id: 17,
        name: "Fruit Juice (Packaged)",
        category: "Beverages",
        icon: "🧃",
        chemicals: [
            { name: "Citric Acid", amount: "0.3%" },
            { name: "Ascorbic Acid (Vitamin C)", amount: "60mg/250ml" },
            { name: "Sodium Benzoate", amount: "0.05%" },
            { name: "Artificial Flavor", amount: "0.1%" }
        ],
        herbals: []
    },
    {
        id: 18,
        name: "Mayonnaise",
        category: "Condiments",
        icon: "🥄",
        chemicals: [
            { name: "Calcium Disodium EDTA", amount: "0.0075%" },
            { name: "Potassium Sorbate", amount: "0.1%" },
            { name: "Citric Acid", amount: "0.2%" }
        ],
        herbals: [
            { name: "Mustard", amount: "1.5%" }
        ]
    },
    {
        id: 19,
        name: "Canned Soup",
        category: "Canned Food",
        icon: "🥫",
        chemicals: [
            { name: "Monosodium Glutamate (MSG)", amount: "0.5%" },
            { name: "Sodium", amount: "890mg/cup" },
            { name: "Modified Food Starch", amount: "2%" },
            { name: "Caramel Color", amount: "0.1%" }
        ],
        herbals: [
            { name: "Onion Powder", amount: "0.8%" },
            { name: "Garlic Powder", amount: "0.5%" },
            { name: "Celery Extract", amount: "0.3%" }
        ]
    },
    {
        id: 20,
        name: "Granola Bar",
        category: "Snacks",
        icon: "🍫",
        chemicals: [
            { name: "High Fructose Corn Syrup", amount: "15%" },
            { name: "Soy Lecithin", amount: "0.5%" },
            { name: "BHT (Preservative)", amount: "0.002%" },
            { name: "Natural Flavors", amount: "0.3%" }
        ],
        herbals: [
            { name: "Cinnamon", amount: "0.5%" },
            { name: "Vanilla Extract", amount: "0.2%" }
        ]
    }
];

// DOM Elements
const searchInput = document.getElementById('searchInput');
const clearBtn = document.getElementById('clearBtn');
const searchResults = document.getElementById('searchResults');
const foodDetails = document.getElementById('foodDetails');
const backBtn = document.getElementById('backBtn');
const foodName = document.getElementById('foodName');
const foodCategory = document.getElementById('foodCategory');
const chemicalContent = document.getElementById('chemicalContent');
const herbalContent = document.getElementById('herbalContent');

// State
let currentView = 'search'; // 'search' or 'details'

// Event Listeners
searchInput.addEventListener('input', handleSearch);
clearBtn.addEventListener('click', clearSearch);
backBtn.addEventListener('click', showSearchView);

// Search Functionality
function handleSearch(e) {
    const query = e.target.value.trim().toLowerCase();

    // Show/hide clear button
    clearBtn.style.display = query ? 'flex' : 'none';

    if (!query) {
        searchResults.innerHTML = '';
        return;
    }

    // Filter food items
    const results = foodDatabase.filter(food =>
        food.name.toLowerCase().includes(query) ||
        food.category.toLowerCase().includes(query)
    );

    displaySearchResults(results);
}

function displaySearchResults(results) {
    if (results.length === 0) {
        searchResults.innerHTML = `
            <div style="text-align: center; padding: 40px; color: var(--text-muted);">
                <div style="font-size: 3rem; margin-bottom: 12px;">🔍</div>
                <p style="font-size: 1.1rem;">No food items found</p>
            </div>
        `;
        return;
    }

    searchResults.innerHTML = results.map(food => `
        <div class="result-item" onclick="showFoodDetails(${food.id})">
            <div class="result-icon">${food.icon}</div>
            <div class="result-info">
                <div class="result-name">${food.name}</div>
                <div class="result-category">${food.category}</div>
            </div>
            <svg class="result-arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
    `).join('');
}

function clearSearch() {
    searchInput.value = '';
    searchResults.innerHTML = '';
    clearBtn.style.display = 'none';
    searchInput.focus();
}

// Food Details View
function showFoodDetails(foodId) {
    const food = foodDatabase.find(f => f.id === foodId);
    if (!food) return;

    // Update food header
    document.querySelector('.food-icon').textContent = food.icon;
    foodName.textContent = food.name;
    foodCategory.textContent = food.category;

    // Display chemical content
    if (food.chemicals.length > 0) {
        chemicalContent.innerHTML = food.chemicals.map((item, index) => `
            <div class="content-item" style="animation-delay: ${index * 0.05}s">
                <div class="item-bullet"></div>
                <div class="item-name">${item.name}</div>
                <div class="item-amount">${item.amount}</div>
            </div>
        `).join('');
    } else {
        chemicalContent.innerHTML = `
            <div class="no-content">
                <div class="no-content-icon">✓</div>
                <div>No Chemicals</div>
            </div>
        `;
    }

    // Display herbal content
    if (food.herbals.length > 0) {
        herbalContent.innerHTML = food.herbals.map((item, index) => `
            <div class="content-item" style="animation-delay: ${index * 0.05}s">
                <div class="item-bullet"></div>
                <div class="item-name">${item.name}</div>
                <div class="item-amount">${item.amount}</div>
            </div>
        `).join('');
    } else {
        herbalContent.innerHTML = `
            <div class="no-content">
                <div class="no-content-icon">✓</div>
                <div>No Herbals</div>
            </div>
        `;
    }

    // Switch views
    document.querySelector('.search-section').style.display = 'none';
    foodDetails.style.display = 'block';
    currentView = 'details';
}

function showSearchView() {
    document.querySelector('.search-section').style.display = 'block';
    foodDetails.style.display = 'none';
    currentView = 'search';
    searchInput.focus();
}

// Initialize
searchInput.focus();
