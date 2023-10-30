<template>
  <div class="house-item">
    <div class="item-inner">
      <div class="cover">
        <img :src="item.data.image.url" alt="">
      </div>
      <div class="infos">
        <div class="location">
          <img src="@/assets/img/home/location.png" alt="">
          <span>{{ item.data.location }}</span>
        </div>
        <div class="summary">{{ item.data.summaryText }}</div>
        <div class="name">{{ item.data.houseName }}</div>
        <div class="price">
          <div class="new">¥{{ item.data.finalPrice }}</div>
          <div class="old">¥{{ item.data.productPrice }}</div>
          <div class="tip" v-if="item.data.priceTipBadge">{{ item.data.priceTipBadge?.text }}</div>
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
        border-radius: 6px;

      }
    }

    .infos {

      padding: 8px 10px;
      color: #000000;

      .location {
        display: flex;
        align-items: center;
        font-size: 12px;
        margin-bottom: 5px;

        img {
          width: 12px;
          height: 12px;
          margin-right: 5px;

        }
      }

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
        font-weight: 500;
        margin-bottom: 5px;
      }

      .price {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .new {
          font-size: 16px;
          font-weight: 500;
        }

        .old {
          font-size: 12px;
          text-decoration: line-through;
          color: #999;
        }

        .tip {
          padding: 0 5px;
          border-radius: 5px;
          background-color: #ff976a;
          color: #fff;
          font-size: 12px;
        }
      }
    }


  }
}
</style>