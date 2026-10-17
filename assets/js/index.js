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
                preloader.style.transition = 'opacity 0.5s var(--ease-premium)';
                preloader.style.opacity = '0';
                preloader.style.pointerEvents = 'none';
                document.body.style.overflow = 'auto';
                startLinkhubAnimations();
                setTimeout(() => {
                    preloader.style.display = 'none';
                }, 500);
            }, 500);
        }
    }, 120);
    document.body.style.overflow = 'hidden';

    function startLinkhubAnimations() {
        const fadeIns = document.querySelectorAll('.fade-in');
        const fadeUps = document.querySelectorAll('.fade-up');

        fadeIns.forEach((el) => {
            el.style.opacity = '1';
            el.style.transition = 'opacity 900ms ease-out';
        });

        fadeUps.forEach((el, index) => {
            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
                el.style.transition = 'opacity 700ms cubic-bezier(.22,1,.36,1), transform 700ms cubic-bezier(.22,1,.36,1)';
            }, 150 + (index * 80));
        });
    }

    const profileImg = document.querySelector('.profile-img');
    if (profileImg && !reduceMotion) {
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

    // Modal functionality
    const modal = document.getElementById('booking-modal');
    const btn = document.getElementById('booking-btn');
    const closeSpan = document.querySelector('.close-modal');

    if (btn && modal && closeSpan) {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.style.display = 'flex';
            modal.offsetHeight;
            modal.classList.add('show');
            document.body.style.overflow = 'hidden';
        });

        const closeModal = () => {
            modal.classList.remove('show');
            document.body.style.overflow = 'auto';
            setTimeout(() => {
                if (!modal.classList.contains('show')) {
                    modal.style.display = 'none';
                }
            }, 400);
        };

        closeSpan.addEventListener('click', closeModal);

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }
});
