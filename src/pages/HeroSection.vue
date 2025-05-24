<script setup>
import { ref, onMounted } from 'vue';
import { useAnimation } from '../composables/useAnimation';

const name = "Daiyan Nur Fuadi";
const title = ref("Web Developer");
const titles = ["Web Developer", "Mobile Developer", "Full-Stack Developer", "UI/UX Designer", "Software Engineer"];
let currentIndex = 0;

// Inisialisasi animasi
useAnimation();

onMounted(() => {
  setInterval(() => {
    currentIndex = (currentIndex + 1) % titles.length;
    title.value = titles[currentIndex];
  }, 3000);
});
</script>

<template>
  <section id="home" class="hero">
    <div class="overlay"></div>
    <div class="container hero-container">
      <div class="hero-content">
        <h1 class="animate fade-in">Halo, Saya <span class="accent-gradient-text">{{ name }}</span></h1>
        <h2 class="animate fade-in delay-1">Saya seorang <span class="typing gradient-text">{{ title }}</span></h2>
        <p class="animate fade-in delay-2">Selamat datang di portfolio website saya. Saya membangun aplikasi web modern dengan performa tinggi dan antarmuka yang menarik.</p>
        <div class="hero-buttons animate fade-in delay-3">
          <a href="#contact" class="btn primary">Hubungi Saya</a>
          <a href="#projects" class="btn secondary">Lihat Karya</a>
        </div>
        <div class="social-icons animate fade-in delay-4">
          <a href="https://github.com/Fuadi-dev" target="_blank" class="github"><i class="fab fa-github"></i></a>
          <a href="https://wa.me/6282328605554" target="_blank" class="whatsapp"><i class="fab fa-whatsapp"></i></a>
          <a href="https://www.instagram.com/da.1yan?igsh=MWxnYTA2OTk0bGJyeQ==" target="_blank" class="instagram"><i class="fab fa-instagram"></i></a>
          <a href="https://t.me/+6282328605554" target="_blank" class="telegram"><i class="fab fa-telegram"></i></a>
        </div>
      </div>
      <div class="hero-image animate scale-up delay-2">
        <div class="hero-image-container">
          <div class="placeholder-image glow">
            <img src="../assets/profile/logo.png" alt="Avatar Daiyan Nur Fuadi" class="avatar-image" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding: 150px 0 80px;
  position: relative;
  background: var(--dark-color);
  overflow: hidden;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(17, 24, 39, 0.85) 0%, rgba(17, 24, 39, 0.95) 100%);
  z-index: 1;
}

.hero-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  position: relative;
  z-index: 2;
}

.hero-content {
  flex: 1;
}

.hero-content h1 {
  margin-bottom: 0.5rem;
  color: white;
}

.hero-content h2 {
  font-size: 2em;
  margin-bottom: 1rem;
  color: white;
}

.typing {
  font-weight: bold;
  position: relative;
}

.typing::after {
  content: "|";
  animation: blink 0.8s infinite;
}

.hero-content p {
  margin-bottom: 2rem;
  font-size: 1.1rem;
  max-width: 500px;
  color: var(--gray-color);
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
}

.btn {
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  font-weight: 500;
  transition: all 0.3s ease;
  display: inline-block;
}

.btn.primary {
  background: var(--gradient-accent);
  color: white;
  box-shadow: 0 4px 10px rgba(249, 115, 22, 0.3);
}

.btn.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(249, 115, 22, 0.4);
}

.btn.secondary {
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
}

.btn.secondary:hover {
  background: var(--primary-color);
  color: white;
  transform: translateY(-2px);
}

.social-icons {
  display: flex;
  gap: 1rem;
}

.social-icons a {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  transition: all 0.3s ease;
}

.github {
  background: #333;
}

.instagram {
  background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
}

.telegram {
  background: #0088cc; 
}

.whatsapp {
  background: #25D366; /* Warna resmi WhatsApp */
}

.social-icons a:hover {
  transform: translateY(-3px) rotate(5deg);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
}

.social-icons .telegram:hover {
  background: #0099e6; /* Warna Telegram yang sedikit lebih terang */
  transform: translateY(-3px) rotate(5deg);
  box-shadow: 0 6px 15px rgba(0, 136, 204, 0.3);
}

.hero-image {
  flex: 1;
  display: flex;
  justify-content: center;
}

.hero-image-container {
  width: 350px;
  height: 350px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(59, 130, 246, 0.3);
  border: 5px solid var(--primary-color);
  position: relative;
}

.placeholder-image {
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #1e293b, #334155);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 6rem;
  color: var(--primary-color);
}

.glow::before {
  content: '';
  position: absolute;
  top: -5%;
  left: -5%;
  width: 110%;
  height: 110%;
  background: var(--gradient-primary);
  z-index: -1;
  filter: blur(25px);
  opacity: 0.8;
  animation: pulse 3s infinite;
}

@keyframes pulse {
  0% { opacity: 0.4; transform: scale(0.98); }
  50% { opacity: 0.8; transform: scale(1.02); }
  100% { opacity: 0.4; transform: scale(0.98); }
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

@media (max-width: 900px) {
  .hero-container {
    flex-direction: column;
    text-align: center;
  }
  
  .hero-content p {
    margin: 0 auto 2rem;
  }
  
  .hero-buttons {
    justify-content: center;
  }
  
  .social-icons {
    justify-content: center;
  }
  
  .hero-image-container {
    width: 250px;
    height: 250px;
  }
}

.avatar-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.avatar-image[src$=".svg"] {
  padding: 10%; /* Memberi ruang di sekitar SVG */
}

/* Perbaiki glow untuk avatar */
.glow::before {
  content: '';
  position: absolute;
  top: -5%;
  left: -5%;
  width: 110%;
  height: 110%;
  background: var(--gradient-primary);
  z-index: -1;
  filter: blur(25px);
  opacity: 0.8;
  animation: pulse 3s infinite;
}
</style>