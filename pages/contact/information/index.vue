<template>
  <v-lazy
    v-model="isActive"
    :options="{
      threshold: 0.5,
    }"
    min-height="200"
    transition="fade-transition"
  >
    <div>
      <div class="contact">
        <v-row>
          <v-col cols="6" class="infomation">
            <div class="contact_info">THÔNG TIN LIÊN LẠC</div>
            <el-divider></el-divider>
            <div class="form">
              <FormContact />
            </div>
          </v-col>
          <v-col cols="6">
            <div class="comunity">TRUYỀN THÔNG HỢP TÁC</div>
            <div class="content">
              <div>
                Khobatdongsanviet.com xin chào quý anh chị nhà báo, phóng viên, blogger và
                tất cả những ai quan tâm đến chúng tôi: giao dịch BĐS nay thật dễ dàng,
                nhanh chóng và tiện lợi nhờ sự kết hợp công nghệ.
              </div>
              <div>
                Quý anh chị có nhu cầu đặt lịch phỏng vấn, viết bài hoặc đề xuất hợp tác,
                vui lòng liên hệ phòng Marketting, email: khobatdongsanviet@gmail.com
              </div>
              <div>Trân trọng cảm ơn!</div>
            </div>
          </v-col>
        </v-row>
      </div>
      <div class="footer">
        <Services />
        <Footer />
      </div>
    </div>
  </v-lazy>
</template>

<script>
import Services from "@component/main/Services";
import Footer from "@component/main/Footer";
import FormContact from "@component/tools/FormContact";
export default {
  components: {
    FormContact,
    Services,
    Footer,
  },
  data() {
    return {
      isActive: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.contact {
  padding: 0 10%;
  margin-top: 40px;
  .infomation {
    padding-right: 30px;
  }
  .contact_info {
    font-weight: bold;
    font-size: 24px;
    line-height: 24px;
  }
  .form {
    width: 85%;
  }
  .comunity {
    font-weight: 900;
    font-size: 24px;
    line-height: 18px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.6px;
    display: flex;
    justify-content: center;
    height: 50px;
    background: grey;
    color: white;
  }
  .content {
    padding: 20px;
    background: linear-gradient(0deg, #f5f5f5, #f5f5f5), rgba(81, 81, 81, 0.5);
    border-radius: 4px;
  }
}
</style>
