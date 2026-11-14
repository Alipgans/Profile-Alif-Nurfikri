<template>
  <section id="section-etc" class="section-contact">
    <div class="glow-bg"></div>

    <div class="container">
      
      <!-- Header -->
      <div class="contact-header">
        <span class="badge-tag">Let's Connect</span>
        <h2 class="title">Mulai Diskusi & Kolaborasi</h2>
        <p class="desc">
          Terbuka untuk kesempatan kerja full-time, proyek freelance web development, maupun kebutuhan desain grafis.
        </p>
      </div>

      <!-- Bento Contact Grid -->
      <div class="bento-grid">
        
        <!-- CARD 1: WhatsApp (Hero / Highlight Card) -->
        <a 
          href="https://wa.me/6285281061224?text=Halo%20Alif,%20saya%20melihat%20website%20portfolio%20Anda" 
          target="_blank" 
          rel="noopener noreferrer"
          class="bento-item bento-wa"
        >
          <div class="card-top">
            <span class="platform-name">WhatsApp Quick Chat</span>
            <span class="status-online">Online</span>
          </div>

          <div class="card-main">
            <h3>0852-8106-1224</h3>
            <p>Respon cepat untuk diskusi proyek, interview, atau tawaran kerja.</p>
          </div>

          <div class="card-bottom">
            <span>Kirim Pesan Langsung</span>
            <span class="arrow">↗</span>
          </div>
        </a>

        <!-- CARD 2: Email -->
        <a 
          href="mailto:alifnurfikri155@gmail.com?subject=Tawaran%20Kerja%20/%20Diskusi%20Proyek"
          class="bento-item bento-email"
        >
          <div class="card-top">
            <span class="platform-name">Email</span>
            <span class="icon-label">✉️</span>
          </div>

          <div class="card-main">
            <h3>alifnurfikri155@gmail.com</h3>
            <p>Untuk pengiriman berkas, offering letter, atau proposal formal.</p>
          </div>

          <div class="card-bottom">
            <span>Buka Email Client</span>
            <span class="arrow">↗</span>
          </div>
        </a>

        <!-- CARD 3: Instagram -->
        <a 
          href="https://instagram.com/alip31_" 
          target="_blank" 
          rel="noopener noreferrer"
          class="bento-item bento-ig"
        >
          <div class="card-top">
            <span class="platform-name">Instagram Profile</span>
            <span class="icon-label">📸</span>
          </div>

          <div class="card-main">
            <h3>@alip31_</h3>
            <p>Galeri aktivitas visual, rekam jejak santai, dan portfolio visual.</p>
          </div>

          <div class="card-bottom">
            <span>Kunjungi Profil</span>
            <span class="arrow">↗</span>
          </div>
        </a>

      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: "SectionEtc"
};
</script>

<style lang="scss" scoped>
.section-contact {
  position: relative;
  min-height: 90vh;
  padding: 100px 0;
  background-color: #0c0e11;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  .glow-bg {
    position: absolute;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(0, 173, 181, 0.15) 0%, transparent 70%);
    filter: blur(100px);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
  }

  .container {
    width: 90%;
    max-width: 1100px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
  }

  /* Header */
  .contact-header {
    text-align: center;
    margin-bottom: 50px;

    .badge-tag {
      display: inline-block;
      font-size: 0.8rem;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      font-weight: 700;
      color: #00adb5;
      background: rgba(0, 173, 181, 0.12);
      border: 1px solid rgba(0, 173, 181, 0.3);
      padding: 6px 14px;
      border-radius: 20px;
      margin-bottom: 14px;
    }

    .title {
      font-size: 2.6rem;
      font-weight: 800;
      color: #ffffff;
      margin: 0 0 12px 0;
      letter-spacing: -0.5px;

      @media (max-width: 600px) {
        font-size: 2rem;
      }
    }

    .desc {
      font-size: 1rem;
      color: #9aa0a6;
      max-width: 550px;
      margin: 0 auto;
      line-height: 1.6;
    }
  }

  /* Bento Layout Grid */
  .bento-grid {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    grid-template-rows: auto auto;
    gap: 20px;

    @media (max-width: 850px) {
      grid-template-columns: 1fr;
    }

    .bento-item {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 30px;
      border-radius: 18px;
      text-decoration: none;
      color: #ffffff;
      border: 1px solid rgba(255, 255, 255, 0.1);
      transition: all 0.3s cubic-bezier(0.2, 1, 0.3, 1);

      .card-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 25px;

        .platform-name {
          font-size: 0.85rem;
          font-weight: 600;
          color: #a0aec0;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .status-online {
          font-size: 0.75rem;
          font-weight: 700;
          color: #25d366;
          background: rgba(37, 211, 102, 0.15);
          padding: 4px 10px;
          border-radius: 20px;
          border: 1px solid rgba(37, 211, 102, 0.3);
        }

        .icon-label {
          font-size: 1.2rem;
        }
      }

      .card-main {
        h3 {
          font-size: 1.35rem;
          font-weight: 700;
          margin: 0 0 8px 0;
          word-break: break-all;
        }

        p {
          font-size: 0.92rem;
          color: #b0bec5;
          line-height: 1.5;
          margin: 0 0 25px 0;
        }
      }

      .card-bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.9rem;
        font-weight: 600;
        color: #00adb5;
        border-top: 1px solid rgba(255, 255, 255, 0.08);
        padding-top: 15px;

        .arrow {
          font-size: 1.2rem;
          transition: transform 0.3s ease;
        }
      }

      &:hover {
        transform: translateY(-4px);
        border-color: #00adb5;
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);

        .card-bottom .arrow {
          transform: translate(3px, -3px);
        }
      }
    }

    /* WhatsApp Card (Span 2 Baris) */
    .bento-wa {
      grid-row: span 2;
      background: linear-gradient(145deg, #16241c 0%, #111a14 100%);
      border-color: rgba(37, 211, 102, 0.25);

      h3 {
        color: #5ce1e6;
        font-size: 1.6rem;
      }

      .card-bottom {
        color: #25d366;
      }

      &:hover {
        border-color: #25d366;
        box-shadow: 0 15px 35px rgba(37, 211, 102, 0.15);
      }

      @media (max-width: 850px) {
        grid-row: auto;
      }
    }

    /* Email Card */
    .bento-email {
      background: #15181d;

      h3 {
        color: #ffffff;
      }

      &:hover {
        border-color: #00adb5;
      }
    }

    /* Instagram Card */
    .bento-ig {
      background: #15181d;

      h3 {
        color: #ffffff;
      }

      &:hover {
        border-color: #e1306c;
        .card-bottom {
          color: #e1306c;
        }
      }
    }
  }
}
</style>