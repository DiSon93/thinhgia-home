<template>
  <div>
    <div class="sell_detail" v-if="realEstateItem && realEstateItem.id != undefined">
      <div class="sell_title">
        <NuxtLink to="/"> Trang chủ </NuxtLink>
        <i class="el-icon-arrow-right"></i>
        <NuxtLink
          :to="'/category/' + purpose_array[realEstateItem.purpose].slug"
          v-html="purpose_array[realEstateItem.purpose].title"
        ></NuxtLink>
        <i class="el-icon-arrow-right"></i>
        <NuxtLink
          :to="
            '/category/' +
            purpose_array[realEstateItem.purpose].key +
            '/' +
            dictionaryItem.slug +
            '-' +
            dictionaryItem.id
          "
          v-html="dictionaryItem.name"
        ></NuxtLink>
        <i class="el-icon-arrow-right"></i>
        <span v-html="realEstateItem.title"></span>
      </div>
      <div class="project_name">
        <span v-html="realEstateItem.title" v-if="!loading"></span>
      </div>
      <div class="address" v-if="!loading">
        <i class="el-icon-location"></i>
        <span
          v-html="
            [realEstateItem.street_type_dict.name, realEstateItem.district.name].join(
              ', '
            )
          "
        ></span>
      </div>
      <v-skeleton-loader type="card-heading" v-else></v-skeleton-loader>

      <div class="social d-flex">
        <span class="mr-4">Chia sẻ:</span>
        <!-- <img src="@image/icons/facebook_blu.png" alt="" /> -->
        <!-- <img src="@image/icons/zalo_blu.png" alt="" /> -->
        <div
          class="fb-share-button mr-4"
          :data-href="href"
          data-layout="button_count"
          data-size="small"
        >
          <a
            target="_blank"
            :href="'https://www.facebook.com/sharer/sharer.php?u=' + href"
            class="fb-xfbml-parse-ignore"
          >
            <img src="@image/icons/facebook_blu.png" alt="Chia sẻ" />
          </a>
        </div>
        <div
          class="zalo-share-button"
          :data-href="href"
          data-oaid="53253160592962497"
          data-layout="3"
          data-color="blue"
          data-customize="false"
        ></div>
        <script src="https://sp.zalo.me/plugins/sdk.js"></script>
      </div>
      <v-row>
        <v-col cols="12" sm="8" id="app">
          <CoolLightBox
            :items="realEstateItem.image_public"
            :index="index"
            srcName="main"
            srcThumb="thumbnail"
            :effect="'fade'"
            @close="index = null"
          >
          </CoolLightBox>
          <!-- <div v-loading="loading" class="loading_overlay"> -->
          <v-row class="sale_img d-flex images-wrapper">
            <v-col
              cols="3"
              class="img_item image"
              v-for="(image, imageIndex) in realEstateItem.image_public"
              :key="imageIndex"
              @click="index = imageIndex"
            >
              <a href="javascript:;" v-if="!loading">
                <img :src="image.thumbnail" :alt="realEstateItem.title" />
              </a>
              <v-skeleton-loader
                class="mx-auto"
                width="100%"
                type="image"
                v-else
              ></v-skeleton-loader>
            </v-col>
          </v-row>
          <!-- </div> -->

          <div class="overview">
            <div class="overview_title">Tổng quan</div>
            <v-row class="overview_content">
              <v-col cols="3">
                <div>Mã tin</div>
                <div class="number" v-html="realEstateItem.id"></div>
              </v-col>
              <v-col cols="3">
                <div>Giá</div>
                <div
                  class="number"
                  v-html="
                    [realEstateItem.price, unit_prices[realEstateItem.unit_price]].join(
                      ' '
                    )
                  "
                ></div>
              </v-col>
              <v-col cols="3">
                <div>Diện tích</div>
                <div
                  class="number"
                  v-if="realEstateItem.land_area"
                  v-html="realEstateItem.land_area + ' &#13217;'"
                ></div>
              </v-col>
              <v-col cols="3">
                <div>Hướng</div>
                <div
                  class="number"
                  v-html="
                    realEstateItem.house_orientation_dict
                      ? realEstateItem.house_orientation_dict.name
                      : null
                  "
                ></div>
              </v-col>
            </v-row>
            <v-row class="overview_content">
              <v-col col="12" class="project">
                Thuộc dự án:
                <span
                  v-if="realEstateItem.project != null"
                  class="number"
                  v-html="realEstateItem.project.name"
                ></span>
              </v-col>
            </v-row>
          </div>
          <div class="description">
            <div class="description_title">Mô tả</div>
            <div class="content">
              <div v-html="realEstateItem.descriptions"></div>
            </div>
          </div>
          <Description :detail="realEstateItem" />
        </v-col>
        <v-col cols="12" sm="4">
          <FormUser />
          <div class="rightCol">
            <RightCol
              :real_estate_type="realEstateItem.real_estate_type"
              :purpose="realEstateItem.purpose"
            />
          </div>
        </v-col>
      </v-row>

      <div class="estateOfProject">
        <div class="estate_title">NHÀ ĐẤT ĐÃ XEM</div>
        <div id="img_estate">
          <VueSlickCarousel
            :arrows="true"
            v-bind="settings02"
            v-if="saved_list_render.length != 0"
          >
            <div class="estate_img" v-for="item in saved_list_render" :key="item.id">
              <el-card class="box-card">
                <div slot="header" class="clearfix hover14">
                  <router-link :to="parseUrlRealEstate(item)">
                    <figure>
                      <img
                        :src="item.image_public_id[0].thumbnail"
                        :alt="item.title"
                        v-if="item.image_public_id && item.image_public_id.length > 0"
                      />
                      <img src="@image/layouts/room_37.svg" :alt="item.title" v-else />
                    </figure>
                  </router-link>

                  <div
                    class="overlay_title"
                    v-if="item.project"
                    v-html="item.project ? item.project.name : null"
                  ></div>
                </div>
                <div class="add_detail">
                  <div class="price">
                    <div>
                      <span
                        class="first_price"
                        v-html="[item.price, unit_prices[item.unit_price]].join(' ')"
                      ></span>
                      <span
                        v-if="item.land_area"
                        v-html="item.land_area + ' &#13217;'"
                      ></span>
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
                    <el-tooltip
                      class="item"
                      effect="dark"
                      content="Hướng"
                      placement="top"
                    >
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
                      v-html="
                        [
                          item.street_name,
                          item.ward ? item.ward.name : '',
                          item.district ? item.district.name : '',
                          item.province ? item.province.name : '',
                        ].join(', ')
                      "
                    ></span>
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
import { mapState, mapActions } from "vuex";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import CoolLightBox from "vue-cool-lightbox";
import "vue-cool-lightbox/dist/vue-cool-lightbox.min.css";
import Services from "@component/main/Services";
import Footer from "@component/main/Footer";
import FormUser from "@component/tools/FormUser";
import Description from "@component/real-estate/Description";
import RightCol from "@component/real-estate/rightCol";

export default {
  components: {
    Services,
    Footer,
    VueSlickCarousel,
    FormUser,
    Description,
    RightCol,
    CoolLightBox,
  },
  data() {
    return {
      saved_ids_list: [],
      saved_list_render: [],
      loading: true,
      href: "",
      moreHouse: false,
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
      index: null,
    };
  },
  computed: {
    ...mapState("dictionary", ["dictionaryItem"]),
    ...mapState("realestate", ["realEstateItem", "purpose_array", "unit_prices"]),
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 500);
    });
    this.getRealEstateItem();
    let params = this.$route.params.slug;
    if (params != undefined) {
      params = params.split("-");
      let real_estate_id = params[params.length - 1];
      //   await this.getRealEstateItem(real_estate_id);
      this.href = window.location.href;

      //
      let saved_ids = localStorage.getItem("saved_ids");
      if (saved_ids == null) {
        localStorage.setItem("saved_ids", JSON.stringify([real_estate_id]));
      } else {
        saved_ids = JSON.parse(saved_ids);
        this.load_saved_ids(saved_ids);
        if (!saved_ids.includes(real_estate_id)) {
          saved_ids.push(real_estate_id);
          localStorage.setItem("saved_ids", JSON.stringify(saved_ids));
        }
      }
    }
  },

  methods: {
    // ...mapActions("realestate", ["getRealEstateItem"]),
    async getRealEstateItem(_id) {
      this.loading = true;
      let params = this.$route.params.slug;
      let real_estate_id = 0;
      if (params != undefined) {
        params = params.split("-");
        real_estate_id = params[params.length - 1];
      }
      try {
        await this.$store.dispatch("realestate/getRealEstateItem", real_estate_id);
        this.loading = false;
      } catch {}
    },
    async load_saved_ids(saved_ids) {
      let saved_id = saved_ids.join(",");
      //   saved_ids.forEach(async (real_estate_id) => {
      let real_estate = await this.$store.dispatch(
        "realestate/geSaveEstateList",
        saved_id
      );
      // if (real_estate.results) {
      //   this.saved_ids_list.push(real_estate.results);
      // }
      //   });
      this.saved_list_render = real_estate.results;
    },
    parseUrlRealEstate(real_estate) {
      return "/detail/" + real_estate.slug + "-" + real_estate.id;
    },
  },
  // beforeDestroy() {
  //   console.log("destroy!");
  //   this.$store.commit("realestate/getRealEstateItem", {});
  // },
};
</script>

<style lang="scss" scoped>
.sell_detail {
  margin-top: 15px;
  padding: 0 10%;
  .sell_title {
    font-size: 18px;
    line-height: 24px;
    color: $color-black-01;
  }
  #app {
    padding-left: 15px;
    .loading_overlay {
      margin: 0 -20px;
    }
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
  .description {
    .description_title {
      font-weight: 700;
      font-size: 18px;
      margin-bottom: 15px;
    }
    .content {
      background: #f2f2f2;
      border: 0.5px solid #dcdcdc;
      box-sizing: border-box;
      border-radius: 4px;
      padding: 20px 15px;
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
.zalo-share-button {
  margin-top: -6px;
}
.estateOfProject {
  margin-top: 10px;
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
          height: 50px;
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
          height: 48px;

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

.footer {
  margin-top: -40px;
}

@media screen and (max-width: 1250px) {
  .sell_detail {
    padding: 0 5%;
    .img_item {
      padding: 5px !important;
    }
    .sell_title,
    .address,
    .social {
      font-size: 14px;
    }
    .project_name {
      font-size: 16px;
    }
    .overview {
      .overview_content {
        font-size: 14px;
        .number {
          font-size: 16px;
        }
      }
    }
    .estate_img {
      padding: 10px;
    }
    .estateOfProject #img_estate .estate_img .add_detail .name {
      line-height: 24px;
    }
    .estateOfProject {
      .estate_title {
        font-size: 20px;
        margin-left: 0;
      }
    }
  }
  // .description {
  //   .content {
  //     font-size: 14px;
  //   }
  // }
  .horizontal_image {
    width: 90%;
    .estate_img {
      margin-bottom: 0px;
    }
  }
}

@media screen and (max-width: 1050px) {
  .description {
    .description_title,
    .content {
      font-size: 14px;
    }
  }
  .horizontal_image {
    width: 100%;
  }
  .horizontal_image {
    .estate_img {
      .price {
        font-weight: bold;
        font-size: 14px;
        line-height: 30px;
        color: #fbad18;
        .first_price {
          margin-right: 6px;
          padding-right: 6px;
          border-right: 1px solid $color-black-01;
        }
      }
      .clearfix {
        .overlay_title {
          overflow: hidden;
        }
      }
    }
  }
}

@media screen and (max-width: 910px) {
  .horizontal_image {
    width: 110%;
    .readmore.v-btn {
      float: left;
      margin-top: -5px;
    }
  }
  .horizontal_title {
    top: 60px;
    width: 110%;
  }
}

@media screen and (max-width: 600px) {
  .sell_detail {
    margin-top: 100px;
  }
  .horizontal_image,
  .horizontal_title {
    display: none;
  }
  .mobile_screen {
    display: block;
  }
  .rightCol {
    display: block;
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
        margin-top: 5px;
        font-size: 12px !important;
        line-height: 18px;
        .first_price {
          margin-right: 2px !important;
          padding-right: 4px !important;
          border-right: 1px solid $color-black-01;
        }
      }
      .quymo,
      .address,
      .contractor {
        font-size: 11px !important;
        align-items: normal !important;
        img {
          margin-right: 6px;
        }
      }
      .quymo,
      .contractor {
        img {
          margin-top: 3px;
        }
      }
      .name {
        font-size: 12x !important;
      }
      .sex {
        font-size: 11px !important;
        .v-icon {
          color: #c4c4c4;
          margin: 0 6px 0 5px !important;
          font-size: 14px;
          &:first-child {
            margin-left: 0 !important;
          }
        }
        line-height: 20px !important;
        margin: 5px 0 !important;
      }
      .address {
        font-size: 11px !important;
        .v-icon {
          color: #c4c4c4;
          margin-right: 6px;
          font-size: 14px;
        }
        line-height: 16px !important;
        letter-spacing: 0.1px;
      }
    }
  }
  #img_estate {
    .estate_img {
      .clearfix {
        .overlay_title {
          padding: 0 5px;
          height: auto !important;
          right: 0px;
          left: 0px !important;
          width: auto;
          bottom: -14px;
          font-weight: 500;
          font-size: 12px !important;
          text-align: left;
          padding: 0 !important;
        }
      }
    }
  }

  .mycompany {
    font-size: 12px;
  }
  .estateOfProject {
    .estate_title {
      font-size: 16px !important;
      margin-top: 20px;
    }
  }
  .estateOfProject #img_estate .estate_img .add_detail .sex {
    margin: 8px 0 5px !important;
  }
  .estateOfProject #img_estate .estate_img .add_detail .address {
    align-items: center;
    display: flex;
    height: 38px;
    .v-icon {
      margin-right: 6px !important;
    }
  }
  .estateOfProject #img_estate .estate_img .add_detail .name {
    font-size: 12px !important;
    height: 32px;
    margin-top: 0px !important;
  }
  .overview {
    .overview_title {
      font-size: 16px !important;
    }
    .overview_content {
      font-size: 12px !important;
      .number {
        font-size: 14px !important;
      }
    }
  }
  .description .description_title {
    font-size: 16px !important;
    font-weight: 700;
  }
}
</style>
