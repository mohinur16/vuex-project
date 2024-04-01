<template>
	<div class="w-25 mx-auto mt-4">
		<form>
			<h1 class="h3 mb-3 fw-normal">Register</h1>
			<Input
				:type="'text'"
				:label="'Your name'"
				v-model="username" />
			<Input
				:type="'email'"
				:label="'Email address'"
				v-model="email" />
			<Input
				:type="'password'"
				:label="'Password'"
				v-model="password" />

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
	data() {
		return {
			username: "",
			email: "",
			password: "", //input valularni o'zlashtiramiz va uni dataga beramiz.ui-componentada xam bazi ishlar qilamiz
		};
	},
	computed: {
		isLoading() {
			return this.$store.state.auth.isLoading;
		},
	},
	methods: {
		submitHandler(e) {
			e.preventDefault();
			const data = {
				username: this.username,
				email: this.email,
				password: this.password,
			};
			//storedan moduls.auth-actiondagi registerni xam resolve,rejectlarni xam oson qabulqilib olamiz:
			this.$store
				.dispatch("register", data)
				.then((user) => {
					this.$router.push({ name: "home" });//bunda agar user to'g'ri registratsiya qilganda router home-ui ga yuboradi userni
					console.log("Resolve", user);
				}) //resolvedan keladi
				.catch((errors) => console.log("Reject", errors)); //rejectdan kladi
		},
	},
};
</script>
<style></style>
