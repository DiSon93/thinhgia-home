<template>
  <v-container fluid class="footer">
    <v-row>
      <v-col cols="6" class="footer_left">
        <img src="@image/layouts/bansaodanhthiep.png" alt="" />
        <div class="address">
          <v-icon>mdi-near-me</v-icon>
          <div class="content">90 Võ Thị Sáu, Phường Thắng Tam, Tp Vũng Tàu</div>
        </div>
        <div class="email">
          <v-icon>mdi-email</v-icon>
          <div class="content">khobatdongsanviet@gmail.com</div>
        </div>
        <div class="internet">
          <img src="@image/icons/internet.png" alt="" />
          <div class="content">khobatdongsanviet@gmail.com</div>
        </div>
        <div class="call">
          <img src="@image/icons/call.png" alt="" />
          <div class="content">0909 522 686 (24/7)</div>
        </div>
        <div class="time">
          <img src="@image/icons/time.png" alt="" />
          <div class="content">
            <div>Thứ 2 - Thứ 6: 8h - 18h</div>
            <div>Thứ 7: 8h - 16h</div>
          </div>
        </div>
      </v-col>
      <v-col cols="6" class="footer_right">
        <v-row>
          <v-col cols="4">
            <div class="company">
              <div class="title">Về Kho BĐS Việt</div>
              <ul>
                <li>Giới thiệu</li>
                <li>Tuyển dụng</li>
                <li>Tin tức và sự kiện</li>
              </ul>
            </div>
          </v-col>
          <v-col cols="4">
            <div class="real_estate">
              <div class="title">Bất động sản</div>
              <ul>
                <li>Căn hộ-Chung cư</li>
                <li>Nhà ở riêng lẻ</li>
                <li>Nhà mặt tiền</li>
                <li>Biệt thự-Villa</li>
                <li>Nhà nghỉ-Khách sạn</li>
                <li>Phòng trọ</li>
                <li>Kho xưởng</li>
                <li>Trang trại</li>
              </ul>
            </div>
          </v-col>
          <v-col cols="4">
            <div class="project">
              <div class="title">Dự án</div>
              <ul>
                <li>Khu nhà ở sông Cây Khế</li>
                <li>Dự án Phước Sơn</li>
                <li>Khu biệt thự Thanh Bình</li>
                <li>Blue Sapphire Towers</li>
              </ul>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row class="footer_bottom">
      <v-col cols="6">
        <img src="@image/icons/logoSaleNoti1.png" alt="" />
      </v-col>
      <v-col cols="4">
        <div class="footer_info">
          <div class="info_name">
            Đăng ký nhận thông tin mới nhất từ Kho Bất Động Sản Việt
          </div>
          <div class="search">
            <el-input placeholder="Nhập email để nhận thông tin" v-model="input2">
              <el-button slot="append" icon="el-icon-d-arrow-right"></el-button>
            </el-input>
          </div>
        </div>
      </v-col>
      <v-col cols="2">
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
    <v-row class="copyright"> Copyright @2021 THINH GIA LAND. All Right Reserved </v-row>
  </v-container>
</template>

<script>
export default {
  //   mounted() {
  //     console.log("Footer");
  //   },
  data() {
    return {
      input2: "",
    };
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

  //   .email {
  //     display: flex;
  //     margin-left: 120px;
  //     align-items: center;
  //     margin-bottom: 20px;

  //     .v-icon {
  //       color: $color-black-01;
  //     }
  //   }
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
      .title {
        font-size: 18px !important;
        color: #121212;
        text-align: left;
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
          width: 32px;
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
</style>
