<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 PYMES en Colombia
    
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-down")
      .col-12.col-md-6.col-lg-6
        p Una PYME, que significa Pequeña y Mediana Empresa, es un término utilizado para referirse a organizaciones que tienen un tamaño limitado en términos de ingresos, activos y número de empleados en comparación con las grandes corporaciones. Las características específicas de una PYME pueden variar según el país y la industria, pero generalmente se considera que una empresa es una PYME si cumple con ciertos límites de tamaño. Estos límites pueden incluir, por ejemplo, un máximo de empleados, un cierto nivel de ingresos anuales o un límite en el valor de los activos.
        p Las PYME desempeñan un papel crucial en la economía, ya que contribuyen significativamente a la generación de empleo y al desarrollo económico de muchas regiones y países. También son conocidas por su agilidad y capacidad de adaptación, lo que les permite competir en mercados diversificados.
        p A nivel nacional, el gobierno colombiano ha implementado políticas y programas de apoyo específicos para promover el crecimiento y la competitividad de las PYMES. Esto incluye el acceso a financiamiento, capacitación, asesoría técnica y otras iniciativas destinadas a impulsar el espíritu empresarial y fomentar la innovación en este sector.
      .col-10.col-md-6.col-lg-6
        img(src='@/assets/curso/temas/tema1/tema1-1.png', alt='')

    p.mb-5(data-aos="fade-down") En la siguiente tabla, se puede apreciar la proporción entre los diferentes tipos de establecimientos y/o empresas según su naturaleza de operaciones o actividad económica y los trabajadores que tienen vinculados:

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-12(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-1
          p.titulo.pb-0.mb-0 #[b Tabla 1.] #[i Micro establecimientos y empleo] 
        .tabla-a.color-acento-contenido
          table(style="min-width:auto")
            caption Nota. Tomado de Businesscol (2022).
            thead
              tr.cabecera-a.text-center
                th Sector
                th Establecimientos
                th Trabajadores
            tbody
              tr.text-center
                th Comercio
                td 557.759
                td 630.267
              tr.text-center
                th Servicios
                td 288.771
                td 381.328
              tr.text-center
                th Industria
                td 120.785
                td 156.653
              tr.text-center
                th Total
                td 967.315
                td 1.168.248
      
    p.mb-5(data-aos="fade-down") Según la #[b Ley 590 de 2000], creada para promover el desarrollo integral de las micro, pequeñas y medianas empresa, en Colombia, las PYMES se clasifican de la siguiente manera:
    
    .row.mb-5(data-aos="zoom-in-down")
      .col-sm-6.col-lg-4.mb-4.mb-lg-0.d-flex.align-items-stretch
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-7.col-lg-6
              figure
                img(src='@/assets/curso/temas/tema1/tema1-2.svg', alt='') 
          h4 Microempresa
          p Son las empresas cuyo personal no supera los 10 trabajadores y cuenta con activos inferiores a 501 SMMLV.
      .col-sm-6.col-lg-4.mb-4.mb-lg-0.d-flex.align-items-stretch
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-7.col-lg-6
              figure
                img(src='@/assets/curso/temas/tema1/tema1-3.svg', alt='')
          h4 Pequeña empresa
          p Estas empresas cuentan en su personal entre 11 y 50 trabajadores, sus activos llegan a ser mayores a 501 y no superan los 5.001 SMMLV.
      .col-sm-6.col-lg-4.mb-4.mb-sm-0.d-flex.align-items-stretch
        .tarjeta--boton.color-primario.p-4.w-100
          .row.justify-content-center.mb-3
            .col-7.col-lg-6
              figure
                img(src='@/assets/curso/temas/tema1/tema1-4.svg', alt='')
          h4 Mediana empresa
          p En estas empresas, el número de trabajadores está entre las 51 y 200 personas; cuenta con activos totales que van entre los 5.001 y los 15.000 SMMLV.

    p.mb-5(data-aos="fade-down") En la siguiente figura, se puede observar una estadística sobre las PYMES en nuestro país:

    .row.justify-content-center.mb-5
      .col-12.col-lg-10.col-md-11.mb-2.mb-md-0(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 1. </b> <i>Las PYMES en Colombia</i>
        figure 
          img.d-none.d-md-block(src='@/assets/curso/temas/tema1/fig-1a.svg', alt='En la figura 1 se muestra la estadística de distribución de las pymes en Colombia según el sector al cual pertenecen.')
          img.d-block.d-md-none(src='@/assets/curso/temas/tema1/fig-1b.svg', alt='En la figura 1 se muestra la estadística de distribución de las pymes en Colombia según el sector al cual pertenecen.')
          figcaption Nota. Asmar, S. (2021)

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-down")
      .col-12.col-md-7.col-lg-7
        p El DANE (Departamento Administrativo Nacional de Estadística), afirma que, en el año 2020, se crearon 5.446,329 micronegocios, producto de la pandemia, los cuales arrojaron ingresos por 124 billones, que obedecen a las actividades económicas: “Comercio y reparación de vehículos automotores y motocicletas (33,0 %); agricultura, ganadería, caza, silvicultura y pesca (16,1 %); industria manufacturera (9,8 %); actividades inmobiliarias, profesionales y servicios administrativos (8,8 %); y alojamiento y servicios de comida (8,2 %)”. 
        p Las PYMES cobran importancia en la economía de los países y su reactivación garantiza para cualquier país mejorar las condiciones económicas. Así mismo representan en Colombia el espíritu emprendedor característico, ya que, a través de ellas, se ofrecen diferentes productos y servicios, prueba de ello son los dos últimos años en los que hubo que adaptarse a la anormalidad mundial y muchos pequeños y medianos negocios tuvieron que innovar para permanecer en el mercado; en este sentido, las redes sociales jugaron un papel muy importante, ya que ayudaron a dinamizar la economía de nuestro país.
      .col-10.col-md-5.col-lg-5
        img(src='@/assets/curso/temas/tema1/tema1-5.png', alt='')

    .row.align-items-center.mb-4(data-aos="fade-down-right")
      .d-flex.titulo-h3
        img(src='@/assets/curso/temas/icono.svg', style="width: 30px", alt='')
        h3.mb-0.ms-3 Financiamiento de las MiPymes

    p.mb-5(data-aos="fade-down") En Colombia, el Fondo Nacional de Garantías juega un papel importante, ya que respalda los créditos de las MiPymes ante la banca comercial.

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-down")
      .col-12.col-lg-10.mb-2
        img(src='@/assets/curso/temas/tema1/tema1-6.png', alt='')
      .col-12.col-lg-10
        .cajon.color-primario.p-4
          p.mb-0 Tanto el Fondo Nacional de Garantías como los Fondos Regionales de Garantías son las entidades que respaldan los créditos de las MiPymes, tienen como misión promover la competitividad de las micro, pequeñas y medianas empresas, lo cual fortalece el desarrollo económico y empresarial del país, ya que facilitan los créditos a personas naturales y jurídicas que carecen de garantías e intermediarios para acceder al sector financiero; estas entidades emiten certificados de garantía admisibles según el #[b Decreto 6868 del 20 de Abril de 1999].

    p.mb-3(data-aos="fade-down") Tanto los Fondos Regionales como el Fondo Nacional de Garantías, son los encargados de apoyar actividades de algunos sectores económicos, respaldando créditos con destino a la adquisición de activos fijos y de capital de trabajo, lo cual permite la reestructuración de pasivos y la capitalización empresarial. Los Fondos Regionales de Garantías están ubicados en Medellín, Barranquilla, Valledupar, Neiva, Cúcuta, Pasto, Tunja, Bucaramanga, Ibagué, Cali y Pereira. 

    p.mb-5(data-aos="fade-down") Otras entidades que apoyan financieramente con créditos y microcréditos a las PYMES y MiPymes son: FOMIPYME, FINDETER y BANCOLDEX.



</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
