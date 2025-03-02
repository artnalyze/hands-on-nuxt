export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'first-nuxt',
    titleTemplate: '%s | My Awesome WebApp',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'MY Nuxt portfoli' }
    ],
    script: [
      { src: 'https://code.jquery.com/jquery-3.5.1.min.js' },
      { src: 'https://code.jquery.com/ui/1.12.1/jquery-ui.min.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    // 'foundation-sites/dist/css/foundation.min.css', import to foundation.client.js
    // 'foundation-icon-fonts/foundation-icons.css', import to foundation.client.js
    'assets/scss/main.scss',
    'assets/less/main.less',
    'jquery-ui-bundle/jquery-ui.min.css',
    'assets/css/transition.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/client-only/foundation.client.js',
    '~/plugins/utils.js',
    '~/plugins/client-only/motion-ui.client.js',
    '~/plugins/client-only/jquery-ui-bundle.client.js',
    '~/plugins/client-only/aos.client.js',
    '~/plugins/client-only/swiper.client.js'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },
  // loading: {
  //   color: '65d165'
  // }
  loading: '~/components/loading.vue',
  pageTransition: {
    name: 'fade',
    mode: 'out-in'
  },
  layoutTransition: {
    name: 'fade-layout',
    mode: 'out-in'
  },
  pageTransition: 'bounce'
}
