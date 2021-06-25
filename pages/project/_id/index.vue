<template>
  <div>
    <div class="search_project">
      <div class="search_link">
        Căn hộ/Chung cư <i class="el-icon-arrow-right"></i> HCM
      </div>
      <SearchProject />

      <v-row class="special_project">
        <v-col cols="6" class="content_left" v-if="this.$route.params.id == 'caykhe'">
          <img src="@image/layouts/special_project_01.png" alt=""
        /></v-col>
        <v-col cols="6" class="content_left" v-else>
          <img src="@image/layouts/ngoctuoc.png" alt=""
        /></v-col>
        <v-col cols="6">
          <div class="special_content">
            <div class="name" v-if="this.$route.params.id == 'caykhe'">
              KHU NHÀ Ở SÔNG CÂY KHẾ
            </div>
            <div class="name" v-else>KHU BIỆT THỰ ĐỒI NGỌC TƯỚC II</div>
            <v-row class="address content">
              <v-col cols="1"> <img src="@image/icons/address.png" alt="" /></v-col>
              <v-col cols="11"
                ><span>Quốc lộ 51A, khu đô thị mới phía Bắc Tp.Vũng Tàu</span></v-col
              >
            </v-row>
            <v-row class="quymo content">
              <v-col cols="1"> <img src="@image/icons/quymo.png" alt="" /></v-col>
              <v-col cols="11">
                <span
                  >Quy mô:
                  <span class="highlight"> 175 căn nhà liên kế và 100 căn biệt thự </span>
                </span></v-col
              >
            </v-row>
            <v-row class="contractor content">
              <v-col cols="1"><img src="@image/icons/contractor.png" alt="" /></v-col>
              <v-col cols="11"
                ><span
                  >Chủ đầu tư:
                  <span class="highlight"
                    >Công ty Cổ phần Đầu tư Xây dựng Sản xuất Tân Thành</span
                  >
                </span></v-col
              >
            </v-row>
            <v-row class="price content">
              <v-col cols="1"><img src="@image/icons/prices.png" alt="" /></v-col>
              <v-col cols="11">
                <span>Giá từ: <span class="highlight">1.2-15 tỷ/căn</span> </span></v-col
              >
            </v-row>
            <v-row class="build content">
              <v-col cols="1"> <img src="@image/icons/buildyear.png" alt="" /></v-col>
              <v-col cols="11">
                <span>Năm xây dựng: <span class="highlight">2018</span> </span></v-col
              >
            </v-row>
            <v-row class="finish content">
              <v-col cols="1"><img src="@image/icons/tiendo.png" alt="" /></v-col>
              <v-col cols="11">
                <span>Tiến độ: <span class="highlight"> Đã hoàn thành</span></span></v-col
              >
            </v-row>
            <v-row class="content">
              <v-btn>Xem chi tiết >></v-btn>
            </v-row>
          </div></v-col
        >
      </v-row>
      <div class="estateOfProject">
        <div class="btn_group">
          <div>
            <v-btn>Cho thuê</v-btn>
            <v-btn color="warning">Mua bán</v-btn>
          </div>
          <div class="content"><v-btn>Xem Tất cả >></v-btn></div>
        </div>
        <v-row id="img_estate">
          <v-col cols="3" class="estate_img">
            <el-card class="box-card">
              <div slot="header" class="clearfix hover14">
                <figure><img src="@image/layouts/room_07.svg" alt="" /></figure>
                <div class="overlay_title">Khu nhà ở sông Cây Khế</div>
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
          </v-col>
          <v-col cols="3" class="estate_img">
            <el-card class="box-card">
              <div slot="header" class="clearfix hover14">
                <figure><img src="@image/layouts/room_03.svg" alt="" /></figure>
                <div class="overlay_title">Khu nhà ở sông Cây Khế</div>
              </div>
              <div class="add_detail">
                <div class="price">
                  <span class="first_price">6 tỷ</span>
                  <span>60 m2</span>
                </div>
                <div class="name">NHÀ CẤP 4 RỘNG RÃI</div>
                <div class="sex d-flex">
                  <v-icon>mdi-near-me</v-icon>
                  <span>Đông</span>
                </div>
                <div class="address d-flex">
                  <v-icon>mdi-map-marker</v-icon>
                  <span>Thi Sách</span>
                </div>
              </div>
            </el-card>
          </v-col>
          <v-col cols="3" class="estate_img">
            <el-card class="box-card">
              <div slot="header" class="clearfix hover14">
                <figure><img src="@image/layouts/room_04.svg" alt="" /></figure>
                <div class="overlay_title">Khu nhà ở sông Cây Khế</div>
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
          </v-col>
          <v-col cols="3" class="estate_img">
            <el-card class="box-card">
              <div slot="header" class="clearfix hover14">
                <figure><img src="@image/layouts/room_15.svg" alt="" /></figure>
                <div class="overlay_title">Khu nhà ở sông Cây Khế</div>
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
          </v-col>
          <v-col cols="3" class="estate_img">
            <el-card class="box-card">
              <div slot="header" class="clearfix hover14">
                <figure><img src="@image/layouts/room_18.svg" alt="" /></figure>
                <div class="overlay_title">Khu nhà ở sông Cây Khế</div>
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
          </v-col>
          <v-col cols="3" class="estate_img">
            <el-card class="box-card">
              <div slot="header" class="clearfix hover14">
                <figure><img src="@image/layouts/room_29.svg" alt="" /></figure>
                <div class="overlay_title">Khu nhà ở sông Cây Khế</div>
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
          </v-col>
          <v-col cols="3" class="estate_img">
            <el-card class="box-card">
              <div slot="header" class="clearfix hover14">
                <figure><img src="@image/layouts/room_30.svg" alt="" /></figure>
                <div class="overlay_title">Khu nhà ở sông Cây Khế</div>
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
          </v-col>
          <v-col cols="3" class="estate_img">
            <el-card class="box-card">
              <div slot="header" class="clearfix hover14">
                <figure><img src="@image/layouts/room_20.svg" alt="" /></figure>
                <div class="overlay_title">Khu nhà ở sông Cây Khế</div>
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
          </v-col>
          <v-col cols="3" class="estate_img">
            <el-card class="box-card">
              <div slot="header" class="clearfix hover14">
                <figure><img src="@image/layouts/room_05.svg" alt="" /></figure>
                <div class="overlay_title">Khu nhà ở sông Cây Khế</div>
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
          </v-col>
          <v-col cols="3" class="estate_img">
            <el-card class="box-card">
              <div slot="header" class="clearfix hover14">
                <figure><img src="@image/layouts/room_11.svg" alt="" /></figure>
                <div class="overlay_title">Khu nhà ở sông Cây Khế</div>
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
          </v-col>
          <v-col cols="3" class="estate_img">
            <el-card class="box-card">
              <div slot="header" class="clearfix hover14">
                <figure><img src="@image/layouts/room_24.svg" alt="" /></figure>
                <div class="overlay_title">Khu nhà ở sông Cây Khế</div>
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
          </v-col>
        </v-row>
      </div>

      <div class="text-center pagination">
        <v-pagination v-model="page" :length="6" color="warning"></v-pagination>
      </div>
    </div>
    <div class="footer">
      <Services />
      <Footer />
    </div>
  </div>
</template>

<script>
import Services from "@component/main/Services";
import Footer from "@component/main/Footer";
import SearchProject from "@component/tools/search-project";
export default {
  components: {
    Services,
    Footer,
    SearchProject,
  },
  mounted() {},
  data() {
    return {
      page: 1,
    };
  },
};
</script>

<style lang="scss" scoped>
.search_project {
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
  }
}
.footer {
  margin-top: -40px !important;
}
.estate_img {
  width: 25%;
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
      line-height: 20px;
      color: #000000;
      margin: 5px 0 10px;
    }
    .sex {
      .v-icon {
        color: #c4c4c4;
        margin-right: 15px;
      }
      font-size: 16px;
      line-height: 30px;
      margin-bottom: 5px;
    }
    .address {
      .v-icon {
        color: #c4c4c4;
        margin-right: 15px;
      }
      font-size: 16px;
      line-height: 20px;
    }
  }
  .clearfix {
    position: relative;
    .overlay_title {
      position: absolute;
      background: #fdd27f;
      border-radius: 4px;
      // width: 180px;
      padding: 0 15px;
      height: 25px;
      left: 19px;
      bottom: -14px;
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
      color: $color-black-02;
      text-align: center;
    }
  }
}
.special_project {
  margin: 30px 0;
  .content_left {
    img {
      width: 96%;
    }
  }
  .highlight {
    font-weight: 700;
  }
  .name {
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    color: #000000;
    margin-bottom: 12px;
  }
  .content {
    margin-bottom: -30px;
    .v-btn {
      background-color: $color-orange-light;
      color: $color-black-02;
      text-transform: capitalize;
      margin-top: 20px;
      box-shadow: none;
      height: 32px;
      font-size: 12px;
    }
  }
  .special_content {
    .address {
      img {
        width: 12px;
      }
    }
    .finish {
      img {
        width: 20px;
      }
    }
    img {
      margin-right: 20px;
    }
  }
}
.estateOfProject {
  .estate_title {
    font-weight: 500;
    font-size: 24px;
    line-height: 24px;
    color: #000000;
    margin-bottom: 20px;
    margin-left: 10px;
  }
  .btn_group {
    margin-bottom: 15px;
    margin-left: 10px;
    display: flex;
    justify-content: space-between;
    .v-btn {
      text-transform: capitalize;
      border-radius: 5px;
      box-shadow: none;
    }
    .v-btn:not(.v-btn--round).v-size--default {
      min-height: 30px;
      height: 32px;
    }
    .content {
      .v-btn {
        background-color: $color-orange-light;
        color: $color-black-02;
        font-size: 12px;
      }
    }
  }
}
.pagination {
  margin-top: 20px;
}
</style>
