<template>
	<div>
		<div
			class="d-flex flex-column flex-md-row align-items-center py-3 mb-4 px-2 border-bottom shadow rounded">
			<a
				class="d-flex align-items-center link-body-emphasis text-decoration-none">
				<img
					:src="logo"
					alt="logo"
					width="50"
					height="50"
					style="cursor: pointer"
					@click="toHomeHandler" />
			</a>

			<nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
				<RouterLink
					:to="{ name: 'login' }"
					class="me-3 py-2 link-body-emphasis text-decoration-none"
					>Login</RouterLink
				>

				<RouterLink
					:to="{ name: 'register' }"
					class="me-3 py-2 link-body-emphasis text-decoration-none"
					>Register</RouterLink
				>
			</nav>
		</div>
	</div>
</template>
<script>
import { logo } from "@/constants";
import { RouterLink } from "vue-router";
export default {
	data() {
		return {
			logo,
		};
	},
	methods: {
		toHomeHandler() {
			return this.$router.push("/");
		},
	},
	components: { RouterLink },
};
</script>
<style lang="">
/* body {
	background-color: #222;
} */
</style>
