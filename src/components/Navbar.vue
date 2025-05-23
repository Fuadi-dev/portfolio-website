<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isMenuOpen = ref(false);
const scrolled = ref(false);
const activeSection = ref('home'); // Default to home section

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const checkScroll = () => {
  scrolled.value = window.scrollY > 50;
};

const navItems = [
  { text: 'Beranda', href: '#home', id: 'home' },
  { text: 'Tentang Saya', href: '#about', id: 'about' },
  { text: 'Keahlian', href: '#skills', id: 'skills' },
  { text: 'Prestasi', href: '#achievements', id: 'achievements' },
  { text: 'Projek', href: '#projects', id: 'projects' },
  { text: 'Kontak', href: '#contact', id: 'contact' },
];

// Tambahkan fungsi debounce di atas onMounted
const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

onMounted(() => {
  window.addEventListener('scroll', checkScroll);
  
  // Setup Intersection Observer untuk mendeteksi section yang aktif
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // Turunkan threshold menjadi 0.1 (10%) agar lebih responsif
      if (entry.isIntersecting) {
        activeSection.value = entry.target.id;
        console.log('Aktif:', entry.target.id);
      }
    });
  }, {
    rootMargin: '-5% 0px -5% 0px', // Perbesar area observasi
    threshold: [0.05] // Turunkan threshold secara signifikan
  });
  
  // Observe semua section yang ada di navItems
  navItems.forEach(item => {
    const section = document.getElementById(item.id);
    if (section) {
      sectionObserver.observe(section);
    }
  });

  // Dalam onMounted, tambahkan pendekatan scroll manual dengan debounce
  const handleScroll = debounce(() => {
    // Ambil posisi scroll saat ini
    const scrollPosition = window.scrollY + window.innerHeight / 3;
    
    // Cek setiap section
    for (let i = navItems.length - 1; i >= 0; i--) {
      const section = document.getElementById(navItems[i].id);
      if (section) {
        const offsetTop = section.offsetTop;
        
        // Jika posisi scroll lebih dari posisi section, set sebagai aktif
        if (scrollPosition >= offsetTop) {
          activeSection.value = navItems[i].id;
          break;
        }
      }
    }
  }, 50); // 50ms debounce

  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll);
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <nav class="navbar" :class="{ 'scrolled': scrolled }">
    <div class="container navbar-container">
      <div class="navbar-logo">
        <a href="#home" class="gradient-text">Portfolio<span class="dot">.</span></a>
      </div>

      <div class="menu-icon" @click="toggleMenu">
        <i class="fas" :class="isMenuOpen ? 'fa-times' : 'fa-bars'"></i>
      </div>

      <ul class="navbar-menu" :class="{ 'active': isMenuOpen }">
        <li v-for="(item, index) in navItems" :key="index" 
            :class="{ 'active': activeSection === item.id }">
          <a :href="item.href" @click="isMenuOpen = false">{{ item.text }}</a>
        </li>
        <li class="nav-button">
          <a href="#contact" class="contact-btn">Hubungi Saya</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(17, 24, 39, 0.8); /* Warna gelap dengan opacity */
  backdrop-filter: blur(10px);
  z-index: 1000;
  padding: 1rem 0;
  transition: all 0.3s ease;
}

.navbar.scrolled {
  padding: 0.7rem 0;
  background-color: rgba(17, 24, 39, 0.95);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.navbar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar-logo a {
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: -0.5px;
}

.dot {
  color: var(--accent-color);
  font-size: 2rem;
}

.navbar-menu {
  display: flex;
  align-items: center;
  list-style: none;
}

.navbar-menu li {
  margin-left: 2rem;
}

.navbar-menu a {
  color: var(--light-color);
  font-weight: 500;
  position: relative;
  transition: all 0.3s ease;
}

.navbar-menu a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -5px;
  width: 0;
  height: 2px;
  background: var(--gradient-primary);
  transition: width 0.3s ease;
  border-radius: 1px;
}

.navbar-menu a:hover {
  color: var(--primary-color);
}

.navbar-menu a:hover::after {
  width: 100%;
}

.nav-button {
  margin-left: 1.5rem;
}

.contact-btn {
  background: var(--gradient-accent);
  color: white !important;
  padding: 0.6rem 1.2rem;
  border-radius: 50px;
  box-shadow: 0 4px 10px rgba(249, 115, 22, 0.3);
  transition: all 0.3s ease;
}

.contact-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(249, 115, 22, 0.4);
}

.contact-btn::after {
  display: none;
}

.menu-icon {
  display: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--light-color);
}

@media (max-width: 768px) {
  .menu-icon {
    display: block;
  }

  .navbar-menu {
    position: fixed;
    top: 70px;
    left: -100%;
    width: 100%;
    flex-direction: column;
    background-color: rgba(17, 24, 39, 0.97);
    backdrop-filter: blur(10px);
    padding: 2rem 0;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }

  .navbar-menu.active {
    left: 0;
  }

  .navbar-menu li {
    margin: 1rem 0;
    text-align: center;
  }
  
  .nav-button {
    margin: 1.5rem 0;
  }
}

/* Styling untuk menu item yang aktif */
.navbar-menu li.active a {
  color: var(--primary-color);
}

.navbar-menu li.active a::after {
  width: 100%;
}
</style>