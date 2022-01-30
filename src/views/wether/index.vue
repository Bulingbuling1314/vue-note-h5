<template>
  <van-search
    v-model="value"
    show-action
    label="地址"
    placeholder="请输入搜索关键词"
    @search="onSearch"
  >
    <template #action>
      <div @click="onSearch">搜索</div>
    </template>
  </van-search>
  <div class="wether">{{ wetherStr }}</div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { getWether } from "@/api/wether";
import { onMounted } from "@vue/runtime-core";
export default {
  setup() {
    const value = ref("南京");
    let wetherStr = ref("");

    onMounted(() => {
      getWeather(value.value);
    });
    const onSearch = () => {
      getWeather(value.value);
    };

    function getWeather() {
      getWether({ cityName: value.value }).then((res) => {
        wetherStr.value = res.data[0];
      });
    }

    return {
      value,
      wetherStr,
      onSearch,
    };
  },
};
</script>

<style lang="less" scoped>
.wether {
}
</style>
