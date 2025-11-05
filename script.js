const SOUND_DETECTIVE_DATA = {
  cities: [
    {
      id: "pop",
      name: "Pop City",
      blurb: "Vibrant city has turned into a groomy, creepy city without any sounds",
      beforeImg: "assets/pop_before.jpg",
      afterImg: "assets/pop_after.jpg",
      chorusSrc: "assets/audio/pop_chorus.mp3",
      restoreVideo: "https://www.youtube.com/embed/M43ndMeV7Hw",
      questions: [
        {
          id: "pop-q1",
          prompt: "Which piano plays the main chorus of Yellow?",
          clipSrc: "assets/audio/pop_q1.mp3",
          options: [
            { label: "A) Piano 1", correct: false }, 
            { label: "B) Piano 2", correct: false },
            { label: "C) Piano 3", correct: true } //this is the right answer
          ]
        },
        {
          id: "pop-q2",
          prompt: "Which human voice sings the main chorus of Yellow?",
          clipSrc: "assets/audio/pop_q2.mp3",
          options: [
            { label: "A) Voice 1", correct: false },
            { label: "B) Voice 2", correct: false }, 
            { label: "C) Voice 3", correct: true } //this is the right answer
          ]
        },
        {
          id: "pop-q3",
          prompt: "Which guitar plays the main chorus of Yellow?",
          clipSrc: "assets/audio/pop_q3.mp3",
          options: [
            { label: "A) guitar 1", correct: false },
            { label: "B) guitar 2", correct: false },
            { label: "C) guitar 3", correct: true } //this is the right answer
          ]
        }
      ]
    },
    {
      id: "rock",
      name: "Rock Mountain",
      blurb: "Snow has destroyed all the instruments",
      beforeImg: "assets/rock_before.jpg",
      afterImg: "assets/rock_after.jpg",
      chorusSrc: "assets/audio/rock_chorus.mp3",
      restoreVideo: "https://www.youtube.com/embed/mgT0N3tMP74",
      questions: [
        {
          id: "rock-q1",
          prompt: "Which guitar plays the main chorus of Let It Go?",
          clipSrc: "assets/audio/rock_q1.mp3",
          options: [
            { label: "A) Guitar 1", correct: false },
            { label: "B) Guitar 2", correct: true }, //this is the right answer
            { label: "C) Guitar 3", correct: false }
          ]
        },
        {
          id: "rock-q2",
          prompt: "Which piano plays the main chorus of Let It Go?",
          clipSrc: "assets/audio/rock_q2.mp3",
          options: [
            { label: "A) Piano 1", correct: false },
            { label: "B) Piano 2", correct: true },
            { label: "C) Piano 3", correct: false }
          ]
        },
        {
          id: "rock-q3",
          prompt: "Which voice sings the main chorus of Let It Go?",
          clipSrc: "assets/audio/rock_q3.mp3",
          options: [
            { label: "A) Voice 1", correct: false },
            { label: "B) Voice 2", correct: true },
            { label: "C) Voice 3", correct: false }
          ]
        }
      ]
    },
    {
      id: "classical",
      name: "Classical Garden",
      blurb: "Dark hall has vacuumed all the instruments and destroyed them.",
      beforeImg: "assets/classical_before.jpg",
      afterImg: "assets/classical_after.jpg",
      chorusSrc: "assets/audio/classical_chorus.mp3",
      restoreVideo: "https://www.youtube.com/embed/4HFhJ5FP_LY",
      questions: [
        {
          id: "classical-q1",
          prompt: "Which piano plays the main chorus of Counting Stars?",
          clipSrc: "assets/audio/classical_q1.mp3",
          options: [
            { label: "A) Piano 1", correct: true },
            { label: "B) Piano 2", correct: false },
            { label: "C) Piano 3", correct: false }
          ]
        },
        {
          id: "classical-q2",
          prompt: "Which voice sings the main chorus of Counting Stars?",
          clipSrc: "assets/audio/classical_q2.mp3",
          options: [
            { label: "A) Voice 1", correct: true },
            { label: "B) Voice 2", correct: false },
            { label: "C) Voice 3", correct: false }
          ]
        },
        {
          id: "classical-q3",
          prompt: "Which guitar plays the main chorus of Counting Stars?",
          clipSrc: "assets/audio/classical_q3.mp3",
          options: [
            { label: "A) Guitar 1", correct: true },
            { label: "B) Guitar 2", correct: false },
            { label: "C) Guitar 3", correct: false }
          ]
      
        }
      ]
    }
  ],
  worldRestoredImg: "assets/world_restored.jpg",
  btsVideo: "https://www.youtube.com/embed/yXt0CkOTBaY",
  creators: [
    {
      name: "Shota",
      role: "Web Developer / Sound Recorder",
      img: "Media/shota.jpg",
      bio: "I developed the website and recorded the sounds"
    },
    {
      name: "Ayesha",
      role: "Sound Editor",
      img: "Media/aysha.jpg",
      bio: "I edited the sounds"
    },
    {
      name: "Jennie",
      role: "Video Editor / Sound Recorder",
      img: "Media/jenni.jpg",
      bio: "I made the production video and recorded the sounds"
    },
    {
      name: "Tyler",
      role: "Document Writer / Sound Recorder",
      img: "Media/tyler.jpg",
      bio: "I recorded the sound and made the flowchart."
    }
  ]
};


//declare the storage key 
const STORAGE_KEY = 'soundDetective';

//function to restore the game progress for users
function getProgress() {
  try {
    // get stored data form the local storage
    const data = localStorage.getItem(STORAGE_KEY);
    //if the data exists, parse it into javascript object
    return data ? JSON.parse(data) : { restored: {} };
  } catch (e) { //error handling 
    console.error('Failed to load the progress:', e);
    return { restored: {} };
  }
}

//function to store the current game progress into local storage 
function saveProgress(progress) {
  try {
    // convert the Javascript object intn JSON
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) { //error handling 
    console.error('Failed to save the current progress:', e);
  }
}

//function to mark city as restored
function markCityRestored(cityId) {
  //get the current progress
  const progress = getProgress();
  //mark the city as stored 
  progress.restored[cityId] = true;
  saveProgress(progress);
}

//function to check if the city is restored or not 
function isCityRestored(cityId) {
  const progress = getProgress();
  return !!progress.restored[cityId];
}

//function to retrieve restored cities
function getRestoredCities() {
  const progress = getProgress();
  return Object.keys(progress.restored).filter(id => progress.restored[id]);
}

//function to clear out the process from local storage 
function clearProgress() {
  localStorage.removeItem(STORAGE_KEY);
}

//audio


let currentAudio = null;
let audioUnlocked = false;


function unlockAudio() {
  if (!audioUnlocked) {
    //create the silent audio to start playing the audio without users help 
    const audio = new Audio();
    //silent audio
    audio.src = 'data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAACAAADhAC7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7v////////////////////////////////////////////////////////////////MAAAABkxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV';
    audio.play().catch(() => {});
    audioUnlocked = true;
  }
}

//function to 
function playAudio(src, loop = false, preserveIfSame = false) {
  // If preserveIfSame is true and the same audio is already playing, don't restart it
  if (preserveIfSame && currentAudio && currentAudio.src.includes(src)) {
    return Promise.resolve(currentAudio);
  }
  
  //stop all the current audio and play the silent audio to play the audio we want
  stopAudio();
  unlockAudio();
  
  currentAudio = new Audio(src);
  currentAudio.loop = loop;
  
  //play the audio with error handling 
  return currentAudio.play()
    .then(() => currentAudio)
    .catch(error => {
      console.warn('Audio playback failed:', error);
      return null;
    });
}

//function to stop playing audios 
function stopAudio() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
  }
}

//function to stop all the audio
function stopAllAudio() {
  stopAudio();

  //stop the narrator audio
  if (narratorAudio) {
    narratorAudio.pause();
    narratorAudio.currentTime = 0;
    narratorAudio = null;
  }
  
  //stop instrument sounds 
  if (optionAudio) {
    optionAudio.pause();
    optionAudio.currentTime = 0;
    optionAudio = null;
  }
}

//function to retrieve the current audio 
function getCurrentAudio() {
  return currentAudio;
}

// router 

let currentRoute = '';
let routeHandlers = {};

//fucntion to register a new route
function registerRoute(path, handler) {
  routeHandlers[path] = handler;
}

//function to navigate to the path 
function navigate(path) {
  window.location.hash = path;
}

//function to get the current route 
function getCurrentRoute() {
  return currentRoute;
}

//function to handle the route 
function handleRoute() {
  const hash = window.location.hash.slice(1) || '/home';
  currentRoute = hash;
  
  const nav = document.getElementById('nav');
  const body = document.body;
  
  //show and hide navigation bars accordingly 
  if (hash === '/home') {
    nav.style.display = 'none';
    body.classList.remove('has-nav');
  } else {
    nav.style.display = 'block';
    body.classList.add('has-nav');
  }
  
  //match the hash to a registered route 
  for (const [pattern, handler] of Object.entries(routeHandlers)) {
    if (pattern === hash) {
      handler({});
      return;
    }
    
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
  
  //go back to home 
  navigate('/home');
}

function initRouter() {
  //listen for changes in hash and call handleRoute whenever it changes 
  window.addEventListener('hashchange', handleRoute);
  
  if (!window.location.hash) {
    navigate('/home');
  } else {
    handleRoute();
  }
}

// main app

const app = document.getElementById('app');
const data = SOUND_DETECTIVE_DATA;

//define the current quiz state
let currentQuizState = {
  cityId: null,
  currentQuestion: 0,
  correctAnswers: 0
};

function showToast(message, type = 'info') {
  //get the toast container element 
  const container = document.getElementById('toast-container');
  //create a new toast element
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  //set the text message to display inside the toast
  toast.textContent = message;
  container.appendChild(toast);
  
  setTimeout(() => {
    toast.style.animation = 'slide-out-right 0.3s ease-out';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

//wake up screen 
function renderWakeScreen() {
  //stop all the audios
  stopAllAudio();
  
  currentPage = 0;
  //clear progress
  clearProgress();
  
  //play scary audio
  playAudio('Media/scary-creepy-horror-music-430823.mp3', true).catch(() => {
  });
  
  const template = document.getElementById('wake-screen-template');
  const clone = template.content.cloneNode(true);
  app.innerHTML = '';
  app.appendChild(clone);
  
  //play the whisper audio when user clicks 
  document.getElementById('wake-btn').addEventListener('click', () => {
    unlockAudio();
    
    //stop scary background music 
    stopAudio();
    playAudio('Media/ghost-whispers-6030.mp3', false).catch(() => {
    });
    
    const container = document.getElementById('whispers-container');
    
    //show wake up text 8 times in random positions 
    const whisperCount = 8;
    const whisperTexts = ['wake up...', 'wake up', 'wake up...', 'wake up', 'wake up...', 'wake up'];
    
    //make wake up text appear in random positions
    for (let i = 0; i < whisperCount; i++) {
      const whisper = document.createElement('div');
      whisper.className = 'wake-whispers';
      whisper.textContent = whisperTexts[i % whisperTexts.length];
      
      const left = Math.random() * 85 + 5; //from 5% to 90%
      const top = Math.random() * 85 + 5; //same as left
      
      whisper.style.left = `${left}%`;
      whisper.style.top = `${top}%`;
      
      container.appendChild(whisper);
    }
    
    //select all the wake up text and animate each of them
    const whispers = container.querySelectorAll('.wake-whispers');
    whispers.forEach((whisper, index) => {
      setTimeout(() => {
        whisper.classList.add('active');
      }, index * 200); 
    });
    
    setTimeout(() => {
      navigate('/story');
    }, 3000);
  });
}

//story pages 
const storyPages = [
  { text: "You woke up in a world without sound. The air is still. Radios and TVs are dead. No one remembers what each instrument sounded like.", image: "Media/scene1.png", narrator: "Media/narrator1.mp3" },
  { text: "This is due to a global phenomenon, Great Music Distortion. It decomposed all the instruments into chaotic fragments and all the melodies are now scattered like dust.", image: "Media/scene2.png", narrator: "Media/narrator2.mp3" },
  { text: "Suddenly, the Harmony Guild, NYUAD's secret music agency, came to your dorm and recruited you as a Sound Detective. They assigned you a mission to restore the world's greatest songs.", image: "Media/scene3.png", narrator: "Media/narrator3.mp3" },
  { text: "From now on, you need to identify the hidden instruments in distorted tracks. If you choose correct answers, harmony will be restored. If they choose wrong ones, silence will be deepened.", image: "Media/scene4.png", narrator: "Media/narrator4.mp3" },
  { text: "Choose a city to restore..." }
];

let currentPage = 0;
let narratorAudio = null;

//function to render story screen 
function renderStoryScreen() {
  const isFinalPage = currentPage === storyPages.length - 1;
  const currentStory = storyPages[currentPage];
  const storyText = typeof currentStory === 'string' ? currentStory : currentStory.text;
  const storyImage = typeof currentStory === 'object' && currentStory.image ? currentStory.image : null;
  const narratorSrc = typeof currentStory === 'object' && currentStory.narrator ? currentStory.narrator : null;
  
  //stop playing audio
  stopAudio();
  
  //stop playing narrator 
  if (narratorAudio) {
    narratorAudio.pause();
    narratorAudio.currentTime = 0;
    narratorAudio = null;
  }
  //get the template element from HTML
  const template = document.getElementById('story-screen-template');
  //clone the content of the template
  const clone = template.content.cloneNode(true);
  
  //get elements inside the cloned template
  const imgEl = clone.getElementById('story-image');
  const textEl = clone.getElementById('story-text');
  const controlsEl = clone.getElementById('story-controls');
  const prevBtn = clone.getElementById('prev-btn');
  
  textEl.textContent = storyText;
  
  //if the current page has an image display it 
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
  
  //play narrator audio for the current page 
  if (narratorSrc) {
    narratorAudio = new Audio(narratorSrc);
    narratorAudio.volume = 1.0; //full volume 
    narratorAudio.play().catch(() => {
    });
    
    narratorAudio.addEventListener('ended', () => {
      narratorAudio = null;
    });
  }
  
  //if it is not the final page 
  if (!isFinalPage) {
    //stop the narrator audio 
    const stopNarrator = () => {
      if (narratorAudio) {
        narratorAudio.pause();
        narratorAudio.currentTime = 0;
        narratorAudio = null;
      }
    };
    
    //listen for the click on next button 
    document.getElementById('next-btn')?.addEventListener('click', () => {
      stopNarrator();
      currentPage++;
      renderStoryScreen();
    });
    
    //listen for the click on previous button 
    document.getElementById('prev-btn')?.addEventListener('click', () => {
      stopNarrator();
      currentPage--;
      renderStoryScreen();
    });
    
    //listen for the click on restart button 
    document.getElementById('restart-btn').addEventListener('click', () => {
      stopNarrator();
      currentPage = 0;
      renderStoryScreen();
    });
  } else {
    renderCitySelect();
  }
}

//city selection page
function renderCitySelect() {
  
  //loop through available cities defined in the data and generate corresponding html
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
  
  //hide the story screens and show the city selection only 
  app.innerHTML = `
    <div class="story-screen city-selection-screen">
    <div class="city-select">
      <h2>Choose Your Mission!</h2>
      <div class="cities-grid">
        ${citiesHtml}
        </div>
      </div>
    </div>
  `;
  
  document.querySelectorAll('.city-card').forEach(card => {
    //listen for the mouse click 
    card.addEventListener('click', () => {
      //stop audio 
      stopAudio();
      const cityId = card.dataset.cityId;
      navigate(`/city/${cityId}`);
    });
    
    //listen for enter
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        // Stop scary music box audio when user selects a city
        stopAudio();
        const cityId = card.dataset.cityId;
        navigate(`/city/${cityId}`);
      }
    });
  });
}

//quiz screen 
function renderQuizScreen({ id: cityId }) {
  // Stop scary music box audio when entering quiz screen
  if (currentAudio && currentAudio.src.includes('scary-music-box')) {
    stopAudio();
  }
  
  //find the city object using the city ID
  const city = data.cities.find(c => c.id === cityId);
  if (!city) {
    navigate('/story');
    return;
  }
  
  //current quiz status
  currentQuizState = {
    cityId,
    currentQuestion: 0,
    correctAnswers: 0
  };
  
  renderQuestion(city);
}

let selectedOption = null;
let optionAudio = null;

//function to rende questions 
function renderQuestion(city) {
  const questionIndex = currentQuizState.currentQuestion;
  const question = city.questions[questionIndex];
  const progress = ((questionIndex) / city.questions.length) * 100;
  
  //reset rthe selection 
  selectedOption = null;
  //stop playing audio 
  if (optionAudio) {
    optionAudio.pause();
    optionAudio.currentTime = 0;
    optionAudio = null;
  }
  
  //get the quiz screen html template 
  const template = document.getElementById('quiz-screen-template');
  const clone = template.content.cloneNode(true);
  
  //get elements inside the cloned quiz template 
  const progressBar = clone.getElementById('quiz-progress-bar');
  const titleEl = clone.getElementById('quiz-title');
  const promptEl = clone.getElementById('quiz-prompt');
  const optionsEl = clone.getElementById('options');
  const finalAnswerBtn = clone.getElementById('final-answer-btn');
  
  //update the progress bar 
  progressBar.style.width = `${progress}%`;
  titleEl.textContent = `Question ${questionIndex + 1} of ${city.questions.length}`;
  promptEl.textContent = question.prompt;
  
  //vcreate the buttons for each option 
  question.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.dataset.correct = opt.correct;
    btn.dataset.index = i;
    btn.textContent = opt.label;
    
    //get the intrument type snd number 
    const instrumentType = getInstrumentTypeFromLabel(opt.label);
    const optionNumber = getOptionNumberFromLabel(opt.label);
    
    if (instrumentType && optionNumber !== null) {
      const availableFiles = getInstrumentFiles(instrumentType);
      //assign the audio file accordingly 
      const fileIndex = optionNumber - 1;
      if (availableFiles[fileIndex]) {
        btn.dataset.audioPath = availableFiles[fileIndex];
      }
    }
    
    //listen for click
    btn.addEventListener('click', () => {
      selectOption(btn, city, question);
    });
    optionsEl.appendChild(btn);
  });
  
  finalAnswerBtn.addEventListener('click', () => {
    if (selectedOption) {
      handleFinalAnswer(selectedOption, city);
    }
  });
  
  app.innerHTML = '';
  app.appendChild(clone);
}

function getInstrumentTypeFromLabel(optionLabel) {
  //extract instrument type from the name 
  const match = optionLabel.match(/[A-Z]\)\s*([A-Za-z]+)\s*\d+/i);
  if (!match) {
    return null;
  }
  return match[1].toLowerCase();
}

function getOptionNumberFromLabel(optionLabel) {
  //extract option number from the name of the file 
  const match = optionLabel.match(/[A-Z]\)\s*[A-Za-z]+\s*(\d+)/i);
  if (!match) {
    return null;
  }
  return parseInt(match[1], 10);
}

function getInstrumentFiles(instrumentType) {
  //map the instrument type to files 
  const instrumentFiles = {
    'piano': [
      'Piano/cs_piano.mp3',
      'Piano/let it go piano.mp3',
      'Piano/yellow piano.mp3'
    ],
    'voice': [
      'Voice/cs_voice.mp3',
      'Voice/let it go voice.mp3',
      'Voice/yellow voice.mp3'
    ],
    'guitar': [
      'Guitar/cs_guitar.mp3',
      'Guitar/let it go violin.mp3',
      'Guitar/yellow violin.mp3'
    ]
  };
  
  return instrumentFiles[instrumentType] || [];
}

//function to shuffle (could not add this due to the time limitation but ill do so next time!)
function shuffleArray(array) {
  //copy the original array 
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function selectOption(btn, city, question) {
  unlockAudio();
  
  //stop playing audios 
  if (optionAudio) {
    optionAudio.pause();
    optionAudio.currentTime = 0;
    optionAudio = null;
  }
  
  //remove the prev selection 
  document.querySelectorAll('.option-btn').forEach(b => {
    b.classList.remove('selected');
  });
  
  //select the new option
  btn.classList.add('selected');
  selectedOption = btn;
  
  //enable the final answer button
  const finalAnswerBtn = document.getElementById('final-answer-btn');
  if (finalAnswerBtn) {
    finalAnswerBtn.disabled = false;
  }
  
  //get the audio path 
  const audioPath = btn.dataset.audioPath;
  if (audioPath) {
    optionAudio = new Audio(audioPath);
    optionAudio.volume = 1.0;
    optionAudio.play().catch(() => {
    });
    
    //clear audio ref when it is finished 
    optionAudio.addEventListener('ended', () => {
      optionAudio = null;
    });
  }
}

function handleFinalAnswer(btn, city) {
  unlockAudio();
  
  //stop playing audios 
  if (optionAudio) {
    optionAudio.pause();
    optionAudio.currentTime = 0;
    optionAudio = null;
  }
  
  const isCorrect = btn.dataset.correct === 'true';
  const distortion = document.getElementById('distortion');
  
  //disable all the buttons 
  document.querySelectorAll('.option-btn').forEach(b => b.disabled = true);
  const finalAnswerBtn = document.getElementById('final-answer-btn');
  if (finalAnswerBtn) {
    finalAnswerBtn.disabled = true;
  }
  
  if (isCorrect) {
    btn.classList.add('correct');
    showToast('Correct! You recovered an instrument!', 'success'); //correct message 
    currentQuizState.correctAnswers++;
    
    setTimeout(() => {
      currentQuizState.currentQuestion++;
      
      if (currentQuizState.currentQuestion >= city.questions.length) {
        //mark the city as restored when all the questions are answered 
        markCityRestored(city.id);
        navigate(`/restore/${city.id}`);
      } else {
        renderQuestion(city);
      }
    }, 1500);
  } else {
    btn.classList.add('incorrect');
    distortion.classList.add('glitching');
    showToast('Oops! Wrong Answer', 'error');
    
    setTimeout(() => {
      btn.classList.remove('incorrect');
      distortion.classList.remove('glitching');
      //reenable the buttons
      document.querySelectorAll('.option-btn').forEach(b => b.disabled = false);
      if (finalAnswerBtn) {
        finalAnswerBtn.disabled = false;
      }
      selectedOption = btn;
    }, 600);
  }
}

//restore screen 
function renderRestoreScreen({ id: cityId }) {
  const city = data.cities.find(c => c.id === cityId);
  if (!city) {
    navigate('/story');
    return;
  }
  
  //get the current restored cities
  const restoredCities = getRestoredCities();
  //get the remainign cities
  const remainingCities = data.cities.filter(c => !restoredCities.includes(c.id) && c.id !== cityId);
  
  const template = document.getElementById('restore-screen-template');
  const clone = template.content.cloneNode(true);
  
  const screenEl = clone.querySelector('.restore-screen');
  const titleEl = clone.getElementById('restore-title');
  const actionsEl = clone.getElementById('restore-actions');
  
  screenEl.classList.add(city.id);
  titleEl.textContent = `${city.name} Restored!`;
  
  //add the youtube video
  const videoContainer = clone.getElementById('restore-video-container');
  const popCityVideo = clone.getElementById('pop-city-video');
  const classicalGardensVideo = clone.getElementById('classical-gardens-video');
  const rockMountainVideo = clone.getElementById('rock-mountain-video');
  
  //hide all the vidoes 
  if (popCityVideo) {
    popCityVideo.style.display = 'none';
  }
  if (classicalGardensVideo) {
    classicalGardensVideo.style.display = 'none';
  }
  if (rockMountainVideo) {
    rockMountainVideo.style.display = 'none';
  }
  
  //show the youtube video fro restored city 
  if (city.id === 'pop' && popCityVideo) {
    popCityVideo.style.display = 'block';
  } else if (city.id === 'classical' && classicalGardensVideo) {
    classicalGardensVideo.style.display = 'block';
  } else if (city.id === 'rock' && rockMountainVideo) {
    rockMountainVideo.style.display = 'block';
  }
  
  //create the confetti
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
  
  //display next actions 
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
    btn.textContent = 'Celebrate your wins!';
    btn.onclick = () => { window.location.hash = '/final'; };
    actionsEl.appendChild(btn);
  }
  
  app.innerHTML = '';
  app.appendChild(clone);
  
  //autoplay the main chorus 
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

//final screen 
function renderFinalScreen() {
  const template = document.getElementById('final-screen-template');
  const clone = template.content.cloneNode(true);
  
  //create the notes 
  const notesEl = clone.getElementById('musical-notes');
    const notes = ['♪', '♫', '♬', '♩'];
  
  //calculate the position of each note and append it to the noteEL
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

//BTS screen 
function renderBTSScreen() {
  stopAllAudio();
  
  const template = document.getElementById('bts-screen-template');
  const clone = template.content.cloneNode(true);
  
  const videoContainer = clone.getElementById('bts-video-container');
  
  //create the youtube frame here 
  const iframe = document.createElement('iframe');
  iframe.src = data.btsVideo;
  iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
  iframe.allowFullscreen = true;
  iframe.className = 'bts-youtube-video';
  
  videoContainer.appendChild(iframe);
  
  app.innerHTML = '';
  app.appendChild(clone);
}

//creators screen 
function renderCreatorsScreen() {
  //stop all the audio 
  stopAllAudio();
  
  //get the creators screen html templayte 
  const template = document.getElementById('creators-screen-template');
  const clone = template.content.cloneNode(true);
  
  const gridEl = clone.getElementById('creators-grid');
  
  //loop through each creator 
  data.creators.forEach(creator => {
    const cardEl = document.createElement('div');
    cardEl.className = 'creator-card';
    
    const imageEl = document.createElement('div');
    imageEl.className = 'creator-image';
    const img = document.createElement('img');
    img.src = creator.img;
    img.alt = `${creator.name}'s profile picture`;
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.objectFit = 'cover';
    imageEl.appendChild(img);
    
    const nameEl = document.createElement('h3');
    nameEl.className = 'creator-name';
    nameEl.textContent = creator.name;
    
    //role
    const roleEl = document.createElement('p');
    roleEl.className = 'creator-role';
    roleEl.textContent = creator.role;
    
    //bio
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

//register all the routers
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

//initialize router
initRouter();

