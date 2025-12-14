// Watch Page Logic
// ============================================================

let currentVideoId = null;
let currentVideo = null;

/**
 * Initialize the watch page
 */
async function init() {
    currentVideoId = getVideoIdFromURL();

    if (!currentVideoId) {
        showError('No video ID provided');
        return;
    }

    setupEventListeners();
    await loadVideo();
    await loadRelatedVideos();
}

/**
 * Get video ID from URL parameters
 */
function getVideoIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('v');
}

/**
 * Setup event listeners
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

    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const query = searchInput.value.trim();
        if (query) {
            window.location.href = `index.html?search=${encodeURIComponent(query)}`;
        }
    });

    // Home navigation
    const homeItems = document.querySelectorAll('.sidebar-item');
    homeItems[0].addEventListener('click', () => {
        window.location.href = 'index.html';
    });
}

/**
 * Load video details
 */
async function loadVideo() {
    showLoading();

    try {
        currentVideo = await YouTubeAPI.fetchVideoById(currentVideoId);

        if (!currentVideo) {
            showError('Video not found');
            return;
        }

        displayVideo(currentVideo);
    } catch (error) {
        console.error('Error loading video:', error);
        showError('Failed to load video');
    } finally {
        hideLoading();
    }
}

/**
 * Display video details
 */
function displayVideo(video) {
    // Update page title
    document.title = `${video.title} - YouTube Clone`;

    // Embed YouTube player
    const videoPlayer = document.getElementById('video-player');
    videoPlayer.innerHTML = `
    <iframe
      src="https://www.youtube.com/embed/${video.id}?autoplay=1"
      title="${video.title}"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  `;

    // Video title
    document.getElementById('video-title').textContent = video.title;

    // Video stats
    const views = Utils.formatViewCount(video.viewCount);
    const publishedDate = Utils.formatPublishedDate(video.publishedAt);
    const likes = Utils.formatViewCount(video.likeCount);

    document.getElementById('video-views').textContent = `${views} views`;
    document.getElementById('video-date').textContent = publishedDate;
    document.getElementById('video-likes').textContent = likes;

    // Channel info
    const channelInitial = video.channelTitle.charAt(0).toUpperCase();
    document.getElementById('channel-avatar').textContent = channelInitial;
    document.getElementById('channel-name').textContent = video.channelTitle;

    // Description
    const descriptionText = video.description || 'No description available.';
    const truncatedDescription = Utils.truncateText(descriptionText, 300);
    document.getElementById('video-description').textContent = truncatedDescription;

    // Show watch container
    document.getElementById('watch-container').style.display = 'grid';
}

/**
 * Load related videos
 */
async function loadRelatedVideos() {
    try {
        const relatedVideos = await YouTubeAPI.fetchRelatedVideos(currentVideoId);
        displayRelatedVideos(relatedVideos);
    } catch (error) {
        console.error('Error loading related videos:', error);
    }
}

/**
 * Display related videos
 */
function displayRelatedVideos(videos) {
    const relatedContainer = document.getElementById('related-videos');

    if (!videos || videos.length === 0) {
        relatedContainer.innerHTML = `
      <p style="color: var(--text-secondary); padding: 16px;">
        No related videos found
      </p>
    `;
        return;
    }

    relatedContainer.innerHTML = videos.map(video => createRelatedVideoCard(video)).join('');
}

/**
 * Create related video card HTML
 */
function createRelatedVideoCard(video) {
    const views = Utils.formatViewCount(video.viewCount);
    const publishedDate = Utils.formatPublishedDate(video.publishedAt);
    const duration = Utils.formatDuration(video.duration);
    const title = Utils.truncateText(video.title, 60);

    return `
    <div class="related-video-card" onclick="navigateToWatch('${video.id}')">
      <div class="related-thumbnail-container">
        <img 
          src="${video.thumbnail}" 
          alt="${video.title}"
          class="related-thumbnail"
          loading="lazy"
        >
        <div class="video-duration">${duration}</div>
      </div>
      
      <div class="related-video-info">
        <h3 class="related-video-title">${title}</h3>
        <div class="related-video-channel">${video.channelTitle}</div>
        <div class="related-video-metadata">${views} views • ${publishedDate}</div>
      </div>
    </div>
  `;
}

/**
 * Navigate to another video
 */
function navigateToWatch(videoId) {
    window.location.href = `watch.html?v=${videoId}`;
}

/**
 * Show loading state
 */
function showLoading() {
    document.getElementById('loading').style.display = 'flex';
    document.getElementById('watch-container').style.display = 'none';
}

/**
 * Hide loading state
 */
function hideLoading() {
    document.getElementById('loading').style.display = 'none';
}

/**
 * Show error message
 */
function showError(message) {
    hideLoading();
    const errorContainer = document.getElementById('error-message');
    errorContainer.innerHTML = `
    <div class="error-alert">
      <p>${message}</p>
      <p><a href="index.html" style="color: white; text-decoration: underline;">Go back to home</a></p>
    </div>
  `;
    errorContainer.style.display = 'block';
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
