<script setup>
import { useAnimation } from '../composables/useAnimation';

const projects = [
  {
    title: "E-Commerce Website",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=500&q=80",
    description: "Website e-commerce dengan fitur pembayaran dan pengelolaan produk. Dilengkapi dengan cart system, pembayaran online, dan dashboard admin untuk inventori.",
    technologies: ["Laravel", "Tailwindcss", "MySQL"],
    link: "https://github.com/Fuadi-dev/toko-online",
  },
  {
    title: "Portfolio Website",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=500&q=80",
    description: "Website portfolio personal untuk menampilkan karya dan skill. Dibangun dengan Vue.js dengan animasi menarik dan tampilan yang responsif untuk semua device.",
    technologies: ["HTML", "CSS", "Vue.js"],
    link: "https://github.com/Fuadi-dev/portfolio-website",
  },
  {
    title: "To-Do List App",
    category: "Website and Mobile App",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=500&q=80",
    description: "Aplikasi manajemen tugas dengan fitur notifikasi, pengaturan prioritas, deadline, dan kategori tugas. Tersedia dalam versi web dan mobile.",
    technologies: ["Flutter", "Laravel", "MySQL"],
    link: "https://github.com/Fuadi-dev/To-Do-List",
  },
  {
    title: "Game Management System",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=500&q=80",
    description: "Platform distribution game dengan sistem manajemen untuk developer. Fitur utama termasuk upload game, analitik pengguna, sistem review, dan monetisasi konten.",
    technologies: ["React.js", "Laravel", "MySQL"],
    link: "https://github.com/Fuadi-dev/Game-Browser",
  },
  {
    title: "Cashier Application System",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=500&q=80",
    description: "Sistem kasir POS (Point of Sale) dengan fitur manajemen stok, pemrosesan transaksi, laporan penjualan, dan integrasi printer struk. Dioptimalkan untuk usaha kecil dan menengah.",
    technologies: ["Laravel", "Javascript", "MySQL"],
    link: "https://github.com/Fuadi-dev/sistem-aplikasi-kasir",
  },
  {
    title: "Ticket Booking System",
    category: "Web and Mobile App",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=500&q=80",
    description: "Platform pemesanan tiket online dengan fitur pemilihan kursi, pembayaran digital, dan QR code untuk tiket elektronik. Diterapkan untuk event, transportasi, dan bioskop.",
    technologies: ["Flutter", "Laravel", "MySQL"],
    link: "https://github.com/Fuadi-dev/piknikin",
  },
];

// Inisialisasi animasi
useAnimation();
</script>

<template>
  <section id="projects" class="projects">
    <div class="container">
      <div class="section-title animate fade-in">
        <h2>Projek Saya</h2>
      </div>
      
      <div class="projects-grid">
        <div 
          v-for="(project, index) in projects" 
          :key="index" 
          class="project-card animate fade-in"
          :class="`delay-${Math.min(index + 1, 8)}`"
        >
          <div class="project-img">
            <img :src="project.image" :alt="project.title">
          </div>
          <div class="project-info">
            <h3>{{ project.title }}</h3>
            <span class="project-category">{{ project.category }}</span>
            <p>{{ project.description }}</p>
            <div class="project-technologies">
              <span v-for="(tech, techIndex) in project.technologies" :key="techIndex">
                {{ tech }}
              </span>
            </div>
            <a :href="project.link" class="project-link" target="_blank">
              Lihat Projek <i class="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.project-card {
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  background: white;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

.project-img {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.project-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.5s ease;
}

.project-card:hover .project-img img {
  transform: scale(1.1);
}

.project-info {
  padding: 1.5rem;
}

.project-info h3 {
  margin-bottom: 0.5rem;
}

.project-category {
  display: inline-block;
  background-color: rgba(14, 165, 233, 0.1);
  color: var(--primary-color);
  font-size: 0.8rem;
  padding: 0.3rem 0.7rem;
  border-radius: 2rem;
  margin-bottom: 1rem;
}

.project-info p {
  margin-bottom: 1rem;
  color: var(--gray-color);
  font-size: 0.9rem;
}

.project-technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.project-technologies span {
  font-size: 0.8rem;
  background-color: #f1f5f9;
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  font-weight: 500;
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
}

.project-link i {
  transition: transform 0.3s ease;
}

.project-link:hover i {
  transform: translateX(5px);
}

@media (prefers-color-scheme: dark) {
  .project-card {
    background: #1e293b;
  }
  
  .project-technologies span {
    background-color: #334155;
    color: #e2e8f0;
  }
  
  .project-info p {
    color: #cbd5e1;
  }
}
</style>