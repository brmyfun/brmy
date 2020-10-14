import {
    createRouter,
    createWebHashHistory
} from 'vue-router'
const routes = [
    {
        path: "/",
        name: "MainContent",
        component: () => import('../views/MainContent.vue'),
        children:[
            {
                path:"home",
                name: "HomeContent",
                component: () => import('../views/HomeContent.vue'),
            },
            {
                path:"brmy",
                name: "BrmyContent",
                component: () => import('../views/BrmyContent.vue'),
            },
            {
                path:"rank",
                name: "RankContent",
                component: () => import('../views/RankContent.vue'),
            },
            {
                path:"goods",
                name: "GoodsContent",
                component: () => import('../views/GoodsContent.vue'),
            },
            {
                path:"about",
                name: "AboutContent",
                component: () => import('../views/AboutContent.vue'),
            },
            {
                path:"my",
                name: "MyContent",
                component: () => import('../views/MyContent.vue'),
            },
            {
                path:"creation",
                name: "CreationContent",
                component: () => import('../views/CreationContent.vue'),
            },
        ]
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