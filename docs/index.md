---
layout: page
title: Главная страница
editLink: true
---


<script setup>
import HeroSection from './HeroSection.vue' // Укажи правильный путь к файлу из Шага 1
</script>

<ClientOnly>
  <HeroSection />

  <section class="articles-section">
    <h2 class="articles-title">Полезные статьи</h2>
    <div class="articles-grid">
      <div class="article-card">
        <h3>Лупа</h3>
        <a href="#" class="btn-card">Перейти в статью</a>
      </div>
      <div class="article-card">
        <h3>Гайды</h3>
        <a href="#" class="btn-card">Перейти в статью</a>
      </div>
      <div class="article-card">
        <h3>Правила</h3>
        <a href="#" class="btn-card">Перейти в статью</a>
      </div>
    </div>
  </section>

  <section class="features-section">
    <div class="features-grid">
      <div class="feature-card card-community">
        <h3>Комьюнити</h3>
        <p>Мы прилагаем все усилия, чтобы поддерживать наше сообщество комфортным и дружным!</p>
        <img class="card-img" src="_10.png" alt="Комьюнити" />
      </div>

      <div class="feature-card card-vanilla">
        <h3>Ванильность</h3>
        <p>Классический игровой процесс без лишних модов.</p>
        <img class="card-img" src="grass-block-10.png" alt="Блок травы" />
      </div>

      <div class="feature-card card-possibilities">
        <h3>Безграничные возможности</h3>
        <p>Реализуй любые масштабные проекты и идеи вместе с нами.</p>
      </div>

      <div class="feature-card card-events">
        <h3>Ивенты</h3>
        <p>Регулярные серверные события.</p>
        <img class="card-img" src="blue-geode-crystal-10.png" alt="Кристалл" />
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
</ClientOnly>