<script setup>
import NavBar from './components/Navbar.vue';
import HeroSection from './pages/HeroSection.vue';
import AboutSection from './pages/AboutSection.vue';
import SkillsSection from './pages/SkillsSection.vue';
import AchievementsSection from './pages/AchievementsSection.vue';
import ProjectsSection from './pages/ProjectsSection.vue';
import ContactSection from './pages/ContactSection.vue';
import FooterSection from './components/FooterSection.vue';

// Import animasi
import './assets/animations.css';
</script>

<template>
  <NavBar />
  <main>
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <AchievementsSection />
    <ProjectsSection />
    <ContactSection />
  </main>
  <FooterSection />
</template>

<style scoped>
main {
  min-height: 100vh;
}
</style>
