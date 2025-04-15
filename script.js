const toggleBtn = document.getElementById('themeToggleBtn');
const root = document.documentElement;

let storedLightMode = localStorage.getItem('lightMode');

const enableLightMode = () => {
    root.setAttribute('data-theme', 'light');
    toggleBtn.setAttribute('aria-checked', 'true');
    localStorage.setItem('lightMode', 'enabled');
}

const disableLightMode = () => {
    root.setAttribute('data-theme', 'dark');
    toggleBtn.setAttribute('aria-checked', 'false');
    localStorage.setItem('lightMode', 'disabled');
}

if (storedLightMode === 'enabled') {
    enableLightMode();
  } else if (storedLightMode === 'disabled') {
    disableLightMode();
  } else if (window.matchMedia('(prefers-color-scheme: light)').matches)
    {
      enableLightMode();
    } else {
      disableLightMode();
    }

toggleBtn.addEventListener('click',  () => {
    const isLightMode = toggleBtn.getAttribute('aria-checked') === 'true';
    console.log(isLightMode);
    if (isLightMode) {
        disableLightMode();
    } else {
        enableLightMode();
    }
});