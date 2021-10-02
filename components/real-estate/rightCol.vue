<template>
  <div>
    <div class="horizontal_image">
      <div class="horizontal_title">NHÀ ĐẤT LIÊN QUAN</div>
      <div class="estate_img" v-for="item in realEstateList.data" :key="item.id">
        <el-card class="box-card">
          <div slot="header" class="clearfix hover14">
            <figure @click="$router.push(parseUrlRealEstate(item))">
              <img
                :src="item.image_public[0].thumbnail"
                :alt="item.title"
                v-if="item.image_public.length > 0"
              />
              <img src="@image/layouts/room_01.png" :alt="item.title" v-else />
            </figure>
            <div
              class="overlay_title"
              v-if="item.project != null"
              v-html="item.project.name"
            ></div>
          </div>
          <div class="add_detail">
            <div class="price">
              <div>
                <span
                  class="first_price"
                  v-html="[item.price, unit_prices[item.unit_price]].join(' ')"
                ></span>
                <span v-html="item.land_area + ' &#13217;'"></span>
              </div>
              <div class="pricePerMeter">
                <i>(100triệu/<span id="mv">&#13217;</span>)</i>
              </div>
            </div>
            <el-tooltip class="item" effect="dark" :content="item.title" placement="top">
              <NuxtLink
                class="name"
                :to="parseUrlRealEstate(item)"
                v-html="item.title"
              ></NuxtLink>
            </el-tooltip>

            <div class="sex d-flex">
              <el-tooltip class="item" effect="dark" content="Hướng" placement="top">
                <v-icon>mdi-near-me</v-icon>
              </el-tooltip>

              <span
                v-html="
                  item.house_orientation_dict ? item.house_orientation_dict.name : null
                "
              ></span>

              <el-tooltip class="item" effect="dark" content="Phòng ngủ" placement="top">
                <v-icon>mdi-bed-outline</v-icon>
              </el-tooltip>

              <span v-html="item.bedroom_number"></span>

              <el-tooltip class="item" effect="dark" content="Phòng tắm" placement="top">
                <v-icon>mdi-shower-head</v-icon>
              </el-tooltip>

              <span v-html="item.bathroom_number"></span>
            </div>
            <div class="address d-flex">
              <el-tooltip class="item" effect="dark" content="Địa chỉ" placement="top">
                <v-icon>mdi-map-marker</v-icon>
              </el-tooltip>

              <span
                v-html="[item.street_type_dict.name, item.district.name].join(', ')"
              ></span>
            </div>
          </div>
        </el-card>
      </div>

      <v-btn
        color="warning"
        class="readmore"
        @click="
          $router.push(
            '/category/' +
              purpose_array[purpose].key +
              '/' +
              dictionaryItem.slug +
              '-' +
              dictionaryItem.id
          )
        "
      >
        Xem thêm <v-icon>mdi-chevron-double-right</v-icon>
      </v-btn>
    </div>

    <div class="mobile_screen">
      <div class="title_mobie">NHÀ ĐẤT LIÊN QUAN</div>
      <div id="img_estate">
        <VueSlickCarousel
          :arrows="true"
          v-bind="settings02"
          v-if="realEstateList.data.length > 0"
        >
          <div class="estate_img" v-for="item in realEstateList.data" :key="item.id">
            <el-card class="box-card">
              <div slot="header" class="clearfix hover14">
                <figure @click="$router.push(parseUrlRealEstate(item))">
                  <img
                    :src="item.image_public[0].thumbnail"
                    :alt="item.title"
                    v-if="item.image_public.length > 0"
                  />
                  <img src="@image/layouts/room_01.png" :alt="item.title" v-else />
                </figure>
                <div
                  class="overlay_title"
                  v-if="item.project != null"
                  v-html="item.project.name"
                ></div>
              </div>
              <div class="add_detail">
                <div class="price">
                  <div>
                    <span
                      class="first_price"
                      v-html="[item.price, unit_prices[item.unit_price]].join(' ')"
                    ></span>
                    <span v-html="item.land_area + ' &#13217;'"></span>
                  </div>
                  <div class="pricePerMeter">
                    <i>(100triệu/<span id="mv">&#13217;</span>)</i>
                  </div>
                </div>
                <el-tooltip
                  class="item"
                  effect="dark"
                  :content="item.title"
                  placement="top"
                >
                  <NuxtLink
                    class="name"
                    :to="parseUrlRealEstate(item)"
                    v-html="item.title"
                  ></NuxtLink>
                </el-tooltip>

                <div class="sex d-flex">
                  <el-tooltip class="item" effect="dark" content="Hướng" placement="top">
                    <v-icon>mdi-near-me</v-icon>
                  </el-tooltip>

                  <span
                    v-html="
                      item.house_orientation_dict
                        ? item.house_orientation_dict.name
                        : null
                    "
                  ></span>

                  <el-tooltip
                    class="item"
                    effect="dark"
                    content="Phòng ngủ"
                    placement="top"
                  >
                    <v-icon>mdi-bed-outline</v-icon>
                  </el-tooltip>

                  <span v-html="item.bedroom_number"></span>

                  <el-tooltip
                    class="item"
                    effect="dark"
                    content="Phòng tắm"
                    placement="top"
                  >
                    <v-icon>mdi-shower-head</v-icon>
                  </el-tooltip>

                  <span v-html="item.bathroom_number"></span>
                </div>
                <div class="address d-flex">
                  <el-tooltip
                    class="item"
                    effect="dark"
                    content="Địa chỉ"
                    placement="top"
                  >
                    <v-icon>mdi-map-marker</v-icon>
                  </el-tooltip>

                  <span
                    v-html="[item.street_type_dict.name, item.district.name].join(', ')"
                  ></span>
                </div>
              </div>
            </el-card>
          </div>
        </VueSlickCarousel>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  props: {
    real_estate_type: {
      type: Number,
      default: null,
      required: true,
    },
    purpose: {
      type: Number,
      default: null,
      required: true,
    },
  },
  components: {
    VueSlickCarousel,
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
        responsive: [
          {
            breakpoint: 1250,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 920,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
            },
          },
        ],
      },
    };
  },
  computed: {
    ...mapState("dictionary", ["dictionaryItem"]),
    ...mapState("realestate", ["realEstateList", "purpose_array", "unit_prices"]),
  },
  mounted() {
    this.getCategoryItem(this.real_estate_type);
    this.getRealEstate({
      real_estate_type: this.real_estate_type,
      purpose: this.purpose,
    });
  },
  methods: {
    ...mapActions("dictionary", ["getCategoryItem"]),
    ...mapActions("realestate", ["getRealEstate"]),
    parseUrlRealEstate(real_estate) {
      return "/detail/" + real_estate.slug + "-" + real_estate.id;
    },
    strip_tags(str) {
      if (str != null) {
        str = str.replace(/(<([^>]+)>)/gi, "");
      }

      return str;
    },
  },
};
</script>

<style lang="scss" scoped>
.horizontal_title {
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
  margin-top: 30px;
  text-align: center;
  position: sticky;
  top: 70px;
  z-index: 9;
  background: #f2f2f2;
  height: 50px;
  line-height: 50px;
}

.horizontal_image {
  width: 280px;
  margin: 0 auto;
  // margin-top: 10px;
  .readmore.v-btn {
    text-transform: capitalize;
    box-shadow: none;
    background: #fdd27f !important;
    float: right;
    color: $color-black-03;
    font-size: 12px;
    .v-icon {
      font-size: 16px;
    }
  }
  .estate_img {
    margin-bottom: 20px;
    .clearfix img {
      width: 100%;
      display: block;
    }
    .price {
      font-weight: bold;
      font-size: 15px;
      line-height: 30px;
      color: #fbad18;
      .first_price {
        margin-right: 8px;
        padding-right: 8px;
        border-right: 1px solid $color-black-01;
      }
    }
    .name {
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: #000000;
      text-decoration: none;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      margin: 5px 0;
      &:hover {
        color: $color-orange;
        // text-decoration: ;
        transition: 0.5s;
      }
    }
    .sex {
      .v-icon {
        color: #c4c4c4;
        margin: 0 10px 0 15px;
        &:first-child {
          margin-left: 0;
        }
      }
      font-size: 15px;
      line-height: 30px;
      margin: 10px 0;
    }
    .address {
      .v-icon {
        color: #c4c4c4;
        margin-right: 10px;
      }
      font-size: 15px;
      line-height: 24px;
      span {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        margin: auto 0px;
      }
    }
    .clearfix {
      position: relative;
      .overlay_title {
        position: absolute;
        background: #fdd27f;
        border-radius: 4px;
        padding: 0 20px;
        // height: 25px;
        left: 15px;
        right: 15px;
        bottom: -14px;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        color: $color-black-02;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        max-height: 48px;
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

.mobile_screen {
  display: none;
}

.mobile_screen {
  margin-top: 20px;
  .title_mobie {
    font-size: 16px;
    font-weight: 700;
  }
  .estate_title {
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #000000;
    margin: 10px 0 0 20px;
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
      }
      .clearfix {
        position: relative;
        .overlay_title {
          position: absolute;
          background: #fdd27f;
          border-radius: 4px;
          padding: 0 15px;
          left: 15px;
          right: 15px;
          bottom: -14px;
          font-weight: 500;
          font-size: 12px;
          line-height: 20px;
          color: $color-black-02;
          text-align: center;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          max-height: 48px;
        }
      }
    }
    .estate_img {
      width: 25%;
      padding: 5px;
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
          font-size: 11px;
          line-height: 16px;
          color: #fbad18;
          .first_price {
            margin-right: 2px;
            padding-right: 4px;
            border-right: 1px solid $color-black-01;
          }
        }
        .name {
          font-weight: 500;
          font-size: 12px;
          line-height: 20px;
          color: #000000;
          text-decoration: none;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          height: 34px;
          -webkit-box-orient: vertical;
          margin: 5px 0;
          &:hover {
            color: $color-orange;
            // text-decoration: ;
            transition: 0.5s;
          }
        }
        .sex {
          .v-icon {
            color: #c4c4c4;
            margin: 0 6px 0 6px;
            font-size: 14px;
            &:first-child {
              margin-left: 0;
            }
          }
          font-size: 11px;
          line-height: 16px;
          margin: 8px 0;
        }
        .address {
          .v-icon {
            color: #c4c4c4;
            margin-right: 6px;
            font-size: 14px;
          }
          font-size: 11px;
          line-height: 16px;
          height: 30px;

          color: #000;
          span {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            margin: auto 0px;
          }
        }
      }
    }
  }
}
@media screen and(max-width: 600px) {
  .horizontal_image {
    display: none;
  }
  .mobile_screen {
    display: block;
  }
  .add_detail {
    margin: 0 -10px !important;
  }
}
</style>
