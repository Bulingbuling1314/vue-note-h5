<template>
  <div class="home">
    <div class="list">
      <div
        class="item"
        v-for="item in list"
        :key="item.id"
        :style="{ background: item.color }"
        @click="router.push(item.path)"
      >
        {{ item.name }}
      </div>
    </div>
    <lottie :options="defaultOptions" />
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity";
import { useRouter } from "vue-router";
import lottie from "vue-lottie";
import * as animationData from "/public/animate/听单.json";
export default {
  components: {
    lottie,
  },
  setup() {
    const router = useRouter();
    const list = reactive([]);
    list.push(
      {
        id: 0,
        name: "便签",
        color: "#1fc39b",
        path: "/label",
      },
      {
        id: 1,
        name: "查询天气",
        color: "#f88f6c",
        path: "/wether",
      },
      {
        id: 2,
        name: "谷歌地图",
        color: "#5399da",
        path: "/google-map",
      },
      {
        id: 3,
        name: "百度地图",
        color: "#fdb22b",
        path: "/map",
      },
      {
        id: 4,
        name: "切换主题",
        color: "#fdb22b",
        path: "/theme",
      }
    );
    const defaultOptions = {
      animationData: animationData.default,
    };
    return {
      list,
      router,
      defaultOptions,
    };
  },
};
</script>

<style lang="less" scoped>
.home {
  .list {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 12px;
    .item {
      width: calc(50% - 6px);
      color: #fff;
      padding: 12px;
      border-radius: 6px;
      margin-bottom: 12px;
    }
  }
}
</style>
