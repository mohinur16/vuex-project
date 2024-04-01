<template>
	<div class="form-floating mt-3">
		<input
			:type="type"
			class="form-control"
			:value="modelValue"
			@input="updateInput"
			:id="label"
			:placeholder="label" />
		<label :for="label">{{ label }}</label>
	</div>
</template>
<script>
export default {
	name: "Input",
	props: {
		type: String,
		label: String,
		modelValue: [String, Number], //v-model qilib props kabi inputdan keladi
	},
	methods: {
		updateInput(e) {
			this.$emit("update:modelValue", e.target.value); //va buni @input ga yozib modelValeni o'zgarishlarini olamiz
		},
	},
};
</script>
<style></style>
