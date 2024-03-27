<template>
	<div class="w-25">
		<h1>
			HomePage : <span class="text-danger">{{ counter }}</span>
		</h1>
		<Button @click="increaseHandler">Increase</Button>
		<Button @click="decreaseHandler">Decrease</Button>
	</div>
</template>
<script>
export default {
	methods: {
		increaseHandler() {
			this.$store.commit("increment");
		},
		decreaseHandler() {
			this.$store.commit("decrement");
		},
	},
	computed: {
		counter() {
			return this.$store.state.count;
		},
	},
};
</script>
<style lang=""></style>
