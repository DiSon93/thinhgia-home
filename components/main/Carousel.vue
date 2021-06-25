<template>
  <v-lazy
    v-model="isActive"
    :options="{
      threshold: 0.5,
    }"
    min-height="600"
    transition="fade-transition"
  >
    <div class="carousel">
      <VueSlickCarousel
        :arrows="false"
        :dots="true"
        class="carousel_img"
        v-bind="settings"
      >
        <img src="@image/layouts/background_01.svg" alt="" />
        <img src="@image/layouts/background_02.svg" alt="" />
        <img src="@image/layouts/background_03.svg" alt="" />
        <img src="@image/layouts/background_04.svg" alt="" />
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
                <!-- <v-select
                v-model="e1"
                :items="items"
                placeholder="Căn hộ/Chung cư"
                outlined
                multiple
              ></v-select> -->
                <el-cascader
                  :options="options"
                  :props="props"
                  collapse-tags
                  clearable
                  placeholder="Căn hộ/Chung cư"
                ></el-cascader>
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
                <el-cascader
                  :options="options02"
                  :props="props"
                  collapse-tags
                  clearable
                  placeholder="Tỉnh/Thành phố"
                ></el-cascader>
              </div>
            </v-col>
            <v-col cols="3" class="options">
              <div class="select_district">
                <el-cascader
                  :options="options03"
                  :props="props"
                  collapse-tags
                  clearable
                  placeholder="Quận/Huyện"
                ></el-cascader>
              </div>
            </v-col>
            <v-col cols="3" class="options">
              <div class="select_square">
                <el-cascader
                  :options="options04"
                  :props="props"
                  collapse-tags
                  clearable
                  placeholder="Diện tích"
                ></el-cascader>
              </div>
            </v-col>
            <v-col cols="3" class="options">
              <div class="select_price">
                <el-cascader
                  :options="options05"
                  :props="props"
                  collapse-tags
                  clearable
                  placeholder="Khoảng giá"
                ></el-cascader>
              </div>
            </v-col>
          </v-row>
        </div>
      </div>
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
      e1: [],
      e2: [],
      e3: [],
      e4: [],
      e5: [],
      e6: [],
      text: "BĐS Bán",
      items: ["Foo", "Bar", "Fizz", "Buzz"],
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
      options02: [
        {
          value: 1,
          label: "TP. Hồ Chí Minh",
        },
        {
          value: 14,
          label: "Hà Nội",
        },
        {
          value: 23,
          label: "Đà Nẵng",
        },
        {
          value: 24,
          label: "Vũng Tàu",
        },
        {
          value: 25,
          label: "Bến Tre",
        },
        {
          value: 26,
          label: "Long An",
        },
        {
          value: 27,
          label: "Tiền Giang",
        },
        {
          value: 28,
          label: "Quảng Nam",
        },
        {
          value: 29,
          label: "Quảng Ngãi",
        },
        {
          value: 30,
          label: "Bình Thuận",
        },
      ],
      options03: [
        {
          value: 1,
          label: "Quận 1",
        },
        {
          value: 14,
          label: "Quận 2",
        },
        {
          value: 23,
          label: "Quận 3",
        },
        {
          value: 11,
          label: "Quận 4",
        },
        {
          value: 12,
          label: "Quận 5",
        },
        {
          value: 13,
          label: "Quận 6",
        },
        {
          value: 14,
          label: "Quận 7",
        },
        {
          value: 24,
          label: "Quận Bình Thạnh",
        },
        {
          value: 25,
          label: "Quận Thủ Đức",
        },
        {
          value: 26,
          label: "Quận Bình Tân",
        },
        {
          value: 27,
          label: "Quận Gò Vấp",
        },
        {
          value: 28,
          label: "Quận Tân Phú",
        },
        {
          value: 29,
          label: "Quận Phú Nhuận",
        },
        {
          value: 30,
          label: "Quận Tân Bình",
        },
      ],
      options04: [
        {
          value: 1,
          label: "0 - 10m2",
        },
        {
          value: 14,
          label: "0 - 20m2",
        },
        {
          value: 23,
          label: "0 - 30m2",
        },
        {
          value: 24,
          label: "0 - 40m2",
        },
        {
          value: 25,
          label: "0 - 50m2",
        },
        {
          value: 26,
          label: "50 - 60m2",
        },
        {
          value: 27,
          label: "50 - 70m2",
        },
        {
          value: 28,
          label: "50 - 100m2",
        },
        {
          value: 29,
          label: "100 - 200m2",
        },
        {
          value: 30,
          label: "Trên 200m2",
        },
      ],
      options05: [
        {
          value: 1,
          label: "0 - 10triệu",
        },
        {
          value: 14,
          label: "0 - 20triệu",
        },
        {
          value: 23,
          label: "20 - 50triệu",
        },
        {
          value: 24,
          label: "50 - 100triệu",
        },
        {
          value: 25,
          label: "100 - 150triệu",
        },
        {
          value: 26,
          label: "100 - 500triệu",
        },
        {
          value: 27,
          label: "500 - 1tỷ",
        },
        {
          value: 28,
          label: "1 - 2tỷ",
        },
        {
          value: 29,
          label: "2 - 10tỷ",
        },
        {
          value: 30,
          label: "Trên 10tỷ",
        },
      ],
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
