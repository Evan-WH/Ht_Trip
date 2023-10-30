<template>
  <div class="app ">
    <div class="top">
      <van-search v-model="searchValue" placeholder="请输入搜索关键词" />
      <van-tabs v-model:active="active" color="#ff9854" line-height="3">
        <template v-for="(item, key, index) in citys" :key="key">
          <van-tab :title="item.title" :name="key"> </van-tab>
        </template>
      </van-tabs>
    </div>
    <div class="content">
      <template v-for="(value, key, index) in citys" :key="index">
        <city-group v-show="active === key" :group-data="value" />
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import useCityStore from '@/stores/modules/city';
import CityGroup from './cpns/city-group.vue';
import { storeToRefs } from 'pinia';
const searchValue = ref();

const active = ref();
const cityStore = useCityStore();
cityStore.FetchCityList()
const { citys } = storeToRefs(cityStore);

</script>
<style lang="less" scoped>
.top {
  position: relative;
  z-index: 9;
}

.content {
  height: calc(100vh - 98px); //100vh：浏览器高度，98px：顶部搜索框高度
  overflow-y: auto;
}
</style>