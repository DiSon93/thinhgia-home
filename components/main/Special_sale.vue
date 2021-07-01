<template>
  <v-lazy
    v-model="isActive"
    :options="{
      threshold: 0.5,
    }"
    min-height="100"
    transition="scale-transition"
  >
    <div class="special_sale">
      <div class="sale_title">ƯU ĐÃI ĐẶC BIỆT</div>
      <div class="sale_detail">
        <div class="d-flex">
          <div class="sale_img">
            <img src="@image/layouts/house_sale_01.png" alt="" />
          </div>
          <div class="sale_img">
            <img src="@image/layouts/house_sale_02.png" alt="" />
          </div>
        </div>
        <div class="d-flex">
          <div class="sale_img">
            <img src="@image/layouts/house_sale_03.png" alt="" />
          </div>
          <div class="sale_img">
            <img src="@image/layouts/house_sale_04.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </v-lazy>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
};
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
      width: 100%;
      padding: 20px;
      img {
        width: 100%;
        display: block;
        border-radius: 5px;
      }
      &:hover {
        animation: upDown 0.5s linear 0s;
      }
    }
  }
}
@media screen and (max-width: 990px) {
  .sale_img {
    padding: 10px !important;
  }
}
@media screen and (max-width: 600px) {
  .special_sale {
    .sale_title {
      font-size: 16px;
      margin-left: 10px;
    }
    .sale_detail {
      display: block;
      .sale_img {
        padding: 10px;
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
