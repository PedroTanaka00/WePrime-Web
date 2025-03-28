<?php require_once("app/config.php"); ?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WePrimeWeb Developers - Transformando Ideias em Experiências Digitais</title>
    
    <meta name="description" content="WePrimeWeb Developers: Transformando ideias em experiências digitais excepcionais para clínicas médicas e escritórios de advocacia.">
    <meta name="keywords" content="desenvolvimento web, sites para clínicas médicas, sites para advogados, design responsivo, segurança web, conformidade LGPD">
    <meta name="author" content="WePrimeWeb Developers">
    
    <meta property="og:title" content="WePrimeWeb Developers - Transformando Ideias em Experiências Digitais">
    <meta property="og:description" content="WePrimeWeb Developers: Transformando ideias em experiências digitais excepcionais para clínicas médicas e escritórios de advocacia.">
    <meta property="og:image" content="<?= BASE_URL ?>/assets/media/social-share.jpg">
    <meta property="og:url" content="https://www.weprimeweb.com.br">
    <meta property="og:type" content="website">
    
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="WePrimeWeb Developers - Transformando Ideias em Experiências Digitais">
    <meta name="twitter:description" content="WePrimeWeb Developers: Transformando ideias em experiências digitais excepcionais para clínicas médicas e escritórios de advocacia.">
    <meta name="twitter:image" content="<?= BASE_URL ?>/assets/media/social-share.jpg">
    
    <link rel="canonical" href="<?= BASE_URL ?>">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="icon" href="favicon.ico" type="image/x-icon">

    <script>
        const baseUrl = "<?= BASE_URL ?>";
    </script>
</head>

<body>
    <!-------------------------------------------------------------------------------------->
    <!----------------------------------------HEADER---------------------------------------->
    <!-------------------------------------------------------------------------------------->

    <header id="header">
        <div class="container">
            <a href="#home" class="logo">
                <img src="assets/media/weprime2.png" alt="WePrimeWeb Logo" class="logo-image">
            </a>
            <div class="menu-btn" id="menuBtn">
                <div class="menu-btn__lines">
                    <span class="line line-1"></span>
                    <span class="line line-2"></span>
                </div>
            </div>
        </div>
        <nav class="nav-menu" id="navMenu">
            <ul class="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about-section">Sobre</a></li>
                <li><a href="#servicos">Serviços</a></li>
                <li><a href="#sites-exclusivos">Sites</a></li>
                <li><a href="#processo2">Processo</a></li>
                <li><a href="#equipe">Equipe</a></li>
                <li><a href="#precos">Preços</a></li>
                <li><a href="#contato">Contato</a></li>
            </ul>
        </nav>
        <div class="overlay" id="overlay"></div>
    </header>



    <!-- Popup que sera renderizado ao enviar o formulario de contato -->
    <div id="popup" class="popup">
        <div id="progressBar" class="progress-bar"></div>
        <p></p>
    </div>


    <a href="<?= Utils::createLinkWhatsapp(CONTATO_WHATSAPP); ?>" class="floating-whatsapp" target="_blank" rel="noopener noreferrer">
        <div class="whatsapp-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
          </svg>
        </div>
    </a>


    <!-------------------------------------------------------------------------------------->
    <!----------------------------------------BANNER---------------------------------------->
    <!-------------------------------------------------------------------------------------->

    <section id="home">
        <video autoplay loop muted>
            <source src="assets/media/espaco.mp4" type="video/mp4">
        </video>
        <div class="hero-content">
            <div class="text-container">
                <h1 class="glow-text">WePrimeWeb </h1> <br> 
                <h1 class="h12"> Developers</h1>
                <p>Transformando ideias em experiências digitais <br>excepcionais para clínicas médicas e escritórios de advocacia.</p>
                <p class="animated-text">
                   modernidade <span class="plus">  +  </span> criatividade <span class="plus">  +  </span> impacto
                </p>
                <a href="#contato" class="btn">Comece Agora</a>
            </div>
            <div class="animated-line"></div>
        </div>
        <div class="scroll-down">
            <a href="#sobre"><i class="fas fa-chevron-down"></i></a>
        </div>
        <div class="vertical-social-links">
            <a href="<?= SOCIAL_INSTAGRAM; ?>" target="_blank" class="vertical-link instagram">Instagram</a>
            <a href="<?= Utils::createLinkWhatsapp(CONTATO_WHATSAPP); ?>" target="_blank" class="vertical-link whatsapp">WhatsApp</a>
        </div>
    </section>

    <section id="infinite-banner">
        <div class="banner-container">
            <img src="assets/media/placa3.png" alt="Banner publicitário" class="banner-image">
            <img src="assets/media/placa3.png" alt="Banner publicitário" class="banner-image">
        </div>
    </section>



    <!----------------------------------------------------------------------------------------->
    <!----------------------------------------SOBRE NÓS---------------------------------------->
    <!----------------------------------------------------------------------------------------->

    <section id="about-section">
        <div class="content-container">
            <div class="title-container">
                <div class="title-wrapper">
                    <span class="heading-start">SOBRE</span>
                    <div class="center-image">
                        <img src="assets/media/weredondo.png" alt="About Us Image">
                    </div>
                    <span class="heading-end">NÓS</span>
                </div>
            </div>
    
            <div class="animated-line"></div>
    
            <div class="text-content">
                <div class="content-sections">
                    <div class="section-block">
                        <h3 class="subtitle">Nossa História</h3>
                        <p class="description">Na WePrimeWeb Developers, somos uma empresa jovem e inovadora, dedicada a ir além da criação de sites: criamos verdadeiras experiências digitais que conectam usuários e marcas de forma impactante.
                            <br>
                            Nosso foco está em transformar a presença online de clínicas médicas e escritórios de advocacia, combinando design moderno, tecnologia de ponta e uma abordagem personalizada para cada projeto.
                            <br>
                            Com uma equipe apaixonada e especializada, entregamos soluções únicas que não apenas refletem a identidade e os valores dos nossos clientes, mas também antecipam as tendências digitais, garantindo inovação, funcionalidade e resultados memoráveis.
                            <br>
                            WePrimeWeb Developers: modernidade, criatividade e impacto na era digital.</p>
                    </div>
    
                    <div class="section-block">
                        <h3 class="subtitle">Nossa Missão</h3>
                        <p class="description">Nossa missão é transformar visões em experiências digitais excepcionais.
                           Buscamos não apenas atender, mas superar as expectativas de nossos clientes,
                           fornecendo soluções web inovadoras, eficientes e esteticamente impressionantes.
                           Acreditamos no poder da tecnologia para impulsionar negócios e conectar pessoas,
                           e estamos comprometidos em ser líderes nessa transformação digital.</p>
                    </div>
                </div>
    
                <a href="<?= Utils::createLinkWhatsapp(CONTATO_WHATSAPP); ?>" target="_blank"><button class="cta-button">SAIBA MAIS</button></a>
                
                <div class="social-links">
                    <a href="<?= SOCIAL_FACEBOOK; ?>" class="social-icon">
                        <i class="fab fa-facebook"></i>
                    </a>
                    <a href="<?= SOCIAL_INSTAGRAM; ?>" target="_blank" class="social-icon">
                        <i class="fab fa-instagram"></i>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!---------------------------------------------------------------------------------------->
    <!----------------------------------------SERVIÇOS---------------------------------------->
    <!---------------------------------------------------------------------------------------->

    <section id="servicos">
        <div class="container">
            <h2 class="section-title">Nossos Serviços</h2>
            <div class="services-grid">
                <div class="service-card">
                    <i class="fas fa-laptop-medical"></i>
                    <h3>Sites para Clínicas Médicas</h3>
                    <p>Websites modernos e funcionais para clínicas médicas, com agendamento online e área do paciente.</p>
                </div>
                <div class="service-card">
                    <i class="fas fa-balance-scale"></i>
                    <h3>Sites para Advogados</h3>
                    <p>Websites profissionais para escritórios de advocacia, com área do cliente e gestão de processos.</p>
                </div>
                <div class="service-card">
                    <i class="fas fa-mobile-alt"></i>
                    <h3>Design Responsivo</h3>
                    <p>Sites adaptados para todos os dispositivos, garantindo a melhor experiência para seus clientes.</p>
                </div>
               
                <div class="service-card">
                <i class="fab fa-instagram"></i>
                <h3>Posts para Instagram</h3>
                <p>Criamos posts com design moderno e atraente para o Instagram, aumentando o engajamento e fortalecendo sua marca nas redes sociais.</p>
                </div>
                
            </div>
        </div>
    </section>




    <!-------------------------------------------------------------------------------------------->
    <!----------------------------------------SITES ÚNICOS---------------------------------------->
    <!-------------------------------------------------------------------------------------------->

    <section id="sites-exclusivos">
        <div class="content-wrapper">
            <h2 class="title">Sites Únicos</h2>
            <h3 class="subtitle">Designs Únicos para Seu Negócio</h3>
            <p class="description">Nossos sites exclusivos são criados sob medida para atender às necessidades específicas do seu negócio. Com designs inovadores e funcionalidades avançadas, garantimos uma presença online que se destaca e converte.</p>
        </div>
        <div class="image-wrapper">
            <img src="assets/media/celular.png" alt="Preview de Site Exclusivo" class="preview-image" id="animated-image">
        </div>
        <div class="decorative-element element-1"></div>
        <div class="decorative-element element-2"></div>
        <div class="decorative-element element-3"></div>
    </section>



   


    <!-------------------------------------------------------------------------------------------------------->
    <!----------------------------------------SITES ÚNICOS COM MODELOS---------------------------------------->
    <!-------------------------------------------------------------------------------------------------------->

    <section id="website-models">
        <div class="main-container">
            <div class="content-left">
                <div class="large-text">
                    <span class="outline-text">SITES</span>
                    <span class="solid-text">ÚNICOS</span>
                </div>
                <div class="description">
                    <p>Modelos profissionais e únicos</p>
                    <p>para sua presença online</p>
                </div>
                <a href="<?= Utils::createLinkWhatsapp(CONTATO_WHATSAPP, "Olá, gostei dos sites e gostaria de saber mais a respeito sobre os modelos."); ?>" target="_blank">
                <button class="explore-button">
                    <span>Escolher Modelo</span>
                    <div class="button-glow"></div>
                </button>
                </a>
            </div>
            
            <div class="content-right">
                <div class="main-preview">
                    <img src="assets/media/site1.PNG" alt="Website Preview" class="main-image">
                    <div class="preview-info">
                        <h2>Site Médico</h2>
                        <p>Design moderno e profissional</p>
                    </div>
                </div>
                
                <div class="preview-grid">
                    <div class="preview-item">
                        <img src="assets/media/site1.PNG" alt="Site Médico">
                        <div class="preview-overlay">Médico</div>
                    </div>
                    <div class="preview-item">
                        <img src="assets/media/site2.PNG" alt="Site Jurídico">
                        <div class="preview-overlay">Jurídico</div>
                    </div>
                    <div class="preview-item">
                        <img src="assets/media/site3.PNG" alt="Site Odontológico">
                        <div class="preview-overlay">Odontológico</div>
                    </div>
                    <div class="preview-item">
                        <img src="assets/media/psicologo.jpg" alt="Site Psicologia">
                        <div class="preview-overlay">Psicologia</div>
                    </div>
                </div>
            </div>
        </div>
    </section>



    <!------------------------------------------------------------------------------------------------->
    <!----------------------------------------SITES INDIVIDUAIS---------------------------------------->
    <!------------------------------------------------------------------------------------------------->


    <section id="hero-arcane">
        <!-- Elementos decorativos animados -->
        <div class="particles-container"></div>
        <div class="floating-icons">
            <!-- Ícones originais -->
            <div class="floating-icon icon-1"><i class="fas fa-code"></i></div>
            <div class="floating-icon icon-2"><i class="fas fa-paint-brush"></i></div>
            <div class="floating-icon icon-3"><i class="fas fa-rocket"></i></div>
            <div class="floating-icon icon-4"><i class="fas fa-laptop-code"></i></div>
            
            <!-- Novos ícones de desenvolvimento e design -->
            <div class="floating-icon icon-5"><i class="fas fa-layer-group"></i></div>
            <div class="floating-icon icon-6"><i class="fas fa-bezier-curve"></i></div>
            <div class="floating-icon icon-7"><i class="fas fa-mobile-alt"></i></div>
            <div class="floating-icon icon-8"><i class="fas fa-palette"></i></div>
            <div class="floating-icon icon-9"><i class="fas fa-sitemap"></i></div>
            <div class="floating-icon icon-10"><i class="fas fa-pencil-ruler"></i></div>
            <div class="floating-icon icon-11"><i class="fas fa-database"></i></div>
            <div class="floating-icon icon-12"><i class="fas fa-vector-square"></i></div>
        </div>
       
    
        <nav class="top-nav">
            <div class="logo">SITES</div>
            <div class="nav-right"></div>
        </nav>
    
        <div class="content-wrapper">
            <div class="left-content">
                <div class="subtitle">SITE SÓ SEU! <span class="highlight-dot"></span></div>
                <h1 class="main-title">SÓ SEU!!
                    <span class="title-highlight"></span>
                </h1>
                <div class="quote-box">
                    <span class="quote">Transforme sua visão em uma <br> presença online extraordinária</span>
                    <span class="quote-info">Desenvolvemos sites totalmente individualizados, alinhando a visão do cliente com nossas soluções. <br class="desktop-break"> Usamos suas explicações, referências de outros sites e arquivos PSD fornecidos para criar projetos únicos, <br class="desktop-break"> sob medida, que refletem sua identidade com autenticidade e profissionalismo.</span>
                </div>
                <div class="button-container">
                    <a href="form-personalizado/form.html" target="_blank" class="cta-button">
                        <button class="discover-btn">
                            <span class="btn-text">Crie seu Site!</span>
                            <div class="btn-shine"></div>
                        </button>
                    </a>
                </div>
            </div>   
        </div>
    
        <div class="bottom-nav">
            <div class="scroll-indicator">
                <div class="line"></div>
                <span>INDIVIDUAIS</span>
            </div>
            <div class="page-number">01</div>
        </div>
    </section>
    
    <!-- Adicionar FontAwesome para os ícones -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">



<!---------------------------------------------------------------------------------------->
<!----------------------------------------INSTAGRAM---------------------------------------->
<!---------------------------------------------------------------------------------------->

    <!-- Primeira seção - Hero -->
    <section id="instagram-hero">
        <div class="glow-effect glow-1"></div>
        <div class="glow-effect glow-2"></div>
        <div class="glow-effect glow-3"></div>
        
        <div class="hero-content">
            <div class="hero-text">
                <h1>Domine o <span class="instagram-text">Instagram</span> com Posts Profissionais</h1>
                <p>Atraia, engaje e converta com conteúdos estratégicos e visuais impactantes que fortalecem sua marca e aumentam seu alcance.</p>
                <div class="cta-buttons">
                    <a href="#contato"><button class="btn-secondary">Contato</button></a>
                </div>
            </div>
            <div class="hero-image">
                <div class="image-glow"></div>
                <div class="image-container">
                    <img src="assets/media/insta2.png" alt="Mulher profissional" class="animated-image">
                    <div class="modern-line line-top"></div>
                    <div class="modern-line line-right"></div>
                    <div class="modern-line line-bottom"></div>
                    <div class="modern-line line-left"></div>
                </div>
            </div>
        </div>
    </section>

 

    <!-- Última seção - Quem te ensina -->
    <section id="instagram-teacher">
        <div class="glow-effect glow-1"></div>
        <div class="glow-effect glow-2"></div>
        <div class="glow-effect glow-3"></div>
        
        <div class="teacher-content">
            <div class="phone-mockup">
                <div class="image-glow"></div>
                <div class="image-container">
                    <img src="assets/media/insta.png" alt="Celular com Instagram" class="animated-image">
                    <div class="modern-line line-top"></div>
                    <div class="modern-line line-right"></div>
                    <div class="modern-line line-bottom"></div>
                    <div class="modern-line line-left"></div>
                </div>
            </div>
            <div class="teacher-info">
                <h2>Entenda como Funciona!</h2>
                <p>Criamos posts incríveis que vão transformar seu Instagram em uma poderosa ferramenta de engajamento.</p>
                <p>Com designs modernos e estratégias certeiras, ajudamos sua marca a crescer e atrair mais clientes.</p>
                <p>Domine o <span class="instagram-text">Instagram</span> aumente seu alcance e converta seguidores em clientes. Vamos juntos fortalecer sua presença digital!</p>
                
                <a href="#contato"><button class="btn-primary">Quero aprender agora</button></a>
            </div>
        </div>
    </section>







    <!---------------------------------------------------------------------------------------->
    <!----------------------------------------PROCESSO---------------------------------------->
    <!---------------------------------------------------------------------------------------->

    <section id="processo2">
        <div class="container">
            <h2 class="section-title">Nosso Processo</h2>
            <div class="timeline">
                <div class="timeline-item left">
                    <div class="timeline-content">
                        <div class="timeline-icon">
                            <i class="fas fa-lightbulb"></i>
                        </div>
                        <h3>1. Conceito</h3>
                        <p>Entendemos suas necessidades e desenvolvemos o conceito do seu site.</p>
                    </div>
                </div>
                <div class="timeline-item right">
                    <div class="timeline-content">
                        <div class="timeline-icon">
                            <i class="fas fa-pencil-alt"></i>
                        </div>
                        <h3>2. Design</h3>
                        <p>Criamos um design moderno e funcional que reflete a identidade da sua marca.</p>
                    </div>
                </div>
                <div class="timeline-item left">
                    <div class="timeline-content">
                        <div class="timeline-icon">
                            <i class="fas fa-code"></i>
                        </div>
                        <h3>3. Desenvolvimento</h3>
                        <p>Construímos seu site com as mais recentes tecnologias e melhores práticas.</p>
                    </div>
                </div>
                <div class="timeline-item right">
                    <div class="timeline-content">
                        <div class="timeline-icon">
                            <i class="fas fa-rocket"></i>
                        </div>
                        <h3>4. Lançamento</h3>
                        <p>Realizamos testes rigorosos e lançamos seu site com suporte contínuo.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>





    <!-------------------------------------------------------------------------------------------->
    <!----------------------------------------NOSSA EQUIPE---------------------------------------->
    <!-------------------------------------------------------------------------------------------->

    <section id="equipe">
        <div class="container">
            <h2 class="section-title">Nossa Equipe</h2>
            <div class="team-grid">
                <div class="team-member">
                    <div class="member-image">
                        <div class="front">
                            <img src="assets/media/fernandinho1.jpg" alt="Fernando">
                        </div>
                        <div class="back">
                            <i class="fas fa-code"></i>
                        </div>
                    </div>
                    <h3>Fernando Mota</h3>
                    <p>Desenvolvedor Sênior Full-Stack</p>
                </div>
                <div class="team-member">
                    <div class="member-image">
                        <div class="front">
                            <img src="assets/media/pedro1.jpg" alt="Pedro">
                        </div>
                        <div class="back">
                            <i class="fas fa-code"></i>
                        </div>
                    </div>
                    <h3>Pedro Tanaka</h3>
                    <p>Desenvolvedor Front-end / Web Designer</p>
                </div>
                <div class="team-member">
                    <div class="member-image">
                        <div class="front">
                            <img src="assets/media/peruzza1.jpg" alt="Matheus">
                        </div>
                        <div class="back">
                            <i class="fas fa-bullhorn"></i>
                        </div>
                    </div>
                    <h3>Matheus Peruzza</h3>
                    <p>Especialista em Marketing</p>
                </div>
            </div>
        </div>
    </section>

    <!-------------------------------------------------------------------------------------->
    <!----------------------------------------PLANOS---------------------------------------->
    <!-------------------------------------------------------------------------------------->

    <section id="precos">
        <div class="container">
            <h2 class="section-title">Nossos Planos</h2>
            <div class="pricing-grid">
                
                <div class="pricing-card featured">
                    <h3>Optimus</h3>
                    <p class="price">R$ 49/mês</p>
                    <ul>
                        <li><i class="fas fa-check"></i> Utilização do nosso Painel do site</li>
                        <li><i class="fas fa-check"></i> Criação de site One-Page ou Institucional (até 3 páginas)</li>
                        <li><i class="fas fa-check"></i> Hospedagem incluída</li>
                        <li><i class="fas fa-check"></i> Otimização para celular e tablet (design responsivo)</li>
                        <li><i class="fas fa-check"></i> Integração com WhatsApp e redes sociais</li>
                        <li><i class="fas fa-check"></i> Suporte básico</li>
                    </ul>
                    <a href="<?= Utils::createLinkWhatsapp(CONTATO_WHATSAPP, "Olá, gostaria de saber mais sobre o plano Optimus."); ?>" target="_blank" class="btn">Escolher Plano</a>
                </div>
                <div class="pricing-card">
                    <h3>Prime</h3>
                    <p class="price">R$ 79/mês</p>
                    <ul>
                        <li><i class="fas fa-check"></i> Utilização do nosso Painel do site</li>
                        <li><i class="fas fa-check"></i> Criação de site até 7 páginas (com estrutura mais robusta e otimizada)</li>
                        <li><i class="fas fa-check"></i> SEO básico para melhorar o ranqueamento no Google</li>
                        <li><i class="fas fa-check"></i> E-mail profissional</li>
                        <li><i class="fas fa-check"></i> Manutenção e atualizações mensais</li>
                        <li><i class="fas fa-check"></i> Inclui tudo do Plano Essencial</li>
                    </ul>
                    <a href="<?= Utils::createLinkWhatsapp(CONTATO_WHATSAPP, "Olá, gostaria de saber mais sobre o plano Prime."); ?>" target="_blank" class="btn">Escolher Plano</a>
                </div>
            </div>
        </div>
    </section>

    <!----------------------------------------------------------------------------------------------------->
    <!----------------------------------------FORMULÁRIO DE CONTATO---------------------------------------->
    <!----------------------------------------------------------------------------------------------------->

    <section id="contato">
        <div class="container">
            <h2 class="section-title">Entre em Contato</h2>
            <div class="contact-content">
                <div class="contact-form">
                    <h3>Envie uma mensagem</h3>
                    <form id="formContato">
                        <div class="input-group">
                            <input type="text" id="frm_nome" name="frm_nome" placeholder="Nome" required>
                            <i class="fas fa-user"></i>
                        </div>
                        <div class="input-group">
                            <input type="email" id="frm_email" name="frm_email" placeholder="Email" required>
                            <i class="fas fa-envelope"></i>
                        </div>
                        <div class="input-group">
                            <input type="tel" id="frm_telefone" name="frm_telefone" placeholder="Telefone" required>
                            <i class="fas fa-phone"></i>
                        </div>
                        <div class="input-group">
                            <textarea placeholder="Mensagem" id="frm_mensagem" name="frm_mensagem" required></textarea>
                            <i class="fas fa-comment-alt"></i>
                        </div>
                        <button type="submit" class="btn">
                            <span>Enviar Mensagem</span>
                            <i class="fas fa-paper-plane"></i>
                        </button>
                    </form>
                </div>
                <div class="contact-info">
                    <h3>Informações de Contato</h3>
                    <div class="info-item">
                        <div class="icon-wrapper">
                            <i class="fas fa-envelope"></i>
                        </div>
                        <div>
                            <h4>Email</h4>
                            <p><?= CONTATO_EMAIL; ?></p>
                        </div>
                    </div>
                    <div class="info-item">
                        <div class="icon-wrapper">
                            <i class="fas fa-phone"></i>
                        </div>
                        <div>
                            <h4>Telefone</h4>
                            <p><?= CONTATO_TELEFONE; ?></p>
                        </div>
                    </div>
                    <div class="info-item">
                        <div class="icon-wrapper">
                            <i class="fas fa-map-marker-alt"></i>
                        </div>
                        <div>
                            <h4>Localização</h4>
                            <p>Limeira-SP</p>
                        </div>
                    </div>
                    <div class="social-links">
                        <a href="<?= SOCIAL_FACEBOOK; ?>" class="social-icon"><i class="fab fa-facebook-f"></i></a>
                        <a href="<?= SOCIAL_TWITTER_X; ?>" class="social-icon"><i class="fab fa-twitter"></i></a>
                        <a href="<?= SOCIAL_INSTAGRAM; ?>" class="social-icon"><i class="fab fa-instagram"></i></a>
                        <a href="<?= SOCIAL_LINKEDIN; ?>" class="social-icon"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="floating-shapes">
            <div class="shape shape-1"></div>
            <div class="shape shape-2"></div>
            <div class="shape shape-3"></div>
            <div class="shape shape-4"></div>
        </div>
    </section>
    
    
    
    <!-------------------------------------------------------------------------------------->
    <!----------------------------------------FOOTER---------------------------------------->
    <!-------------------------------------------------------------------------------------->
    <footer id="modern-footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section logo-section">
                    <img src="assets/media/weprime2.png" alt="WePrimeWeb Logo" class="footer-logo">
                    <p>Transformando ideias em <br>experiências digitais<br> excepcionais.</p>
                </div>
                <div class="footer-section">
                    <h4>Links Rápidos</h4>
                    <ul>
                        <li><a href="#home"><i class="fas fa-home"></i> Home</a></li>
                        <li><a href="#about-section"><i class="fas fa-info-circle"></i> Sobre</a></li>
                        <li><a href="#servicos"><i class="fas fa-cogs"></i> Serviços</a></li>
                        <li><a href="#sites-exclusivos"><i class="fas fa-laptop"></i> Sites</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>Serviços</h4>
                    <ul>
                        <li><i class="fas fa-hospital"></i> Sites para Clínicas Médicas</li>
                        <li><i class="fas fa-gavel"></i> Sites para Advogados</li>
                        <li><i class="fas fa-mobile-alt"></i> Design Responsivo</li>
                        <li><i class="fas fa-wrench"></i> Manutenção dos Sites</li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>Contato</h4>
                    <p><i class="fas fa-envelope"></i> <?= CONTATO_EMAIL; ?></p>
                    <p><i class="fas fa-phone-alt"></i>+55 <?= CONTATO_TELEFONE; ?></p>
                    <div class="social-links">
                        <a href="#" class="social-icon"><i class="fab fa-facebook"></i></a>
                        <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
                        <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
                        <a href="#" class="social-icon"><i class="fab fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; <?= date("Y"); ?> WePrimeWeb Developers. Todos os direitos reservados.</p>
            </div>
        </div>
        <div class="animated-bg">
            <div class="bg-shape shape1"></div>
            <div class="bg-shape shape2"></div>
            <div class="bg-shape shape3"></div>
        </div>
    </footer>
    
    

    <script src="assets/js/script.js"></script>
</body>
</html>