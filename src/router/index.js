import VueRouter from "vue-router";
import Vue from "vue";
import Layout from "@/components/Layout.vue";
import LandingPage from "@/components/Landing-page.vue"; // Importa el componente LandingPage

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: LandingPage
  },
  {
    path: "/",
    component: {
      render(c) {
        return c("router-view");
      },
    },
    children: [
      {
        path: "/inicio",
        name: "inicio",
        component: () => import("../components/Inicio.vue"),
      },
      {
        path: "/layout",
        component: Layout,
        children: [
          {
            path: "/formulario",
            name: "formulario",
            component: () => import("../components/Formulario.vue"),
          },
          {
            path: "/pagination",
            name: "pagination",
            component: () => import("../components/VehiculoScreen.vue"),
          },
        ],
      },
      {
        path: "/landing-page",
        name: "landing-page",
        component: () => import("../components/Landing-page.vue"),
      },
    ],
  },
];
const router = new VueRouter({ routes });
export default router;
