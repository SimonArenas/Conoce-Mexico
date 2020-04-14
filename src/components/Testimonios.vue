<template>
  <section class="section-testimonios">
    <div class="bg-video">
      <video class="bg-video__content" autoplay muted loop>
        <source src="../assets/video.mp4" type="video/mp4" />
        <source src="../assets/video.webm" type="video/webm" />
        Tu navegador no soporta vídeos 😢
      </video>
    </div>

    <div class="u-text-center u-mb-8">
      <h2 class="heading-secondary" style="color: white">
        Viajeros felices
      </h2>
    </div>

    <div class="row">
      <div class="story">
        <figure class="story__shape">
          <figcaption class="story__caption">Lizbeth</figcaption>
          <img class="story__img" src="../assets/persona2.png" alt="" />
        </figure>
        <div class="story__text">
          <h3 class="story__title heading-tertitary">
            El mejor fin de semana con mi familia
          </h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure vel,
            necessitatibus numquam laborum deleniti deserunt temporibus? Eum
            enim deleniti, eaque laudantium atque animi nobis? Impedit facere
            praesentium quisquam inventore vero!
          </p>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="story">
        <figure class="story__shape">
          <figcaption class="story__caption">Pedro</figcaption>
          <img class="story__img" src="../assets/persona1.png" alt="" />
        </figure>
        <div class="story__text">
          <h3 class="story__title heading-tertitary">
            Nunca olvidaré este viaje
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nemo
            eveniet ipsam laborum dolorum? Earum cumque sunt assumenda
            consequuntur, velit dolore eius? Harum placeat repudiandae incidunt,
            consequuntur ducimus similique ut.
          </p>
        </div>
      </div>
    </div>
    <div class="u-text-center">
      <a href="#" class="btn-text" style="color:white"
        >Ver todos los testimonios ❤</a
      >
    </div>
  </section>
</template>

<script>
export default {
  name: "Testimonios"
};
</script>

<style></style>
