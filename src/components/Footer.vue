<template>
  <footer class="footer">
    <div class="footer__logo-box">
      <!-- <picture class="footer__logo">
        <source srcset="../assets/1x/logo.png 1x, ../assets/logo.png 2x"
          media="(max-width: 37.5em)">
        <img srcset="../assets/1x/logo.png 1x, ../assets/logo.png 2x" alt="logo"
      /></picture> -->
      <img
        class="footer__logo"
        srcset="../assets/1x/logo.png 1x, ../assets/logo.png 2x"
        alt="logo"
      />
    </div>
    <div class="row">
      <div class="col-1-of-2">
        <div class="footer__navigation">
          <ul class="footer__list">
            <li class="footer__item">
              <a class="footer__link" href="">Github</a>
            </li>
            <li class="footer__item">
              <a class="footer__link" href="">Twitter</a>
            </li>
            <li class="footer__item">
              <a class="footer__link" href="">Linkedin</a>
            </li>
            <li class="footer__item">
              <a class="footer__link" href="">Website</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-1-of-2">
        <p class="footer__description">
          ¡Hola, soy <strong>Simón Arenas⚡</strong>! Tengo el sueño de crear
          una startup de viajes alternativos <i>(whatever that means)</i>. Al
          menos ya tengo la página web, solo me falta TODO lo demás. Este sitio
          fue creado con <strong> VueJS💚</strong>. Puedes ver el repositorio
          aquí.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style></style>
