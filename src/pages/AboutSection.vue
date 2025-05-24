<script setup>
import { useAnimation } from '../composables/useAnimation';

const aboutData = {
  name: "Daiyan Nur Fuadi",
  title: "Web and Mobile Developer",
  bio: "Saya adalah seorang web and mobile developer. Saya memiliki keahlian dalam Vue.js, React, Laravel, PHP, dan Flutter. Saya senang membuat aplikasi yang tidak hanya fungsional tetapi juga memiliki antarmuka yang menarik dan mudah digunakan.",
  birthDate: "30 Juni 2008",
  email: "daiyannurfuadi@gmail.com",
  phone: "+62-823-2860-5554",
  location: "Yogyakarta, Indonesia",
  education: "SMK Jurusan RPL",
  languages: ["Indonesia", "Inggris"]
};

// Inisialisasi animasi
useAnimation();
</script>

<template>
  <section id="about" class="about">
    <div class="container">
      <div class="section-title animate fade-in">
        <h2><span class="gradient-text">Tentang</span> Saya</h2>
      </div>
      
      <div class="about-content">
        <div class="about-img animate slide-in-left">
          <div class="placeholder-image">
            <img src="../assets/profile/profile.jpeg" alt="">
          </div>
        </div>
        
        <div class="about-text">
          <h3 class="animate fade-in">Saya adalah <span>{{ aboutData.title }}</span> berbasis di {{ aboutData.location }}</h3>
          <p class="animate fade-in delay-1">{{ aboutData.bio }}</p>
          
          <div class="about-info">
            <div class="info-item animate fade-in delay-2">
              <p>Nama: <span>{{ aboutData.name }}</span></p>
            </div>
            <div class="info-item animate fade-in delay-3">
              <p>Email: <span>{{ aboutData.email }}</span></p>
            </div>
            <div class="info-item animate fade-in delay-4">
              <p>Telepon: <span>{{ aboutData.phone }}</span></p>
            </div>
            <div class="info-item animate fade-in delay-5">
              <p>Lokasi: <span>{{ aboutData.location }}</span></p>
            </div>
            <div class="info-item animate fade-in delay-6">
              <p>Pendidikan: <span>{{ aboutData.education }}</span></p>
            </div>
            <div class="info-item animate fade-in delay-7">
              <p>Bahasa: <span>{{ aboutData.languages.join(", ") }}</span></p>
            </div>
          </div>
          
          <div class="about-buttons animate fade-in delay-8">
            <a href="#" class="btn primary">Download CV</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-content {
  display: flex;
  gap: 3rem;
  align-items: center;
}

.about-img {
  flex: 1;
}

.placeholder-image {
  width: 100%;
  aspect-ratio: 1/1;
  max-width: 400px;
  border-radius: 12px;
  background-color: #f1f5f9;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-color);
  box-shadow: 0 15px 30px rgba(59, 130, 246, 0.2);
  overflow: hidden; /* Penting: mencegah gambar keluar dari container */
  transition: all 0.3s ease;
  position: relative;
  border: none; /* hapus border biasa */
  padding: 4px; /* tambahkan padding untuk gradient */
  background: var(--gradient-primary); /* gunakan gradient sebagai background */
}

.placeholder-image::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--dark-color);
  border-radius: 8px;
  z-index: 0;
}

.placeholder-image img {
  position: relative;
  z-index: 1;
  border-radius: 8px;
  width: 100%;
  height: 100%;
  object-fit: cover; 
  display: block;
}

.placeholder-image:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(59, 130, 246, 0.3);
}

.about-text {
  flex: 1;
}

.about-text h3 {
  margin-bottom: 1rem;
}

.about-text h3 span {
  color: var(--primary-color);
}

.about-text p {
  margin-bottom: 1.5rem;
  line-height: 1.8;
}

.about-info {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
}

.info-item p {
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
}

.info-item span {
  font-weight: 500;
  margin-left: 0.5rem;
}

.about-buttons {
  margin-top: 1rem;
}

@media (max-width: 900px) {
  .about-content {
    flex-direction: column;
  }
  
  .about-img {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  
  .placeholder-image {
    max-width: 300px;
  }
}

@media (max-width: 600px) {
  .about-info {
    grid-template-columns: 1fr;
  }
}

@media (prefers-color-scheme: dark) {
  .placeholder-image {
    background-color: #1e293b;
    border-color: var(--primary-color);
  }
}

.section-title h2 {
  position: relative;
  display: inline-block;
  padding-bottom: 15px;
}

.section-title h2::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 4px;
  background: var(--gradient-primary);
  border-radius: 2px;
}
</style>