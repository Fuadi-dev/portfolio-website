import { onMounted, onUnmounted } from 'vue';

export function useAnimation() {
  let observers = [];

  onMounted(() => {
    const animatedElements = document.querySelectorAll('.animate');
    
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('appear');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      
      animatedElements.forEach(el => {
        observer.observe(el);
      });
      
      observers.push(observer);
    } else {
      // Fallback for browsers without Intersection Observer
      animatedElements.forEach(el => {
        el.classList.add('appear');
      });
    }
  });
  
  onUnmounted(() => {
    observers.forEach(observer => {
      if (observer && observer.disconnect) {
        observer.disconnect();
      }
    });
  });
  
  return {};
}