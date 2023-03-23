import Vue from "vue";
import Router from "vue-router";
import LayoutPage from "@/views/LayoutPage.vue"
import DashboardPage from "@/views/DashboardPageView.vue"
import ProductPage from "@/views/ProductPage.vue"
import AllProductPage from "@/views/AllProductPage.vue"
Vue.use(Router);

let router = new Router({
  mode: "history",
  linkExactActiveClass: "active",
  routes: [
    {
        path: "/",
        component: LayoutPage,
        redirect: "/landingpage",
        children: [
            {
              path: "landingpage",
              name: "DashPage",
              component: DashboardPage,
            },
            {
                path: "product/:id",
                name: "ProductPage",
                component: ProductPage,

            },
            {
                path: "allproduct",
                name: "AllProductsPage",
                component: AllProductPage
            }
        ]
    }
  ],
});

export default router;
