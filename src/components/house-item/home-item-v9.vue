<template>
  <div class="house-item">
    <div class="item-inner">
      <div class="cover">
        <img :src="item.data.image.url" alt="">
      </div>
      <div class="infos">
        <div class="summary">{{ item.data.summaryText }}</div>
        <div class="name">{{ item.data.houseName }}</div>
        <div class="price">
          <van-rate :model-value="Number(item.data.commentScore)" color="#fff" :size="15" readonly allow-half />
          <div class="new">¥{{ item.data.finalPrice }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  item: {
    type: Object,
    default: () => ({})
  }
})
</script>
<style lang="less" scoped>
.house-item {
  width: 50%;
  display: flex;
  flex-wrap: wrap;

  .item-inner {
    position: relative;
    margin: 5px;
    background-color: #fff;
    border-radius: 6px;
    overflow: hidden;

    .cover {
      img {
        width: 100%;
        height: 100%;
      }
    }

    .infos {
      position: absolute;
      bottom: 0;
      padding: 8px 10px;
      color: #fff;
      background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000a7 100%);

      .summary {
        font-size: 12px;
      }

      .name {
        // 只显示两行，其余省略
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        font-size: 14px;
      }

      .price {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 10px;

        .new {
          font-size: 16px;
          font-weight: bold;
        }
      }
    }
  }
}
</style>