import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import InvoicePage from "@/views/InvoicePage";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/invoice/:invoiceId",
    name: "invoice",
    component: InvoicePage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
