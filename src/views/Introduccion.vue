<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-down")
      .col-12
        p.mb-4 Las redes sociales y los medios de comunicación social han transformado nuestra forma de interactuar, compartir información y construir conexiones en la era digital. En la última década, plataformas como Facebook, X, Instagram y LinkedIn han revolucionado la manera en que las personas se comunican, crean comunidades y difunden contenido. Estas redes se han convertido en un espacio fundamental para la expresión personal, el activismo, el marketing y la creación de negocios. A medida que la influencia de las redes sociales continúa creciendo, su impacto en la sociedad, la política, la cultura y la economía es innegable. 
        p Para iniciar el desarrollo temático y conceptual de este componente formativo, es importante contextualizar sobre los temas que se tratarán, es así que le invitamos a consultar el siguiente vídeo:
  
    figure(data-aos="zoom-in-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/h_IOF_MmwGk" title="Social media y redes sociales" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Social media y redes sociales

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
