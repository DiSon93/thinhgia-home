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
          <img src="@image/layouts/choise_01.png" alt="" />
          <div class="quote">Hàng ngàn tin BĐS đăng bán mỗi ngày</div>
        </div>
        <div class="choise_item">
          <img src="@image/layouts/choise_02.png" alt="" />
          <div class="quote">Mua bán đảm bảo tính pháp lý</div>
        </div>
        <div class="choise_item">
          <img src="@image/layouts/choise_03.png" alt="" />
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
</style>
