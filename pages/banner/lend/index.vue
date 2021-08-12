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
      <div class="banner">
        <img src="@image/layouts/lends.svg" alt="" />
        <div class="overlay">DỊCH VỤ TƯ VẤN VAY MUA BĐS</div>
      </div>
      <div class="contact">
        <v-row>
          <img src="@image/layouts/vay mua bds 1.svg" alt="" />
          <v-col cols="7" class="infomation">
            <div class="contact_info">DỊCH VỤ TƯ VẤN VAY MUA BẤT ĐỘNG SẢN</div>
            <div class="content">
              Bạn đang tìm mua căn nhà ưng ý nhưng chưa đủ tài chính để thực hiện giao
              dịch?
            </div>
            <div class="content">
              Hãy liên hệ với các chuyên gia của chúng tôi sẽ hỗ trợ bạn các thủ thục vay
              mua nhà nhanh chóng nhất, sẽ giúp bạn có những phân tích đánh giá các gói
              vay mua nhà từ nhiều ngân hang để cho bạn có những sự lựa chọn phù hợp nhất.
            </div>
            <div class="content">
              Bạn vui lòng điền vào form bên cạnh để đội ngũ chuyên gia của chúng tôi có
              thể hỗ trợ bạn mốt cách tốt nhất.
            </div>
            <div class="content">Trân trọng cảm ơn!</div>
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
.banner {
  //   margin-top: 10px;
  position: relative;
  img {
    width: 100%;
  }
  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.185);
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 24px;
    color: #ffffff;
    text-align: center;
    padding-top: 6%;
  }
}
.contact {
  padding: 0 10%;
  margin-top: 40px;
  img {
    width: 100%;
  }
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
