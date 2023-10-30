<template>
  <div class="app">
    <div class="section data-range">
      <div class="start">
        <div class="date">
          <span>入住</span>
          <span class="day">{{ startDate }}</span>
          <van-calendar v-model:show="calendarShow" type="range" color="#ff9854" :round="false" @confirm="onConfirm" />
        </div>
        <div class="stay">
          <span>共{{ totalDay }}晚</span>
        </div>
      </div>
      <div class="end">
        <div class="date">
          <span>离开</span>
          <span class="day">{{ endDate }}</span>
        </div>
      </div>
    </div>
    <!-- 价格 -->
    <div class="section price-counter">
      <div class="start">价格不限</div>
      <div class="end">人数不限</div>
    </div>
    <div class="section keyword">关键字/位置/民宿名</div>
    <!-- 热门 -->
    <div class="section hotList">
      <template v-for="(hotList, index) in hotSuggests">
        <div class="item">
          {{ hotList.tagText.text }}
        </div>
      </template>
    </div>
    <!-- 搜索 -->
    <div class="section search">
      <div class="btn" @click="search">开始搜索</div>
    </div>
    <!-- 推荐类型 -->
    <div class=" categories">
      <template v-for="(item, index) in categories" :key="index">
        <div class="box">
          <img :src="item.pictureUrl" alt="">
          <div class="text">{{ item.title }}</div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { formatMonthDate, getDifDay } from '@/utils/format_date'
// 日期范围
const nowDate = new Date()
const newdate = new Date().setDate(nowDate.getDate() + 1)
const startDate = ref(formatMonthDate(nowDate))
const endDate = ref(formatMonthDate(newdate))
const totalDay = ref(getDifDay(nowDate, newdate))


// 日历
const calendarShow = ref(false)
const onConfirm = (val) => {
  startDate.value = formatMonthDate(val[0])
  endDate.value = formatMonthDate(val[1])
  totalDay.value = ref(getDifDay(val[0], val[1]))
  calendarShow.value = false
}
// 网络请求
import useHomeStore from "@/stores/modules/home";
import useCityStore from "@/stores/modules/city";
import { storeToRefs } from "pinia";

const homeStore = useHomeStore()
homeStore.FetchHotSuggests()
const { hotSuggests } = storeToRefs(homeStore)

// 搜索
const { currentCity } = storeToRefs(useCityStore())
import { useRouter } from 'vue-router';
const router = useRouter()
const search = () => {
  console.log('search');
  router.push({
    path: '/search',
    query: {
      startDate: startDate.value,
      endDate: endDate.value,
      currentCity: currentCity.value.cityName
    }
  })
}
// 推荐类型
homeStore.FetchCategories()
const { categories } = storeToRefs(homeStore)
</script>
<style lang="less" scoped>
.section {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 20px;
  color: #999;

  .start {
    flex: 1;
    display: flex;
    height: 44px;
    align-items: center;

    .stay {
      flex: 1;
      display: flex;
      height: 44px;
      align-items: center;
      justify-content: center;
    }
  }

  .date {
    display: flex;
    flex-direction: column;
    line-height: 27px;

    .day {
      color: #000;
      font-size: 14px;
    }
  }
}

.price-counter {
  .start {
    border-right: #f2f2ff solid 1px;
  }
}

.hotList {
  display: flex;
  flex-wrap: wrap;
  padding: 20px;

  .item {
    width: auto;
    padding: 0 10px;
    height: 20px;
    background-color: #ededed7b;
    color: #000000;
    border-radius: 5px;
    text-align: center;
    line-height: 20px;
    margin: 10px;
  }
}

.search {
  .btn {
    border-radius: 18px;
    background-color: var(--primary-color);
    color: #fff;
    padding: 10px;
    width: 100%;
    text-align: center;
    cursor: pointer;
  }
}

.categories {
  display: flex;
  overflow-x: auto;
  padding: 10px;

  &::-webkit-scrollbar {
    display: none;
  }

  .box {
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;

    // 可向右滚动
    .text {
      margin-top: 10px;
      font-size: 14px;
      width: max-content;
    }

    img {
      width: 40px;
    }
  }
}
</style>