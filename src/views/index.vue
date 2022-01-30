<template>
  <bNavBar :title="route.meta.name" :isBack="route.meta.level ? true : false" />
  <div class="views">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import bNavBar from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { useRoute } from "vue-router";
import { ref } from "vue";

export default {
  components: {
    bNavBar,
  },
  setup() {
    const title = ref();
    const route = useRoute();
    return {
      route,
      title,
    };
  },
};
</script>
<style lang="less" scoped>
.views {
  width: 100%;
  height: calc(100vh - 46px);
  overflow-y: auto;
  font-size: 14px;
}
</style>
