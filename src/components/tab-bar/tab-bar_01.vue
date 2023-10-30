<template>
  <div class="tab-bar">
    <van-tabbar v-model="currentTab" route active-color="#ff9854">
      <template v-for="(item,index) in tabbarData">
        <van-tabbar-item :to="item.path">
          <span>{{ item.title }}</span>
          <template #icon>
            <img :src="getAssetUrl(currentTab===index?item.imageActive:item.image)" alt="error">
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>

  </div>
</template>

<script setup>
import getAssetUrl from "@/utils/get_assets_img.js";
import tabbarData from "@/assets/data/tabbar.js";
import { useRouter } from "vue-router";
import { ref } from "vue";
const router = useRouter();
const currentTab = ref(0);
</script>
<style scoped>
</style>