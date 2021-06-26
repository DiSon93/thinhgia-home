<template>
  <v-lazy
    v-model="isActive"
    :options="{
      threshold: 0.5,
    }"
    min-height="200"
    transition="fade-transition"
  >
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
            <!-- <router-link to="/sell/01" slot="header" class="clearfix hover14">
              <figure><img src="@image/layouts/room_01.png" alt="" /></figure>
            </router-link> -->
            <figure slot="header" class="snip0016 clearfix">
              <img src="@image/layouts/room_01.png" alt="sample42" />
              <figcaption>
                <h2>LOREM IPSUM AMET SIT DOT <span> IPSUM laugh</span></h2>
                <p>
                  Biệt thự nằm trong quần thể nghỉ dưỡng đẳng cấp nhất Bãi Sau, tương lai
                  cơ sở hạ tầng đang đồng bộ sẽ biến khu vực thành nơi nghỉ dưỡng sang
                  trọng giá trị lên gấp nhiều lần...
                  <br />
                  <v-btn small color="warning">Xem chi tiết >></v-btn>
                </p>
                <!-- <a href="#"></a> -->
              </figcaption>
            </figure>
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
            <!-- <div slot="header" class="clearfix hover14">
              <figure><img src="@image/layouts/room_02.png" alt="" /></figure>
            </div> -->
            <figure slot="header" class="snip0016 clearfix">
              <img src="@image/layouts/room_02.png" alt="sample41" />
              <figcaption>
                <h2>LOREM IPSUM AMET <span>SIT DOT </span> is dark</h2>
                <p>
                  Biệt thự nằm trong quần thể nghỉ dưỡng đẳng cấp nhất Bãi Sau, tương lai
                  cơ sở hạ tầng đang đồng bộ sẽ biến khu vực thành nơi nghỉ dưỡng sang
                  trọng giá trị lên gấp nhiều lần... <br />
                  <v-btn small color="warning">Xem chi tiết >></v-btn>
                </p>
                <!-- <a href="#"></a> -->
              </figcaption>
            </figure>
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
            <!-- <div slot="header" class="clearfix hover14">
              <figure><img src="@image/layouts/room_03.png" alt="" /></figure>
            </div> -->
            <figure slot="header" class="snip0016 clearfix">
              <img src="@image/layouts/room_03.png" alt="sample43" />
              <figcaption>
                <h2>LOREM IPSUM AMET SIT DOT <span> IPSUM laugh</span></h2>
                <p>
                  Biệt thự nằm trong quần thể nghỉ dưỡng đẳng cấp nhất Bãi Sau, tương lai
                  cơ sở hạ tầng đang đồng bộ sẽ biến khu vực thành nơi nghỉ dưỡng sang
                  trọng giá trị lên gấp nhiều lần... <br />
                  <v-btn small color="warning">Xem chi tiết >></v-btn>
                </p>
                <!-- <a href="#"></a> -->
              </figcaption>
            </figure>
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
              <figure><img src="@image/layouts/special_04.svg" alt="" /></figure>
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
  </v-lazy>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  components: { VueSlickCarousel },
  data() {
    return {
      isActive: false,
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
  .v-btn {
    text-transform: capitalize;
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
figure.snip0016 {
  font-family: "Raleway", Arial, sans-serif;
  color: #fff;
  position: relative;
  overflow: hidden;
  width: 100%;
  background: #000000;
  text-align: left;
}
figure.snip0016 * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
figure.snip0016 img {
  max-width: 100%;
  opacity: 1;
  width: 100%;
  -webkit-transition: opacity 0.35s;
  transition: opacity 0.35s;
}
figure.snip0016 figcaption {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 30px 3em;
  width: 100%;
  height: 100%;
}
figure.snip0016 figcaption::before {
  position: absolute;
  top: 30px;
  right: 30px;
  bottom: 30px;
  left: 100%;
  border-left: 4px solid rgba(255, 255, 255, 0.8);
  content: "";
  opacity: 0;
  background-color: rgba(255, 255, 255, 0.5);
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
  -webkit-transition-delay: 0.6s;
  transition-delay: 0.6s;
}
figure.snip0016 h2,
figure.snip0016 p {
  margin: 0;
  opacity: 0;
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, -webkit-transform 0.35s, -moz-transform 0.35s,
    -o-transform 0.35s, transform 0.35s;
}
figure.snip0016 h2 {
  word-spacing: -0.15em;
  font-weight: 300;
  text-transform: uppercase;
  -webkit-transform: translate3d(30%, 0%, 0);
  transform: translate3d(30%, 0%, 0);
  -webkit-transition-delay: 0.3s;
  transition-delay: 0.3s;
}
figure.snip0016 h2 span {
  font-weight: 800;
}
figure.snip0016 p {
  font-weight: 200;
  -webkit-transform: translate3d(0%, 30%, 0);
  transform: translate3d(0%, 30%, 0);
  -webkit-transition-delay: 0s;
  transition-delay: 0s;
}
figure.snip0016 a {
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  position: absolute;
  color: #ffffff;
}
figure.snip0016:hover img {
  opacity: 0.3;
}
figure.snip0016:hover figcaption h2 {
  opacity: 1;
  -webkit-transform: translate3d(0%, 0%, 0);
  transform: translate3d(0%, 0%, 0);
  -webkit-transition-delay: 0.4s;
  transition-delay: 0.4s;
}
figure.snip0016:hover figcaption p {
  opacity: 0.9;
  -webkit-transform: translate3d(0%, 0%, 0);
  transform: translate3d(0%, 0%, 0);
  -webkit-transition-delay: 0.6s;
  transition-delay: 0.6s;
}
figure.snip0016:hover figcaption::before {
  background: rgba(255, 255, 255, 0);
  left: 30px;
  opacity: 1;
  -webkit-transition-delay: 0s;
  transition-delay: 0s;
}

/* Demo purposes only */
html {
  height: 100%;
}
body {
  background-color: #212121;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  height: 100%;
}

.snip0016 {
  width: 100%;
}
</style>
