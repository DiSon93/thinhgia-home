<template>
  <v-lazy
    v-model="isActive"
    :options="{
      threshold: 0.5,
    }"
    min-height="200"
    transition="scroll-y-reverse-transition"
  >
    <div class="services">
      <div class="service_overlay">
        <div class="service_title">DỊCH VỤ NỔI BẬT CỦA KHO BẤT ĐỘNG SẢN VIỆT</div>
        <div class="service_content">
          <div class="service_item">
            <div class="service_img">
              <img src="@image/icons/service_01.svg" alt="" />
            </div>
            <div class="services_detail">
              <div class="name">Đăng bán và cho thuê miễn phí</div>
              <div class="quote">
                Tiếp cận khách hàng sẵn cáo, quảng cáo tin đăng miễn phí.
              </div>
            </div>
          </div>
          <div class="service_item">
            <div class="service_img">
              <img src="@image/icons/service_02.svg" alt="" />
            </div>
            <div class="services_detail">
              <div class="name">Tìm Mua và Thuê Như Ý</div>
              <div class="quote">
                <div>Tổng khách hàng sử dụng: 1100+.</div>
                <div>Tổng đối tác: 300+.</div>
                <div>Tổng dự án: 50+.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </v-lazy>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.services {
  margin-top: 80px;
  margin-bottom: 40px;
  background-image: url("@image/layouts/buildingtradingcolorfuturelife.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  // transition: 6s;
  .service_title {
    font-weight: 700;
    font-size: 24px;
    line-height: 24px;
    color: #fff;
    text-align: center;
    margin-bottom: 60px;
  }
  .service_content {
    display: flex;
    justify-content: center;
    .service_item {
      width: 33%;
      display: flex;
      align-items: center;
      margin: 0 20px;
      background-color: $color-orange;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 8px;
      &:hover {
        animation: upDown 0.5s linear 0s;
      }
      .service_img {
        width: 40%;
        display: flex;
        justify-content: center;
        img {
          width: 45%;
          display: block;
        }
      }
      .services_detail {
        padding: 20px;
        padding-left: 0;
        letter-spacing: 0.6px;
        .name {
          font-weight: 500;
          font-size: 18px;
          line-height: 24px;
          color: #ffffff;
          margin-bottom: 8px;
        }
        .quote {
          font-weight: normal;
          font-size: 14px;
          line-height: 24px;
          color: #ffffff;
          p {
            margin-bottom: 5px;
          }
        }
      }
    }
  }
  .service_overlay {
    background: rgba(18, 18, 18, 0.35);
    padding-top: 80px;
    padding-bottom: 80px;
  }
}

@keyframes upDown {
  /* 1 chu kì/ 1 lần chuyển động */
  /* 100s */
  0% {
  }
  25% {
    transform: translateY(-5px) scale(1);
  }
  50% {
    transform: translateY(0);
    scale: 1;
  }
  75% {
    transform: translateY(5px);
    scale: 1;
  }
  100% {
    transform: translateY(0);
    scale: 1;
  }
}
@media screen and (max-width: 1250px) {
  .services {
    .service_content {
      .service_item {
        .service_img {
          img {
            width: 120px;
            margin: 0 20px;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 600px) {
  .services {
    .service_title {
      font-size: 16px;
      margin: 0 20px;
      margin-top: -30px;
    }
    .service_content {
      display: block;
      .service_item {
        width: 80%;
        margin: 0 auto;
        margin-top: 30px;
        .service_img {
          width: auto;
          img {
            width: 50px;
            margin: 0 15px;
          }
        }
        .services_detail {
          .name {
            font-size: 14px;
          }
          .quote {
            font-size: 12px;
            line-height: 20px;
          }
        }
      }
    }
  }
}
</style>
