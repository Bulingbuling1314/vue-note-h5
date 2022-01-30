<template>
  <router-view />
</template>
<script lang="ts">
import { ref, provide } from "vue";
import { getTheme } from "./api/theme";
export default {
  setup() {
    const themeSymbol = ref();
    provide("themeSymbol", themeSymbol);
    getTheme({ flag: 1 }).then((res) => {
      themeSymbol.value = res;
      document.body.setAttribute("data-theme", themeSymbol.value);
    });
  },
  methods: {},
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
