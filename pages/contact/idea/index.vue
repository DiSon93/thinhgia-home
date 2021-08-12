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
          <v-col cols="7" class="infomation">
            <div class="contact_info">Ý KIẾN KHÁCH HÀNG</div>
            <el-divider></el-divider>
            <div class="idea">
              Hãy cho chúng tôi biết ý kiến đóng góp của bạn để góp phần giúp chúng tôi
              phát triển. Đội ngũ nhân viên của Thịnh Gia sẽ liên lạc với bạn trong thời
              gian sớm nhất.
            </div>
            <div class="introduce_title">CÔNG TY CỔ PHẦN DỊCH VỤ BẤT ĐỘNG SẢN VIỆT</div>
            <el-divider></el-divider>
            <div class="content">
              <span class="highlight">Trụ sở:</span> 90 phường Thắng Tam, thành phố Vũng
              Tàu
            </div>
            <div class="content">
              <span class="highlight">Điện thoại:</span>0909522686 (24/7)
            </div>

            <div class="content">
              <span class="highlight">Email:</span> khobatdongsanviet@gmail.com
            </div>
            <div class="content">
              <span class="highlight">Website:</span> khobatdongsanviet.com
            </div>
          </v-col>
          <v-col cols="5">
            <FormContact />
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
  .introduce_title {
    margin-top: 30px;
    font-weight: bold;
    font-size: 24px;
    line-height: 24px;
  }
  .highlight {
    font-weight: 500;
    margin-right: 4px;
  }
  .content {
    margin: 15px 0;
  }
}
</style>
