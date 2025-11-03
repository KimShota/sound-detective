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
  btsVideo: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
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
  
  const template = document.getElementById('wake-screen-template');
  const clone = template.content.cloneNode(true);
  app.innerHTML = '';
  app.appendChild(clone);
  
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
  { text: "In a world without sound, silence hangs heavy. The air is still, radios are dead, televisions mute. No one remembers melodies.", image: "Media/scene1.png" },
  { text: "The Great Music Distortion struck without warning. Instruments decomposed into chaotic fragments, melodies scattered like dust.", image: "Media/scene2.png" },
  { text: "The Harmony Guild—NYUAD's secret music agency—recruited you as a Sound Detective. Your mission: restore the world's greatest songs.", image: "Media/scene3.png" },
  { text: "Identify the hidden instruments in distorted tracks. Correct answers restore harmony. Wrong ones deepen the silence.", image: "Media/scene4.png" },
  { text: "Choose a city to restore..." }
];

let currentPage = 0;

function renderStoryScreen() {
  const isFinalPage = currentPage === storyPages.length - 1;
  const currentStory = storyPages[currentPage];
  const storyText = typeof currentStory === 'string' ? currentStory : currentStory.text;
  const storyImage = typeof currentStory === 'object' && currentStory.image ? currentStory.image : null;
  
  const template = document.getElementById('story-screen-template');
  const clone = template.content.cloneNode(true);
  
  const imgEl = clone.getElementById('story-image');
  const textEl = clone.getElementById('story-text');
  const controlsEl = clone.getElementById('story-controls');
  const prevBtn = clone.getElementById('prev-btn');
  
  textEl.textContent = storyText;
  
  if (storyImage) {
    imgEl.src = storyImage;
    imgEl.style.display = 'block';
  } else {
    imgEl.style.display = 'none';
  }
  
  if (!isFinalPage) {
    controlsEl.style.display = 'flex';
    if (currentPage === 0) {
      prevBtn.style.display = 'none';
    } else {
      prevBtn.style.display = 'inline-block';
    }
  } else {
    controlsEl.style.display = 'none';
  }
  
  app.innerHTML = '';
  app.appendChild(clone);
  
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
  
  // Hide story panel and show only city selection
  app.innerHTML = `
    <div class="story-screen city-selection-screen">
    <div class="city-select">
      <h2>Choose Your Mission</h2>
      <div class="cities-grid">
        ${citiesHtml}
        </div>
      </div>
    </div>
  `;
  
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
  
  const template = document.getElementById('quiz-screen-template');
  const clone = template.content.cloneNode(true);
  
  const progressBar = clone.getElementById('quiz-progress-bar');
  const titleEl = clone.getElementById('quiz-title');
  const promptEl = clone.getElementById('quiz-prompt');
  const optionsEl = clone.getElementById('options');
  
  progressBar.style.width = `${progress}%`;
  titleEl.textContent = `Question ${questionIndex + 1} of ${city.questions.length}`;
  promptEl.textContent = question.prompt;
  
  question.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.dataset.correct = opt.correct;
    btn.dataset.index = i;
    btn.textContent = opt.label;
    btn.addEventListener('click', () => handleAnswer(btn, city));
    optionsEl.appendChild(btn);
  });
  
  app.innerHTML = '';
  app.appendChild(clone);
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
  
  const template = document.getElementById('restore-screen-template');
  const clone = template.content.cloneNode(true);
  
  const screenEl = clone.querySelector('.restore-screen');
  const titleEl = clone.getElementById('restore-title');
  const actionsEl = clone.getElementById('restore-actions');
  
  screenEl.classList.add(city.id);
  titleEl.textContent = `${city.name} Restored!`;
  
  // Create confetti
  for (let i = 0; i < 30; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    const left = Math.random() * 100;
    const delay = Math.random() * 3;
    const colors = ['var(--primary)', 'var(--pop-primary)', 'var(--rock-primary)', 'var(--classical-primary)'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = `${left}%`;
    confetti.style.animationDelay = `${delay}s`;
    confetti.style.background = `hsl(${color})`;
    screenEl.insertBefore(confetti, screenEl.firstChild);
  }
  
  if (remainingCities.length > 0) {
    const heading = document.createElement('h3');
    heading.textContent = 'Restore Another City';
    heading.style.marginBottom = '1rem';
    actionsEl.appendChild(heading);
    
    remainingCities.forEach(c => {
      const btn = document.createElement('button');
      btn.className = 'btn btn-primary';
      btn.textContent = c.name;
      btn.onclick = () => { window.location.hash = `/city/${c.id}`; };
      actionsEl.appendChild(btn);
    });
  } else {
    const btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.textContent = 'Celebrate Victory';
    btn.onclick = () => { window.location.hash = '/final'; };
    actionsEl.appendChild(btn);
  }
  
  app.innerHTML = '';
  app.appendChild(clone);
  
  // Auto-play chorus (will fail gracefully if blocked)
  playAudio(city.chorusSrc, false).catch(() => {
    // If autoplay fails, add a play button
    const actions = document.querySelector('.restore-actions');
    const playBtn = document.createElement('button');
    playBtn.className = 'btn btn-primary';
    playBtn.id = 'play-chorus';
    playBtn.style.marginBottom = '1rem';
    playBtn.textContent = 'Play Victory Chorus';
    playBtn.addEventListener('click', () => {
      playAudio(city.chorusSrc, false);
      playBtn.remove();
    });
    actions.insertBefore(playBtn, actions.firstChild);
  });
}

// Final Screen
function renderFinalScreen() {
  const template = document.getElementById('final-screen-template');
  const clone = template.content.cloneNode(true);
  
  const notesEl = clone.getElementById('musical-notes');
    const notes = ['♪', '♫', '♬', '♩'];
  
  for (let i = 0; i < 20; i++) {
    const noteEl = document.createElement('div');
    noteEl.className = 'note';
    noteEl.textContent = notes[Math.floor(Math.random() * notes.length)];
    noteEl.style.left = `${Math.random() * 100}%`;
    noteEl.style.top = `${Math.random() * 100}%`;
    noteEl.style.animationDelay = `${Math.random() * 5}s`;
    notesEl.appendChild(noteEl);
  }
  
  app.innerHTML = '';
  app.appendChild(clone);
  
  document.getElementById('restart-game').addEventListener('click', () => {
    clearProgress();
    currentPage = 0;
    navigate('/home');
  });
}

// BTS Screen
function renderBTSScreen() {
  const template = document.getElementById('bts-screen-template');
  const clone = template.content.cloneNode(true);
  
  const videoContainer = clone.getElementById('bts-video-container');
  
  // Create YouTube iframe
  const iframe = document.createElement('iframe');
  iframe.src = data.btsVideo;
  iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
  iframe.allowFullscreen = true;
  iframe.className = 'bts-youtube-video';
  
  videoContainer.appendChild(iframe);
  
  app.innerHTML = '';
  app.appendChild(clone);
}

// Creators Screen
function renderCreatorsScreen() {
  const template = document.getElementById('creators-screen-template');
  const clone = template.content.cloneNode(true);
  
  const gridEl = clone.getElementById('creators-grid');
  
  data.creators.forEach(creator => {
    const cardEl = document.createElement('div');
    cardEl.className = 'creator-card';
    
    const imageEl = document.createElement('div');
    imageEl.className = 'creator-image';
    const imageIcon = document.createElement('p');
    imageIcon.textContent = '♪';
    imageIcon.style.fontSize = '3rem';
    imageIcon.style.opacity = '0.3';
    imageEl.appendChild(imageIcon);
    
    const nameEl = document.createElement('h3');
    nameEl.className = 'creator-name';
    nameEl.textContent = creator.name;
    
    const roleEl = document.createElement('p');
    roleEl.className = 'creator-role';
    roleEl.textContent = creator.role;
    
    const bioEl = document.createElement('p');
    bioEl.className = 'creator-bio';
    bioEl.textContent = creator.bio;
    
    cardEl.appendChild(imageEl);
    cardEl.appendChild(nameEl);
    cardEl.appendChild(roleEl);
    cardEl.appendChild(bioEl);
    gridEl.appendChild(cardEl);
  });
  
  app.innerHTML = '';
  app.appendChild(clone);
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

