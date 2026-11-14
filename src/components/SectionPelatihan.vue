<template>
  <section id="section-pelatihan" class="section-training" ref="secTraining">
    <div class="container">
      
      <!-- Section Header -->
      <div class="section-header" ref="trainHeader">
        <span class="sub-badge">Credential & Skills</span>
        <h2 class="title">Certifications & Training</h2>
        <p class="subtitle">Validasi keahlian teknis dan profesional melalui sertifikasi terverifikasi.</p>
        <div class="line-decorator"></div>
      </div>

      <!-- Training Cards Showcase -->
      <div class="training-list" ref="trainingContainer">
        
        <!-- ITEM 1 -->
        <article class="training-card" ref="trainItem1">
          <div class="card-body">
            <div class="badge-row">
              <span class="date-badge">2023</span>
              <span class="status-badge verified">Verified</span>
            </div>
            <h3 class="role-title">Web Basic Program</h3>
            <span class="organizer">Dicoding Indonesia</span>
            <p class="description">
              Pelatihan intensif pengembangan aplikasi web berbasis arsitektur client-server, integrasi API, perancangan skema basis data relasional MySQL, serta implementasi autentikasi dan keamanan data dasar.
            </p>
            <div class="tags-wrapper">
              <span class="tag">Vue.js / PHP</span>
              <span class="tag">MySQL</span>
              <span class="tag">REST API</span>
              <span class="tag">Web Security</span>
            </div>
          </div>
          
          <div class="card-certificate">
            <div class="cert-preview" @click="openModal(cert1, 'Basic Web Programming & Database Administration')">
              <img :src="cert1" alt="Sertifikat Web Development" />
              <div class="preview-overlay">
                <span class="zoom-icon">🔍</span>
                <span class="zoom-text">Lihat Sertifikat</span>
              </div>
            </div>
          </div>
        </article>

        <!-- ITEM 2 -->
        <article class="training-card" ref="trainItem2">
          <div class="card-body">
            <div class="badge-row">
              <span class="date-badge">2025</span>
              <span class="status-badge verified">Verified Credential</span>
            </div>
            <h3 class="role-title">Content Visual & Digital Marketing</h3>
            <span class="organizer">BBPVP Kemnaker Serang</span>
            <p class="description">
              Mempelajari prinsip tipografi, komposisi visual, manajemen warna merek (color branding), serta alur kerja produksi materi pemasaran digital untuk optimasi identitas visual profil bisnis.
            </p>
            <div class="tags-wrapper">
              <span class="tag">Graphic Design</span>
              <span class="tag">Brand Identity</span>
              <span class="tag">Typography</span>
              <span class="tag">Visual Layout</span>
            </div>
          </div>

          <div class="card-certificate">
            <div class="cert-preview" @click="openModal(cert2, 'Pelatihan Desain Grafis & Digital Branding')">
              <img :src="cert2" alt="Sertifikat Desain Grafis" />
              <div class="preview-overlay">
                <span class="zoom-icon">🔍</span>
                <span class="zoom-text">Lihat Sertifikat</span>
              </div>
            </div>
          </div>
        </article>

        <!-- ITEM 3 -->
        <article class="training-card" ref="trainItem3">
          <div class="card-body">
            <div class="badge-row">
              <span class="date-badge">2025</span>
              <span class="status-badge verified">Verified Credential</span>
            </div>
            <h3 class="role-title">Basic AI Program</h3>
            <span class="organizer">Dicoding Indonesia</span>
            <p class="description">
             Mempelajari Basic Artificial Intelligence, Konsep Machine Learning, Data Science, serta penggunaan AI dalam Pekerjaan
            </p>
            <div class="tags-wrapper">
              <span class="tag">Machine Learning</span>
              <span class="tag">Data Science</span>
              <span class="tag">Digital Program</span>
            </div>
          </div>

          <div class="card-certificate">
            <div class="cert-preview" @click="openModal(cert3, 'Administrasi & Manajemen Informasi Terpadu')">
              <img :src="cert3" alt="Sertifikat Administrasi Sistem" />
              <div class="preview-overlay">
                <span class="zoom-icon">🔍</span>
                <span class="zoom-text">Lihat Sertifikat</span>
              </div>
            </div>
          </div>
        </article>

 <!-- ITEM 4 -->
        <article class="training-card" ref="trainItem4">
          <div class="card-body">
            <div class="badge-row">
              <span class="date-badge">2025</span>
              <span class="status-badge verified">Verified Credential</span>
            </div>
            <h3 class="role-title">Introduction To Financial Literacy</h3>
            <span class="organizer">Dicoding Indonesia</span>
            <p class="description">
             Mempelajari Financial Future, Mempelajari membangun benteng dari fenomena "Boncos", dan Mempelajari dari Survival menuju Financial Freedom
            </p>
            <div class="tags-wrapper">
              <span class="tag">Financial Future</span>
              <span class="tag">Investasi</span>
              <span class="tag">Financial Freedom</span>
            </div>
          </div>

          <div class="card-certificate">
            <div class="cert-preview" @click="openModal(cert4, 'Financial Literacy')">
              <img :src="cert4" alt="Sertifikat Financial Literacy" />
              <div class="preview-overlay">
                <span class="zoom-icon">🔍</span>
                <span class="zoom-text">Lihat Sertifikat</span>
              </div>
            </div>
          </div>
        </article>

      </div>

      <!-- Back Navigation -->
      <div class="back-navigation" ref="backBtn">
        <a href="#section-2" @click.prevent="backToMenu" class="btn-back">
          <span class="icon">←</span> Back
        </a>
      </div>

    </div>

    <!-- Modal Lightbox Pop-up -->
    <transition name="modal-fade">
      <div v-if="selectedCert" class="cert-modal-backdrop" @click.self="closeModal">
        <div class="cert-modal-wrapper">
          <button class="modal-close" @click="closeModal" aria-label="Tutup pratinjau">&times;</button>
          <img :src="selectedCert" :alt="selectedTitle" class="modal-image" />
          <p class="modal-caption">{{ selectedTitle }}</p>
        </div>
      </div>
    </transition>

  </section>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import cert1Img from "@/assets/images/sertifikat1.jpg";
import cert2Img from "@/assets/images/sertifikat2.jpg";
import cert3Img from "@/assets/images/sertifikat3.jpg";
import cert4Img from "@/assets/images/sertifikat4.jpg";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default {
  name: "SectionPelatihan",
  data() {
    return {
      cert1: cert1Img,
      cert2: cert2Img,
      cert3: cert3Img,
      cert4: cert4Img,
      selectedCert: null,
      selectedTitle: ""
    };
  },
  mounted() {
    this.initTrainingAnimations();
  },
  methods: {
    initTrainingAnimations() {
      gsap.from(this.$refs.trainHeader, {
        scrollTrigger: {
          trigger: this.$refs.secTraining,
          start: "top 75%"
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
      });

      gsap.from(
        [
          this.$refs.trainItem1,
          this.$refs.trainItem2,
          this.$refs.trainItem3,
          this.$refs.trainItem4,
          this.$refs.backBtn
        ],
        {
          scrollTrigger: {
            trigger: this.$refs.trainingContainer,
            start: "top 70%"
          },
          y: 60,
          opacity: 0,
          stagger: 0.25,
          duration: 1,
          ease: "power3.out"
        }
      );
    },
    backToMenu() {
      gsap.to(window, {
        duration: 1.2,
        scrollTo: {
          y: "#section-2",
          offsetY: 0
        },
        ease: "power3.inOut"
      });
    },
    openModal(imageSrc, title) {
      this.selectedCert = imageSrc;
      this.selectedTitle = title;
      document.body.style.overflow = "hidden";
    },
    closeModal() {
      this.selectedCert = null;
      this.selectedTitle = "";
      document.body.style.overflow = "";
    }
  }
};
</script>

<style lang="scss" scoped>
.section-training {
  min-height: 100vh;
  padding: 120px 0;
  background: radial-gradient(circle at 10% 20%, #202428 0%, #111315 90%);
  color: #ffffff;
  display: flex;
  align-items: center;

  .container {
    width: 90%;
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }

  .section-header {
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
      padding: 6px 14px;
      border-radius: 20px;
      margin-bottom: 15px;
    }

    .title {
      font-size: 2.8rem;
      font-weight: 800;
      letter-spacing: -0.5px;
      margin: 0;
    }

    .subtitle {
      font-size: 1.05rem;
      color: #9aa0a6;
      margin-top: 12px;
    }

    .line-decorator {
      width: 60px;
      height: 4px;
      background-color: #00adb5;
      margin: 20px auto 0;
      border-radius: 2px;
    }
  }

  .training-list {
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-bottom: 50px;
  }

  .training-card {
    display: flex;
    background: rgba(255, 255, 255, 0.025);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 16px;
    padding: 32px;
    gap: 30px;
    backdrop-filter: blur(8px);
    transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-4px);
      border-color: rgba(0, 173, 181, 0.4);
      box-shadow: 0 12px 30px rgba(0, 173, 181, 0.12);
    }

    .card-body {
      flex: 1.4;
      display: flex;
      flex-direction: column;

      .badge-row {
        display: flex;
        gap: 10px;
        align-items: center;
        margin-bottom: 12px;

        .date-badge {
          font-size: 0.85rem;
          font-weight: 700;
          color: #00adb5;
          letter-spacing: 1px;
        }

        .status-badge {
          font-size: 0.75rem;
          padding: 3px 10px;
          border-radius: 12px;
          background: rgba(0, 173, 181, 0.15);
          color: #5ce1e6;
          border: 1px solid rgba(0, 173, 181, 0.3);
        }
      }

      .role-title {
        font-size: 1.35rem;
        font-weight: 700;
        margin: 0 0 6px 0;
        line-height: 1.35;
      }

      .organizer {
        font-size: 0.95rem;
        color: #8fa3ad;
        font-style: italic;
        margin-bottom: 14px;
      }

      .description {
        font-size: 0.95rem;
        line-height: 1.65;
        color: #c0c6cc;
        margin: 0 0 20px 0;
      }

      .tags-wrapper {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin-top: auto;

        .tag {
          font-size: 0.8rem;
          color: #cfd8dc;
          background: rgba(255, 255, 255, 0.05);
          padding: 4px 10px;
          border-radius: 6px;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
      }
    }

    .card-certificate {
      flex: 0.9;
      display: flex;
      align-items: center;
      justify-content: center;

      .cert-preview {
        position: relative;
        width: 100%;
        height: 200px;
        border-radius: 12px;
        overflow: hidden;
        cursor: pointer;
        border: 1px solid rgba(255, 255, 255, 0.15);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .preview-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.65);
          backdrop-filter: blur(3px);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 6px;
          opacity: 0;
          transition: opacity 0.3s ease;

          .zoom-icon { font-size: 1.4rem; }
          .zoom-text {
            font-size: 0.85rem;
            font-weight: 600;
            color: #00adb5;
          }
        }

        &:hover {
          img { transform: scale(1.05); }
          .preview-overlay { opacity: 1; }
        }
      }
    }

    @media (max-width: 860px) {
      flex-direction: column;
      padding: 24px;

      .card-certificate .cert-preview {
        height: 180px;
      }
    }
  }

  .back-navigation {
    display: flex;
    justify-content: center;
    margin-top: 20px;

    .btn-back {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 12px 32px;
      background-color: transparent;
      color: #00adb5;
      border: 2px solid #00adb5;
      text-decoration: none;
      font-weight: 600;
      border-radius: 30px;
      transition: all 0.3s ease;

      .icon { transition: transform 0.3s ease; }

      &:hover {
        background-color: #00adb5;
        color: #ffffff;
        box-shadow: 0 10px 20px rgba(0, 173, 181, 0.25);
        transform: translateY(-2px);
        .icon { transform: translateX(-4px); }
      }
    }
  }
}

/* Modal Lightbox */
.cert-modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(8px);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;

  .cert-modal-wrapper {
    position: relative;
    max-width: 850px;
    width: 100%;
    background: #181a1b;
    border: 1px solid rgba(0, 173, 181, 0.3);
    border-radius: 12px;
    padding: 16px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.8);
    display: flex;
    flex-direction: column;
    align-items: center;

    .modal-close {
      position: absolute;
      top: -16px;
      right: -16px;
      width: 36px;
      height: 36px;
      background: #00adb5;
      color: #000;
      font-size: 1.5rem;
      border: none;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
      transition: transform 0.2s ease, background-color 0.2s ease;

      &:hover {
        transform: scale(1.1);
        background: #5ce1e6;
      }
    }

    .modal-image {
      max-width: 100%;
      max-height: 75vh;
      border-radius: 8px;
      object-fit: contain;
    }

    .modal-caption {
      margin-top: 12px;
      font-size: 0.95rem;
      color: #ccc;
      text-align: center;
    }
  }
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}
</style>