<template>
  <section id="section-pendidikan" class="section-education" ref="secEducation">
    <div class="container">
      
      <!-- Section Header -->
      <div class="section-header" ref="eduHeader">
        <span class="sub-badge">Academic Journey</span>
        <h2 class="title">Education & Achievements</h2>
        <p class="subtitle">Latar belakang akademik dan dokumentasi rekam jejak prestasi di perguruan tinggi.</p>
        <div class="line-decorator"></div>
      </div>

      <!-- Main Education Feature Card -->
      <div class="edu-main-card" ref="eduCard">
        <div class="degree-badge-row">
          <span class="degree-status">Sarjana Komputer (S.Kom)</span>
          <span class="degree-year">2021 — 2025</span>
        </div>

        <h3 class="major-title">S1 Teknik Informatika</h3>
        <h4 class="campus-name">Universitas Al-Khairiyah</h4>

        <p class="study-summary">
          Menyelesaikan studi dengan fokus mendalam pada rekayasa perangkat lunak, arsitektur basis data, dan pengembangan aplikasi web. Berhasil mengembangkan perancangan dan implementasi <strong>Sistem Manajemen Kompetisi Sepak Bola Berbasis Web</strong> memanfaatkan PHP dan MySQL sebagai karya tugas akhir terapan.
        </p>

        <!-- Academic Metrics / Highlights -->
        <div class="highlights-grid">
          <div class="highlight-item">
            <span class="hl-label">Fokus Keilmuan</span>
            <span class="hl-value">Web Developer & Graphic Design</span>
          </div>
          <div class="highlight-item">
            <span class="hl-label">Tugas Akhir</span>
            <span class="hl-value">Sistem Manajemen Kompetisi (PHP & MySQL)</span>
          </div>
          <div class="highlight-item">
            <span class="hl-label">Aktivitas</span>
            <span class="hl-value">Pengembangan Skill Web & Design</span>
          </div>
        </div>
      </div>

      <!-- Academic Achievements & Activities Gallery -->
      <div class="achievements-section" ref="achieveSection">
        <h3 class="achieve-heading">Campus Milestones & Activities</h3>
        
        <div class="achievement-grid">
          <article 
            v-for="(item, idx) in achievements" 
            :key="idx" 
            class="achieve-card"
            @click="openModal(item.img, item.title, item.caption)"
          >
            <div class="achieve-img-wrapper">
              <img :src="item.img" :alt="item.title" />
              <div class="achieve-overlay">
                <span class="zoom-btn">🔍 Perbesar</span>
              </div>
            </div>
            <div class="achieve-info">
              <span class="achieve-year">{{ item.year }}</span>
              <h4 class="achieve-title">{{ item.title }}</h4>
              <p class="achieve-desc">{{ item.desc }}</p>
            </div>
          </article>
        </div>
      </div>

      <!-- Web Portfolio Projects Section (3 Projects, 2 Photos Each) -->
      <div class="projects-section" ref="projectsSection">
        <div class="projects-header">
          <h3 class="achieve-heading">Selected Web Portfolio Projects</h3>
          <p class="projects-sub">Dokumentasi antarmuka dan implementasi sistem aplikasi web yang telah dikembangkan.</p>
        </div>

        <div class="projects-list">
          <article 
            v-for="(proj, pIdx) in webProjects" 
            :key="pIdx" 
            class="project-card"
          >
            <div class="project-meta">
              <div class="project-top-row">
                <span class="project-year">{{ proj.year }}</span>
                <span class="project-category">{{ proj.category }}</span>
              </div>
              <h4 class="project-title">{{ proj.title }}</h4>
              <p class="project-desc">{{ proj.desc }}</p>
              
              <div class="project-tags">
                <span v-for="(tag, tIdx) in proj.tags" :key="tIdx" class="p-tag">
                  {{ tag }}
                </span>
              </div>
            </div>

            <!-- 2 Photos Per Project -->
            <div class="project-images-grid">
              <div 
                v-for="(photo, imgIdx) in proj.images" 
                :key="imgIdx" 
                class="proj-img-box"
                @click="openModal(photo.src, `${proj.title} — ${photo.label}`, photo.caption)"
              >
                <img :src="photo.src" :alt="photo.label" />
                <div class="proj-img-overlay">
                  <span class="zoom-btn">🔍 {{ photo.label }}</span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>

      <!-- Back Navigation -->
      <div class="back-navigation" ref="backBtn">
        <a href="#section-2" @click.prevent="backToMenu" class="btn-back">
          <span class="icon">←</span> Back
        </a>
      </div>

    </div>

    <!-- Lightbox Modal Pop-up -->
    <transition name="modal-fade">
      <div v-if="selectedImage" class="modal-backdrop" @click.self="closeModal">
        <div class="modal-box">
          <button class="modal-close-btn" @click="closeModal" aria-label="Tutup">&times;</button>
          <img :src="selectedImage" :alt="selectedTitle" class="modal-img" />
          <div class="modal-text">
            <h4>{{ selectedTitle }}</h4>
            <p v-html="selectedCaption"></p>
          </div>
        </div>
      </div>
    </transition>

  </section>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// Import Foto Akademik
import imgPrestasi1 from "@/assets/images/skripsi.jpg";
import imgPrestasi2 from "@/assets/images/kampus.jpg";
import imgPrestasi3 from "@/assets/images/kkn.jpeg";

// Import Foto Project Website (Sesuaikan nama file gambarnya di folder assets/images)
import proj1Img1 from "@/assets/images/project1a.png";
import proj1Img2 from "@/assets/images/project1b.png";
import proj2Img1 from "@/assets/images/project2a.png";
import proj2Img2 from "@/assets/images/project2b.png";
import proj3Img1 from "@/assets/images/project3a.png";
import proj3Img2 from "@/assets/images/project3b.png";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default {
  name: "SectionPendidikan",
  data() {
    return {
      selectedImage: null,
      selectedTitle: "",
      selectedCaption: "",
      achievements: [
        {
          year: "2025",
          title: "Sidang & Publikasi Tugas Akhir",
          desc: "Presentasi implementasi rancang bangun sistem informasi turnamen sepak bola di hadapan dewan penguji.",
          img: imgPrestasi1,
          caption: "Dokumentasi penyelesaian dan pengujian sistem tugas akhir di Universitas Al-Khairiyah."
        },
        {
          year: "2024",
          title: "Kampus Mengajar Kemdikbudristek",
          desc: "Berpartisipasi Program Merdeka Belajar Kampus Merdeka yang diselenggarakan oleh Kemdikbudristek.",
          img: imgPrestasi2,
          caption: '<a href="https://www.instagram.com/km7_smksdarussyifa?utm_source=ig_web_button_share_sheet&cplk=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" class="caption-link">🔗 Lihat Link Dokumentasi</a>'
        },
        {
          year: "2023",
          title: "KKNT Provinsi Banten",
          desc: "Berpartisipasi dalam program LLDIKTI IV dalam membangun Desa Mandiri melalui Program KKNT.",
          img: imgPrestasi3,
          caption: '<a href="https://www.instagram.com/kkntbanjarsari2023?utm_source=ig_web_button_share_sheet&mdxt=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" class="caption-link">🔗 Lihat Link Dokumentasi</a>'
        }
      ],
      webProjects: [
        {
          year: "2026",
          category: "Retail Inventory & Return System",
          title: "Sistem Monitoring Retur & Mutasi — Eiger Adventure Store",
          desc: "Aplikasi web pemantauan barang retur dan mutasi antar-toko dengan fitur auto-fill kode artikel/site, filter rekap berbasis rentang tanggal, manajemen hak akses admin/guest, serta ekspor laporan ke CSV.",
          tags: ["PHP", "MySQL", "Tailwind CSS", "CSV Export"],
          images: [
            {
              src: proj1Img1,
              label: "Form Input & Auto-Fill",
              caption: "Antarmuka penginputan mutasi dan retur barang dengan pencarian otomatis kode site dan artikel."
            },
            {
              src: proj1Img2,
              label: "Dashboard Rekap Monitoring",
              caption: "Halaman rekapitulasi status fisik barang, nomor STO, filter tanggal, dan fitur ekspor CSV."
            }
          ]
        },
        {
          year: "2025",
          category: "Sports Competition Management",
          title: "Sistem Manajemen Kompetisi Sepak Bola — PSSI Kota Cilegon",
          desc: "Platform administrasi turnamen sepak bola berbasis web untuk pengelolaan daftar pemain (roster), penjadwalan pertandingan, pemetaan lokasi stadion, serta pembaruan skor dan klasemen secara terpusat.",
          tags: ["PHP", "MySQL", "Tailwind CSS", "CRUD System"],
          images: [
            {
              src: proj2Img1,
              label: "Dashboard Admin & Jadwal",
              caption: "Panel kendali utama untuk mengelola jadwal pertandingan, klasemen, dan statistik kompetisi."
            },
            {
              src: proj2Img2,
              label: "Manajemen Tim & Roster",
              caption: "Modul pendataan klub peserta, verifikasi pemain, dan informasi venue pertandingan."
            }
          ]
        },
        {
          year: "2026",
          category: "Enterprise Operational Reporting",
          title: "Sistem Pelaporan Operasional — PT Krakatau Bandar Samudera",
          desc: "Perangkat lunak berbasis web untuk digitalisasi pencatatan laporan harian operasional dan pemantauan aktivitas lapangan guna mempercepat rekapitulasi data manajerial.",
          tags: ["PHP", "MySQL", "Relational DB", "Web App"],
          images: [
            {
              src: proj3Img1,
              label: "Halaman Utama & Ringkasan",
              caption: "Tampilan ringkasan aktivitas operasional harian dan status laporan terverifikasi."
            },
            {
              src: proj3Img2,
              label: "Modul Input & Arsip Laporan",
              caption: "Formulir digital pencatatan data lapangan yang terintegrasi langsung dengan basis data MySQL."
            }
          ]
        }
      ]
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.initEducationAnimations();
    });
  },
  methods: {
    initEducationAnimations() {
      gsap.from(this.$refs.eduHeader, {
        scrollTrigger: {
          trigger: this.$refs.secEducation,
          start: "top 75%"
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
      });

      gsap.from(this.$refs.eduCard, {
        scrollTrigger: {
          trigger: this.$refs.eduCard,
          start: "top 75%"
        },
        y: 50,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out"
      });

      gsap.from(this.$refs.achieveSection, {
        scrollTrigger: {
          trigger: this.$refs.achieveSection,
          start: "top 75%"
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });

      gsap.from(this.$refs.projectsSection, {
        scrollTrigger: {
          trigger: this.$refs.projectsSection,
          start: "top 75%"
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });
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
    openModal(img, title, caption) {
      this.selectedImage = img;
      this.selectedTitle = title;
      this.selectedCaption = caption;
      document.body.style.overflow = "hidden";
    },
    closeModal() {
      this.selectedImage = null;
      this.selectedTitle = "";
      this.selectedCaption = "";
      document.body.style.overflow = "";
    }
  }
};
</script>

<style lang="scss" scoped>
.section-education {
  min-height: 100vh;
  padding: 120px 0;
  background: radial-gradient(circle at 80% 20%, #1c2226 0%, #101214 90%);
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
    margin-bottom: 60px;

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

  /* Main Education Card */
  .edu-main-card {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(0, 173, 181, 0.35);
    border-radius: 20px;
    padding: 40px;
    backdrop-filter: blur(10px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    margin-bottom: 60px;

    .degree-badge-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 15px;

      .degree-status {
        font-size: 0.85rem;
        font-weight: 700;
        background: rgba(0, 173, 181, 0.15);
        color: #5ce1e6;
        padding: 5px 12px;
        border-radius: 12px;
        border: 1px solid rgba(0, 173, 181, 0.3);
      }

      .degree-year {
        font-size: 0.95rem;
        font-weight: 600;
        color: #00adb5;
      }
    }

    .major-title {
      font-size: 2rem;
      font-weight: 800;
      margin: 0 0 4px 0;
    }

    .campus-name {
      font-size: 1.2rem;
      font-weight: 500;
      color: #aaa;
      margin: 0 0 20px 0;
    }

    .study-summary {
      font-size: 1rem;
      line-height: 1.7;
      color: #d1d5db;
      margin-bottom: 30px;
      text-align: justify;

      strong {
        color: #ffffff;
      }
    }

    .highlights-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      padding-top: 25px;

      .highlight-item {
        display: flex;
        flex-direction: column;
        gap: 5px;

        .hl-label {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #8fa3ad;
        }

        .hl-value {
          font-size: 0.95rem;
          font-weight: 600;
          color: #f1f3f4;
        }
      }

      @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 15px;
      }
    }
  }

  /* Achievements Section */
  .achievements-section {
    margin-bottom: 70px;

    .achieve-heading {
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 25px;
      color: #f1f3f4;
    }

    .achievement-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 25px;

      .achieve-card {
        background: rgba(255, 255, 255, 0.02);
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 14px;
        overflow: hidden;
        cursor: pointer;
        transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;

        &:hover {
          transform: translateY(-5px);
          border-color: rgba(0, 173, 181, 0.4);
          box-shadow: 0 10px 25px rgba(0, 173, 181, 0.15);

          .achieve-img-wrapper img {
            transform: scale(1.05);
          }

          .achieve-overlay {
            opacity: 1;
          }
        }

        .achieve-img-wrapper {
          position: relative;
          height: 180px;
          overflow: hidden;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.4s ease;
          }

          .achieve-overlay {
            position: absolute;
            inset: 0;
            background: rgba(0, 0, 0, 0.6);
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: opacity 0.3s ease;

            .zoom-btn {
              font-size: 0.85rem;
              font-weight: 600;
              color: #00adb5;
              padding: 6px 14px;
              background: rgba(0, 0, 0, 0.8);
              border-radius: 20px;
              border: 1px solid #00adb5;
            }
          }
        }

        .achieve-info {
          padding: 20px;

          .achieve-year {
            font-size: 0.8rem;
            font-weight: 700;
            color: #00adb5;
            letter-spacing: 1px;
          }

          .achieve-title {
            font-size: 1.1rem;
            font-weight: 700;
            margin: 6px 0 8px 0;
            line-height: 1.35;
          }

          .achieve-desc {
            font-size: 0.9rem;
            line-height: 1.5;
            color: #aaa;
            margin: 0;
          }
        }
      }

      @media (max-width: 900px) {
        grid-template-columns: 1fr;
      }
    }
  }

  /* Web Portfolio Projects Section (3 Projects, 2 Photos Each) */
  .projects-section {
    margin-bottom: 50px;

    .projects-header {
      margin-bottom: 30px;

      .achieve-heading {
        font-size: 1.5rem;
        font-weight: 700;
        margin: 0 0 6px 0;
        color: #f1f3f4;
      }

      .projects-sub {
        font-size: 0.95rem;
        color: #9aa0a6;
        margin: 0;
      }
    }

    .projects-list {
      display: flex;
      flex-direction: column;
      gap: 32px;
    }

    .project-card {
      background: rgba(255, 255, 255, 0.025);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 18px;
      padding: 30px;
      backdrop-filter: blur(8px);
      transition: border-color 0.3s ease, box-shadow 0.3s ease;

      &:hover {
        border-color: rgba(0, 173, 181, 0.4);
        box-shadow: 0 12px 30px rgba(0, 173, 181, 0.12);
      }

      .project-meta {
        margin-bottom: 24px;

        .project-top-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 10px;

          .project-year {
            font-size: 0.85rem;
            font-weight: 700;
            color: #00adb5;
            letter-spacing: 1px;
          }

          .project-category {
            font-size: 0.75rem;
            padding: 3px 10px;
            border-radius: 12px;
            background: rgba(0, 173, 181, 0.12);
            color: #5ce1e6;
            border: 1px solid rgba(0, 173, 181, 0.25);
          }
        }

        .project-title {
          font-size: 1.35rem;
          font-weight: 700;
          margin: 0 0 10px 0;
          color: #ffffff;
        }

        .project-desc {
          font-size: 0.95rem;
          line-height: 1.65;
          color: #c0c6cc;
          margin: 0 0 16px 0;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;

          .p-tag {
            font-size: 0.78rem;
            color: #cfd8dc;
            background: rgba(255, 255, 255, 0.05);
            padding: 4px 10px;
            border-radius: 6px;
            border: 1px solid rgba(255, 255, 255, 0.08);
          }
        }
      }

      .project-images-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;

        .proj-img-box {
          position: relative;
          height: 230px;
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
          border: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.35);

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.4s ease;
          }

          .proj-img-overlay {
            position: absolute;
            inset: 0;
            background: rgba(0, 0, 0, 0.65);
            backdrop-filter: blur(2px);
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: opacity 0.3s ease;

            .zoom-btn {
              font-size: 0.85rem;
              font-weight: 600;
              color: #00adb5;
              padding: 8px 16px;
              background: rgba(0, 0, 0, 0.85);
              border-radius: 20px;
              border: 1px solid #00adb5;
            }
          }

          &:hover {
            img {
              transform: scale(1.04);
            }
            .proj-img-overlay {
              opacity: 1;
            }
          }
        }

        @media (max-width: 768px) {
          grid-template-columns: 1fr;

          .proj-img-box {
            height: 200px;
          }
        }
      }
    }
  }

  /* Back Button */
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
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(8px);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;

  .modal-box {
    position: relative;
    max-width: 800px;
    width: 100%;
    background: #181a1b;
    border: 1px solid rgba(0, 173, 181, 0.3);
    border-radius: 14px;
    padding: 18px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.8);
    display: flex;
    flex-direction: column;
    align-items: center;

    .modal-close-btn {
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

    .modal-img {
      max-width: 100%;
      max-height: 70vh;
      border-radius: 8px;
      object-fit: contain;
    }

    .modal-text {
      margin-top: 14px;
      text-align: center;

      h4 {
        font-size: 1.1rem;
        margin: 0 0 6px 0;
        color: #ffffff;
      }

      p {
        font-size: 0.95rem;
        color: #aaa;
        margin: 0;

        /* Deep selector untuk tag <a> hasil v-html */
        ::v-deep a,
        :deep(a) {
          color: #00adb5;
          text-decoration: underline;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          transition: color 0.2s ease;

          &:hover {
            color: #5ce1e6;
          }
        }
      }
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