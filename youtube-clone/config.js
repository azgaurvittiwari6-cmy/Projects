// YouTube Clone - Configuration (Offline Demo Mode)
// ============================================================
// This version works completely offline with demo data - NO API KEY NEEDED!

const CONFIG = {
  // Demo Mode - Always enabled (no API required!)
  DEMO_MODE: true,

  // Default Settings
  DEFAULT_REGION: 'US',
  MAX_RESULTS: 24,
  MAX_RELATED_VIDEOS: 12,
  MAX_SHORTS: 8,

  // Search Suggestions (Static for typeahead demo)
  SEARCH_SUGGESTIONS: [
    'music videos',
    'gaming highlights',
    'movie trailers',
    'cooking recipes',
    'technology reviews',
    'sports highlights',
    'comedy skits',
    'travel vlogs',
    'educational content',
    'news updates'
  ]
};

// Freeze config to prevent accidental modifications
Object.freeze(CONFIG);
