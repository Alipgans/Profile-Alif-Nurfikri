<template>
  <section id="section-2" class="section-two" ref="bgChange">
    <div class="container">
      
      <div class="text-content" ref="textContent">
        <h2 class="title">Enjoy Your Journey</h2>
        <p>Eksplorasi rekam jejak, latar belakang akademik, dan keahlian yang telah dikembangkan.</p>
      </div>
      
      <div class="grid-images">
        
        <div class="img-card-wrapper" ref="card1">
          <div class="img-card">
            <img src="@/assets/images/design1.png" alt="Pengalaman Kerja">
            <div class="card-overlay">
              <h3>Work Experience</h3>
            </div>
          </div>
          <a href="#section-pengalaman" @click.prevent="scrollToSection('#section-pengalaman')" class="btn-card-action">
            View Experience <span class="icon">→</span>
          </a>
        </div>
        
        <div class="img-card-wrapper" ref="card2">
          <div class="img-card">
            <img src="@/assets/images/design2.jpg" alt="Pendidikan">
            <div class="card-overlay">
              <h3>Portofolio</h3>
            </div>
          </div>
          <a href="#section-pendidikan" @click.prevent="scrollToSection('#section-pendidikan')" class="btn-card-action">
            View Portofolio <span class="icon">→</span>
          </a>
        </div>

        <div class="img-card-wrapper" ref="card3">
          <div class="img-card">
            <img src="@/assets/images/design3.jpg" alt="Pelatihan">
            <div class="card-overlay">
              <h3>Training</h3>
            </div>
          </div>
          <a href="#section-pelatihan" @click.prevent="scrollToSection('#section-pelatihan')" class="btn-card-action">
            View Training <span class="icon">→</span>
          </a>
        </div>

      </div>

    </div>
  </section>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin"; // Fix: Impor ScrollToPlugin

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default {
  mounted() {
    this.initAnimations();
  },
  methods: {
    initAnimations() {
      // Efek Perubahan Warna Background
      gsap.to(this.$refs.bgChange, {
        scrollTrigger: {
          trigger: this.$refs.bgChange,
          start: "top center",
          end: "bottom center",
          toggleActions: "play reverse play reverse",
        },
        backgroundColor: "#1a1a1a",
        duration: 0.8
      });

      // Efek Stagger memunculkan ketiga wrapper card
      gsap.from([this.$refs.card1, this.$refs.card2, this.$refs.card3], {
        scrollTrigger: {
          trigger: this.$refs.bgChange,
          start: "top 60%",
        },
        y: 100,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out"
      });
    },
    // Fix: Method untuk handle smooth scroll presisi tanpa memantul balik ke atas
    scrollToSection(targetId) {
      gsap.to(window, {
        duration: 1,
        scrollTo: {
          y: targetId,
          offsetY: 0 // Ubah nilainya (misal: 70) jika Anda memiliki navbar atas yang fixed
        },
        ease: "power3.inOut"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.section-two {
  min-height: 100vh;
  padding: 100px 0;
  background-color: #ffffff; 
  transition: background-color 0.5s ease;
  display: flex;
  align-items: center;

  &[style*="background-color: rgb(26, 26, 26)"] {
    .container { color: #ffffff; }
    .text-content p { color: #ccc; }
  }

  .container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    color: #333;
    transition: color 0.5s ease;
  }

  .text-content {
    text-align: center;
    margin-bottom: 60px;
    
    .title { 
      font-size: 3rem; 
      font-weight: 700;
      margin-bottom: 10px;
    }
    p {
      font-size: 1.1rem;
      color: #666;
    }
  }

  .grid-images {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;

    .img-card-wrapper {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .img-card {
      position: relative;
      height: 380px;
      background: #eee;
      border-radius: 15px;
      overflow: hidden;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);

      img { 
        width: 100%; 
        height: 100%; 
        object-fit: cover; 
        transition: transform 0.5s ease;
      }

      .card-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 10%, rgba(0, 0, 0, 0.1) 100%);
        display: flex;
        align-items: flex-end;
        padding: 25px;
        
        h3 {
          color: #ffffff;
          font-size: 1.4rem;
          font-weight: 600;
          margin: 0;
        }
      }

      &:hover {
        img { transform: scale(1.05); }
      }
    }

    .btn-card-action {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 12px 20px;
      background-color: #00adb5;
      color: #ffffff;
      text-decoration: none;
      font-weight: 600;
      font-size: 0.95rem;
      border-radius: 10px;
      box-shadow: 0 4px 15px rgba(0, 173, 181, 0.2);
      transition: all 0.3s ease;

      .icon { transition: transform 0.3s ease; }

      &:hover {
        background-color: #008c92;
        box-shadow: 0 8px 20px rgba(0, 173, 181, 0.35);
        .icon { transform: translateX(4px); }
      }
    }

    @media (max-width: 992px) {
      grid-template-columns: 1fr;
      gap: 40px;
    }
  }
}
</style>