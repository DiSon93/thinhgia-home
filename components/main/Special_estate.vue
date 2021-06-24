<template>
  <div class="special_estate">
    <div class="estate_title d-flex">
      <div>BẤT ĐỘNG SẢN NỔI BẬT</div>
      <el-button type="warning" @click="$router.push('/search/sell')"
        >Xem tất cả</el-button
      >
    </div>

    <!-- <div class="estate_content" > -->
    <VueSlickCarousel :arrows="true" v-bind="settings">
      <div class="estate_img">
        <el-card class="box-card">
          <div slot="header" class="clearfix hover14">
            <figure><img src="@image/layouts/room_01.png" alt="" /></figure>
          </div>
          <div class="add_detail">
            <div class="price">
              <span class="first_price">6 tỷ</span>
              <span>60 m2</span>
            </div>
            <NuxtLink class="name" to="/sell/01">LOREM IPSUM AMET SIT DOT</NuxtLink>
            <div class="sex d-flex">
              <v-icon>mdi-near-me</v-icon>
              <span>Nam</span>
            </div>
            <div class="address d-flex">
              <v-icon>mdi-map-marker</v-icon>
              <span>Nguyễn Hữu Cảnh, Bình Thạnh</span>
            </div>
          </div>
        </el-card>
      </div>

      <div class="estate_img">
        <el-card class="box-card">
          <div slot="header" class="clearfix hover14">
            <figure><img src="@image/layouts/room_02.png" alt="" /></figure>
          </div>
          <div class="add_detail">
            <div class="price">
              <span class="first_price">6 tỷ</span>
              <span>60 m2</span>
            </div>
            <NuxtLink class="name" to="/rent/02">LOREM IPSUM AMET SIT DOT</NuxtLink>
            <div class="sex d-flex">
              <v-icon>mdi-near-me</v-icon>
              <span>Nam</span>
            </div>
            <div class="address d-flex">
              <v-icon>mdi-map-marker</v-icon>
              <span>Nguyễn Hữu Cảnh, Bình Thạnh</span>
            </div>
          </div>
        </el-card>
      </div>
      <div class="estate_img">
        <el-card class="box-card">
          <div slot="header" class="clearfix hover14">
            <figure><img src="@image/layouts/room_03.png" alt="" /></figure>
          </div>
          <div class="add_detail">
            <div class="price">
              <span class="first_price">6 tỷ</span>
              <span>60 m2</span>
            </div>
            <NuxtLink class="name" to="/sell/03">LOREM IPSUM AMET SIT DOT</NuxtLink>
            <div class="sex d-flex">
              <v-icon>mdi-near-me</v-icon>
              <span>Nam</span>
            </div>
            <div class="address d-flex">
              <v-icon>mdi-map-marker</v-icon>
              <span>Nguyễn Hữu Cảnh, Bình Thạnh</span>
            </div>
          </div>
        </el-card>
      </div>
      <div class="estate_img">
        <el-card class="box-card">
          <div slot="header" class="clearfix hover14">
            <figure><img src="@image/layouts/room_12.png" alt="" /></figure>
          </div>
          <div class="add_detail">
            <div class="price">
              <span class="first_price">6 tỷ</span>
              <span>60 m2</span>
            </div>
            <NuxtLink class="name" to="/rent/04">LOREM IPSUM AMET SIT DOT</NuxtLink>
            <div class="sex d-flex">
              <v-icon>mdi-near-me</v-icon>
              <span>Nam</span>
            </div>
            <div class="address d-flex">
              <v-icon>mdi-map-marker</v-icon>
              <span>Nguyễn Hữu Cảnh, Bình Thạnh</span>
            </div>
          </div>
        </el-card>
      </div>
      <div class="estate_img">
        <el-card class="box-card">
          <div slot="header" class="clearfix hover14">
            <figure><img src="@image/layouts/room_13.png" alt="" /></figure>
          </div>
          <div class="add_detail">
            <div class="price">
              <span class="first_price">6 tỷ</span>
              <span>60 m2</span>
            </div>
            <NuxtLink class="name" to="/sell/05">LOREM IPSUM AMET SIT DOT</NuxtLink>
            <div class="sex d-flex">
              <v-icon>mdi-near-me</v-icon>
              <span>Nam</span>
            </div>
            <div class="address d-flex">
              <v-icon>mdi-map-marker</v-icon>
              <span>Nguyễn Hữu Cảnh, Bình Thạnh</span>
            </div>
          </div>
        </el-card>
      </div>
    </VueSlickCarousel>

    <!-- </div> -->
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
        dots: false,
        focusOnSelect: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        touchThreshold: 5,
        prevArrow: `<v-btn>Số 1</v-btn>`,
        nextArrow: `<button>Số 2</button>`,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.special_estate {
  margin-top: 30px;
  .estate_title {
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
.estate_content {
  display: flex;
  justify-content: space-between;
  .estate_img {
    width: 33.33%;
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
.estate_img {
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
      text-decoration: none;
      &:hover {
        color: $color-orange-light;
        // text-decoration: ;
        transition: 0.5s;
      }
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
// .hover14 figure {
//   position: relative;
// }
// .hover14 figure::before {
//   position: absolute;
//   top: 0;
//   left: -75%;
//   z-index: 2;
//   display: block;
//   content: "";
//   width: 50%;
//   height: 100%;
//   background: -webkit-linear-gradient(
//     left,
//     rgba(255, 255, 255, 0) 0%,
//     rgba(255, 255, 255, 0.3) 100%
//   );
//   background: linear-gradient(
//     to right,
//     rgba(255, 255, 255, 0) 0%,
//     rgba(255, 255, 255, 0.3) 100%
//   );
//   -webkit-transform: skewX(-25deg);
//   transform: skewX(-25deg);
// }
// .hover14 figure:hover::before {
//   -webkit-animation: shine 1s;
//   animation: shine 1s;
// }
// @-webkit-keyframes shine {
//   100% {
//     left: 125%;
//   }
// }
// @keyframes shine {
//   100% {
//     left: 125%;
//   }
// }
</style>
