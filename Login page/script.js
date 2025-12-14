// Toggle between Login and Register forms
const container = document.getElementById('container');
const registerBtn = document.getElementById('register-btn');
const loginBtn = document.getElementById('login-btn');

// Switch to Register form
registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});

// Switch to Login form
loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});

// Handle Login Form Submission
function handleLogin(event) {
    event.preventDefault();

    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // Simple validation
    if (username && password) {
        // Show success message
        showMessage('Login successful! Welcome back, ' + username + '!', 'success');

        // Reset form
        event.target.reset();

        // Here you would typically send data to a server
        console.log('Login attempt:', { username, password });
    } else {
        showMessage('Please fill in all fields', 'error');
    }
}

// Handle Register Form Submission
function handleRegister(event) {
    event.preventDefault();

    const username = document.getElementById('register-username').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    // Simple validation
    if (username && email && password) {
        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            showMessage('Please enter a valid email address', 'error');
            return;
        }

        // Validate password strength (at least 6 characters)
        if (password.length < 6) {
            showMessage('Password must be at least 6 characters long', 'error');
            return;
        }

        // Show success message
        showMessage('Registration successful! Welcome, ' + username + '!', 'success');

        // Reset form and switch to login
        event.target.reset();
        setTimeout(() => {
            container.classList.remove('active');
        }, 2000);

        // Here you would typically send data to a server
        console.log('Register attempt:', { username, email, password });
    } else {
        showMessage('Please fill in all fields', 'error');
    }
}

// Show message notification
function showMessage(message, type) {
    // Remove any existing messages
    const existingMessage = document.querySelector('.message-notification');
    if (existingMessage) {
        existingMessage.remove();
    }

    // Create message element
    const messageDiv = document.createElement('div');
    messageDiv.className = `message-notification ${type}`;
    messageDiv.textContent = message;

    // Add styles
    messageDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 25px;
        background: ${type === 'success' ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'};
        color: white;
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        animation: slideInRight 0.5s ease-out, fadeOut 0.5s ease-out 2.5s;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        max-width: 300px;
    `;

    document.body.appendChild(messageDiv);

    // Remove after 3 seconds
    setTimeout(() => {
        messageDiv.remove();
    }, 3000);
}

// Add CSS animations dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes fadeOut {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Add input validation feedback
document.querySelectorAll('input[type="text"], input[type="password"], input[type="email"]').forEach(input => {
    input.addEventListener('blur', function () {
        if (this.value.trim() === '' && this.hasAttribute('required')) {
            this.style.borderColor = '#f5576c';
        } else {
            this.style.borderColor = '#e0e0e0';
        }
    });

    input.addEventListener('focus', function () {
        this.style.borderColor = '#667eea';
    });
});

// Password strength indicator (for register form)
const registerPassword = document.getElementById('register-password');
if (registerPassword) {
    registerPassword.addEventListener('input', function () {
        const strength = getPasswordStrength(this.value);
        // You can add visual feedback here if needed
        console.log('Password strength:', strength);
    });
}

function getPasswordStrength(password) {
    let strength = 0;

    if (password.length >= 6) strength++;
    if (password.length >= 10) strength++;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[^a-zA-Z\d]/.test(password)) strength++;

    if (strength <= 2) return 'weak';
    if (strength <= 4) return 'medium';
    return 'strong';
}

// Keyboard accessibility - Enter key to submit
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            const form = this.closest('form');
            if (form) {
                form.dispatchEvent(new Event('submit'));
            }
        }
    });
});

console.log('Login page initialized successfully!');
