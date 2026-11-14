<template>
  <section id="section-2" class="section-two" ref="bgChange">
    <!-- Ambient Lighting & Decorative Grid -->
    <div class="ambient-glow"></div>
    <div class="bg-grid-pattern"></div>

    <div class="container">
      
      <!-- Section Header -->
      <div class="text-content" ref="textContent">
        <span class="sub-badge">Navigation Hub</span>
        <h2 class="title">Explore My <span class="gradient-text">Journey</span></h2>
        <p class="subtitle">Eksplorasi rekam jejak profesional, latar belakang akademik, dan keahlian yang telah dikembangkan.</p>
        <div class="line-decorator"></div>
      </div>
      
      <!-- Grid Showcase 3 Cards -->
      <div class="grid-images" ref="gridWrapper">
        
        <!-- CARD 1: Work Experience -->
        <div 
          class="img-card-wrapper" 
          ref="card1"
          @mousemove="handleTilt($event, 'card1Inner')"
          @mouseleave="resetTilt('card1Inner')"
        >
          <div class="card-inner" ref="card1Inner">
            <div class="img-card">
              <span class="card-number">01</span>
              <img src="@/assets/images/design1.png" alt="Pengalaman Kerja" />
              <div class="card-overlay">
                <div class="category-tag">Career History</div>
                <h3>Work Experience</h3>
                <p class="card-desc">Rekam jejak kerja di bidang administrasi kampus, pengajaran TIK, hingga perancangan desain grafis.</p>
              </div>
            </div>
            <a 
              href="#section-pengalaman" 
              @click.prevent="scrollToSection('#section-pengalaman')" 
              class="btn-card-action"
            >
              <span>View Experience</span>
              <span class="icon">→</span>
            </a>
          </div>
        </div>
        
        <!-- CARD 2: Education -->
        <div 
          class="img-card-wrapper" 
          ref="card2"
          @mousemove="handleTilt($event, 'card2Inner')"
          @mouseleave="resetTilt('card2Inner')"
        >
          <div class="card-inner" ref="card2Inner">
            <div class="img-card">
              <span class="card-number">02</span>
              <img src="@/assets/images/design2.jpg" alt="Pendidikan" />
              <div class="card-overlay">
                <div class="category-tag">Academic</div>
                <h3>Education</h3>
                <p class="card-desc">Lulusan S1 Teknik Informatika dengan fokus riset rekayasa perangkat lunak dan manajemen sistem.</p>
              </div>
            </div>
            <a 
              href="#section-pendidikan" 
              @click.prevent="scrollToSection('#section-pendidikan')" 
              class="btn-card-action"
            >
              <span>View Education</span>
              <span class="icon">→</span>
            </a>
          </div>
        </div>

        <!-- CARD 3: Training -->
        <div 
          class="img-card-wrapper" 
          ref="card3"
          @mousemove="handleTilt($event, 'card3Inner')"
          @mouseleave="resetTilt('card3Inner')"
        >
          <div class="card-inner" ref="card3Inner">
            <div class="img-card">
              <span class="card-number">03</span>
              <img src="@/assets/images/design3.jpg" alt="Pelatihan" />
              <div class="card-overlay">
                <div class="category-tag">Certifications</div>
                <h3>Training & Skills</h3>
                <p class="card-desc">Pelatihan kompetensi dalam bidang pemrograman web, AI, dan produksi media digital.</p>
              </div>
            </div>
            <a 
              href="#section-pelatihan" 
              @click.prevent="scrollToSection('#section-pelatihan')" 
              class="btn-card-action"
            >
              <span>View Training</span>
              <span class="icon">→</span>
            </a>
          </div>
        </div>

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
  name: "SectionTwo",
  mounted() {
    this.$nextTick(() => {
      this.initAnimations();
    });
  },
  methods: {
    initAnimations() {
      // Header Animation
      gsap.from(this.$refs.textContent, {
        scrollTrigger: {
          trigger: this.$refs.bgChange,
          start: "top 75%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
      });

      // Stagger Cards Pop-in
      gsap.from([this.$refs.card1, this.$refs.card2, this.$refs.card3], {
        scrollTrigger: {
          trigger: this.$refs.gridWrapper,
          start: "top 75%",
        },
        y: 70,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out"
      });
    },
    // Interactive 3D Card Hover Tilt
    handleTilt(e, refName) {
      const card = this.$refs[refName];
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      gsap.to(card, {
        rotationY: x * 0.05,
        rotationX: -y * 0.05,
        transformPerspective: 900,
        duration: 0.3,
        ease: "power1.out"
      });
    },
    resetTilt(refName) {
      const card = this.$refs[refName];
      if (!card) return;
      gsap.to(card, {
        rotationY: 0,
        rotationX: 0,
        duration: 0.6,
        ease: "elastic.out(1, 0.5)"
      });
    },
    scrollToSection(targetId) {
      gsap.to(window, {
        duration: 1.2,
        scrollTo: {
          y: targetId,
          offsetY: 0
        },
        ease: "power3.inOut"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.section-two {
  position: relative;
  min-height: 100vh;
  padding: 130px 0;
  background-color: #0d0f11;
  color: #ffffff;
  display: flex;
  align-items: center;
  overflow: hidden;

  /* Ambient Blur Glow */
  .ambient-glow {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 650px;
    height: 450px;
    background: radial-gradient(circle, rgba(0, 173, 181, 0.12) 0%, transparent 70%);
    filter: blur(100px);
    pointer-events: none;
  }

  /* Grid Subtle Pattern */
  .bg-grid-pattern {
    position: absolute;
    inset: 0;
    background-image: 
      linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
    background-size: 50px 50px;
    pointer-events: none;
  }

  .container {
    width: 90%;
    max-width: 1240px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
  }

  /* Header Section */
  .text-content {
    text-align: center;
    margin-bottom: 70px;

    .sub-badge {
      display: inline-block;
      font-size: 0.85rem;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: #00adb5;
      background: rgba(0, 173, 181, 0.1);
      border: 1px solid rgba(0, 173, 181, 0.3);
      padding: 6px 16px;
      border-radius: 20px;
      margin-bottom: 15px;
    }

    .title {
      font-size: 3rem;
      font-weight: 800;
      letter-spacing: -0.5px;
      margin-bottom: 12px;

      .gradient-text {
        background: linear-gradient(135deg, #00adb5 0%, #7ee8fa 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      @media (max-width: 600px) {
        font-size: 2.2rem;
      }
    }

    .subtitle {
      font-size: 1.05rem;
      color: #9aa0a6;
      max-width: 600px;
      margin: 0 auto;
      line-height: 1.6;
    }

    .line-decorator {
      width: 60px;
      height: 4px;
      background-color: #00adb5;
      margin: 22px auto 0;
      border-radius: 2px;
    }
  }

  /* Grid Cards */
  .grid-images {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;

    .img-card-wrapper {
      perspective: 1000px;

      .card-inner {
        display: flex;
        flex-direction: column;
        gap: 16px;
        background: rgba(255, 255, 255, 0.02);
        border: 1px solid rgba(255, 255, 255, 0.07);
        border-radius: 20px;
        padding: 16px;
        backdrop-filter: blur(8px);
        transition: border-color 0.3s ease, box-shadow 0.3s ease;

        &:hover {
          border-color: rgba(0, 173, 181, 0.4);
          box-shadow: 0 15px 35px rgba(0, 173, 181, 0.15);
        }
      }
    }

    .img-card {
      position: relative;
      height: 390px;
      background: #15181b;
      border-radius: 14px;
      overflow: hidden;

      .card-number {
        position: absolute;
        top: 18px;
        left: 20px;
        font-size: 1.1rem;
        font-weight: 800;
        color: #ffffff;
        background: rgba(0, 0, 0, 0.6);
        backdrop-filter: blur(8px);
        border: 1px solid rgba(255, 255, 255, 0.15);
        padding: 4px 12px;
        border-radius: 20px;
        z-index: 3;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.6s cubic-bezier(0.2, 1, 0.3, 1);
      }

      .card-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(
          to top, 
          rgba(11, 13, 14, 0.95) 15%, 
          rgba(11, 13, 14, 0.6) 50%, 
          rgba(11, 13, 14, 0.05) 100%
        );
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding: 26px;
        z-index: 2;

        .category-tag {
          font-size: 0.75rem;
          font-weight: 700;
          color: #00adb5;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-bottom: 6px;
        }

        h3 {
          color: #ffffff;
          font-size: 1.45rem;
          font-weight: 700;
          margin: 0 0 8px 0;
          line-height: 1.25;
        }

        .card-desc {
          font-size: 0.88rem;
          color: #b0b8c1;
          line-height: 1.5;
          margin: 0;
        }
      }

      &:hover img {
        transform: scale(1.08);
      }
    }

    /* Action Button */
    .btn-card-action {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      padding: 13px 20px;
      background: rgba(0, 173, 181, 0.1);
      color: #00adb5;
      border: 1px solid rgba(0, 173, 181, 0.3);
      text-decoration: none;
      font-weight: 700;
      font-size: 0.92rem;
      border-radius: 12px;
      transition: all 0.3s ease;

      .icon {
        font-size: 1.1rem;
        transition: transform 0.3s ease;
      }

      &:hover {
        background: #00adb5;
        color: #0b0d0e;
        border-color: #00adb5;
        box-shadow: 0 6px 20px rgba(0, 173, 181, 0.35);

        .icon {
          transform: translateX(5px);
        }
      }
    }

    @media (max-width: 992px) {
      grid-template-columns: 1fr;
      gap: 30px;

      .img-card {
        height: 330px;
      }
    }
  }
}
</style>