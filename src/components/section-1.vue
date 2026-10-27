<template>
  <section class="section-one" ref="sectionPin">
    <div class="container">
      
      <div class="image-wrapper" ref="imageWrapper">
        <img 
          src="@/assets/images/section1-bgg.jpeg" 
          alt="Project Plan" 
          class="parallax-img"
          ref="mainImage"
        />
      </div>

      <div class="content-box" ref="contentBox">
        <span class="tagline">Helloo! My Name is</span>
        <h1 class="title">Muhammad Alif Nurfikri</h1>
        <p class="description">
          Lulusan Teknik Informatika Universitas Al-Khairiyah. Memiliki pengalaman dalam pengelolaan data dan sistem administrasi berbasis teknologi, serta pengembangan aplikasi web menggunakan PHP dan MySQL. Terbiasa bekerja dengan HTML, CSS, JavaScript, dan pengelolaan database. Memiliki pengalaman proyek pengembangan sistem manajemen kompetisi sepak bola berbasis web sebagai tugas akhir. Terbiasa bekerja rapi, terstruktur, dan bertanggung jawab dalam lingkungan kerja berbasis sistem dan teknologi informasi.
        </p>
      </div>

    </div>
  </section>
</template>

<script>
import { gsap } from "gsap";

export default {
  name: "SectionOne",
  mounted() {
    // Jalankan animasi setelah komponen terpasang di DOM
    this.initGSAP();
  },
  methods: {
    initGSAP() {
      // 1. Animasi Pinning (Menahan section agar tidak bergeser saat di-scroll)
      gsap.to(this.$refs.sectionPin, {
        scrollTrigger: {
          trigger: this.$refs.sectionPin,
          start: "top top", 
          end: "+=100%",    
          pin: true,        
          scrub: 1          
        }
      });

      // 2. Animasi Gambar (Scale & Parallax)
      gsap.fromTo(this.$refs.mainImage, 
        { scale: 1.2 }, 
        {
          scale: 1,
          scrollTrigger: {
            trigger: this.$refs.sectionPin,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        }
      );

      // 3. Animasi Text Fade-In Up
      gsap.from(this.$refs.contentBox, {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: this.$refs.contentBox,
          start: "top 80%", // Animasi mulai saat teks muncul 80% dari bawah layar
          toggleActions: "play none none reverse" // Putar balik animasi jika scroll ke atas
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
/* Penggunaan SASS sesuai persyaratan [cite: 24] */
.section-one {
  position: relative;
  width: 100%;
  height: 100vh; // Full screen height
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000; // Background gelap agar teks putih terlihat kontras

  .container {
    position: relative;
    width: 90%;
    max-width: 1200px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    /* Responsive untuk Tablet & Mobile  */
    @media (max-width: 768px) {
      flex-direction: column;
      justify-content: center;
      text-align: center;
    }
  }

  .image-wrapper {
    width: 50%;
    height: 60vh;
    overflow: hidden;
    border-radius: 10px;

    @media (max-width: 768px) {
      width: 100%;
      height: 40vh;
      margin-bottom: 2rem;
    }

    .parallax-img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .content-box {
    width: 40%;
    color: #ffffff;

    @media (max-width: 768px) {
      width: 100%;
    }

    .tagline {
      font-size: 0.9rem;
      letter-spacing: 2px;
      color: #ffaa00;
      text-transform: uppercase;
    }

    .title {
      font-size: 3.5rem;
      margin: 1rem 0;
      line-height: 1.1;

      @media (max-width: 480px) {
        font-size: 2.5rem;
      }
    }

    .description {
      font-size: 1.1rem;
      line-height: 1.6;
      opacity: 0.8;
    }
  }
}
</style>