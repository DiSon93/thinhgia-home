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
    <div class="search_project">
      <div class="search_link">
        Căn hộ/Chung cư <i class="el-icon-arrow-right"></i> HCM
      </div>
      <SearchProject />
      <div class="project_content">
        <VueSlickCarousel :arrows="true" v-bind="settings">
          <div class="estate_img">
            <el-card class="box-card">
              <div slot="header" class="clearfix hover14">
                <figure><img src="@image/layouts/bigproject_01.png" alt="" /></figure>
                <div class="overlay_text">Đã hoàn thành</div>
              </div>
              <div class="add_detail">
                <div class="price">
                  <span class="first_price">6 tỷ</span>
                  <span>60 m2</span>
                </div>
                <NuxtLink class="name" to="/project/01/detail">VICTORIA PREMIUM</NuxtLink>
                <div class="quymo d-flex">
                  <img src="@image/icons/housesize.png" alt="" />
                  <span
                    >Quy mô: 90 căn nhà liền kề/ 213 căn biệt thự 400 căn hộ chung
                    cư.</span
                  >
                </div>
                <div class="address d-flex">
                  <img src="@image/icons/address.png" alt="" />
                  <span>Phường 12, Tp.Vũng Tàu</span>
                </div>
                <div class="contractor d-flex">
                  <img src="@image/icons/contractor.png" alt="" />
                  <span
                    >Chủ đầu tư: Công ty CP Phát triển nhà Bà Rịa – Vũng Tàu
                    (HODECO)</span
                  >
                </div>
              </div>
            </el-card>
          </div>
          <div class="estate_img">
            <el-card class="box-card">
              <div slot="header" class="clearfix hover14">
                <figure><img src="@image/layouts/bigproject_02.png" alt="" /></figure>
                <div class="overlay_text">Sắp mở bán</div>
              </div>
              <div class="add_detail">
                <div class="price">Giá từ 1,2-12 tỷ/căn</div>
                <NuxtLink class="name" to="/project/02/detail"
                  >THE LIGHT CITY VŨNG TÀU</NuxtLink
                >
                <div class="quymo d-flex">
                  <img src="@image/icons/housesize.png" alt="" />
                  <span>Quy mô: 3 Block / 176 Căn</span>
                </div>
                <div class="address d-flex">
                  <img src="@image/icons/address.png" alt="" />

                  <span
                    >Đường Nguyễn Trung Trực, Phường 3, Thành phố Mỹ Tho, Tiền Giang</span
                  >
                </div>
                <div class="contractor d-flex">
                  <img src="@image/icons/contractor.png" alt="" />
                  <span>Chủ đầu tư: Công ty TNHH Quản lý bất động sản VICTORIA</span>
                </div>
              </div>
            </el-card>
          </div>
          <div class="estate_img">
            <el-card class="box-card">
              <div slot="header" class="clearfix hover14">
                <figure><img src="@image/layouts/bigproject_03.png" alt="" /></figure>
                <div class="overlay_text">Đã hoàn thành</div>
              </div>
              <div class="add_detail">
                <div class="price">Giá từ 2,1-7,3 tỷ/căn</div>
                <NuxtLink class="name" to="/project/03/detail"
                  >JAMILA KHANG ĐIỀN</NuxtLink
                >
                <div class="quymo d-flex">
                  <img src="@image/icons/housesize.png" alt="" />
                  <span>Quy mô: 3 Block / 176 Căn</span>
                </div>
                <div class="address d-flex">
                  <img src="@image/icons/address.png" alt="" />

                  <span
                    >Đường Nguyễn Trung Trực, Phường 3, Thành phố Mỹ Tho, Tiền Giang</span
                  >
                </div>
                <div class="contractor d-flex">
                  <img src="@image/icons/contractor.png" alt="" />
                  <span>Chủ đầu tư: Công ty TNHH Quản lý bất động sản VICTORIA</span>
                </div>
              </div>
            </el-card>
          </div>
          <div class="estate_img">
            <el-card class="box-card">
              <div slot="header" class="clearfix hover14">
                <figure><img src="@image/layouts/special_01.svg" alt="" /></figure>
                <div class="overlay_text">Sắp mở bán</div>
              </div>
              <div class="add_detail">
                <div class="price">
                  <span class="first_price">6 tỷ</span>
                  <span>60 m2</span>
                </div>
                <NuxtLink class="name" to="/project/04/detail"
                  >LOREM IPSUM AMET SIT DOT</NuxtLink
                >
                <div class="quymo d-flex">
                  <img src="@image/icons/housesize.png" alt="" />
                  <span
                    >Quy mô: 90 căn nhà liền kề/ 213 căn biệt thự 400 căn hộ chung
                    cư.</span
                  >
                </div>
                <div class="address d-flex">
                  <img src="@image/icons/address.png" alt="" />
                  <span>Phường 12, Tp.Vũng Tàu</span>
                </div>
                <div class="contractor d-flex">
                  <img src="@image/icons/contractor.png" alt="" />
                  <span
                    >Chủ đầu tư: Công ty CP Phát triển nhà Bà Rịa – Vũng Tàu
                    (HODECO)</span
                  >
                </div>
              </div>
            </el-card>
          </div>
          <div class="estate_img">
            <el-card class="box-card">
              <div slot="header" class="clearfix hover14">
                <figure><img src="@image/layouts/special_02.svg" alt="" /></figure>
                <div class="overlay_text">Đã hoàn thành</div>
              </div>
              <div class="add_detail">
                <div class="price">
                  <span class="first_price">6 tỷ</span>
                  <span>60 m2</span>
                </div>
                <NuxtLink class="name" to="/project/05/detail"
                  >LOREM IPSUM AMET SIT DOT</NuxtLink
                >
                <div class="quymo d-flex">
                  <img src="@image/icons/housesize.png" alt="" />
                  <span>Quy mô: 4 Block / 867 Căn </span>
                </div>
                <div class="address d-flex">
                  <v-icon>mdi-map-marker</v-icon>
                  <span>đường Song Hành, Phường Phú Hữu, Quận 9, Tp. Hồ Chí Minh</span>
                </div>
                <div class="contractor d-flex">
                  <img src="@image/icons/contractor.png" alt="" />
                  <span
                    >Chủ đầu tư: Công ty Cổ phần Đầu tư và Kinh doanh Nhà Khang Điền
                    (KDH)</span
                  >
                </div>
              </div>
            </el-card>
          </div>
          <div class="estate_img">
            <el-card class="box-card">
              <div slot="header" class="clearfix hover14">
                <figure><img src="@image/layouts/special_03.svg" alt="" /></figure>
                <div class="overlay_text">Đã hoàn thành</div>
              </div>
              <div class="add_detail">
                <div class="price">
                  <span class="first_price">6 tỷ</span>
                  <span>60 m2</span>
                </div>
                <NuxtLink class="name" to="/project/07/detail"
                  >LOREM IPSUM AMET SIT DOT</NuxtLink
                >
                <div class="quymo d-flex">
                  <img src="@image/icons/housesize.png" alt="" />
                  <span
                    >Quy mô: 90 căn nhà liền kề/ 213 căn biệt thự 400 căn hộ chung
                    cư.</span
                  >
                </div>
                <div class="address d-flex">
                  <img src="@image/icons/address.png" alt="" />
                  <span>Phường 12, Tp.Vũng Tàu</span>
                </div>
                <div class="contractor d-flex">
                  <img src="@image/icons/contractor.png" alt="" />
                  <span
                    >Chủ đầu tư: Công ty CP Phát triển nhà Bà Rịa – Vũng Tàu
                    (HODECO)</span
                  >
                </div>
              </div>
            </el-card>
          </div>
        </VueSlickCarousel>
      </div>
      <v-divider></v-divider>
      <v-row class="special_project">
        <v-col cols="6" class="content_left">
          <img src="@image/layouts/special_project_01.png" alt=""
        /></v-col>
        <v-col cols="6">
          <div class="special_content">
            <div class="name">KHU NHÀ Ở SÔNG CÂY KHẾ</div>
            <v-row class="address content">
              <v-col cols="1"> <img src="@image/icons/address.png" alt="" /></v-col>
              <v-col cols="11"
                ><span>Quốc lộ 51A, khu đô thị mới phía Bắc Tp.Vũng Tàu</span></v-col
              >
            </v-row>
            <v-row class="quymo content">
              <v-col cols="1"> <img src="@image/icons/quymo.png" alt="" /></v-col>
              <v-col cols="11">
                <span
                  >Quy mô:
                  <span class="highlight"> 175 căn nhà liên kế và 100 căn biệt thự </span>
                </span></v-col
              >
            </v-row>
            <v-row class="contractor content">
              <v-col cols="1"><img src="@image/icons/contractor.png" alt="" /></v-col>
              <v-col cols="11"
                ><span
                  >Chủ đầu tư:
                  <span class="highlight"
                    >Công ty Cổ phần Đầu tư Xây dựng Sản xuất Tân Thành</span
                  >
                </span></v-col
              >
            </v-row>
            <v-row class="price content">
              <v-col cols="1"><img src="@image/icons/prices.png" alt="" /></v-col>
              <v-col cols="11">
                <span>Giá từ: <span class="highlight">1.2-15 tỷ/căn</span> </span></v-col
              >
            </v-row>
            <v-row class="build content">
              <v-col cols="1"> <img src="@image/icons/buildyear.png" alt="" /></v-col>
              <v-col cols="11">
                <span>Năm xây dựng: <span class="highlight">2018</span> </span></v-col
              >
            </v-row>
            <v-row class="finish content">
              <v-col cols="1"><img src="@image/icons/tiendo.png" alt="" /></v-col>
              <v-col cols="11">
                <span>Tiến độ: <span class="highlight"> Đã hoàn thành</span></span></v-col
              >
            </v-row>
            <v-row class="content">
              <v-btn @click="$router.push('/project/caykhe/detail')"
                >Xem chi tiết >></v-btn
              >
            </v-row>
          </div></v-col
        >
      </v-row>
      <div class="estateOfProject">
        <div class="estate_title">BẤT ĐỘNG SẢN THUỘC DỰ ÁN</div>
        <div class="btn_group">
          <div>
            <v-btn>Cho thuê</v-btn>
            <v-btn color="warning">Mua bán</v-btn>
          </div>
          <div class="content">
            <v-btn @click="$router.push('/project/caykhe')">Xem Tất cả >></v-btn>
          </div>
        </div>
        <v-row id="img_estate">
          <v-col cols="3" class="estate_img">
            <el-card class="box-card">
              <div slot="header" class="clearfix hover14">
                <figure><img src="@image/layouts/room_08.svg" alt="" /></figure>
                <div class="overlay_title">Khu nhà ở sông Cây Khế</div>
              </div>
              <div class="add_detail">
                <div class="price">
                  <span class="first_price">6 tỷ</span>
                  <span>60 m2</span>
                </div>
                <div class="name">LOREM IPSUM AMET SIT DOT</div>
                <div class="sex d-flex">
                  <v-icon>mdi-near-me</v-icon>
                  <span>Nam</span>
                </div>
                <div class="address d-flex">
                  <v-icon>mdi-map-marker</v-icon>
                  <span>Nguyễn Hữu Cảnh</span>
                </div>
              </div>
            </el-card>
          </v-col>
          <v-col cols="3" class="estate_img">
            <el-card class="box-card">
              <div slot="header" class="clearfix hover14">
                <figure><img src="@image/layouts/room_15.svg" alt="" /></figure>
                <div class="overlay_title">Khu nhà ở sông Cây Khế</div>
              </div>
              <div class="add_detail">
                <div class="price">
                  <span class="first_price">6 tỷ</span>
                  <span>60 m2</span>
                </div>
                <div class="name">LOREM IPSUM AMET SIT DOT</div>
                <div class="sex d-flex">
                  <v-icon>mdi-near-me</v-icon>
                  <span>Nam</span>
                </div>
                <div class="address d-flex">
                  <v-icon>mdi-map-marker</v-icon>
                  <span>Nguyễn Hữu Cảnh</span>
                </div>
              </div>
            </el-card>
          </v-col>
        </v-row>
      </div>
      <v-row class="special_project">
        <v-col cols="6" class="content_left">
          <img src="@image/layouts/ngoctuoc.png" alt=""
        /></v-col>
        <v-col cols="6">
          <div class="special_content">
            <div class="name">KHU BIỆT THỰ ĐỒI NGỌC TƯỚC II</div>
            <v-row class="address content">
              <v-col cols="1"> <img src="@image/icons/address.png" alt="" /></v-col>
              <v-col cols="11"
                ><span
                  >Đường 3 tháng 2, phường 8, Tp.Vũng Tàu, Bà Rịa – Vũng Tàu</span
                ></v-col
              >
            </v-row>
            <v-row class="quymo content">
              <v-col cols="1"> <img src="@image/icons/quymo.png" alt="" /></v-col>
              <v-col cols="11">
                <span
                  >Quy mô:
                  <span class="highlight"> 175 căn nhà liên kế và 100 căn biệt thự </span>
                </span></v-col
              >
            </v-row>
            <v-row class="contractor content">
              <v-col cols="1"><img src="@image/icons/contractor.png" alt="" /></v-col>
              <v-col cols="11"
                ><span
                  >Chủ đầu tư:
                  <span class="highlight"
                    >Công ty Cổ phần Phát triển nhà Bà Rịa – Vũng Tàu (HODECO)</span
                  >
                </span></v-col
              >
            </v-row>
            <v-row class="price content">
              <v-col cols="1"><img src="@image/icons/prices.png" alt="" /></v-col>
              <v-col cols="11">
                <span>Giá từ: <span class="highlight">30-50 tỷ/căn</span> </span></v-col
              >
            </v-row>
            <v-row class="build content">
              <v-col cols="1"> <img src="@image/icons/buildyear.png" alt="" /></v-col>
              <v-col cols="11">
                <span>Năm xây dựng: <span class="highlight">2020</span> </span></v-col
              >
            </v-row>
            <v-row class="finish content">
              <v-col cols="1"><img src="@image/icons/tiendo.png" alt="" /></v-col>
              <v-col cols="11">
                <span>Tiến độ: <span class="highlight"> Đã hoàn thành</span></span></v-col
              >
            </v-row>
            <v-row class="content">
              <v-btn @click="$router.push('/project/ngoctuoc/detail')"
                >Xem chi tiết >></v-btn
              >
            </v-row>
          </div></v-col
        >
      </v-row>
      <div class="estateOfProject">
        <div class="estate_title">BẤT ĐỘNG SẢN THUỘC DỰ ÁN</div>
        <div class="btn_group">
          <div>
            <v-btn>Cho thuê</v-btn>
            <v-btn color="warning">Mua bán</v-btn>
          </div>
          <div class="content">
            <v-btn @click="$router.push('/project/ngoctuoc')">Xem Tất cả >></v-btn>
          </div>
        </div>
        <div id="img_estate">
          <VueSlickCarousel :arrows="true" v-bind="settings02">
            <div class="estate_img">
              <el-card class="box-card">
                <div slot="header" class="clearfix hover14">
                  <figure><img src="@image/layouts/room_38.svg" alt="" /></figure>
                  <div class="overlay_title">Khu biệt thự đồi Ngọc Tước II</div>
                </div>
                <div class="add_detail">
                  <div class="price">
                    <span class="first_price">6 tỷ</span>
                    <span>60 m2</span>
                  </div>
                  <div class="name">
                    BIỆT THỰ NGHỈ DƯỠNG ĐẲNG CẤP THIẾT KẾ SANG TRỌNG ...
                  </div>
                  <div class="sex d-flex">
                    <v-icon>mdi-near-me</v-icon>
                    <span>Đông</span>
                  </div>
                  <div class="address d-flex">
                    <v-icon>mdi-map-marker</v-icon>
                    <span>Thi Sách - phường 8 - thành phố Vũng Tàu</span>
                  </div>
                </div>
              </el-card>
            </div>
            <div class="estate_img">
              <el-card class="box-card">
                <div slot="header" class="clearfix hover14">
                  <figure><img src="@image/layouts/room_39.svg" alt="" /></figure>
                  <div class="overlay_title">Khu biệt thự đồi Ngọc Tước II</div>
                </div>
                <div class="add_detail">
                  <div class="price">
                    <span class="first_price">6 tỷ</span>
                    <span>60 m2</span>
                  </div>
                  <div class="name">
                    BIỆT THỰ NGHỈ DƯỠNG ĐẲNG CẤP THIẾT KẾ SANG TRỌNG ...
                  </div>
                  <div class="sex d-flex">
                    <v-icon>mdi-near-me</v-icon>
                    <span>Nam</span>
                  </div>
                  <div class="address d-flex">
                    <v-icon>mdi-map-marker</v-icon>
                    <span>Thi Sách - phường 8 - thành phố Vũng Tàu</span>
                  </div>
                </div>
              </el-card>
            </div>
            <div class="estate_img">
              <el-card class="box-card">
                <div slot="header" class="clearfix hover14">
                  <figure><img src="@image/layouts/room_40.svg" alt="" /></figure>
                  <div class="overlay_title">Khu biệt thự đồi Ngọc Tước II</div>
                </div>
                <div class="add_detail">
                  <div class="price">
                    <span class="first_price">6 tỷ</span>
                    <span>60 m2</span>
                  </div>
                  <div class="name">
                    BIỆT THỰ NGHỈ DƯỠNG ĐẲNG CẤP THIẾT KẾ SANG TRỌNG ...
                  </div>
                  <div class="sex d-flex">
                    <v-icon>mdi-near-me</v-icon>
                    <span>Nam</span>
                  </div>
                  <div class="address d-flex">
                    <v-icon>mdi-map-marker</v-icon>
                    <span>Thi Sách - phường 8 - thành phố Vũng Tàu</span>
                  </div>
                </div>
              </el-card>
            </div>
            <div class="estate_img">
              <el-card class="box-card">
                <div slot="header" class="clearfix hover14">
                  <figure><img src="@image/layouts/room_41.svg" alt="" /></figure>
                  <div class="overlay_title">Khu biệt thự đồi Ngọc Tước II</div>
                </div>
                <div class="add_detail">
                  <div class="price">
                    <span class="first_price">6 tỷ</span>
                    <span>60 m2</span>
                  </div>
                  <div class="name">
                    BIỆT THỰ NGHỈ DƯỠNG ĐẲNG CẤP THIẾT KẾ SANG TRỌNG ...
                  </div>
                  <div class="sex d-flex">
                    <v-icon>mdi-near-me</v-icon>
                    <span>Nam</span>
                  </div>
                  <div class="address d-flex">
                    <v-icon>mdi-map-marker</v-icon>
                    <span>Thi Sách - phường 8 - thành phố Vũng Tàu</span>
                  </div>
                </div>
              </el-card>
            </div>
            <div class="estate_img">
              <el-card class="box-card">
                <div slot="header" class="clearfix hover14">
                  <figure><img src="@image/layouts/room_42.svg" alt="" /></figure>
                  <div class="overlay_title">Khu biệt thự đồi Ngọc Tước II</div>
                </div>
                <div class="add_detail">
                  <div class="price">
                    <span class="first_price">6 tỷ</span>
                    <span>60 m2</span>
                  </div>
                  <div class="name">
                    BIỆT THỰ NGHỈ DƯỠNG ĐẲNG CẤP THIẾT KẾ SANG TRỌNG ...
                  </div>
                  <div class="sex d-flex">
                    <v-icon>mdi-near-me</v-icon>
                    <span>Nam</span>
                  </div>
                  <div class="address d-flex">
                    <v-icon>mdi-map-marker</v-icon>
                    <span>Thi Sách - phường 8 - thành phố Vũng Tàu</span>
                  </div>
                </div>
              </el-card>
            </div>
            <!-- <div class="estate_img">
              <el-card class="box-card">
                <div slot="header" class="clearfix hover14">
                  <figure><img src="@image/layouts/room_07.png" alt="" /></figure>
                  <div class="overlay_title">Khu biệt thự đồi Ngọc Tước II</div>
                </div>
                <div class="add_detail">
                  <div class="price">
                    <span class="first_price">6 tỷ</span>
                    <span>60 m2</span>
                  </div>
                  <div class="name">LOREM IPSUM AMET SIT DOT</div>
                  <div class="sex d-flex">
                    <v-icon>mdi-near-me</v-icon>
                    <span>Nam</span>
                  </div>
                  <div class="address d-flex">
                    <v-icon>mdi-map-marker</v-icon>
                    <span>Nguyễn Hữu Cảnh</span>
                  </div>
                </div>
              </el-card>
            </div> -->
          </VueSlickCarousel>
        </div>
      </div>
      <!-- <v-divider></v-divider> -->
      <!-- <div class="text-center">
        <v-pagination v-model="page" :length="6" color="warning"></v-pagination>
      </div> -->

      <div class="more_info">
        <v-btn>Xem thêm thông tin <v-icon>mdi-chevron-double-down</v-icon></v-btn>
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
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import SearchProject from "@component/tools/search-project";
export default {
  components: {
    Services,
    Footer,
    VueSlickCarousel,
    SearchProject,
  },
  data() {
    return {
      isActive: false,
      settings: {
        dots: false,
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: `<v-btn>Số 1</v-btn>`,
        nextArrow: `<button>Số 2</button>`,
      },
      settings02: {
        dots: false,
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: `<v-btn>Số 1</v-btn>`,
        nextArrow: `<button>Số 2</button>`,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.search_project {
  margin-top: 150px;
  padding: 0 10%;
  .search_link {
    font-size: 18px;
    margin-bottom: 15px;
  }
  .selection {
    justify-content: space-between;
  }
  .filter_content {
    width: 90%;
    margin: 0 auto;
    margin-bottom: 40px;
  }
}
.footer {
  margin-top: -40px !important;
}
.estate_img {
  width: 25%;
  padding: 20px;
  img {
    width: 100%;
    height: 80%;
    display: block;
  }
  .add_detail {
    img {
      width: 15px;
      height: 15px;
    }
    .price {
      font-weight: bold;
      font-size: 24px;
      line-height: 24px;
      color: #fbad18;
    }
    .name {
      font-weight: 500;
      font-size: 16px;
      line-height: 40px;
      color: #000000;
      text-decoration: none;
      &:hover {
        color: $color-orange-light;
        // text-decoration: ;
        transition: 0.5s;
      }
    }
    .quymo,
    .contractor,
    .address {
      align-items: center;
      margin-bottom: 12px;
      img {
        margin-right: 15px;
      }
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      color: #000000;
    }
  }
  .clearfix {
    position: relative;
    .overlay_text {
      position: absolute;
      background: #fdd27f;
      border-radius: 4px;
      width: 120px;
      height: 25px;
      left: 19px;
      bottom: -14px;
      font-weight: 500;
      font-size: 12px;
      line-height: 24px;
      color: $color-black-02;
      text-align: center;
    }
    .overlay_title {
      position: absolute;
      background: #fdd27f;
      border-radius: 4px;
      // width: 180px;
      padding: 0 15px;
      height: 25px;
      left: 19px;
      bottom: -14px;
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
      color: $color-black-02;
      text-align: center;
    }
  }
}
.special_project {
  margin: 30px 0;
  .content_left {
    img {
      width: 96%;
    }
  }
  .highlight {
    font-weight: 700;
  }
  .name {
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    color: #000000;
    margin-bottom: 12px;
  }
  .content {
    margin-bottom: -30px;
    .v-btn {
      background-color: $color-orange-light;
      color: $color-black-02;
      text-transform: capitalize;
      margin-top: 20px;
      box-shadow: none;
      height: 32px;
      font-size: 12px;
    }
  }
  .special_content {
    .address {
      img {
        width: 12px;
      }
    }
    .finish {
      img {
        width: 20px;
      }
    }
    img {
      margin-right: 20px;
    }
  }
}

.estateOfProject {
  .estate_title {
    font-weight: 500;
    font-size: 24px;
    line-height: 24px;
    color: #000000;
    margin-bottom: 20px;
    margin-left: 10px;
  }
  .btn_group {
    margin-bottom: 15px;
    margin-left: 10px;
    display: flex;
    justify-content: space-between;
    .v-btn {
      text-transform: capitalize;
      border-radius: 5px;
      box-shadow: none;
    }
    .v-btn:not(.v-btn--round).v-size--default {
      min-height: 30px;
      height: 32px;
    }
    .content {
      .v-btn {
        background-color: $color-orange-light;
        color: $color-black-02;
        font-size: 12px;
      }
    }
  }
  #img_estate {
    // .estate_img {
    //   width: 25%;
    //   padding: 20px;
    img {
      width: 100%;
      height: 80%;
      display: block;
    }
    .add_detail {
      img {
        width: 15px;
        height: 15px;
      }
      .price {
        font-weight: bold;
        font-size: 16px;
        line-height: 30px;
        color: #fbad18;
        .first_price {
          margin-right: 15px;
          padding-right: 15px;
          border-right: 1px solid $color-black-01;
        }
      }
      .name {
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        color: #000000;
        margin: 5px 0 10px;
      }
      .sex {
        .v-icon {
          color: #c4c4c4;
          margin-right: 15px;
        }
        font-size: 16px;
        line-height: 30px;
        margin-bottom: 5px;
      }
      .address {
        .v-icon {
          color: #c4c4c4;
          margin-right: 15px;
        }
        font-size: 16px;
        line-height: 20px;
      }
    }
    .clearfix {
      position: relative;
      .overlay_title {
        position: absolute;
        background: #fdd27f;
        border-radius: 4px;
        // width: 180px;
        padding: 0 15px;
        height: 25px;
        left: 19px;
        bottom: -14px;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        color: $color-black-02;
        text-align: center;
      }
    }
  }
  // }
}
.more_info {
  text-align: center;
  margin-top: 30px;
  .v-btn {
    text-transform: capitalize;
    background-color: $color-orange-light;
    color: #7a7a7a;
  }
}
</style>
