# vue3-gradient-picker
Vue3 gradient picker Inspired by [vue-gpickr](https://insky.github.io/vue-gpickr/)
  
### Usage
```
npm i vue3-gradient-picker
```

```js
<template>
  <vue-gpickr v-model="gradient" />
</template>

<script>
import { VueGpickr, LinearGradient } from 'vue3-gradient-picker';

const gradient = new LinearGradient({
  angle: 0,
  stops: [
    ['#0359b5', 0],
    ['#f6ce01', 1]
  ]
});

export default {
  components: {
    VueGpickr
  },
  data() {
    return {
      gradient
    }
  }
};
</script>
```
