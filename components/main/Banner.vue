<template>
  <v-lazy
    v-model="isActive"
    :options="{
      threshold: 0.5,
    }"
    min-height="100"
  >
    <div class="banner">
      <div class="d-flex">
        <div class="banner_content slot_add">
          <img src="@image/icons/Căn hộ.svg" alt="" class="add_01" />
          <div class="text">Căn hộ</div>
        </div>
        <div class="banner_content slot_add">
          <img src="@image/icons/Nhà riêng.svg" alt="" class="add_02" />
          <div class="text">Nhà riêng</div>
        </div>

        <div class="banner_content">
          <img src="@image/icons/Mặt tiền.svg" alt="" class="add_03" />
          <div class="text">Mặt tiền</div>
        </div>
        <div class="banner_content">
          <img class="slot" src="@image/icons/Biệt thự.svg" alt="" />
          <div class="text">Biệt thự</div>
        </div>
      </div>
      <div class="d-flex">
        <div class="banner_content">
          <img src="@image/icons/Khách sạn.svg" alt="" />
          <div class="text">Khách sạn</div>
        </div>
        <div class="banner_content">
          <img src="@image/icons/Phòng trọ.svg" alt="" />
          <div class="text">Phòng trọ</div>
        </div>

        <div class="banner_content">
          <img src="@image/icons/Kho xưởng.svg" alt="" class="ware" />
          <div class="text">Kho xưởng</div>
        </div>
        <div class="banner_content">
          <img src="@image/icons/Trang Trai FIX.svg" alt="" />
          <div class="text">Trang trại</div>
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
.banner {
  margin-top: 50px;
  display: flex;
  justify-content: center;
  .banner_content {
    width: 25%;
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
}
@media screen and (max-width: 1195px) {
  .banner {
    .banner_content {
      .text {
        font-size: 16px !important;
        font-weight: 500;
      }
    }
  }
}

@media screen and (max-width: 600px) {
  .banner {
    display: block;
    .banner_content {
      width: 25% !important;
      .text {
        font-size: 14px !important;
      }
    }
  }
}
</style>
