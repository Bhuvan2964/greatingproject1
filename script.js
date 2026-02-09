const nameInput = document.getElementById('nameInput');
const greetBtn = document.getElementById('greetBtn');
const greeting = document.getElementById('greeting');
const timeDisplay = document.getElementById('timeDisplay');

function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    const dateString = now.toLocaleDateString();
    timeDisplay.innerHTML = `${dateString}<br>${timeString}`;
}

function getGreeting() {
    const hour = new Date().getHours();
    const name = nameInput.value.trim();
    
    if (!name) {
        return 'Please enter your name!';
    }
    
    let timeGreeting;
    let emoji;
    if (hour < 12) {
        timeGreeting = 'Good morning';
        emoji = '🌅';
    } else if (hour < 17) {
        timeGreeting = 'Good afternoon';
        emoji = '☀️';
    } else {
        timeGreeting = 'Good evening';
        emoji = '🌙';
    }
    
    return `${timeGreeting}, ${name}! ${emoji}`;
}

function getRandomQuote() {
    const quotes = [
        "Have a wonderful day!",
        "You're awesome!",
        "Keep smiling!",
        "Make it a great day!",
        "Stay positive!"
    ];
    return quotes[Math.floor(Math.random() * quotes.length)];
}

greetBtn.addEventListener('click', () => {
    greeting.textContent = getGreeting();
    setTimeout(() => {
        greeting.textContent += ' ' + getRandomQuote();
    }, 500);
});

nameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        greeting.textContent = getGreeting();
        setTimeout(() => {
            greeting.textContent += ' ' + getRandomQuote();
        }, 500);
    }
});

// Clear greeting when input is focused
nameInput.addEventListener('focus', () => {
    greeting.textContent = '';
});

updateTime();
setInterval(updateTime, 1000);
