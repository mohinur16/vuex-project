// import { createStore } from "vuex";
// import auth from "@/modules/auth";
// const store = createStore({
// 	state() {
// 		return {
// 			isLoading: false,
// 		};
// 	},
// 	mutations: {},
// 	modules: { auth },
// });

// import { createApp } from "vue";
import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
	state() {
		return {
			count: 0,
		};
	},
	mutations: {
		increment(state) {
			state.count++;
		},
		decrement(state) {
			state.count--;
		},
	},
});
export default store;
