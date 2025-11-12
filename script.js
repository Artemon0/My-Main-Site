// Темная тема
const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
document.documentElement.setAttribute('data-theme', currentTheme);
themeToggle.textContent = currentTheme === 'dark' ? '☀️ Light' : '🌙 Dark';

themeToggle.addEventListener('click', () => {
    const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    themeToggle.textContent = newTheme === 'dark' ? '☀️ Light' : '🌙 Dark';
});

// Навигация
const onPressedAboutme = () => window.open('https://t.me/Artemon0000', '_blank');
const onPressedProjects = () => window.open('https://github.com/Artemon0?tab=repositories', '_blank');
const onPressedTg = () => window.open('https://t.me/AOGames888', '_blank');
const onPressedFunctions = () => window.open('https://github.com/Artemon0/UsableFunctions#Functions', '_blank');
