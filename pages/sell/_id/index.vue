<template>
  <div>
    <div class="sale_detail">
      <div class="sale_title">
        BĐS Bán <i class="el-icon-arrow-right"></i> Nhà ở riêng lẻ
        <i class="el-icon-arrow-right"></i> Vũng Tàu
        <i class="el-icon-arrow-right"></i> Phường 8
        <i class="el-icon-arrow-right"></i> Khu biệt thự đồi Ngọc Tước II
      </div>
      <div class="project_name">
        BIỆT THỰ NGHỈ DƯỠNG ĐẲNG CẤP THIẾT KẾ SANG TRỌNG KHU ĐỒI NGỌC TƯỚC II SÁT BIỂN
        THÙY VÂN
      </div>
      <div class="address">
        <i class="el-icon-location"></i>
        <span>Đường Thi Sách, Phường 8, TP. Vũng Tàu</span>
      </div>
      <div class="social d-flex">
        <span>Chia sẻ</span>
        <img src="@image/icons/facebook_blu.png" alt="" />
        <img src="@image/icons/zalo_blu.png" alt="" />
      </div>

      <v-row>
        <v-col cols="8" id="app">
          <CoolLightBox
            :items="items"
            :index="index"
            :effect="'fade'"
            @close="index = null"
          >
          </CoolLightBox>
          <v-row class="sale_img d-flex images-wrapper">
            <v-col
              cols="3"
              class="img_item image"
              v-for="(image, imageIndex) in items"
              :key="imageIndex"
              @click="index = imageIndex"
            >
              <a href="javascript:;"> <img :src="image.src" alt="" /></a>
            </v-col>
          </v-row>
          <div class="overview">
            <div class="overview_title">Tổng quan</div>
            <v-row class="overview_content">
              <v-col cols="3">
                <div>Mã tin</div>
                <div class="number">3902</div>
              </v-col>
              <v-col cols="3">
                <div>Giá</div>
                <div class="number">40 tỷ</div>
              </v-col>
              <v-col cols="3">
                <div>Diện tích</div>
                <div class="number">324 m2</div>
              </v-col>
              <v-col cols="3">
                <div>Hướng</div>
                <div class="number">Đông</div>
              </v-col>
            </v-row>
            <v-row class="overview_content">
              <v-col col="12" class="project">
                Thuộc dự án: <span class="number">KHU BIỆT THỰ ĐỒI NGỌC TƯỚC II</span>
              </v-col>
            </v-row>
          </div>
          <div class="description">
            <div class="description_title">Mô tả</div>
            <div class="content">
              <p>
                Biệt thự nằm trong quần thể nghỉ dưỡng đẳng cấp nhất Bãi Sau, tương lai cơ
                sở hạ tầng đang đồng bộ sẽ biến khu vực thành nơi nghỉ dưỡng sang trọng
                giá trị lên gấp nhiều lần, xung quanh đang có rất nhiều dự án cao ốc sang
                trọng, cách biển chỉ 2' di chuyển, đảm bảo bạn sẽ có nơi nghỉ dưỡng tuyệt
                vời nhất.
              </p>
              <p>
                Với kết cấu 1 trệt 2 lầu 1 tum được thiết kế 4 phòng ngủ lớn, 1 phòng
                khách rộng, 1 nhà bếp, sân vườn, ban công rộng rãi. Gia chủ sẽ để lại toàn
                bộ nội thất cao cấp cho khách mua, chỉ việc vào ở.
              </p>
              <p><span class="highlight">- Giá:</span> 40 tỷ</p>
              <p>
                <span class="highlight">- Địa chỉ:</span> Thi Sách - phường 8 - thành phố
                Vũng Tàu
              </p>
              <p><span class="highlight">- Diện tích:</span> 324m2 (full thổ cư)</p>
              <p><span class="highlight">- Kích thước:</span> 12m x 27m</p>
              <p>
                <span class="highlight">- Kết cấu:</span> 1 trệt 2 lầu 1 tum, 4 phòng ngủ
              </p>
              <p><span class="highlight">- Đứng trước nhà:</span> 12m</p>
              <p><span class="highlight">- Hướng:</span> Đông</p>
              <p><span class="highlight">- Pháp lý:</span> Sổ hồng hoàn công</p>
              <p><span class="highlight">Mã tin:</span> 3902</p>
              <p class="highlight">*****</p>
              <div class="mycompany">
                <div>
                  Bất Động Sản Việt nhận ký gửi
                  <span class="highlight">Mua bán nhà đất</span> và
                  <span class="highlight">Cho thuê nhà</span>
                </div>
                <div>
                  <i>Quý khách hàng và nhà đầu tư có nhu cầu vui lòng liên hệ:</i>
                </div>
                <div class="highlight">Công ty Cổ phần Dịch Vụ Kho Bất Động Sản Việt</div>
                <div>
                  <i
                    >"Giúp việc
                    <span class="highlight"> mua Bất Động Sản trở nên đơn giản hơn</span>
                    "</i
                  >
                </div>
                <div>Trụ sở: 90 Võ Thị Sáu, phường Thắng Tam, Tp. Vũng Tàu</div>
                <div>
                  <i>Chi nhánh 1: 90 Võ Thị Sáu, phường Thắng Tam, Tp. Vũng Tàu</i>
                </div>
                <div>
                  <i>
                    Chi nhánh 2: Lô A8-5/29+30 đường Nguyễn Hữu Cảnh, Khu Đô thị Chí Linh,
                    TP Vũng Tàu</i
                  >
                </div>
                <div><i> Hotline: 0931.522.686 hoặc 0933.522.686</i></div>
                <div><i> Email: batdongsanviet@gmail.com</i></div>
                <div>
                  <i>Website: <a href="#">http://batdongsanviet.com/</a> </i>
                </div>
              </div>
            </div>
          </div>
          <Description />
        </v-col>
        <v-col cols="4">
          <FormUser />
        </v-col>
      </v-row>
      <div class="estateOfProject">
        <div class="estate_title">NHÀ ĐẤT LIÊN QUAN</div>
        <div id="img_estate">
          <VueSlickCarousel :arrows="true" v-bind="settings02">
            <div class="estate_img">
              <el-card class="box-card">
                <div slot="header" class="clearfix hover14">
                  <figure><img src="@image/layouts/room_18.svg" alt="" /></figure>
                  <div class="overlay_title">Khu biệt thự đồi Ngọc Tước II</div>
                </div>
                <div class="add_detail">
                  <div class="price">
                    <span class="first_price">6 tỷ</span>
                    <span>60 m2</span>
                  </div>
                  <div class="name">
                    BIỆT THỰ NGHỈ DƯỠNG ĐẲNG CẤP THIẾT KẾ SANG TRỌNG ...
                  </div>
                  <div class="sex d-flex">
                    <v-icon>mdi-near-me</v-icon>
                    <span>Đông</span>
                  </div>
                  <div class="address d-flex">
                    <v-icon>mdi-map-marker</v-icon>
                    <span>Thi Sách - phường 8 - thành phố Vũng Tàu</span>
                  </div>
                </div>
              </el-card>
            </div>
            <div class="estate_img">
              <el-card class="box-card">
                <div slot="header" class="clearfix hover14">
                  <figure><img src="@image/layouts/room_19.svg" alt="" /></figure>
                  <div class="overlay_title">Khu biệt thự đồi Ngọc Tước II</div>
                </div>
                <div class="add_detail">
                  <div class="price">
                    <span class="first_price">6 tỷ</span>
                    <span>60 m2</span>
                  </div>
                  <div class="name">
                    BIỆT THỰ NGHỈ DƯỠNG ĐẲNG CẤP THIẾT KẾ SANG TRỌNG ...
                  </div>
                  <div class="sex d-flex">
                    <v-icon>mdi-near-me</v-icon>
                    <span>Nam</span>
                  </div>
                  <div class="address d-flex">
                    <v-icon>mdi-map-marker</v-icon>
                    <span>Thi Sách - phường 8 - thành phố Vũng Tàu</span>
                  </div>
                </div>
              </el-card>
            </div>
            <div class="estate_img">
              <el-card class="box-card">
                <div slot="header" class="clearfix hover14">
                  <figure><img src="@image/layouts/room_37.svg" alt="" /></figure>
                  <div class="overlay_title">Khu biệt thự đồi Ngọc Tước II</div>
                </div>
                <div class="add_detail">
                  <div class="price">
                    <span class="first_price">6 tỷ</span>
                    <span>60 m2</span>
                  </div>
                  <div class="name">
                    BIỆT THỰ NGHỈ DƯỠNG ĐẲNG CẤP THIẾT KẾ SANG TRỌNG ...
                  </div>
                  <div class="sex d-flex">
                    <v-icon>mdi-near-me</v-icon>
                    <span>Nam</span>
                  </div>
                  <div class="address d-flex">
                    <v-icon>mdi-map-marker</v-icon>
                    <span>Thi Sách - phường 8 - thành phố Vũng Tàu</span>
                  </div>
                </div>
              </el-card>
            </div>
          </VueSlickCarousel>
        </div>
      </div>
    </div>
    <div class="footer">
      <Services />
      <Footer />
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import CoolLightBox from "vue-cool-lightbox";
import "vue-cool-lightbox/dist/vue-cool-lightbox.min.css";

import Services from "@component/main/Services";
import Footer from "@component/main/Footer";
import FormUser from "@component/tools/FormUser";
import Description from "@component/tools/Description";
export default {
  components: {
    Services,
    Footer,
    VueSlickCarousel,
    FormUser,
    Description,
    CoolLightBox,
  },
  data() {
    return {
      settings02: {
        dots: false,
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: `<v-btn>Số 1</v-btn>`,
        nextArrow: `<button>Số 2</button>`,
      },
      items: [
        {
          title: "In nature, nothing is perfect and everything is perfect",
          src: require(`@/assets/images/layouts/room_10.png`),
        },
        {
          title: "A beautiful mountain view",
          src: require("@/assets/images/layouts/room_11.png"),
        },
        {
          title: "In nature, nothing is perfect and everything is perfect",
          src: require(`@/assets/images/layouts/room_20.png`),
        },
        {
          title: "A beautiful mountain view",
          src: require("@/assets/images/layouts/room_19.png"),
        },
        {
          title: "A beautiful mountain view",
          src: require("@/assets/images/layouts/room_16.png"),
        },
        {
          title: "A beautiful mountain view",
          src: require("@/assets/images/layouts/room_06.png"),
        },
      ],
      index: null,
    };
  },
};
</script>

<style lang="scss" scoped>
.sale_detail {
  margin-top: 150px;
  padding: 0 10%;
  .sale_title {
    font-size: 18px;
    line-height: 24px;
    color: $color-black-01;
  }
  .project_name {
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: $color-black-01;
    margin: 5px 0;
  }
  .address {
    font-size: 16px;
    color: $color-black-02;
  }
  .social {
    align-items: center;
    margin-top: 10px;
    img {
      margin: 0 5px;
    }
  }
  .sale_img {
    margin-top: 2px;
    .img_item {
      padding: 10px;
      img {
        width: 100%;
        display: block;
      }
    }
  }
  .overview {
    margin: 20px 0;
    .overview_title {
      font-weight: bold;
      font-size: 18px;
      line-height: 24px;
      color: $color-black-01;
    }
    .overview_content {
      text-align: center;
      margin: 15px 0;
      padding: 15px 0;
      font-weight: 500;
      font-size: 18px;
      line-height: 24px;
      background: #f2f2f2;
      //   border: 0.5px solid #dcdcdc;
      box-sizing: border-box;
      border-radius: 4px;
      color: #464646;
      .number {
        font-weight: 700;
        font-size: 20px;
        line-height: 24px;
        color: #fbad18;
        margin-top: 8px;
      }
      .project {
        // margin: 15px 0;
        text-align: center;
      }
    }
  }

  .project_img {
    margin-top: 10px;
    img {
      width: 100%;
      display: block;
    }
  }
  .project_intro {
    margin: 15px 0;
    .name {
      font-weight: 700;
      font-size: 18px;
      line-height: 34px;
      color: $color-black-01;
    }
  }
  .ngoctuoc2 {
    img {
      height: 60%;
    }
  }
  .phoicanh {
    width: 60%;
  }
}
.estateOfProject {
  margin-top: 10px;
  .estate_title {
    font-weight: 500;
    font-size: 24px;
    line-height: 24px;
    color: #000000;
    margin-bottom: 20px;
    margin-left: 20px;
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
  #img_estate {
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
  }
}
.footer {
  margin-top: -40px;
}
</style>
