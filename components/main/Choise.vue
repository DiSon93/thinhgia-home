<template>
  <v-lazy
    v-model="isActive"
    :options="{
      threshold: 0.5,
    }"
    min-height="200"
    transition="scale-transition"
  >
    <div class="choise">
      <div class="choise_title">VÌ SAO CHỌN KHO BẤT ĐỘNG SẢN VIỆT</div>
      <div class="choise_content">
        <div class="choise_item">
          <img src="@image/layouts/Frame 107.png" alt="" />
          <div class="quote">Hàng ngàn tin BĐS đăng bán mỗi ngày</div>
        </div>
        <div class="choise_item">
          <img src="@image/layouts/Frame 108.png" alt="" />
          <div class="quote">Mua bán đảm bảo tính pháp lý</div>
        </div>
        <div class="choise_item">
          <img src="@image/layouts/Frame 106.png" alt="" />
          <div class="quote">Giao dịch đảm bảo và tiện lợi</div>
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
.choise {
  .choise_title {
    font-weight: bold;
    font-size: 24px;
    line-height: 24px;
    color: $color-black-01;
    margin: 50px 0 40px;
    text-align: center;
  }
  .choise_content {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    .choise_item {
      width: 25%;
      margin: 0 20px;
      img {
        width: 100%;
        display: block;
      }
      .quote {
        font-weight: 500;
        font-size: 18px;
        line-height: 24px;
        text-align: center;
        color: $color-black-01;
        text-align: center;
        margin-top: 20px;
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

@media screen and (max-width: 600px) {
  .choise {
    margin-bottom: -30px;
    .choise_title {
      font-size: 16px;
      margin: 40px 0 20px;
    }
    .choise_content {
      display: block;
      .choise_item {
        display: flex;
        width: 90%;
        border: 1px solid #ebeef5;
        box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
        border-radius: 4px;
        margin-right: 20px;
        height: 80px;
        margin-bottom: 15px;
        img {
          width: 30%;
        }
        .quote {
          font-size: 12px;
          // margin: 30px 0 0 10px;
          margin: auto 0;
          padding: 0 10px;
          text-align: left;
        }
        &:hover {
          animation: upDown 0.5s linear 0s;
        }
      }
    }
  }
}
</style>
