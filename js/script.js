// JavaScript for By Lacey Richter Photography Portfolio
// Author: Lacey Richter Photography
// Purpose: Interactive functionality for portfolio website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initializeHeader();
    initializeMobileMenu();
    initializeTestimonialCarousel();
    initializeLightbox();
    initializeContactForm();
    initializeScrollAnimations();
    initializeParallax();
});

// Header scroll behavior
function initializeHeader() {
    const header = document.getElementById('header');
    if (!header) return;
    
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add/remove scrolled class for styling
        if (scrollTop > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScrollTop = scrollTop;
    });
}

// Mobile menu functionality
function initializeMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const nav = document.getElementById('nav');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (!mobileMenuToggle || !nav) return;
    
    // Toggle mobile menu
    mobileMenuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
        
        // Toggle menu icon animation
        const spans = mobileMenuToggle.querySelectorAll('span');
        spans.forEach(span => span.classList.toggle('active'));
    });
    
    // Close menu when clicking nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!mobileMenuToggle.contains(e.target) && !nav.contains(e.target)) {
            nav.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        }
    });
}

// Testimonial carousel functionality
function initializeTestimonialCarousel() {
    const carousel = document.getElementById('testimonials-carousel');
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.testimonial-dot');
    
    if (!carousel || slides.length === 0) return;
    
    let currentSlide = 0;
    let autoplayInterval;
    
    // Initialize first slide
    showSlide(0);
    
    // Auto-advance carousel
    function startAutoplay() {
        autoplayInterval = setInterval(() => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }, 5000); // Change slide every 5 seconds
    }
    
    function stopAutoplay() {
        clearInterval(autoplayInterval);
    }
    
    function showSlide(index) {
        // Hide all slides
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // Remove active class from all dots
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        // Show current slide and activate dot
        if (slides[index]) {
            slides[index].classList.add('active');
        }
        if (dots[index]) {
            dots[index].classList.add('active');
        }
    }
    
    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
            stopAutoplay();
            startAutoplay(); // Restart autoplay
        });
    });
    
    // Pause on hover
    carousel.addEventListener('mouseenter', stopAutoplay);
    carousel.addEventListener('mouseleave', startAutoplay);
    
    // Start autoplay
    startAutoplay();
}

// Lightbox functionality
function initializeLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxClose = document.getElementById('lightbox-close');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    if (!lightbox || !lightboxImage || !lightboxClose) return;
    
    // Open lightbox
    portfolioItems.forEach(item => {
        item.addEventListener('click', function() {
            const imageSrc = this.dataset.src;
            const imageAlt = this.querySelector('img').alt;
            
            if (imageSrc) {
                lightboxImage.src = imageSrc;
                lightboxImage.alt = imageAlt;
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden'; // Prevent background scroll
            }
        });
    });
    
    // Close lightbox
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = ''; // Restore scroll
        lightboxImage.src = '';
    }
    
    lightboxClose.addEventListener('click', closeLightbox);
    
    // Close on background click
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });
}

// Contact form validation and handling
function initializeContactForm() {
    const form = document.getElementById('contact-form');
    const successMessage = document.getElementById('form-success');
    
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Clear previous errors
        clearFormErrors();
        
        // Validate form
        const isValid = validateForm();
        
        if (isValid) {
            // Simulate form submission
            submitForm();
        }
    });
    
    function validateForm() {
        let isValid = true;
        
        // Required fields validation
        const requiredFields = ['firstName', 'lastName', 'email', 'sessionType', 'message'];
        
        requiredFields.forEach(fieldId => {
            const field = document.getElementById(fieldId);
            const value = field.value.trim();
            
            if (!value) {
                showFieldError(fieldId, 'This field is required.');
                isValid = false;
            }
        });
        
        // Email validation
        const email = document.getElementById('email');
        const emailValue = email.value.trim();
        if (emailValue && !isValidEmail(emailValue)) {
            showFieldError('email', 'Please enter a valid email address.');
            isValid = false;
        }
        
        // Phone validation (if provided)
        const phone = document.getElementById('phone');
        const phoneValue = phone.value.trim();
        if (phoneValue && !isValidPhone(phoneValue)) {
            showFieldError('phone', 'Please enter a valid phone number.');
            isValid = false;
        }
        
        return isValid;
    }
    
    function clearFormErrors() {
        const errorElements = document.querySelectorAll('.form-error');
        errorElements.forEach(element => {
            element.textContent = '';
        });
        
        const formGroups = document.querySelectorAll('.form-group');
        formGroups.forEach(group => {
            group.classList.remove('error');
        });
    }
    
    function showFieldError(fieldId, message) {
        const errorElement = document.getElementById(fieldId + '-error');
        const fieldElement = document.getElementById(fieldId);
        
        if (errorElement) {
            errorElement.textContent = message;
        }
        
        if (fieldElement) {
            fieldElement.closest('.form-group').classList.add('error');
        }
    }
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function isValidPhone(phone) {
        const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
        return phoneRegex.test(phone);
    }
    
    function submitForm() {
        const submitBtn = document.getElementById('submit-btn');
        const originalText = submitBtn.textContent;
        
        // Show loading state
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Simulate API call delay
        setTimeout(() => {
            // Hide form and show success message
            form.style.display = 'none';
            successMessage.classList.remove('hidden');
            
            // Scroll to success message
            successMessage.scrollIntoView({ 
                behavior: 'smooth',
                block: 'center'
            });
            
            // TODO: Integrate with backend API
            // Example integration point:
            /*
            const formData = new FormData(form);
            fetch('/api/contact', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                // Handle success
            })
            .catch(error => {
                // Handle error
            });
            */
            
        }, 1500);
    }
}

// Scroll animations
function initializeScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -100px 0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
            }
        });
    }, observerOptions);
    
    // Observe all elements with data-aos attribute
    const animatedElements = document.querySelectorAll('[data-aos]');
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// Subtle parallax effect for hero only
function initializeParallax() {
    const hero = document.getElementById('hero');
    const heroImage = hero ? hero.querySelector('.hero-image img') : null;
    
    if (!hero || !heroImage) return;
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroHeight = hero.offsetHeight;
        const heroTop = hero.offsetTop;
        
        // Only apply parallax when hero is in view
        if (scrolled < heroHeight + heroTop) {
            const yPos = -(scrolled * 0.3); // Subtle parallax effect
            heroImage.style.transform = `translateY(${yPos}px)`;
        }
    });
}

// Smooth scroll for internal links
document.addEventListener('click', function(e) {
    const target = e.target.closest('a[href^="#"]');
    if (!target) return;
    
    e.preventDefault();
    const targetId = target.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
        const headerHeight = document.getElementById('header').offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight - 20;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
});

// Image lazy loading fallback for older browsers
function initializeLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    }
}

// Initialize lazy loading
initializeLazyLoading();

// Preload critical images
function preloadCriticalImages() {
    const criticalImages = [
        'images/WEBSITE_COVER_PHOTO.jpg',
        'images/Lacey.jpg'
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Preload on page load
window.addEventListener('load', preloadCriticalImages);

// Set active navigation based on current page
function setActiveNavigation() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        
        if (href === currentPage || 
            (currentPage === '' && href === 'index.html') ||
            (currentPage === '/' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// Set active navigation on page load
setActiveNavigation();