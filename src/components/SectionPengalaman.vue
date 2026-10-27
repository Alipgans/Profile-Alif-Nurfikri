<template>
  <section id="section-pengalaman" class="section-experience" ref="secExperience">
    <div class="container">
      
      <div class="section-header" ref="expHeader">
        <h2 class="title">Work Experience</h2>
        <div class="line-decorator"></div>
      </div>

      <div class="timeline" ref="timelineContainer">
        
        <div class="timeline-item" ref="expItem1">
          <div class="timeline-dot"></div>
          <div class="timeline-date">November 2021 - Juli 2023</div>
          <div class="timeline-content">
            <h3>Staff dan Admin Penerimaan Mahasiswa Baru</h3>
            <span class="company">Universitas Al-Khairiyah</span>
            <p>
              Melayani mahasiswa baru yang mendaftar kuliah di Universitas Al-Khairiyah. Memberikan informasi lengkap mengenai kampus, program studi, persyaratan kuliah, biaya kuliah dan informasi lain yang dibutuhkan calon mahasiswa. Ikut serta dalam kegiatan promosi kampus ke sekolah-sekolah dan instansi. 
            </p>
          </div>
        </div>

        <div class="timeline-item" ref="expItem2">
          <div class="timeline-dot"></div>
          <div class="timeline-date">Februari 2024 – Juli 2024</div>
          <div class="timeline-content">
            <h3>Guru TIK dan Pemrograman (Intern Kampus Mengajar)</h3>
            <span class="company">SMK Darus Syifa</span>
            <p>
              Mengajar dan memfasilitasi pembelajaran TIK dan Pemrograman dengan jelas dan efektif. Merancang dan menyampaikan kurikulum dan tujuan pembelajaran TIK dan Pemrogrman. Melakukan evaluasi terhadap kemampuan siswa dalam pembelajaran TIK dan Pemrograman. 
            </p>
          </div>
        </div>

        <div class="timeline-item" ref="expItem3">
          <div class="timeline-dot"></div>
          <div class="timeline-date">Januari 2023 – Sekarang</div>
          <div class="timeline-content">
            <h3>Leader Wedding Organizer (Freelance)</h3>
            <span class="company">Nareswari Wedding Organizer</span>
            <p>
              Membantu calon pengantin menentukan konsep pernikahan yang sesuai dengan keinginan. Memastikan acara berjalan dengan lancar dan sukses. Bertanggung jawab memastikan seluruh rangkaian acara berjalan lancar sesuai rundown. Menyelesaikan masalah yang mungkin timbul selama acara berlangsung. 
            </p>
          </div>
        </div>

        <div class="timeline-item" ref="expItem4">
          <div class="timeline-dot"></div>
          <div class="timeline-date">September 2025 – Sekarang</div>
          <div class="timeline-content">
            <h3>Graphic Design (Freelance)</h3>
            <span class="company">Resto Bakso & Sate H. Muchtar</span>
            <p>
              Membuat konten visual media sosial. Berupa pamflet promo, pamflet ucapan hari khusus, dan lain sebagainya. Membuat daftar menu makanan dan minuman resto. Membuat identitas media sosial dengan menerapkan color branding, menggunakan bio dan highlight media sosial. Mengatur komposisi tata letak konten supaya lebih menarik dan rapih.  
            </p>
          </div>
        </div>

         <div class="timeline-item" ref="expItem5">
          <div class="timeline-dot"></div>
          <div class="timeline-date">Maret 2026 - Juli 2026</div>
          <div class="timeline-content">
            <h3>Graphic Design dan Admin</h3>
            <span class="company">Flash Pop Studio</span>
            <p>
              Bertanggung jawab penuh dalam memproduksi konten visual media sosial. Membangun dan menjaga brand identity digital studio melalui penerapan color branding yang konsisten di setiap feed, serta mengoptimalkan fungsi estetika profil lewat penulisan bio yang informatif dan kerapihan visual highlight. Melayani Customer yang ingin berfoto di Studio. 
            </p>
          </div>
        </div>     

      </div>

      <div class="back-navigation" ref="backBtn">
        <a href="#section-2" @click.prevent="backToMenu" class="btn-back">
          <span class="icon">←</span> Back
        </a>
      </div>

    </div>
  </section>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin"; // Impor plugin scroll

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default {
  name: "SectionPengalaman",
  mounted() {
    this.initExperienceAnimations();
  },
  methods: {
    initExperienceAnimations() {
      gsap.from(this.$refs.expHeader, {
        scrollTrigger: {
          trigger: this.$refs.secExperience,
          start: "top 75%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
      });

      // Fix Array: Memasukkan semua 5 ref item dan tombol back agar ter-stagger rapi
      gsap.from(
        [
          this.$refs.expItem1, 
          this.$refs.expItem2, 
          this.$refs.expItem3, 
          this.$refs.expItem4, 
          this.$refs.expItem5,
          this.$refs.backBtn
        ],
        {
          scrollTrigger: {
            trigger: this.$refs.timelineContainer,
            start: "top 70%",
          },
          x: -50,
          opacity: 0,
          stagger: 0.2,
          duration: 1,
          ease: "power3.out"
        }
      );
    },
    // Fungsi handling back to section-2 menggunakan GSAP ScrollTo
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
  background-color: #1a1a1a;
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
    margin-bottom: 80px;

    .title {
      font-size: 2.8rem;
      font-weight: 700;
      margin: 0;
    }
    .line-decorator {
      width: 60px;
      height: 4px;
      background-color: #00adb5;
      margin: 20px auto 0;
      border-radius: 2px;
    }
  }

  .timeline {
    position: relative;
    border-left: 3px solid rgba(255, 255, 255, 0.1);
    padding-left: 40px;
    margin-left: 20px;
    margin-bottom: 50px; /* Memberi jarak ke tombol back */

    .timeline-item {
      position: relative;
      margin-bottom: 60px;
      &:last-child { margin-bottom: 0; }

      .timeline-dot {
        position: absolute;
        left: -48.5px;
        top: 5px;
        width: 14px;
        height: 14px;
        background-color: #00adb5;
        border-radius: 50%;
        box-shadow: 0 0 10px #00adb5;
        transition: transform 0.3s ease;
      }

      .timeline-date {
        font-size: 0.95rem;
        font-weight: 600;
        color: #00adb5;
        margin-bottom: 8px;
        text-transform: uppercase;
        letter-spacing: 1px;
      }

      .timeline-content {
        background: rgba(255, 255, 255, 0.03);
        padding: 25px 30px;
        border-radius: 12px;
        border: 1px solid rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(10px);
        transition: all 0.3s ease;

        h3 {
          font-size: 1.4rem;
          font-weight: 600;
          margin: 0 0 5px 0;
        }
        .company {
          font-size: 1rem;
          color: #aaa;
          display: block;
          margin-bottom: 15px;
          font-style: italic;
        }
        p {
          font-size: 1rem;
          line-height: 1.6;
          color: #ccc;
          margin: 0;
          text-align: justify;
        }
      }

      &:hover {
        .timeline-dot { transform: scale(1.3); }
        .timeline-content {
          background: rgba(255, 255, 255, 0.06);
          border-color: rgba(0, 173, 181, 0.3);
          transform: translateY(-2px);
        }
      }
    }

    @media (max-width: 768px) {
      padding-left: 25px;
      margin-left: 10px;
      .timeline-item {
        .timeline-dot { left: -33.5px; }
        .timeline-content {
          padding: 20px;
          h3 { font-size: 1.2rem; }
        }
      }
    }
  }

  /* Styling Tombol Back */
  .back-navigation {
    display: flex;
    justify-content: center;
    margin-top: 20px;

    .btn-back {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 12px 30px;
      background-color: transparent;
      color: #00adb5;
      border: 2px solid #00adb5;
      text-decoration: none;
      font-weight: 600;
      border-radius: 30px;
      transition: all 0.3s ease;

      .icon {
        transition: transform 0.3s ease;
      }

      &:hover {
        background-color: #00adb5;
        color: #ffffff;
        box-shadow: 0 10px 20px rgba(0, 173, 181, 0.25);
        transform: translateY(-2px);

        .icon {
          transform: translateX(-4px);
        }
      }
    }
  }
}
</style>