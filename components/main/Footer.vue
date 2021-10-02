<template>
  <v-container fluid class="footer">
    <v-row>
      <v-col cols="12" sm="6" class="footer_left">
        <img src="@image/layouts/bansaodanhthiep.png" alt="" />
        <div class="address">
          <v-icon>mdi-near-me</v-icon>
          <div class="content">Trụ sở: {{ settings.site_head_office_vi }}</div>
        </div>
        <div v-if="settings.site_branch_office_vi" class="branch">
          <div
            v-for="(item, index) in settings.site_branch_office_vi.split('?')"
            :key="item"
          >
            Chi nhánh {{ index + 1 }}: {{ item }}
          </div>
        </div>
        <div class="email">
          <v-icon>mdi-email</v-icon>
          <div class="content" v-html="settings.site_email"></div>
        </div>
        <div class="internet">
          <img src="@image/icons/internet.png" alt="" />
          <div class="content" v-html="settings.site_domain"></div>
        </div>
        <div class="call">
          <img src="@image/icons/call.png" alt="" />
          <div class="content" v-html="settings.site_phone"></div>
        </div>
        <div class="time">
          <img src="@image/icons/time.png" alt="" />
          <div class="content" v-html="settings.open_time"></div>
        </div>
      </v-col>
      <v-col cols="12" sm="6" class="footer_right">
        <v-row>
          <v-col cols="6">
            <div class="company">
              <div class="title_ft">Về Kho BĐS Việt</div>
              <ul>
                <li>
                  <NuxtLink to="/static-pages/gioi-thieu"> Giới thiệu </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/static-pages/tuyen-dung"> Tuyển dụng </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/blog"> Tin tức và sự kiện </NuxtLink>
                </li>
              </ul>
            </div>
          </v-col>
          <v-col cols="6">
            <div class="real_estate">
              <div class="title_ft">Bất động sản</div>
              <ul>
                <li v-for="item in dictionaryList.real_estate" :key="item.id">
                  <NuxtLink
                    :to="'/category/mua-ban/' + item.slug + '-' + item.id"
                    v-html="item.name"
                  ></NuxtLink>
                </li>
              </ul>
            </div>
          </v-col>
          <!-- <v-col cols="4">
                    <div class="project">
                    <div class="title">Dự án</div>
                    <ul>
                        <li>Khu nhà ở sông Cây Khế</li>
                        <li>Dự án Phước Sơn</li>
                        <li>Khu biệt thự Thanh Bình</li>
                        <li>Blue Sapphire Towers</li>
                    </ul>
                    </div>
                </v-col> -->
        </v-row>
      </v-col>
    </v-row>
    <v-row class="footer_bottom">
      <v-col cols="12" sm="5" md="6">
        <img src="@image/icons/logoSaleNoti1.png" alt="" />
      </v-col>
      <v-col cols="12" sm="4" md="4">
        <!-- <div class="footer_info">
                    <div class="info_name">
                        Đăng ký nhận thông tin mới nhất từ Kho Bất Động Sản Việt
                    </div>
                    <div class="search" v-loading="loading">
                        <el-form ref="frmNewsLetter" :rules="rulesNewsLetter" :model="frmNewsLetter">
                            <el-form-item prop="email">
                                <el-input placeholder="Nhập email để nhận thông tin" v-model="frmNewsLetter.email">
                                    <el-button slot="append" icon="el-icon-d-arrow-right" @click="btnNewsLetter"></el-button>
                                </el-input>
                            </el-form-item>
                        </el-form>
                    </div>
                </div> -->
      </v-col>
      <v-col cols="3" sm="3" md="2">
        <div class="network">
          <div class="network_title">Kết nối với chúng tôi</div>
          <div class="network_logo d-flex">
            <img src="@image/icons/facebook.png" alt="" />
            <!-- <v-icon>mdi-facebook</v-icon> -->
            <div class="instagram">
              <img src="@image/icons/intasgram.png" alt="" />
            </div>
            <!-- <v-icon>mdi-instagram</v-icon> -->
            <div class="zalo">
              <img src="@image/icons/zalo.png" alt="" />
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row class="copyright">
      Copyright @2021 KHO BAT ĐONG SAN VIET. All Right Reserved
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      loading: false,
      frmNewsLetter: {
        email: "",
      },
      rulesNewsLetter: {
        email: [
          {
            required: true,
            message: "Vui lòng nhập Email",
            trigger: "change",
          },
          {
            type: "email",
            message: "Vui lòng nhập đúng định dạng Email",
            trigger: "submit",
          },
        ],
      },
    };
  },
  mounted() {
    this.getSettings();
  },
  computed: {
    ...mapState("dictionary", ["dictionaryList"]),
    ...mapState("setting", ["settings"]),
  },
  methods: {
    ...mapActions("contact", ["postNewsLetter"]),
    ...mapActions("setting", ["getSettings"]),
    btnNewsLetter() {
      this.loading = true;
      this.$refs["frmNewsLetter"].validate(async (valid) => {
        if (valid) {
          await this.postNewsLetter(this.frmNewsLetter.email);
          this.loading = false;
        } else {
          this.loading = false;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.footer {
  .footer_left {
    font-size: 14px;
    img {
      width: 350px;
      margin: 10px;
      margin-left: 120px;
    }
    .branch {
      margin: -20px 0 20px 165px;
    }
  }
  .address,
  .email {
    display: flex;
    margin-left: 120px;
    align-items: center;
    margin-bottom: 26px;
    .v-icon {
      color: $color-black-01;
    }
    .content {
      margin-left: 20px;
    }
  }
  .internet,
  .call,
  .time {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    img {
      width: 16px;
      height: 16px;
    }
    .content {
      margin-left: 20px;
    }
  }
  .footer_right {
    padding-right: 120px;
    padding-top: 20px;
    .company,
    .real_estate,
    .project {
      .title_ft {
        font-size: 18px;
        color: #121212;
        text-align: left;
        font-weight: 700;
      }
      ul {
        list-style: none;
        padding: 0;
        li {
          font-size: 14px;
          line-height: 34px;
        }
      }
    }
  }
  .footer_bottom {
    padding: 0 120px;
    .footer_info {
      .info_name {
        background: $color-white;
        font-size: 14px;
        margin-bottom: 10px;
      }
    }
    .network {
      justify-content: space-between;
      .network_title {
        font-size: 14px;
        margin-bottom: 13px;
      }
      .network_logo {
        width: 180px;
        .v-icon {
          height: 32px;
          width: 32px;
          background-color: $color-orange;
          color: $color-white;
          border-radius: 50%;
        }
        .zalo,
        .instagram {
          height: 32px;
          width: 32px !important;
          background-color: $color-orange;
          color: $color-white;
          border-radius: 50%;
          justify-content: center;
          align-items: center;
          display: flex;
          margin-left: 15px;
          img {
            height: 24px;
            width: 24px;
          }
        }
      }
    }
    .search {
      .el-input-group {
        width: 80%;
      }
      .el-button {
        background-color: $color-orange;
        color: $color-white;
        border-radius: 5px;
        text-align: center;
        .el-icon-d-arrow-right {
          margin-left: -16px !important;
        }
      }
    }
  }
  .copyright {
    margin-top: 40px;
    color: $color-white;
    background-color: $color-blue-dark;
    height: 60px;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

@media screen and (max-width: 1250px) {
  .footer {
    .footer_left {
      img {
        margin-left: 50px;
      }
    }
    .address,
    .email {
      margin-left: 50px;
    }
    .footer_right {
      padding-right: 50px;
    }
    .footer_bottom {
      padding: 0 50px;
    }
  }
}

@media screen and(max-width: 600px) {
  .footer .footer_left {
    .branch {
      margin: -10px 10% 20px 75px;
      text-align: justify;
    }
    img:nth-child(1) {
      width: 80%;
      margin-bottom: 20px;
      margin-left: 30px;
    }
    .address,
    .email {
      margin-right: 30px;
      margin-bottom: 16px;
      margin-left: 30px;
    }
    .internet,
    .call,
    .time {
      img {
        width: 16px;
        height: 16px;
      }
      margin-bottom: 2px;
    }
  }
  .footer_right {
    padding-left: 50px;
    padding-right: 0 !important;
    overflow: hidden;
    .title_ft {
      font-size: 15px !important;
      margin-bottom: 10px;
    }
    ul li {
      line-height: 28px !important;
    }
  }
  .footer_bottom {
    .col-sm-5 {
      padding: 0 !important;
    }
    .search .el-input-group {
      width: 100% !important;
    }
    .network {
      .network_title {
        width: 200px;
      }
    }
  }
  .copyright {
    margin-top: 20px !important;
    padding: 0 20px !important;
    font-size: 11px !important;
    height: 40px !important;
  }
}
</style>
