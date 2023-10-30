<template>
  <div class="app">
    <router-view />
    <TabBarr v-if="!route.meta.hideTabBar" />
  </div>
</template>

<script setup>
import TabBarr from "@/components/tab-bar/tab-bar_01.vue";
import { useRoute } from "vue-router";

const route = useRoute();


</script> 
<style scoped></style>