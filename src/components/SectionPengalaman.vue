<template>
  <section id="section-pengalaman" class="section-experience" ref="secExperience">
    <div class="container">
      
      <!-- Section Header -->
      <div class="section-header" ref="expHeader">
        <span class="sub-badge">Career & Track Record</span>
        <h2 class="title">Work Experience</h2>
        <p class="subtitle">Rekam jejak profesional dalam pengelolaan data sistem, pengajaran TIK, hingga desain visual.</p>
        <div class="line-decorator"></div>

        <!-- Tombol Download Portfolio di Header -->
        <div class="header-action">
          <a 
            href="/Portofolio_Muhammad_Alif_Nurfikri.pdf" 
            download="Portofolio_Muhammad_Alif_Nurfikri.pdf"
            class="btn-portfolio"
          >
            <span class="btn-icon">📁</span>
            <span>View Portofolio</span>
            <span class="btn-arrow">↓</span>
          </a>
        </div>
      </div>

      <!-- Timeline Pengalaman Kerja -->
      <div class="timeline" ref="timelineContainer">
        
        <!-- ITEM 1 -->
        <div class="timeline-item" ref="expItem1">
          <div class="timeline-dot"></div>
          <div class="timeline-date">November 2021 - Juli 2023</div>
          <div class="timeline-content">
            <h3>Staff dan Admin Penerimaan Mahasiswa Baru</h3>
            <span class="company">Universitas Al-Khairiyah</span>
            <p>
              Melayani pendaftaran calon mahasiswa baru, mengelola database registrasi pada sistem akademik kampus (SIAKAD), memverifikasi kelengkapan berkas administratif, serta aktif berkontribusi dalam promosi institusi ke sekolah dan instansi eksternal.
            </p>
          </div>
        </div>

        <!-- ITEM 2 -->
        <div class="timeline-item" ref="expItem2">
          <div class="timeline-dot"></div>
          <div class="timeline-date">Februari 2024 – Juli 2024</div>
          <div class="timeline-content">
            <h3>Guru TIK dan Pemrograman (Intern Kampus Mengajar)</h3>
            <span class="company">SMK Darus Syifa</span>
            <p>
              Mengajar dan memfasilitasi kurikulum mata pelajaran TIK serta dasar logika pemrograman. Merancang silabus, materi praktikum komputer, dan melakukan evaluasi kompetensi siswa secara berkala.
            </p>
          </div>
        </div>

        <!-- ITEM 3 -->
        <div class="timeline-item" ref="expItem3">
          <div class="timeline-dot"></div>
          <div class="timeline-date">Januari 2023 – Sekarang</div>
          <div class="timeline-content">
            <h3>Leader Wedding Organizer (Freelance)</h3>
            <span class="company">Nareswari Wedding Organizer</span>
            <p>
              Bertindak sebagai team leader dalam perencanaan dan eksekusi acara pernikahan. Mengatur rundown acara, berkoordinasi lintas vendor, memastikan kelancaran seluruh prosesi, dan melakukan manajemen mitigasi kendala di lapangan.
            </p>
          </div>
        </div>

        <!-- ITEM 4 -->
        <div class="timeline-item" ref="expItem4">
          <div class="timeline-dot"></div>
          <div class="timeline-date">September 2025 – Sekarang</div>
          <div class="timeline-content">
            <h3>Graphic Design (Freelance)</h3>
            <span class="company">Resto Bakso & Sate H. Muchtar</span>
            <p>
              Merancang materi komunikasi visual dan promosi digital: pamflet menu, materi promo media sosial, dan penataan tata letak visual berbasis konsistensi brand identity (color palette, tipografi, dan komposisi feed).
            </p>
          </div>
        </div>

        <!-- ITEM 5 -->
        <div class="timeline-item" ref="expItem5">
          <div class="timeline-dot"></div>
          <div class="timeline-date">Maret 2026 - Juli 2026</div>
          <div class="timeline-content">
            <h3>Graphic Design dan Admin</h3>
            <span class="company">Flash Pop Studio</span>
            <p>
              Memproduksi aset digital visual untuk media sosial studio, membangun digital brand presence lewat bio & cover highlight yang rapi, serta memberikan pelayanan konsultasi langsung kepada customer studio foto.
            </p>
          </div>
        </div>     

        <!-- ITEM 5 -->
                <div class="timeline-item" ref="expItem5">
                  <div class="timeline-dot"></div>
                  <div class="timeline-date">Agustus 2026 - Sekarang</div>
                  <div class="timeline-content">
                    <h3>Retail Assistant</h3>
                    <span class="company">Eiger Adventure Store</span>
                    <p>
                      Melayani Customer dengan menggali kebutuhan, Melayani Kasir, Melakukan Selling to Customer, Pengoperasian POS dan Sistem CARE, Team Work
                    </p>
                  </div>
                </div>     
              </div>

      <!-- Action Navigation Bawah -->
      <div class="bottom-navigation" ref="bottomNav">
        <a href="#section-2" @click.prevent="backToMenu" class="btn-back">
          <span class="icon">←</span> Back to Menu
        </a>
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
  name: "SectionPengalaman",
  mounted() {
    this.$nextTick(() => {
      this.initExperienceAnimations();
    });
  },
  methods: {
    initExperienceAnimations() {
      gsap.from(this.$refs.expHeader, {
        scrollTrigger: {
          trigger: this.$refs.secExperience,
          start: "top 75%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
      });

      gsap.from(
        [
          this.$refs.expItem1, 
          this.$refs.expItem2, 
          this.$refs.expItem3, 
          this.$refs.expItem4, 
          this.$refs.expItem5,
          this.$refs.bottomNav
        ],
        {
          scrollTrigger: {
            trigger: this.$refs.timelineContainer,
            start: "top 75%",
          },
          x: -40,
          opacity: 0,
          stagger: 0.18,
          duration: 0.9,
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
    }
  }
};
</script>

<style lang="scss" scoped>
.section-experience {
  min-height: 100vh;
  padding: 120px 0;
  background-color: #0e1013;
  color: #ffffff;
  display: flex;
  align-items: center;
  overflow: hidden;

  .container {
    width: 85%;
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }

  .section-header {
    text-align: center;
    margin-bottom: 70px;

    .sub-badge {
      display: inline-block;
      font-size: 0.82rem;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: #00adb5;
      background: rgba(0, 173, 181, 0.1);
      border: 1px solid rgba(0, 173, 181, 0.3);
      padding: 6px 14px;
      border-radius: 20px;
      margin-bottom: 14px;
    }

    .title {
      font-size: 2.8rem;
      font-weight: 800;
      letter-spacing: -0.5px;
      margin: 0;
    }

    .subtitle {
      font-size: 1rem;
      color: #9aa0a6;
      max-width: 620px;
      margin: 12px auto 0;
      line-height: 1.6;
    }

    .line-decorator {
      width: 60px;
      height: 4px;
      background-color: #00adb5;
      margin: 20px auto 25px;
      border-radius: 2px;
    }

    /* Tombol Download Portfolio Header */
    .header-action {
      display: flex;
      justify-content: center;
      margin-top: 15px;

      .btn-portfolio {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        padding: 12px 26px;
        background: linear-gradient(135deg, #00adb5 0%, #00878e 100%);
        color: #0b0d0e;
        font-weight: 700;
        font-size: 0.95rem;
        border-radius: 30px;
        text-decoration: none;
        box-shadow: 0 8px 25px rgba(0, 173, 181, 0.3);
        transition: all 0.3s ease;

        .btn-icon {
          font-size: 1.1rem;
        }

        .btn-arrow {
          font-weight: 800;
          transition: transform 0.3s ease;
        }

        &:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(0, 173, 181, 0.45);
          background: linear-gradient(135deg, #39c7ce 0%, #00adb5 100%);

          .btn-arrow {
            transform: translateY(2px);
          }
        }
      }
    }
  }

  .timeline {
    position: relative;
    border-left: 2px solid rgba(0, 173, 181, 0.25);
    padding-left: 36px;
    margin-left: 20px;
    margin-bottom: 50px;

    .timeline-item {
      position: relative;
      margin-bottom: 50px;
      &:last-child { margin-bottom: 0; }

      .timeline-dot {
        position: absolute;
        left: -44px;
        top: 6px;
        width: 14px;
        height: 14px;
        background-color: #00adb5;
        border-radius: 50%;
        box-shadow: 0 0 12px #00adb5;
        transition: transform 0.3s ease;
      }

      .timeline-date {
        font-size: 0.88rem;
        font-weight: 700;
        color: #00adb5;
        margin-bottom: 8px;
        text-transform: uppercase;
        letter-spacing: 1px;
      }

      .timeline-content {
        background: rgba(255, 255, 255, 0.025);
        padding: 24px 28px;
        border-radius: 14px;
        border: 1px solid rgba(255, 255, 255, 0.07);
        backdrop-filter: blur(8px);
        transition: all 0.3s ease;

        h3 {
          font-size: 1.35rem;
          font-weight: 700;
          margin: 0 0 6px 0;
          color: #f1f3f4;
        }
        .company {
          font-size: 0.95rem;
          color: #8fa3ad;
          display: block;
          margin-bottom: 12px;
          font-style: italic;
        }
        p {
          font-size: 0.95rem;
          line-height: 1.65;
          color: #c4c9ce;
          margin: 0;
          text-align: justify;
        }
      }

      &:hover {
        .timeline-dot { transform: scale(1.3); }
        .timeline-content {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(0, 173, 181, 0.35);
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        }
      }
    }

    @media (max-width: 768px) {
      padding-left: 24px;
      margin-left: 10px;
      .timeline-item {
        .timeline-dot { left: -31px; }
        .timeline-content {
          padding: 18px;
          h3 { font-size: 1.15rem; }
        }
      }
    }
  }

  /* Navigasi Bawah */
  .bottom-navigation {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    margin-top: 20px;
    flex-wrap: wrap;

    .btn-portfolio-secondary {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 12px 24px;
      background: rgba(0, 173, 181, 0.1);
      color: #00adb5;
      border: 1px solid rgba(0, 173, 181, 0.35);
      text-decoration: none;
      font-weight: 600;
      font-size: 0.92rem;
      border-radius: 30px;
      transition: all 0.3s ease;

      &:hover {
        background: #00adb5;
        color: #0b0d0e;
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(0, 173, 181, 0.3);
      }
    }

    .btn-back {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 12px 26px;
      background-color: transparent;
      color: #9aa0a6;
      border: 1px solid rgba(255, 255, 255, 0.15);
      text-decoration: none;
      font-weight: 600;
      font-size: 0.92rem;
      border-radius: 30px;
      transition: all 0.3s ease;

      .icon {
        transition: transform 0.3s ease;
      }

      &:hover {
        background-color: rgba(255, 255, 255, 0.08);
        border-color: rgba(255, 255, 255, 0.3);
        color: #ffffff;
        transform: translateY(-2px);

        .icon {
          transform: translateX(-4px);
        }
      }
    }
  }
}
</style>