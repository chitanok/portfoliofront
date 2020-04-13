import Vue from 'vue'
import VueRouter from 'vue-router'
import Resume from './portfolio/Resume.vue'
import Contact from './portfolio/Contact.vue'
import Reviews from './portfolio/Reviews.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Resume
    },
    {
        path: '/reviews',
        component: Reviews
    },
    {
        path: '/contact',
        component: Contact
    }
]

export default new VueRouter({ mode: 'history', routes})