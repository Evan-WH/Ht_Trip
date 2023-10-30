<template>
  <div>
    <HomeNavBar />
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <HomeSearch />
    <HomeDate />
    <HomeList />
  </div>
</template>

<script setup>
import HomeSearch from "./cpns/home-search.vue";
import HomeNavBar from "./cpns/home-nav-bar.vue";
import HomeDate from "./cpns/home-date.vue";
import HomeList from "./cpns/home-list.vue";

</script>
<style lang="less" scoped>
.app {
  --van-calendar-popup-height: 100%
}

.banner {
  img {
    width: 100%;

  }
}
</style>