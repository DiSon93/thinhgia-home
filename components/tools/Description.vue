<template>
  <div class="description">
    <div class="description_title">Thông tin chi tiết</div>
    <div class="content">
      <v-row>
        <v-col cols="6">
          <div class="content_item">
            <img src="@image/icons/detail_01.png" alt="" />
            <span
              >Loại Bất động sản: <span class="high_text"> Biệt thự - Villa</span></span
            >
          </div>
        </v-col>
        <v-col cols="6">
          <div class="content_item">
            <img src="@image/icons/Loai bds.svg" alt="" />
            <span>Loại nhà: <span class="high_text"> Nhà cao tầng</span></span>
          </div>
        </v-col>
        <v-col cols="6">
          <div class="content_item">
            <img src="@image/icons/Ngang.svg" alt="" />
            <span>Ngang: <span class="high_text"> 12m</span></span>
          </div>
        </v-col>
        <v-col cols="6">
          <div class="content_item">
            <img src="@image/icons/Loại đường.svg" alt="" />
            <span>Loại đường: <span class="high_text"> Mặt tiền đường</span></span>
          </div>
        </v-col>
        <v-col cols="6">
          <div class="content_item">
            <img src="@image/icons/Dài.svg" alt="" />
            <span>Dài: <span class="high_text">27m</span></span>
          </div>
        </v-col>
        <v-col cols="6">
          <div class="content_item">
            <img src="@image/icons/Phường.svg" alt="" />
            <span>Phường: <span class="high_text"> Phường 8</span></span>
          </div>
        </v-col>
        <v-col cols="6">
          <div class="content_item">
            <img src="@image/icons/Diện tích sàn.svg" alt="" />
            <span>Diện tích sàn: <span class="high_text"> 492m2</span></span>
          </div>
        </v-col>
        <v-col cols="6">
          <div class="content_item">
            <img src="@image/icons/Thành phố Huyện.svg" alt="" />
            <span>Thành phố/Huyện: <span class="high_text"> Vũng Tàu</span></span>
          </div>
        </v-col>

        <v-col cols="6">
          <div class="content_item">
            <img src="@image/icons/Số lầu.svg" alt="" />
            <span>Số lầu: <span class="high_text">3</span></span>
          </div>
        </v-col>
        <v-col cols="6">
          <div class="content_item">
            <img src="@image/icons/Hướng.svg" alt="" />
            <span>Hướng: <span class="high_text"> Đông</span></span>
          </div>
        </v-col>
        <v-col cols="6">
          <div class="content_item">
            <img src="@image/icons/Số phòng ngủ.svg" alt="" />
            <span>Số phòng ngủ: <span class="high_text"> 4</span></span>
          </div>
        </v-col>
        <v-col cols="6">
          <div class="content_item">
            <img src="@image/icons/Đường rộng.svg" alt="" />
            <span>Phòng rộng (m): <span class="high_text"> 12m</span></span>
          </div>
        </v-col>
        <v-col cols="6">
          <div class="content_item">
            <img src="@image/icons/Pháp lý.svg" alt="" />
            <span>Pháp lý: <span class="high_text"> Sổ hồng</span></span>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.description {
  margin-top: 25px;
  .description_title {
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 10px;
  }
  .content {
    background-color: #f2f2f2;
    border-radius: 4px;
    padding: 20px;
    margin-bottom: 20px;
    .highlight {
      font-weight: 700;
    }
    .content_item {
      img {
        margin-right: 10px;
      }
      .high_text {
        margin-left: 5px;
        color: $color-orange;
        font-weight: 700;
      }
    }
  }
  .mycompany {
    font-size: 14px;
  }
}
</style>
