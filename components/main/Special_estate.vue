<template>
  <v-lazy
    v-model="isActive"
    :options="{ threshold: 0.5 }"
    min-height="200"
    transition="fade-transition"
  >
    <div class="special_estate">
      <div class="estate_title d-flex">
        <div>BẤT ĐỘNG SẢN NỔI BẬT</div>
        <el-button type="warning" @click="$router.push('/category/bat-dong-san-noi-bat')"
          >Xem tất cả</el-button
        >
      </div>

      <!-- <div class="estate_content" > -->
      <VueSlickCarousel
        :arrows="true"
        v-bind="settings"
        v-if="featureList.data.length != 0"
      >
        <div class="estate_img" v-for="item in featureList.data" :key="item.id">
          <el-card class="box-card">
            <!-- <router-link to="/sell/01" slot="header" class="clearfix hover14">
                            <figure><img src="@image/layouts/room_01.png" alt="" /></figure>
                        </router-link> -->
            <figure slot="header" class="snip0016 clearfix">
              <img
                :src="item.image_public[0].thumbnail"
                :alt="item.title"
                v-if="item.image_public.length > 0"
              />
              <img src="@image/layouts/room_01.png" :alt="item.title" v-else />
              <figcaption>
                <h2 v-html="item.title"></h2>
                <p>
                  <span v-html="strip_tags(item.descriptions)"></span>
                  <br />
                  <v-btn :to="parseUrlRealEstate(item)" small color="warning"
                    >Xem chi tiết &gt;&gt;</v-btn
                  >
                </p>

                <!-- <a href="#"></a> -->
              </figcaption>
            </figure>
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
              <NuxtLink
                class="name"
                :to="parseUrlRealEstate(item)"
                v-html="item.title ? item.title.toUpperCase() : null"
              ></NuxtLink>
              <div class="sex d-flex">
                <el-tooltip class="item" effect="dark" content="Hướng" placement="top">
                  <v-icon>mdi-near-me</v-icon>
                </el-tooltip>

                <span
                  v-html="
                    item.house_orientation_dict ? item.house_orientation_dict.name : null
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
                <el-tooltip class="item" effect="dark" content="Địa chỉ" placement="top">
                  <v-icon>mdi-map-marker</v-icon>
                </el-tooltip>

                <span
                  v-html="
                    [
                      item.street_type_dict ? item.street_type_dict.name : '',
                      item.district ? item.district.name : '',
                    ].join(', ')
                  "
                ></span>
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
import { mapState, mapActions } from "vuex";
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
        focusOnSelect: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
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
    ...mapState("realestate", ["featureList", "unit_prices"]),
  },
  mounted() {
    this.getFeature();
  },
  methods: {
    ...mapActions("realestate", ["getFeature"]),
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
      line-height: 24px;
      color: #000000;
      text-decoration: none;
      margin-top: 10px;
      height: 50px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      &:hover {
        color: $color-orange-light;
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
      font-size: 16px;
      line-height: 30px;
      margin: 10px 0;
    }
    .address {
      .v-icon {
        color: #c4c4c4;
        margin-right: 10px;
      }
      font-size: 16px;
      line-height: 24px;
      span {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
      }
    }
  }
  .v-btn {
    text-transform: capitalize;
  }
}

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
  span {
    overflow-y: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    margin-top: 20px;
  }
}

figure.snip0016 a {
  //   left: 0;
  //   right: 0;
  //   top: 0;
  //   bottom: 0;
  //   position: absolute;
  //   color: #ffffff;
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
  span {
    overflow-y: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    margin-top: 20px;
  }
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

@media screen and (max-width: 1200px) {
  .estate_img {
    h2 {
      font-size: 18px;
    }
    p {
      font-size: 14px;
    }
  }
  .special_estate {
    margin-top: 10px;
  }
}

@media screen and (max-width: 600px) {
  .estate_title {
    font-size: 16px !important;
    margin-left: 10px !important;
    .el-button {
      margin-right: -10px;
    }
  }
  .estate_img {
    padding: 6px !important;
    h2 {
      font-size: 12px;
    }
    p {
      font-size: 10px;
    }
    .add_detail {
      margin: -10px;
      font-size: 12x;
      .price {
        font-size: 11px;
        line-height: 18px;
        .first_price {
          margin-right: 2px;
          padding-right: 4px;
          border-right: 1px solid $color-black-01;
        }
      }
      a.name {
        font-size: 12x !important;
      }
      .sex {
        font-size: 11px;
        // font-weight: 300;
        .v-icon {
          color: #c4c4c4;
          margin: 0 6px 0 5px;
          font-size: 14px;
          &:first-child {
            margin-left: 0;
          }
        }
        line-height: 20px;
        margin: 5px 0;
      }
      .address {
        font-size: 11px;
        // font-weight: 300;
        .v-icon {
          color: #c4c4c4;
          margin-right: 6px !important;
          font-size: 14px;
        }
        line-height: 16px;
        letter-spacing: 0.1px;
      }
    }
  }
  .estate_img .add_detail .sex {
    margin: 8px 0 5px !important;
  }
  .estate_img .add_detail .address {
    align-items: center;
    display: flex;
    height: 38px;
    .v-icon {
      margin-right: 6px !important;
    }
  }
  .estate_img .add_detail .name {
    font-size: 12px !important;
    height: 32px;
    margin-top: 8px !important;
  }
}
</style>
