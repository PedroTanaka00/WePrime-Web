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












document.addEventListener('DOMContentLoaded', function() {
    // Selecionar todas as imagens animadas
    const animatedImages = document.querySelectorAll('.animated-image');
    
    // Função para iniciar o ciclo de rotação
    function startRotationCycle() {
        animatedImages.forEach((img, index) => {
            // Iniciar o primeiro ciclo após um pequeno atraso para cada imagem
            setTimeout(() => {
                rotateImage(img, index);
            }, index * 1000); // Começar com um pequeno atraso entre imagens
        });
    }
    
    // Função para rotacionar uma imagem e programar a próxima rotação
    function rotateImage(img, index) {
        // Determinar a posição atual da flutuação para manter durante a rotação
        const computedStyle = window.getComputedStyle(img);
        const transform = computedStyle.getPropertyValue('transform');
        
        // Extrair o valor de translateY da matriz de transformação
        let translateY = 0;
        if (transform !== 'none') {
            const matrix = transform.match(/matrix.*$$(.+)$$/)[1].split(', ');
            translateY = parseFloat(matrix[5]);
        }
        
        // Normalizar o valor de translateY para um valor entre 0 e 1
        const maxTranslate = 15; // Valor máximo da animação float
        const floatPosition = 0.5 - (translateY / (2 * maxTranslate));
        
        // Definir a posição de flutuação como uma variável CSS personalizada
        img.style.setProperty('--float-position', floatPosition);
        
        // Adicionar e remover a classe de rotação
        img.classList.add('rotate360');
        
        // Remover a classe após a animação terminar para permitir que a animação de flutuação continue
        setTimeout(() => {
            img.classList.remove('rotate360');
            
            // Agendar a próxima rotação após 5 segundos
            setTimeout(() => {
                rotateImage(img, index);
            }, 5000);
            
        }, 2000); // A duração da animação de rotação
    }
    
    // Iniciar o ciclo de rotação
    startRotationCycle();
    
    // Adicionar animação para os pontos na seção X
    function animateXSectionDots() {
        const dotsContainers = document.querySelectorAll('.dots-container');
        
        // Criar pontos adicionais dinamicamente
        dotsContainers.forEach((container, index) => {
            // Adicionar mais pontos aleatórios
            for (let i = 0; i < 20; i++) { // Aumentado para 20 pontos
                const dot = document.createElement('div');
                dot.className = 'extra-dot';
                // Distribuir os pontos ao longo de toda a largura
                dot.style.left = `${Math.random() * 200}%`; // Aumentado para 200%
                dot.style.top = `${Math.random() * 10 - 5}px`;
                dot.style.width = `${2 + Math.random() * 3}px`;
                dot.style.height = `${2 + Math.random() * 3}px`;
                dot.style.position = 'absolute';
                dot.style.borderRadius = '50%';
                dot.style.backgroundColor = 'white';
                dot.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.5)';
                dot.style.opacity = `${0.3 + Math.random() * 0.7}`;
                
                container.appendChild(dot);
            }
        });
    }
    
    // Chamar a função para animar os pontos
    animateXSectionDots();
    
    // Ajustar as linhas modernas quando a janela for redimensionada
    function adjustModernLines() {
        const imageContainers = document.querySelectorAll('.image-container');
        
        imageContainers.forEach(container => {
            const rect = container.getBoundingClientRect();
            const lines = container.querySelectorAll('.modern-line');
            
            // Ajustar o comprimento máximo das linhas com base no tamanho da imagem
            document.documentElement.style.setProperty('--max-line-width', `${rect.width * 0.8}px`);
            document.documentElement.style.setProperty('--max-line-height', `${rect.height * 0.8}px`);
        });
    }
    
    // Chamar a função de ajuste inicialmente e quando a janela for redimensionada
    adjustModernLines();
    window.addEventListener('resize', adjustModernLines);
    
    // Adicionar interatividade às linhas quando o mouse passa sobre a imagem
    const imageContainers = document.querySelectorAll('.image-container');
    
    imageContainers.forEach(container => {
        container.addEventListener('mouseenter', () => {
            const lines = container.querySelectorAll('.modern-line');
            lines.forEach(line => {
                line.style.opacity = '1';
                line.style.boxShadow = '0 0 15px rgba(0, 247, 255, 1), 0 0 30px rgba(234, 0, 255, 0.8)';
            });
        });
        
        container.addEventListener('mouseleave', () => {
            const lines = container.querySelectorAll('.modern-line');
            lines.forEach(line => {
                line.style.opacity = '0.8';
                line.style.boxShadow = '0 0 10px rgba(0, 247, 255, 0.8), 0 0 20px rgba(234, 0, 255, 0.5)';
            });
        });
    });
});






document.addEventListener('DOMContentLoaded', function() {
    // Criar partículas (reduzidas)
    createParticles();
    
    // Adicionar efeito de hover ao botão
    setupButtonHover();
});

// Função para criar partículas (reduzidas)
function createParticles() {
    const particlesContainer = document.querySelector('.particles-container');
    const particleCount = 20; // Reduzido de 50 para 20
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Estilizar partícula
        particle.style.position = 'absolute';
        particle.style.width = `${2 + Math.random() * 3}px`;
        particle.style.height = particle.style.width;
        particle.style.backgroundColor = Math.random() > 0.5 ? 'rgba(0, 255, 242, 0.3)' : 'rgba(255, 0, 255, 0.3)';
        particle.style.borderRadius = '50%';
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.filter = 'blur(1px)';
        particle.style.boxShadow = '0 0 10px currentColor';
        
        // Animar partícula
        const duration = 10 + Math.random() * 20;
        const delay = Math.random() * 10;
        
        particle.style.animation = `floatParticle ${duration}s ease-in-out ${delay}s infinite`;
        
        // Adicionar keyframes para a animação
        if (!document.querySelector('#particle-keyframes')) {
            const style = document.createElement('style');
            style.id = 'particle-keyframes';
            style.textContent = `
                @keyframes floatParticle {
                    0%, 100% {
                        transform: translate(0, 0);
                        opacity: 0;
                    }
                    25% {
                        opacity: 1;
                    }
                    50% {
                        transform: translate(${Math.random() > 0.5 ? '' : '-'}${20 + Math.random() * 30}px, ${Math.random() > 0.5 ? '' : '-'}${20 + Math.random() * 30}px);
                        opacity: 1;
                    }
                    75% {
                        opacity: 1;
                    }
                }
            `;
            document.head.appendChild(style);
        }
        
        particlesContainer.appendChild(particle);
    }
}

// Função para configurar o efeito de hover no botão
function setupButtonHover() {
    const button = document.querySelector('.discover-btn');
    
    button.addEventListener('mouseenter', function() {
        // Adicionar classe para efeito de hover
        this.classList.add('btn-hover');
        
        // Garantir que o texto fique por cima do efeito de cor
        const btnText = this.querySelector('.btn-text');
        if (btnText) {
            btnText.style.zIndex = '5';
            btnText.style.position = 'relative';
        }
    });
    
    button.addEventListener('mouseleave', function() {
        // Remover classe de hover
        this.classList.remove('btn-hover');
    });
}