import Vue from 'vue'

import VueFormly from 'vue-formly';
import VueFormlyBootstrap from 'vue-formly-bootstrap'; //note that this is optional if you've created your own fields
Vue.use(VueFormly);
Vue.use(VueFormlyBootstrap);

import Modal from './Index.vue'

const constructor = Vue.extend(Modal)

const instance = new constructor()

instance.$mount()

document.body.appendChild(instance.$el)

export default instance
