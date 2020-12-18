export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Lainé Bakery',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [{ src: "https://kit.fontawesome.com/b8708477a7.js" }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/vue-masonry' },
    { src: '~/plugins/vue-lazyload' },
    { src: '~/plugins/vue-img' }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  
  modules: [
    '@nuxtjs/prismic',
    'nuxt-webfontloader',
  ],
  prismic: {
    endpoint: "https://morganebakery.cdn.prismic.io/api/v2",
    linkResolver: '@/plugins/link-resolver',
    htmlSerializer: '@/plugins/html-serializer'
  },

  webfontloader: {
    google: {
      families: [
        'raleway:400,700',
        'Shadows Into Light:400',
      ]
    }
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
