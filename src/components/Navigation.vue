<template>
  <div class="navigation">
    <input class="navigation__checkbox" type="checkbox" id="navi-toggle" />
    <label class="navigation__button" for="navi-toggle">
      <span class="navigation__icon">&nbsp;</span>
    </label>
    <div class="navigation__background">&nbsp;</div>
    <nav class="navigation__nav">
      <ul class="navigation__list">
        <li class="navigation__item">
          <a href="" class="navigation__link">Sobre nosotros</a>
        </li>
        <li class="navigation__item">
          <a href="" class="navigation__link">Beneficios</a>
        </li>
        <li class="navigation__item">
          <a href="" class="navigation__link">Tours populares</a>
        </li>
        <li class="navigation__item">
          <a href="" class="navigation__link">Testimonios</a>
        </li>
        <li class="navigation__item">
          <a href="" class="navigation__link">Reservar</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navigation",
};
</script>

<style></style>
