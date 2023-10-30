<template>
  <div class="city-group">
    <van-index-bar :index-list="indexList">
      <van-index-anchor index="热门" />
      <div class="list">
        <div v-for="(hotCity, inday) in groupData.hotCities" :key="inday">
          <div class="citybox" @click="hotClick(hotCity)">{{ hotCity.cityName }}</div>
        </div>
      </div>
      <template v-for="(groups, index) in groupData.cities" :key="index">
        <van-index-anchor :index="groups.group" />
        <div v-for="(city, indey) in groups.cities" :key="indey">
          <van-cell :title="city.cityName" @click="cityClick(city)" />
        </div>
      </template>
    </van-index-bar>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router';
import useCityStore from '@/stores/modules/city'
const props = defineProps({
  groupData: {
    type: Object,
    default: () => ({})
  }
})
const indexList = computed(() => {
  const list = props.groupData.cities.map(item => item.group);
  list.unshift('#');//unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度。
  return list;
})

const cityStore = useCityStore()
const router = useRouter()
const hotClick = (item) => {
  cityStore.currentCity = item
  router.back()
}
const cityClick = (item) => {
  cityStore.currentCity = item
  router.back()

}

</script>
<style lang="less" scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  padding-right: 10px;
  justify-content: space-around;

  .citybox {
    width: 75px;
    height: 28px;
    border-radius: 14px;
    background-color: #fff4ec;
    font-size: 12px;
    color: #000;
    text-align: center;
    line-height: 28px !important;
    margin: 10px;
  }
}
</style>