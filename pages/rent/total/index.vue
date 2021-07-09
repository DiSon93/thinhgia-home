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
      <div class="search_rent">
        <SearchTool />
      </div>
      <v-row class="rent_total">
        <v-col cols="6" sm="4" lg="3">
          <router-link to="/rent/total/chungcu">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <img src="@image/layouts/total_01.svg" alt="" />
              </div>
              <div class="text item">CĂN HỘ -CHUNG CƯ</div>
            </el-card>
          </router-link>
        </v-col>
        <v-col cols="6" sm="4" lg="3">
          <router-link to="/rent/total/nhariengle">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <img src="@image/layouts/total_02.svg" alt="" />
              </div>
              <div class="text item">NHÀ Ở RIÊNG LẺ</div>
            </el-card>
          </router-link>
        </v-col>
        <v-col cols="6" sm="4" lg="3">
          <router-link to="/rent/total/nhamattien">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <img src="@image/layouts/total_03.svg" alt="" />
              </div>
              <div class="text item">NHÀ MẶT TIỀN</div>
            </el-card>
          </router-link>
        </v-col>
        <v-col cols="6" sm="4" lg="3">
          <router-link to="/rent/total/bietthu">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <img src="@image/layouts/total_04.svg" alt="" />
              </div>
              <div class="text item">BIỆT THỰ - VILLA</div>
            </el-card>
          </router-link>
        </v-col>
        <v-col cols="6" sm="4" lg="3">
          <router-link to="/rent/total/nhanghi">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <img src="@image/layouts/total_05.svg" alt="" />
              </div>
              <div class="text item">NHÀ NGHỈ - KHÁCH SẠN</div>
            </el-card>
          </router-link>
        </v-col>
        <v-col cols="6" sm="4" lg="3">
          <router-link to="/rent/total/phongtro">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <img src="@image/layouts/total_06.svg" alt="" />
              </div>
              <div class="text item">PHÒNG TRỌ</div>
            </el-card>
          </router-link>
        </v-col>
        <v-col cols="6" sm="4" lg="3">
          <router-link to="/rent/total/khoxuong">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <img src="@image/layouts/total_07.svg" alt="" />
              </div>
              <div class="text item">KHO XƯỞNG</div>
            </el-card>
          </router-link>
        </v-col>
        <v-col cols="6" sm="4" lg="3">
          <router-link to="/rent/total/trangtrai">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <img src="@image/layouts/total_08.svg" alt="" />
              </div>
              <div class="text item">TRANG TRẠI</div>
            </el-card>
          </router-link>
        </v-col>
        <v-col cols="6" sm="4" lg="3">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <img src="@image/layouts/total_09.svg" alt="" />
            </div>
            <div class="text item">LOẠI KHÁC</div>
          </el-card>
        </v-col>
      </v-row>
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
import SearchTool from "@component/tools/search-tool";
export default {
  components: {
    Services,
    Footer,
    SearchTool,
  },
  data() {
    return {
      isActive: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.rent_total,
.search_rent {
  margin: 15px 0 0 0;
  padding: 0 10%;
  width: 100%;

  img {
    width: 100%;
    display: block;
  }
  .item {
    text-align: center;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    color: #727272;
  }
}
.footer {
  margin-top: -40px !important;
}
@media screen and (max-width: 1250px) {
  .rent_total,
  .search_rent {
    padding: 0 5%;
  }
}
@media screen and (max-width: 600px) {
  .search_rent {
    margin-top: 50px;
  }
  .col-sm-4 {
    padding: 6px;
  }
  .rent_total {
    .item {
      font-size: 16px;
    }
  }
}
</style>
