document.addEventListener('DOMContentLoaded', () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const preloader = document.getElementById('preloader');
    const progressFill = document.querySelector('.progress-fill');
    const statusText = document.querySelector('.status-text');
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 20;
        if (progress > 100) progress = 100;
        progressFill.style.width = `${progress}%`;
        if (progress === 100) {
            clearInterval(interval);
            statusText.textContent = 'Acceso Concedido';
            setTimeout(() => {
                preloader.style.opacity = '0';
                preloader.style.visibility = 'hidden';
                preloader.style.transition = 'all 0.5s cubic-bezier(.22,1,.36,1)';
                document.body.style.overflow = 'auto';
                startLinkhubAnimations();
            }, 500);
        }
    }, 120);
    document.body.style.overflow = 'hidden';
    function startLinkhubAnimations() {
        const fadeIn = document.querySelector('.fade-in');
        const revealText = document.querySelector('.reveal-text');
        const fadeUps = document.querySelectorAll('.fade-up');
        if (fadeIn) { fadeIn.style.opacity = '1'; fadeIn.style.transition = 'opacity 900ms ease-out'; }
        if (revealText) { revealText.style.animation = reduceMotion ? 'none' : 'revealText 0.8s forwards'; if (reduceMotion) { revealText.style.opacity = '1'; } }
        fadeUps.forEach((el, index) => {
            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
                el.style.transition = 'opacity 700ms cubic-bezier(.22,1,.36,1), transform 700ms cubic-bezier(.22,1,.36,1)';
            }, 150 + (index * 80));
        });
    }
});
