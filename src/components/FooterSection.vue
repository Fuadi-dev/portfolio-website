<script setup>
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-logo">
          <h2>Portfolio.</h2>
          <p>Website portfolio modern dibuat dengan Vue.js</p>
          <div class="social-icons">
            <a href="https://github.com/Fuadi-dev" target="_blank"><i class="fab fa-github"></i></a>
            <a href="https://wa.me/6282328605554" target="_blank"><i class="fab fa-whatsapp"></i></a>
            <a href="https://www.instagram.com/da.1yan/" target="_blank"><i class="fab fa-instagram"></i></a>
            <a href="https://t.me/+6228328605554" target="_blank"><i class="fab fa-telegram"></i></a>
          </div>
        </div>
        
        <div class="footer-links">
          <div class="footer-col">
            <h3>Menu</h3>
            <ul>
              <li><a href="#home">Beranda</a></li>
              <li><a href="#about">Tentang Saya</a></li>
              <li><a href="#skills">Keahlian</a></li>
              <li><a href="#achievements">Prestasi</a></li>
              <li><a href="#projects">Projek</a></li>
              <li><a href="#contact">Kontak</a></li>
            </ul>
          </div>
          
          <div class="footer-col">
            <h3>Layanan</h3>
            <ul>
              <li><a href="#">Web Development</a></li>
              <li><a href="#">UI/UX Design</a></li>
              <li><a href="#">Mobile App Development</a></li>
              <li><a href="#">SEO Optimization</a></li>
            </ul>
          </div>
          
          <div class="footer-col">
            <h3>Kontak</h3>
            <ul class="footer-contact">
              <li><i class="fas fa-map-marker-alt"></i> Yogyakarta, Indonesia</li>
              <li><i class="fas fa-envelope"></i> daiyannurfuadi@gmail.com</li>
              <li><i class="fas fa-phone-alt"></i> +62 823 2860 5554</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} Portfolio Website. All Rights Reserved.</p>
        <p>Made with <i class="fas fa-heart"></i> by Fuadi-Developer</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #0f172a;
  color: #e2e8f0;
  padding: 5rem 0 2rem;
}

.footer-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

.footer-logo h2 {
  font-size: 2rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.footer-logo p {
  margin-bottom: 1.5rem;
  opacity: 0.8;
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
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 1.2rem;
  transition: all 0.3s ease;
}

.social-icons a:hover {
  background: var(--primary-color);
  transform: translateY(-3px);
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.footer-col h3 {
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
  position: relative;
}

.footer-col h3::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -10px;
  width: 30px;
  height: 2px;
  background-color: var(--primary-color);
}

.footer-col ul {
  list-style: none;
}

.footer-col ul li {
  margin-bottom: 0.8rem;
}

.footer-col ul li a {
  color: #e2e8f0;
  opacity: 0.8;
  transition: all 0.3s ease;
}

.footer-col ul li a:hover {
  color: var(--primary-color);
  opacity: 1;
  padding-left: 5px;
}

.footer-contact li {
  display: flex;
  align-items: center;
  gap: 0.7rem;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 2rem;
  text-align: center;
}

.footer-bottom p {
  margin-bottom: 0.5rem;
  opacity: 0.7;
}

.footer-bottom i {
  color: #ef4444;
}

@media (max-width: 900px) {
  .footer-content {
    grid-template-columns: 1fr;
  }
  
  .footer-links {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 600px) {
  .footer-links {
    grid-template-columns: 1fr;
  }
}
</style>