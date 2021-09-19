<template>
  <v-lazy
    v-model="isActive"
    :options="{ threshold: 0.5 }"
    min-height="200"
    transition="fade-transition"
  >
    <div>
      <div class="chungcu">
        <SearchProject />
        <div class="chungcu_link" v-html="dictionaryItem.name"></div>
        <div v-for="item in projectList.projects" :key="item.id">
          <v-row class="special_project">
            <v-col cols="12" sm="6" class="content_left">
              <img :src="item.image_public[0].thumbnail" :alt="item.title" />
              <!-- <img src="@image/layouts/special_project_01.png" alt="" /> -->
            </v-col>
            <v-col cols="12" sm="6">
              <div class="special_content">
                <div class="name" v-html="item.title"></div>
                <v-row class="address content">
                  <v-col cols="1">
                    <img src="@image/icons/address.png" alt="" />
                  </v-col>
                  <v-col cols="11">
                    <span v-html="item.street"></span>
                  </v-col>
                </v-row>
                <v-row class="quymo content">
                  <v-col cols="1">
                    <img src="@image/icons/quymo.png" alt="" />
                  </v-col>
                  <v-col cols="11">
                    <span>
                      Quy mô:
                      <span class="highlight"> ???? </span>
                    </span>
                  </v-col>
                </v-row>
                <v-row class="contractor content">
                  <v-col cols="1">
                    <img src="@image/icons/contractor.png" alt="" />
                  </v-col>
                  <v-col cols="11">
                    <span>
                      Chủ đầu tư:
                      <span class="highlight" v-html="item.investor"></span>
                    </span>
                  </v-col>
                </v-row>
                <v-row class="price content">
                  <v-col cols="1">
                    <img src="@image/icons/prices.png" alt="" />
                  </v-col>
                  <v-col cols="11">
                    <span>
                      Giá từ:
                      <span class="highlight">????</span>
                    </span>
                  </v-col>
                </v-row>
                <v-row class="build content">
                  <v-col cols="1">
                    <img src="@image/icons/buildyear.png" alt="" />
                  </v-col>
                  <v-col cols="11">
                    <span>
                      Năm xây dựng:
                      <span class="highlight">????</span>
                    </span>
                  </v-col>
                </v-row>
                <v-row class="finish content">
                  <v-col cols="1">
                    <img src="@image/icons/tiendo_01.png" alt="" />
                  </v-col>
                  <v-col cols="11">
                    <span>
                      Tiến độ:
                      <span
                        class="highlight"
                        v-html="
                          item.progress < 100 ? item.progress + ' %' : 'Đã hoàn thành'
                        "
                      ></span>
                    </span>
                  </v-col>
                </v-row>
                <v-row class="content">
                  <v-btn
                    @click="$router.push('/project/detail/' + item.slug + '-' + item.id)"
                  >
                    Xem chi tiết &gt;&gt;
                  </v-btn>
                </v-row>
              </div>
            </v-col>
          </v-row>
          <div class="estateOfProject">
            <div class="estate_title">BẤT ĐỘNG SẢN THUỘC DỰ ÁN</div>
            <div class="btn_group">
              <div>
                <v-btn>Cho thuê</v-btn>
                <v-btn color="warning1">Mua bán</v-btn>
              </div>
              <div class="content">
                <v-btn>Xem Tất cả &gt;&gt;</v-btn>
              </div>
            </div>
            <v-row id="img_estate" v-if="projectList.real_estates[item.id] != undefined">
              <v-col
                cols="6"
                sm="4"
                lg="3"
                class="estate_img"
                v-for="re in projectList.real_estates[item.id]"
                :key="re.id"
              >
                <el-card class="box-card">
                  <div slot="header" class="clearfix hover14">
                    <router-link :to="parseUrlRealEstate(re)">
                      <figure>
                        <img
                          :src="re.image_public[0].thumbnail"
                          :alt="re.title"
                          v-if="re.image_public.length > 0"
                        />
                        <img src="@image/layouts/room_01.png" :alt="re.title" v-else />
                      </figure>
                    </router-link>
                    <div class="overlay_title" v-html="re.title"></div>
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
                    <router-link
                      class="name"
                      :to="parseUrlRealEstate(re)"
                      v-html="re.title"
                    ></router-link>
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
              </v-col>
            </v-row>
          </div>
        </div>
        <!-- <div class="text-center pagination">
                    <v-pagination v-model="page" :length="6" color="warning"></v-pagination>
                </div> -->
      </div>
      <div class="footer">
        <Services />
        <Footer />
      </div>
    </div>
  </v-lazy>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import Services from "@component/main/Services";
import Footer from "@component/main/Footer";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import SearchProject from "@component/tools/search-project";

export default {
  components: {
    Services,
    Footer,
    VueSlickCarousel,
    SearchProject,
  },
  data() {
    return {
      isActive: false,
      page: 1,
      RealEstatesByProject: {},
      settings: {
        dots: false,
        focusOnSelect: true,
        infinite: true,
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
    ...mapState("project", ["projectList", "unit_prices"]),
  },
  watch: {
    projectList(n, o) {
      n.projects.forEach((item) => {
        this.RealEstatesByProject[item.id] = 0;
      });
    },
  },
  created() {
    this.setProjectList({ projects: [], real_estates: [] });
  },
  mounted() {
    let params = this.$route.params.slug;
    if (params != undefined) {
      params = params.split("-");
      let type_id = params[params.length - 1];
      this.getCategoryItem(type_id);
      this.getProsjectType(type_id);
    }
  },
  methods: {
    ...mapActions("dictionary", ["getCategoryItem"]),
    ...mapActions("project", ["getProjectType"]),
    ...mapMutations("project", ["setProjectList"]),
    parseUrlRealEstate(real_estate) {
      return "/detail/" + real_estate.slug + "-" + real_estate.id;
    },
  },
};
</script>

<style lang="scss" scoped>
.chungcu {
  margin-top: 15px;
  padding: 0 10%;
  .chungcu_link {
    font-size: 18px !important;
    font-weight: 700;
    margin-top: 25px !important;
    margin-bottom: -20px;
  }
  .selection {
    justify-content: space-between;
  }
  .filter_content {
    width: 90%;
    margin: 0 auto;
    margin-bottom: 40px;
  }
  .project_content {
    margin-top: 20px;
  }
}

.footer {
  margin-top: -40px !important;
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
      font-size: 24px;
      line-height: 24px;
      color: #fbad18;
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
    .quymo,
    .contractor,
    .address {
      align-items: center;
      margin-bottom: 12px;
      img {
        margin-right: 15px;
      }
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      color: #000000;
    }
  }
  .clearfix {
    position: relative;
    .overlay_text {
      position: absolute;
      background: #fdd27f;
      border-radius: 4px;
      width: 120px;
      height: 25px;
      left: 19px;
      bottom: -14px;
      font-weight: 500;
      font-size: 12px;
      line-height: 24px;
      color: $color-black-02;
      text-align: center;
    }
    .overlay_title {
      position: absolute;
      background: #fdd27f;
      border-radius: 4px;
      // width: 180px;
      padding: 0 15px;
      height: 25px;
      left: 19px;
      bottom: -14px;
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
      color: $color-black-02;
      text-align: center;
    }
  }
}

.special_project {
  margin: 30px 0;
  .content_left {
    img {
      width: 96%;
    }
  }
  .highlight {
    font-weight: 700;
  }
  .name {
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    color: #000000;
    margin-bottom: 12px;
  }
  .content {
    margin-bottom: -30px;
    .v-btn {
      background-color: $color-orange-light;
      color: $color-black-02;
      text-transform: capitalize;
      margin-top: 20px;
      box-shadow: none;
      height: 32px;
      font-size: 12px;
      margin-left: 12px;
    }
  }
  .special_content {
    .address {
      img {
        width: 12px;
      }
    }
    .finish {
      img {
        width: 20px;
      }
    }
    img {
      margin-right: 20px;
    }
  }
}

.estateOfProject {
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
        // width: 180px;
        padding: 0 15px;
        height: 25px;
        left: 19px;
        bottom: -14px;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        color: $color-black-02;
        text-align: center;
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
        }
      }
    }
  }
  // }
}

.more_info {
  text-align: center;
  margin-top: 30px;
  .v-btn {
    text-transform: capitalize;
    background-color: $color-orange-light;
    color: #7a7a7a;
  }
}

@media screen and (max-width: 1250px) {
  .chungcu {
    padding: 0 5%;
  }
  .estate_img {
    padding: 10px;
  }
  .estateOfProject #img_estate .estate_img .add_detail .name {
    line-height: 24px;
  }
}

@media screen and (max-width: 1080px) {
  .estate_img {
    .add_detail {
      .price {
        font-size: 20px;
      }
      .quymo,
      .address,
      .contractor {
        font-size: 14px;
      }
    }
  }
  .special_content {
    .content {
      font-size: 14px;
    }
  }
}

@media screen and (max-width: 600px) {
  .chungcu_link {
    font-weight: 500;
    font-size: 24px;
  }
  .estate_img {
    padding: 5px;
  }
  .chungcu {
    margin-top: 100px;
  }
  // #img_estate {
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
          margin-right: 6px !important;
          padding-right: 6px !important;
          border-right: 1px solid $color-black-01;
        }
      }
      .quymo,
      .address,
      .contractor {
        font-size: 11px !important;
        align-items: normal !important;
        line-height: 16px !important;
        margin-bottom: 5px;
        img {
          margin-right: 6px;
          width: 15px;
          height: 15px;
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
          margin-right: 5px !important;
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
          height: 25px;
          width: auto;
          right: 0px;
          left: 0px !important;
          bottom: -14px;
          font-weight: 500;
          font-size: 12px;
          text-align: left;
          overflow: hidden;
          padding: 0 !important;
        }
      }
    }
  }
  .special_content {
    .name {
      font-size: 16px;
    }
    .content {
      align-items: center;
    }
  }
  .estateOfProject {
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
}
</style>
