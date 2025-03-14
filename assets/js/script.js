// Popup modal para formulário de contato
let progessInterval;

function exibirPopup(classe, mensagem) {
    const popup       = document.querySelector("#popup");
    const progressBar = document.querySelector("#progressBar");

    popup.classList.add(classe);
    popup.querySelector("p").textContent = mensagem;

    popup.style.display = "block";
    setTimeout(() => {
        popup.style.opacity = "1";
    }, 10);

    let duracao   = 12000;
    let intervalo = 100;
    let inc       = (intervalo / duracao) * 100;
    let progress  = 0;

    progressBar.style.width = "0";

    progessInterval = setInterval(() => {
        progress += inc;
        progressBar.style.width = `${progress}%`;

        if(progress >= 100) {
            fecharPopup();
        }
    }, intervalo);
}

function fecharPopup() {
    clearInterval(progessInterval);

    const popup = document.querySelector("#popup");
    popup.style.opacity = "0";
    setTimeout(() => {
        popup.style.display = "0";
    }, 500);
}

document.getElementById("popup").addEventListener("click", fecharPopup);


// Formulário de contato 
function processaFormulario(e) {
    e.preventDefault();

    const form = document.querySelector("#formContato");
    const formData = new FormData(form);

    fetch(`${baseUrl}/app/Api/PostContato.php`, {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        exibirPopup(data.classe, data.mensagem);

        if(data.classe === "popup-success") 
            form.reset();
    })
    .catch(error => console.error(error));
}

document.querySelector("#formContato").addEventListener("submit", (e) => processaFormulario(e));





document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menuBtn');
    const navMenu = document.getElementById('navMenu');
    const overlay = document.getElementById('overlay');
    const navLinks = document.querySelectorAll('.nav-links a');

    function toggleMenu() {
        menuBtn.classList.toggle('active');
        navMenu.classList.toggle('active');
        overlay.classList.toggle('active');
    }

    function closeMenu() {
        menuBtn.classList.remove('active');
        navMenu.classList.remove('active');
        overlay.classList.remove('active');
    }

    menuBtn.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', closeMenu);

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            closeMenu();
            
            setTimeout(() => {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }, 300);
        });
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeMenu();
        }
    });
});




// Menu mobile
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        navLinks.classList.add('active');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        navLinks.classList.remove('active');
        menuOpen = false;
    }
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(0, 0, 0, 0.9)';
        navbar.style.padding = '10px 0';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.8)';
        navbar.style.padding = '20px 0';
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Particles.js configuration
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#00f7ff'
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '#000000'
            },
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#00f7ff',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 6,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'repulse'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 200,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
});

// Form submission
const form = document.querySelector('.contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission,
    // such as sending the data to a server
    alert('Mensagem enviada com sucesso!');
    form.reset();
});

// Animation on scroll
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top <= windowHeight * 0.8) {
            el.classList.add('animated');
        }
    });
});






document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    let currentIndex = 0;
    let startX;
    let isSwiping = false;

    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateCarousel();
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    function handleStart(e) {
        startX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
        isSwiping = true;
        if (e.type.includes('mouse')) {
            e.preventDefault();
        }
    }

    function handleMove(e) {
        if (!isSwiping) return;
        const currentX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
        const diff = startX - currentX;
        carousel.style.transform = `translateX(calc(-${currentIndex * 100}% - ${diff}px))`;
    }

    function handleEnd(e) {
        if (!isSwiping) return;
        const currentX = e.type.includes('mouse') ? e.clientX : e.changedTouches[0].clientX;
        const diff = startX - currentX;
        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        } else {
            updateCarousel();
        }
        isSwiping = false;
    }

    carousel.addEventListener('touchstart', handleStart);
    carousel.addEventListener('touchmove', handleMove);
    carousel.addEventListener('touchend', handleEnd);

    carousel.addEventListener('mousedown', handleStart);
    carousel.addEventListener('mousemove', handleMove);
    carousel.addEventListener('mouseup', handleEnd);
    carousel.addEventListener('mouseleave', () => {
        if (isSwiping) {
            updateCarousel();
            isSwiping = false;
        }
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const teamMembers = document.querySelectorAll('#equipe .member-image');

    teamMembers.forEach(member => {
        member.addEventListener('mouseenter', () => {
            member.style.animation = 'rotateReverse 0.6s forwards';
        });

        member.addEventListener('mouseleave', () => {
            member.style.animation = 'rotateForward 0.6s forwards';
        });
    });
});




document.addEventListener('DOMContentLoaded', function() {
    const plusSigns = document.querySelectorAll('#home .plus');
    
    plusSigns.forEach(plus => {
        plus.addEventListener('mouseover', function() {
            this.style.animation = 'none';
            this.offsetHeight; // Trigger reflow
            this.style.animation = 'colorChange 1s infinite, bounce 0.5s infinite';
        });

        plus.addEventListener('mouseout', function() {
            this.style.animation = 'colorChange 4s infinite, bounce 2s infinite';
        });

        plus.addEventListener('click', function() {
            const words = this.parentElement.textContent.split('+');
            const index = Array.from(this.parentElement.children).indexOf(this);
            
            if (index > 0 && index < words.length) {
                const temp = words[index - 1].trim();
                words[index - 1] = words[index].trim();
                words[index] = temp;
                
                this.parentElement.innerHTML = words.join(' <span class="plus">+</span> ');
                attachEventListeners();
            }
        });
    });

    function attachEventListeners() {
        const newPlusSigns = document.querySelectorAll('#home .plus');
        newPlusSigns.forEach(plus => {
            plus.addEventListener('mouseover', function() {
                this.style.animation = 'none';
                this.offsetHeight; // Trigger reflow
                this.style.animation = 'colorChange 1s infinite, bounce 0.5s infinite';
            });

            plus.addEventListener('mouseout', function() {
                this.style.animation = 'colorChange 4s infinite, bounce 2s infinite';
            });

            plus.addEventListener('click', function() {
                const words = this.parentElement.textContent.split('+');
                const index = Array.from(this.parentElement.children).indexOf(this);
                
                if (index > 0 && index < words.length) {
                    const temp = words[index - 1].trim();
                    words[index - 1] = words[index].trim();
                    words[index] = temp;
                    
                    this.parentElement.innerHTML = words.join(' <span class="plus">+</span> ');
                    attachEventListeners();
                }
            });
        });
    }
});







document.addEventListener('DOMContentLoaded', function() {
    const image = document.getElementById('animated-image');
    
    image.addEventListener('mousemove', function(e) {
        const { left, top, width, height } = this.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;
        
        const rotateX = mouseY / -10;
        const rotateY = mouseX / 10;
        
        this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    
    image.addEventListener('mouseleave', function() {
        this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const sitesPreviews = document.querySelectorAll('#exclusive-sites .site-preview');

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function animateSitePreviews() {
        sitesPreviews.forEach((preview) => {
            if (isElementInViewport(preview)) {
                preview.style.animationDelay = `${preview.dataset.index * 0.1}s`;
                preview.style.animationPlayState = 'running';
            }
        });
    }

    // Initial check
    animateSitePreviews();

    // Check on scroll
    window.addEventListener('scroll', animateSitePreviews);
    window.addEventListener('resize', animateSitePreviews);
});





document.addEventListener('DOMContentLoaded', function() {
    const bannerContainer = document.querySelector('#infinite-banner .banner-container');
    const firstImage = bannerContainer.querySelector('.banner-image');

    // Clona a primeira imagem e a adiciona ao final
    bannerContainer.appendChild(firstImage.cloneNode(true));

    // Função para reiniciar a animação suavemente
    function restartAnimation() {
        bannerContainer.style.animation = 'none';
        bannerContainer.offsetHeight; // Trigger reflow
        bannerContainer.style.animation = null;
    }

    // Reinicia a animação a cada iteração
    bannerContainer.addEventListener('animationiteration', restartAnimation);
});





document.addEventListener('DOMContentLoaded', function() {
    const progressBars = document.querySelectorAll('#feature-section .progress-bar');
    
    progressBars.forEach(bar => {
        const percentage = bar.getAttribute('data-percentage');
        setTimeout(() => {
            bar.style.setProperty('--progress', percentage + '%');
            bar.querySelector('::before').style.width = percentage + '%';
        }, 500);
    });
});




document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('#website-showcase .slide');
    const dots = document.querySelectorAll('#website-showcase .dot');
    const navLinks = document.querySelectorAll('#website-showcase .nav-link');
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');
        navLinks[currentSlide].classList.remove('active');

        currentSlide = (index + slides.length) % slides.length;

        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
        navLinks[currentSlide].classList.add('active');
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function startSlideShow() {
        stopSlideShow();
        slideInterval = setInterval(nextSlide, 5000);
    }

    function stopSlideShow() {
        if (slideInterval) {
            clearInterval(slideInterval);
        }
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
            startSlideShow();
        });
    });

    navLinks.forEach((link, index) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            showSlide(index);
            startSlideShow();
        });
    });

    const showcaseContainer = document.querySelector('#website-showcase');
    showcaseContainer.addEventListener('mouseenter', stopSlideShow);
    showcaseContainer.addEventListener('mouseleave', startSlideShow);

    startSlideShow();
});




document.addEventListener('DOMContentLoaded', function() {
    // Add glow effect to button
    const exploreButton = document.querySelector('#website-models .explore-button');
    
    exploreButton.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        this.style.setProperty('--x', `${x}px`);
        this.style.setProperty('--y', `${y}px`);
    });
});
