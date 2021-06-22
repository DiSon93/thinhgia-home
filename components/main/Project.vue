<template>
  <div class="project_estate">
    <div class="project_title d-flex">
      <div>DỰ ÁN BẤT ĐỘNG SẢN</div>
      <el-button type="warning">Xem tất cả</el-button>
    </div>
    <div class="project_content">
      <v-row class="estate_content">
        <v-col cols="6" class="estate_img">
          <VueSlickCarousel :arrows="false" v-bind="settings">
            <div>
              <div slot="header" class="clearfix">
                <img src="@image/layouts/project_01.png" alt="" />
                <div class="overlay_title">
                  Căn hộ nghỉ dưỡng khách sạn ALA CARTE VUNG TAU
                </div>
              </div>
              <div class="add_detail">
                <div class="quymo">
                  <p>
                    Quy mô: 1.968,3 m2, 171 phòng, gồm 71 phòng khách sạn và 100 căn hộ.
                  </p>
                  <p>Thời gian: Đã hoàn thành</p>
                  <p>Giá từ: 50tr/m2</p>
                </div>
                <div class="more_detail">Xem thêm thông tin DỰ ÁN</div>
              </div>
            </div>
            <div>
              <div slot="header" class="clearfix">
                <img src="@image/layouts/project_04.png" alt="" />
                <div class="overlay_title">Khu Nhà Ở Sông Cây Khế</div>
              </div>
              <div class="add_detail">
                <div class="quymo">
                  <p>Quy mô: 84.585m2, 175 căn nhà liên kế và 100 căn biệt thự</p>
                  <p>Thời gian: Đã hoàn thành</p>
                  <p>Giá từ: 1,2-15 tỷ/căn</p>
                </div>
                <div class="more_detail">Xem thêm thông tin DỰ ÁN</div>
              </div>
            </div>
            <div>
              <div slot="header" class="clearfix">
                <img src="@image/layouts/project_05.png" alt="" />
                <div class="overlay_title">Khu Biệt Thự Đồi Ngọc Tước II</div>
              </div>
              <div class="add_detail">
                <div class="quymo">
                  <p>
                    Quy mô: 84.585m2, 149 biệt thự, 133 căn liên kế và 40 nền nhà tái định
                    cư
                  </p>
                  <p>Thời gian: Đã hoàn thành</p>
                  <p>Giá từ: 30-50 tỷ/căn</p>
                </div>
                <div class="more_detail">Xem thêm thông tin DỰ ÁN</div>
              </div>
            </div>
          </VueSlickCarousel>
        </v-col>
        <v-col cols="6" class="small_project">
          <VueSlickCarousel :arrows="true" v-bind="settings02">
            <div class="estate_img">
              <el-card class="box-card">
                <div slot="header" class="clearfix hover14">
                  <figure><img src="@image/layouts/project_06.png" alt="" /></figure>
                  <div class="overlay_small_project">ALA CARTE VŨNG TÀU</div>
                </div>
                <div class="add_detail">
                  <div class="price">
                    <span class="first_price">6 tỷ</span>
                    <span>60 m2</span>
                  </div>
                  <div class="name">
                    BÁN CĂN HỘ ĐẦY ĐỦ TIỆN NGHI 2 PHÒNG NGỦ, 2WC THIẾT KẾ...
                  </div>
                  <div class="sex d-flex">
                    <v-icon>mdi-near-me</v-icon>
                    <span>Đông Nam</span>
                  </div>
                  <div class="address d-flex">
                    <v-icon>mdi-map-marker</v-icon>
                    <span>Phường 12, TP Vũng Tàu</span>
                  </div>
                </div>
              </el-card>
            </div>

            <div class="estate_img">
              <el-card class="box-card">
                <div slot="header" class="clearfix hover14">
                  <figure><img src="@image/layouts/project_07.png" alt="" /></figure>
                  <div class="overlay_small_project">ALA CARTE VŨNG TÀU</div>
                </div>
                <div class="add_detail">
                  <div class="price">
                    <span class="first_price">6 tỷ</span>
                    <span>60 m2</span>
                  </div>
                  <div class="name">
                    BÁN CĂN HỘ ĐẦY ĐỦ TIỆN NGHI 2 PHÒNG NGỦ, 2WC THIẾT KẾ...
                  </div>
                  <div class="sex d-flex">
                    <v-icon>mdi-near-me</v-icon>
                    <span>Tây Bắc</span>
                  </div>
                  <div class="address d-flex">
                    <v-icon>mdi-map-marker</v-icon>
                    <span>Phường 8, TP Vũng Tàu</span>
                  </div>
                </div>
              </el-card>
            </div>
            <div class="estate_img">
              <el-card class="box-card">
                <div slot="header" class="clearfix hover14">
                  <figure><img src="@image/layouts/project_08.png" alt="" /></figure>
                  <div class="overlay_small_project">ALA CARTE VŨNG TÀU</div>
                </div>
                <div class="add_detail">
                  <div class="price">
                    <span class="first_price">6 tỷ</span>
                    <span>60 m2</span>
                  </div>
                  <div class="name">
                    BÁN CĂN HỘ ĐẦY ĐỦ TIỆN NGHI 2 PHÒNG NGỦ, 2WC THIẾT KẾ...
                  </div>
                  <div class="sex d-flex">
                    <v-icon>mdi-near-me</v-icon>
                    <span> Tây Nam</span>
                  </div>
                  <div class="address d-flex">
                    <v-icon>mdi-map-marker</v-icon>
                    <span>Phường 1, TP Vũng Tàu</span>
                  </div>
                </div>
              </el-card>
            </div>
            <div class="estate_img">
              <el-card class="box-card">
                <div slot="header" class="clearfix hover14">
                  <figure><img src="@image/layouts/project_09.png" alt="" /></figure>
                  <div class="overlay_small_project">ALA CARTE VŨNG TÀU</div>
                </div>
                <div class="add_detail">
                  <div class="price">
                    <span class="first_price">6 tỷ</span>
                    <span>60 m2</span>
                  </div>
                  <div class="name">
                    BÁN CĂN HỘ ĐẦY ĐỦ TIỆN NGHI 2 PHÒNG NGỦ, 2WC THIẾT KẾ...
                  </div>
                  <div class="sex d-flex">
                    <v-icon>mdi-near-me</v-icon>
                    <span>Đông Bắc</span>
                  </div>
                  <div class="address d-flex">
                    <v-icon>mdi-map-marker</v-icon>
                    <span>Phường 7, TP Vũng Tàu</span>
                  </div>
                </div>
              </el-card>
            </div>
          </VueSlickCarousel>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  components: { VueSlickCarousel },
  data() {
    return {
      settings: {
        dots: true,
        focusOnSelect: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        fade: true,
        speed: 500,
      },
      settings02: {
        dots: false,
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.project_estate {
  margin-top: 20px;
  .project_title {
    font-size: 24px;
    font-weight: 700;
    margin: 0 20px 10px;
    justify-content: space-between;
    .el-button {
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      padding: 6px 14px;
      color: #7a7a7a;
    }
  }
}
.project_content {
  background: $color-white;
  border: 1px solid #ebebeb;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  padding: 20px;
  margin: 20px;
  .estate_content {
    display: flex;
    justify-content: space-between;
    .estate_img {
      // width: 25%;
      padding: 20px;
      img {
        width: 100%;
        height: 80%;
        display: block;
      }

      .quymo {
        margin-top: 30px;
      }
      .more_detail {
        font-weight: 500;
        font-size: 18px;
        line-height: 24px;
        color: #fbad18;
      }
      .clearfix {
        position: relative;
        .overlay_title {
          position: absolute;
          bottom: -20px;
          width: 517px;
          height: 60px;
          background: #fbad18;
          font-size: 18px;
          color: $color-white;
          line-height: 60px;
          padding-left: 20px;
        }
      }
    }
  }
  .small_project {
    padding-top: 20px;
    .estate_img {
      padding: 0 15px 0;
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
        font-size: 15px;
        line-height: 24px;
        color: #000000;
        margin-bottom: 12px;
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
      // .project_name {
      //   margin-top: 15px;
      //   .name {
      //     margin-left: 10px;
      //     font-weight: bold;
      //     font-size: 16px;
      //     line-height: 24px;
      //     color: #fbad18;
      //   }
      // }
    }
    .clearfix {
      position: relative;
      .overlay_small_project {
        position: absolute;
        background: #fdd27f;
        border-radius: 4px;
        width: 180px;
        height: 26px;
        bottom: -12px;
        color: #7a7a7a;
        font-weight: 500;
        font-size: 14px;
        text-align: center;
        line-height: 26px;
        left: 20px;
      }
    }
  }
}
.hover14 figure {
  position: relative;
}
.hover14 figure::before {
  position: absolute;
  top: 0;
  left: -75%;
  z-index: 2;
  display: block;
  content: "";
  width: 50%;
  height: 100%;
  background: -webkit-linear-gradient(
    left,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.3) 100%
  );
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.3) 100%
  );
  -webkit-transform: skewX(-25deg);
  transform: skewX(-25deg);
}
.hover14 figure:hover::before {
  -webkit-animation: shine 1s;
  animation: shine 1s;
}
@-webkit-keyframes shine {
  100% {
    left: 125%;
  }
}
@keyframes shine {
  100% {
    left: 125%;
  }
}
</style>
