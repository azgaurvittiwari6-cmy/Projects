// State Management
const state = {
    isLoggedIn: false,
    username: '',
    totalStudents: 0,
    presentStudents: 0,
    absentStudents: 0,
    users: {} // Store registered users {username: password}
};

// DOM Elements
const elements = {
    loginSection: document.getElementById('loginSection'),
    signupSection: document.getElementById('signupSection'),
    dashboardSection: document.getElementById('dashboardSection'),
    loginForm: document.getElementById('loginForm'),
    signupForm: document.getElementById('signupForm'),
    showSignup: document.getElementById('showSignup'),
    showLogin: document.getElementById('showLogin'),
    logoutBtn: document.getElementById('logoutBtn'),
    userName: document.getElementById('userName'),
    userAvatar: document.getElementById('userAvatar'),
    dateDisplay: document.getElementById('dateDisplay'),
    totalStudents: document.getElementById('totalStudents'),
    presentStudents: document.getElementById('presentStudents'),
    absentStudents: document.getElementById('absentStudents'),
    totalInput: document.getElementById('totalInput'),
    presentInput: document.getElementById('presentInput'),
    updateBtn: document.getElementById('updateBtn'),
    attendancePercentage: document.getElementById('attendancePercentage'),
    progressCircle: document.getElementById('progressCircle')
};

// Initialize App
function init() {
    loadFromLocalStorage();
    updateUI();
    displayCurrentDate();
    attachEventListeners();
    addSVGGradient();
}

// Add SVG Gradient for Progress Circle
function addSVGGradient() {
    const svg = document.querySelector('.progress-svg');
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
    gradient.setAttribute('id', 'gradient');
    gradient.setAttribute('x1', '0%');
    gradient.setAttribute('y1', '0%');
    gradient.setAttribute('x2', '100%');
    gradient.setAttribute('y2', '100%');

    const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    stop1.setAttribute('offset', '0%');
    stop1.setAttribute('style', 'stop-color:#667eea;stop-opacity:1');

    const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    stop2.setAttribute('offset', '100%');
    stop2.setAttribute('style', 'stop-color:#764ba2;stop-opacity:1');

    gradient.appendChild(stop1);
    gradient.appendChild(stop2);
    defs.appendChild(gradient);
    svg.insertBefore(defs, svg.firstChild);
}

// Display Current Date
function displayCurrentDate() {
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    const today = new Date();
    elements.dateDisplay.textContent = today.toLocaleDateString('en-US', options);
}

// Event Listeners
function attachEventListeners() {
    elements.loginForm.addEventListener('submit', handleLogin);
    elements.signupForm.addEventListener('submit', handleSignup);
    elements.logoutBtn.addEventListener('click', handleLogout);
    elements.updateBtn.addEventListener('click', updateAttendance);
    elements.showSignup.addEventListener('click', showSignupForm);
    elements.showLogin.addEventListener('click', showLoginForm);

    // Real-time input validation
    elements.totalInput.addEventListener('input', validateInputs);
    elements.presentInput.addEventListener('input', validateInputs);
}

// Handle Login
function handleLogin(e) {
    e.preventDefault();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;

    if (!username || !password) {
        alert('Please enter both username and password');
        return;
    }

    // Check if user exists and password matches
    if (state.users[username] && state.users[username] === password) {
        state.isLoggedIn = true;
        state.username = username;
        saveToLocalStorage();
        updateUI();
        elements.loginForm.reset();

        // Add success animation
        elements.dashboardSection.style.animation = 'slideUp 0.6s ease';
    } else {
        alert('Invalid username or password. Please try again or create an account.');
    }
}

// Handle Signup
function handleSignup(e) {
    e.preventDefault();
    const username = document.getElementById('signupUsername').value.trim();
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validation
    if (!username || !password || !confirmPassword) {
        alert('Please fill in all fields');
        return;
    }

    if (username.length < 3) {
        alert('Username must be at least 3 characters long');
        return;
    }

    if (password.length < 4) {
        alert('Password must be at least 4 characters long');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    // Check if username already exists
    if (state.users[username]) {
        alert('Username already exists. Please choose a different username.');
        return;
    }

    // Create new user
    state.users[username] = password;
    saveToLocalStorage();

    alert('Account created successfully! Please login with your credentials.');
    elements.signupForm.reset();
    showLoginForm();
}

// Show Signup Form
function showSignupForm(e) {
    if (e) e.preventDefault();
    elements.loginSection.style.display = 'none';
    elements.signupSection.style.display = 'flex';
    elements.signupSection.style.animation = 'slideUp 0.6s ease';
}

// Show Login Form
function showLoginForm(e) {
    if (e) e.preventDefault();
    elements.signupSection.style.display = 'none';
    elements.loginSection.style.display = 'flex';
    elements.loginSection.style.animation = 'slideUp 0.6s ease';
}

// Handle Logout
function handleLogout() {
    if (confirm('Are you sure you want to logout?')) {
        state.isLoggedIn = false;
        state.username = '';
        saveToLocalStorage();
        updateUI();

        // Add transition animation
        elements.loginSection.style.animation = 'slideUp 0.6s ease';
    }
}

// Update Attendance
function updateAttendance() {
    const total = parseInt(elements.totalInput.value) || 0;
    const present = parseInt(elements.presentInput.value) || 0;

    if (total < 0 || present < 0) {
        alert('Please enter valid positive numbers');
        return;
    }

    if (present > total) {
        alert('Present students cannot exceed total students');
        return;
    }

    state.totalStudents = total;
    state.presentStudents = present;
    state.absentStudents = total - present;

    saveToLocalStorage();
    updateAttendanceDisplay();

    // Add update animation
    animateNumbers();
}

// Validate Inputs
function validateInputs() {
    const total = parseInt(elements.totalInput.value) || 0;
    const present = parseInt(elements.presentInput.value) || 0;

    if (present > total && total > 0) {
        elements.presentInput.style.borderColor = '#f5576c';
    } else {
        elements.presentInput.style.borderColor = 'rgba(255, 255, 255, 0.1)';
    }
}

// Update UI Based on State
function updateUI() {
    if (state.isLoggedIn) {
        elements.loginSection.style.display = 'none';
        elements.signupSection.style.display = 'none';
        elements.dashboardSection.style.display = 'block';
        elements.logoutBtn.style.display = 'block';
        elements.userName.textContent = state.username;
        updateAttendanceDisplay();
    } else {
        elements.loginSection.style.display = 'flex';
        elements.signupSection.style.display = 'none';
        elements.dashboardSection.style.display = 'none';
        elements.logoutBtn.style.display = 'none';
        elements.userName.textContent = 'Please login';
    }
}

// Update Attendance Display
function updateAttendanceDisplay() {
    elements.totalStudents.textContent = state.totalStudents;
    elements.presentStudents.textContent = state.presentStudents;
    elements.absentStudents.textContent = state.absentStudents;

    // Update input fields
    elements.totalInput.value = state.totalStudents;
    elements.presentInput.value = state.presentStudents;

    // Calculate and update percentage
    const percentage = state.totalStudents > 0
        ? Math.round((state.presentStudents / state.totalStudents) * 100)
        : 0;

    elements.attendancePercentage.textContent = `${percentage}%`;
    updateProgressCircle(percentage);
}

// Update Progress Circle
function updateProgressCircle(percentage) {
    const circumference = 2 * Math.PI * 80; // radius = 80
    const offset = circumference - (percentage / 100) * circumference;

    elements.progressCircle.style.strokeDashoffset = offset;
}

// Animate Numbers
function animateNumbers() {
    const cards = document.querySelectorAll('.stat-card');
    cards.forEach((card, index) => {
        card.style.animation = 'none';
        setTimeout(() => {
            card.style.animation = 'slideUp 0.4s ease';
        }, index * 100);
    });
}

// Local Storage Functions
function saveToLocalStorage() {
    localStorage.setItem('attendanceAppState', JSON.stringify(state));
}

function loadFromLocalStorage() {
    const savedState = localStorage.getItem('attendanceAppState');
    if (savedState) {
        const parsed = JSON.parse(savedState);
        Object.assign(state, parsed);
    }
}

// Initialize app when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
