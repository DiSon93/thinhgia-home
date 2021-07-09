<template>
  <v-lazy
    v-model="isActive"
    :options="{
      threshold: 0.5,
    }"
    min-height="200"
    transition="fade-transition"
  >
    <div class="sell_estate">
      <div class="sell_title d-flex">
        <div>MUA BÁN BẤT ĐỘNG SẢN</div>
        <el-button type="warning" @click="$router.push('/sell/total')"
          >Xem tất cả</el-button
        >
      </div>
      <!-- <div class="estate_content"> -->
      <VueSlickCarousel :arrows="true" v-bind="settings">
        <div class="estate_img">
          <el-card class="box-card">
            <div slot="header" class="clearfix hover01">
              <router-link to="/sell/01"
                ><figure><img src="@image/layouts/room_04.png" alt="" /></figure
              ></router-link>
            </div>
            <div class="add_detail">
              <div class="price">
                <div>
                  <span class="first_price">6 tỷ</span>
                  <span>60 <span>&#13217;</span></span>
                </div>
                <div class="pricePerMeter">
                  <i>(100triệu/<span id="mv">&#13217;</span>)</i>
                </div>
              </div>
              <NuxtLink class="name" to="/sell/01">LOREM IPSUM AMET SIT DOT</NuxtLink>
              <div class="sex d-flex">
                <el-tooltip class="item" effect="dark" content="Hướng" placement="top">
                  <v-icon>mdi-near-me</v-icon>
                </el-tooltip>
                <span>Nam</span>
                <el-tooltip
                  class="item"
                  effect="dark"
                  content="Phòng ngủ"
                  placement="top"
                >
                  <v-icon>mdi-bed-outline</v-icon>
                </el-tooltip>
                <span>2</span>
                <el-tooltip
                  class="item"
                  effect="dark"
                  content="Phòng tắm"
                  placement="top"
                >
                  <v-icon>mdi-shower-head</v-icon>
                </el-tooltip>
                <span>3</span>
              </div>
              <div class="address d-flex">
                <el-tooltip class="item" effect="dark" content="Địa chỉ" placement="top">
                  <v-icon>mdi-map-marker</v-icon>
                </el-tooltip>
                <span>Nguyễn Hữu Cảnh, Bình Thạnh</span>
              </div>
            </div>
          </el-card>
        </div>

        <div class="estate_img">
          <el-card class="box-card">
            <div slot="header" class="clearfix hover01">
              <router-link to="/sell/02"
                ><figure><img src="@image/layouts/room_05.png" alt="" /></figure
              ></router-link>
            </div>
            <div class="add_detail">
              <div class="price">
                <div>
                  <span class="first_price">6 tỷ</span>
                  <span>60 <span>&#13217;</span></span>
                </div>
                <div class="pricePerMeter">
                  <i>(100triệu/<span id="mv">&#13217;</span>)</i>
                </div>
              </div>
              <NuxtLink class="name" to="/sell/02">LOREM IPSUM AMET SIT DOT</NuxtLink>
              <div class="sex d-flex">
                <el-tooltip class="item" effect="dark" content="Hướng" placement="top">
                  <v-icon>mdi-near-me</v-icon>
                </el-tooltip>
                <span>Nam</span>
                <el-tooltip
                  class="item"
                  effect="dark"
                  content="Phòng ngủ"
                  placement="top"
                >
                  <v-icon>mdi-bed-outline</v-icon>
                </el-tooltip>
                <span>2</span>
                <el-tooltip
                  class="item"
                  effect="dark"
                  content="Phòng tắm"
                  placement="top"
                >
                  <v-icon>mdi-shower-head</v-icon>
                </el-tooltip>
                <span>3</span>
              </div>
              <div class="address d-flex">
                <el-tooltip class="item" effect="dark" content="Địa chỉ" placement="top">
                  <v-icon>mdi-map-marker</v-icon>
                </el-tooltip>
                <span>Nguyễn Hữu Cảnh, Bình Thạnh</span>
              </div>
            </div>
          </el-card>
        </div>
        <div class="estate_img">
          <el-card class="box-card">
            <div slot="header" class="clearfix hover01">
              <router-link to="/sell/03"
                ><figure><img src="@image/layouts/room_06.png" alt="" /></figure
              ></router-link>
            </div>
            <div class="add_detail">
              <div class="price">
                <div>
                  <span class="first_price">6 tỷ</span>
                  <span>60 <span>&#13217;</span></span>
                </div>
                <div class="pricePerMeter">
                  <i>(100triệu/<span id="mv">&#13217;</span>)</i>
                </div>
              </div>
              <NuxtLink class="name" to="/sell/03">LOREM IPSUM AMET SIT DOT</NuxtLink>
              <div class="sex d-flex">
                <el-tooltip class="item" effect="dark" content="Hướng" placement="top">
                  <v-icon>mdi-near-me</v-icon>
                </el-tooltip>
                <span>Nam</span>
                <el-tooltip
                  class="item"
                  effect="dark"
                  content="Phòng ngủ"
                  placement="top"
                >
                  <v-icon>mdi-bed-outline</v-icon>
                </el-tooltip>
                <span>2</span>
                <el-tooltip
                  class="item"
                  effect="dark"
                  content="Phòng tắm"
                  placement="top"
                >
                  <v-icon>mdi-shower-head</v-icon>
                </el-tooltip>
                <span>3</span>
              </div>
              <div class="address d-flex">
                <el-tooltip class="item" effect="dark" content="Địa chỉ" placement="top">
                  <v-icon>mdi-map-marker</v-icon>
                </el-tooltip>
                <span>Nguyễn Hữu Cảnh, Bình Thạnh</span>
              </div>
            </div>
          </el-card>
        </div>
        <div class="estate_img">
          <el-card class="box-card">
            <div slot="header" class="clearfix hover01">
              <router-link to="/sell/05"
                ><figure><img src="@image/layouts/room_07.png" alt="" /></figure
              ></router-link>
            </div>
            <div class="add_detail">
              <div class="price">
                <div>
                  <span class="first_price">6 tỷ</span>
                  <span>60 <span>&#13217;</span></span>
                </div>
                <div class="pricePerMeter">
                  <i>(100triệu/<span id="mv">&#13217;</span>)</i>
                </div>
              </div>
              <NuxtLink class="name" to="/sell/01">LOREM IPSUM AMET SIT DOT</NuxtLink>
              <div class="sex d-flex">
                <el-tooltip class="item" effect="dark" content="Hướng" placement="top">
                  <v-icon>mdi-near-me</v-icon>
                </el-tooltip>
                <span>Nam</span>
                <el-tooltip
                  class="item"
                  effect="dark"
                  content="Phòng ngủ"
                  placement="top"
                >
                  <v-icon>mdi-bed-outline</v-icon>
                </el-tooltip>
                <span>2</span>
                <el-tooltip
                  class="item"
                  effect="dark"
                  content="Phòng tắm"
                  placement="top"
                >
                  <v-icon>mdi-shower-head</v-icon>
                </el-tooltip>
                <span>3</span>
              </div>
              <div class="address d-flex">
                <el-tooltip class="item" effect="dark" content="Địa chỉ" placement="top">
                  <v-icon>mdi-map-marker</v-icon>
                </el-tooltip>
                <span>Nguyễn Hữu Cảnh, Bình Thạnh</span>
              </div>
            </div>
          </el-card>
        </div>
        <div class="estate_img">
          <el-card class="box-card">
            <div slot="header" class="clearfix hover01">
              <router-link to="/sell/07"
                ><figure><img src="@image/layouts/room_09.png" alt="" /></figure
              ></router-link>
            </div>
            <div class="add_detail">
              <div class="price">
                <div>
                  <span class="first_price">6 tỷ</span>
                  <span>60 <span>&#13217;</span></span>
                </div>
                <div class="pricePerMeter">
                  <i>(100triệu/<span id="mv">&#13217;</span>)</i>
                </div>
              </div>
              <NuxtLink class="name" to="/sell/09">LOREM IPSUM AMET SIT DOT</NuxtLink>
              <div class="sex d-flex">
                <el-tooltip class="item" effect="dark" content="Hướng" placement="top">
                  <v-icon>mdi-near-me</v-icon>
                </el-tooltip>
                <span>Nam</span>
                <el-tooltip
                  class="item"
                  effect="dark"
                  content="Phòng ngủ"
                  placement="top"
                >
                  <v-icon>mdi-bed-outline</v-icon>
                </el-tooltip>
                <span>2</span>
                <el-tooltip
                  class="item"
                  effect="dark"
                  content="Phòng tắm"
                  placement="top"
                >
                  <v-icon>mdi-shower-head</v-icon>
                </el-tooltip>
                <span>3</span>
              </div>
              <div class="address d-flex">
                <el-tooltip class="item" effect="dark" content="Địa chỉ" placement="top">
                  <v-icon>mdi-map-marker</v-icon>
                </el-tooltip>
                <span>Nguyễn Hữu Cảnh, Bình Thạnh</span>
              </div>
            </div>
          </el-card>
        </div>
        <div class="estate_img">
          <el-card class="box-card">
            <div slot="header" class="clearfix hover01">
              <router-link to="/sell/11"
                ><figure><img src="@image/layouts/room_11.png" alt="" /></figure
              ></router-link>
            </div>
            <div class="add_detail">
              <div class="price">
                <div>
                  <span class="first_price">6 tỷ</span>
                  <span>60 <span>&#13217;</span></span>
                </div>
                <div class="pricePerMeter">
                  <i>(100triệu/<span id="mv">&#13217;</span>)</i>
                </div>
              </div>
              <NuxtLink class="name" to="/sell/10">LOREM IPSUM AMET SIT DOT</NuxtLink>
              <div class="sex d-flex">
                <el-tooltip class="item" effect="dark" content="Hướng" placement="top">
                  <v-icon>mdi-near-me</v-icon>
                </el-tooltip>
                <span>Nam</span>
                <el-tooltip
                  class="item"
                  effect="dark"
                  content="Phòng ngủ"
                  placement="top"
                >
                  <v-icon>mdi-bed-outline</v-icon>
                </el-tooltip>
                <span>2</span>
                <el-tooltip
                  class="item"
                  effect="dark"
                  content="Phòng tắm"
                  placement="top"
                >
                  <v-icon>mdi-shower-head</v-icon>
                </el-tooltip>
                <span>3</span>
              </div>
              <div class="address d-flex">
                <el-tooltip class="item" effect="dark" content="Địa chỉ" placement="top">
                  <v-icon>mdi-map-marker</v-icon>
                </el-tooltip>
                <span>Nguyễn Hữu Cảnh, Bình Thạnh</span>
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
      margin-bottom: 10px;
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
