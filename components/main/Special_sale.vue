<template>
  <div class="special_sale">
    <div class="sale_title">ƯU ĐÃI ĐẶC BIỆT</div>
    <div class="sale_detail">
      <div class="sale_img">
        <img src="@image/layouts/house_sale_01.png" alt="" />
      </div>
      <div class="sale_img">
        <img src="@image/layouts/house_sale_02.png" alt="" />
      </div>
      <div class="sale_img">
        <img src="@image/layouts/house_sale_03.png" alt="" />
      </div>
      <div class="sale_img">
        <img src="@image/layouts/house_sale_04.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.special_sale {
  margin-top: 40px;
  .sale_title {
    font-size: 24px;
    font-weight: 700;
    margin-left: 20px;
    margin-bottom: 10px;
  }
  .sale_detail {
    display: flex;
    .sale_img {
      width: 25%;
      padding: 20px;
      img {
        width: 100%;
        display: block;
      }
      &:hover {
        animation: upDown 0.5s linear 0s;
      }
    }
  }
}
@keyframes upDown {
  /* 1 chu kì/ 1 lần chuyển động */
  /* 100s */
  0% {
  }
  25% {
    transform: translateY(-5px) scale(1);
  }
  50% {
    transform: translateY(0);
    scale: 1;
  }
  75% {
    transform: translateY(5px);
    scale: 1;
  }
  100% {
    transform: translateY(0);
    scale: 1;
  }
}
</style>
