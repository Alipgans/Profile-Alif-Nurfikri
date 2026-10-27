<template>
  <section
    id="section-etc"
    class="section-build"
    ref="buildSection"
  >
    <div class="container">
      <h2 class="huge-text" ref="hugeText">CONTACT PERSON</h2>

      <!-- CARDS -->
      <div class="grid-content" ref="gridContent">
        <div
          class="card"
          v-for="(item, index) in cardsData"
          :key="index"
          ref="cards"
        >
          <h3>{{ item.title }}</h3>
          <p>{{ item.desc }}</p>
        </div>
      </div>

      <!-- BUTTON WHATSAPP -->
      <div class="cta-wrapper">
        <a
          href="https://wa.me/6281234567890?text=Halo%20saya%20ingin%20daftar"
          target="_blank"
          rel="noopener"
          class="wa-btn"
        >
          WhatsApp
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import { gsap } from "gsap";

export default {
  name: "SectionEtc",

  data() {
    return {
      cardsData: [
        {
          title: "WhatsApp",
          desc: "0852-8106-1224"
        },
        {
          title: "Email",
          desc: "alifnurfikri155@gmail.com"
        },
        {
          title: "Instagram",
          desc: "alip31_"
        }
      ]

    };
  },

  mounted() {
  this.$nextTick(() => {

    
    gsap.from(this.$refs.hugeText, {
      scrollTrigger: {
        trigger: this.$refs.buildSection,
        start: "top 80%",
        scrub: 1
      },
      y: 200,
      opacity: 0
    });

    
    gsap.from(this.$refs.cards, {
      scrollTrigger: {
        trigger: this.$refs.gridContent,
        start: "top 90%"
      },
      y: 50,
      opacity: 0,
      stagger: 0.2,
      duration: 1
    });

  });
}

};
</script>

<style lang="scss" scoped>
.section-build {
  min-height: 100vh;
  background: #000;
  color: #fff;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .huge-text {
    font-size: 15vw;
    font-weight: 900;
    margin-bottom: 50px;
    line-height: 1;
    text-align: center;
  }

  .grid-content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    width: 80%;
    margin: 0 auto;

    .card {
      background: #111;
      padding: 30px;
      border-radius: 10px;
      border: 1px solid #222;

      h3 {
        margin-bottom: 10px;
      }

      p {
        font-size: 0.9rem;
        line-height: 1.6;
        color: #aaa;
      }
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

 
  .cta-wrapper {
    margin-top: 50px;
    text-align: center;

    .wa-btn {
      display: inline-block;
      padding: 14px 32px;
      background: #25d366;
      color: #000;
      font-weight: 600;
      border-radius: 40px;
      text-decoration: none;
      transition: all 0.3s ease;

      &:hover {
        background: #1ebe5d;
        transform: translateY(-3px);
      }
    }
  }
}
</style>
