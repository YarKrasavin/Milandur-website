---
layout: page
title: Главная страница
editLink: true
---

<main class="server-landing-container">
  
  <section class="hero">
    <div class="hero-content">
      <div class="hero-note">
        <img src="/layers0.svg" alt="Иконка слоев">
        <span>Не смотри, а изучай!</span>
      </div>
      <h1 class="hero-title">Уникальный<br>Приватный сервер<br>Друзей</h1>
      <p class="hero-subtitle">Твори, создавай, выживай, веселись, находи новых друзей.</p>
      
      <div class="cta-group">
        <a href="#" class="btn btn-primary">
          <span>Присоединиться</span>
          <img src="/group0.svg" alt="Иконка" style="width: 20px; height: 20px;">
        </a>
        <button class="btn btn-secondary" onclick="copyServerIP(this, 'play.server.ru')">
          <span>Скопировать IP</span>
        </button>
      </div>
    </div>
    
    <div class="hero-image-wrap">
      <img class="hero-image" src="/fdg.png" alt="Промо изображение сервера">
    </div>
  </section>

  <section class="articles-section">
    <h2 class="articles-title">Полезные статьи</h2>
    <div class="articles-grid">
      <div class="article-card">
        <h3>Лупа</h3>
        <a href="/articles/lupa" class="btn-card">Перейти в статью</a>
      </div>
      <div class="article-card">
        <h3>Гайды</h3>
        <a href="/articles/guides" class="btn-card">Перейти в статью</a>
      </div>
      <div class="article-card">
        <h3>Правила</h3>
        <a href="/rules" class="btn-card">Перейти в статью</a>
      </div>
    </div>
  </section>

  <section class="features-section">
    <div class="features-grid">
      
      <div class="feature-card card-community">
        <h3>Комьюнити</h3>
        <p>Мы прилагаем все усилия, чтобы поддерживать наше сообщество комфортным и дружным!</p>
        <img class="card-img" src="/_10.png" alt="Комьюнити">
      </div>

      <div class="feature-card card-vanilla">
        <h3>Ванильность</h3>
        <p>Классический игровой процесс без лишних модов.</p>
        <img class="card-img" src="/grass-block-10.png" alt="Блок травы">
      </div>

      <div class="feature-card card-possibilities">
        <h3>Безграничные возможности</h3>
        <p>Реализуй любые масштабные проекты и идеи вместе с нами.</p>
      </div>

      <div class="feature-card card-events">
        <h3>Ивенты</h3>
        <p>Регулярные серверные события.</p>
        <img class="card-img" src="/blue-geode-crystal-10.png" alt="Кристалл">
      </div>

    </div>
  </section>

  <section class="faq-section">
    <h2 class="faq-title">Часто задаваемые вопросы</h2>
    <div class="faq-container">
      
      <details>
        <summary>Как попасть на ваш сервер?</summary>
        <div class="faq-content">
          <p>Наш сервер является приватным. Чтобы присоединиться к нам, нажмите кнопку «Присоединиться» вверху страницы и заполните небольшую анкету в нашей группе или Дискорде.</p>
        </div>
      </details>

      <details>
        <summary>Нужна ли лицензия Minecraft?</summary>
        <div class="faq-content">
          <p>Мы поддерживаем ванильную атмосферу, поэтому вход на наш сервер доступен только для игроков с официальной лицензией игры.</p>
        </div>
      </details>

      <details>
        <summary>Какие плагины установлены на сервере?</summary>
        <div class="faq-content">
          <p>У нас стоит минимальный набор плагинов для оптимизации, защиты от гриферов и логирования действий (CoreProtect), чтобы ваш игровой опыт оставался максимально чистым и безопасным.</p>
        </div>
      </details>

    </div>
  </section>

</main>

<style scoped>
  /* Импорт кастомных шрифтов */
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,400;0,500;1,500&family=Unbounded:wght@400;600;700&display=swap');

  /* Базовый контейнер вместо body, чтобы изолировать стили страницы */
  .server-landing-container {
    font-family: "Ubuntu", sans-serif;
    color: #ffffff;
    padding: 0 20px;
    margin-top: 60px; /* Чтобы контент не залезал под твой летающий островок */
  }

  /* Сброс стандартных подчеркиваний ссылок для этой страницы */
  .server-landing-container a {
    text-decoration: none !important;
    color: inherit;
  }

  .hero {
    padding: 80px 0;
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 40px;
    align-items: center;
  }

  .hero-content {
    max-width: 700px;
  }

  .hero-title {
    font-family: "Unbounded", sans-serif;
    font-size: clamp(32px, 4.5vw, 56px);
    line-height: 1.1;
    font-weight: 700;
    margin-bottom: 24px;
    color: #ffffff;
    border: none; /* Убираем дефолтную линию под h1 от VitePress */
  }

  .hero-subtitle {
    font-family: "Unbounded", sans-serif;
    font-size: clamp(16px, 2vw, 20px);
    color: rgba(160, 160, 160, 0.8);
    margin-bottom: 32px;
    line-height: 1.4;
  }

  .hero-note {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    color: rgba(73, 163, 231, 0.8);
    font-style: italic;
    font-size: 18px;
    margin-bottom: 24px;
  }

  .hero-note img {
    width: 24px;
    height: 24px;
  }

  .hero-image-wrap {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .hero-image-wrap::before {
    content: "";
    position: absolute;
    width: 350px;
    height: 350px;
    background: radial-gradient(circle, rgba(240, 240, 240, 0.15) 0%, rgba(240, 240, 240, 0) 70%);
    filter: blur(20px);
    z-index: 1;
    pointer-events: none;
  }

  .hero-image {
    position: relative;
    z-index: 2;
    max-width: 85%;
    filter: drop-shadow(0 10px 20px rgba(0,0,0,0.5));
  }

  .cta-group {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    padding: 16px 32px;
    border-radius: 16px;
    font-weight: 500;
    font-size: 18px;
    border: 3px solid transparent !important;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  .btn-primary {
    background: rgba(64, 134, 226, 0.25) !important;
    border-color: rgba(64, 134, 226, 0.4) !important;
    color: #ffffff !important;
  }

  .btn-primary:hover {
    background: rgba(64, 134, 226, 0.4) !important;
    box-shadow: 0 0 20px rgba(64, 134, 226, 0.2);
  }

  .btn-secondary {
    background: rgba(0, 60, 255, 0.2) !important;
    border-color: rgba(33, 45, 84, 0.6) !important;
    color: #ffffff !important;
  }

  .btn-secondary:hover {
    background: rgba(0, 60, 255, 0.35) !important;
    box-shadow: 0 0 20px rgba(0, 60, 255, 0.2);
  }

  .btn-secondary.copied {
    background: rgba(46, 204, 113, 0.2) !important;
    border-color: rgba(46, 204, 113, 0.6) !important;
    box-shadow: 0 0 20px rgba(46, 204, 113, 0.2);
  }

  .btn-card {
    margin-top: auto;
    background: #1c1c1c;
    border: 2px solid #262626;
    padding: 10px 20px;
    border-radius: 12px;
    font-size: 14px;
    width: 100%;
    text-align: center;
    color: #ffffff !important;
    display: block;
    transition: all 0.2s ease;
  }

  .btn-card:hover {
    background: #ffffff !important;
    color: #000000 !important;
  }

  .articles-section {
    margin-top: 60px;
    background: #0d0d0d;
    border: 3px solid #161616;
    border-radius: 33px;
    padding: 40px;
  }

  .articles-title {
    font-family: "Unbounded", sans-serif;
    font-size: clamp(28px, 4vw, 48px);
    margin-bottom: 30px;
    text-align: center;
    color: #ffffff;
    border: none;
  }

  .articles-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 24px;
  }

  .article-card {
    background: #141414;
    border: 3px solid #161616;
    border-radius: 24px;
    padding: 30px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 220px;
  }

  .article-card h3 {
    font-family: "Unbounded", sans-serif;
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 24px;
    color: #ffffff;
  }

  .features-section {
    margin: 80px 0;
    background: #0d0d0d;
    border: 3px solid #161616;
    border-radius: 33px;
    padding: 40px;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.5);
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 24px;
  }

  .feature-card {
    background: #141414;
    border-radius: 24px;
    padding: 30px;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    min-height: 250px;
  }

  .feature-card h3 {
    font-family: "Unbounded", sans-serif;
    font-size: clamp(20px, 2vw, 28px);
    margin-bottom: 15px;
    z-index: 2;
    color: #ffffff;
  }

  .feature-card p {
    color: rgba(255, 255, 255, 0.7);
    font-size: 16px;
    line-height: 1.6;
    z-index: 2;
    max-width: 80%;
  }

  .card-img {
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 120px;
    height: 120px;
    object-fit: contain;
    opacity: 0.8;
    z-index: 1;
  }

  .card-community { grid-column: span 7; }
  .card-vanilla { grid-column: span 5; }
  .card-possibilities { grid-column: span 8; }
  .card-events { grid-column: span 4; }

  .faq-section {
    margin: 80px 0;
    background: #0d0d0d;
    border: 3px solid #161616;
    border-radius: 33px;
    padding: 40px;
  }

  .faq-title {
    font-family: "Unbounded", sans-serif;
    font-size: clamp(28px, 4vw, 44px);
    margin-bottom: 35px;
    text-align: center;
    color: #ffffff;
    border: none;
  }

  .faq-container {
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-width: 850px;
    margin: 0 auto;
  }

  details {
    background: #141414;
    border: 2px solid #161616;
    border-radius: 16px;
    overflow: hidden;
    transition: border-color 0.3s ease;
  }

  details[open] {
    border-color: rgba(64, 134, 226, 0.4);
  }

  summary {
    padding: 24px;
    font-family: "Unbounded", sans-serif;
    font-size: 18px;
    font-weight: 400;
    cursor: pointer;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #ffffff;
  }

  summary::-webkit-details-marker {
    display: none;
  }

  summary::after {
    content: "+";
    font-size: 26px;
    color: rgba(64, 134, 226, 0.8);
    transition: transform 0.2s ease;
  }

  details[open] summary::after {
    transform: rotate(45deg);
    color: #ffffff;
  }

  .faq-content {
    padding: 0 24px 24px 24px;
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.6;
    font-size: 16px;
    border-top: 1px solid #1c1c1c;
    padding-top: 16px;
  }

  @media (max-width: 992px) {
    .hero {
      grid-template-columns: 1fr;
      text-align: center;
      padding: 40px 0;
    }
    .hero-image-wrap {
      order: -1;
    }
    .hero-note, .cta-group {
      justify-content: center;
    }
    .card-community, .card-vanilla, .card-possibilities, .card-events {
      grid-column: span 12;
    }
  }
</style>

<script>
  function copyServerIP(buttonElement, ipAddress) {
    navigator.clipboard.writeText(ipAddress).then(() => {
      const textSpan = buttonElement.querySelector('span');
      const originalText = textSpan.innerText;
      
      textSpan.innerText = 'Скопировано!';
      buttonElement.classList.add('copied');
      buttonElement.style.pointerEvents = 'none';

      setTimeout(() => {
        textSpan.innerText = originalText;
        buttonElement.classList.remove('copied');
        buttonElement.style.pointerEvents = 'auto';
      }, 2500);
      
    }).catch(err => {
      console.error('Не удалось скопировать IP: ', err);
    });
  }
</script>