<template>
  <div class="content">
    <div class="list">
      <template v-for="(item, index) in hosueList" :key="index">
        <Hoseitem9 :item="item" v-if="item.discoveryContentType == 9" />
        <Hoseitem3 :item="item" v-else />
      </template>
      <div class="load" @click="loadMore">加载更多</div>
    </div>
  </div>
</template>

<script setup>
import Hoseitem3 from '@/components/house-item/home-item-v3.vue'
import Hoseitem9 from '@/components/house-item/home-item-v9.vue'
import { storeToRefs } from 'pinia'
import useHomeStore from '@/stores/modules/home'
const homeStore = useHomeStore()
const { hosueList, currentData } = storeToRefs(homeStore)
homeStore.FetchHouses(currentData.value)
const loadMore = () => {
  console.log('加载更多')
  currentData.value++
  homeStore.FetchHouses(currentData.value)

}

</script>
<style lang="less" scoped>
.content {
  padding: 10px 8px;

  .list {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 60px;
  }

  .load {
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-radius: 6px;
    margin-top: 10px;
    color: #666;
    font-size: 14px;
    cursor: pointer;
  }
}
</style>