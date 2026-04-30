document.addEventListener('DOMContentLoaded', () => {
    // 1. Preloader Logic
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
                preloader.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
                document.body.style.overflow = 'auto';
                
                // Trigger Linkhub entrance animations
                startLinkhubAnimations();
            }, 600);
        }
    }, 120);

    // Disable scroll during preloader
    document.body.style.overflow = 'hidden';

    // 2. Entrance Animations
    function startLinkhubAnimations() {
        const fadeIn = document.querySelector('.fade-in');
        const revealText = document.querySelector('.reveal-text');
        const fadeUps = document.querySelectorAll('.fade-up');

        if(fadeIn) {
            fadeIn.style.opacity = '1';
            fadeIn.style.transition = 'all 1s ease-out';
        }

        if(revealText) {
            revealText.style.animation = 'revealText 0.8s forwards';
        }

        fadeUps.forEach((el, index) => {
            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
                el.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
            }, 200 + (index * 100));
        });
    }

    // Interactive Hover Effect for Image
    const profileImg = document.querySelector('.profile-img');
    if(profileImg) {
        document.addEventListener('mousemove', (e) => {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 45;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 45;
            profileImg.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        });
        
        document.addEventListener('mouseleave', () => {
            profileImg.style.transform = `rotateY(0deg) rotateX(0deg)`;
            profileImg.style.transition = 'all 0.5s ease';
        });

        document.addEventListener('mouseenter', () => {
            profileImg.style.transition = 'none';
        });
    }
});
