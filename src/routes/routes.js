import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

// @Components
import Home from "../views/Home";

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home
        }
    ]
});