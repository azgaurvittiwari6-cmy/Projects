// Game State Management
let currentGame = null;

// Navigation
function startGame(gameName) {
    document.getElementById('main-menu').style.display = 'none';

    const games = ['memory-game', 'reaction-game', 'puzzle-game'];
    games.forEach(game => {
        document.getElementById(game).classList.remove('active');
    });

    currentGame = gameName;

    switch (gameName) {
        case 'memory':
            document.getElementById('memory-game').classList.add('active');
            initMemoryGame();
            break;
        case 'reaction':
            document.getElementById('reaction-game').classList.add('active');
            initReactionGame();
            break;
        case 'puzzle':
            document.getElementById('puzzle-game').classList.add('active');
            initPuzzleGame();
            break;
    }
}

function backToMenu() {
    document.getElementById('main-menu').style.display = 'block';

    const games = ['memory-game', 'reaction-game', 'puzzle-game'];
    games.forEach(game => {
        document.getElementById(game).classList.remove('active');
    });

    // Clear any intervals
    if (memoryTimer) clearInterval(memoryTimer);
    if (puzzleTimer) clearInterval(puzzleTimer);

    currentGame = null;
}

// ============================================
// MEMORY GAME
// ============================================
let memoryCards = [];
let flippedCards = [];
let matchedPairs = 0;
let memoryMoves = 0;
let memoryTime = 0;
let memoryTimer = null;

const colors = ['🔴', '🟢', '🔵', '🟡', '🟣', '🟠', '⚫', '⚪'];

function initMemoryGame() {
    memoryCards = [...colors, ...colors];
    shuffleArray(memoryCards);
    flippedCards = [];
    matchedPairs = 0;
    memoryMoves = 0;
    memoryTime = 0;

    updateMemoryStats();

    const grid = document.getElementById('memory-grid');
    grid.innerHTML = '';

    memoryCards.forEach((color, index) => {
        const card = document.createElement('div');
        card.className = 'memory-card';
        card.dataset.index = index;
        card.dataset.color = color;
        card.addEventListener('click', flipMemoryCard);
        grid.appendChild(card);
    });

    document.getElementById('memory-success').classList.add('hidden');

    if (memoryTimer) clearInterval(memoryTimer);
    memoryTimer = setInterval(() => {
        memoryTime++;
        updateMemoryStats();
    }, 1000);
}

function flipMemoryCard(e) {
    const card = e.currentTarget;

    if (card.classList.contains('flipped') || card.classList.contains('matched') || flippedCards.length === 2) {
        return;
    }

    card.classList.add('flipped');
    card.textContent = card.dataset.color;
    flippedCards.push(card);

    if (flippedCards.length === 2) {
        memoryMoves++;
        updateMemoryStats();

        setTimeout(checkMemoryMatch, 600);
    }
}

function checkMemoryMatch() {
    const [card1, card2] = flippedCards;

    if (card1.dataset.color === card2.dataset.color) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        matchedPairs++;
        updateMemoryStats();

        if (matchedPairs === colors.length) {
            clearInterval(memoryTimer);
            showMemorySuccess();
        }
    } else {
        card1.classList.remove('flipped');
        card2.classList.remove('flipped');
        card1.textContent = '';
        card2.textContent = '';
    }

    flippedCards = [];
}

function updateMemoryStats() {
    document.getElementById('memory-moves').textContent = memoryMoves;
    document.getElementById('memory-matches').textContent = matchedPairs;
    document.getElementById('memory-time').textContent = memoryTime + 's';
}

function showMemorySuccess() {
    document.getElementById('final-moves').textContent = memoryMoves;
    document.getElementById('final-time').textContent = memoryTime;
    document.getElementById('memory-success').classList.remove('hidden');
}

// ============================================
// REACTION GAME
// ============================================
let reactionState = 'idle'; // idle, waiting, ready, result
let reactionStartTime = 0;
let reactionTimeout = null;
let reactionTimes = [];

function initReactionGame() {
    reactionState = 'idle';
    updateReactionDisplay('Click to Start', '');
    document.getElementById('reaction-zone').className = 'reaction-zone';
    updateReactionStats();
}

function handleReactionClick() {
    const zone = document.getElementById('reaction-zone');

    switch (reactionState) {
        case 'idle':
            startReactionTest();
            break;
        case 'waiting':
            // Too early!
            updateReactionDisplay('Too Early!', 'Wait for green...');
            zone.className = 'reaction-zone';
            clearTimeout(reactionTimeout);
            reactionState = 'idle';
            setTimeout(() => {
                updateReactionDisplay('Click to Start', '');
            }, 1500);
            break;
        case 'ready':
            recordReactionTime();
            break;
        case 'result':
            startReactionTest();
            break;
    }
}

function startReactionTest() {
    reactionState = 'waiting';
    updateReactionDisplay('Wait...', 'Get ready!');
    document.getElementById('reaction-zone').className = 'reaction-zone waiting';

    const delay = Math.random() * 3000 + 2000; // 2-5 seconds

    reactionTimeout = setTimeout(() => {
        reactionState = 'ready';
        reactionStartTime = Date.now();
        updateReactionDisplay('CLICK NOW!', '');
        document.getElementById('reaction-zone').className = 'reaction-zone ready';
    }, delay);
}

function recordReactionTime() {
    const reactionTime = Date.now() - reactionStartTime;
    reactionTimes.push(reactionTime);

    reactionState = 'result';
    updateReactionDisplay(`${reactionTime}ms`, 'Click to try again');
    document.getElementById('reaction-zone').className = 'reaction-zone';

    updateReactionStats();
}

function updateReactionDisplay(message, result) {
    document.getElementById('reaction-message').textContent = message;
    document.getElementById('reaction-result').textContent = result;
}

function updateReactionStats() {
    if (reactionTimes.length === 0) {
        document.getElementById('reaction-best').textContent = '-';
        document.getElementById('reaction-avg').textContent = '-';
        document.getElementById('reaction-attempts').textContent = '0';
    } else {
        const best = Math.min(...reactionTimes);
        const avg = Math.round(reactionTimes.reduce((a, b) => a + b, 0) / reactionTimes.length);

        document.getElementById('reaction-best').textContent = best + 'ms';
        document.getElementById('reaction-avg').textContent = avg + 'ms';
        document.getElementById('reaction-attempts').textContent = reactionTimes.length;
    }
}

function resetReactionGame() {
    reactionTimes = [];
    initReactionGame();
}

// ============================================
// NUMBER PUZZLE GAME
// ============================================
let puzzleState = [];
let emptyIndex = 15;
let puzzleMoves = 0;
let puzzleTime = 0;
let puzzleTimer = null;

function initPuzzleGame() {
    // Create solved state
    puzzleState = Array.from({ length: 15 }, (_, i) => i + 1);
    puzzleState.push(null); // Empty space

    // Shuffle
    shufflePuzzle();

    puzzleMoves = 0;
    puzzleTime = 0;

    updatePuzzleStats();
    renderPuzzle();

    document.getElementById('puzzle-success').classList.add('hidden');

    if (puzzleTimer) clearInterval(puzzleTimer);
    puzzleTimer = setInterval(() => {
        puzzleTime++;
        updatePuzzleStats();
    }, 1000);
}

function shufflePuzzle() {
    // Make 100 random valid moves to ensure solvability
    for (let i = 0; i < 100; i++) {
        const validMoves = getValidPuzzleMoves();
        const randomMove = validMoves[Math.floor(Math.random() * validMoves.length)];
        swapPuzzleTiles(randomMove, emptyIndex);
    }
}

function getValidPuzzleMoves() {
    const moves = [];
    const row = Math.floor(emptyIndex / 4);
    const col = emptyIndex % 4;

    if (row > 0) moves.push(emptyIndex - 4); // Up
    if (row < 3) moves.push(emptyIndex + 4); // Down
    if (col > 0) moves.push(emptyIndex - 1); // Left
    if (col < 3) moves.push(emptyIndex + 1); // Right

    return moves;
}

function swapPuzzleTiles(index1, index2) {
    [puzzleState[index1], puzzleState[index2]] = [puzzleState[index2], puzzleState[index1]];
    emptyIndex = [index1, index2].find(i => puzzleState[i] === null);
}

function renderPuzzle() {
    const grid = document.getElementById('puzzle-grid');
    grid.innerHTML = '';

    puzzleState.forEach((num, index) => {
        const tile = document.createElement('div');
        tile.className = num === null ? 'puzzle-tile empty' : 'puzzle-tile';
        tile.textContent = num || '';

        if (num !== null) {
            tile.addEventListener('click', () => handlePuzzleClick(index));
        }

        grid.appendChild(tile);
    });
}

function handlePuzzleClick(index) {
    const validMoves = getValidPuzzleMoves();

    if (validMoves.includes(index)) {
        swapPuzzleTiles(index, emptyIndex);
        puzzleMoves++;
        updatePuzzleStats();
        renderPuzzle();

        if (isPuzzleSolved()) {
            clearInterval(puzzleTimer);
            showPuzzleSuccess();
        }
    }
}

function isPuzzleSolved() {
    for (let i = 0; i < 15; i++) {
        if (puzzleState[i] !== i + 1) return false;
    }
    return puzzleState[15] === null;
}

function updatePuzzleStats() {
    document.getElementById('puzzle-moves').textContent = puzzleMoves;
    document.getElementById('puzzle-time').textContent = puzzleTime + 's';
}

function showPuzzleSuccess() {
    document.getElementById('puzzle-final-moves').textContent = puzzleMoves;
    document.getElementById('puzzle-final-time').textContent = puzzleTime;
    document.getElementById('puzzle-success').classList.remove('hidden');
}

// ============================================
// UTILITY FUNCTIONS
// ============================================
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Initialize on load
window.addEventListener('load', () => {
    // Any initialization code
    console.log('GameHub loaded successfully!');
});
