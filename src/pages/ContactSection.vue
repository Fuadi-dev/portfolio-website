<script setup>
import { ref } from 'vue';

const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const isSubmitting = ref(false);
const submitSuccess = ref(false);
const submitError = ref(false);

const submitForm = () => {
  isSubmitting.value = true;
  
  // Simulasi pengiriman form
  setTimeout(() => {
    isSubmitting.value = false;
    submitSuccess.value = true;
    
    // Reset form
    formData.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
    
    // Reset success message setelah beberapa detik
    setTimeout(() => {
      submitSuccess.value = false;
    }, 5000);
  }, 1500);
};
</script>

<template>
  <section id="contact" class="contact">
    <div class="container">
      <div class="section-title">
        <h2>Hubungi Saya</h2>
      </div>
      
      <div class="contact-content">
        <div class="contact-info">
          <div class="contact-card">
            <i class="fas fa-map-marker-alt"></i>
            <h3>Lokasi</h3>
            <p>Yogyakarta, Indonesia</p>
          </div>
          <div class="contact-card">
            <i class="fas fa-envelope"></i>
            <h3>Email</h3>
            <p>daiyannurfuadi
              @gmail.com</p>
          </div>
          <div class="contact-card">
            <i class="fas fa-phone-alt"></i>
            <h3>Telepon</h3>
            <p>+62 823 2860 5554</p>
          </div>
          <div class="contact-card">
            <i class="fas fa-clock"></i>
            <h3>Jam Kerja</h3>
            <p>Senin - Jumat: 08:00 - 17:00</p>
          </div>
        </div>
        
        <div class="contact-form">
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <input 
                type="text" 
                v-model="formData.name" 
                placeholder="Nama Anda"
                required
              >
            </div>
            <div class="form-group">
              <input 
                type="email" 
                v-model="formData.email" 
                placeholder="Email Anda"
                required
              >
            </div>
            <div class="form-group">
              <input 
                type="text" 
                v-model="formData.subject" 
                placeholder="Subjek"
                required
              >
            </div>
            <div class="form-group">
              <textarea 
                v-model="formData.message" 
                placeholder="Pesan Anda"
                rows="5"
                required
              ></textarea>
            </div>
            <div class="form-submit">
              <button type="submit" :disabled="isSubmitting">
                <span v-if="isSubmitting">
                  <i class="fas fa-spinner fa-spin"></i> Mengirim...
                </span>
                <span v-else>Kirim Pesan</span>
              </button>
            </div>
            <div v-if="submitSuccess" class="submit-success">
              <p><i class="fas fa-check-circle"></i> Pesan berhasil dikirim! Terima kasih.</p>
            </div>
            <div v-if="submitError" class="submit-error">
              <p><i class="fas fa-times-circle"></i> Terjadi kesalahan. Silakan coba lagi.</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  background-color: #f8fafc;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
}

.contact-info {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.contact-card {
  background-color: white;
  padding: 2rem 1.5rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: all 0.3s ease;
}

.contact-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.contact-card i {
  font-size: 2rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.contact-card h3 {
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.contact-card p {
  color: var(--gray-color);
}

.contact-form {
  background-color: white;
  padding: 3rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 5px;
  font-family: inherit;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.1);
}

.form-submit button {
  width: 100%;
  padding: 1rem;
  border-radius: 5px;
}

.submit-success {
  margin-top: 1rem;
  padding: 0.8rem;
  background-color: rgba(34, 197, 94, 0.1);
  color: #22c55e;
  border-radius: 5px;
}

.submit-error {
  margin-top: 1rem;
  padding: 0.8rem;
  background-color: rgba(239, 68, 68, 0.1);
  color: #ef4444;
  border-radius: 5px;
}

@media (max-width: 900px) {
  .contact-content {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .contact-info {
    grid-template-columns: 1fr;
  }
  
  .contact-form {
    padding: 2rem;
  }
}

@media (prefers-color-scheme: dark) {
  .contact {
    background-color: #1e293b;
  }
  
  .contact-card {
    background-color: #0f172a;
  }
  
  .contact-form {
    background-color: #0f172a;
  }
  
  .form-group input,
  .form-group textarea {
    background-color: #1e293b;
    border-color: #334155;
    color: #e2e8f0;
  }
  
  .contact-card p {
    color: #94a3b8;
  }
}
</style>