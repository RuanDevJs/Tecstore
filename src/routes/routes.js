import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

// @Components
import Home from "../views/Home";
import Products from "../views/Products";
import Product from "../views/Product";

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home
        },
        {
            path: '/products',
            name: "Products",
            props: true,
            component: Products
        },
        {
            path: '/product/:product',
            name: "Product",
            props: true,
            component: Product
        },
    ]
});
