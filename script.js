document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    lucide.createIcons();

    // Mobile Menu Toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Typing effect
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
                // Deleting characters
                typingTextElement.textContent = currentPhrase.substring(0, charIndex - 1);
                charIndex--;
                if (charIndex === 0) {
                    isDeleting = false;
                    phraseIndex = (phraseIndex + 1) % phrases.length;
                }
            } else {
                // Typing characters
                typingTextElement.textContent = currentPhrase.substring(0, charIndex + 1);
                charIndex++;
                if (charIndex === currentPhrase.length) {
                    isDeleting = true;
                    // Pause at the end of the phrase
                    setTimeout(type, 2000);
                    return;
                }
            }
            const typingSpeed = isDeleting ? 50 : 150;
            setTimeout(type, typingSpeed);
        }
        setTimeout(type, 500);
    }

    // Fade-in on scroll effect
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
