// Demo Video Data - Sample videos for offline demo
// ============================================================
// Using real YouTube video IDs for embedded playback (no API key needed!)

const DEMO_DATA = {
    // Regular Videos - Using popular, safe-for-work YouTube videos
    videos: [
        {
            id: 'dQw4w9WgXcQ',
            title: 'Rick Astley - Never Gonna Give You Up (Official Music Video)',
            channelTitle: 'Rick Astley',
            channelId: 'UCuAXFkgsw1L7xaCfnd5JJOw',
            thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/mqdefault.jpg',
            thumbnailHigh: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg',
            description: 'The official video for Never Gonna Give You Up by Rick Astley.',
            publishedAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),
            viewCount: '1420000000',
            likeCount: '15000000',
            duration: 'PT3M33S',
            isShort: false
        },
        {
            id: 'jNQXAC9IVRw',
            title: 'Me at the zoo',
            channelTitle: 'jawed',
            channelId: 'UC4QobU6STFB0P71PMvOGN5A',
            thumbnail: 'https://i.ytimg.com/vi/jNQXAC9IVRw/mqdefault.jpg',
            thumbnailHigh: 'https://i.ytimg.com/vi/jNQXAC9IVRw/hqdefault.jpg',
            description: 'The first video on YouTube.',
            publishedAt: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000).toISOString(),
            viewCount: '285000000',
            likeCount: '12000000',
            duration: 'PT0M19S',
            isShort: false
        },
        {
            id: 'kJQP7kiw5Fk',
            title: 'Luis Fonsi - Despacito ft. Daddy Yankee',
            channelTitle: 'Luis Fonsi',
            channelId: 'UC947pHJgJrA6BFHY-3R53Yw',
            thumbnail: 'https://i.ytimg.com/vi/kJQP7kiw5Fk/mqdefault.jpg',
            thumbnailHigh: 'https://i.ytimg.com/vi/kJQP7kiw5Fk/hqdefault.jpg',
            description: 'Despacito music video.',
            publishedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
            viewCount: '8200000000',
            likeCount: '48000000',
            duration: 'PT4M42S',
            isShort: false
        },
        {
            id: 'OPf0YbXqDm0',
            title: 'Mark Ronson - Uptown Funk ft. Bruno Mars',
            channelTitle: 'Mark Ronson',
            channelId: 'UC0wIzRsQ4d9KbNWm6YqRfQg',
            thumbnail: 'https://i.ytimg.com/vi/OPf0YbXqDm0/mqdefault.jpg',
            thumbnailHigh: 'https://i.ytimg.com/vi/OPf0YbXqDm0/hqdefault.jpg',
            description: 'Uptown Funk music video.',
            publishedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
            viewCount: '4800000000',
            likeCount: '32000000',
            duration: 'PT4M30S',
            isShort: false
        },
        {
            id: '9bZkp7q19f0',
            title: 'PSY - GANGNAM STYLE M/V',
            channelTitle: 'officialpsy',
            channelId: 'UCrDkAvwZum-UTjHmzDI2iIw',
            thumbnail: 'https://i.ytimg.com/vi/9bZkp7q19f0/mqdefault.jpg',
            thumbnailHigh: 'https://i.ytimg.com/vi/9bZkp7q19f0/hqdefault.jpg',
            description: 'Gangnam Style music video.',
            publishedAt: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000).toISOString(),
            viewCount: '5000000000',
            likeCount: '25000000',
            duration: 'PT4M12S',
            isShort: false
        },
        {
            id: 'YQHsXMglC9A',
            title: 'Adele - Hello',
            channelTitle: 'Adele',
            channelId: 'UCsRM0YB_dabtEPGPTKo-gcw',
            thumbnail: 'https://i.ytimg.com/vi/YQHsXMglC9A/mqdefault.jpg',
            thumbnailHigh: 'https://i.ytimg.com/vi/YQHsXMglC9A/hqdefault.jpg',
            description: 'Hello music video by Adele.',
            publishedAt: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString(),
            viewCount: '3500000000',
            likeCount: '18000000',
            duration: 'PT6M7S',
            isShort: false
        },
        {
            id: 'RgKAFK5djSk',
            title: 'Wiz Khalifa - See You Again ft. Charlie Puth',
            channelTitle: 'Wiz Khalifa',
            channelId: 'UCvMaReDO4EwZ5cZfIc5LdQQ',
            thumbnail: 'https://i.ytimg.com/vi/RgKAFK5djSk/mqdefault.jpg',
            thumbnailHigh: 'https://i.ytimg.com/vi/RgKAFK5djSk/hqdefault.jpg',
            description: 'See You Again music video from Furious 7.',
            publishedAt: new Date(Date.now() - 9 * 24 * 60 * 60 * 1000).toISOString(),
            viewCount: '6000000000',
            likeCount: '37000000',
            duration: 'PT5M40S',
            isShort: false
        },
        {
            id: 'fJ9rUzIMcZQ',
            title: 'Queen - Bohemian Rhapsody',
            channelTitle: 'Queen Official',
            channelId: 'UCiMhD4jzUqG-IgPzUmmytRQ',
            thumbnail: 'https://i.ytimg.com/vi/fJ9rUzIMcZQ/mqdefault.jpg',
            thumbnailHigh: 'https://i.ytimg.com/vi/fJ9rUzIMcZQ/hqdefault.jpg',
            description: 'Bohemian Rhapsody remastered music video.',
            publishedAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
            viewCount: '1800000000',
            likeCount: '15000000',
            duration: 'PT5M55S',
            isShort: false
        },
        {
            id: '60ItHLz5WEA',
            title: 'Alan Walker - Faded',
            channelTitle: 'Alan Walker',
            channelId: 'UC_alan',
            thumbnail: 'https://i.ytimg.com/vi/60ItHLz5WEA/mqdefault.jpg',
            thumbnailHigh: 'https://i.ytimg.com/vi/60ItHLz5WEA/hqdefault.jpg',
            description: 'Faded official music video.',
            publishedAt: new Date(Date.now() - 23 * 24 * 60 * 60 * 1000).toISOString(),
            viewCount: '3400000000',
            likeCount: '27000000',
            duration: 'PT3M32S',
            isShort: false
        },
        {
            id: 'aJOTlE1K90k',
            title: 'Pharrell Williams - Happy',
            channelTitle: 'Pharrell Williams',
            channelId: 'UC_pharrell',
            thumbnail: 'https://i.ytimg.com/vi/aJOTlE1K90k/mqdefault.jpg',
            thumbnailHigh: 'https://i.ytimg.com/vi/aJOTlE1K90k/hqdefault.jpg',
            description: 'Happy official music video.',
            publishedAt: new Date(Date.now() - 24 * 24 * 60 * 60 * 1000).toISOString(),
            viewCount: '1400000000',
            likeCount: '9800000',
            duration: 'PT3M53S',
            isShort: false
        },
        {
            id: 'PT2_F-1esPk',
            title: 'The Weeknd - Blinding Lights',
            channelTitle: 'The Weeknd',
            channelId: 'UC_weeknd',
            thumbnail: 'https://i.ytimg.com/vi/PT2_F-1esPk/mqdefault.jpg',
            thumbnailHigh: 'https://i.ytimg.com/vi/PT2_F-1esPk/hqdefault.jpg',
            description: 'Blinding Lights official music video.',
            publishedAt: new Date(Date.now() - 25 * 24 * 60 * 60 * 1000).toISOString(),
            viewCount: '950000000',
            likeCount: '9500000',
            duration: 'PT4M21S',
            isShort: false
        },
        {
            id: '450p7goxZqg',
            title: 'The Chainsmokers - Closer ft. Halsey',
            channelTitle: 'The Chainsmokers',
            channelId: 'UC_chainsmokers',
            thumbnail: 'https://i.ytimg.com/vi/450p7goxZqg/mqdefault.jpg',
            thumbnailHigh: 'https://i.ytimg.com/vi/450p7goxZqg/hqdefault.jpg',
            description: 'Closer official music video.',
            publishedAt: new Date(Date.now() - 26 * 24 * 60 * 60 * 1000).toISOString(),
            viewCount: '3400000000',
            likeCount: '19000000',
            duration: 'PT4M5S',
            isShort: false
        }
    ],

    // Shorts - Vertical short-form videos
    shorts: [
        {
            id: 'L_jWHffIx5E',
            title: 'Amazing Nature Moment 🌿 #shorts',
            channelTitle: 'Nature Shorts',
            channelId: 'UC_shorts1',
            thumbnail: 'https://i.ytimg.com/vi/L_jWHffIx5E/mqdefault.jpg',
            thumbnailHigh: 'https://i.ytimg.com/vi/L_jWHffIx5E/hqdefault.jpg',
            description: 'Beautiful nature moments captured.',
            publishedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
            viewCount: '2500000',
            likeCount: '125000',
            duration: 'PT0M45S',
            isShort: true
        },
        {
            id: 'ZXsQAXx_ao0',
            title: 'Tech Tips in 60 Seconds 💻 #shorts',
            channelTitle: 'Quick Tech',
            channelId: 'UC_shorts3',
            thumbnail: 'https://i.ytimg.com/vi/ZXsQAXx_ao0/mqdefault.jpg',
            thumbnailHigh: 'https://i.ytimg.com/vi/ZXsQAXx_ao0/hqdefault.jpg',
            description: 'Fast tech tips and tricks.',
            publishedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
            viewCount: '3200000',
            likeCount: '158000',
            duration: 'PT0M55S',
            isShort: true
        },
        {
            id: 'oHg5SJYRHA0',
            title: 'Funny Pets Compilation 🐶 #shorts',
            channelTitle: 'Pet Fun',
            channelId: 'UC_shorts4',
            thumbnail: 'https://i.ytimg.com/vi/oHg5SJYRHA0/mqdefault.jpg',
            thumbnailHigh: 'https://i.ytimg.com/vi/oHg5SJYRHA0/hqdefault.jpg',
            description: 'Hilarious pet moments.',
            publishedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
            viewCount: '4500000',
            likeCount: '285000',
            duration: 'PT0M42S',
            isShort: true
        },
        {
            id: 'dQw4w9WgXcQ',
            title: 'DIY Life Hack ✨ #shorts',
            channelTitle: 'Life Hacks Daily',
            channelId: 'UC_shorts5',
            thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/mqdefault.jpg',
            thumbnailHigh: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg',
            description: 'Amazing DIY trick you need to try!',
            publishedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
            viewCount: '5200000',
            likeCount: '312000',
            duration: 'PT0M38S',
            isShort: true
        }
    ]
};

// Freeze data to prevent modifications
Object.freeze(DEMO_DATA);
Object.freeze(DEMO_DATA.videos);
Object.freeze(DEMO_DATA.shorts);
