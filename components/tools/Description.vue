<template>
  <div class="description">
    <div class="description_title">Thông tin chi tiết</div>
    <div class="content">
      <v-row>
        <v-col cols="12" sm="6">
          <div class="content_item">
            <img src="@image/icons/detail_01.png" alt="" />
            <span
              >Loại Bất động sản: <span class="high_text"> Biệt thự - Villa</span></span
            >
          </div>
        </v-col>
        <v-col cols="12" sm="6">
          <div class="content_item">
            <img src="@image/icons/Loai bds.svg" alt="" />
            <span>Loại nhà: <span class="high_text"> Nhà cao tầng</span></span>
          </div>
        </v-col>
        <v-col cols="12" sm="6">
          <div class="content_item">
            <img src="@image/icons/Ngang.svg" alt="" />
            <span>Ngang: <span class="high_text"> 12m</span></span>
          </div>
        </v-col>
        <v-col cols="12" sm="6">
          <div class="content_item">
            <img src="@image/icons/Loại đường.svg" alt="" />
            <span>Loại đường: <span class="high_text"> Mặt tiền đường</span></span>
          </div>
        </v-col>
        <v-col cols="12" sm="6">
          <div class="content_item">
            <img src="@image/icons/Dài.svg" alt="" />
            <span>Dài: <span class="high_text">27m</span></span>
          </div>
        </v-col>
        <v-col cols="12" sm="6">
          <div class="content_item">
            <img src="@image/icons/Phường.svg" alt="" />
            <span>Phường: <span class="high_text"> Phường 8</span></span>
          </div>
        </v-col>
        <v-col cols="12" sm="6">
          <div class="content_item">
            <img src="@image/icons/Diện tích sàn.svg" alt="" />
            <span>Diện tích sàn: <span class="high_text"> 492m2</span></span>
          </div>
        </v-col>
        <v-col cols="12" sm="6">
          <div class="content_item">
            <img src="@image/icons/Thành phố Huyện.svg" alt="" />
            <span>Thành phố/Huyện: <span class="high_text"> Vũng Tàu</span></span>
          </div>
        </v-col>

        <v-col cols="12" sm="6">
          <div class="content_item">
            <img src="@image/icons/Số lầu.svg" alt="" />
            <span>Số lầu: <span class="high_text">3</span></span>
          </div>
        </v-col>
        <v-col cols="12" sm="6">
          <div class="content_item">
            <img src="@image/icons/Hướng.svg" alt="" />
            <span>Hướng: <span class="high_text"> Đông</span></span>
          </div>
        </v-col>
        <v-col cols="12" sm="6">
          <div class="content_item">
            <img src="@image/icons/Số phòng ngủ.svg" alt="" />
            <span>Số phòng ngủ: <span class="high_text"> 4</span></span>
          </div>
        </v-col>
        <v-col cols="12" sm="6">
          <div class="content_item">
            <img src="@image/icons/Đường rộng.svg" alt="" />
            <span>Phòng rộng (m): <span class="high_text"> 12m</span></span>
          </div>
        </v-col>
        <v-col cols="12" sm="6">
          <div class="content_item">
            <img src="@image/icons/Pháp lý.svg" alt="" />
            <span>Pháp lý: <span class="high_text"> Sổ hồng</span></span>
          </div>
        </v-col>
        <v-col cols="12" sm="6">
          <div class="content_item">
            <img src="@image/icons/source-branch-plus (1).png" alt="" />
            <span
              >Thuộc dự án:
              <span class="high_text">
                <router-link to="/project/ngoctuoc/detail">
                  Biệt thự đồi Ngọc Tước</router-link
                ></span
              ></span
            >
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
        width: 18px;
        height: 18px;
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
@media screen and (max-width: 1050px) {
  .description {
    .content {
      .content_item {
        font-size: 14px;
      }
    }
  }
}
@media screen and (max-width: 600px) {
  .description {
    .content {
      .col-6 {
        padding: 5px;
      }
      .col-12 {
        padding: 5px 0px 5px 20px;
        .content_item {
          display: flex;
          align-items: center !important;
        }
      }
      .content_item {
        font-size: 12px;
        img {
          margin-left: 0;
        }
      }
    }
  }
}
</style>
