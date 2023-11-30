<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 #[em Social media]

    .row.justify-content-around.align-items-center.mb-5(data-aos="fade-down")
      .col-12.col-md-5.mb-md-0.mb-3
        img(src='@/assets/curso/temas/tema2/tema2-1.png', alt='')
      .col-0.col-md-1
      .col-12.col-md-6
        p #[em Social media], son plataformas en línea, diseñadas para la comunicación y la interacción social. Permiten a las personas conectarse, compartir información, opiniones, imágenes y videos con amigos, familiares y otros contactos en todo el mundo. Estas plataformas incluyen gigantes como Facebook, X, Instagram, LinkedIn y muchas más. Además de las conexiones personales, las redes sociales también desempeñan un papel esencial en el #[em marketing] digital, brindando a empresas y organizaciones la oportunidad de llegar a un público más amplio.

    p.mb-5(data-aos="fade-down") A continuación, se puede observar la diferencia que existe entre las redes sociales y el <em>social media</em>:

    .row.justify-content-center.mb-5.tarjeta.tarjeta--azul.p-4(data-aos="fade-left")
      .col-12.mb-2.mb-md-0
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 2. </b> <i>Diferencia entre social media y redes sociales</i>
      .col-12.col-md-8.col-lg-8.mb-2.mb-md-0
        figure 
          img.d-none.d-md-block(src='@/assets/curso/temas/tema2/fig-2a.svg', alt='En la figura 2 se muestra la diferencia entre social media y redes sociales teniendo en cuenta que la primera es donde se ofrece contenido y las redes son el medio donde se distribuyen.')
          img.d-block.d-md-none(src='@/assets/curso/temas/tema2/fig-2b.svg', alt='En la figura 2 se muestra la diferencia entre social media y redes sociales teniendo en cuenta que la primera es donde se ofrece contenido y las redes son el medio donde se distribuyen.')
          
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/tema2-2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En cuanto a social #[em media marketing], un nuevo integrante en el mundo del #[em marketing] digital, en donde se retan los consumidores y las marcas: esto permite preguntarse si la publicidad ha cambiado, o si el consumidor ha cambiado la forma de ver las marcas, o si por el contrario, quien ha cambiado es el consumidor; porque ahora los compradores no tienen restricciones de adquirir su producto, sin importar su ubicación y los tiempos de espera son casi inmediatos.

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-down")
      .col-12.col-lg-10.mb-2
        img(src='@/assets/curso/temas/tema2/tema2-3.png', alt='')
      .col-12.col-lg-10
        .cajon.color-primario.p-4
          p.mb-0 Los servicios que presta el #[em social media] corresponden al desarrollo de campañas y operaciones específicas en las plataformas y los canales de las redes sociales, teniendo en cuenta la estrategia general de la empresa; también se puede utilizar como espacio para desarrollar otras campañas y acciones de #[em marketing] de la empresa.
      
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/tema2-4.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Es importante tener presente que la estrategia de #[em social media] se refiere a la forma como la empresa usará las redes sociales para lograr los objetivos de comunicación, e igualmente, qué herramientas empleará para conseguirlo; básicamente es la declaración de intención marcando las metas y objetivos que se puedan medir en el uso de las redes sociales.

    p.mb-3(data-aos="fade-down") Por lo anterior, la estrategia de #[em social media], no solo le permitirá el logro de objetivos de comunicación planteados por las empresas, sino también facilitará el mejoramiento de su reputación, el incremento de ventas, posicionar su valor diferencial frente a la competencia, aumentar la visibilidad y mejoramiento de la imagen corporativa, para que siempre esté presente en clientes ya logrados y en potenciales. 
    p.mb-3(data-aos="fade-down") Las estrategias de comunicación en redes sociales deben propender por la participación del usuario, permitirle que participe y se sienta implicado en las decisiones que tome la empresa; obviamente, se debe estar preparado para las críticas y recibirlas con el ánimo de mejorar continuamente; igualmente, debe facilitar la participación de sus empleados, lo cual fomenta la transparencia y mejora la confianza del cliente. 
    p.mb-3(data-aos="fade-down") También, en la estrategia de comunicación, se debe proporcionar la mayor información posible, utilizando las redes sociales en la organización como medio para hacer llegar aquella de interés para los consumidores, dando consejos de expertos en temas variados del sector productivo de la empresa e, igualmente, noticias de utilidad para los clientes.
    p.mb-5(data-aos="fade-down") A continuación, se mencionan acciones importantes a tener en cuenta para la creación de una estrategia de #[em marketing] en redes sociales. 

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-down")
      .col-lg-10.col-12
        PasosA.color-primario.mb-5(tipo="n" data-aos="fade-right")
          .row.justify-content-center.align-items-center
            .col-md-7.mb-4.mb-md-0
              h4 Paso 1
              p Determine las metas de #[em marketing] en redes sociales que coincidan con sus objetivos comerciales.
            .col-md-5
              figure
                img(src='@/assets/curso/temas/tema2/tema2-5.png', alt='')
          .row.justify-content-center.align-items-center
            .col-md-5.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema2/tema2-6.png', alt='')
            .col-md-7.text-start
              h4 Paso 2
              p Estudie todo lo que pueda para conocer a su audiencia.
          .row.justify-content-center.align-items-center
            .col-md-7.mb-4.mb-md-0
              h4 Paso 3
              p Conozca muy bien a su competencia.
            .col-md-5
              figure
                img(src='@/assets/curso/temas/tema2/tema2-7.png', alt='')
          .row.justify-content-center.align-items-center
            .col-md-5.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema2/tema2-8.png', alt='')
            .col-md-7.text-start
              h4 Paso 4
              p Realice auditorías periódicamente sobre las redes sociales.
          .row.justify-content-center.align-items-center
            .col-md-7.mb-4.mb-md-0
              h4 Paso 5
              p Configure las cuentas y mejore sus perfiles.
            .col-md-5
              figure
                img(src='@/assets/curso/temas/tema2/tema2-9.png', alt='')

</template>

<script>
export default {
  name: 'Tema2',
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
