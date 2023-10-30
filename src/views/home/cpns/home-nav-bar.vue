<template>
  <div class="home">
    <div class="nav-bar">
      <div class="title">Trip</div>
    </div>
  </div>
</template>

<script setup>
</script>
<style lang="less" scoped>
.home {
  .nav-bar {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 46px;
    border-bottom: 1px solid #ebedf0;

    .title {
      color: var(--primary-color);
      font-size: 18px;
      font-weight: 700;
    }
  }

}
</style>