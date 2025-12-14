// Main Homepage Logic
// ============================================================

let currentVideos = [];
let isSearchMode = false;

/**
 * Initialize the homepage
 */
async function init() {
    setupEventListeners();
    await loadVideos();
}

/**
 * Setup all event listeners
 */
function setupEventListeners() {
    // Menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('main-content');

    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
        sidebar.classList.toggle('open');
        mainContent.classList.toggle('sidebar-collapsed');
    });

    // Search form
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');

    searchForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const query = searchInput.value.trim();
        if (query) {
            await handleSearch(query);
        }
    });

    // Search input - show suggestions on focus
    searchInput.addEventListener('focus', () => {
        showSearchSuggestions();
    });

    searchInput.addEventListener('input', (e) => {
        if (e.target.value.trim()) {
            showSearchSuggestions(e.target.value);
        } else {
            hideSearchSuggestions();
        }
    });

    // Hide suggestions when clicking outside
    document.addEventListener('click', (e) => {
        const searchContainer = document.querySelector('.search-container');
        if (!searchContainer.contains(e.target)) {
            hideSearchSuggestions();
        }
    });
}

/**
 * Show search suggestions
 */
function showSearchSuggestions(query = '') {
    const suggestionsContainer = document.getElementById('search-suggestions');

    // Filter suggestions based on query
    let suggestions = CONFIG.SEARCH_SUGGESTIONS;
    if (query) {
        suggestions = suggestions.filter(s =>
            s.toLowerCase().includes(query.toLowerCase())
        );
    }

    if (suggestions.length === 0) {
        hideSearchSuggestions();
        return;
    }

    suggestionsContainer.innerHTML = suggestions.map(suggestion => `
    <div class="suggestion-item" onclick="selectSuggestion('${suggestion}')">
      <span class="suggestion-icon">🔍</span>
      <span class="suggestion-text">${suggestion}</span>
    </div>
  `).join('');

    suggestionsContainer.classList.add('active');
}

/**
 * Hide search suggestions
 */
function hideSearchSuggestions() {
    const suggestionsContainer = document.getElementById('search-suggestions');
    suggestionsContainer.classList.remove('active');
}

/**
 * Select a search suggestion
 */
async function selectSuggestion(suggestion) {
    const searchInput = document.getElementById('search-input');
    searchInput.value = suggestion;
    hideSearchSuggestions();
    await handleSearch(suggestion);
}

/**
 * Load popular videos
 */
async function loadVideos() {
    showLoading();

    try {
        currentVideos = await YouTubeAPI.fetchPopularVideos();
        displayVideos(currentVideos);
    } catch (error) {
        console.error('Error loading videos:', error);
    } finally {
        hideLoading();
    }
}

/**
 * Handle search query
 */
async function handleSearch(query) {
    showLoading();
    isSearchMode = true;

    try {
        currentVideos = await YouTubeAPI.searchVideos(query);
        displayVideos(currentVideos);
    } catch (error) {
        console.error('Error searching videos:', error);
    } finally {
        hideLoading();
    }
}

/**
 * Display videos in grid
 */
function displayVideos(videos) {
    const videoGrid = document.getElementById('video-grid');

    if (!videos || videos.length === 0) {
        videoGrid.innerHTML = `
      <div class="text-center" style="grid-column: 1/-1; padding: 48px;">
        <h2 style="font-size: 2.4rem; margin-bottom: 16px;">No videos found</h2>
        <p style="color: var(--text-secondary);">Try a different search query</p>
      </div>
    `;
        return;
    }

    videoGrid.innerHTML = videos.map(video => createVideoCard(video)).join('');
}

/**
 * Create a video card HTML
 */
function createVideoCard(video) {
    const channelInitial = video.channelTitle.charAt(0).toUpperCase();
    const views = Utils.formatViewCount(video.viewCount);
    const publishedDate = Utils.formatPublishedDate(video.publishedAt);
    const duration = Utils.formatDuration(video.duration);
    const title = Utils.truncateText(video.title, 60);

    return `
    <div class="video-card" onclick="navigateToWatch('${video.id}')">
      <div class="video-thumbnail-container">
        <img 
          src="${video.thumbnail}" 
          alt="${video.title}"
          class="video-thumbnail"
          loading="lazy"
        >
        <div class="video-duration">${duration}</div>
      </div>
      
      <div class="video-info">
        <div class="video-channel-avatar">${channelInitial}</div>
        <div class="video-details">
          <h3 class="video-title">${title}</h3>
          <div class="video-channel">${video.channelTitle}</div>
          <div class="video-metadata">
            <span>${views} views</span>
            <span>•</span>
            <span>${publishedDate}</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

/**
 * Navigate to watch page
 */
function navigateToWatch(videoId) {
    window.location.href = `watch.html?v=${videoId}`;
}

/**
 * Show loading state
 */
function showLoading() {
    document.getElementById('loading').style.display = 'flex';
    document.getElementById('video-grid').style.display = 'none';
}

/**
 * Hide loading state
 */
function hideLoading() {
    document.getElementById('loading').style.display = 'none';
    document.getElementById('video-grid').style.display = 'grid';
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
