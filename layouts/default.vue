<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <!-- <v-list-group :value="false" prepend-icon="mdi-account-circle">
                <template v-slot:activator>
                <v-list-item-title>Users</v-list-item-title>
                </template>
                <v-list-item v-for="([title, icon], i) in user" :key="i" link>
                <v-list-item-title v-text="title"></v-list-item-title>

                <v-list-item-icon>
                    <v-icon v-text="icon"></v-icon>
                </v-list-item-icon>
                </v-list-item>
            </v-list-group> -->
    </v-navigation-drawer>
    <div class="info" id="laptop_info">
      <v-icon>mdi-phone-dial</v-icon>
      <span>0909522686</span>
      <v-icon>mdi-email</v-icon>
      <a href="#">khobatdongsanviet@gmail.com</a>
    </div>

    <div class="header">
      <div class="header_items">
        <div class="d-flex header_left">
          <router-link to="/">
            <img src="@image/layouts/bansaodanhthiep.png" alt="" />
          </router-link>

          <div class="header_choise">
            <el-dropdown placement="top-start" @command="handleCommand">
              <router-link to="/sell/total">
                <el-button type="warning" class="is-plain">
                  BĐS Bán <i class="el-icon-caret-bottom"></i>
                </el-button>
              </router-link>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item
                  v-for="item in dictionaryList.real_estate"
                  :key="item.id"
                  :command="'/category/mua-ban/' + item.name + '-' + item.id"
                >
                  <span v-html="item.name"></span>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <el-dropdown placement="top-start" @command="handleCommand">
              <router-link to="/rent/total">
                <el-button type="warning" class="is-plain">
                  BĐS Thuê <i class="el-icon-caret-bottom"></i>
                </el-button>
              </router-link>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item
                  v-for="item in dictionaryList.real_estate"
                  :key="item.id"
                  :command="'/category/cho-thue/' + item.name + '-' + item.id"
                >
                  <span v-html="item.name"></span>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <el-dropdown placement="top-start" @command="handleCommand">
              <router-link to="/project/total">
                <el-button type="warning" class="is-plain">
                  Dự Án <i class="el-icon-caret-bottom"></i>
                </el-button>
              </router-link>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="/category/cho-thue/">
                  Căn hộ - Chung cư
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
        <div class="header_right">
          <div class="header_choise">
            <!-- <el-dropdown> -->
            <!-- <el-button type="warning" plain class="fix_position">Blog </el-button> -->
            <!-- </el-dropdown> -->
            <!-- <el-dropdown> -->
            <el-dropdown placement="top-start" @command="handleCommand">
              <router-link to="/blog">
                <el-button type="warning" v-if="this.$route.path == '/blog'">
                  Blog <i class="el-icon-caret-bottom"></i>
                </el-button>
                <el-button type="warning" plain v-else>
                  Blog <i class="el-icon-caret-bottom"></i
                ></el-button>
              </router-link>

              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="/blog/kientrucnhadep">
                  Kiến trúc nhà đẹp
                </el-dropdown-item>
                <el-dropdown-item divided command="/blog/noithat"
                  >Nội ngoại thất</el-dropdown-item
                >
                <el-dropdown-item divided command="/blog/phongthuy"
                  >Phong thủy</el-dropdown-item
                >
                <el-dropdown-item divided command="/blog/taichinh"
                  >Tài chính-Bất động sản</el-dropdown-item
                >
                <el-dropdown-item divided command="/blog/xaydung"
                  >Xây dựng-Quy hoạch</el-dropdown-item
                >
                <el-dropdown-item divided command="/blog/duan"
                  >Tin tức-Dự án</el-dropdown-item
                >
                <el-dropdown-item divided command="/blog/video">Video</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <el-button
              type="warning"
              class="fix_position"
              @click="$router.push('/introduce')"
              v-if="this.$route.path == '/introduce'"
            >
              Giới Thiệu
            </el-button>
            <el-button
              type="warning"
              class="fix_position"
              plain
              @click="$router.push('/introduce')"
              v-else
            >
              Giới Thiệu
            </el-button>
            <!-- </el-dropdown> -->
            <el-dropdown placement="top-start" @command="handleCommand">
              <el-button type="warning" plain>
                Liên Hệ <i class="el-icon-caret-bottom"></i>
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="/contact/information"
                  >Thông tin liên lạc</el-dropdown-item
                >
                <el-dropdown-item divided command="/contact/idea"
                  >Ý kiến</el-dropdown-item
                >
                <el-dropdown-item divided command="/contact/recruiment"
                  >Tuyển dụng</el-dropdown-item
                >
                <el-dropdown-item divided command="/contact/kygui"
                  >Ký gửi BĐS</el-dropdown-item
                >
              </el-dropdown-menu>
            </el-dropdown>
            <v-btn color="warning" class="kygui" @click="$router.push('/contact/kygui')">
              <img src="@image/icons/kygui.png" alt="" />
              Ký gửi BĐS</v-btn
            >
          </div>
        </div>
      </div>
    </div>
    <div class="header_mobile">
      <div class="info">
        <div></div>
        <div>
          <v-icon>mdi-phone-dial</v-icon>
          <span>0909522686</span>
          <v-icon>mdi-email</v-icon>
          <a href="#">khobatdongsanviet@gmail.com</a>
        </div>
      </div>
      <div class="header_item">
        <div class="header_logo">
          <img src="@image/layouts/bansaodanhthiep.png" alt="" />
        </div>
        <div class="header_content">
          <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        </div>
      </div>
    </div>
    <div>
      <Nuxt />
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
import { mapState, mapActions } from "vuex";
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
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-home-flood",
          title: "Trang chủ",
          to: "/",
        },
        {
          icon: "mdi-sign-real-estate",
          title: "BĐS Bán",
          to: "/sell/total",
        },
        {
          icon: "mdi-home-group",
          title: "BĐS Thuê",
          to: "/rent/total",
        },
        {
          icon: "mdi-source-branch-plus",
          title: "Dự Án",
          to: "/project/total",
        },
        {
          icon: "mdi-blogger",
          title: "Blog",
          to: "/blog",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Giới thiệu",
          to: "/introduce",
        },
        {
          icon: "mdi-phone-incoming",
          title: "Liên hệ",
          to: "/inspire",
        },
      ],
      user: [["Liên hệ"], ["Cố vấn"]],
      miniVariant: false,
    };
  },
  computed: {
    ...mapState("dictionary", ["dictionaryList"]),
  },
  mounted() {
    this.getCategory("real_estate");
  },
  methods: {
    ...mapActions("dictionary", ["getCategory"]),
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
    handleCommand(command) {
      this.$router.push(command);
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  position: sticky;
  top: 0;
  z-index: 99;
  width: 100%;
  background-color: $color-white;
  height: 70px;
  box-shadow: 2px 2px 8px 2px rgba(0, 0, 0, 0.1);
  .header_items {
    display: flex;
    .header_left {
      width: 65%;
    }
  }
  img {
    width: 250px;
    margin: 10px;
    margin-left: 120px;
  }
  .header_choise {
    vertical-align: center;
    margin-left: 15px;
    margin-top: 5px;
  }
}

.kygui.v-btn {
  width: 130px;
  box-shadow: none;
  .v-btn__content {
    width: 100px;
  }
  img {
    width: 18px;
    height: 16px;
    margin: 0;
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

// }
.v-application .info {
  background-color: $color-blue-dark !important;
  height: 30px;
  line-height: 30px;
  font-size: 13px;
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

.header_mobile {
  display: none;
}

@media screen and (max-width: 1399px) {
  .kygui.v-btn {
    display: none;
  }
}

@media screen and (max-width: 1200px) {
  .header {
    img {
      margin-left: 20px;
    }
    .header_items {
      justify-content: space-between;
      .header_left {
        width: auto;
      }
    }
  }
}

@media screen and (max-width: 1035px) {
  .header {
    img {
      width: 200px;
      margin: 15px 0px 15px 15px;
    }
    .header_right {
      .header_choise {
        text-align: right !important;
        margin-right: 15px;
      }
    }
  }
  .el-button {
    border-radius: 0;
    height: 60px;
    border: none;
    font-size: 16px !important;
  }
  .el-dropdown-menu__item[data-v-314f53c6] {
    font-size: 14px !important;
    padding-top: 2px !important;
    padding-bottom: 2px !important;
  }
}

.v-navigation-drawer {
  z-index: 999;
}

@media screen and (max-width: 930px) {
  .header {
    height: 60px;
    .header_items {
      // position: relative;
      img {
        // position: absolute;
        // top: -31px;
        // margin-top: 0;
        z-index: 99999;
        width: 150px;
      }
    }
    .el-button {
      padding: 8px 12px;
      height: 50px !important;
    }
  }
}

@media screen and (max-width: 600px) {
  .header {
    display: none;
  }
  #laptop_info {
    display: none;
  }
  .header_mobile {
    display: block;
    box-shadow: 2px 2px 8px 2px rgba(0, 0, 0, 0.1);
    background-color: $color-white;
    position: fixed;
    z-index: 99;
    width: 100% !important;
    .info {
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding-right: 20px;
      .v-icon {
        font-size: 20px;
        margin: 0 5px;
      }
    }
    .v-btn__content .v-icon {
      color: $color-blue-dark;
    }
    .v-app-bar__nav-icon {
      background-color: #95a9e928;
    }
    .header_item {
      display: flex;
      padding: 0 20px;
      margin-top: 8px;
      justify-content: space-between;
      .header_logo {
        img {
          width: 180px;
          height: auto;
        }
      }
    }
  }
  .v-application .info {
    text-align: right;
    font-size: 11px;
    height: 36px;
    line-height: 36px;
  }
  .v-btn--fab.v-size--small {
    width: 30px !important;
    height: 30px !important;
  }
  .v-list-item--active {
    background-color: $color-blue-dark;
    color: $color-white !important;
    .v-list-item__title {
      color: $color-white !important;
    }
  }
}
</style>
