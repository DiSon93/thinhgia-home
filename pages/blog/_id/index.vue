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
          <i class="el-icon-arrow-right"></i> {{ textTitle }}
        </div>
        <div class="blog_title">{{ textTitle.toUpperCase() }}</div>
        <v-row class="specail_news">
          <v-col cols="8">
            <div class="blog_news">
              <v-row>
                <v-col cols="5">
                  <img src="@image/layouts/architecture_01.svg" alt="" />
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
                  <img src="@image/layouts/art_01.svg" alt="" />
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
                  <img src="@image/layouts/art_02.svg" alt="" />
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
                  <img src="@image/layouts/art_03.svg" alt="" />
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
                  <img src="@image/layouts/art_04.svg" alt="" />
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
                  <img src="@image/layouts/art_05.svg" alt="" />
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
                  <img src="@image/layouts/art_06.svg" alt="" />
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
                  <img src="@image/layouts/art_07.svg" alt="" />
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
    if (this.$route.params.id == "kientrucnhadep") {
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
    margin: 20px 0;
  }
  .specail_news {
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
    }
    .architecture,
    .feature,
    .fengShui,
    .finance,
    .building,
    .projects {
      font-weight: bold;
      font-size: 20px;
      line-height: 24px;
      margin: 25px 0 15px;
      display: flex;
      justify-content: space-between;
      .v-btn {
        text-transform: capitalize;
        border-radius: 5px;
        box-shadow: none;
        background-color: $color-orange-light;
        color: $color-black-02;
        font-size: 12px;
      }
      .v-btn:not(.v-btn--round).v-size--default {
        min-height: 30px;
        height: 32px;
      }
    }
    .more_detail {
      padding: 6px 12px;
      img {
        margin-top: 6px;
        height: 12px;
        width: 12px;
      }
      .small_content {
        margin-left: 12px;
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
