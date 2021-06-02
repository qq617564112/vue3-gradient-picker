import gradientPicker from "./gradientPicker.vue";

const install = (app) => {
	app.component("gradientPicker", gradientPicker)
}

export {
	gradientPicker
}

export default {
	install
}