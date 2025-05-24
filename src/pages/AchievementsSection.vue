<script setup>
import { useAnimation } from '../composables/useAnimation';

const achievements = [
  {
    title: "Juara 2 LKS Web Technology",
    category: "Tingkat Provinsi DIY",
    year: "2025",
    icon: "fa-trophy",
    color: "primary"
  },
  {
    title: "Juara 2 Pencak Silat",
    category: "Bupati Sleman Cup IV",
    year: "2023",
    icon: "fa-medal",
    color: "secondary"
  },
  {
    title: "Juara 3 MHQ",
    category: "Tingkat Kecamatan Bantul",
    year: "2024",
    icon: "fa-award",
    color: "tertiary"
  },
];

// Inisialisasi animasi
useAnimation();
</script>

<template>
  <section id="achievements" class="achievements">
    <div class="container">
      <div class="section-title animate fade-in">
        <h2><span class="accent-gradient-text">Prestasi</span> Saya</h2>
      </div>
      
      <div class="achievements-cards">
        <div 
          v-for="(achievement, index) in achievements" 
          :key="index" 
          class="achievement-card animate scale-up" 
          :class="[
            `achievement-${achievement.color}`,
            `delay-${index + 1}`
          ]"
        >
          <div class="achievement-icon">
            <i :class="['fas', achievement.icon]"></i>
          </div>
          <div class="achievement-content">
            <h3>{{ achievement.title }}</h3>
            <p class="achievement-category">{{ achievement.category }}</p>
            <p class="achievement-year">{{ achievement.year }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.achievements {
  background-color: #f8fafc;
  padding: 8rem 0; /* Tambah padding vertikal */
  min-height: 60vh; /* Pastikan section cukup tinggi */
}

/* Tambahkan padding juga pada containers */
.container {
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.achievements-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.achievement-card {
  background-color: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  border-bottom: 5px solid transparent;
}

.achievement-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 5px;
  height: 100%;
  transition: all 0.3s ease;
}

.achievement-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.achievement-primary {
  border-bottom-color: var(--primary-color);
}

.achievement-primary::before {
  background-color: var(--primary-color);
}

.achievement-secondary {
  border-bottom-color: var(--accent-color);
}

.achievement-secondary::before {
  background-color: var(--accent-color);
}

.achievement-tertiary {
  border-bottom-color: #8b5cf6;
}

.achievement-tertiary::before {
  background-color: #8b5cf6;
}

.achievement-quaternary {
  border-bottom-color: #10b981;
}

.achievement-quaternary::before {
  background-color: #10b981;
}

.achievement-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  flex-shrink: 0;
  background: var(--gradient-primary);
  color: white;
  box-shadow: 0 5px 15px rgba(59, 130, 246, 0.3);
}

.achievement-secondary .achievement-icon {
  background: var(--gradient-accent);
  box-shadow: 0 5px 15px rgba(249, 115, 22, 0.3);
}

.achievement-tertiary .achievement-icon {
  background: linear-gradient(135deg, #8b5cf6, #6366f1);
  box-shadow: 0 5px 15px rgba(139, 92, 246, 0.3);
}

.achievement-quaternary .achievement-icon {
  background: linear-gradient(135deg, #10b981, #059669);
  box-shadow: 0 5px 15px rgba(16, 185, 129, 0.3);
}

.achievement-content h3 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.achievement-category {
  font-size: 0.95rem;
  color: var(--gray-color);
  margin-bottom: 0.5rem;
}

.achievement-year {
  display: inline-block;
  padding: 0.2rem 0.8rem;
  border-radius: 100px;
  background-color: rgba(59, 130, 246, 0.1);
  color: var(--primary-color);
  font-size: 0.8rem;
  font-weight: 500;
}

.achievement-secondary .achievement-year {
  background-color: rgba(249, 115, 22, 0.1);
  color: var(--accent-color);
}

.achievement-tertiary .achievement-year {
  background-color: rgba(139, 92, 246, 0.1);
  color: #8b5cf6;
}

.achievement-quaternary .achievement-year {
  background-color: rgba(16, 185, 129, 0.1);
  color: #10b981;
}

@media (max-width: 768px) {
  .achievements-cards {
    grid-template-columns: 1fr;
  }
}

@media (prefers-color-scheme: dark) {
  .achievements {
    background-color: #1e293b;
  }
  
  .achievement-card {
    background-color: #0f172a;
  }
  
  .achievement-category {
    color: #94a3b8;
  }
}
</style>