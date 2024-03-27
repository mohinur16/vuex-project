<template>
	<div class="w-25 mx-auto mt-4">
		<form>
			<h1 class="h3 mb-3 fw-normal">Login</h1>
			<Input
				:type="'email'"
				:label="'Email address'" />
			<Input
				:type="'password'"
				:label="'Password'" />

			<Button>Login</Button>
			<p class="mt-3 text-center text-body-secondary">© 2017–2024</p>
		</form>
	</div>
</template>
<script>
export default {};
</script>
<style></style>
