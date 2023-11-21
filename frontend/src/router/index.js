import { createRouter, createWebHistory } from "vue-router";
import clientRouter from "./clientRouter";
// import { authenStore } from "../store/authenStore";

const routes = [...clientRouter];


const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router;
