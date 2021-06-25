<template>
  <v-lazy
    v-model="isActive"
    :options="{
      threshold: 0.5,
    }"
    min-height="200"
    transition="fade-transition"
  >
    <div class="sell_estate">
      <div class="sell_title d-flex">
        <div>MUA BÁN BẤT ĐỘNG SẢN</div>
        <el-button type="warning" @click="$router.push('/search/sell')"
          >Xem tất cả</el-button
        >
      </div>
      <!-- <div class="estate_content"> -->
      <VueSlickCarousel :arrows="true" v-bind="settings">
        <div class="estate_img">
          <el-card class="box-card">
            <div slot="header" class="clearfix hover01">
              <figure><img src="@image/layouts/room_04.png" alt="" /></figure>
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
            <div slot="header" class="clearfix hover01">
              <figure><img src="@image/layouts/room_05.png" alt="" /></figure>
            </div>
            <div class="add_detail">
              <div class="price">
                <span class="first_price">6 tỷ</span>
                <span>60 m2</span>
              </div>
              <NuxtLink class="name" to="/sell/02">LOREM IPSUM AMET SIT DOT</NuxtLink>
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
            <div slot="header" class="clearfix hover01">
              <figure><img src="@image/layouts/room_06.png" alt="" /></figure>
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
            <div slot="header" class="clearfix hover01">
              <figure><img src="@image/layouts/room_07.png" alt="" /></figure>
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
            <div slot="header" class="clearfix hover01">
              <figure><img src="@image/layouts/room_08.png" alt="" /></figure>
            </div>
            <div class="add_detail">
              <div class="price">
                <span class="first_price">6 tỷ</span>
                <span>60 m2</span>
              </div>
              <NuxtLink class="name" to="/sell/09">LOREM IPSUM AMET SIT DOT</NuxtLink>
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
            <div slot="header" class="clearfix hover01">
              <figure><img src="@image/layouts/room_11.png" alt="" /></figure>
            </div>
            <div class="add_detail">
              <div class="price">
                <span class="first_price">6 tỷ</span>
                <span>60 m2</span>
              </div>
              <NuxtLink class="name" to="/sell/10">LOREM IPSUM AMET SIT DOT</NuxtLink>
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
    </div>
  </v-lazy>

  <!-- </div> -->
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
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: `<v-btn>Số 1</v-btn>`,
        nextArrow: `<button>Số 2</button>`,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.sell_estate {
  margin-top: 20px;
  .sell_title {
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
.hover01 {
  overflow: hidden;
}
.hover01 figure img {
  -webkit-transform: scale(1);
  transform: scale(1);
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
}
.hover01 figure:hover img {
  -webkit-transform: scale(1.2);
  transform: scale(1.2);
}
</style>
