// ============================================
// DATA
// ============================================
const SOUND_DETECTIVE_DATA = {
  cities: [
    {
      id: "pop",
      name: "Pop City",
      blurb: "Vibrant synths and catchy hooks await restoration",
      beforeImg: "assets/pop_before.jpg",
      afterImg: "assets/pop_after.jpg",
      chorusSrc: "assets/audio/pop_chorus.mp3",
      questions: [
        {
          id: "pop-q1",
          prompt: "Which instrument carries the main hook?",
          clipSrc: "assets/audio/pop_q1.mp3",
          options: [
            { label: "A) Synth Lead", correct: true },
            { label: "B) Acoustic Guitar", correct: false },
            { label: "C) Violin", correct: false }
          ]
        },
        {
          id: "pop-q2",
          prompt: "What creates the rhythmic foundation?",
          clipSrc: "assets/audio/pop_q2.mp3",
          options: [
            { label: "A) Electric Bass", correct: false },
            { label: "B) 808 Sub Bass", correct: true },
            { label: "C) Upright Bass", correct: false }
          ]
        },
        {
          id: "pop-q3",
          prompt: "Which percussion element drives the beat?",
          clipSrc: "assets/audio/pop_q3.mp3",
          options: [
            { label: "A) Live Drums", correct: false },
            { label: "B) Hand Claps", correct: false },
            { label: "C) Programmed Kick & Snare", correct: true }
          ]
        },
        {
          id: "pop-q4",
          prompt: "What adds the atmospheric texture?",
          clipSrc: "assets/audio/pop_q4.mp3",
          options: [
            { label: "A) Synth Pads", correct: true },
            { label: "B) String Section", correct: false },
            { label: "C) Choir", correct: false }
          ]
        }
      ]
    },
    {
      id: "rock",
      name: "Rock Mountain",
      blurb: "Raw guitars and thunderous drums need your help",
      beforeImg: "assets/rock_before.jpg",
      afterImg: "assets/rock_after.jpg",
      chorusSrc: "assets/audio/rock_chorus.mp3",
      questions: [
        {
          id: "rock-q1",
          prompt: "What instrument plays the main riff?",
          clipSrc: "assets/audio/rock_q1.mp3",
          options: [
            { label: "A) Electric Guitar", correct: true },
            { label: "B) Piano", correct: false },
            { label: "C) Saxophone", correct: false }
          ]
        },
        {
          id: "rock-q2",
          prompt: "Which creates the low-end power?",
          clipSrc: "assets/audio/rock_q2.mp3",
          options: [
            { label: "A) Synthesizer", correct: false },
            { label: "B) Bass Guitar", correct: true },
            { label: "C) Cello", correct: false }
          ]
        },
        {
          id: "rock-q3",
          prompt: "What drives the energy in the chorus?",
          clipSrc: "assets/audio/rock_q3.mp3",
          options: [
            { label: "A) Drum Machine", correct: false },
            { label: "B) Tambourine", correct: false },
            { label: "C) Live Drum Kit", correct: true }
          ]
        },
        {
          id: "rock-q4",
          prompt: "Which adds the soaring melody in the bridge?",
          clipSrc: "assets/audio/rock_q4.mp3",
          options: [
            { label: "A) Lead Guitar Solo", correct: true },
            { label: "B) Flute", correct: false },
            { label: "C) Keyboard", correct: false }
          ]
        }
      ]
    },
    {
      id: "classical",
      name: "Classical Gardens",
      blurb: "Elegant orchestrations waiting to bloom again",
      beforeImg: "assets/classical_before.jpg",
      afterImg: "assets/classical_after.jpg",
      chorusSrc: "assets/audio/classical_chorus.mp3",
      questions: [
        {
          id: "classical-q1",
          prompt: "Which carries the main melodic theme?",
          clipSrc: "assets/audio/classical_q1.mp3",
          options: [
            { label: "A) Electric Guitar", correct: false },
            { label: "B) Violin Section", correct: true },
            { label: "C) Synthesizer", correct: false }
          ]
        },
        {
          id: "classical-q2",
          prompt: "What provides the harmonic foundation?",
          clipSrc: "assets/audio/classical_q2.mp3",
          options: [
            { label: "A) Bass Guitar", correct: false },
            { label: "B) Piano", correct: true },
            { label: "C) Electronic Bass", correct: false }
          ]
        },
        {
          id: "classical-q3",
          prompt: "Which wind instrument answers the strings?",
          clipSrc: "assets/audio/classical_q3.mp3",
          options: [
            { label: "A) Flute", correct: true },
            { label: "B) Harmonica", correct: false },
            { label: "C) Saxophone", correct: false }
          ]
        },
        {
          id: "classical-q4",
          prompt: "What adds depth in the lower register?",
          clipSrc: "assets/audio/classical_q4.mp3",
          options: [
            { label: "A) Electric Bass", correct: false },
            { label: "B) Cello & Double Bass", correct: true },
            { label: "C) Tuba", correct: false }
          ]
        }
      ]
    }
  ],
  worldRestoredImg: "assets/world_restored.jpg",
  btsItems: [
    { video: "assets/bts1.mp4", caption: "Recording distorted instrument stems" },
    { video: "assets/bts2.mp4", caption: "Layering soundscapes for each city" },
    { video: "assets/bts3.mp4", caption: "Creating the glitch effects" },
    { video: "assets/bts4.mp4", caption: "Final mixing and mastering" }
  ],
  creators: [
    {
      name: "Shota",
      role: "Sound Design Lead",
      img: "assets/shota.jpg",
      bio: "Crafted the distorted soundscapes and restoration choruses that bring each city back to life."
    },
    {
      name: "Aysha",
      role: "Creative Director",
      img: "assets/aysha.jpg",
      bio: "Designed the narrative journey and visual aesthetic of the Sound Detective experience."
    },
    {
      name: "Jennie",
      role: "Audio Engineer",
      img: "assets/jennie.jpg",
      bio: "Engineered the intricate audio puzzles and ensured perfect playback across all devices."
    },
    {
      name: "Tyler",
      role: "Technical Producer",
      img: "assets/tyler.jpg",
      bio: "Built the game architecture and implemented the interactive detection mechanics."
    }
  ]
};

// ============================================
// STORAGE UTILITIES
// ============================================
const STORAGE_KEY = 'soundDetective';

function getProgress() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : { restored: {} };
  } catch (e) {
    console.error('Failed to load progress:', e);
    return { restored: {} };
  }
}

function saveProgress(progress) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) {
    console.error('Failed to save progress:', e);
  }
}

function markCityRestored(cityId) {
  const progress = getProgress();
  progress.restored[cityId] = true;
  saveProgress(progress);
}

function isCityRestored(cityId) {
  const progress = getProgress();
  return !!progress.restored[cityId];
}

function getRestoredCities() {
  const progress = getProgress();
  return Object.keys(progress.restored).filter(id => progress.restored[id]);
}

function clearProgress() {
  localStorage.removeItem(STORAGE_KEY);
}

// ============================================
// AUDIO UTILITIES
// ============================================
let currentAudio = null;
let audioUnlocked = false;

function unlockAudio() {
  if (!audioUnlocked) {
    // Create a silent audio to unlock audio playback on user gesture
    const audio = new Audio();
    audio.src = 'data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAACAAADhAC7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7v////////////////////////////////////////////////////////////////MAAAABkxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV';
    audio.play().catch(() => {});
    audioUnlocked = true;
  }
}

function playAudio(src, loop = false) {
  stopAudio();
  unlockAudio();
  
  currentAudio = new Audio(src);
  currentAudio.loop = loop;
  
  return currentAudio.play()
    .then(() => currentAudio)
    .catch(error => {
      console.warn('Audio playback failed:', error);
      return null;
    });
}

function stopAudio() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
  }
}

function getCurrentAudio() {
  return currentAudio;
}

// ============================================
// ROUTER
// ============================================
let currentRoute = '';
let routeHandlers = {};

function registerRoute(path, handler) {
  routeHandlers[path] = handler;
}

function navigate(path) {
  window.location.hash = path;
}

function getCurrentRoute() {
  return currentRoute;
}

function handleRoute() {
  const hash = window.location.hash.slice(1) || '/home';
  currentRoute = hash;
  
  // Show/hide nav based on route
  const nav = document.getElementById('nav');
  const body = document.body;
  
  if (hash === '/home') {
    nav.style.display = 'none';
    body.classList.remove('has-nav');
  } else {
    nav.style.display = 'block';
    body.classList.add('has-nav');
  }
  
  // Match route to handler
  for (const [pattern, handler] of Object.entries(routeHandlers)) {
    // Exact match
    if (pattern === hash) {
      handler({});
      return;
    }
    
    // Pattern match (e.g., /city/:id)
    const paramPattern = pattern.replace(/:\w+/g, '([^/]+)');
    const regex = new RegExp(`^${paramPattern}$`);
    const match = hash.match(regex);
    
    if (match) {
      const paramNames = (pattern.match(/:\w+/g) || []).map(p => p.slice(1));
      const params = {};
      paramNames.forEach((name, i) => {
        params[name] = match[i + 1];
      });
      handler(params);
      return;
    }
  }
  
  // No match, go to home
  navigate('/home');
}

function initRouter() {
  window.addEventListener('hashchange', handleRoute);
  
  // Initial route on load - always start from home/wake up screen
  if (!window.location.hash) {
    navigate('/home');
  } else {
    handleRoute();
  }
}

// ============================================
// MAIN APPLICATION
// ============================================
const app = document.getElementById('app');
const data = SOUND_DETECTIVE_DATA;

let currentQuizState = {
  cityId: null,
  currentQuestion: 0,
  correctAnswers: 0
};

// Toast notification
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  container.appendChild(toast);
  
  setTimeout(() => {
    toast.style.animation = 'slide-out-right 0.3s ease-out';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// Wake Up Screen
function renderWakeScreen() {
  // Reset story to beginning when returning to home
  currentPage = 0;
  // Clear all restored city progress
  clearProgress();
  
  app.innerHTML = `
    <div class="wake-screen">
      <div class="wake-content">
        <button class="btn-wake" id="wake-btn" aria-label="Wake up and begin the journey">
          Wake Up
        </button>
        <p class="wake-hint">Best experienced with sound ON</p>
      </div>
      <div class="wake-whispers" id="whispers">wake up... wake up...</div>
    </div>
  `;
  
  document.getElementById('wake-btn').addEventListener('click', () => {
    unlockAudio();
    const whispers = document.getElementById('whispers');
    whispers.classList.add('active');
    
    setTimeout(() => {
      navigate('/story');
    }, 3000);
  });
}

// Story Screen
const storyPages = [
  "In a world without sound, silence hangs heavy. The air is still, radios are dead, televisions mute. No one remembers melodies.",
  "The Great Music Distortion struck without warning. Instruments decomposed into chaotic fragments, melodies scattered like dust.",
  "The Harmony Guild—NYUAD's secret music agency—recruited you as a Sound Detective. Your mission: restore the world's greatest songs.",
  "Identify the hidden instruments in distorted tracks. Correct answers restore harmony. Wrong ones deepen the silence.",
  "Choose a city to restore..."
];

let currentPage = 0;

function renderStoryScreen() {
  const isFinalPage = currentPage === storyPages.length - 1;
  
  app.innerHTML = `
    <div class="story-screen">
      <div class="story-panel">
        <div class="story-content">
          <p class="story-text">${storyPages[currentPage]}</p>
          ${!isFinalPage ? `
            <div class="story-controls">
              ${currentPage > 0 ? '<button class="btn" id="prev-btn">Previous</button>' : ''}
              <button class="btn" id="restart-btn">Restart</button>
              <button class="btn btn-primary" id="next-btn">Next</button>
            </div>
          ` : ''}
        </div>
      </div>
    </div>
  `;
  
  if (!isFinalPage) {
    document.getElementById('next-btn')?.addEventListener('click', () => {
      currentPage++;
      renderStoryScreen();
    });
    
    document.getElementById('prev-btn')?.addEventListener('click', () => {
      currentPage--;
      renderStoryScreen();
    });
    
    document.getElementById('restart-btn').addEventListener('click', () => {
      currentPage = 0;
      renderStoryScreen();
    });
  } else {
    renderCitySelect();
  }
}

// City Selection
function renderCitySelect() {
  const citiesHtml = data.cities.map(city => {
    const restored = isCityRestored(city.id);
    return `
      <div class="city-card ${city.id} ${restored ? 'restored' : ''}" 
           tabindex="0" 
           role="button"
           aria-label="${city.name}${restored ? ' - Restored' : ''}"
           data-city-id="${city.id}">
        <div class="city-info">
          <h3 class="city-name">${city.name}</h3>
          <p class="city-blurb">${city.blurb}</p>
          <button class="btn btn-primary">${restored ? 'Replay' : 'Start'}</button>
        </div>
      </div>
    `;
  }).join('');
  
  const storyPanel = app.querySelector('.story-panel');
  storyPanel.innerHTML = `
    <div class="story-content">
      <p class="story-text">${storyPages[currentPage]}</p>
    </div>
  `;
  
  const citySelectHtml = `
    <div class="city-select">
      <h2>Choose Your Mission</h2>
      <div class="cities-grid">
        ${citiesHtml}
      </div>
    </div>
  `;
  
  app.querySelector('.story-screen').insertAdjacentHTML('beforeend', citySelectHtml);
  
  document.querySelectorAll('.city-card').forEach(card => {
    card.addEventListener('click', () => {
      const cityId = card.dataset.cityId;
      navigate(`/city/${cityId}`);
    });
    
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const cityId = card.dataset.cityId;
        navigate(`/city/${cityId}`);
      }
    });
  });
}

// Quiz Screen
function renderQuizScreen({ id: cityId }) {
  const city = data.cities.find(c => c.id === cityId);
  if (!city) {
    navigate('/story');
    return;
  }
  
  currentQuizState = {
    cityId,
    currentQuestion: 0,
    correctAnswers: 0
  };
  
  renderQuestion(city);
}

function renderQuestion(city) {
  const questionIndex = currentQuizState.currentQuestion;
  const question = city.questions[questionIndex];
  const progress = ((questionIndex) / city.questions.length) * 100;
  
  app.innerHTML = `
    <div class="quiz-screen">
      <div class="quiz-progress">
        <div class="quiz-progress-bar" style="width: ${progress}%"></div>
      </div>
      
      <div class="quiz-question">
        <h3>Question ${questionIndex + 1} of ${city.questions.length}</h3>
        <p style="text-align: center; color: hsl(var(--muted-foreground)); margin-bottom: 2rem;">${question.prompt}</p>
        
        <div class="distortion-visual" id="distortion">
          <div class="distortion-overlay"></div>
          <div class="waveform">
            <div class="waveform-bar"></div>
            <div class="waveform-bar"></div>
            <div class="waveform-bar"></div>
            <div class="waveform-bar"></div>
            <div class="waveform-bar"></div>
          </div>
        </div>
        
        <div class="quiz-options" id="options">
          ${question.options.map((opt, i) => `
            <button class="option-btn" data-correct="${opt.correct}" data-index="${i}">
              ${opt.label}
            </button>
          `).join('')}
        </div>
      </div>
    </div>
  `;
  
  document.querySelectorAll('.option-btn').forEach(btn => {
    btn.addEventListener('click', () => handleAnswer(btn, city));
  });
}

function handleAnswer(btn, city) {
  unlockAudio();
  const isCorrect = btn.dataset.correct === 'true';
  const distortion = document.getElementById('distortion');
  
  if (isCorrect) {
    btn.classList.add('correct');
    showToast('You recovered an instrument!', 'success');
    currentQuizState.correctAnswers++;
    
    // Disable all buttons
    document.querySelectorAll('.option-btn').forEach(b => b.disabled = true);
    
    setTimeout(() => {
      currentQuizState.currentQuestion++;
      
      if (currentQuizState.currentQuestion >= city.questions.length) {
        // All questions answered
        markCityRestored(city.id);
        navigate(`/restore/${city.id}`);
      } else {
        renderQuestion(city);
      }
    }, 1500);
  } else {
    btn.classList.add('incorrect');
    distortion.classList.add('glitching');
    showToast('Not quite—listen closely.', 'error');
    
    setTimeout(() => {
      btn.classList.remove('incorrect');
      distortion.classList.remove('glitching');
    }, 600);
  }
}

// Restoration Screen
function renderRestoreScreen({ id: cityId }) {
  const city = data.cities.find(c => c.id === cityId);
  if (!city) {
    navigate('/story');
    return;
  }
  
  const restoredCities = getRestoredCities();
  const remainingCities = data.cities.filter(c => !restoredCities.includes(c.id) && c.id !== cityId);
  
  // Create confetti
  const confettiHtml = Array.from({ length: 30 }, (_, i) => {
    const left = Math.random() * 100;
    const delay = Math.random() * 3;
    const colors = ['var(--primary)', 'var(--pop-primary)', 'var(--rock-primary)', 'var(--classical-primary)'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    return `<div class="confetti" style="left: ${left}%; animation-delay: ${delay}s; background: hsl(${color});"></div>`;
  }).join('');
  
  app.innerHTML = `
    <div class="restore-screen ${city.id}">
      ${confettiHtml}
      <div class="restore-content">
        <h2>${city.name} Restored!</h2>
        <p>Music flows through the streets once more</p>
        
        <div class="restore-actions">
          ${remainingCities.length > 0 ? `
            <h3 style="margin-bottom: 1rem;">Restore Another City</h3>
            ${remainingCities.map(c => `
              <button class="btn btn-primary" onclick="window.location.hash='/city/${c.id}'">${c.name}</button>
            `).join('')}
          ` : `
            <button class="btn btn-primary" onclick="window.location.hash='/final'">Celebrate Victory</button>
          `}
        </div>
      </div>
    </div>
  `;
  
  // Auto-play chorus (will fail gracefully if blocked)
  playAudio(city.chorusSrc, false).catch(() => {
    // If autoplay fails, add a play button
    const actions = app.querySelector('.restore-actions');
    actions.insertAdjacentHTML('afterbegin', `
      <button class="btn btn-primary" id="play-chorus" style="margin-bottom: 1rem;">
        Play Victory Chorus
      </button>
    `);
    document.getElementById('play-chorus').addEventListener('click', () => {
      playAudio(city.chorusSrc, false);
      document.getElementById('play-chorus').remove();
    });
  });
}

// Final Screen
function renderFinalScreen() {
  const notesHtml = Array.from({ length: 20 }, (_, i) => {
    const notes = ['♪', '♫', '♬', '♩'];
    const note = notes[Math.floor(Math.random() * notes.length)];
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    const delay = Math.random() * 5;
    return `<div class="note" style="left: ${left}%; top: ${top}%; animation-delay: ${delay}s;">${note}</div>`;
  }).join('');
  
  app.innerHTML = `
    <div class="final-screen">
      <div class="musical-notes">${notesHtml}</div>
      <div class="final-content">
        <h2>Harmony Restored</h2>
        <p>The world remembers its melodies</p>
        
        <div class="final-actions">
          <button class="btn btn-primary" id="restart-game">Restart Journey</button>
          <button class="btn" onclick="window.location.hash='/story'">Replay Cities</button>
        </div>
      </div>
    </div>
  `;
  
  document.getElementById('restart-game').addEventListener('click', () => {
    clearProgress();
    currentPage = 0;
    navigate('/home');
  });
}

// BTS Screen
function renderBTSScreen() {
  const itemsHtml = data.btsItems.map(item => `
    <div class="bts-item">
      <div class="bts-video">
        <p style="padding: 2rem; text-align: center; color: hsl(var(--muted-foreground));">
          [Behind the Scenes Video]
        </p>
      </div>
      <p class="bts-caption">${item.caption}</p>
    </div>
  `).join('');
  
  app.innerHTML = `
    <div class="bts-screen">
      <div class="container">
        <h2>Behind the Scenes</h2>
        <div class="bts-grid">
          ${itemsHtml}
        </div>
      </div>
    </div>
  `;
}

// Creators Screen
function renderCreatorsScreen() {
  const creatorsHtml = data.creators.map(creator => `
    <div class="creator-card">
      <div class="creator-image">
        <p style="font-size: 3rem; opacity: 0.3;">♪</p>
      </div>
      <h3 class="creator-name">${creator.name}</h3>
      <p class="creator-role">${creator.role}</p>
      <p class="creator-bio">${creator.bio}</p>
    </div>
  `).join('');
  
  app.innerHTML = `
    <div class="creators-screen">
      <div class="container">
        <h2>Meet Our Members</h2>
        <div class="creators-grid">
          ${creatorsHtml}
        </div>
      </div>
    </div>
  `;
}

// Register all routes
registerRoute('/home', renderWakeScreen);
registerRoute('/story', () => {
  currentPage = Math.min(currentPage, storyPages.length - 1);
  renderStoryScreen();
});
registerRoute('/city/:id', renderQuizScreen);
registerRoute('/restore/:id', renderRestoreScreen);
registerRoute('/final', renderFinalScreen);
registerRoute('/bts', renderBTSScreen);
registerRoute('/creators', renderCreatorsScreen);

// Initialize router
initRouter();

// Stop audio when navigating away
window.addEventListener('hashchange', () => {
  stopAudio();
});

