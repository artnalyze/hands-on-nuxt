# first-nuxt

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).


## Book

### Install foundation

```sh
$ npm i foundation-sites
$ npm i jquery
$ npm i what-input
# form validation : https://get.foundation/sites/docs/abide.html

# after added form
# https://get.foundation/sites/docs/motion-ui.html
# https://get.foundation/sites/docs/panini.html
# https://get.foundation/sites/docs/style-sherpa.html
$ npm i motion-ui --save-dev
$ npm i node-sass --save-dev
$ npm i sass-loader --save-dev

# add fonts
# https://zurb.com/playground/foundation-icon-fonts-3
$ npm i foundation-icon-fonts 

# add less loader
$ npm i less --save-dev
$ npm i less-loader --save-dev

# add jquery-ui-bundle
# https://jqueryui.com/
$ npm i jquery-ui-bundle

# add aos Animate Library
# https://michalsnik.github.io/aos/
$ npm i aos

# add swiper
# https://swiperjs.com/api/
# https://swiperjs.com/demos/
$ npm i swiper
```

### Viewm Routing, Components, Plugins, Modules

#### Adding Views, Routes, and Transitions

creating custom routes

https://router.vuejs.org/

creating basic routes
```
pages/
--| users/
-----| index.vue
-----| john-doe.vue
--| index.vue
```

creating dynamic routes
```
pages/
--| _slug/
-----| index.vue
--| users/
-----| _id_.vue
--| index.vue
```

## install vue meta

```sh
$ npm i vue-meta
```

## Customizing the default meta tags in Nuxt apps

```js
// nuxt.config.js
head: {
    title: 'Nuxt',
    titleTemplate: '%s | My Awesome Webapp',
    meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'My Nuxt portfolio' }
    ]
}
```

## Creating custom layouts

### Modifying the default layout

> layouts/about.vue

```vue
<template>
    <div>
        <div>...add an about navigation bar here....</div>
        <nuxt/>
    </div>
</template>
```

> pages/about.vue

```js
export default {
    layout: 'about'
    // OR
    layout (context) {
        return 'about'
    }
}
```