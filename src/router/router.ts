import ProductsView from "../pages/ProductsView.vue";
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    { path: '/', component: ProductsView },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;