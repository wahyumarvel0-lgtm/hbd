// --- DATABASE KATA-KATA LUCU ---
const jokes = [
    "Cieee yang makin dewasa tapi kelakuan masih bocil! 😜",
    "Klik lagi! Kamu berhak mendapat peluk gratis 10x. 🤭",
    "Iya iya kamu cantik  jangan di klik mulu dong fotonya! 👵",
    "Jangan kelamaan liatin fotonya, nanti naksir lagi sama diri sendiri. 🤔",
    "Pasti kamu kangen MAS AVEL? 🤣",
    "Selamat ulang tahun Ya adek! Traktiran tak tunggu di toko terdekat ya.🧋",
    "Senyumnya biasa aja dong, manisnya kelebihan noh! 🍯",
    "Bocil penyuka kucing! 🤫"
];

// Fungsi Global Munculkan Pesan Lucu
function showJoke() {
    const bubble = document.getElementById('jokeBubble');
    const txt = document.getElementById('jokeText');
    
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    txt.textContent = randomJoke;
    
    bubble.classList.add('show');
    
    clearTimeout(bubble.timeoutId);
    bubble.timeoutId = setTimeout(() => {
        bubble.classList.remove('show');
    }, 2500);
}

// Event click untuk foto utama di Halaman 3
document.querySelectorAll('.clickable-photo').forEach(photo => {
    photo.addEventListener('click', (e) => {
        e.stopPropagation();
        showJoke();
    });
});


// --- LOGIC TAHAP 1: MATRIX CANVAS ---
const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');
function resizeCanvas() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ❤️✨'.split('');
const fontSize = 16;
const columns = canvas.width / fontSize;
const rainDrops = Array.from({ length: columns }).fill(1);

function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#ff007f';
    ctx.font = fontSize + 'px monospace';
    for (let i = 0; i < rainDrops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);
        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) rainDrops[i] = 0;
        rainDrops[i]++;
    }
}
const matrixInterval = setInterval(drawMatrix, 30);


// --- LOGIC COUNTDOWN ---
const countdownWords = ["3","2", "1", "HAPPY", "BIRTHDAY", "TO", "FATIMAH ANTI SYAHBANI"];
const countdownText = document.getElementById('countdownText');
const heartBtn = document.getElementById('heartBtn');
const clickPrompt = document.getElementById('clickPrompt');
let wordIndex = 0;

function runCountdown() {
    if (wordIndex < countdownWords.length) {
        countdownText.classList.remove('scale-100', 'glitch');
        countdownText.classList.add('scale-75');
        setTimeout(() => {
            countdownText.textContent = countdownWords[wordIndex];
            countdownText.classList.remove('scale-75');
            countdownText.classList.add('scale-100', 'glitch');
            wordIndex++;
            setTimeout(runCountdown, 1000);
        }, 100);
    } else {
        countdownText.classList.remove('glitch');
        heartBtn.classList.remove('hidden');
        clickPrompt.classList.remove('hidden');
    }
}
setTimeout(runCountdown, 400);


// --- PENGALIHAN HALAMAN ---
function switchPage(currId, nextId) {
    const current = document.getElementById(currId);
    const next = document.getElementById(nextId);
    
    current.classList.remove('active');
    next.classList.add('active');
    
    setTimeout(() => {
        current.style.display = 'none';
    }, 500);
}

// Transisi 1 -> 2
heartBtn.addEventListener('click', () => {
    clearInterval(matrixInterval);
    switchPage('page1', 'page2');
});

// Transisi 2 -> 3
document.getElementById('envelope').addEventListener('click', () => {
    switchPage('page2', 'page3');
    setTimeout(() => {
        const card = document.getElementById('mainCard');
        card.classList.remove('translate-y-4', 'opacity-0');
    }, 50);
    createSparkles();
});

// Transisi 3 -> 4
document.getElementById('nextToHeartBtn').addEventListener('click', () => {
    switchPage('page3', 'page4');
    generateHeartShape();
});


// --- EFFECT: SPARKLES TAHAP 3 ---
function createSparkles() {
    const container = document.getElementById('sparkleContainer');
    setInterval(() => {
        if(document.getElementById('page3').classList.contains('active')) {
            const sparkle = document.createElement('div');
            sparkle.classList.add('sparkle');
            sparkle.style.left = Math.random() * 100 + 'vw';
            sparkle.style.width = sparkle.style.height = (Math.random() * 5 + 3) + 'px';
            sparkle.style.animationDuration = (Math.random() * 1.5 + 2.5) + 's';
            sparkle.style.backgroundColor = ['#fed7aa', '#fbcfe8', '#ffffff'][Math.floor(Math.random() * 3)];
            container.appendChild(sparkle);
            setTimeout(() => sparkle.remove(), 3500);
        }
    }, 250);
}


// --- LOGIC TAHAP 4: FORMASI HATI ---
const heartPola = [
    {x: 50, y: 18}, {x: 35, y: 13}, {x: 65, y: 13},
    {x: 20, y: 20}, {x: 80, y: 20}, {x: 10, y: 35},
    {x: 90, y: 35}, {x: 12, y: 52}, {x: 88, y: 52},
    {x: 20, y: 68}, {x: 80, y: 68}, {x: 32, y: 80},
    {x: 68, y: 80}, {x: 45, y: 90}, {x: 55, y: 90},
    {x: 50, y: 45}, {x: 38, y: 36}, {x: 62, y: 36}, 
    {x: 26, y: 48}, {x: 74, y: 48}
];

const fotoPilihan = [ 
  'assets/images/foto1.jpeg',
  'assets/images/foto2.jpeg',
  'assets/images/foto3.jpeg',
  'assets/images/foto4.jpeg',
  'assets/images/foto5.jpeg',
  'assets/images/foto6.jpeg',
  'assets/images/foto7.jpeg',
  'assets/images/foto8.jpeg',
  'assets/images/foto9.jpeg',
  'assets/images/foto10.jpeg',
  'assets/images/foto11.jpeg',
  'assets/images/foto12.jpeg',
  'assets/images/foto13.jpeg',
  'assets/images/foto14.jpeg',
  'assets/images/foto15.jpeg',
  'assets/images/foto16.jpeg',
];

function generateHeartShape() {
    const container = document.getElementById('heartPhotosContainer');
    container.innerHTML = ''; 

    heartPola.forEach((pos, index) => {
        const div = document.createElement('div');
        div.classList.add('polaroid', 'absolute', 'w-10', 'h-14', 'md:w-14', 'md:h-18');
        
        div.style.left = `${pos.x}%`;
        div.style.top = `${pos.y}%`;
        
        const randomRotation = (Math.random() * 24) - 12;
        div.style.transform = `translate(-50%, -50%) scale(0) rotate(${randomRotation}deg)`;

        const img = document.createElement('img');
        img.src = fotoPilihan[index % fotoPilihan.length]; 
        img.alt = "Foto kecil Anita";

        div.appendChild(img);
        container.appendChild(div);

        // Efek klik pada foto formasi hati
        div.addEventListener('click', (e) => {
            e.stopPropagation();
            div.style.transform = `translate(-50%, -50%) scale(1.15) rotate(0deg)`;
            showJoke();
            setTimeout(() => {
                div.style.transform = `translate(-50%, -50%) scale(1) rotate(${randomRotation}deg)`;
            }, 300);
        });

        setTimeout(() => {
            div.style.transform = `translate(-50%, -50%) scale(1) rotate(${randomRotation}deg)`;
        }, index * 80); 
    });
}