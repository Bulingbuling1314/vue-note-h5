<template>
  <van-button type="default" @click="changeTheme(1)" block>亮</van-button>
  <van-button color="black" @click="changeTheme(2)" block>黑</van-button>
  <van-button type="primary" @click="changeTheme(3)" block>蓝</van-button>
</template>

<script>
import { provide } from "vue";
import { changeTheme } from "../../api/theme";
export default {
  methods: {
    changeTheme(id) {
      changeTheme({ id }).then((res) => {
        provide("themeSymbol", res.data.value);
        document.body.setAttribute("data-theme", res.data.value);
      });
    },
  },
};
</script>

<style></style>
