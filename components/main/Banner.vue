<template>
  <v-container fluid class="banner d-flex">
    <!-- <div class="text">Đây là trang Banner</div> -->
    <v-row justify="center">
      <div class="banner_content slot_add">
        <img src="@image/icons/s1.png" alt="" class="add_01" />
        <div class="text">Căn hộ</div>
      </div>
      <div class="banner_content slot_add">
        <img src="@image/icons/s2.png" alt="" class="add_02" />
        <div class="text">Nhà riêng</div>
      </div>
      <div class="banner_content">
        <img src="@image/icons/s3.png" alt="" class="add_03" />
        <div class="text">Mặt tiền</div>
      </div>
      <div class="banner_content">
        <img class="slot" src="@image/icons/s4.png" alt="" />
        <div class="text">Biệt thự</div>
      </div>
      <div class="banner_content">
        <img src="@image/icons/s5.png" alt="" />
        <div class="text">Khách sạn</div>
      </div>
      <div class="banner_content">
        <img src="@image/icons/s6.png" alt="" />
        <div class="text">Phòng trọ</div>
      </div>
      <div class="banner_content">
        <img src="@image/icons/s7.png" alt="" class="ware" />
        <div class="text">Kho xưởng</div>
      </div>
      <div class="banner_content">
        <img src="@image/icons/s8.png" alt="" />
        <div class="text">Trang trại</div>
      </div>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.banner {
  margin-top: 70px;
  .banner_content {
    width: 12.5%;
    text-align: center;
    img {
      width: 80%;
      height: auto;
    }
    .text {
      font-size: 20px;
      color: $color-black-01;
    }
  }
  .slot_add {
    padding-top: 12px;
  }
  .slot {
    margin-bottom: 6px;
    margin-top: 6px;
  }
  .add_01 {
    padding-top: 6px;
    margin-bottom: -5px;
  }
  .add_03 {
    margin-bottom: 5px;
  }
  .add_02 {
    margin-bottom: -4px;
  }
  .ware {
    margin-bottom: 6px;
  }
}
</style>
