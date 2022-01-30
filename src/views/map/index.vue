<template>
  <div class="bmap">
    <div id="map"></div>
  </div>
</template>

<script lang="ts">
import { onMounted } from "vue";
import mapboxgl from "mapbox-gl"; // or "const mapboxgl = require('mapbox-gl');"

export default {
  setup() {
    onMounted(() => {
      initMap();
    });

    function initMap() {
      const geojson = {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            properties: {
              message: "Foo",
              iconSize: [45, 45],
            },
            geometry: {
              type: "Point",
              coordinates: [100.578857421875, 13.7275800704956],
            },
          },
          {
            type: "Feature",
            properties: {
              message: "Bar",
              iconSize: [45, 45],
            },
            geometry: {
              type: "Point",
              coordinates: [100.531146526337, 13.7513803194748],
            },
          },
          {
            type: "Feature",
            properties: {
              message: "Baz",
              iconSize: [45, 45],
            },
            geometry: {
              type: "Point",
              coordinates: [100.58442, 13.73302],
            },
          },
          {
            type: "Feature",
            properties: {
              message: "Baz",
              iconSize: [45, 45],
            },
            geometry: {
              type: "Point",
              coordinates: [100.537554323673, 13.7020628848103],
            },
          },
          {
            type: "Feature",
            properties: {
              message: "Baz",
              iconSize: [45, 45],
            },
            geometry: {
              type: "Point",
              coordinates: [100.540271, 13.7595798],
            },
          },
        ],
      };
      mapboxgl.accessToken =
        "pk.eyJ1IjoiYnVsaW5nYnVsaW5nIiwiYSI6ImNrdWhvaGc2azAwZGcydW84MXpmN3JnZXoifQ.REHwfwDkW72Zl17GMlMlFw"; //这里请换成自己的token
      var map = new mapboxgl.Map({
        container: "map", // container id 绑定的组件的id
        style: "mapbox://styles/mapbox/streets-v11", //地图样式，可以使用官网预定义的样式,也可以自定义
        center: [
          geojson.features[0].geometry.coordinates[0],
          geojson.features[0].geometry.coordinates[1],
        ], // 初始坐标系，这个是南京建邺附近
        zoom: 15, // starting zoom 地图初始的拉伸比例
        pitch: 60, //地图的角度，不写默认是0，取值是0-60度，一般在3D中使用
        bearing: -17.6, //地图的初始方向，值是北的逆时针度数，默认是0，即是正北
        antialias: false, //抗锯齿，通过false关闭提升性能
        attributionControl: false,
      });
      geojson.features.map((marker, index) => {
        // create a DOM element for the marker
        var el = document.createElement("div");
        el.className = "marker";
        console.log(el);
        el.style.backgroundImage = `url(https://dsimage.didatravel.com/new_web_iamges/map_images/${
          index + 1
        }-${index + 1}.png?x-oss-process=image/resize,w_45)`;
        console.log(el.style.backgroundImage, index);
        el.style.width = marker.properties.iconSize[0] + "px";
        el.style.height = marker.properties.iconSize[1] + "px";
        el.title = `素坤逸通罗一号莎丽尔酒店${index + 1}`;
        el.addEventListener("click", function () {
          window.alert(marker.properties.message);
        });

        // add marker to map
        new mapboxgl.Marker(el)
          .setLngLat([
            marker.geometry.coordinates[0],
            marker.geometry.coordinates[1],
          ])
          .addTo(map);
      });
      map.on("click", function (e) {
        console.log("我的被点击了");
        console.log(e);
        map.addControl(
          new mapboxgl.GeolocateControl({
            positionOptions: {
              enableHighAccuracy: true,
            },
            trackUserLocation: true,
            showUserHeading: true,
          })
        );
      });
    }
    return {};
  },
};
</script>

<style lang="less" scoped>
.bmap {
  height: calc(100vh - 46px);
  #map {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
  }
}
</style>
