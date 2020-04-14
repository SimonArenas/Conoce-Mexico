<template>
  <section class="section-book">
    <div class="row">
      <div class="book">
        <div class="book__form">
          <form class="form" action="#">
            <div class="u-mb-5">
              <h2 class="heading-secondary">
                Reserva ahora
              </h2>
            </div>
            <div class="form__group">
              <input
                type="text"
                class="form__input"
                placeholder="Nombre"
                required
                id="nombre"
              />
              <label class="form__label" for="nombre">Nombre</label>
            </div>
            <div class="form__group">
              <input
                type="email"
                class="form__input"
                placeholder="Correo electrónico"
                required
                id="email"
              />
              <label class="form__label" for="email">Correo</label>
            </div>

            <div class="form__group u-mb-5">
              <div class="form__radio-group">
                <input
                  type="radio"
                  class="form__radio-input"
                  id="small"
                  name="size"
                />
                <label for="small" class="form__radio-label">
                  <span class="form__radio-button"></span>
                  Grupo pequeño</label
                >
              </div>
              <div class="form__radio-group">
                <input
                  type="radio"
                  class="form__radio-input"
                  id="large"
                  name="size"
                />
                <label for="large" class="form__radio-label">
                  <span class="form__radio-button"></span>
                  Grupo grande</label
                >
              </div>
            </div>

            <div class="form__group" >
              <button class="btn btn-red">Siguiente 👉🏻</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Booking"
};
</script>

<style></style>
