<template>
  <section class="hero-landing" ref="sectionPin">
    <!-- Background Glow Accents -->
    <div class="ambient-glow glow-1"></div>
    <div class="ambient-glow glow-2"></div>

    <div class="container">
      
      <!-- Kolom Kiri: Teks & Call to Actions -->
      <div class="content-box" ref="contentBox">
        <div class="status-badge" ref="statusBadge">
          <span class="pulse-dot"></span>
          <span>Open for Opportunities & Collaborations</span>
        </div>

        <h1 class="hero-title" ref="heroTitle">
          Crafting Digital Experience with <span class="gradient-text">Precision & Passion</span>
        </h1>

        <p class="hero-role">
          Full Stack Web Developer &bull; Social Media & Digital Creative
        </p>

        <p class="hero-description" ref="heroDesc">
          Lulusan S1 Teknik Informatika Universitas Al-Khairiyah (IPK 3.23) dengan fokus pada rekayasa perangkat lunak dan manajemen basis data. Berpengalaman membangun aplikasi web berbasis PHP & MySQL, tata kelola data sistem informasi, serta perancangan identitas visual media sosial yang terstruktur dan berdampak.
        </p>

        <!-- CTA Action Buttons -->
        <div class="cta-actions" ref="ctaActions">
          <a 
            href="/CV_Muhammad_Alif_Nurfikri.pdf" 
            download="CV_Muhammad_Alif_Nurfikri.pdf" 
            class="btn-primary"
          >
            <span class="btn-icon">⬇</span>
            <span>Download CV</span>
          </a>

          <a 
            href="#section-etc" 
            @click.prevent="scrollToContact" 
            class="btn-secondary"
          >
            <span>Hubungi Saya</span>
            <span class="btn-arrow">→</span>
          </a>
        </div>

        <!-- Quick Metrics Highlights -->
        <div class="quick-stats" ref="statsBox">
          <div class="stat-card">
            <span class="stat-number">3.23</span>
            <span class="stat-label">IPK Sarjana Komputer</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-card">
            <span class="stat-number">4+</span>
            <span class="stat-label">Tahun Beasiswa Prestasi</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-card">
            <span class="stat-number">10+</span>
            <span class="stat-label">Proyek & Pelatihan IT</span>
          </div>
        </div>
      </div>

      <!-- Kolom Kanan: Foto Profil & Floating Glass Cards -->
      <div class="visual-wrapper" ref="visualWrapper">
        <div class="photo-card" ref="mainImageWrapper">
          <img 
            src="@/assets/images/section1-bgg.jpeg" 
            alt="Muhammad Alif Nurfikri" 
            class="profile-img"
            ref="mainImage"
          />
          <div class="photo-overlay-glass">
            <div class="role-pill">Muhammad Alif Nurfikri, S.Kom</div>
          </div>
        </div>

        <!-- Floating Badge Tech Stack -->
        <div class="floating-tech-card" ref="techCard">
          <span class="tech-icon">⚡</span>
          <div>
            <strong>Tech Stack</strong>
            <p>Vue.js, PHP, MySQL, Figma</p>
          </div>
        </div>
      </div>

    </div>

    <!-- Scroll Indicator Down -->
    <div class="scroll-down-hint" ref="scrollHint">
      <span>Scroll ke bawah</span>
      <div class="mouse-icon">
        <div class="wheel"></div>
      </div>
    </div>
  </section>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default {
  name: "SectionOne",
  mounted() {
    this.$nextTick(() => {
      this.initHeroAnimations();
    });
  },
  methods: {
    initHeroAnimations() {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Animasi Entrance saat halaman pertama kali dimuat
      tl.from(this.$refs.statusBadge, { y: -20, opacity: 0, duration: 0.6 })
        .from(this.$refs.heroTitle, { y: 30, opacity: 0, duration: 0.8 }, "-=0.3")
        .from(this.$refs.heroDesc, { y: 20, opacity: 0, duration: 0.7 }, "-=0.4")
        .from(this.$refs.ctaActions, { y: 20, opacity: 0, duration: 0.6 }, "-=0.4")
        .from(this.$refs.statsBox, { y: 20, opacity: 0, duration: 0.6 }, "-=0.3")
        .from(this.$refs.mainImageWrapper, { scale: 0.9, opacity: 0, duration: 1 }, "-=1")
        .from(this.$refs.techCard, { x: 30, opacity: 0, duration: 0.8 }, "-=0.5")
        .from(this.$refs.scrollHint, { opacity: 0, duration: 0.6 }, "-=0.3");

      // Parallax scroll saat digeser
      gsap.to(this.$refs.mainImage, {
        scrollTrigger: {
          trigger: this.$refs.sectionPin,
          start: "top top",
          end: "bottom top",
          scrub: true
        },
        y: 60,
        scale: 1.05
      });
    },
    scrollToContact() {
      gsap.to(window, {
        duration: 1.2,
        scrollTo: {
          y: "#section-etc",
          offsetY: 0
        },
        ease: "power3.inOut"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.hero-landing {
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0b0d0e;
  overflow: hidden;
  padding: 100px 0 80px 0;

  /* Ambient Glow Background */
  .ambient-glow {
    position: absolute;
    width: 450px;
    height: 450px;
    border-radius: 50%;
    filter: blur(120px);
    opacity: 0.18;
    pointer-events: none;
  }
  .glow-1 {
    top: -50px;
    left: -50px;
    background: #00adb5;
  }
  .glow-2 {
    bottom: -100px;
    right: 5%;
    background: #0077b6;
  }

  .container {
    width: 90%;
    max-width: 1250px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 50px;
    z-index: 2;

    @media (max-width: 992px) {
      flex-direction: column-reverse;
      text-align: center;
      gap: 40px;
    }
  }

  /* Kolom Teks */
  .content-box {
    flex: 1.2;
    display: flex;
    flex-direction: column;

    @media (max-width: 992px) {
      align-items: center;
    }

    .status-badge {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 6px 16px;
      border-radius: 30px;
      background: rgba(0, 173, 181, 0.08);
      border: 1px solid rgba(0, 173, 181, 0.25);
      color: #00adb5;
      font-size: 0.85rem;
      font-weight: 600;
      margin-bottom: 20px;
      width: fit-content;

      .pulse-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #00adb5;
        box-shadow: 0 0 10px #00adb5;
        animation: pulseAnimation 2s infinite;
      }
    }

    .hero-title {
      font-size: 3.2rem;
      font-weight: 800;
      line-height: 1.15;
      color: #ffffff;
      margin: 0 0 16px 0;
      letter-spacing: -0.5px;

      .gradient-text {
        background: linear-gradient(135deg, #00adb5 0%, #7ee8fa 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      @media (max-width: 600px) {
        font-size: 2.3rem;
      }
    }

    .hero-role {
      font-size: 1.15rem;
      color: #a0aec0;
      font-weight: 600;
      margin-bottom: 20px;
      letter-spacing: 0.5px;
    }

    .hero-description {
      font-size: 1.05rem;
      line-height: 1.7;
      color: #cbd5e0;
      margin: 0 0 35px 0;
      max-width: 620px;
      text-align: justify;

      @media (max-width: 992px) {
        text-align: center;
      }
    }

    /* Action Buttons */
    .cta-actions {
      display: flex;
      gap: 16px;
      margin-bottom: 40px;

      @media (max-width: 480px) {
        flex-direction: column;
        width: 100%;
      }

      .btn-primary {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        padding: 14px 28px;
        background: #00adb5;
        color: #0b0d0e;
        font-weight: 700;
        font-size: 0.95rem;
        border-radius: 12px;
        text-decoration: none;
        box-shadow: 0 6px 20px rgba(0, 173, 181, 0.35);
        transition: all 0.3s ease;

        &:hover {
          background: #39c7ce;
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0, 173, 181, 0.45);
        }
      }

      .btn-secondary {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        padding: 14px 26px;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.15);
        color: #ffffff;
        font-weight: 600;
        font-size: 0.95rem;
        border-radius: 12px;
        text-decoration: none;
        backdrop-filter: blur(8px);
        transition: all 0.3s ease;

        .btn-arrow {
          transition: transform 0.3s ease;
        }

        &:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: #00adb5;
          color: #00adb5;
          transform: translateY(-2px);

          .btn-arrow {
            transform: translateX(4px);
          }
        }
      }
    }

    /* Quick Stats */
    .quick-stats {
      display: flex;
      align-items: center;
      gap: 24px;
      padding-top: 25px;
      border-top: 1px solid rgba(255, 255, 255, 0.08);

      @media (max-width: 992px) {
        justify-content: center;
      }

      .stat-card {
        display: flex;
        flex-direction: column;

        .stat-number {
          font-size: 1.8rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1;
        }

        .stat-label {
          font-size: 0.8rem;
          color: #718096;
          margin-top: 4px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
      }

      .stat-divider {
        width: 1px;
        height: 35px;
        background: rgba(255, 255, 255, 0.1);
      }
    }
  }

  /* Kolom Visual */
  .visual-wrapper {
    flex: 0.9;
    position: relative;
    display: flex;
    justify-content: center;

    .photo-card {
      position: relative;
      width: 340px;
      height: 460px;
      border-radius: 24px;
      overflow: hidden;
      border: 1px solid rgba(0, 173, 181, 0.3);
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
      background: #14171a;

      @media (max-width: 480px) {
        width: 280px;
        height: 380px;
      }

      .profile-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .photo-overlay-glass {
        position: absolute;
        bottom: 0;
        inset-inline: 0;
        padding: 20px;
        background: linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, transparent 100%);
        display: flex;
        justify-content: center;

        .role-pill {
          font-size: 0.85rem;
          font-weight: 600;
          color: #ffffff;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          padding: 6px 16px;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.15);
        }
      }
    }

    /* Floating Card Tech Stack (Posisi atas kiri agar tidak menumpuk) */
    .floating-tech-card {
      position: absolute;
      top: 40px;
      left: -50px;
      background: rgba(20, 24, 27, 0.9);
      border: 1px solid rgba(0, 173, 181, 0.4);
      backdrop-filter: blur(12px);
      padding: 12px 18px;
      border-radius: 14px;
      display: flex;
      align-items: center;
      gap: 12px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
      z-index: 5;

      @media (max-width: 992px) {
        display: none;
      }

      .tech-icon {
        font-size: 1.5rem;
      }

      strong {
        display: block;
        font-size: 0.85rem;
        color: #ffffff;
      }

      p {
        margin: 0;
        font-size: 0.75rem;
        color: #00adb5;
      }
    }
  }

  /* Scroll Down Indicator */
  .scroll-down-hint {
    position: absolute;
    bottom: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    color: #4a5568;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 1px;

    .mouse-icon {
      width: 20px;
      height: 32px;
      border: 2px solid rgba(255, 255, 255, 0.2);
      border-radius: 12px;
      display: flex;
      justify-content: center;
      padding-top: 6px;

      .wheel {
        width: 3px;
        height: 6px;
        background: #00adb5;
        border-radius: 2px;
        animation: scrollWheel 1.6s infinite;
      }
    }
  }
}

@keyframes pulseAnimation {
  0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(0, 173, 181, 0.7); }
  70% { transform: scale(1); box-shadow: 0 0 0 8px rgba(0, 173, 181, 0); }
  100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(0, 173, 181, 0); }
}

@keyframes scrollWheel {
  0% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(10px); opacity: 0; }
}
</style>