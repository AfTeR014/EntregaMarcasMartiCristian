document.addEventListener('DOMContentLoaded', function () {
    //SUBMENÚS
    const toggleSubmenus = document.querySelectorAll('.toggleSubmenu');
    toggleSubmenus.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const submenu = this.nextElementSibling;
            submenu.style.display = (submenu.style.display === 'none' || submenu.style.display === '') ? 'block' : 'none';
        });
    });

    //BOTONES "VER MÁS"
    const verMasButtons = document.querySelectorAll('.ver-mas');
    verMasButtons.forEach(button => {
        button.addEventListener('mouseenter', function () {
            this.style.backgroundColor = '#FFFFFF';
            this.style.color = '#000000';
            this.style.transform = 'scale(1.05)';
        });
        button.addEventListener('mouseleave', function () {
            this.style.backgroundColor = '#BD2A2E';
            this.style.color = '#FFFFFF';
            this.style.transform = 'scale(1)';
        });
    });

    //CAMBIO DE TEMA
    const themeToggle = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        if (themeToggle) themeToggle.textContent = 'Modo Oscuro';
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', function () {
            document.body.classList.toggle('light-mode');
            const isLight = document.body.classList.contains('light-mode');
            themeToggle.textContent = isLight ? 'Modo Oscuro' : 'Modo Claro';
            localStorage.setItem('theme', isLight ? 'light' : 'dark');
        });
    }

        //SLIDER
    const navButtons = document.querySelectorAll('.slider-button');

    navButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            const index = parseInt(btn.dataset.slide);
            const slider = btn.closest('.container').querySelector('.slider');
            const slideWidth = slider.clientWidth;

            slider.scrollTo({
                left: slideWidth * index,
                behavior: 'smooth'
            });
        });
    });

});