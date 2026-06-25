<template>
  <section class="hero">
    <div class="hero-content">
      <div class="hero-note">
        <img src="layers0.svg" alt="Иконка слоев" />
        <span>Не зевай-изучай!</span>
      </div>
      
      <h1 class="hero-title">
        Уникальный<br />
        Приватный сервер<br />
        Друзей
      </h1>
      <p class="hero-subtitle">Твори, создавай, выживай, веселись, находи новых друзей.</p>
      
      <div class="cta-group">
        <a href="#" class="btn btn-primary">
          <span>Присоединиться</span>
          <img src="group0.svg" alt="Иконка" style="width: 20px; height: 20px;" />
        </a>
        <button class="btn btn-secondary" @click="copyServerIP">
          <span>Скопировать IP</span>
        </button>
      </div>
    </div>
    
    <div class="hero-image-wrap">
      <img class="hero-image" src="6f86a0a5c50d171d.png" alt="Промо изображение сервера" />
    </div>
  </section>
</template>

<script setup>
function copyServerIP(event) {
  const buttonElement = event.currentTarget;
  const ipAddress = 'play.server.ru';
  
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