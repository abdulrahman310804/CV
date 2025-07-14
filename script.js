// Smooth scrolling untuk navigasi
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll untuk navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // CTA button smooth scroll
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            document.querySelector('#about').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
});

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 50) {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.9)';
    }
});

// Intersection Observer untuk animasi saat scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
        }
    });
}, observerOptions);

// Observe elements untuk animasi
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.timeline-item, .org-card, .beasiswa-item, .tip-card');
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        observer.observe(element);
    });
});

// Skill bars animation
const skillObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll('.skill-progress');
            skillBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.width = width;
                }, 500);
            });
        }
    });
}, {threshold: 0.5});

document.addEventListener('DOMContentLoaded', function() {
    const skillsSection = document.querySelector('.skills');
    if (skillsSection) {
        skillObserver.observe(skillsSection);
    }
});

// Parallax effect untuk hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const photoContainer = document.querySelector('.photo-container');
    
    if (hero && photoContainer) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
        
        // Photo rotation berdasarkan scroll
        const photoRotation = scrolled * 0.2;
        photoContainer.style.transform = `rotateY(${photoRotation}deg)`;
    }
});

// 3D photo hover effect
document.addEventListener('DOMContentLoaded', function() {
    const photoContainer = document.querySelector('.photo-container');
    const photoFrame = document.querySelector('.photo-frame');
    
    if (photoContainer && photoFrame) {
        photoContainer.addEventListener('mouseenter', function() {
            this.style.animationPlayState = 'paused';
        });
        
        photoContainer.addEventListener('mouseleave', function() {
            this.style.animationPlayState = 'running';
            photoFrame.style.transform = '';
        });
        
        // Mouse move effect untuk photo
        photoContainer.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 15;
            const rotateY = (x - centerX) / 15;
            
            photoFrame.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
        });
    }
});

// Typing effect untuk hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    
    typing();
}

// Active navigation link berdasarkan scroll position
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + currentSection) {
            link.classList.add('active');
        }
    });
});

// Card hover effects
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.org-card, .tip-card, .beasiswa-item');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Timeline animation
const timelineObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideInFromSide 0.8s ease-out forwards';
        }
    });
}, {threshold: 0.3});

document.addEventListener('DOMContentLoaded', function() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        if (index % 2 === 0) {
            item.style.transform = 'translateX(-50px)';
        } else {
            item.style.transform = 'translateX(50px)';
        }
        timelineObserver.observe(item);
    });
});

// Add CSS for timeline animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInFromSide {
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    .nav-link.active {
        color: #00d4ff;
    }
    
    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);

// Smooth counter animation untuk skill bars
function animateCounter(element, start, end, duration) {
    let startTime = null;
    
    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        
        const currentCount = Math.floor(progress * (end - start) + start);
        element.textContent = currentCount + '%';
        
        if (progress < 1) {
            requestAnimationFrame(animation);
        }
    }
    
    requestAnimationFrame(animation);
}

// Scroll indicator hide/show
window.addEventListener('scroll', function() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        if (window.pageYOffset > 100) {
            scrollIndicator.style.opacity = '0';
        } else {
            scrollIndicator.style.opacity = '1';
        }
    }
});

// Mobile menu toggle (jika diperlukan)
function createMobileMenu() {
    const navbar = document.querySelector('.navbar');
    const navMenu = document.querySelector('.nav-menu');
    
    if (window.innerWidth <= 768) {
        // Create hamburger menu
        const hamburger = document.createElement('div');
        hamburger.className = 'hamburger';
        hamburger.innerHTML = '☰';
        hamburger.style.cssText = `
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            display: block;
        `;
        
        // Add hamburger to navbar
        const navContainer = document.querySelector('.nav-container');
        navContainer.appendChild(hamburger);
        
        // Hide nav menu by default on mobile
        navMenu.style.display = 'none';
        
        // Toggle menu
        hamburger.addEventListener('click', function() {
            if (navMenu.style.display === 'none') {
                navMenu.style.display = 'flex';
                navMenu.style.flexDirection = 'column';
                navMenu.style.position = 'absolute';
                navMenu.style.top = '100%';
                navMenu.style.left = '0';
                navMenu.style.width = '100%';
                navMenu.style.background = 'rgba(0, 0, 0, 0.95)';
                navMenu.style.padding = '1rem';
            } else {
                navMenu.style.display = 'none';
            }
        });
    }
}

// Initialize mobile menu on resize
window.addEventListener('resize', createMobileMenu);
document.addEventListener('DOMContentLoaded', createMobileMenu);

// Preloader (optional)
window.addEventListener('load', function() {
    const preloader = document.createElement('div');
    preloader.id = 'preloader';
    preloader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        transition: opacity 0.5s ease;
    `;
    
    const spinner = document.createElement('div');
    spinner.style.cssText = `
        width: 50px;
        height: 50px;
        border: 3px solid rgba(255, 255, 255, 0.3);
        border-top: 3px solid white;
        border-radius: 50%;
        animation: spin 1s linear infinite;
    `;
    
    preloader.appendChild(spinner);
    document.body.appendChild(preloader);
    
    // Add spin animation
    const spinStyle = document.createElement('style');
    spinStyle.textContent = `
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(spinStyle);
    
    // Hide preloader after everything is loaded
    setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.remove();
        }, 500);
    }, 1000);
});

// Add some interactive particles (optional)
function createParticles() {
    const hero = document.querySelector('.hero');
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    particlesContainer.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
    `;
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 2}px;
            height: ${Math.random() * 4 + 2}px;
            background: rgba(255, 255, 255, ${Math.random() * 0.5 + 0.2});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${Math.random() * 3 + 2}s ease-in-out infinite alternate;
        `;
        particlesContainer.appendChild(particle);
    }
    
    hero.appendChild(particlesContainer);
    
    // Add float animation
    const floatStyle = document.createElement('style');
    floatStyle.textContent = `
        @keyframes float {
            0% { transform: translateY(0px); }
            100% { transform: translateY(-20px); }
        }
    `;
    document.head.appendChild(floatStyle);
}

document.addEventListener('DOMContentLoaded', createParticles);
