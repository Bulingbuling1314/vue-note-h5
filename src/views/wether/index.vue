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
  <van-skeleton title :row="10" v-if="!wetherStr" />
  <div class="wether" v-else>
    <h3 class="city">{{ wetherStr.provinceName + wetherStr.city }}</h3>
    <h4 class="temp">
      <b>{{ wetherStr.realtime.temp }}</b> ℃
    </h4>
    <div class="other">
      <span>{{ wetherStr.realtime.weather }}</span> |
      <span>{{ wetherStr.realtime.wD + wetherStr.realtime.wS }}</span> |
      <span>{{ wetherStr.realtime.ziwaixian }}</span>
    </div>
    <div class="indexes">
      <div
        class="item"
        v-for="item in wetherStr.indexes"
        :key="item.abbreviation"
      >
        <div class="item_name">{{ item.name }}</div>
        <div class="item_level">{{ item.level }}</div>
        <div class="item_content">{{ item.content }}</div>
      </div>
    </div>
    <div class="weathers">
      <div class="item" v-for="item in wetherStr.weathers" :key="item.date">
        <div class="item_week">{{ item.week }}</div>
        <div class="item_date">{{ item.date }}</div>
        <div class="item_weather">{{ item.weather }}</div>
        <div>
          <span>{{ item.temp_day_c }}/{{ item.temp_night_c }}</span>
        </div>
      </div>
    </div>
  </div>
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
        console.log(res.data);
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
  .city {
    margin: 0;
  }
  .temp {
    b {
      font-size: 42px;
      vertical-align: top;
    }
    margin: 12px 0;
  }
  .other {
    span {
      margin: 0 10px;
    }
  }
  .indexes {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: rgba(26, 113, 191, 0.1);
    margin: 12px 0;
    border-radius: 5px;
    .item {
      width: 33%;
      padding: 10px;
      border-right: 1px solid #fff;
      border-bottom: 1px solid #fff;
      &:nth-of-type(3n) {
        border: 0;
      }
      .item_name {
        color: #acc8df;
        font-size: 12px;
      }
      .item_level {
        margin: 10px 0;
      }
      .item_content {
        text-align: left;
      }
    }
  }
  .weathers {
    width: 100%;
    overflow-x: auto;
    display: flex;
    background-color: rgba(26, 113, 191, 0.1);
    .item {
      padding: 10px;
      min-width: 80px;
      border-right: 1px solid #fff;
      font-size: 12px;
      height: 120px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
  }
}
</style>
