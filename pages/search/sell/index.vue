<template>
 <v-lazy
    v-model="isActive"
    :options="{
      threshold: 0.5,
    }"
    min-height="200"
    transition="fade-transition"
  >
    <div>
    <div class="search_sell">
      <div class="search_link">
        Căn hộ/Chung cư <i class="el-icon-arrow-right"></i> HCM
      </div>
      <SearchTool />
      <div class="search_content">
        <v-row class="tieude">
          <v-col cols="8">
            <div class="search_title">MUA BÁN CHUNG CƯ / CĂN HỘ , TP.HCM</div>
            <div class="note">Có 5324 BĐS được tìm thấy</div>
          </v-col>
          <v-col cols="4" class="sort_items">
            <v-btn outlined color="warning">
              Sắp xếp <i class="el-icon-caret-bottom"></i>
            </v-btn>
          </v-col>
        </v-row>

        <v-row align="center">
          <v-col cols="3">
            <div class="estate_img">
              <el-card class="box-card">
                <div slot="header" class="clearfix hover14">
                  <figure><img src="@image/layouts/room_18.svg" alt="" /></figure>
                </div>
                <div class="add_detail">
                  <div class="price">
                    <span class="first_price">6 tỷ</span>
                    <span>60 m2</span>
                  </div>
                  <div class="name">LOREM IPSUM AMET SIT DOT</div>
                  <div class="sex d-flex">
                    <v-icon>mdi-near-me</v-icon>
                    <span>Nam</span>
                  </div>
                  <div class="address d-flex">
                    <v-icon>mdi-map-marker</v-icon>
                    <span>Nguyễn Hữu Cảnh</span>
                  </div>
                </div>
              </el-card>
            </div>
          </v-col>
          <v-col cols="3">
            <div class="estate_img">
              <el-card class="box-card">
                <div slot="header" class="clearfix hover14">
                  <figure><img src="@image/layouts/room_19.svg" alt="" /></figure>
                </div>
                <div class="add_detail">
                  <div class="price">
                    <span class="first_price">6 tỷ</span>
                    <span>60 m2</span>
                  </div>
                  <div class="name">LOREM IPSUM AMET SIT DOT</div>
                  <div class="sex d-flex">
                    <v-icon>mdi-near-me</v-icon>
                    <span>Nam</span>
                  </div>
                  <div class="address d-flex">
                    <v-icon>mdi-map-marker</v-icon>
                    <span>Nguyễn Hữu Cảnh</span>
                  </div>
                </div>
              </el-card>
            </div>
          </v-col>
          <v-col cols="3">
            <div class="estate_img">
              <el-card class="box-card">
                <div slot="header" class="clearfix hover14">
                  <figure><img src="@image/layouts/room_20.svg" alt="" /></figure>
                </div>
                <div class="add_detail">
                  <div class="price">
                    <span class="first_price">6 tỷ</span>
                    <span>60 m2</span>
                  </div>
                  <div class="name">LOREM IPSUM AMET SIT DOT</div>
                  <div class="sex d-flex">
                    <v-icon>mdi-near-me</v-icon>
                    <span>Nam</span>
                  </div>
                  <div class="address d-flex">
                    <v-icon>mdi-map-marker</v-icon>
                    <span>Nguyễn Hữu Cảnh</span>
                  </div>
                </div>
              </el-card>
            </div>
          </v-col>
          <v-col cols="3">
            <div class="estate_img">
              <el-card class="box-card">
                <div slot="header" class="clearfix hover14">
                  <figure><img src="@image/layouts/room_21.svg" alt="" /></figure>
                </div>
                <div class="add_detail">
                  <div class="price">
                    <span class="first_price">6 tỷ</span>
                    <span>60 m2</span>
                  </div>
                  <div class="name">LOREM IPSUM AMET SIT DOT</div>
                  <div class="sex d-flex">
                    <v-icon>mdi-near-me</v-icon>
                    <span>Nam</span>
                  </div>
                  <div class="address d-flex">
                    <v-icon>mdi-map-marker</v-icon>
                    <span>Nguyễn Hữu Cảnh</span>
                  </div>
                </div>
              </el-card>
            </div>
          </v-col>
          <v-col cols="3">
            <div class="estate_img">
              <el-card class="box-card">
                <div slot="header" class="clearfix hover14">
                  <figure><img src="@image/layouts/room_22.svg" alt="" /></figure>
                </div>
                <div class="add_detail">
                  <div class="price">
                    <span class="first_price">6 tỷ</span>
                    <span>60 m2</span>
                  </div>
                  <div class="name">LOREM IPSUM AMET SIT DOT</div>
                  <div class="sex d-flex">
                    <v-icon>mdi-near-me</v-icon>
                    <span>Nam</span>
                  </div>
                  <div class="address d-flex">
                    <v-icon>mdi-map-marker</v-icon>
                    <span>Nguyễn Hữu Cảnh</span>
                  </div>
                </div>
              </el-card>
            </div>
          </v-col>
          <v-col cols="3">
            <div class="estate_img">
              <el-card class="box-card">
                <div slot="header" class="clearfix hover14">
                  <figure><img src="@image/layouts/room_23.svg" alt="" /></figure>
                </div>
                <div class="add_detail">
                  <div class="price">
                    <span class="first_price">6 tỷ</span>
                    <span>60 m2</span>
                  </div>
                  <div class="name">LOREM IPSUM AMET SIT DOT</div>
                  <div class="sex d-flex">
                    <v-icon>mdi-near-me</v-icon>
                    <span>Nam</span>
                  </div>
                  <div class="address d-flex">
                    <v-icon>mdi-map-marker</v-icon>
                    <span>Nguyễn Hữu Cảnh</span>
                  </div>
                </div>
              </el-card>
            </div>
          </v-col>
          <v-col cols="3">
            <div class="estate_img">
              <el-card class="box-card">
                <div slot="header" class="clearfix hover14">
                  <figure><img src="@image/layouts/room_24.svg" alt="" /></figure>
                </div>
                <div class="add_detail">
                  <div class="price">
                    <span class="first_price">6 tỷ</span>
                    <span>60 m2</span>
                  </div>
                  <div class="name">LOREM IPSUM AMET SIT DOT</div>
                  <div class="sex d-flex">
                    <v-icon>mdi-near-me</v-icon>
                    <span>Nam</span>
                  </div>
                  <div class="address d-flex">
                    <v-icon>mdi-map-marker</v-icon>
                    <span>Nguyễn Hữu Cảnh</span>
                  </div>
                </div>
              </el-card>
            </div>
          </v-col>
          <v-col cols="3">
            <div class="estate_img">
              <el-card class="box-card">
                <div slot="header" class="clearfix hover14">
                  <figure><img src="@image/layouts/room_25.svg" alt="" /></figure>
                </div>
                <div class="add_detail">
                  <div class="price">
                    <span class="first_price">6 tỷ</span>
                    <span>60 m2</span>
                  </div>
                  <div class="name">LOREM IPSUM AMET SIT DOT</div>
                  <div class="sex d-flex">
                    <v-icon>mdi-near-me</v-icon>
                    <span>Nam</span>
                  </div>
                  <div class="address d-flex">
                    <v-icon>mdi-map-marker</v-icon>
                    <span>Nguyễn Hữu Cảnh</span>
                  </div>
                </div>
              </el-card>
            </div>
          </v-col>
          <v-col cols="3">
            <div class="estate_img">
              <el-card class="box-card">
                <div slot="header" class="clearfix hover14">
                  <figure><img src="@image/layouts/room_26.svg" alt="" /></figure>
                </div>
                <div class="add_detail">
                  <div class="price">
                    <span class="first_price">6 tỷ</span>
                    <span>60 m2</span>
                  </div>
                  <div class="name">LOREM IPSUM AMET SIT DOT</div>
                  <div class="sex d-flex">
                    <v-icon>mdi-near-me</v-icon>
                    <span>Nam</span>
                  </div>
                  <div class="address d-flex">
                    <v-icon>mdi-map-marker</v-icon>
                    <span>Nguyễn Hữu Cảnh</span>
                  </div>
                </div>
              </el-card>
            </div>
          </v-col>
          <v-col cols="3">
            <div class="estate_img">
              <el-card class="box-card">
                <div slot="header" class="clearfix hover14">
                  <figure><img src="@image/layouts/room_16.svg" alt="" /></figure>
                </div>
                <div class="add_detail">
                  <div class="price">
                    <span class="first_price">6 tỷ</span>
                    <span>60 m2</span>
                  </div>
                  <div class="name">LOREM IPSUM AMET SIT DOT</div>
                  <div class="sex d-flex">
                    <v-icon>mdi-near-me</v-icon>
                    <span>Nam</span>
                  </div>
                  <div class="address d-flex">
                    <v-icon>mdi-map-marker</v-icon>
                    <span>Nguyễn Hữu Cảnh</span>
                  </div>
                </div>
              </el-card>
            </div>
          </v-col>
          <v-col cols="3">
            <div class="estate_img">
              <el-card class="box-card">
                <div slot="header" class="clearfix hover14">
                  <figure><img src="@image/layouts/room_07.svg" alt="" /></figure>
                </div>
                <div class="add_detail">
                  <div class="price">
                    <span class="first_price">6 tỷ</span>
                    <span>60 m2</span>
                  </div>
                  <div class="name">LOREM IPSUM AMET SIT DOT</div>
                  <div class="sex d-flex">
                    <v-icon>mdi-near-me</v-icon>
                    <span>Nam</span>
                  </div>
                  <div class="address d-flex">
                    <v-icon>mdi-map-marker</v-icon>
                    <span>Nguyễn Hữu Cảnh</span>
                  </div>
                </div>
              </el-card>
            </div>
          </v-col>
        </v-row>
      </div>
      <div class="text-center">
        <v-pagination v-model="page" :length="6" color="warning"></v-pagination>
      </div>
    </div>
    <div class="footer">
      <Services />
      <Footer />
    </div>
  </div>
   </v-lazy>

</template>

<script>
import Services from "@component/main/Services";
import Footer from "@component/main/Footer";
import SearchTool from "@component/tools/search-tool";
export default {
  components: {
    Services,
    Footer,
    SearchTool,
  },
  data() {
    return {
      isActive: false,
      value: [0, 100],
      value02: [0, 10],
      isQuare: false,
      isPrice: false,
      marks: {
        0: "0",
        100: "100",
        200: "200",
        300: "300",
        400: "400",
        500: "500+",
      },
      marks02: {
        0: "0",
        3: "3",
        6: "6",
        9: "9",
        12: "12",
        15: "15+",
      },
      isFilter: false,
      page: 1,
      e1: [],
      e2: [],
      e3: [],
      e4: [],
      e5: [],
      e6: [],
      e7: [],
      input3: "",
      select: "1",
      states: ["BĐS Thuê", "BĐS Bán", "Dự Án"],
      items: [
        "Tất cả",
        "Căn hộ/Chung cư",
        "Nhà ở riêng lẻ",
        "Nhà mặt tiền",
        "Biệt thự-Villa",
        "Nhà nghỉ-Khách sạn",
        "Phòng trọ",
        "Kho xưởng",
        "Trang trại",
        "Loại khác",
      ],
      props: { multiple: true },
      options: [
        {
          value: 1,
          label: "Tất cả",
        },
        {
          value: 14,
          label: "Căn hộ/Chung cư",
        },
        {
          value: 23,
          label: "Nhà ở riêng lẻ",
        },
        {
          value: 24,
          label: "Nhà mặt tiền",
        },
        {
          value: 25,
          label: "Biệt thự-Villa",
        },
        {
          value: 26,
          label: "Nhà nghỉ/Khách sạn",
        },
        {
          value: 27,
          label: "Phòng trọ",
        },
        {
          value: 28,
          label: "Kho xưởng",
        },
        {
          value: 29,
          label: "Trang trại",
        },
        {
          value: 30,
          label: "Loại khác",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.search_sell {
  margin-top: 150px;
  padding: 0 10%;
  .search_link {
    font-size: 18px;
    margin-bottom: 15px;
  }
  .selection {
    justify-content: space-between;
  }
  .filter_content {
    width: 90%;
    margin: 0 auto;
    margin-bottom: 40px;
    margin-top: 20px;
  }
}
.footer {
  margin-top: -40px !important;
}
.search_content {
  margin-top: 30px;
  .search_title {
    font-size: 18px;
    line-height: 18px;
    text-align: left;
    color: $color-black-01;
    font-weight: 700;
  }
  .tieude {
    margin-bottom: -50px;
  }
  .sort_items {
    text-align: right;
    .v-btn:not(.v-btn--round).v-size--default {
      height: 40px;
    }
  }
  .note {
    font-size: 18px;
    line-height: 18px;
    text-align: left;
    color: $color-black-01;
    margin: 10px 0 20px;
  }
  .col-3 {
    padding: 0;
  }
  .estate_img {
    width: 100%;
    padding: 20px;
    img {
      width: 100%;
      height: 80%;
      display: block;
    }
    .add_detail {
      img {
        width: 15px;
        height: 15px;
      }
      .price {
        font-weight: bold;
        font-size: 16px;
        line-height: 30px;
        color: #fbad18;
        .first_price {
          margin-right: 15px;
          padding-right: 15px;
          border-right: 1px solid $color-black-01;
        }
      }
      .name {
        font-weight: 500;
        font-size: 16px;
        line-height: 40px;
        color: #000000;
      }
      .sex {
        .v-icon {
          color: #c4c4c4;
          margin-right: 15px;
        }
        font-size: 16px;
        line-height: 30px;
      }
      .address {
        .v-icon {
          color: #c4c4c4;
          margin-right: 15px;
        }
        font-size: 16px;
        line-height: 30px;
      }
    }
  }
}
.rangeslider {
  width: 400px;
  margin-left: 40%;
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 5px;
  margin-top: 10px;
}
</style>
