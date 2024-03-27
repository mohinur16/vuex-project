import { createRouter, createWebHistory } from "vue-router";
import { HomePage, RegisterPage, LoginPage } from "@/views";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/register",
			name: "register",
			component: RegisterPage,
		},
		{
			path: "/",
			name: "home",
			component: HomePage,
		},
		{
			path: "/login",
			name: "login",
			component: LoginPage,
		},
	],
});

export default router;
