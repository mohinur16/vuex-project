<template>
	<div class="w-25 mx-auto mt-4">
		<form>
			<h1 class="h3 mb-3 fw-normal">Register</h1>
			<Input
				:type="'text'"
				:label="'Your name'"
				id="1" />
			<Input
				:type="'email'"
				:label="'Email address'"
				id="2" />
			<Input
				:type="'password'"
				:label="'Password'"
				id="3" />

			<Button
				type="submit"
				:disabled="isLoading"
				@click="submitHandler"
				>Submit</Button
			>
			<p class="mt-3 text-center text-body-secondary">© 2017–2024</p>
		</form>
	</div>
</template>
<script>
export default {
	computed: {
		isLoading() {
			return this.$store.state.auth.isLoading;
		},
	},
	methods: {
		submitHandler(e) {
			e.preventDefault();
			this.$store.dispatch("register");
		},
	},
};
</script>
<style></style>
