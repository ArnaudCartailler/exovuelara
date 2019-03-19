/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
window.Vue = require('vue');

import Vue from 'vue'
import Vuetify from 'vuetify'
import BootstrapVue from 'bootstrap-vue'
import "@mdi/font/css/materialdesignicons.css"
import Lang from 'vuejs-localization';
Lang.requireAll(require.context('../lang/', true, /\.js$/));

Vue.use(Vuetify, {
    theme: {
        primary: '#90ee90',
        secondary: '#97A0D9',
        accent: '#282A4C',
        accent2: '#4e3a6f',
        bichouille: '#5F5F5F',
        light: '#F0E9E9',
        error: '#FF5252',
        info: '#2196F3',
        test: '#8B7CA2',
        success: '#4CAF50',
        warning: '#FFC107',
        svgaccent: '#000080',
        svgaccent2: '#191970',
        svgprimary1: '#00FF7F',
        svgprimary2: '#90EE90',
        svgsecondary1: '#9370DB',
        svgsecondary2: '#6A5ACD',
        svglight1: '#FFFAFA',
        svglight2: '#F5F5F5',
        AWS: '#D98501',
        OVH: '#113F6D'
    }
})
Vue.use(BootstrapVue);
Vue.use(Lang);

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('AppHome', require('./components/AppHome.vue').default);

import router from './Router/router.js'

const app = new Vue({
    el: '#app',
    router,

    created() {
        this.$lang.setLang('fr');
        console.log(router)
    }
});
