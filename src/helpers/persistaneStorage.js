export const getItem = (key) => {
	try {
		return JSON.parse(localStorage.getItem(key));
	} catch (error) {
		console.log("error getting data");
		return null;
	}
};

export const setItem = (key, data) => {
	try {
		localStorage.setItem(key, JSON.stringify(data));
	} catch (error) {
		console.log("Error saving data");
	}
};

// bu ikki funksiya yordamida user register qilgandagi malumotlarni localstorega ga saqlab olamiz va buni 
