<template>
  <div class="services animate__animated animate__slideInUp">
    <div class="service_overlay">
      <div class="service_title">DỊCH VỤ NỔI BẬT CỦA KHO BẤT ĐỘNG SẢN VIỆT</div>
      <div class="service_content">
        <div class="service_item">
          <div class="service_img">
            <img src="@image/icons/services_01.PNG" alt="" />
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
            <img src="@image/icons/services_02.PNG" alt="" />
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
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.services {
  margin-top: 80px;
  margin-bottom: 40px;
  background-image: url("@image/layouts/buildingtradingcolorfuturelife.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
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
          width: 70%;
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
</style>
