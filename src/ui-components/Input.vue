<template>
	<div class="form-floating mt-3">
		<input
			:type="type"
			class="form-control"
		
			placeholder />
		<label>{{ label }}</label>
	</div>
</template>
<script>
export default {
	name: "Input",
	props: {
		type: String,
		label: String,
	},
};
</script>
<style></style>
