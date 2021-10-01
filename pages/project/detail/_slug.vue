<template>
  <div>
    <div class="project_detail" v-if="projectDetail.id != undefined">
      <div class="project_img">
        <img
          :src="projectDetail.image_public[0].main"
          :alt="projectDetail.title"
          v-if="projectDetail.image_public.length > 0 && !loading"
        />
        <v-skeleton-loader
          class="mx-auto"
          width="100%"
          type="image"
          v-else
        ></v-skeleton-loader>
      </div>
      <v-row>
        <v-col cols="12" sm="8">
          <div class="project_title" v-html="projectDetail.title" v-if="!loading"></div>
          <v-skeleton-loader type="card-heading" v-else></v-skeleton-loader>
          <div class="btn_groupitems">
            <v-btn-toggle v-model="text" tile color="deep-purple accent-3" group>
              <v-btn value="tongquan" id="highlight" @click="activeNames = ['1']">
                Tổng quan
              </v-btn>
              <a href="#blank">
                <v-btn value="ban" id="highlight">BĐS Bán</v-btn>
              </a>
              <a href="#blank">
                <v-btn value="thue" id="highlight">BĐS Thuê</v-btn>
              </a>
              <a href="#vitri_blank">
                <v-btn value="vitri" id="normal" @click="activeNames.push('2')"
                  >Vị trí</v-btn
                >
              </a>
              <a href="#tienich_blank">
                <v-btn value="tienich" id="normal" @click="activeNames.push('3')"
                  >Tiện ích</v-btn
                >
              </a>
              <a href="#hinhanh_blank">
                <v-btn value="hinhanh" id="normal" @click="activeNames.push('4')"
                  >Hình ảnh</v-btn
                >
              </a>
              <a href="#matbang_blank">
                <v-btn value="matbang" id="normal" @click="activeNames.push('5')"
                  >Mặt bằng</v-btn
                >
              </a>
              <a href="#toanha_blank">
                <v-btn value="toanha" id="normal" @click="activeNames.push('6')"
                  >Tòa nhà</v-btn
                >
              </a>
            </v-btn-toggle>
          </div>

          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item
              title="TỔNG QUAN DỰ ÁN"
              name="1"
              id="overview"
              @click="text = 'tongquan'"
            >
              <div class="items">
                <div>
                  <span class="text_highlight">Tên dự án: </span>
                  <span v-html="projectDetail.name"></span>
                </div>
              </div>
              <div class="items">
                <img src="@image/icons/address_02.png" alt="" />
                <div>
                  <span class="text_highlight">Vị trí:</span>
                  <span v-html="projectDetail.street"></span>
                </div>
              </div>
              <div class="items">
                <img src="@image/icons/contractor_02.png" alt="" />
                <div>
                  <span class="text_highlight">Chủ đầu tư:</span>
                  <span v-html="projectDetail.investor"></span>
                </div>
              </div>
              <div class="items">
                <img src="@image/icons/quymo_02.png" alt="" />
                <div>
                  <span class="text_highlight">Quy mô:</span>
                  <span>????</span>
                </div>
              </div>
            </el-collapse-item>

            <div id="vitri" @click="text = 'vitri'">
              <div id="vitri_blank"></div>
              <el-collapse-item title="VỊ TRÍ DỰ ÁN" name="2">
                <div v-html="projectDetail.location"></div>
              </el-collapse-item>
            </div>

            <el-divider></el-divider>

            <div id="tienich" @click="text = 'tienich'">
              <div id="tienich_blank"></div>
              <el-collapse-item title="TIỆN ÍCH" name="3">
                <div v-html="projectDetail.utilities"></div>
              </el-collapse-item>
            </div>

            <el-divider></el-divider>

            <div id="hinhanh" @click="text = 'hinhanh'">
              <div id="hinhanh_blank"></div>
              <el-collapse-item title="HÌNH ẢNH" name="4">
                <img
                  :src="img.main"
                  :alt="projectDetail.title"
                  v-for="img in projectDetail.image_public"
                  :key="img.id"
                />
              </el-collapse-item>
            </div>

            <el-divider></el-divider>

            <div id="matbang" @click="text = 'matbang'">
              <div id="matbang_blank"></div>
              <el-collapse-item title="MẶT BẰNG" name="5">
                <div v-html="projectDetail.ground"></div>
              </el-collapse-item>
            </div>

            <el-divider></el-divider>

            <div id="toanha" @click="text = 'toanha'">
              <div id="toanha_blank"></div>
              <el-collapse-item title="TÒA NHÀ" name="6">
                <div v-html="projectDetail.descriptions"></div>
              </el-collapse-item>
            </div>
          </el-collapse>
        </v-col>
        <v-col cols="12" sm="4">
          <FormUser />
        </v-col>
      </v-row>

      <div id="blank"></div>

      <div class="estateOfProject" id="rent_sell">
        <div class="estate_title">BẤT ĐỘNG SẢN THUỘC DỰ ÁN</div>
        <div class="btn_group">
          <div>
            <v-btn>Cho thuê</v-btn>
            <v-btn color="warning">Mua bán</v-btn>
          </div>
          <div class="content"><v-btn>Xem Tất cả &gt;&gt;</v-btn></div>
        </div>
        <div id="img_estate">
          <VueSlickCarousel :arrows="true" v-bind="settings02">
            <div class="estate_img" v-for="re in projectDetail.real_estates" :key="re.id">
              <el-card class="box-card">
                <div slot="header" class="clearfix hover14">
                  <figure @click="$router.push(parseUrlRealEstate(re))">
                    <img
                      :src="re.image_public[0].thumbnail"
                      :alt="re.title"
                      v-if="re.image_public.length > 0"
                    />
                    <img src="@image/layouts/room_06.svg" :alt="re.title" v-else />
                  </figure>
                  <div class="overlay_title" v-html="projectDetail.name"></div>
                </div>
                <div class="add_detail">
                  <div class="price">
                    <div>
                      <span
                        class="first_price"
                        v-html="[re.price, unit_prices[re.unit_price]].join(' ')"
                      ></span>
                      <span v-html="re.land_area + ' &#13217;'"></span>
                    </div>
                    <div class="pricePerMeter">
                      <i>(100triệu/<span id="mv">&#13217;</span>)</i>
                    </div>
                  </div>
                  <el-tooltip
                    class="item"
                    effect="dark"
                    :content="re.title"
                    placement="top"
                  >
                    <router-link
                      class="name"
                      :to="parseUrlRealEstate(re)"
                      v-html="re.title"
                    ></router-link>
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

                    <span v-html="re.house_orientation_dict.name"></span>

                    <el-tooltip
                      class="item"
                      effect="dark"
                      content="Phòng ngủ"
                      placement="top"
                    >
                      <v-icon>mdi-bed-outline</v-icon>
                    </el-tooltip>

                    <span v-html="re.bedroom_number"></span>

                    <el-tooltip
                      class="item"
                      effect="dark"
                      content="Phòng tắm"
                      placement="top"
                    >
                      <v-icon>mdi-shower-head</v-icon>
                    </el-tooltip>

                    <span v-html="re.bathroom_number"></span>
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
                      v-html="[re.street_type_dict.name, re.district.name].join(', ')"
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
import { mapState, mapActions, mapMutations } from "vuex";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import Services from "@component/main/Services";
import Footer from "@component/main/Footer";
import FormUser from "@component/tools/FormUser";

export default {
  components: {
    Services,
    Footer,
    VueSlickCarousel,
    FormUser,
  },
  data() {
    return {
      text: "tongquan",
      activeNames: ["1"],
      loading: false,
      settings02: {
        dots: false,
        focusOnSelect: false,
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
    ...mapState("project", ["projectDetail", "unit_prices"]),
  },
  async mounted() {
    let params = this.$route.params.slug;
    if (params != undefined) {
      this.loading = true;
      params = params.split("-");
      let project_id = params[params.length - 1];
      await this.getProjectDetail(project_id);
      this.loading = false;
    }
  },
  methods: {
    ...mapActions("project", ["getProjectDetail"]),
    parseUrlRealEstate(real_estate) {
      return "/detail/" + real_estate.slug + "-" + real_estate.id;
    },
    handleChange(val) {
      console.log(val);
    },
    scroll() {
      window.scrollTo(0, 1150);
    },
  },
};
</script>

<style lang="scss" scoped>
.project_detail {
  margin-top: 15px;
  padding: 0 10%;
  .project_title {
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: $color-black-01;
    margin: 25px 0 10px;
  }
  .social {
    margin-top: 10px;
    img {
      margin-right: 10px;
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

#overview,
#vitri,
#hinhanh {
  font-size: 20px;
  .items {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    img {
      margin-right: 10px;
    }
  }
  .overview_title {
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
  }
  .text_highlight {
    font-weight: 700;
    margin-right: 10px;
  }
}

#tienich {
  position: relative;
  .col-6,
  .col-ma-4 {
    padding: 4px;
  }
  .tienichmorong {
    margin-top: 10px;
  }
  #tienich_blank {
    position: absolute;
    height: 130px;
    top: -120px;
  }
}

#hinhanh {
  position: relative;
  #hinhanh_blank {
    position: absolute;
    height: 130px;
    top: -120px;
  }
}

#hinhanh,
#vitri {
  img {
    width: 100%;
    display: block;
  }
}

#matbang {
  text-align: center;
  position: relative;
  i {
    margin-top: -20px;
  }
  img {
    width: 100%;
    display: block;
  }
  #matbang_blank {
    position: absolute;
    height: 130px;
    top: -120px;
  }
}

#toanha {
  position: relative;
  .toanha_title {
    font-weight: 700;
  }
  img {
    width: 100%;
    display: block;
  }
  #toanha_blank {
    position: absolute;
    height: 130px;
    top: -120px;
  }
}

.vitri_img {
  text-align: center;
}

#blank {
  height: 100px;
}

#vitri {
  position: relative;
  #vitri_blank {
    position: absolute;
    height: 130px;
    top: -120px;
  }
}

.estateOfProject {
  // margin-top: 100px;
  .estate_title {
    font-weight: 500;
    font-size: 24px;
    line-height: 24px;
    color: #000000;
    margin-bottom: 20px;
    margin-left: 10px;
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
          margin-bottom: 8px;
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

.footer {
  margin-top: -40px;
}

.el-divider--horizontal {
  margin: 14px 0;
}

@media screen and (max-width: 1250px) {
  .project_detail {
    padding: 0 5%;
  }
}

@media screen and (max-width: 600px) {
  .project_detail {
    margin-top: 150px;
  }
  .estate_img {
    padding: 6px !important;
    .add_detail {
      margin: -10px;
      font-size: 12x;
      .price {
        margin-top: 5px;
        font-size: 12px !important;
        line-height: 18px !important;
        .first_price {
          margin-right: 6px !important;
          padding-right: 6px !important;
          border-right: 1px solid $color-black-01;
        }
      }
      .name {
        margin-top: 5px;
        font-size: 12px !important;
        line-height: 20px !important;
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
          margin-right: 5px !important;
          font-size: 14px;
        }
        line-height: 16px !important;
        letter-spacing: 0.1px;
      }
    }
  }
  #img_estate {
    margin: 0 -5px;
    .estate_img {
      .clearfix {
        .overlay_title {
          padding: 0 5px;
          height: 25px;
          width: auto;
          right: 0px;
          left: 0px !important;
          bottom: -14px;
          font-weight: 500;
          font-size: 12px !important;
          text-align: left;
          overflow: hidden;
          padding: 0 !important;
        }
      }
    }
  }
  .estateOfProject {
    margin-top: -100px;
    .estate_title {
      font-size: 16px;
    }
    .btn_group {
      .v-btn {
        font-size: 12px;
        padding: 0 10px;
      }
    }
  }
  // }
  .estateOfProject #img_estate .estate_img .add_detail .name {
    font-size: 12px !important;
  }
  .project_detail .project_title {
    font-size: 16px;
  }
  .project_detail .project_img {
    margin-top: -50px !important;
  }
}
</style>
