import AuthService from "@/service/auth";

// state ochamiz
const state = {
	isLoading: false,
};

// uni mutatsiyaga uchratamiz
const mutations = {
	setLoading(state) {
		state.isLoading = true;
	},
};
//action yozamiz va uni register.vue da dispatch qilamiz
const actions = {
	register(contex, user) {
		AuthService.register(user);
	},
};

export default { state, mutations, actions };
