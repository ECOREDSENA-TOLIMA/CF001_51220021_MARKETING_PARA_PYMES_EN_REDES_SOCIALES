<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Posicionamiento

    p.mb-3(data-aos="fade-down") El posicionamiento es uno de los objetivos más deseados por las empresas, debido a que, si la empresa se posiciona en las redes sociales, esto se convierte en un sello que garantiza que sea conocida y genere confianza ante el consumidor. 
    p.mb-5(data-aos="fade-down") Posicionar no es solo que aparezca en los buscadores más reconocidos en los primeros lugares, es hacer presencia en las demás redes sociales de manera orgánica y, si el presupuesto lo permite, también invirtiendo en los mejores espacios. 

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema6/tema6-1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Antes de posicionar una empresa o marca, es importante: tener registrada la marca de la empresa o que la PYME esté legalmente constituida. De esta manera, con total tranquilidad, se puede difundir la información, como sus logo-símbolos, productos y servicios. 

    p.mb-3(data-aos="fade-down") Se necesita un buen posicionamiento en las redes sociales por la cantidad de plataformas que existen hoy en Internet; las redes sociales tienen un gran alcance y ofrecen muchas oportunidades para promocionar marcas o negocios.
    p.mb-3(data-aos="fade-down") Entre las razones por las que se ha convertido en una necesidad posicionarse en redes sociales, están:

    .tarjeta.color-acento-botones.p-4.mb-5(data-aos="fade-down")
      .row.justify-content-center.align-items-center
        .col-12.col-lg-8
          ul.lista-ul.ms-3
            li.mb-0
              span.icon ✔ 
              | Desarrollar la imagen y mejorarla constantemente (imagen corporativa).
            li.mb-0
              span.icon ✔ 
              | Ganar audiencia y conseguir nuevos seguidores o clientes.
            li.mb-0
              span.icon ✔ 
              | Comercializar los productos y servicios de forma más eficiente, ya que se focaliza el segmento destinatario.
            li.mb-0
              span.icon ✔ 
              | Es más fácil fidelizar clientes porque se tiene un contacto inmediato y permanente, lo cual permite responder a preguntas, quejas y reclamos rápidamente.
            li.mb-0
              span.icon ✔ 
              | Optimiza los motores de búsqueda SEO, lo que permite que el contenido se mantenga actualizado automáticamente y lo pone en una posición de liderazgo en #[em Google] y otros motores de búsqueda.
            li.mb-0
              span.icon ✔ 
              | Mejorar las ventas de los productos o servicios, ya que se incrementa el efecto de comercialización y da vida a otros canales de #[em marketing], tales como #[em blogs], boletines de noticias, seminarios web, eventos #[em offline], lo cual permite un mejor aprovechamiento de las redes sociales.
            li.mb-0
              span.icon ✔ 
              | Tener implementadas plataformas de pago virtual, para garantizar la facilidad de adquisición de los productos. 
        .col-12.col-lg-3
          img(src='@/assets/curso/temas/tema6/tema6-2.png', alt='')

    p.mb-3(data-aos="fade-down") A la hora de seleccionar las plataformas de redes sociales más adecuadas, se debe ser muy cuidadoso, ya que se necesita buscar las que ofrecen las mejores oportunidades para atraer un grupo objetivo.
    p.mb-5(data-aos="fade-down") A continuación, se relacionan una serie de páginas que prestan servicios para personalizar las redes sociales:

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-1
          p.titulo.pb-0.mb-0 #[b Tabla 3.] #[i Páginas para personalizar] 
        .tabla-a.color-acento-contenido
          table(style="min-width:auto")
            thead
              tr.cabecera-a.text-center
                th Nombre
                th Objetivo
            tbody
              tr
                td.text-center #[em Logaster]
                td.text-start Permite la creación de logotipos para las plataformas de redes sociales.
              tr
                td.text-center #[em Crello.com]
                td.text-start Permite diseñar imágenes para las portadas de sus sitios en redes sociales.
              tr
                td.text-center #[em Sproutsocial]
                td.text-start Individualiza las imágenes con el ánimo de que se cumpla con las especificaciones solicitadas en las plataformas de redes sociales.
              tr
                td.text-center Pablo
                td.text-start Permite la búsqueda de imágenes de portada y añade textos.
              tr
                td.text-center #[em Pixabay.com]
                td.text-start Es un buscador de fotos de stock, de donde se pueden bajar excelentes fotos de portada gratuitamente.
              tr
                td.text-center #[em Pikwizard.com]
                td.text-start Sitio de fotos de personas, usted puede bajarlas gratuitamente.
              tr
                td.text-center #[em Pexels.com]
                td.text-start Imágenes gratuitas para crear portadas y contenido en redes sociales.
              tr
                td.text-center #[em Unsplash]
                td.text-start Sitio web de fotos de stock que permite crear sitios únicos en redes sociales.
              tr
                td.text-center #[em Jaymantri.com]
                td.text-start Se pueden crear imágenes de portada abstractas y bonitas publicaciones.
              tr
                td.text-center #[em Designspiration]
                td.text-start Espacio extraordinario para buscar inspiración para contenidos a publicar en redes sociales.
              tr
                td.text-center #[em Fonts.google.com]
                td.text-start Buscador de fuentes a consultar gratuito.
              tr
                td.text-center #[em Coolors.co]
                td.text-start Extraordinarias representaciones de color para crear atractivas portadas.


</template>

<script>
export default {
  name: 'Tema6',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
