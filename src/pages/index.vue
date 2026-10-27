<template>
  <div class="main-wrapper">
    <HeaderNav />
    
    <main>
      <SectionOne />
      <SectionTwo />
      <SectionPengalaman /> 
      <SectionEtc />
    </main>

    <footer class="footer">
      <p>&copy; Profile Muhammad Alif Nurfikri</p>
    </footer>
  </div>
</template>

<script>
// Import Smooth Scroll (Lenis)
import Lenis from '@studio-freight/lenis';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import Komponen sesuai struktur folder src/components/
import HeaderNav from '@/components/header.vue';
import SectionOne from '@/components/section-1.vue';
import SectionTwo from '@/components/section-2.vue';
import SectionPengalaman from '@/components/SectionPengalaman.vue';
import SectionPendidikan from '@/components/SectionPendidikan.vue';
import SectionPelatihan from '@/components/SectionPelatihan.vue'; // Impor komponen baru Anda
import SectionEtc from '@/components/etc.vue';

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'IndexPage',
  components: {
    HeaderNav,
    SectionOne,
    SectionTwo,
    SectionPengalaman,
    SectionPendidikan,
    SectionPelatihan, // Daftarkan di sini
    SectionEtc
  },
  mounted() {
    // Inisialisasi Lenis untuk efek smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true
    });

    // PENTING: Sinkronisasi Lenis dengan GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }
};
</script>

<style lang="scss">
@import "@/styles/main.scss";

.main-wrapper {
  width: 100%;
  overflow-x: hidden;
  background-color: #000;
}

.footer {
  padding: 60px 20px;
  text-align: center;
  color: #555;
  background-color: #050505;
  border-top: 1px solid #1a1a1a;
  font-size: 0.9rem;
}
</style>