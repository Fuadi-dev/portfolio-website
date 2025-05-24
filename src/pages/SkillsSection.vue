<script setup>
import { useAnimation } from '../composables/useAnimation';
import { ref, onMounted } from 'vue';

const skills = [
  { name: "HTML", percentage: 95 },
  { name: "Laravel", percentage: 90 },
  { name: "Flutter", percentage: 85 },
  { name: "Vue.js", percentage: 80 },
  { name: "React", percentage: 75 },
  { name: "Tailwindcss", percentage: 70 },
  { name: "PHP", percentage: 80 },
  { name: "MySQL", percentage: 90 }
];

const animateSkills = ref(false);

// Inisialisasi animasi
useAnimation();

onMounted(() => {
  // Tingkatkan delay untuk memastikan element sudah di-render
  setTimeout(() => {
    animateSkills.value = true;
  }, 1000); 
});
</script>

<template>
  <section id="skills" class="skills">
    <div class="container">
      <div class="section-title animate fade-in">
        <h2>Keahlian Saya</h2>
      </div>
      
      <div class="skills-content">
        <div class="skills-description animate slide-in-left">
          <h3>Pengalaman & Keahlian</h3>
          <p>
            Saya telah mengembangkan berbagai aplikasi web dan mobile dengan teknologi modern.
            Berikut adalah keahlian teknis yang saya miliki dalam pengembangan web dan mobile.
          </p>
        </div>
        
        <div class="skills-bars">
          <div 
            v-for="(skill, index) in skills" 
            :key="index" 
            class="skill-item animate fade-in"
            :class="'delay-' + (index % 7 + 1)"
          >
            <div class="skill-header">
              <h4>{{ skill.name }}</h4>
              <h4>{{ skill.percentage }}%</h4>
            </div>
            <div class="skill-bar">
              <div 
                class="skill-percentage" 
                :style="{
                  width: animateSkills ? `${skill.percentage}%` : '0%',
                  backgroundColor: `var(--primary-color)`
                }"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills {
  background-color: #f8fafc;
}

.skills-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
}

.skills-description h3 {
  margin-bottom: 1rem;
}

.skills-description p {
  line-height: 1.8;
}

.skills-bars {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.skill-item {
  margin-bottom: 1.5rem;
}

.skill-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.skill-header h4 {
  margin: 0;
  font-size: 1rem;
  font-weight: 500;
}

.skill-bar {
  width: 100%;
  height: 10px;
  background-color: #e2e8f0;
  border-radius: 10px;
  overflow: hidden;
}

.skill-percentage {
  height: 100%;
  border-radius: 10px;
  position: relative;
  transition: width 1.5s cubic-bezier(0.17, 0.67, 0.83, 0.67);
}

@keyframes progressAnimation {
  0% { width: 0%; }
  100% { width: var(--target-width); }
}

@media (max-width: 900px) {
  .skills-content {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .skills-bars {
    grid-template-columns: 1fr;
  }
}

@media (prefers-color-scheme: dark) {
  .skills {
    background-color: #1e293b;
  }
  
  .skill-bar {
    background-color: #334155;
  }
}
</style>