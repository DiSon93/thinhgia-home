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
      <div class="blog">
        <div class="search">
          Trang chủ <i class="el-icon-arrow-right"></i> Blog
          <i class="el-icon-arrow-right"></i> {{ $route.params.id }}
        </div>
        <v-row class="specail_news">
          <v-col cols="8">
            <div class="blog_news">
              <div class="blog_title">
                10 mẫu thiết kế bếp liền phòng khách tiện nghi, nhà nhỏ hay lớn đều có thể
                áp dụng
              </div>
              <div class="content">
                Thiết kế bếp liền phòng khách hiện được ứng dụng rộng rãi trong các không
                gian nhà ở. Bất kể nhà bạn là chung cư hay nhà riêng, không gian nhỏ hẹp
                hay rộng rãi cũng có thể ứng dụng các ý tưởng đang "làm mưa làm gió" này!
                Thiết kế bếp liền phòng khách trước đây được ứng dụng rộng rãi trong các
                không gian nhỏ hẹp. Tuy nhiên, ngày nay các gia chủ có diện tích đủ rộng
                cũng yêu thích lựa chọn kiểu thiết kế này bởi vừa thông thoáng lại tạo cảm
                giác sang trọng cho không gian nhà. 10 mẫu thiết kế bếp liền phòng khách
                hiện đại, tiện nghi:
              </div>
              <div class="classify">
                10 mấu thiết kế liền phòng khách hiện đại, tiện nghi
              </div>
              <div class="photo">
                <img src="@image/layouts/news_01.svg" alt="" />
                <p>Mẫu 1</p>
                <img src="@image/layouts/news_02.svg" alt="" />
                <p>Mẫu 2</p>
                <img src="@image/layouts/news_03.svg" alt="" />
                <p>Mẫu 3</p>
                <img src="@image/layouts/news_04.svg" alt="" />
                <p>Mẫu 4</p>
                <img src="@image/layouts/news_05.svg" alt="" />
                <p>Mẫu 5</p>
                <img src="@image/layouts/news_06.svg" alt="" />
                <p>Mẫu 6</p>
                <img src="@image/layouts/news_07.svg" alt="" />
                <p>Mẫu 7</p>
                <img src="@image/layouts/news_08.svg" alt="" />
                <p>Mẫu 8</p>
                <img src="@image/layouts/news_09.svg" alt="" />
                <p>Mẫu 9</p>
              </div>
              <div class="detail">
                <p class="detail_title">
                  Lưu ý khi thiết kế phòng khách và phòng bếp liền nhau không?
                </p>
                <p>
                  Để các mẫu thiết kế phòng khách liền phòng bếp thật ấn tượng, sinh động,
                  đảm bảo sự liên thông mà vẫn tách biệt với những công năng sử dụng đầy
                  đủ cùng sự thông thoáng, sáng sủa đòi hỏi sự phối màu cho từng không
                  gian và cách trang trí nội thất thật phù hợp. Theo đó, bằng cách ứng
                  dụng những gam màu khác nhau cùng cách trang trí những mảng tường ấn
                  tượng hay chỉ đơn giản là việc sử dụng các tấm thảm để định vị 2 không
                  gian riêng biệt, phòng khách và phòng bếp vừa liền kề mà vẫn có điểm
                  nhấn và sự ngăn cách riêng.
                </p>
                <p>
                  Ngoài ra, để tạo sư kín đáo và riêng tư cho 2 khu vực, gia chủ có thể
                  lắp đặt hệ thống cửa kính màu hay vách ngăn kính. Dạng cửa kính này
                  không tốn nhiều diện tích và khi lắp đặt dạng cửa trượt có thể đẩy ra,
                  đóng vào, vừa tạo sự tiện lợi mà lại tiết kiệm tối đa diện tích lại cảm
                  giác không gian liền nhau. Bên cạnh đó, gia chủ cũng có thể trang trí
                  trần nhà bằng các điểm nhấn với hệ thống đèn chiếu sáng riêng cho 2
                  không gian để tạo sự khác biệt, đồng thời đảm bảo ánh sáng thích hợp cho
                  từng vị trí.
                </p>
                <p>
                  Cùng với việc sử dụng vách ngăn kính để phân chia khu vực bếp với phòng
                  khách mà vẫn tạo sự liên hoàn, bạn cũng có thể lắp đặt kệ trang trí giữa
                  2 khu vực này. Hoặc cách đơn giản nhất là thiết kế nội thất sử dụng
                  chính các đồ nội thất như: ghế sofa, tủ tường hay bàn ăn… để phân chia
                  ranh giới giữa 2 khu vực này.
                </p>
                <p>
                  Với cách thiết kế phù hợp thì việc thiết kế nội thất phòng khách liền
                  bếp sẽ đảm bảo đầy đủ các công năng mà vẫn rất tiện lợi cho gia chủ
                  trong sinh hoạt. Vì vậy đây cũng chính là phong cách thiết kế khá phổ
                  biến hiện nay.
                </p>
                <p>
                  Nhìn chung, thiết kế bếp liền phòng khách là một trong những xu hướng
                  thiết kế hiện đại, ấn tượng và được nhiều gia chủ yêu thích. Bạn có thể
                  tham khảo thêm các xu hướng thiết kế nhà ở, thiết kế nội thất chung cư
                  mới nhất tại Bất Động Sản Việt để cập nhật những ý tưởng mới, sáng tạo
                  cho không gian gia đình.
                </p>
              </div>
              <div class="d-flex">
                <div>>> Xem thêm</div>
                <div class="read_more">
                  <div>lorem ipsum met adot sit</div>
                  <div>lorem ipsum met adot sit lorem ipsum dot amet sit</div>
                </div>
              </div>
              <div class="bdsViet">Theo Bất Động Sản Việt</div>
              <div>Tham khảo các tin liên quan:</div>
              <ul class="read_more">
                <li>lorem ip sum dot amet sit dot lorem ipsum</li>
                <li>lorem ip sum dot amet sit dot lorem ipsum</li>
                <li>lorem ip sum dot amet sit dot lorem ipsum</li>
              </ul>
            </div>
            <div class="same_news">TIN CÙNG CHYÊN MỤC</div>
            <div class="blog_news">
              <v-row>
                <v-col cols="5">
                  <img src="@image/layouts/same_06.svg" alt="" />
                </v-col>
                <v-col cols="7">
                  <NuxtLink :to="`/blog/${$route.params.id}/antuong`" class="tintuc"
                    >14 ý tưởng dễ làm giúp bạn trang trí chậu cảnh</NuxtLink
                  >
                  <div class="content">
                    Trang trí chậu cảnh sao cho đẹp mắt, ấn tượng là một trong những cách
                    khiến ngôi nhà nhiều mảng xanh của bạn sinh động hơn.
                  </div>
                </v-col>
              </v-row>
              <el-divider></el-divider>
              <v-row>
                <v-col cols="5">
                  <img src="@image/layouts/same_01.svg" alt="" />
                </v-col>
                <v-col cols="7">
                  <div class="tintuc">
                    Nhà lắp ghép là gì? giá bao nhiêu tiền 1m2? Chi phí xây nhà ghép giá
                    rẻ
                  </div>
                  <div class="content">
                    Bạn đang quan tâm đến nhà lắp ghép là gì? chi phí xây dựng nhà lắp
                    ghép bao nhiêu 1m2? Dưới đây là tổng hợp những điều cần biết về nhà
                    lắp ghép, bạn có thể tham khảo.
                  </div>
                </v-col>
              </v-row>
              <el-divider></el-divider>
              <v-row>
                <v-col cols="5">
                  <img src="@image/layouts/same_02.svg" alt="" />
                </v-col>
                <v-col cols="7">
                  <div class="tintuc">20 mẫu cầu thang lên gác lửng đẹp nhất 2021</div>
                  <div class="content">
                    Dưới đây là tổng hợp +20 mẫu cầu thang lên gác lửng đẹp nhất 2021 dành
                    cho những ngôi nhà có diện tích vừa và nhỏ. Hãy cùng tham khảo ngay 20
                    mẫu cầu thang lên gác lửng này và lựa chọn những mẫu ưng ý nhất nhé!
                  </div>
                </v-col>
              </v-row>
              <el-divider></el-divider>
              <v-row>
                <v-col cols="5">
                  <img src="@image/layouts/same_03.svg" alt="" />
                </v-col>
                <v-col cols="7">
                  <div class="tintuc">
                    Nhà của Midu: Căn hộ tiền tỷ phong cách Nhật Bản tại quận 4 TP HCM
                  </div>
                  <div class="content">
                    Nhà của Midu là một căn hộ cao cấp tại quận 4, được thiết kế theo
                    phong cách Nhật Bản vô cùng hiện đại và đắt đỏ. Tuy nhiên, đây không
                    phải căn nhà duy nhất mà cô nàng sở hữu...
                  </div>
                </v-col>
              </v-row>
              <el-divider></el-divider>
              <v-row>
                <v-col cols="5">
                  <img src="@image/layouts/same_04.svg" alt="" />
                </v-col>
                <v-col cols="7">
                  <div class="tintuc">20 mẫu cầu thang lên gác lửng đẹp nhất 2021</div>
                  <div class="content">
                    Dưới đây là tổng hợp +20 mẫu cầu thang lên gác lửng đẹp nhất 2021 dành
                    cho những ngôi nhà có diện tích vừa và nhỏ. Hãy cùng tham khảo ngay 20
                    mẫu cầu thang lên gác lửng này và lựa chọn những mẫu ưng ý nhất nhé!
                  </div>
                </v-col>
              </v-row>
              <el-divider></el-divider>
              <v-row>
                <v-col cols="5">
                  <img src="@image/layouts/same_05.svg" alt="" />
                </v-col>
                <v-col cols="7">
                  <div class="tintuc">
                    Contrary to popular belief, Lorem Ipsum is not simply random text
                  </div>
                  <div class="content">
                    Dưới đây là tổng hợp +20 mẫu cầu thang lên gác lửng đẹp nhất 2021 dành
                    cho những ngôi nhà có diện tích vừa và nhỏ. Hãy cùng tham khảo ngay 20
                    mẫu cầu thang lên gác lửng này và lựa chọn những mẫu ưng ý nhất nhé!
                  </div>
                </v-col>
              </v-row>
              <el-divider></el-divider>
              <v-row>
                <v-col cols="5">
                  <img src="@image/layouts/same_06.svg" alt="" />
                </v-col>
                <v-col cols="7">
                  <div class="tintuc">20 mẫu cầu thang lên gác lửng đẹp nhất 2021</div>
                  <div class="content">
                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced
                    below for those interested. Sections 1.10.32 and 1.10.33 from "de
                    Finibus Bonorum et Malorum" by Cicero are also reproduced in their
                    exact original form, accompanied by English versions from the 1914
                    translation by H. Rackham.
                  </div>
                </v-col>
              </v-row>
              <el-divider></el-divider>
              <v-row>
                <v-col cols="5">
                  <img src="@image/layouts/same_07.svg" alt="" />
                </v-col>
                <v-col cols="7">
                  <div class="tintuc">
                    Contrary to popular belief, Lorem Ipsum is not simply random text
                  </div>
                  <div class="content">
                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced
                    below for those interested. Sections 1.10.32 and 1.10.33 from "de
                    Finibus Bonorum et Malorum" by Cicero are also reproduced in their
                    exact original form, accompanied by English versions from the 1914
                    translation by H. Rackham.
                  </div>
                </v-col>
              </v-row>
            </div>
          </v-col>

          <v-col cols="4">
            <div class="views">
              <div class="view_title">TIN XEM NHIỀU NHẤT</div>
              <div class="d-flex most_views">
                <div class="view_imgs">
                  <router-link :to="`/blog/news/lammvieclaunamtaiDaNang`">
                    <img src="@image/layouts/view_01.svg" alt="" />
                  </router-link>
                </div>
                <NuxtLink :to="`/blog/news/lammvieclaunamtaiDaNang`" class="view_content">
                  Làm việc lâu năm tại Đà Nẵng nên mua đất ở đâu?
                </NuxtLink>
              </div>
              <el-divider></el-divider>
              <div class="d-flex most_views">
                <div class="view_imgs">
                  <img src="@image/layouts/view_02.svg" alt="" />
                </div>
                <div class="view_content">
                  99+ Mẫu biệt thự hiện đại Nhật Bản đẹp hút hồn, mới nhất năm 2021
                </div>
              </div>
              <el-divider></el-divider>
              <div class="d-flex most_views">
                <div class="view_imgs">
                  <img src="@image/layouts/view_03.svg" alt="" />
                </div>
                <div class="view_content">
                  Các loại la phông trần nhà đẹp, bền xu hướng 2021
                </div>
              </div>
              <el-divider></el-divider>
              <div class="d-flex most_views">
                <div class="view_imgs">
                  <img src="@image/layouts/view_04.svg" alt="" />
                </div>
                <div class="view_content">
                  Căn hộ dịch vụ là gì? Bí quyết xây căn hộ dịch vụ cho thuê tiềm năng
                </div>
              </div>
              <el-divider></el-divider>
              <div class="d-flex most_views">
                <div class="view_imgs">
                  <img src="@image/layouts/view_05.svg" alt="" />
                </div>
                <div class="view_content">
                  Thiết kế phòng trọ 15m2 giá rẻ mà vẫn vạn người mê
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
        <div class="text-center pagination">
          <v-pagination v-model="page" :length="6" color="warning"></v-pagination>
        </div>
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
export default {
  components: {
    Services,
    Footer,
  },
  data() {
    return {
      page: 1,
      isActive: false,
      textTitle: "",
    };
  },
  mounted() {
    console.log(this.$route.params.id);
    if (this.$route.params.id == "antuong") {
      this.textTitle = "Kiến trúc nhà đẹp";
    }
    if (this.$route.params.id == "noithat") {
      this.textTitle = "Nội ngoại thất";
    }
    if (this.$route.params.id == "phongthuy") {
      this.textTitle = "Phong thủy";
    }
    if (this.$route.params.id == "taichinh") {
      this.textTitle = "Tài chính-Bất động sản";
    }
    if (this.$route.params.id == "xaydung") {
      this.textTitle = "Xây dựng-Quy hoạch";
    }
    if (this.$route.params.id == "duan") {
      this.textTitle = "Tin tức-Dự án";
    }
    if (this.$route.params.id == "video") {
      this.textTitle = "Video";
    }
  },
};
</script>

<style lang="scss" scoped>
.blog {
  padding: 0 10%;
  img {
    width: 100%;
  }
  .search {
    margin-top: 10px;
  }
  .blog_title {
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    margin: 10px 0;
  }
  .specail_news {
    margin-top: 15px;
    .blog_news {
      padding: 12px 15px;
      background: #f2f2f2;
      box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.15);
      border-radius: 4px;
      .tintuc {
        font-weight: 500;
        font-size: 20px;
        line-height: 20px;
        margin-bottom: 15px;
      }
      .content {
        font-size: 14px;
        line-height: 24px;
      }
      .classify {
        font-weight: 500;
        margin-bottom: 5px;
      }
      .photo {
        text-align: center;
      }
      img {
        width: 80%;
        margin: 0 auto;
      }
      .detail {
        font-size: 14px;
        .detail_title {
          font-size: 16px;
          font-weight: 500;
        }
      }
      .bdsViet {
        text-align: right;
      }
      .read_more {
        margin-left: 20px;
        color: $color-orange;
      }
    }
  }
  .views {
    margin-left: 10px;
    padding: 12px 15px;
    background: #f2f2f2;
    box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    .el-divider.el-divider--horizontal {
      margin: 12px 0;
    }
    .view_title {
      font-weight: 500;
      font-size: 18px;
      line-height: 24px;
      margin-bottom: 20px;
    }
    .most_views {
      .view_imgs {
        width: 40%;
        img {
          width: 100%;
        }
      }
      .view_content {
        width: 60%;
        padding-left: 10px;
      }
    }
  }
}
.same_news {
  font-weight: bold;
  font-size: 24px;
  line-height: 24px;
  margin: 20px 0;
}
.el-divider.el-divider--horizontal {
  margin: 12px 0;
}
.pagination {
  margin-top: 20px;
  margin-bottom: -20px;
  .v-pagination {
    .v-pagination__navigation,
    .v-pagination__item {
      height: 14px !important;
      width: 14px !important;
    }
  }
}
</style>
