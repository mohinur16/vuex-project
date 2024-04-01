import { setItem } from "@/helpers/persistaneStorage";
import AuthService from "@/service/auth";

// state ochamiz
const state = {
	isLoading: false,
	user: null,
	errors: null,
};

// uni mutatsiyaga uchratamiz
const mutations = {
	registerStart(state) {
		state.isLoading = true;
		state.user = null;
		state.errors = null;
	},
	registerSuccess(state, payload) {
		state.isLoading = false;
		state.user = payload;
	},
	registerFailure(state, payload) {
		state.isLoading = false;
		state.errors = payload;
	},
};

const actions = {
	register(contex, user) {
		return new Promise((resolve, reject) => {
			contex.commit("registerStart");
			AuthService.register(user)
				.then((res) => {
					contex.commit("registerSuccess", res.data.user); //payload mutationga chiqadi va u yerda stateni o'zgartiradi
					//resolvega esa qaytariladigan datani yuboramiz,buni Register.vue da qabul qilamiz keyin
					resolve(res.data.user);
					setItem("token", res.data.user.token);//user tokenini local storage ga saqlash
				})
				.catch((err) => {
					contex.commit("registerFailure", err.response.data.errors); //buyam registerFailure bo'lganida errorni statedagi errorsga bervoradi va statelarni ui da userga ko'rsatish imkonini beradi.Bunda Promise resolve va reject parametrlari orqali qilinadi:
					reject(err.response.data.errors);
				});
		});
	},
};

export default { state, mutations, actions };
