// Extracted from portfolio.html <script>

// Custom Cursor
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    if (cursor) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    }

    setTimeout(() => {
        if (cursorFollower) {
            cursorFollower.style.left = e.clientX + 'px';
            cursorFollower.style.top = e.clientY + 'px';
        }
    }, 100);
});

// Scroll Progress
window.addEventListener('scroll', () => {
    const scrollProgress = document.querySelector('.scroll-progress');
    const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    scrollProgress.style.width = scrollPercentage + '%';
});

// Matrix Rain Effect
const canvas = document.querySelector('.matrix-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const chars = '01\u30a2\u30a4\u30a6\u30a8\u30aa\u30ab\u30ad\u30af\u30b1\u30b3\u30b5\u30b7\u30bb\u30bd\u30bf\u30c3\u30c6\u30c8\u30ca\u30cb\u30cc\u30cd\u30ce\u30cf\u30d2\u30d5\u30d8\u30db\u30de\u30df\u30e0\u30e1\u30e2\u30e4\u30e6\u30e8\u30e9\u30ea\u30eb\u30ec\u30ed\u30ef\u30f2\u30f3';
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
    ctx.fillStyle = 'rgba(10, 10, 26, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#ff6b9d';
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(drawMatrix, 50);

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Floating Code Snippets
const codeSnippets = [
    'const awesome = true;',
    'function() { return magic; }',
    'if (creative) { innovate(); }',
    'while (coding) { create(); }',
    'import passion from "dev";',
    '<Component />',
    '{ creative: "developer" }',
    'npm run build',
    'git commit -m "\u2728"'
];

function createFloatingCode() {
    const container = document.getElementById('floatingCode');
    codeSnippets.forEach((snippet, i) => {
        const div = document.createElement('div');
        div.className = 'floating-code';
        div.textContent = snippet;
        div.style.left = Math.random() * 100 + '%';
        div.style.top = Math.random() * 100 + '%';
        div.style.animationDelay = i * 0.5 + 's';
        container.appendChild(div);
    });
}

createFloatingCode();

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 1s ease forwards';
        }
    });
}, observerOptions);

document.querySelectorAll('.project-card, .skill-card, .code-block').forEach(el => {
    observer.observe(el);
});

