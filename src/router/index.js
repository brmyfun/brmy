import {
    createRouter,
    createWebHashHistory
} from 'vue-router'
const routes = [
    {
        path: "/",
        name: "MainContent",
        component: () => import('../views/MainContent.vue')
    },
    {
        path: "/write",
        name: "WriteContent",
        component: () => import('../views/WriteContent.vue')
    }
]
const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes
})
export default router