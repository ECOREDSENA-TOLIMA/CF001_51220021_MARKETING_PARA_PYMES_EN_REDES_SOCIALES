<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p A continuación, se describe el tema principal del componente formativo #[em Social media] y redes sociales, son plataformas digitales donde las personas se conectan, comparten contenido y se comunican en línea. Son fundamentales en la era de la información y la interacción, transformando la comunicación personal y empresarial.
    p.mb-5 Las redes sociales permiten la difusión de noticias, marketing digital, conexiones personales y profesionales, y el intercambio de ideas. Plataformas populares como Facebook, X, Instagram y LinkedIn desempeñan un papel central en la construcción de comunidades en línea y la promoción de marcas. Las estrategias efectivas en las redes sociales son esenciales para el éxito de las empresas y la influencia en la opinión pública.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="En la síntesis del componente formativo se muestran los temas mas relevantes sobre social media y redes sociales. Entre ellos el concepto de pymes, de comunicación y de Big Data.")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
