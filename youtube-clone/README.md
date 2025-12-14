# 📺 YouTube Clone - Pixel-Perfect Replica

A visually accurate YouTube clone built with vanilla HTML, CSS, and JavaScript. This application replicates YouTube's 2024 interface with pixel-perfect precision, featuring responsive design, theme switching, and live data from the YouTube Data API v3.

![YouTube Clone](https://img.shields.io/badge/Status-Complete-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## ✨ Features

### 🎨 Pixel-Perfect UI
- **Authentic Design**: Matches YouTube's official 2024 interface exactly
- **Theme Toggle**: Seamless light/dark mode switching with localStorage persistence
- **Responsive Layout**: Fully adaptive design for mobile, tablet, and desktop
- **Smooth Animations**: Hover effects, transitions, and micro-interactions

### 🔍 Search & Discovery
- **Live Search**: Real-time video search powered by YouTube Data API v3
- **Typeahead Suggestions**: Autocomplete dropdown with popular search terms
- **Smart Results**: Comprehensive video metadata including views, likes, and publish dates

### 📱 Core Components
- **Sticky Header**: Fixed navigation with logo, search bar, and user icons
- **Collapsible Sidebar**: Navigation panel that adapts to screen size
- **Video Grid**: Responsive grid layout with dynamic video cards
- **Watch Page**: Dedicated video player with related videos sidebar

### 🎥 Video Features
- **YouTube Player**: Embedded YouTube iframe player with full controls
- **Rich Metadata**: Video title, views, likes, publish date, and description
- **Channel Info**: Channel avatar and subscription count
- **Related Videos**: Dynamic sidebar with contextually related content

## 🚀 Getting Started

### Prerequisites

You'll need a **YouTube Data API v3 key** to run this application:

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project (or select an existing one)
3. Enable the **YouTube Data API v3**
4. Create credentials → API Key
5. Copy your API key

### Installation

1. **Clone or download this repository**
   ```bash
   cd youtube-clone
   ```

2. **Configure your API key**
   
   Open `config.js` and replace `YOUR_API_KEY_HERE` with your actual YouTube API key:
   
   ```javascript
   const CONFIG = {
     API_KEY: 'YOUR_ACTUAL_API_KEY_HERE', // ⚠️ Insert your key here
     // ... rest of config
   };
   ```

3. **Run the application**
   
   Open `index.html` in your web browser:
   - **Option 1**: Double-click `index.html`
   - **Option 2**: Use a local server (recommended):
     ```bash
     # Python 3
     python -m http.server 8000
     
     # Node.js (if you have http-server installed)
     npx http-server -p 8000
     ```
   - Navigate to `http://localhost:8000`

## 📁 Project Structure

```
youtube-clone/
├── index.html          # Homepage with video grid
├── watch.html          # Watch page for video playback
├── styles.css          # All styles with theme variables
├── config.js           # API configuration and constants
├── api.js              # YouTube API service module
├── theme.js            # Theme management (light/dark mode)
├── main.js             # Homepage logic
├── watch.js            # Watch page logic
└── README.md           # This file
```

## 🎯 Usage

### Homepage
- Browse popular/trending videos on the home page
- Use the search bar to find specific videos
- Click any video card to watch it
- Toggle between light and dark themes using the theme button (🌙/☀️)
- Collapse/expand the sidebar using the menu button (☰)

### Watch Page
- Watch videos with the embedded YouTube player
- View video metadata (title, views, likes, publish date)
- See channel information
- Browse related videos in the sidebar
- Click related videos to navigate to them

### Navigation
- **Sidebar**: Access different sections (Home, Trending, Music, Gaming, etc.)
- **Header**: Search for videos, toggle theme, and access user menu
- **Responsive**: Sidebar automatically adapts to mobile screens

## 🎨 Theme System

The application supports both light and dark themes:

- **Light Mode**: Clean white background with dark text
- **Dark Mode**: Sleek dark background with white text
- **Persistence**: Your theme preference is saved to localStorage
- **System Detection**: Automatically detects your OS theme preference on first visit

Toggle themes by clicking the theme button in the header.

## 🔧 Configuration

### API Settings (`config.js`)

```javascript
const CONFIG = {
  API_KEY: 'YOUR_API_KEY_HERE',        // Your YouTube API key
  API_BASE_URL: 'https://www.googleapis.com/youtube/v3',
  DEFAULT_REGION: 'US',                // Default region code
  MAX_RESULTS: 24,                     // Videos per page (home)
  MAX_RELATED_VIDEOS: 12,              // Related videos count
  SEARCH_SUGGESTIONS: [...]            // Typeahead suggestions
};
```

### Customization

You can customize various aspects in `config.js`:
- **DEFAULT_REGION**: Change the region for trending videos
- **MAX_RESULTS**: Adjust how many videos load on the homepage
- **MAX_RELATED_VIDEOS**: Control related videos count
- **SEARCH_SUGGESTIONS**: Add your own search suggestions

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Edge (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## ⚠️ API Quota Limits

The YouTube Data API has daily quota limits:
- **Default quota**: 10,000 units per day
- **Search operation**: ~100 units per request
- **Video details**: ~1 unit per request

**Tip**: If you exceed the quota, the app will display a friendly error message. Upgrade your quota in the Google Cloud Console if needed.

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (single column, collapsible sidebar)
- **Tablet**: 768px - 1024px (2-3 column grid)
- **Desktop**: 1024px - 1280px (3-4 column grid)
- **Wide**: > 1280px (4+ column grid)

## 🎭 Design Highlights

### CSS Variables
All colors, spacing, and theme properties are defined as CSS custom properties for easy customization and theme switching.

### Typography
Uses Google's **Roboto** font family (YouTube's official font) with precise font weights and sizes.

### Animations
Subtle hover effects and transitions that match YouTube's official UX:
- Video card hover with scale effect
- Button hover states
- Smooth theme transitions
- Sidebar collapse animation

## 🔐 Security Notes

- **Never commit your API key** to public repositories
- Consider using environment variables for production deployments
- The API key is client-side visible - set up API key restrictions in Google Cloud Console
- Restrict your API key to HTTP referrers (your domain)

## 🐛 Troubleshooting

### Videos not loading?
1. Check if your API key is correctly set in `config.js`
2. Verify the API is enabled in Google Cloud Console
3. Check browser console for error messages
4. Ensure you haven't exceeded the API quota

### Theme not persisting?
1. Check if localStorage is enabled in your browser
2. Clear browser cache and try again

### Sidebar not collapsing on mobile?
1. Ensure you're viewing on a screen < 768px width
2. Use browser DevTools responsive mode to test

## 📄 License

This project is for educational purposes only. YouTube and all related trademarks are property of Google LLC.

## 🙏 Acknowledgments

- Design inspiration: YouTube.com (Google LLC)
- Font: Roboto by Google Fonts
- API: YouTube Data API v3

---

**Made with ❤️ for learning purposes**
