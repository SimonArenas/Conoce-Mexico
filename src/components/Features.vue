<template>
  <section class="section-features">
    <div class="row">
      <div v-for="(feature, i) in features" :key="i" class="col-1-of-3">
        <div class="feature-box">
          <img class="feature-box__icon" v-bind:src="feature.img" alt="" />

          <h3 class="heading-tertitary" style="margin-top: 2rem">
            {{ feature.title }}
          </h3>
          <p class="feature-box__text">{{ feature.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Features",

  data() {
    return {
      features: [
        {
          id: 1,
          // img: "https://i.imgur.com/3JZ6Z40.png",
          img: "https://i.imgur.com/HwL5GuV.png",
          title: "DESCUBRE MÉXICO CON NOSOTROS",
          text:
            "¡Tenemos los mejores tours para que viajes durante todo el año!",
        },
        {
          id: 2,
          img: "https://i.imgur.com/2pMD4NG.png",
          title: "EL MEJOR TRANSPORTE",
          text:
            "Que vayas cómodo y seguro en todos tus viajes es una prioridad para nosotros.",
        },
        {
          id: 3,
          img: "https://i.imgur.com/1VgvuF8.png",
          title: "STAFF DE VIAJE",
          text:
            "En todos nuestros viajes grupales cuentas con staff de viaje experto y disponible las 24 horas.",
        },
      ],
    };
  },
};
</script>

<style></style>
