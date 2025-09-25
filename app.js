// NeuroLearn - Complete Vanilla JavaScript Application

/*******************************
  Demo Data
*******************************/
const appData = {
  "users": {
    "students": [
      {
        "username": "demostudent",
        "password": "password123",
        "name": "Alex Johnson",
        "email": "alex@demo.com",
        "role": "student",
        "level": 15,
        "xp": 2450,
        "streak": 7,
        "totalLessons": 32,
        "completedLessons": 25,
        "timeSpent": 1240,
        "learningStyle": "Visual Learner",
        "subjects": {
          "math": {
            "progress": 78,
            "completed": 25,
            "total": 32,
            "xp": 650,
            "level": 8,
            "lastActivity": "2 hours ago"
          },
          "science": {
            "progress": 65,
            "completed": 20,
            "total": 31,
            "xp": 520,
            "level": 6,
            "lastActivity": "1 day ago"
          },
          "english": {
            "progress": 82,
            "completed": 30,
            "total": 37,
            "xp": 720,
            "level": 9,
            "lastActivity": "3 hours ago"
          },
          "history": {
            "progress": 45,
            "completed": 15,
            "total": 33,
            "xp": 380,
            "level": 4,
            "lastActivity": "2 days ago"
          }
        },
        "badges": ["First Steps", "Math Master", "Science Explorer", "7-Day Streak", "Quiz Champion"],
        "recentActivity": [
          {"action": "Completed Math Quiz", "xp": 50, "time": "2 hours ago", "subject": "Math"},
          {"action": "AI Tutor Chat Session", "xp": 10, "time": "4 hours ago", "subject": "Science"},
          {"action": "Finished English Lesson", "xp": 30, "time": "1 day ago", "subject": "English"},
          {"action": "Earned Science Explorer Badge", "xp": 100, "time": "2 days ago", "subject": "Science"}
        ]
      }
    ],
    "teachers": [
      {
        "username": "demoteacher",
        "password": "password123",
        "name": "Dr. Sarah Wilson",
        "email": "sarah@demo.com", 
        "role": "teacher",
        "subject": "Mathematics",
        "totalStudents": 24,
        "classPerformance": 82
      }
    ],
    "admins": [
      {
        "username": "demoadmin",
        "password": "password123", 
        "name": "Admin User",
        "email": "admin@demo.com",
        "role": "admin"
      }
    ]
  },
  "subjects": [
    {
      "id": "math",
      "name": "Mathematics",
      "icon": "📊",
      "color": "#3B82F6",
      "description": "Master numbers, equations, and problem-solving",
      "totalLessons": 32,
      "estimatedTime": "2h 30m"
    },
    {
      "id": "science", 
      "name": "Science",
      "icon": "🔬",
      "color": "#10B981",
      "description": "Explore the wonders of the natural world",
      "totalLessons": 31,
      "estimatedTime": "2h 15m"
    },
    {
      "id": "english",
      "name": "English",
      "icon": "📚",
      "color": "#8B5CF6", 
      "description": "Master language and communication",
      "totalLessons": 37,
      "estimatedTime": "3h 10m"
    },
    {
      "id": "history",
      "name": "History", 
      "icon": "🏛️",
      "color": "#F59E0B",
      "description": "Journey through time and civilizations",
      "totalLessons": 33,
      "estimatedTime": "2h 45m"
    }
  ],
  "badges": [
    {"id": "first-steps", "name": "First Steps", "description": "Complete your first lesson", "icon": "⭐", "color": "#F59E0B"},
    {"id": "math-master", "name": "Math Master", "description": "Complete 10 math lessons", "icon": "📊", "color": "#3B82F6"},
    {"id": "science-explorer", "name": "Science Explorer", "description": "Complete 10 science lessons", "icon": "🔬", "color": "#10B981"},
    {"id": "quiz-champion", "name": "Quiz Champion", "description": "Score 90%+ on 5 quizzes", "icon": "🏆", "color": "#F59E0B"},
    {"id": "streak-7", "name": "7-Day Streak", "description": "Learn for 7 consecutive days", "icon": "🔥", "color": "#EF4444"}
  ],
  "platformStats": {
    "totalStudents": 12547,
    "totalTeachers": 1249, 
    "totalSchools": 89,
    "totalLessons": 89432,
    "totalXP": 15678432,
    "badgesEarned": 23456,
    "hoursLearned": 45678,
    "averageProgress": 78,
    "activeToday": 3247
  },
  "quizzes": [
    {
      "id": "math-algebra",
      "title": "Basic Algebra",
      "subject": "math",
      "difficulty": "Easy",
      "totalQuestions": 5,
      "xpReward": 50,
      "questions": [
        {
          "question": "What is the value of x in the equation 2x + 5 = 15?",
          "options": ["x = 5", "x = 10", "x = 7", "x = 3"],
          "correct": 0,
          "explanation": "To solve 2x + 5 = 15, subtract 5 from both sides: 2x = 10, then divide by 2: x = 5"
        },
        {
          "question": "Simplify: 3x + 2x - x",
          "options": ["4x", "5x", "6x", "2x"],
          "correct": 0,
          "explanation": "Combine like terms: 3x + 2x - x = 5x - x = 4x"
        },
        {
          "question": "What is the slope of the line y = 2x + 3?",
          "options": ["2", "3", "2x", "5"],
          "correct": 0,
          "explanation": "In the form y = mx + b, m is the slope. Here m = 2."
        },
        {
          "question": "Solve for y: 4y - 8 = 12",
          "options": ["y = 5", "y = 4", "y = 3", "y = 6"],
          "correct": 0,
          "explanation": "Add 8 to both sides: 4y = 20, then divide by 4: y = 5"
        },
        {
          "question": "What is (x + 3)(x - 2) expanded?",
          "options": ["x² + x - 6", "x² - x - 6", "x² + x + 6", "x² - x + 6"],
          "correct": 0,
          "explanation": "Using FOIL: x² - 2x + 3x - 6 = x² + x - 6"
        }
      ]
    }
  ],
  "aiResponses": {
    "greeting": "Hello! I'm your AI tutor, ready to help you learn and grow! I can assist with Math, Science, English, History, and study strategies. What would you like to explore today?",
    "math": "I'd love to help you with math! Whether it's algebra, geometry, calculus, or arithmetic, I can explain concepts step-by-step and provide practice problems. What specific math topic are you working on?",
    "science": "Science is fascinating! I can help with biology, chemistry, physics, and earth science. Whether you're curious about atoms, ecosystems, forces, or the solar system, I'm here to make complex concepts easy to understand. What scientific topic interests you?",
    "english": "English is a powerful tool for communication! I can help with grammar, vocabulary, writing techniques, reading comprehension, and literature analysis. Whether you're working on essays, stories, or understanding complex texts, I'm here to help. What aspect of English are you focusing on?",
    "history": "History helps us understand how we got to where we are today! I can help with world history, American history, ancient civilizations, and more. Understanding cause and effect, timelines, and different perspectives helps us learn from the past. What historical period or event interests you?",
    "help": "I'm here to help you succeed! I can: 1) Explain difficult concepts in simple terms, 2) Provide step-by-step solutions, 3) Give you practice problems, 4) Suggest study strategies, 5) Adapt to your learning style. What do you need help with?",
    "study": "Great study strategies include: 1) Active recall - test yourself without looking, 2) Spaced repetition - review material over time, 3) Break study sessions into chunks, 4) Teach someone else what you learned, 5) Connect new info to what you already know. What subject are you studying?",
    "motivation": "You're doing great by seeking help! Remember: every expert was once a beginner. Learning takes time and practice - it's normal to struggle with new concepts. Celebrate small wins, stay curious, and don't be afraid to ask questions. You've got this! 🌟"
  },
  "wellnessReminders": [
    "Remember to take breaks! Your brain needs rest to learn effectively.",
    "Don't forget to stay hydrated while studying. Water helps your brain function better!",
    "Take a deep breath and relax your shoulders. Good posture helps with focus.",
    "You've been learning for a while. How about a quick stretch or walk?",
    "Great progress! Remember that learning is a marathon, not a sprint."
  ]
};

/*******************************
  Application State
*******************************/
class AppState {
  constructor() {
    this.currentUser = this.loadFromStorage('nl_user');
    this.theme = this.loadFromStorage('nl_theme', 'light');
    this.accessibility = this.loadFromStorage('nl_a11y', {
      dyslexiaFont: false,
      highContrast: false,
      largeText: false
    });
    this.currentPage = 'home';
    this.chatMessages = [
      { sender: 'ai', text: appData.aiResponses.greeting }
    ];
    this.currentQuiz = null;
    this.quizState = null;
  }

  loadFromStorage(key, defaultValue = null) {
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : defaultValue;
    } catch {
      return defaultValue;
    }
  }

  saveToStorage(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {}
  }

  setUser(user) {
    this.currentUser = user;
    this.saveToStorage('nl_user', user);
  }

  logout() {
    this.currentUser = null;
    localStorage.removeItem('nl_user');
  }

  setTheme(theme) {
    this.theme = theme;
    this.saveToStorage('nl_theme', theme);
    document.documentElement.setAttribute('data-color-scheme', theme);
  }

  toggleAccessibility(feature) {
    this.accessibility[feature] = !this.accessibility[feature];
    this.saveToStorage('nl_a11y', this.accessibility);
    this.updateAccessibilityAttributes();
  }

  updateAccessibilityAttributes() {
    const activeFeatures = Object.entries(this.accessibility)
      .filter(([, value]) => value)
      .map(([key]) => key.replace(/([A-Z])/g, '-$1').toLowerCase())
      .join(' ');
    
    if (activeFeatures) {
      document.documentElement.setAttribute('data-accessibility', activeFeatures);
    } else {
      document.documentElement.removeAttribute('data-accessibility');
    }

    if (this.accessibility.dyslexiaFont) {
      document.body.style.fontFamily = 'Comic Sans MS, cursive';
    } else {
      document.body.style.fontFamily = '';
    }
  }

  addChatMessage(message) {
    this.chatMessages.push(message);
  }

  getAIResponse(userMessage) {
    const lower = userMessage.toLowerCase();
    if (lower.includes('math') || lower.includes('algebra') || lower.includes('geometry')) {
      return appData.aiResponses.math;
    }
    if (lower.includes('science') || lower.includes('biology') || lower.includes('chemistry') || lower.includes('physics')) {
      return appData.aiResponses.science;
    }
    if (lower.includes('english') || lower.includes('grammar') || lower.includes('writing')) {
      return appData.aiResponses.english;
    }
    if (lower.includes('history') || lower.includes('historical')) {
      return appData.aiResponses.history;
    }
    if (lower.includes('help') || lower.includes('assist')) {
      return appData.aiResponses.help;
    }
    if (lower.includes('study') || lower.includes('learn')) {
      return appData.aiResponses.study;
    }
    if (lower.includes('motivat') || lower.includes('encourage')) {
      return appData.aiResponses.motivation;
    }
    return appData.aiResponses.help;
  }
}

const appState = new AppState();

/*******************************
  Utility Functions
*******************************/
function createElement(tag, className = '', innerHTML = '') {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (innerHTML) el.innerHTML = innerHTML;
  return el;
}

function icon(name, size = 20) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    ${getIconPath(name)}
  </svg>`;
}

function getIconPath(name) {
  const icons = {
    'brain': '<path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/>',
    'sun': '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>',
    'moon': '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>',
    'log-out': '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16,17 21,12 16,7"/><line x1="21" y1="12" x2="9" y2="12"/>',
    'user': '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
    'rocket': '<path d="M4.5 16.5c-1.5 1.5-2 3.5-2 3.5s2-0.5 3.5-2L12 12l7-7a3 3 0 0 0-3-3l-7 7-4.5 6.5z"/><path d="M15 5l4 4"/>',
    'play': '<polygon points="5,3 19,12 5,21"/>',
    'bot': '<rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" y1="16" x2="8" y2="16"/><line x1="16" y1="16" x2="16" y2="16"/>',
    'gamepad-2': '<line x1="6" y1="11" x2="10" y2="11"/><line x1="8" y1="9" x2="8" y2="13"/><line x1="15" y1="12" x2="15.01" y2="12"/><line x1="18" y1="10" x2="18.01" y2="10"/><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"/>',
    'accessibility': '<circle cx="12" cy="4" r="2"/><path d="M19 13v-2a7 7 0 0 0-14 0v2"/><path d="M12 14l-2 4"/><path d="M14 14l2 4"/>',
    'bar-chart': '<line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/>',
    'book-open': '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
    'trophy': '<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55.47.98.97 1.21C11.56 18.75 12 19.38 12 20s-.44 1.25-1.03 1.79C10.47 21.02 10 20.45 10 20v-5.34z"/><path d="M14 14.66V17c0 .55-.47.98-.97 1.21C12.44 18.75 12 19.38 12 20s.44 1.25 1.03 1.79C13.53 21.02 14 20.45 14 20v-5.34z"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2z"/>',
    'send': '<line x1="22" y1="2" x2="11" y2="13"/><polygon points="22,2 15,22 11,13 2,9"/>',
    'heart': '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>',
    'x': '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
    'check': '<polyline points="20,6 9,17 4,12"/>',
    'menu': '<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>',
    'volume-2': '<polygon points="11,5 6,9 2,9 2,15 6,15 11,19"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>'
  };
  return icons[name] || '';
}

function formatNumber(num) {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
  if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
  return num.toString();
}

function initializeParticles() {
  const container = document.querySelector('.hero-particles');
  if (!container) return;
  
  for (let i = 0; i < 25; i++) {
    const particle = createElement('span', 'particle');
    const size = Math.random() * 6 + 4;
    const colors = ['#3B82F6', '#8B5CF6', '#10B981'];
    
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    particle.style.background = colors[Math.floor(Math.random() * colors.length)];
    particle.style.top = Math.random() * 100 + '%';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDuration = (Math.random() * 10 + 15) + 's';
    particle.style.animationDelay = Math.random() * 2 + 's';
    
    container.appendChild(particle);
  }
}

/*******************************
  Navigation Component
*******************************/
function renderNavbar() {
  const navbar = createElement('nav', 'navbar');
  
  navbar.innerHTML = `
    <div class="navbar-content">
      <a href="#" class="logo" onclick="navigateTo('home')">
        ${icon('brain', 24)} NeuroLearn
      </a>
      <ul class="nav-links">
        <li><a href="#" class="nav-link ${appState.currentPage === 'home' ? 'active' : ''}" onclick="navigateTo('home')">Home</a></li>
        ${appState.currentUser ? `<li><a href="#" class="nav-link ${appState.currentPage === 'dashboard' ? 'active' : ''}" onclick="navigateTo('dashboard')">Dashboard</a></li>` : ''}
        ${appState.currentUser ? `<li><a href="#" class="nav-link ${appState.currentPage === 'quizzes' ? 'active' : ''}" onclick="navigateTo('quizzes')">Quizzes</a></li>` : ''}
      </ul>
      <div class="nav-actions">
        <button class="btn btn--outline btn--sm" onclick="toggleTheme()">
          ${icon(appState.theme === 'light' ? 'moon' : 'sun', 18)}
        </button>
        ${appState.currentUser ? `
          <button class="btn btn--outline btn--sm" onclick="logout()">
            ${icon('log-out', 16)} Logout
          </button>
        ` : `
          <button class="btn btn--primary btn--sm" onclick="navigateTo('login')">
            ${icon('user', 16)} Login
          </button>
        `}
      </div>
    </div>
  `;
  
  return navbar;
}

/*******************************
  Home Page Component
*******************************/
function renderHomePage() {
  const page = createElement('div');
  
  const stats = [
    { num: formatNumber(appData.platformStats.totalStudents), label: 'Students' },
    { num: formatNumber(appData.platformStats.totalTeachers), label: 'Teachers' },
    { num: formatNumber(appData.platformStats.totalSchools), label: 'Schools' }
  ];

  const features = [
    { icon: 'bot', title: 'AI Tutor', desc: 'Get personalized help from our advanced AI tutor that adapts to your learning style.' },
    { icon: 'gamepad-2', title: 'Gamification', desc: 'Earn XP, unlock badges, and climb leaderboards while learning.' },
    { icon: 'accessibility', title: 'Accessibility', desc: 'Designed for every brain with dyslexia support and accessibility features.' },
    { icon: 'bar-chart', title: 'Analytics', desc: 'Track your progress with detailed analytics and insights.' }
  ];

  page.innerHTML = `
    <section class="hero">
      <div class="hero-particles"></div>
      <div class="hero-content">
        <h1>Education Built for Every Brain, Everywhere.</h1>
        <p class="hero-subtitle">
          Personalized AI-powered learning platform with gamification and accessibility features 
          to empower students, teachers, and admins worldwide.
        </p>
        <div class="hero-actions">
          <button class="btn btn--primary btn--lg" onclick="navigateTo('login')">
            ${icon('rocket', 20)} Get Started
          </button>
          <button class="btn btn--outline btn--lg" onclick="navigateTo('login')">
            ${icon('play', 20)} Try Demo
          </button>
        </div>
        <div class="hero-stats">
          ${stats.map((stat, i) => `
            <div class="hero-stat" style="animation-delay: ${0.3 + i * 0.1}s">
              <div class="hero-stat-number">${stat.num}+</div>
              <div class="hero-stat-label">${stat.label}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <section class="features">
      <div class="features-content">
        <h2>Powerful Features for Every Learner</h2>
        <p class="features-subtitle">
          Explore how NeuroLearn transforms education through cutting-edge technology and inclusive design.
        </p>
        <div class="features-grid">
          ${features.map((feature, i) => `
            <div class="feature-card" style="animation-delay: ${i * 0.1}s">
              <div class="feature-icon">${icon(feature.icon, 28)}</div>
              <h3>${feature.title}</h3>
              <p>${feature.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;

  setTimeout(() => initializeParticles(), 100);
  return page;
}

/*******************************
  Auth Page Component
*******************************/
function renderAuthPage() {
  const page = createElement('div', 'auth-page');
  
  page.innerHTML = `
    <div class="auth-card">
      <div class="auth-header">
        <h1 class="auth-title">Welcome to NeuroLearn</h1>
        <p class="auth-subtitle">Choose your role to get started</p>
      </div>

      <div class="role-selector">
        <button class="role-btn active" data-role="student">Student</button>
        <button class="role-btn" data-role="teacher">Teacher</button>
        <button class="role-btn" data-role="admin">Admin</button>
      </div>

      <form id="loginForm">
        <div class="form-group">
          <label class="form-label">Username</label>
          <input type="text" class="form-control" id="username" required>
        </div>
        <div class="form-group">
          <label class="form-label">Password</label>
          <input type="password" class="form-control" id="password" required>
        </div>
        <button type="submit" class="btn btn--primary btn--full-width" id="loginBtn">
          Login
        </button>
      </form>

      <div class="demo-section">
        <p class="demo-title">Quick Demo Access</p>
        <div class="demo-buttons">
          <button class="btn btn--outline btn--sm btn--full-width" onclick="demoLogin('student')">
            ${icon('user', 16)} Demo Student (demostudent / password123)
          </button>
          <button class="btn btn--outline btn--sm btn--full-width" onclick="demoLogin('teacher')">
            ${icon('user', 16)} Demo Teacher (demoteacher / password123)
          </button>
          <button class="btn btn--outline btn--sm btn--full-width" onclick="demoLogin('admin')">
            ${icon('user', 16)} Demo Admin (demoadmin / password123)
          </button>
        </div>
      </div>
    </div>
  `;

  // Add role selector functionality
  setTimeout(() => {
    const roleButtons = page.querySelectorAll('.role-btn');
    let selectedRole = 'student';

    roleButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        roleButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedRole = btn.dataset.role;
      });
    });

    // Add form submission
    const form = page.querySelector('#loginForm');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = page.querySelector('#username').value;
      const password = page.querySelector('#password').value;
      handleLogin(username, password, selectedRole);
    });
  }, 100);

  return page;
}

/*******************************
  Student Dashboard Component
*******************************/
function renderStudentDashboard() {
  if (!appState.currentUser) {
    navigateTo('login');
    return createElement('div');
  }

  const user = appState.currentUser;
  const page = createElement('div', 'dashboard');
  
  page.innerHTML = `
    <div class="dashboard-content">
      <div class="dashboard-header">
        <div class="dashboard-welcome">
          <div>
            <h1 class="dashboard-title">Welcome back, ${user.name.split(' ')[0]}!</h1>
            <p class="dashboard-subtitle">Ready to continue your learning journey?</p>
          </div>
        </div>
      </div>

      <!-- Profile Card -->
      <div class="profile-card">
        <div class="profile-header">
          <div class="profile-avatar">
            ${user.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
          </div>
          <div class="profile-info">
            <h2>${user.name}</h2>
            <p class="profile-subtitle">Learning Style: ${user.learningStyle}</p>
          </div>
        </div>
        <div class="profile-stats">
          <div class="profile-stat">
            <div class="profile-stat-value">${user.level}</div>
            <div class="profile-stat-label">Level</div>
          </div>
          <div class="profile-stat">
            <div class="profile-stat-value">${user.xp}</div>
            <div class="profile-stat-label">XP</div>
          </div>
          <div class="profile-stat">
            <div class="profile-stat-value">${user.streak}</div>
            <div class="profile-stat-label">Day Streak</div>
          </div>
        </div>
      </div>

      <!-- Stats Grid -->
      <div class="stats-grid">
        <div class="stat-card" style="--stat-color: #3B82F6">
          <div class="stat-header">
            <div class="stat-icon">${icon('book-open', 20)}</div>
          </div>
          <h3 class="stat-value">${user.completedLessons}</h3>
          <p class="stat-label">Lessons Completed</p>
        </div>
        <div class="stat-card" style="--stat-color: #10B981">
          <div class="stat-header">
            <div class="stat-icon">${icon('trophy', 20)}</div>
          </div>
          <h3 class="stat-value">${user.badges.length}</h3>
          <p class="stat-label">Badges Earned</p>
        </div>
        <div class="stat-card" style="--stat-color: #8B5CF6">
          <div class="stat-header">
            <div class="stat-icon">${icon('bar-chart', 20)}</div>
          </div>
          <h3 class="stat-value">${Math.round(user.timeSpent / 60)}h</h3>
          <p class="stat-label">Time Spent</p>
        </div>
      </div>

      <!-- Two Column Layout -->
      <div class="dashboard-grid">
        <!-- Subjects Section -->
        <div class="subjects-section">
          <h2 style="margin-bottom: var(--space-24)">Your Subjects</h2>
          <div class="subjects-grid">
            ${appData.subjects.map(subject => {
              const userSubject = user.subjects[subject.id] || { progress: 0, level: 1 };
              return `
                <div class="subject-card" style="--subject-color: ${subject.color}">
                  <div class="subject-header">
                    <div class="subject-icon">${subject.icon}</div>
                    <div class="subject-info">
                      <h3>${subject.name}</h3>
                      <div class="subject-meta">Level ${userSubject.level} • ${subject.totalLessons} lessons</div>
                    </div>
                  </div>
                  <p style="color: var(--color-text-secondary); margin-bottom: var(--space-16)">
                    ${subject.description}
                  </p>
                  <div class="progress-section">
                    <div class="progress-header">
                      <span class="progress-label">Progress</span>
                      <span class="progress-percentage">${userSubject.progress}%</span>
                    </div>
                    <div class="progress-bar">
                      <div class="progress-fill" style="width: ${userSubject.progress}%"></div>
                    </div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- AI Chat Section -->
        <div>
          <h2 style="margin-bottom: var(--space-24)">AI Tutor Chat</h2>
          <div class="chat-container">
            <div class="chat-header">
              ${icon('bot', 20)}
              <h3>NeuroTutor AI</h3>
            </div>
            <div class="chat-messages" id="chatMessages">
              ${appState.chatMessages.map(msg => `
                <div class="message ${msg.sender}">
                  <div class="message-avatar">
                    ${msg.sender === 'ai' ? icon('bot', 16) : user.name[0]}
                  </div>
                  <div class="message-content">${msg.text}</div>
                </div>
              `).join('')}
            </div>
            <form class="chat-input" id="chatForm">
              <input type="text" id="chatInput" placeholder="Ask me anything about your studies..." autocomplete="off">
              <button type="submit" class="chat-send-btn">
                ${icon('send', 16)}
              </button>
            </form>
          </div>
        </div>
      </div>

      <!-- Badges Section -->
      <div class="badges-section">
        <h2 style="margin-bottom: var(--space-24)">Your Badges</h2>
        <div class="badges-grid">
          ${appData.badges.filter(badge => user.badges.includes(badge.name)).map(badge => `
            <div class="badge-card">
              <div class="badge-icon" style="background: ${badge.color}">${badge.icon}</div>
              <div class="badge-info">
                <h4>${badge.name}</h4>
                <p class="badge-description">${badge.description}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;

  // Initialize chat functionality
  setTimeout(() => {
    const chatForm = page.querySelector('#chatForm');
    const chatInput = page.querySelector('#chatInput');
    const chatMessages = page.querySelector('#chatMessages');

    chatForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const message = chatInput.value.trim();
      if (!message) return;

      // Add user message
      appState.addChatMessage({ sender: 'user', text: message });
      chatInput.value = '';

      // Re-render messages
      renderChatMessages(chatMessages);

      // Add AI response after delay
      setTimeout(() => {
        const aiResponse = appState.getAIResponse(message);
        appState.addChatMessage({ sender: 'ai', text: aiResponse });
        renderChatMessages(chatMessages);
      }, 1000);
    });

    function renderChatMessages(container) {
      container.innerHTML = appState.chatMessages.map(msg => `
        <div class="message ${msg.sender}">
          <div class="message-avatar">
            ${msg.sender === 'ai' ? icon('bot', 16) : user.name[0]}
          </div>
          <div class="message-content">${msg.text}</div>
        </div>
      `).join('');
      container.scrollTop = container.scrollHeight;
    }
  }, 100);

  return page;
}

/*******************************
  Quiz Page Component
*******************************/
function renderQuizPage() {
  if (!appState.currentUser) {
    navigateTo('login');
    return createElement('div');
  }

  const page = createElement('div', 'dashboard');

  if (!appState.currentQuiz) {
    // Show quiz selection
    page.innerHTML = `
      <div class="dashboard-content">
        <div class="dashboard-header">
          <h1 class="dashboard-title">Available Quizzes</h1>
          <p class="dashboard-subtitle">Test your knowledge and earn XP!</p>
        </div>
        
        <div class="subjects-grid">
          ${appData.quizzes.map(quiz => `
            <div class="subject-card" style="--subject-color: #3B82F6" onclick="startQuiz('${quiz.id}')">
              <div class="subject-header">
                <div class="subject-icon">📝</div>
                <div class="subject-info">
                  <h3>${quiz.title}</h3>
                  <div class="subject-meta">${quiz.subject.toUpperCase()} • ${quiz.difficulty} • ${quiz.totalQuestions} questions</div>
                </div>
              </div>
              <p style="color: var(--color-text-secondary); margin-bottom: var(--space-16)">
                Complete this quiz to earn ${quiz.xpReward} XP points!
              </p>
              <div class="btn btn--primary" style="margin-top: auto;">
                Start Quiz
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  } else {
    // Show active quiz
    const quiz = appState.currentQuiz;
    const state = appState.quizState;
    const currentQuestion = quiz.questions[state.currentQuestion];
    const isLastQuestion = state.currentQuestion === quiz.questions.length - 1;

    if (state.showResults) {
      // Show results
      const score = Math.round((state.correctAnswers / quiz.questions.length) * 100);
      page.innerHTML = `
        <div class="dashboard-content">
          <div class="quiz-container">
            <div class="quiz-results">
              <div class="quiz-score">${score}%</div>
              <div class="quiz-score-label">
                You got ${state.correctAnswers} out of ${quiz.questions.length} questions correct!
              </div>
              <div style="margin: var(--space-24) 0;">
                <div class="btn btn--primary" onclick="finishQuiz(${quiz.xpReward})">
                  Claim ${quiz.xpReward} XP
                </div>
                <div class="btn btn--outline" onclick="navigateTo('quizzes')" style="margin-left: var(--space-16);">
                  Back to Quizzes
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    } else {
      // Show current question
      page.innerHTML = `
        <div class="dashboard-content">
          <div class="quiz-container">
            <div class="quiz-header">
              <h2>${quiz.title}</h2>
              <div class="quiz-progress">
                <span>Question ${state.currentQuestion + 1} of ${quiz.questions.length}</span>
                <div class="quiz-progress-bar">
                  <div class="quiz-progress-fill" style="width: ${((state.currentQuestion + 1) / quiz.questions.length) * 100}%"></div>
                </div>
              </div>
            </div>

            <div class="quiz-question">${currentQuestion.question}</div>
            
            <div class="quiz-options" id="quizOptions">
              ${currentQuestion.options.map((option, index) => `
                <button class="quiz-option" data-index="${index}" onclick="selectAnswer(${index})">
                  ${option}
                </button>
              `).join('')}
            </div>

            ${state.answered ? `
              <div class="quiz-explanation">${currentQuestion.explanation}</div>
              <div style="text-align: center; margin-top: var(--space-24);">
                <button class="btn btn--primary" onclick="${isLastQuestion ? 'showResults()' : 'nextQuestion()'}">
                  ${isLastQuestion ? 'View Results' : 'Next Question'}
                </button>
              </div>
            ` : ''}
          </div>
        </div>
      `;
    }
  }

  return page;
}

/*******************************
  Accessibility Panel Component
*******************************/
function renderAccessibilityPanel() {
  const panel = createElement('div', 'accessibility-panel collapsed');
  
  panel.innerHTML = `
    <button class="accessibility-toggle" onclick="toggleAccessibilityPanel()">
      ♿
    </button>
    <div class="accessibility-controls">
      <h3 style="margin: 0 0 var(--space-16) 0; font-size: var(--font-size-base);">Accessibility</h3>
      
      <div class="accessibility-control">
        <span class="accessibility-label">Dyslexia Font</span>
        <button class="toggle-switch ${appState.accessibility.dyslexiaFont ? 'active' : ''}" 
                onclick="toggleAccessibilityFeature('dyslexiaFont')"></button>
      </div>
      
      <div class="accessibility-control">
        <span class="accessibility-label">High Contrast</span>
        <button class="toggle-switch ${appState.accessibility.highContrast ? 'active' : ''}" 
                onclick="toggleAccessibilityFeature('highContrast')"></button>
      </div>
      
      <div class="accessibility-control">
        <span class="accessibility-label">Large Text</span>
        <button class="toggle-switch ${appState.accessibility.largeText ? 'active' : ''}" 
                onclick="toggleAccessibilityFeature('largeText')"></button>
      </div>

      <div class="accessibility-control">
        <span class="accessibility-label">Read Aloud</span>
        <button class="btn btn--outline btn--sm" onclick="readPageAloud()" style="padding: var(--space-4) var(--space-8);">
          ${icon('volume-2', 16)}
        </button>
      </div>
    </div>
  `;
  
  return panel;
}

/*******************************
  Wellness Modal Component
*******************************/
function renderWellnessModal() {
  const modal = createElement('div', 'wellness-modal hidden');
  
  modal.innerHTML = `
    <div class="wellness-content">
      <button class="wellness-close" onclick="closeWellnessModal()">
        ${icon('x', 20)}
      </button>
      <div class="wellness-icon">
        ${icon('heart', 28)}
      </div>
      <h3 class="wellness-title">Take a Break!</h3>
      <p class="wellness-message" id="wellnessMessage">
        You've been learning for a while. Remember to stay hydrated and take breaks!
      </p>
      <button class="btn btn--primary" onclick="closeWellnessModal()">
        ${icon('check', 16)} Thanks for caring!
      </button>
    </div>
  `;
  
  return modal;
}

/*******************************
  Global Functions
*******************************/
window.navigateTo = function(page) {
  appState.currentPage = page;
  renderApp();
};

window.toggleTheme = function() {
  const newTheme = appState.theme === 'light' ? 'dark' : 'light';
  appState.setTheme(newTheme);
  renderApp();
};

window.logout = function() {
  appState.logout();
  navigateTo('home');
};

window.demoLogin = function(role) {
  const users = appData.users[role + 's'];
  if (users && users.length > 0) {
    appState.setUser(users[0]);
    navigateTo('dashboard');
  }
};

window.handleLogin = function(username, password, role) {
  const users = appData.users[role + 's'];
  const user = users.find(u => u.username === username && u.password === password);
  
  if (user) {
    appState.setUser(user);
    navigateTo('dashboard');
  } else {
    alert('Invalid credentials. Try demo accounts: demostudent/password123, demoteacher/password123, or demoadmin/password123');
  }
};

window.toggleAccessibilityPanel = function() {
  const panel = document.querySelector('.accessibility-panel');
  panel.classList.toggle('collapsed');
};

window.toggleAccessibilityFeature = function(feature) {
  appState.toggleAccessibility(feature);
  renderApp();
};

window.readPageAloud = function() {
  if ('speechSynthesis' in window) {
    const text = document.body.innerText;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.8;
    utterance.pitch = 1;
    speechSynthesis.speak(utterance);
  } else {
    alert('Text-to-speech is not supported in your browser.');
  }
};

window.startQuiz = function(quizId) {
  const quiz = appData.quizzes.find(q => q.id === quizId);
  if (quiz) {
    appState.currentQuiz = quiz;
    appState.quizState = {
      currentQuestion: 0,
      correctAnswers: 0,
      answered: false,
      selectedAnswer: null
    };
    renderApp();
  }
};

window.selectAnswer = function(answerIndex) {
  if (appState.quizState.answered) return;
  
  const state = appState.quizState;
  const question = appState.currentQuiz.questions[state.currentQuestion];
  
  state.selectedAnswer = answerIndex;
  state.answered = true;
  
  if (answerIndex === question.correct) {
    state.correctAnswers++;
  }
  
  // Update UI
  const options = document.querySelectorAll('.quiz-option');
  options.forEach((option, index) => {
    if (index === question.correct) {
      option.classList.add('correct');
    } else if (index === answerIndex && index !== question.correct) {
      option.classList.add('incorrect');
    }
    option.disabled = true;
  });
  
  renderApp();
};

window.nextQuestion = function() {
  appState.quizState.currentQuestion++;
  appState.quizState.answered = false;
  appState.quizState.selectedAnswer = null;
  renderApp();
};

window.showResults = function() {
  appState.quizState.showResults = true;
  renderApp();
};

window.finishQuiz = function(xpReward) {
  if (appState.currentUser) {
    appState.currentUser.xp += xpReward;
    appState.saveToStorage('nl_user', appState.currentUser);
  }
  
  appState.currentQuiz = null;
  appState.quizState = null;
  navigateTo('quizzes');
};

window.closeWellnessModal = function() {
  const modal = document.querySelector('.wellness-modal');
  modal.classList.add('hidden');
};

/*******************************
  Wellness Guard System
*******************************/
function initializeWellnessGuard() {
  let lastActivity = Date.now();
  let wellnessShown = false;
  
  function resetActivity() {
    lastActivity = Date.now();
    wellnessShown = false;
  }
  
  // Track user activity
  ['click', 'keypress', 'mousemove', 'scroll', 'touchstart'].forEach(event => {
    document.addEventListener(event, resetActivity);
  });
  
  // Check for inactivity every 30 seconds
  setInterval(() => {
    if (Date.now() - lastActivity > 120000 && !wellnessShown) { // 2 minutes
      const modal = document.querySelector('.wellness-modal');
      const messageEl = document.querySelector('#wellnessMessage');
      
      if (modal && messageEl) {
        const message = appData.wellnessReminders[Math.floor(Math.random() * appData.wellnessReminders.length)];
        messageEl.textContent = message;
        modal.classList.remove('hidden');
        wellnessShown = true;
      }
    }
  }, 30000);
}

/*******************************
  Main Render Function
*******************************/
function renderApp() {
  const app = document.getElementById('app');
  app.innerHTML = '';
  
  // Add navbar
  app.appendChild(renderNavbar());
  
  // Add main content based on current page
  let mainContent;
  switch (appState.currentPage) {
    case 'login':
      mainContent = renderAuthPage();
      break;
    case 'dashboard':
      mainContent = renderStudentDashboard();
      break;
    case 'quizzes':
      mainContent = renderQuizPage();
      break;
    default:
      mainContent = renderHomePage();
  }
  
  app.appendChild(mainContent);
  
  // Add accessibility panel
  app.appendChild(renderAccessibilityPanel());
  
  // Add wellness modal
  app.appendChild(renderWellnessModal());
}

/*******************************
  Initialize Application
*******************************/
document.addEventListener('DOMContentLoaded', function() {
  // Apply initial theme and accessibility settings
  appState.setTheme(appState.theme);
  appState.updateAccessibilityAttributes();
  
  // If user is logged in, go to dashboard
  if (appState.currentUser) {
    appState.currentPage = 'dashboard';
  }
  
  // Initial render
  renderApp();
  
  // Initialize wellness guard
  initializeWellnessGuard();
  
  // Add global error handler
  window.addEventListener('error', function(e) {
    console.error('Application error:', e.error);
  });
  
  console.log('NeuroLearn application initialized successfully!');
});