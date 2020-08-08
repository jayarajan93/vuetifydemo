import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Login from "../components/Login.vue"
import Look from "../views/Look.vue";
import Edit from "../views/Edit.vue";
import Create from "../views/Create.vue";
import Delete from "../views/Delete.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path:"/",
    name:"Login",
    component:Login
  },
  {
    path: "/view",
    name: "view",
    component: Look
  },
  {
    path:"/edit",
    name:"Edit",
    component: Edit
  },
  {
    path:"/create",
    name: "Create",
    component: Create
  },
  {
    path: "/delete",
    name: "Delete",
    component: Delete
  },
 
];

const router = new VueRouter({
  routes
});

export default router;
