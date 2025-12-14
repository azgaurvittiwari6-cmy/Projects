const galleryData = [
    {
        id: 1,
        src: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1000&auto=format&fit=crop',
        title: 'Misty Mountains',
        category: 'nature'
    },
    {
        id: 2,
        src: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=1000&auto=format&fit=crop',
        title: 'Urban Jungle',
        category: 'architecture'
    },
    {
        id: 3,
        src: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1000&auto=format&fit=crop',
        title: 'Road Trip',
        category: 'travel'
    },
    {
        id: 4,
        src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop',
        title: 'Tech Setup',
        category: 'tech'
    },
    {
        id: 5,
        src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1000&auto=format&fit=crop',
        title: 'Foggy Forest',
        category: 'nature'
    },
    {
        id: 6,
        src: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1000&auto=format&fit=crop',
        title: 'Modern Building',
        category: 'architecture'
    },
    {
        id: 7,
        src: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=1000&auto=format&fit=crop',
        title: 'Stormy Coast',
        category: 'nature'
    },
    {
        id: 8,
        src: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop',
        title: 'Cyberpunk City',
        category: 'tech'
    },
    {
        id: 9,
        src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1000&auto=format&fit=crop',
        title: 'Azure Lake',
        category: 'travel'
    }
];

const galleryGrid = document.getElementById('gallery-grid');
const filterBtns = document.querySelectorAll('.filter-btn');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
const closeLightbox = document.querySelector('.close-lightbox');

// Render Gallery
function renderGallery(filter = 'all') {
    galleryGrid.innerHTML = '';
    
    const filteredData = filter === 'all' 
        ? galleryData 
        : galleryData.filter(item => item.category === filter);

    filteredData.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');
        galleryItem.innerHTML = `
            <img src="${item.src}" alt="${item.title}" loading="lazy">
            <div class="gallery-overlay">
                <h3 class="overlay-title">${item.title}</h3>
                <p class="overlay-category">${item.category}</p>
            </div>
        `;
        
        galleryItem.addEventListener('click', () => openLightbox(item));
        galleryGrid.appendChild(galleryItem);
    });
    
    // Add animation class
    const items = document.querySelectorAll('.gallery-item');
    items.forEach((item, index) => {
        item.style.animation = `fadeIn 0.5s ease forwards ${index * 0.1}s`;
        item.style.opacity = '0';
    });
}

// Filter Functionality
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked
        btn.classList.add('active');
        
        const filterValue = btn.getAttribute('data-filter');
        renderGallery(filterValue);
    });
});

// Lightbox Functionality
function openLightbox(item) {
    lightbox.classList.add('show');
    lightboxImg.src = item.src;
    lightboxCaption.textContent = item.title;
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closeLightboxModal() {
    lightbox.classList.remove('show');
    document.body.style.overflow = 'auto';
}

closeLightbox.addEventListener('click', closeLightboxModal);

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightboxModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('show')) {
        closeLightboxModal();
    }
});

// Add fade in animation keyframes dynamically
const styleSheet = document.createElement("style");
styleSheet.innerText = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(styleSheet);

// Initial Render
renderGallery();
