export default {
  global: {
    componenteFormativo: 'Social media y redes sociales',
    descripcionCurso:
      'Las PYMES históricamente no han contado con rubros para pagar publicidad debido a los costos. Los social media son plataformas que contienen canales de comunicación y, de alguna manera, les han dado la mano a estas empresas, pues, a través de las redes sociales, se pueden promocionar productos y servicios a menor costo y pueden llegar a más público objetivo.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'PYMES en Colombia',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: '<em>Social media</em>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Comunicación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Redes sociales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Ventajas y desventajas',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Audiencias',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Publicación ',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Plan de comunicación digital',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Elaboración de un plan de comunicación',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Piezas de <em>marketing</em> digital',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Posicionamiento',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: '<em>Big Data</em>',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_01_51220021.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '2. Social media',
      referencia:
        'OniAd - Publicidad Programática. (2019). <em>¿Qué es social media marketing? - ¡Haz una estrategia TOP en redes sociales!</em> [Video]. YouTube',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=WZyv7RSBAB0&ab_channel=ONiAd-PublicidadProgram%C3%A1tica',
    },
    {
      tema: '4. Redes sociales',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022). <em>Redes sociales</em> [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=rR5wqTUDRI4',
    },
    {
      tema: '4.3. Publicación',
      referencia:
        'Vázquez, E. (2020). <em>Cómo hacer reels paso a paso - Instagram reels fáciles</em> [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ezjJA85QVgk',
    },
  ],
  glosario: [
    {
      termino: 'Audiencia',
      significado:
        'Personas que presencian un acontecimiento, o evento; por lo general, la palabra se asocia a grupo.',
    },
    {
      termino: '<em>Big Data</em>',
      significado:
        'Plan diseñado para recoger un alto volumen de datos o combinaciones de conjuntos de datos.',
    },
    {
      termino: 'Calendario',
      significado:
        'Cuenta sistematizada del transcurso del tiempo utilizada para la organización cronológica de actividades.',
    },
    {
      termino: 'Canal de comunicación',
      significado:
        'Medio físico a través del que se lleva a cabo un acto comunicativo; sirve para el intercambio de comunicación.',
    },
    {
      termino: 'Comunicación',
      significado:
        'Acción de intercambio de información entre dos o más personas con el ánimo de transmitir o recibir información.',
    },
    {
      termino: 'Posicionamiento',
      significado:
        'Acción y efecto de posicionar; en mercadotecnia, es una estrategia comercial.',
    },
    {
      termino: 'PYMES',
      significado:
        'Pequeña y mediana empresa que cuenta con ciertos límites ocupacionales y financieros.',
    },
    {
      termino: 'Publicación',
      significado:
        'Acción que consiste en llevar cierta información al conocimiento del público.',
    },
    {
      termino: 'Red social',
      significado:
        'Estructura social compuesta por un conjunto de actores que se relacionan entre ellos.',
    },
    {
      termino: '<em>Social media</em>',
      significado:
        'Medios sociales con plataformas de comunicación en línea, cuyo contenido es creado por los usuarios.',
    },
  ],
  referencias: [
    {
      referencia:
        'Arrontes y Barrera. (2022). Estrategia de marketing digital: cómo encajar las piezas del puzzle. Creatibo. ',
      link:
        'https://arrontesybarrera.com/creatibo/estrategia-marketing-digital-encajar-piezas-puzzle/',
    },
    {
      referencia:
        'Asmar, S. (2021). En Colombia se crean un total de 93 micronegocios diarios en el comienzo de 2021. La República. ',
      link:
        ' https://www.larepublica.co/especiales/reactivacion-de-las-pyme/en-colombia-se-crean-un-total-de-93-micronegocios-diarios-en-el-comienzo-de-2021-3159461',
    },
    {
      referencia: 'Businesscol.com. (2022). MIPYMES en Colombia  ',
      link: 'https://www.businesscol.com/empresarial/pymes-en-colombia/',
    },
    {
      referencia:
        'Guijarro, M. (2021). Qué es y cómo elaborar un plan de comunicación. IEBS. ',
      link:
        'https://www.iebschool.com/blog/elaborar-plan-comunicacion-9-pasos-comunicacion-digital/',
    },
    {
      referencia:
        'Olivier, E. (2020), ¿Qué es el Social Media Marketing? Genwords ',
      link: 'https://www.genwords.com/blog/social-media-marketing',
    },
    {
      referencia:
        'PowerData. (s. f.). Big Data: ¿En qué consiste? Su importancia, desafíos y gobernabilidad. ',
      link: 'https://www.powerdata.es/big-data',
    },
    {
      referencia:
        'The social media family. (2022). Las redes sociales más utilizadas en el 2022. ',
      link: 'https://thesocialmediafamily.com/redes-sociales-mas-utilizadas/',
    },
    {
      referencia:
        'Uriarte, J. (2021). Comunicación escrita. Caracteristicas.co. ',
      link: 'https://www.caracteristicas.co/comunicacion-escrita/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Esperanza Cardona Grisales',
          cargo: 'Experta Temática',
          centro: 'Regional Cauca - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Claudia Milena Hernández Naranjo',
          cargo: 'Diseñadora Instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Asesora Metodológica',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo Desarrollo Curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Darío González',
          cargo: 'Corrector de Estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Sergio Augusto Ardila Ortiz',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'María Inés Machado López',
          cargo: 'Asesora Metodológica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Luis Fernando Botero Mendoza',
          cargo: 'Diseñador web',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oscar Daniel Espitia Marín',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboar e Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Producción Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oscar Daniel Espitia Marín',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
