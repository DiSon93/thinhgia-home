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
        <img src="@image/layouts/consult.svg" alt="" />
        <div class="overlay">DỊCH VỤ TƯ VẤN QUY HOẠCH</div>
      </div>
      <div class="contact">
        <v-row>
          <img src="@image/layouts/dich vu tu van quy hoach 1.svg" alt="" />
          <v-col cols="7" class="infomation">
            <div class="contact_info">DỊCH VỤ TƯ VẤN QUY HOẠCH</div>
            <div class="content">
              - Bạn cần chúng tôi hỗ trợ thực hiện các thủ tục giấy tờ pháp lý bất động
              sản? Vui lòng điền vào form nội dung cần hỗ trợ bên cạnh.
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
