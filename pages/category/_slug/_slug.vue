<template>
  <v-lazy
    v-model="isActive"
    :options="{ threshold: 0.5 }"
    min-height="200"
    transition="fade-transition"
  >
    <div>
      <div class="search_sell" v-if="dictionaryItem">
        <div class="search_link">
          <NuxtLink to="/"> Trang chủ </NuxtLink>
          <i class="el-icon-arrow-right"></i>
          <NuxtLink
            :to="'/category/' + purpose_array[purpose].slug"
            v-html="purpose_array[purpose].title"
          ></NuxtLink>
          <i class="el-icon-arrow-right"></i>
          <span v-html="dictionaryItem.name"></span>
        </div>
        <SearchTool />
        <div class="search_content">
          <v-row class="tieude">
            <v-col cols="7" sm="7" lg="7">
              <div class="search_title" v-html="dictionaryItem.name"></div>
              <div class="note">
                Có <span v-html="realEstateList.total"></span> BĐS được tìm thấy
              </div>
            </v-col>
            <v-col cols="5" sm="5" lg="5" class="sort_items">
              <!-- <v-btn outlined color="warning">
                            Sắp xếp <i class="el-icon-caret-bottom"></i>
                            </v-btn> -->
              <div class="select_sort">
                <span>Sắp xếp: </span>
                <el-cascader
                  :options="options08"
                  :props="{ checkStrictly: true }"
                  collapse-tags
                  clearable
                  v-model="sort"
                >
                </el-cascader>
                <v-btn class="mx-2" small @click="isSort = false">
                  <v-icon dark> mdi-format-list-bulleted-triangle </v-icon>
                </v-btn>
                <v-btn class="mx-2" small @click="isSort = true">
                  <v-icon dark> mdi-dots-grid </v-icon>
                </v-btn>
              </div>
            </v-col>
          </v-row>
          <v-row align="center" v-if="isSort" class="contents">
            <v-col
              cols="6"
              sm="4"
              lg="3"
              v-for="item in realEstateList.data"
              :key="item.id"
            >
              <div class="estate_img">
                <el-card class="box-card">
                  <div slot="header" class="clearfix hover01">
                    <router-link :to="parseUrlRealEstate(item)">
                      <figure>
                        <img
                          :src="item.image_public[0].thumbnail"
                          :alt="item.title"
                          v-if="item.image_public.length > 0"
                        />
                        <img src="@image/layouts/room_01.png" :alt="item.title" v-else />
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
                          [item.street_type_dict.name, item.district.name].join(', ')
                        "
                      ></span>
                    </div>
                  </div>
                </el-card>
              </div>
            </v-col>
          </v-row>
          <transition name="el-fade-in-linear" v-else>
            <v-row class="horizontal">
              <div class="search_items d-flex">
                <div class="clearfix hover01">
                  <figure><img src="@image/layouts/room_18.svg" alt="" /></figure>
                </div>
                <div class="horizontal_item">
                  <div class="search_title">
                    THUÊ NGAY CHUNG CƯ 2 PHÒNG NGỦ GIÁ CỰC TỐT CHỈ 10 TRIỆU/THÁNG
                  </div>
                  <div class="price">
                    <div>
                      <span class="first_price">6 tỷ</span>
                      <span>60 <span>&#13217;</span></span>
                    </div>
                    <div class="pricePerMeter">
                      <i>(100triệu/<span id="mv">&#13217;</span>)</i>
                    </div>
                  </div>
                  <div class="horizontal_content">
                    Thuê ngay căn hộ SILVER SEA BA CU 2 phòng ngủ 2WC, nội thất đẹp, view
                    Đông Nam mát mẻ quanh năm. Giá tốt thích hợp cho khách hàng mua nghỉ
                    dưỡng hoặc kinh doanh ....
                  </div>
                  <div class="info_item d-flex">
                    <div class="square">
                      <v-icon>mdi-card</v-icon>
                      <span>114m2</span>
                    </div>
                    <div class="bedrooms">
                      <v-icon>mdi-bed-outline</v-icon>
                      <span>2</span>
                    </div>
                    <div class="floors">
                      <v-icon>mdi-layers</v-icon>
                      <span>3</span>
                    </div>
                    <div class="directions">
                      <v-icon>mdi-near-me</v-icon>
                      <span>TB</span>
                    </div>
                    <div class="date_update">
                      <v-icon>mdi-calendar-month</v-icon>
                      <span> 28/06/2021</span>
                    </div>
                  </div>
                </div>
              </div>
            </v-row>
          </transition>
        </div>
        <div class="text-center pagination">
          <v-pagination
            v-model="page"
            :length="realEstateList.last_page"
            color="warning"
          ></v-pagination>
        </div>
      </div>
      <div v-else class="no-data">Không có bất động sản tim thấy</div>
      <div class="footer">
        <Services />
        <Footer />
      </div>
    </div>
  </v-lazy>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Services from "@component/main/Services";
import Footer from "@component/main/Footer";
import SearchTool from "@component/tools/search-tool";

export default {
  components: {
    Services,
    Footer,
    SearchTool,
  },
  data() {
    return {
      sort: 1,
      isSort: true,
      isActive: false,
      // value: [0, 100],
      // value02: [0, 10],
      // isQuare: false,
      // isPrice: false,
      purpose: 0,
      marks: {
        0: "0",
        100: "100",
        200: "200",
        300: "300",
        400: "400",
        500: "500+",
      },
      marks02: {
        0: "0",
        3: "3",
        6: "6",
        9: "9",
        12: "12",
        15: "15+",
      },
      isFilter: false,
      page: 1,
      e1: [],
      e2: [],
      e3: [],
      e4: [],
      e5: [],
      e6: [],
      e7: [],
      input3: "",
      select: "1",
      states: ["BĐS Thuê", "BĐS Bán", "Dự Án"],
      items: [
        "Tất cả",
        "Căn hộ/Chung cư",
        "Nhà ở riêng lẻ",
        "Nhà mặt tiền",
        "Biệt thự-Villa",
        "Nhà nghỉ-Khách sạn",
        "Phòng trọ",
        "Kho xưởng",
        "Trang trại",
        "Loại khác",
      ],
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
      options08: [
        {
          value: 1,
          label: "Mới nhất",
        },
        {
          value: 2,
          label: "Cũ nhất",
        },
        {
          value: 3,
          label: "Giá tăng dần",
        },
        {
          value: 4,
          label: "Giá giảm dần",
        },
        {
          value: 5,
          label: "Diện tích giảm dần",
        },
        {
          value: 6,
          label: "Diện tích tăng dần",
        },
      ],
    };
  },
  computed: {
    ...mapState("dictionary", ["dictionaryItem"]),
    ...mapState("realestate", ["realEstateList", "purpose_array", "unit_prices"]),
  },
  mounted() {
    let params = this.$route.params.slug;
    if (params != undefined) {
      params = params.split("-");
      let cat_id = params[params.length - 1];
      let _purpose = this.$route.path.split("/");
      if (_purpose[2] == this.purpose_array[0].key) {
        this.purpose = 0;
      } else {
        this.purpose = 1;
      }
      this.getCategoryItem(cat_id);

      let obj = { real_estate_type: cat_id, purpose: this.purpose };
      // get query for search
      if (Object.keys(this.$route.query).length > 0) {
        for (let x in this.$route.query) {
          if (x != "") {
            obj[x] = this.$route.query[x];
          }
        }
      }

      this.getRealEstate(obj);
    }
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
.search_sell {
  margin-top: 15px;
  padding: 0 10%;
  .contents {
    margin-top: 20px;
  }
  .search_link {
    font-size: 18px;
    margin-bottom: 15px;
  }
  .selection {
    justify-content: space-between;
  }
  .filter_content {
    width: 90%;
    margin: 0 auto;
    margin-bottom: 40px;
    margin-top: 20px;
  }
}

.footer {
  margin-top: -40px !important;
}
.no-data {
  padding: 30px 10%;
}
.search_content {
  margin-top: 30px;
  .search_title {
    font-size: 18px;
    line-height: 18px;
    text-align: left;
    color: $color-black-01;
    font-weight: 700;
  }
  .tieude {
    margin-bottom: -40px;
  }
  .sort_items {
    text-align: right;
    .v-btn:not(.v-btn--round).v-size--default {
      height: 40px;
    }
  }
  .note {
    font-size: 18px;
    line-height: 18px;
    text-align: left;
    color: $color-black-01;
    margin: 10px 0 20px;
  }
  .col-3 {
    padding: 0;
  }
  .estate_img {
    width: 100%;
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
        font-size: 16px;
        line-height: 18px;
        color: #fbad18;
        margin-bottom: 10px;
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
        margin: 8px 0 10px;
        color: #000000;
        text-decoration: none;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        margin: 5px 0;
        height: 50px;
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
}

.rangeslider {
  width: 400px;
  margin-left: 40%;
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 5px;
  margin-top: 10px;
}

.horizontal {
  margin: 35px 5px 10px;
  .search_items {
    border-radius: 10px;
    border: 1px solid #ebeef5;
    color: #303133;
    transition: 0.3s;
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
    margin-bottom: 20px;
    overflow: hidden;
    img {
      width: 100%;
      display: block;
    }
  }
  .horizontal_item {
    margin-left: 20px;
    color: $color-black-03;
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
  }
  .search_title {
    margin: 20px 0 10px;
    &:hover {
      color: $color-orange-light;
      transition: 0.5s;
    }
  }
  .horizontal_content {
    margin-bottom: 20px;
  }
  .info_item {
    .square,
    .bedrooms,
    .floors,
    .directions,
    .date_update {
      padding-right: 20px;
      border-right: 1px solid $color-black-01;
      margin-left: 15px;
      .v-icon {
        margin-right: 5px;
      }
    }
    .square {
      margin-left: 0;
    }
    .date_update {
      border: none;
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

@media screen and (max-width: 1250px) {
  .search_sell {
    padding: 0 5%;
    .contents {
      margin-top: 25px;
    }
  }
  .sort_items {
    .select_sort {
      text-align: right;
      display: block;
      margin-top: 10px;
      span {
        display: none;
      }
    }
  }
}

@media screen and (max-width: 1048px) {
  .search_content .estate_img {
    padding: 6px;
  }
}

@media screen and (max-width: 600px) {
  .search_sell {
    margin-top: 100px;
  }
  .contents {
    margin-top: 25px;
  }
  .search_sell .search_link {
    font-size: 14px;
  }
  .col-sm-4 {
    padding: 0px;
  }
  .search_content {
    padding: 0 2%;
    .search_title {
      font-size: 16px;
    }
    .note {
      font-size: 12px;
    }
  }
  .sort_items {
    .select_sort {
      text-align: right;
      display: block;
      margin-top: 10px;
      span {
        display: none;
      }
    }
  }
  .estate_img {
    .add_detail {
      img {
        width: 15px;
        height: 15px;
      }
      .price {
        font-size: 12px !important;
        line-height: 12px !important;
        margin-top: 0px !important;
        margin-bottom: 5px !important;
        .first_price {
          margin-right: 8px !important;
          padding-right: 8px;
          border-right: 1px solid $color-black-01;
        }
      }
      .name {
        font-size: 12px !important;
        line-height: 16px !important;
        margin: 10px 0 6px !important;
      }
      .sex {
        font-size: 11px !important;
        // margin: 5px -10px !important;
        .v-icon {
          color: #c4c4c4;
          margin: 0 6px 0 6px !important;
          font-size: 14px;
          &:first-child {
            margin-left: 0 !important;
          }
        }
        line-height: 20px !important;
        margin: 6px 0 !important;
      }
      .address {
        font-size: 11px !important;
        .v-icon {
          color: #c4c4c4;
          margin-right: 6px !important;
          font-size: 14px;
        }
        line-height: 16px !important;
        letter-spacing: 0.1px;
      }
    }
  }
  .pagination {
    margin-top: 20px;
    .v-pagination {
      .v-pagination__navigation,
      .v-pagination__item {
        height: 14px !important;
        width: 14px !important;
      }
    }
  }
  .search_content .tieude {
    margin-bottom: -30px !important;
  }
  .horizontal {
    margin: 30px 0px 10px !important;
    .horizontal_item {
      margin-left: 10px !important;
      .search_title {
        margin: 5px 0;
        font-size: 12px;
      }
      .price {
        font-size: 12px;
        line-height: 18px;
        color: #fbad18;
        .first_price {
          margin-right: 6px;
          padding-right: 6px;
        }
      }
      .horizontal_content {
        font-size: 12px;
      }
      .info_item {
        margin-left: -100px;
        .square,
        .bedrooms,
        .floors,
        .directions,
        .date_update {
          display: block !important;
          padding-right: 4px;
          border-right: 1px solid $color-black-01;
          margin-left: 4px;
          font-size: 12px;
          .v-icon {
            margin-right: 2px;
            font-size: 16px;
          }
        }
        .square {
          margin-left: 0;
        }
        .date_update {
          border: none;
        }
      }
    }
    .search_items {
      .clearfix {
        img {
          width: 100px;
        }
      }
    }
  }
}
</style>
