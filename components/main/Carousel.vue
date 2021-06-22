<template>
  <div class="carousel">
    <VueSlickCarousel :arrows="false" :dots="true" class="carousel_img" v-bind="settings">
      <img src="@image/layouts/Pngtree.png" alt="" />
      <img src="@image/layouts/carousel_01.png" alt="" />
      <img src="@image/layouts/carousel_02.png" alt="" />
    </VueSlickCarousel>
    <div class="carousel_title">
      <div class="carousel_options">
        <v-btn-toggle v-model="text" tile color="deep-purple accent-3" group>
          <v-btn value="BĐS Bán"> BĐS Bán </v-btn>

          <v-btn value="BĐS Thuê"> BĐS Thuê </v-btn>

          <v-btn value="Dự Án"> Dự Án </v-btn>
        </v-btn-toggle>
      </div>
      <div class="high_search">Tìm kiếm nâng cao</div>
      <div class="select_options">
        <v-row>
          <v-col cols="10" class="options d-flex">
            <div class="select_house">
              <v-select
                v-model="e1"
                :items="items"
                placeholder="Căn hộ/Chung cư"
                outlined
                multiple
              ></v-select>
            </div>
            <div class="input_house">
              <v-text-field
                placeholder="Nhập địa điểm hoặc từ khóa (Ví dụ: Vinhomes)..."
              ></v-text-field>
            </div>
          </v-col>
          <!-- <v-col cols="7" class="options">
           
          </v-col> -->
          <v-col cols="2" class="options">
            <div class="btn_search">
              <v-btn color="warning" dark> Tìm kiếm </v-btn>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3" class="options">
            <div class="select_city">
              <v-select
                v-model="e2"
                :items="items"
                placeholder="Tỉnh/Thành phố"
                outlined
                multiple
              ></v-select>
            </div>
          </v-col>
          <v-col cols="3" class="options">
            <div class="select_district">
              <v-select
                v-model="e3"
                :items="items"
                placeholder="Quận/Huyện"
                outlined
                multiple
              ></v-select>
            </div>
          </v-col>
          <v-col cols="3" class="options">
            <div class="select_square">
              <v-select
                v-model="e4"
                :items="items"
                placeholder="Diện tích"
                outlined
                multiple
              ></v-select>
            </div>
          </v-col>
          <v-col cols="3" class="options">
            <div class="select_price">
              <v-select
                v-model="e6"
                :items="items"
                placeholder="Khoảng giá"
                outlined
                multiple
              ></v-select>
            </div>
          </v-col>
        </v-row>
      </div>
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
      e1: [],
      e2: [],
      e3: [],
      e4: [],
      e5: [],
      e6: [],
      text: "BĐS Bán",
      items: ["Foo", "Bar", "Fizz", "Buzz"],
      settings: {
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        fade: true,
        speed: 800,
        swipe: true,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.carousel {
  // background-image: url("@image/layouts/Pngtree.png");
  // height: 675px;
  // background-position: center;
  // background-repeat: none;
  // background-size: cover;
  // position: relative;
  .carousel_img {
    img {
      width: 100%;
    }
  }
}
.carousel_title {
  position: absolute;
  top: 490px;
  left: 210px;
  right: 210px;
  .high_search {
    position: absolute;
    left: 81.19%;
    right: 0%;
    top: 44px;
    text-align: center;
    // align-items: center;
    font-size: 16px;
    line-height: 54px;
    height: 54px;
    background: rgba(32, 32, 32, 0.6);
    border-radius: 5px 5px 0px 0px;
  }
  .carousel_options {
    margin-bottom: 50px;
    .v-btn-toggle:not(.v-btn-toggle--dense) .v-btn.v-btn.v-size--default {
      color: $color-white;
      height: 40px;
      font-size: 16px;
      font-weight: 700;
      border-radius: 6px;
    }
    .v-btn-toggle {
      background: rgba(32, 32, 32, 0.5);
      border-radius: 5px;
    }
    .v-item--active.v-btn--active {
      background: $color-white !important;
      color: $color-black-01 !important;
      opacity: 1 !important;
      border: none;
      border-radius: 6px;
    }
    .v-btn {
      text-transform: capitalize;
    }
    .v-btn-toggle > .v-btn.v-btn {
      opacity: 1 !important;
    }
    .theme--light.v-btn--active:hover::before,
    .theme--light.v-btn--active::before {
      opacity: 0 !important;
    }
    .v-btn-toggle > .v-btn.v-btn {
      border-style: hidden;
    }
  }
  .select_options {
    background: rgba(32, 32, 32, 0.6);
    padding: 20px;
    border-radius: 8px;
    border-top-right-radius: 0px;
    .options {
      .select_house {
        width: 25%;
      }
      .input_house {
        width: 75%;
        margin-left: 12px;
      }
    }
  }
  .high_search {
    color: $color-white;
  }
}
</style>
