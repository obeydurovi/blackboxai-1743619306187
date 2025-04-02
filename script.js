document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuButton = document.querySelector('.mobile-menu-button');
    const menu = document.querySelector('.mobile-menu');
    
    if (menuButton && menu) {
        menuButton.addEventListener('click', function() {
            menu.classList.toggle('active');
        });
    }

    // Form validation
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple validation
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');
            let isValid = true;
            
            if (!name.value.trim()) {
                name.classList.add('input-error');
                isValid = false;
            } else {
                name.classList.remove('input-error');
            }
            
            if (!email.value.trim() || !/^\S+@\S+\.\S+$/.test(email.value)) {
                email.classList.add('input-error');
                isValid = false;
            } else {
                email.classList.remove('input-error');
            }
            
            if (!message.value.trim()) {
                message.classList.add('input-error');
                isValid = false;
            } else {
                message.classList.remove('input-error');
            }
            
            if (isValid) {
                // Form submission logic would go here
                alert('Thank you for your message! We will get back to you soon.');
                contactForm.reset();
            }
        });
    }

    // Active nav link highlighting based on scroll position
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('text-blue-500');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('text-blue-500');
            }
        });
    });
});