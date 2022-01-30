<template>
  <div class="google_map">
    <div id="map"></div>
  </div>
</template>

<script lang="ts">
import { onMounted } from "vue";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const google: any;
export default {
  setup() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let map: any;
    function initMap() {
      map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });
    }
    onMounted(() => {
      initMap();
      console.log(map);
    });
    return {
      map,
    };
  },
};
</script>

<style lang="less" scoped>
.google_map {
  height: calc(100vh - 46px);
  #map {
    width: 100%;
    height: 100%;
  }
}
</style>
