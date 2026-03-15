document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();

    const glow = document.getElementById('cursor-glow');
    
    if (glow) {
        window.addEventListener('mousemove', (e) => {
            requestAnimationFrame(() => {
                glow.style.left = `${e.clientX}px`;
                glow.style.top = `${e.clientY}px`;
            });
        });

        // Click effect is now more subtle as well
        window.addEventListener('mousedown', () => {
            glow.style.width = '400px'; 
            glow.style.height = '400px';
            glow.style.background = 'radial-gradient(circle, rgba(57, 255, 20, 0.12) 0%, transparent 70%)';
        });

        window.addEventListener('mouseup', () => {
            glow.style.width = '300px';
            glow.style.height = '300px';
            glow.style.background = 'radial-gradient(circle, rgba(57, 255, 20, 0.08) 0%, transparent 60%)';
        });
    }

    // Mobile Menu Toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Typing Effect
    const typingTextElement = document.getElementById('typing-text');
    if (typingTextElement) {
        const phrases = [
            "I build digital defenses.",
            "I hunt for vulnerabilities.",
            "I secure the cloud."
        ];
        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
            const currentPhrase = phrases[phraseIndex];
            if (isDeleting) {
                typingTextElement.textContent = currentPhrase.substring(0, charIndex - 1);
                charIndex--;
                if (charIndex === 0) {
                    isDeleting = false;
                    phraseIndex = (phraseIndex + 1) % phrases.length;
                }
            } else {
                typingTextElement.textContent = currentPhrase.substring(0, charIndex + 1);
                charIndex++;
                if (charIndex === currentPhrase.length) {
                    isDeleting = true;
                    setTimeout(type, 2000);
                    return;
                }
            }
            const typingSpeed = isDeleting ? 50 : 150;
            setTimeout(type, typingSpeed);
        }
        setTimeout(type, 500);
    }

    // Fade-in on Scroll
    const sections = document.querySelectorAll('section');
    if (sections.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    entry.target.classList.remove('opacity-0', 'translate-y-4');
                }
            });
        }, { threshold: 0.1 });

        sections.forEach(section => {
            section.classList.add('opacity-0', 'translate-y-4', 'transition-all', 'duration-700', 'ease-out');
            observer.observe(section);
        });
    }
});