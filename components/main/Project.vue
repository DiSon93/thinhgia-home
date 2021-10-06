<template>
  <v-lazy
    v-model="isActive"
    :options="{ threshold: 0.5 }"
    min-height="300"
    transition="fade-transition"
  >
    <div class="project_estate">
      <div class="project_title d-flex">
        <div>DỰ ÁN BẤT ĐỘNG SẢN</div>
        <el-button type="warning" @click="$router.push('/project')">Xem tất cả</el-button>
      </div>
      <div class="project_content">
        <v-row class="estate_content">
          <v-col cols="12" lg="6" class="estate_img">
            <VueSlickCarousel
              :arrows="false"
              v-bind="settings"
              v-if="projectList.projects.length > 0"
            >
              <div v-for="item in projectList.projects" :key="item.id">
                <el-card class="box-card">
                  <div slot="header" class="clearfix hover14">
                    <!-- <img src="@image/layouts/specialproject_01.png" alt="" /> -->
                    <router-link :to="parseUrlProjects(item)">
                      <figure>
                        <img
                          :src="item.image_public[0] ? item.image_public[0].main : ''"
                          :alt="item.title"
                          id="big_project_image"
                        />
                      </figure>
                    </router-link>

                    <div class="overlay_title" v-html="item.name"></div>
                  </div>
                  <div class="add_detail">
                    <div class="quymo">
                      <div
                        v-html="strip_tags(item.descriptions)"
                        class="big_description"
                      ></div>
                      <p
                        v-html="
                          'Thời gian: ' +
                          (item.progress == 100 ? 'Đã hoàn thành' : item.progress + ' %')
                        "
                      ></p>
                      <p>Giá từ: 50tr/m2</p>
                    </div>
                    <NuxtLink class="more_detail" :to="parseUrlProjects(item)"
                      >Xem thêm thông tin DỰ ÁN</NuxtLink
                    >
                  </div>
                </el-card>
              </div>
            </VueSlickCarousel>
          </v-col>
          <v-col cols="12" lg="6" class="small_project">
            <VueSlickCarousel
              :arrows="true"
              v-bind="settings02"
              v-if="projectList.real_estates.length > 0"
            >
              <div
                class="estate_img"
                v-for="item in projectList.real_estates"
                :key="item.id"
              >
                <el-card class="box-card">
                  <div slot="header" class="clearfix hover14">
                    <router-link :to="parseUrlRealEstate(item)">
                      <figure>
                        <img
                          :src="item.image_public[0].thumbnail"
                          :alt="item.title"
                          v-if="item.image_public.length > 0"
                        />
                        <img src="@image/layouts/room_20.png" :alt="item.title" v-else />
                      </figure>
                    </router-link>

                    <NuxtLink
                      class="overlay_small_project"
                      :to="parseUrlRealEstate(item)"
                      v-html="item.project_name"
                    ></NuxtLink>
                  </div>
                  <div class="add_detail">
                    <div class="price">
                      <span
                        class="first_price"
                        v-html="[item.price, unit_prices[item.unit_price]].join(' ')"
                      ></span>
                      <span v-html="item.land_area + ' &#13217;'"></span>
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
                      <v-icon>mdi-near-me</v-icon>
                      <span v-html="item.house_orientation_dict.name"></span>
                    </div>
                    <div class="address d-flex">
                      <v-icon>mdi-map-marker</v-icon>
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
          </v-col>
        </v-row>
      </div>
    </div>
  </v-lazy>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  components: { VueSlickCarousel },
  data() {
    return {
      isActive: false,
      settings: {
        dots: true,
        focusOnSelect: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        // fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
      },
      settings02: {
        dots: false,
        focusOnSelect: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1264,
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
    ...mapState("project", ["projectList", "unit_prices"]),
  },
  created() {
    this.setProjectList({ projects: [], real_estates: [] });
  },
  mounted() {
    this.getProject();
  },
  methods: {
    ...mapActions("project", ["getProject"]),
    ...mapMutations("project", ["setProjectList"]),
    parseUrlProjects(project) {
      return "project/detail/" + project.slug + "-" + project.id;
    },
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
.project_estate {
  margin-top: 20px;
  .project_title {
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

.project_content {
  background: $color-white;
  border: 1px solid #ebebeb;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  padding: 20px;
  margin: 20px;
  .estate_content {
    display: flex;
    justify-content: space-between;
    .add_detail {
      // margin-bottom: 100px;
    }
    .estate_img {
      // width: 25%;
      padding: 20px;
      img {
        width: 100%;
        height: 80%;
        display: block;
      }
      .quymo {
        margin-top: 40px;
        margin-bottom: 30px;

        .big_description {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          margin-bottom: 20px;
        }
      }
      .more_detail {
        font-weight: 500;
        font-size: 18px;
        line-height: 24px;
        color: #fbad18;
      }
      .clearfix {
        position: relative;
        .overlay_title {
          position: absolute;
          bottom: -20px;
          width: 517px;
          height: 60px;
          background: #fbad18;
          font-size: 18px;
          color: $color-white;
          line-height: 60px;
          padding-left: 20px;
        }
      }
    }
    #big_project_image {
      max-height: 300px;
    }
  }
  .small_project {
    padding-top: 20px;
    .estate_img {
      padding: 0 15px 0;
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
      .overlay_small_project {
        position: absolute;
        background: #fdd27f;
        border-radius: 4px;
        left: 15px;
        right: 15px;
        bottom: -12px;
        color: #7a7a7a;
        font-weight: 500;
        font-size: 14px;
        text-align: center;
        line-height: 24px;
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

@media screen and (max-width: 600px) {
  .project_title {
    font-size: 16px !important;
    margin-left: 10px !important;
    .el-button {
      margin-right: -10px;
    }
  }
  .project_content {
    margin: 20px 0;
  }
  .estate_content {
    .estate_img {
      padding: 5px !important;
      img {
        width: 100%;
        height: 80%;
        display: block;
      }
      .quymo {
        margin-top: 30px;
        font-size: 12px !important;

        p {
          margin: 10px 2px;
        }
      }
      .more_detail {
        font-size: 13px !important;
      }
      .clearfix {
        position: relative;
        .overlay_title {
          bottom: -20px;
          width: 400px !important;
          height: 30px !important;
          font-size: 12px !important;
          line-height: 30px !important;
          padding-left: 10px !important;
        }
      }
    }
  }
  .small_project {
    padding: 20px 0;
    .estate_img {
      padding: 0 6px 0;
    }
    .add_detail {
      img {
        width: 15px;
        height: 15px;
      }
      .price {
        font-size: 12px !important;
        line-height: 18px !important;
        margin-top: 5px !important;
        margin-bottom: 0px !important;
        .first_price {
          margin-right: 8px;
          padding-right: 8px;
          border-right: 1px solid $color-black-01;
        }
      }
      .name {
        font-size: 12px !important;
        line-height: 1 6px !important;
        // margin: 5px -10px !important;
      }
      .sex {
        font-size: 12px !important;
        // font-weight: 300;
        // margin: 5px -10px !important;
        .v-icon {
          color: #c4c4c4;
          margin: 0 6px 0 5px;
          font-size: 14px;
          &:first-child {
            margin-left: 0;
          }
        }
        line-height: 20px !important;
        margin: 5px 0 !important;
      }
      .address {
        font-size: 12px !important;
        // font-weight: 300;
        // margin: 5px -10px !important;
        .v-icon {
          color: #c4c4c4;
          margin-right: 10px;
          font-size: 14px;
        }
        line-height: 16px !important;
        letter-spacing: 0.1px;
      }
    }
    .clearfix {
      position: relative;
      .overlay_small_project {
        //   width: 150px !important;
        //   height: 24px !important;
        font-size: 11px !important;
        //   left: 0px !important;
        //   text-align: left !important;
        //   padding-left: 10px;
      }
    }
    .estate_img .add_detail .sex {
      margin: 8px 0 5px !important;
      font-size: 11px !important;
    }
    .estate_img .add_detail .address {
      align-items: center;
      display: flex;
      height: 38px;
      font-size: 11px !important;
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
}
</style>
