<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 #[em Big Data]

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-down")
      .col-12.col-lg-10.mb-2
        img(src='@/assets/curso/temas/tema7/tema7-1.png', alt='')
      .col-12.col-lg-10 
        .cajon.color-primario.p-4
          p.mb-0 El #[em Big Data] es un proceso que examina e interpreta grandes volúmenes de datos, ya sea estructurados o no estructurado; son tan grandes y complejos que estos datos almacenados remotamente se vuelven difíciles de procesar con métodos tradicionales, sin embargo, son necesarios para que puedan ser utilizados por las empresas de todos los sectores económicos para la toma de decisiones.

    p.mb-3(data-aos="fade-down") Hablar de Big Data es referirse a un conjunto de datos o combinaciones de conjuntos de datos de gran volumen y complejidad; la complejidad y velocidad con la que crecen dificulta muchas veces su captura, gestión o análisis, para lo cual se usan herramientas como bases de datos y estadísticas convencionales, teniendo en cuenta el tiempo para el que son útiles.
    p.mb-3(data-aos="fade-down") El Big Data ha tomado gran importancia en los planes de comunicación digital debido a que, gracias a él, se puede implementar la analítica de datos, donde es el insumo número uno para las empresas, para conocer datos e información para llegar al público objetivo.
    p.mb-5(data-aos="fade-down") A continuación, se pueden observar las principales características del Big Data:

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-1
          p.titulo.pb-0.mb-0 #[b Tabla 4.] #[i Características del Big Data] 
        .tabla-a.color-acento-contenido
          table(style="min-width:auto")
            thead
              tr.cabecera-a.text-center
                th Nombre
                th Objetivo
            tbody
              tr
                td.text-center Su relevancia
                td.text-start Porque para las empresas proporciona respuestas a preguntas que ni siquiera ellas mismas sabían que tenían, dicho de otra manera, facilita una gran cantidad de información que puede ser procesada o probada de la forma en que la empresa considere apropiada. 
              tr
                td.text-center Su función
                td.text-start Los datos que se extraen y analizan contribuyen a conocer cómo se comportan los clientes, y permite la actualización y optimización de los inventarios con respecto a la demanda en tiempo real.
              tr
                td.text-center El análisis
                td.text-start Ayuda a las empresas con el aprovechamiento de los datos y orienta a utilizarlos con el fin de que identifiquen nuevas oportunidades, las lleva a encontrar negocios inteligentes, igualmente, que hagan operaciones eficientes y brinden mayores garantías a sus clientes.

    .tarjeta.color-acento-botones.p-4.mb-5(data-aos="fade-down")
      .row.justify-content-center.align-items-center
        .col-12.col-lg-6
          p Las empresas exitosas que usan #[em Big Data] logran valor de la siguiente manera:
          ul.lista-ul.ms-3
            li.mb-0
              span.icon ✔ 
              | Reducen costos, ya que utilizan importantes tecnologías de datos, tales como #[em Hadoop] y el análisis basado en la nube, los costos disminuyen cuando se almacenan grandes cantidades de datos y contribuyen con la identificación de nuevas maneras de hacer negocios.
            li.mb-0
              span.icon ✔ 
              | Logran tomar mejores decisiones rápidamente, ya que, con la velocidad de #[em Hadoop] y su análisis de memoria combinada, se logran analizar nuevas fuentes de consultas y la empresa puede analizar información inmediatamente y tomar decisiones con base en los datos obtenidos.
            li.mb-0
              span.icon ✔ 
              | Sacar al mercado nuevos productos y servicios, ya que tienen la capacidad de identificar las necesidades del cliente y pueden darle lo que necesita; con el análisis de #[em Big Data] las empresas crean nuevos productos para satisfacer la necesidad del cliente.
        .col-10.col-lg-4
          img(src='@/assets/curso/temas/tema7/tema7-2.png', alt='')
            
    p.mb-5(data-aos="fade-down") Los tipos de datos son:

    .row.mb-5(data-aos="zoom-in-down")
      .col-sm-6.col-lg-4.mb-4.mb-lg-0.d-flex.align-items-stretch
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-7.col-lg-6
              figure
                img(src='@/assets/curso/temas/tema7/tema7-5.svg', alt='') 
          h4.text-center Datos no estructurados
          p En ellos, encontramos: documentos, videos, audios, etc.
      .col-sm-6.col-lg-4.mb-4.mb-lg-0.d-flex.align-items-stretch
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-7.col-lg-6
              figure
                img(src='@/assets/curso/temas/tema7/tema7-6.svg', alt='')
          h4.text-center Datos semiestructurados
          p Como, por ejemplo: #[em software], hojas de cálculo, informes.
      .col-sm-6.col-lg-4.mb-4.mb-sm-0.d-flex.align-items-stretch
        .tarjeta--boton.color-primario.p-4.w-100
          .row.justify-content-center.mb-3
            .col-7.col-lg-6
              figure
                img(src='@/assets/curso/temas/tema7/tema7-7.svg', alt='')
          h4.text-center Datos estructurados
          p Se encuentran: tabla Excel, hojas de cálculo, bases de datos y cuestionarios tipo #[em test].

</template>

<script>
export default {
  name: 'Tema7',
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
