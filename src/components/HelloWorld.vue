<template>
  <van-nav-bar
    class="b_nav_bar"
    :title="title"
    :left-arrow="isBack"
    @click-left="back"
  >
    <template #right>
      <van-icon v-show="isRight" name="search" size="18" />
    </template>
  </van-nav-bar>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  props: {
    title: {
      type: String,
      default: "首页",
    },
    isBack: {
      type: Boolean,
      default: true,
    },
    isRight: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const router = useRouter();
    const back = () => {
      router.back();
    };
    return {
      back,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less"></style>
