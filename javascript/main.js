// Theme toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: light)');
    
    // Check for saved user preference or use system preference
    const currentTheme = localStorage.getItem('theme') || 
                        (prefersDarkScheme.matches ? 'light' : 'dark');
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    // Set initial icon state
    if (currentTheme === 'dark') {
        document.documentElement.classList.add('light-mode');
    }
    
    // Toggle between light and dark
    themeToggle.addEventListener('click', function() {
        let theme = document.documentElement.getAttribute('data-theme');
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            document.documentElement.classList.add('light-mode');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            document.documentElement.classList.remove('light-mode');
        }
    });
    
    // Listen for system preference changes
    prefersDarkScheme.addEventListener('change', e => {
        if (!localStorage.getItem('theme')) {
            const newTheme = e.matches ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', newTheme);
            if (newTheme === 'light') {
                document.documentElement.classList.add('light-mode');
            } else {
                document.documentElement.classList.remove('light-mode');
            }
        }
    });
});