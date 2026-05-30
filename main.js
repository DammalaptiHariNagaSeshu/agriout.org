/* ==========================================================================
   AGRI OUT — INTERACTIVE CONTROLLERS & SCROLL CONTROLLERS
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // 1. MOBILE DRAWER NAVIGATION SYSTEM
    const hamburger = document.getElementById('hamburgerMenu');
    const navbarLinks = document.getElementById('navbarLinks');
    const menuOverlay = document.getElementById('menuOverlay');
    const body = document.body;

    function toggleMenu() {
        const isOpen = hamburger.getAttribute('aria-expanded') === 'true';
        hamburger.setAttribute('aria-expanded', !isOpen);
        hamburger.classList.toggle('active');
        navbarLinks.classList.toggle('active');
        menuOverlay.classList.toggle('active');
        
        // Prevent background scrolling when menu is open
        if (!isOpen) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = '';
        }
    }

    hamburger.addEventListener('click', toggleMenu);
    menuOverlay.addEventListener('click', toggleMenu);

    // Close mobile menu when any nav link is clicked
    const links = document.querySelectorAll('.nav-link, .mobile-cta');
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarLinks.classList.contains('active')) {
                toggleMenu();
            }
        });
    });


    // 2. STICKY NAVBAR STYLE MODIFIER
    const navbar = document.querySelector('.navbar');
    
    function checkScroll() {
        if (window.scrollY > 20) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Initial load check


    // 3. INTERSECTION OBSERVER FOR SCROLL REVEAL (SUBTLE FADE-UP)
    const revealElements = document.querySelectorAll('.scroll-reveal');
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                // Unobserve once revealed to keep layout responsive
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px' // Trigger slightly before element is fully in view
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });


    // 4. ANIMATED SMOOTH SCROLL FOR CTA INTERNAL ANCHORS
    const ctaAnchors = document.querySelectorAll('a[href^="#"]');
    ctaAnchors.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                
                // Close menu if open
                if (navbarLinks.classList.contains('active')) {
                    toggleMenu();
                }

                const navbarHeight = 72; // height of sticky header

                // Home link → always scroll to the very top
                if (targetId === '#home') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                    const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }

                // Highlight contact form fields if scrolling to contact
                if (targetId === '#contact') {
                    setTimeout(() => {
                        const nameField = document.getElementById('formName');
                        if (nameField) nameField.focus();
                    }, 800); // Wait for smooth scroll to finish
                }
            }
        });
    });


    // 5. FORM SUBMISSION CONTROLLER WITH CONFIRMATION ANIMATION
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const successMessage = document.getElementById('successMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Add loading states to submit button
            submitBtn.classList.add('loading');
            submitBtn.disabled = true;

            // Simulate server network lag for clean UX feedback
            setTimeout(() => {
                // Hide form and clear loading state
                contactForm.classList.add('hidden');
                submitBtn.classList.remove('loading');
                
                // Show success card with slide animation
                successMessage.classList.add('active');
                
                // Reset form values after a delay
                setTimeout(() => {
                    contactForm.reset();
                }, 500);

            }, 1500); // 1.5 seconds simulated API call
        });
    }

    // 6. ACTIVE NAV LINK HIGHLIGHT ON SCROLL
    const sections = document.querySelectorAll('section, header');
    const navItems = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let currentSectionId = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120; // adjust offset for header
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${currentSectionId}`) {
                item.classList.add('active');
            }
        });
    });

    // 7. SMOOTH SCROLL FOR LOGO TO VERY TOP
    const logoLinks = document.querySelectorAll('.navbar-logo, .footer-logo');
    logoLinks.forEach(logo => {
        logo.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });

    // 8. PRIVACY POLICY & TERMS OF SERVICE MODALS CONTROLLERS
    const openPrivacy = document.getElementById('openPrivacy');
    const openTerms = document.getElementById('openTerms');
    const privacyModal = document.getElementById('privacyModal');
    const termsModal = document.getElementById('termsModal');
    const closePrivacy = document.getElementById('closePrivacy');
    const closeTerms = document.getElementById('closeTerms');

    function showModal(modal) {
        modal.classList.add('active');
        body.style.overflow = 'hidden';
    }

    function hideModal(modal) {
        modal.classList.remove('active');
        body.style.overflow = '';
    }

    if (openPrivacy && privacyModal) {
        openPrivacy.addEventListener('click', (e) => {
            e.preventDefault();
            showModal(privacyModal);
        });
    }

    if (openTerms && termsModal) {
        openTerms.addEventListener('click', (e) => {
            e.preventDefault();
            showModal(termsModal);
        });
    }

    if (closePrivacy && privacyModal) {
        closePrivacy.addEventListener('click', () => {
            hideModal(privacyModal);
        });
        
        // Close modal if clicked outside card
        privacyModal.addEventListener('click', (e) => {
            if (e.target === privacyModal) {
                hideModal(privacyModal);
            }
        });
    }

    if (closeTerms && termsModal) {
        closeTerms.addEventListener('click', () => {
            hideModal(termsModal);
        });
        
        // Close modal if clicked outside card
        termsModal.addEventListener('click', (e) => {
            if (e.target === termsModal) {
                hideModal(termsModal);
            }
        });
    }

    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (privacyModal && privacyModal.classList.contains('active')) hideModal(privacyModal);
            if (termsModal && termsModal.classList.contains('active')) hideModal(termsModal);
        }
    });

    // 9. VIEWPORT-SENSITIVE SCROLL OBSERVER FOR FLOATING SOCIAL LINKS
    const contactSection = document.getElementById('contact');
    const floatingActions = document.querySelector('.floating-actions');
    
    if (contactSection && floatingActions) {
        const contactObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    floatingActions.classList.add('active');
                } else {
                    floatingActions.classList.remove('active');
                }
            });
        }, {
            threshold: 0.05
        });
        
        contactObserver.observe(contactSection);
    }
});
