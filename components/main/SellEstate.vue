<template>
  <v-lazy
    v-model="isActive"
    :options="{ threshold: 0.5 }"
    min-height="200"
    transition="fade-transition"
  >
    <div class="sell_estate">
      <div class="sell_title d-flex">
        <div>MUA BÁN BẤT ĐỘNG SẢN</div>
        <el-button type="warning" @click="$router.push('/category/mua-ban-bat-dong-san')"
          >Xem tất cả</el-button
        >
      </div>
      <!-- <div class="estate_content"> -->
      <VueSlickCarousel :arrows="true" v-bind="settings">
        <div class="estate_img" v-for="item in purposeList.sell.data" :key="item.id">
          <el-card class="box-card">
            <div slot="header" class="clearfix hover01">
              <router-link :to="parseUrlRealEstate(item)">
                <figure>
                  <img
                    :src="item.image_public[0].thumbnail"
                    :alt="item.title"
                    v-if="item.image_public.length > 0"
                  />
                  <img src="@image/layouts/room_04.png" :alt="item.title" v-else />
                </figure>
              </router-link>
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
              <NuxtLink
                class="name"
                :to="parseUrlRealEstate(item)"
                v-html="item.title"
              ></NuxtLink>
              <div class="sex d-flex">
                <el-tooltip class="item" effect="dark" content="Hướng" placement="top">
                  <v-icon>mdi-near-me</v-icon>
                </el-tooltip>

                <span v-html="item.house_orientation_dict.name"></span>

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
                  v-html="[item.street_type_dict.name, item.district.name].join(', ')"
                ></span>
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
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1360,
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
    ...mapState("realestate", ["purposeList", "unit_prices"]),
  },
  mounted() {
    this.getPurpose("sell");
  },
  methods: {
    ...mapActions("realestate", ["getPurpose"]),
    parseUrlRealEstate(real_estate) {
      return "/detail/" + real_estate.slug + "-" + real_estate.id;
    },
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
      font-weight: 700;
      font-size: 14px;
      line-height: 30px;
      color: #fbad18;
      .first_price {
        margin-right: 10px;
        padding-right: 10px;
        border-right: 1px solid $color-black-01;
      }
    }
    .name {
      font-weight: 500;
      font-size: 16px;
      line-height: 40px;
      color: #000000;
      text-decoration: none;
      line-height: 24px;
      height: 50px;
      margin: 5px 0 10px;
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
      font-size: 15px;
      line-height: 30px;
      margin-bottom: 10px;
    }
    .address {
      .v-icon {
        color: #c4c4c4;
        margin-right: 10px;
      }
      font-size: 15px;
      line-height: 24px;
      height: 48px;
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

@media screen and(max-width: 1456px) {
  .estate_img {
    padding: 10px !important;
  }
}

@media screen and(max-width: 1360px) {
  .estate_img {
    padding: 20px !important;
  }
}
@media screen and (max-width: 600px) {
  .sell_title {
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
        font-size: 12px;
        line-height: 18px;
        .first_price {
          margin-right: 8px;
          padding-right: 8px;
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
}
</style>
