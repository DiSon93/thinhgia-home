<template>
  <v-app>
    <div class="header">
      <div class="info">
        <v-icon>mdi-phone-dial</v-icon>
        <span>0909522686</span>
        <v-icon>mdi-email</v-icon>
        <a href="#">khobatdongsanviet@gmail.com</a>
      </div>
      <!-- <v-lazy
        v-model="isActive"
        :options="{
          threshold: 0.5,
        }"
        min-height="50"
        transition="fade-transition"
      > -->
      <v-row class="header_items">
        <v-col cols="8" class="d-flex">
          <img src="@image/layouts/bansaodanhthiep.png" alt="" />
          <div class="header_choise">
            <el-dropdown placement="top-start">
              <NuxtLink to="/search/sell">
                <el-button type="warning" plain>
                  BĐS Bán <i class="el-icon-caret-bottom"></i>
                </el-button>
              </NuxtLink>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>Căn hộ - Chung cư </el-dropdown-item>
                <el-dropdown-item divided>Nhà ở riêng lẻ</el-dropdown-item>
                <el-dropdown-item divided>Nhà mặt tiền</el-dropdown-item>
                <el-dropdown-item divided>Biệt thự - Villa</el-dropdown-item>
                <el-dropdown-item divided>Nhà nghỉ - Khách sạn</el-dropdown-item>
                <el-dropdown-item divided>Phòng trọ</el-dropdown-item>
                <el-dropdown-item divided>Kho xưởng</el-dropdown-item>
                <el-dropdown-item divided>Trang trại</el-dropdown-item>
                <el-dropdown-item divided>Loại khác</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <el-dropdown placement="top-start">
              <el-button type="warning" plain>
                BĐS Thuê <i class="el-icon-caret-bottom"></i
              ></el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>Căn hộ - Chung cư </el-dropdown-item>
                <el-dropdown-item divided>Nhà ở riêng lẻ</el-dropdown-item>
                <el-dropdown-item divided>Nhà mặt tiền</el-dropdown-item>
                <el-dropdown-item divided>Biệt thự - Villa</el-dropdown-item>
                <el-dropdown-item divided>Nhà nghỉ - Khách sạn</el-dropdown-item>
                <el-dropdown-item divided>Phòng trọ</el-dropdown-item>
                <el-dropdown-item divided>Kho xưởng</el-dropdown-item>
                <el-dropdown-item divided>Trang trại</el-dropdown-item>
                <el-dropdown-item divided>Loại khác</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <el-dropdown placement="top-start">
              <el-button type="warning" plain>
                Dự Án <i class="el-icon-caret-bottom"></i
              ></el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>Khu nhà Sông Cây Khế</el-dropdown-item>
                <el-dropdown-item divided>Dự án Phước Sơn</el-dropdown-item>
                <el-dropdown-item divided>Khu biệt thự Thanh Bình</el-dropdown-item>
                <el-dropdown-item divided>Blue Sapphire Towers</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </v-col>
        <v-col cols="4">
          <div class="header_choise">
            <!-- <el-dropdown> -->
            <el-button type="warning" plain class="fix_position">Blog </el-button>
            <!-- </el-dropdown> -->
            <!-- <el-dropdown> -->
            <el-button type="warning" class="fix_position" plain> Giới Thiệu </el-button>
            <!-- </el-dropdown> -->
            <el-dropdown placement="top-start">
              <el-button type="warning" plain>
                Liên Hệ <i class="el-icon-caret-bottom"></i>
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>Thông tin liên lạc</el-dropdown-item>
                <el-dropdown-item divided>Ý kiến</el-dropdown-item>
                <el-dropdown-item divided>Tuyển dụng</el-dropdown-item>
                <el-dropdown-item divided>Ký gửi BĐS</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </v-col>
      </v-row>
      <!-- </v-lazy> -->
    </div>
    <div>
      <v-lazy
        v-model="isActive"
        :options="{
          threshold: 0.5,
        }"
        min-height="200"
        transition="fade-transition"
      >
        <Nuxt />
      </v-lazy>

      <div class="floating_button">
        <v-btn fab dark color="primary" @click="showPopUp" small id="message">
          <v-icon>mdi-facebook-messenger</v-icon>
        </v-btn>
        <v-btn
          v-scroll="onScroll"
          v-show="fab"
          fab
          dark
          fixed
          bottom
          right
          small
          color="warning"
          @click="toTop"
          id="backToTop"
        >
          <v-icon>mdi-format-vertical-align-top</v-icon>
        </v-btn>
        <el-card class="box-card" fixed v-if="popUp">
          <div class="btn_group d-flex">
            <el-button type="info" icon="el-icon-more" circle></el-button>
            <el-button
              type="info"
              icon="el-icon-minus"
              circle
              @click="popUp = !popUp"
            ></el-button>
          </div>

          <div class="text item">
            <div class="chat_title">Chat với Kho BĐS Việt</div>
            <div>Thường phản hồi trong vòng một giờ</div>
            <div class="wellcome">Xin kính chào Quý khách!</div>
            <v-btn dark>
              <v-icon dark left>mdi-facebook-messenger</v-icon> Tiếp tục dưới tên
              Anh</v-btn
            >
            <br />
            <v-btn> Tiếp tục với vai trò khách</v-btn>
            <div>
              Bằng cách với vai trò khách, bạn đồng ý với Điều khoản chính sách dữ liệu và
              Chính sách cookie của Facebook.
            </div>
          </div>
        </el-card>
      </div>
    </div>
  </v-app>
</template>

<script>
import Footer from "@component/main/Footer.vue";
import Choise from "@component/main/Choise";

export default {
  component: {
    Footer,
    Choise,
  },
  data() {
    return {
      isActive: false,
      fab: false,
      popUp: false,
      show: true,
    };
  },
  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 20;
    },
    toTop() {
      this.$vuetify.goTo(0);
    },
    showPopUp() {
      this.popUp = !this.popUp;
    },
  },
};
</script>
<style lang="scss" scoped>
.header {
  position: fixed;
  z-index: 9999;
  width: 100%;
  background-color: $color-white;
  // border-bottom:
  box-shadow: 2px 2px 8px 2px rgba(0, 0, 0, 0.1);
  img {
    width: 250px;
    margin: 10px;
    margin-left: 120px;
  }
  .header_choise {
    vertical-align: center;
    margin-left: 15px;
    margin-top: 6px;
  }
}
.v-application .info {
  background-color: $color-blue-dark !important;
  height: 50px;
  line-height: 50px;
  font-size: 14px;
  color: $color-white;
  text-align: right;
  padding-right: 80px;
  .v-icon {
    color: $color-white;
  }
  a {
    color: $color-white;
  }
}
.first_dropdown {
  display: none;
}

.el-dropdown {
  margin: 0 -4px;
}
.el-button {
  border-radius: 0;
  height: 60px;
  border: none;
  font-size: 18px !important;
}
.el-button--warning.is-plain {
  color: $color-black-01;
  background-color: $color-white;
}
.el-dropdown-menu__item:focus,
.el-dropdown-menu__item:hover {
  background-color: #e6a23c;
  color: $color-white;
}
.el-dropdown-menu__item {
  font-size: 18px;
  padding-top: 6px;
  padding-bottom: 6px;
  font-family: "Roboto", sans-serif;
}
.el-dropdown-menu__item--divided {
  margin-top: 0px !important;
}

.el-dropdown-menu__item[data-v-314f53c6]:focus,
.el-dropdown-menu__item[data-v-314f53c6]:hover {
  background-color: #e6a23c;
  color: #fff;
}
.el-dropdown-menu__item:focus,
.el-dropdown-menu__item:hover {
  background-color: #ecf5ff;
  color: #66b1ff;
}
.el-dropdown-menu__item--divided[data-v-314f53c6] {
  margin-top: 0px !important;
  margin-bottom: 0;
}
.el-dropdown-menu__item[data-v-314f53c6] {
  font-size: 18px;
  padding-top: 6px;
  padding-bottom: 6px;
}
.el-dropdown-menu__item--divided {
  position: relative;
  border-top: 1px solid #ebeef5;
}
.el-dropdown-menu__item {
  list-style: none;
  line-height: 36px;
  padding: 0 20px;
  margin: 0;
  font-size: 14px;
  color: #606266;
  cursor: pointer;
  outline: 0;
}

.el-dropdown-menu__item--divided:before {
  display: none;
}
.el-card {
  position: fixed;
  z-index: 9999;
  bottom: 24px;
  right: 58px;
  border-radius: 10px;
  border-bottom-right-radius: 0px;
  width: 260px;
  .btn_group {
    margin-left: 160px;
    margin-bottom: 10px;
    .el-button {
      width: 20px;
      height: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #e7e7e7;
      color: $color-black-01 !important;
      i {
        font-size: 10px;
      }
    }
  }

  .text {
    font-size: 13px;
    line-height: 30px;
    .v-btn {
      background: $color-orange-light;
      border-radius: 10px;
      height: 30px;
      text-transform: capitalize;
      font-size: 14px;
      font-weight: 400;
      letter-spacing: 0.5px;
      width: 220px;
      margin-bottom: 15px;
      &:nth-child(2) {
        color: $color-black-01 !important;
      }
    }
    .chat_title {
      font-weight: 500;
      font-size: 16px;
    }
    .wellcome {
      font-size: 15px;
      margin-bottom: 10px;
    }
  }
}

#message {
  z-index: 9999;
  position: fixed;
  right: 14px;
  bottom: 10px;
}
#backToTop {
  z-index: 9999;
  position: fixed;
  right: 14px;
  bottom: 60px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
