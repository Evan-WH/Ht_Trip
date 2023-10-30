<template>
  <div class="tab-bar">
    <div class="tab-item" v-for="(item,index) in tabbarData" @click="changeCurrent(index)" :class="{active:(index===currentTab)}">
      <img :src="getAssetUrl(currentTab===index?item.imageActive:item.image)" alt="error">
      <span class="text">{{item.title}}</span>
    </div>
  </div>
</template>
<script setup>
import getAssetUrl from "@/utils/get_assets_img.js";
import tabbarData from "@/assets/data/tabbar.js";
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();
const currentTab = ref(0);
function changeCurrent(index) {
  currentTab.value = index;
  router.push(tabbarData[index].path);
}
</script>
<style lang="less" scoped>
.tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  display: flex;
  border-top: 1px solid #ccc;
  .tab-item {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    &.active {
      color: var(--primary-color);
    }
    .text {
      font-size: 12px;
    }
    img {
      width: 32px;
    }
  }
}
</style> 