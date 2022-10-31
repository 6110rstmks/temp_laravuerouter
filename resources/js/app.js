
// import {createApp} from 'vue'
import { createApp } from 'vue/dist/vue.esm-bundler';

// import App from './App.vue'

import * as VueRouter from 'vue-router'

import ExampleComponent from './components/ExampleComponent.vue'

import AboutComponent from './components/AboutComponent.vue'

const routes = [
    {path: '/', component: ExampleComponent},
    {path: '/about', component: AboutComponent},
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes,
})

const app = createApp({})

app.use(router)

app.component('example-component', ExampleComponent)
// app.component('about-component', AboutComponent)

app.mount('#app')
