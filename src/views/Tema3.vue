<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Comunicación
    
    p.mb-5(data-aos="fade-down") En #[em social media], una de las formas más vistas de comunicación es la escrita o impresa, donde esta no se somete ni al espacio ni al tiempo, en ella, la interacción entre el emisor y el receptor no siempre se da de forma inmediata.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/tema3-1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 #[b La importancia de la comunicación escrita radica] en que las personas, a través de palabras escritas en diferentes medios (libros, comunicados, cartas, redes sociales, etc.), manifiestan una idea, suceso o su punto de vista.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-12.col-md-6.col-lg-6
        p La comunicación escrita es la técnica en la cual el emisor o persona que envía el mensaje realiza diferentes tipos de textos o escritos, que pueden convertirse en una novela, artículo periodístico, obra literaria, etc.
        p Cuando hablamos de comunicación escrita, a través de un canal de comunicación como el Internet, donde el medio no es físico, sino virtual, también encontramos un emisor, que en este caso es la persona que emite el mensaje a través de un dispositivo como un computador, tableta, teléfono celular, entre otros.
        p El objetivo o propósito de la comunicación escrita es compartir mensajes entre personas, en muchos casos y sobre todo para los jóvenes, es preferible compartir mensajes escritos que realizar llamadas en vivo, pues se considera que se puede abarcar mayor cantidad de datos y se hace de manera inmediata sin esperar la respuesta de un receptor, aunque sino se tiene claridad en el proceso puede generar un problema o cuello de botella en lo que se quiere expresar.
      .col-12.col-md-6.col-lg-6
        img(src='@/assets/curso/temas/tema3/tema3-2.png', alt='')

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-down")
      .col-12.col-lg-10
        .cajon.color-secundario.p-4
          p Los diferentes tipos de comunicación escrita se pueden clasificar teniendo en cuenta las características del público al que se dirige el medio de transmisión.
          p.mb-0 El uso de la comunicación escrita es apropiado dependiendo del propósito del emisor y el fin del mensaje, pero no resulta útil en determinados contextos.

    p.mb-5(data-aos="fade-down") Entre las ventajas y desventajas de la comunicación escrita se encuentran:

    TabsC.color-primario.mb-5(data-aos="zoom-in-down")
      .py-3.py-md-4(titulo="Ventajas")
        .row
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema3/tema3-3.png', alt='')
          .col-md-7
            ul.lista-ul.ms-3
              li.mb-1
                span.icon ✔ 
                | La permanencia, ya que la información queda registrada para ser fuente de consulta y se puede leer en cualquier momento
              li.mb-1
                span.icon ✔ 
                | Suministra información con precisión, debido a que permite analizar y reflexionar frente a lo que se está leyendo.
              li.mb-1
                span.icon ✔ 
                | Los documentos legales están escritos y dispuestos en las entidades y en la web para consulta.
      .py-3.py-md-4(titulo="Desventajas")
        .row
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema3/tema3-4.png', alt='')
          .col-md-7
            ul.lista-ul.ms-3
              li.mb-1
                span.icon ✔ 
                | No hay respuesta inmediata, excepto cuando existen canales cuya mensajería es inmediata.
              li.mb-1
                span.icon ✔ 
                | Como requiere de soporte físico, los costos son altos, ya que va desde el uso de papel hasta el uso de dispositivos electrónicos en la mayoría de los casos.
              li.mb-1
                span.icon ✔ 
                | Demanda tiempo para su lectura, ya que requiere de la decodificación para responder el mensaje.
              li.mb-1
                span.icon ✔ 
                | El lector debe contar con habilidades y competencias tanto en el lenguaje como en el vocabulario, de lo contrario, es imposible comprender lo que está escrito.

    p.mb-5(data-aos="fade-down") Una vez, comprendidas las ventajas y desventajas de la comunicación escrita, se mencionan los elementos que se hacen fundamentales en el proceso comunicativo:

    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-12.col-lg-10.mb-2.mb-md-0
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 3. </b> <i>Proceso comunicativo</i>
        figure 
          img.d-none.d-md-block(src='@/assets/curso/temas/tema3/fig-3a.svg', alt='En la figura 3 se muestra el proceso comunicativo y cada uno de sus componentes, el emisor, el receptor y el mensaje.')
          img.d-block.d-md-none(src='@/assets/curso/temas/tema3/fig-3b.svg', alt='En la figura 3 se muestra el proceso comunicativo y cada uno de sus componentes, el emisor, el receptor y el mensaje.')
          
    p.mb-3(data-aos="fade-down") La comunicación escrita requiere del uso de reglas ortográficas; cuando no se usan adecuadamente, el sentido del mensaje cambia, como, por ejemplo, el uso de la tilde en una palabra o el uso de la coma en una oración; se deben respetar las normas gramaticales y los signos de puntuación a la hora de elaborar una comunicación o mensaje en las redes sociales. 
    p.mb-5(data-aos="fade-down") Por lo anterior, en la comunicación intervienen algunos componentes, como la ortografía, la gramática y la semántica, de la siguiente manera:

    .row.mb-5(data-aos="zoom-in-down")
      .col-sm-6.col-lg-4.mb-4.mb-lg-0.d-flex.align-items-stretch
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-7.col-lg-6
              figure
                img(src='@/assets/curso/temas/tema3/tema3-5.svg', alt='') 
          h4.text-center Ortografía
          p Es la parte de la gramática que tiene que ver con la forma correcta de escribir las palabras con las que nos comunicamos; una comunicación efectiva requiere de la forma correcta con la que se elabore el mensaje, el cual debe ser comprensible; se debe corroborar la ortografía con el ánimo de que el mensaje no tenga errores.
      .col-sm-6.col-lg-4.mb-4.mb-lg-0.d-flex.align-items-stretch
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-7.col-lg-6
              figure
                img(src='@/assets/curso/temas/tema3/tema3-6.svg', alt='')
          h4.text-center Gramática
          p Es esa parte de la lingüística que se dedica a estudiar el conjunto de normas que rige la lengua en la que nos estamos comunicando. La diferencia entre ortografía y gramática consiste en que la gramática estudia y completa la estructura de una lengua y la ortografía establece las normas para escribir correctamente y no analiza el texto.
      .col-sm-6.col-lg-4.mb-4.mb-sm-0.d-flex.align-items-stretch
        .tarjeta--boton.color-primario.p-4.w-100
          .row.justify-content-center.mb-3
            .col-7.col-lg-6
              figure
                img(src='@/assets/curso/temas/tema3/tema3-7.svg', alt='')
          h4.text-center Semántica
          p Estudia el significado de la palabra y las expresiones, es decir, lo que la palabra expresa o quiere decir al momento de hablar o escribir algo.


</template>

<script>
export default {
  name: 'Tema3',
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
