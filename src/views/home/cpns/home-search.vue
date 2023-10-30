<template>
  <div class="app">
    <div class="location">
      <div class="city" @click="cityClick">{{ currentCity.cityName }}</div>
      <div class="position" @click="positionClick">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="">
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import useCityStore from '@/stores/modules/city';
import { storeToRefs } from 'pinia';

const router = useRouter();
const city = useCityStore();
const { currentCity } = storeToRefs(city);
const cityClick = () => {
  console.log('cityClick');
  router.push('/city');
}
const positionClick = () => {
  navigator.geolocation.getCurrentPosition((res) => {
    console.log(res);
  }, (err) => {
    console.log(err);
  },
    {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0
    }
  )
}
</script>
<style lang="less" scoped>
.location {
  display: flex;
  align-items: center;
  height: 44px;
  padding: 0 20px;

  .city {
    flex: 1;
  }

  .position {
    width: 74px;

    .text {
      font-size: 12px;
    }

    img {
      width: 18px;
      height: 18px;
      margin-left: 5px;
    }
  }
}
</style>