// Offline Demo API - No external API required!
// ============================================================
// All data is loaded from demo-data.js

const YouTubeAPI = {
    /**
     * Fetch popular/trending videos (from demo data)
     * @param {number} maxResults - Maximum number of results to return
     * @returns {Promise<Array>} Array of video objects
     */
    async fetchPopularVideos(maxResults = CONFIG.MAX_RESULTS) {
        console.log('📺 Loading demo videos...');
        // Simulate network delay for realistic feel
        await new Promise(resolve => setTimeout(resolve, 500));
        return DEMO_DATA.videos.slice(0, maxResults);
    },

    /**
     * Search for videos based on query (from demo data)
     * @param {string} query - Search query
     * @param {number} maxResults - Maximum number of results
     * @returns {Promise<Array>} Array of video objects
     */
    async searchVideos(query, maxResults = CONFIG.MAX_RESULTS) {
        console.log(`🔍 Searching demo videos for: "${query}"`);
        await new Promise(resolve => setTimeout(resolve, 400));

        const lowerQuery = query.toLowerCase();
        const results = DEMO_DATA.videos.filter(v =>
            v.title.toLowerCase().includes(lowerQuery) ||
            v.description.toLowerCase().includes(lowerQuery) ||
            v.channelTitle.toLowerCase().includes(lowerQuery)
        );

        return results.slice(0, maxResults);
    },

    /**
     * Fetch related videos for a given video ID (from demo data)
     * @param {string} videoId - Video ID to find related videos for
     * @returns {Promise<Array>} Array of related video objects
     */
    async fetchRelatedVideos(videoId) {
        console.log(`🔗 Loading related videos for: ${videoId}`);
        await new Promise(resolve => setTimeout(resolve, 400));

        // Return random videos excluding the current one
        return DEMO_DATA.videos
            .filter(v => v.id !== videoId)
            .sort(() => Math.random() - 0.5)
            .slice(0, CONFIG.MAX_RELATED_VIDEOS);
    },

    /**
     * Fetch single video details by ID (from demo data)
     * @param {string} videoId - Video ID
     * @returns {Promise<Object|null>} Video object or null
     */
    async fetchVideoById(videoId) {
        console.log(`📹 Loading video: ${videoId}`);
        await new Promise(resolve => setTimeout(resolve, 300));

        const video = DEMO_DATA.videos.find(v => v.id === videoId);
        return video || null;
    },

    /**
     * Fetch shorts (from demo data)
     * @param {number} maxResults - Maximum number of results
     * @returns {Promise<Array>} Array of short video objects
     */
    async fetchShorts(maxResults = CONFIG.MAX_SHORTS) {
        console.log('🎬 Loading shorts...');
        await new Promise(resolve => setTimeout(resolve, 400));
        return DEMO_DATA.shorts.slice(0, maxResults);
    }
};

/**
 * Utility functions for formatting
 */
const Utils = {
    /**
     * Format view count to readable format (e.g., 1.2M, 45K)
     * @param {string|number} count - View count
     * @returns {string} Formatted count
     */
    formatViewCount(count) {
        const num = parseInt(count);
        if (num >= 1000000000) {
            return (num / 1000000000).toFixed(1) + 'B';
        } else if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + 'M';
        } else if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'K';
        }
        return num.toString();
    },

    /**
     * Format published date to relative time (e.g., "2 days ago")
     * @param {string} dateString - ISO date string
     * @returns {string} Relative time string
     */
    formatPublishedDate(dateString) {
        const date = new Date(dateString);
        const now = new Date();
        const seconds = Math.floor((now - date) / 1000);

        const intervals = {
            year: 31536000,
            month: 2592000,
            week: 604800,
            day: 86400,
            hour: 3600,
            minute: 60
        };

        for (const [unit, secondsInUnit] of Object.entries(intervals)) {
            const interval = Math.floor(seconds / secondsInUnit);
            if (interval >= 1) {
                return interval === 1 ? `1 ${unit} ago` : `${interval} ${unit}s ago`;
            }
        }

        return 'just now';
    },

    /**
     * Format ISO 8601 duration to readable format (e.g., "10:25")
     * @param {string} duration - ISO 8601 duration
     * @returns {string} Formatted duration
     */
    formatDuration(duration) {
        const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
        if (!match) return '0:00';

        const hours = (match[1] || '').replace('H', '');
        const minutes = (match[2] || '').replace('M', '');
        const seconds = (match[3] || '').replace('S', '');

        const parts = [];
        if (hours) parts.push(hours);
        parts.push(minutes || '0');
        parts.push(seconds.padStart(2, '0') || '00');

        return parts.join(':');
    },

    /**
     * Truncate text to specified length with ellipsis
     * @param {string} text - Text to truncate
     * @param {number} maxLength - Maximum length
     * @returns {string} Truncated text
     */
    truncateText(text, maxLength) {
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength) + '...';
    }
};
