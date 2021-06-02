import comp from "./src/gradient-picker/gradientPicker.vue";
comp.install = (v) => {
	v.component(comp.name, comp);
}
export default comp;