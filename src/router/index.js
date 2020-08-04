import Vue from 'vue'
import VueRouter from 'vue-router'
const DiscovrMusic = () =>
    import ('@/views/DiscovrMusic')
const Recommend = () =>
    import ('@/views/Main/DiscovrMusic/Recommend.vue')
const Singer = () =>
    import ('@/views/Main/Singer/Singer.vue')
const SingerPage = () =>
    import ('@/views/SingerPage/SingerPage.vue')

const Flash = () =>
    import ('@/views/Flash/Flash.vue')
Vue.use(VueRouter)

const routes = [
    { path: '/', redirect: '/discovrMusic' },
    {
        path: '/discovrMusic',
        component: DiscovrMusic,
        children: [
            { path: '', redirect: 'recommend' },
            { path: 'recommend', component: Recommend },
            { path: 'singer', component: Singer }
        ]
    },
    { path: '/singerpage', component: SingerPage },
    {
        path: '/flash',
        name: 'Flash',
        component: Flash,
        components: {
            Flash: Flash,
        }

    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router