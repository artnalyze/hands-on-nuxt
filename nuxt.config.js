export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'first-nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
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
    'foundation-sites/dist/css/foundation.min.css',
    'assets/scss/main.scss',
    'foundation-icon-fonts/foundation-icons.css',
    'assets/less/main.less',
    'jquery-ui-bundle/jquery-ui.min.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/client-only/foundation.client.js',
    '~/plugins/utils.js',
    '~/plugins/client-only/motion-ui.client.js',
    '~/plugins/client-only/jquery-ui-bundle.client.js'
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
  }
}
