<template>
  <div class="search_sell">
    <div class="search_link">Căn hộ/Chung cư <i class="el-icon-arrow-right"></i> HCM</div>
    <div class="selection d-flex">
      <div>
        <el-input
          placeholder="Nhập địa chỉ tìm kiếm"
          v-model="input3"
          class="input-with-select"
        >
          <el-select v-model="select" slot="prepend" placeholder="Select">
            <el-option label="BĐS Bán" value="1"></el-option>
            <el-option label="BĐS Mua" value="2"></el-option>
            <el-option label="Dự Án" value="3"></el-option>
          </el-select>
        </el-input>
      </div>
      <div id="house">
        <v-select
          :items="items"
          placeholder="Căn hộ/Chung cư"
          solo
          filled
          multiple
          chips
        ></v-select>
      </div>
      <div id="square">
        <v-select
          :items="items"
          placeholder="Diện tích"
          solo
          filled
          multiple
          chips
        ></v-select>
      </div>
      <div id="price">
        <v-select
          :items="items"
          placeholder="Khoảng giá"
          solo
          filled
          multiple
          chips
        ></v-select>
      </div>
      <div class="filter">
        <v-btn outlined color="warning" @click="isFilter = !isFilter">
          Lọc thêm
          <img src="@image/icons/filter.png" alt="" />
        </v-btn>
      </div>
      <div class="timkiem">
        <v-btn color="warning">Tìm Kiếm</v-btn>
      </div>
    </div>
    <el-card class="filter_content box-card" v-if="isFilter">
      <div class="filter_title">Khu vực</div>
      <v-row>
        <v-col cols="3" class="options">
          <div class="select_city">
            <v-select
              v-model="e2"
              :items="items"
              placeholder="Tỉnh/Thành phố"
              solo
              filled
              multiple
              chips
            ></v-select>
          </div>
        </v-col>
        <v-col cols="3" class="options">
          <div class="select_district">
            <v-select
              v-model="e3"
              :items="items"
              placeholder="Quận/Huyện"
              solo
              filled
              multiple
              chips
            ></v-select>
          </div>
        </v-col>
        <v-col cols="3" class="options">
          <div class="select_square">
            <v-select
              v-model="e4"
              :items="items"
              placeholder="Diện tích"
              solo
              filled
              multiple
              chips
            ></v-select>
          </div>
        </v-col>
        <v-col cols="3" class="options">
          <div class="select_price">
            <v-select
              v-model="e6"
              :items="items"
              placeholder="Khoảng giá"
              solo
              filled
              multiple
              chips
            ></v-select>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" class="">
          <div>Số phòng ngủ</div>
        </v-col>
        <v-col cols="6">
          <div>Hướng</div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" class="bedrooms">
          <v-btn outlined color="warning"> Tất cả </v-btn>
          <v-btn depressed> 1 </v-btn>
          <v-btn depressed> 2 </v-btn>
          <v-btn depressed> 3 </v-btn>
          <v-btn depressed> 4 </v-btn>
          <v-btn depressed> 5+ </v-btn>
        </v-col>
        <v-col cols="6" class="direction">
          <v-btn outlined color="warning"> Tất cả </v-btn>
          <v-btn depressed> Đông </v-btn>
          <v-btn depressed> Tây </v-btn>
          <v-btn depressed> Nam </v-btn>
          <v-btn depressed> Bắc </v-btn>
          <v-btn depressed> Đông Bắc </v-btn>
          <v-btn depressed> Tây Bắc </v-btn>
          <v-btn depressed> Đông Nam </v-btn>
          <v-btn depressed> Tây Nam </v-btn>
        </v-col>
      </v-row>
    </el-card>
    <div class="search_content">
      <div class="search_title">MUA BÁN CHUNG CƯ / CĂN HỘ , TP.HCM</div>
      <div class="note">Có 5324 BĐS được tìm thấy</div>
      <v-row align="center">
        <v-col cols="3">
          <div class="estate_img">
            <el-card class="box-card">
              <div slot="header" class="clearfix hover14">
                <figure><img src="@image/layouts/room_17.png" alt="" /></figure>
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
          </div>
        </v-col>
        <v-col cols="3">
          <div class="estate_img">
            <el-card class="box-card">
              <div slot="header" class="clearfix hover14">
                <figure><img src="@image/layouts/room_16.png" alt="" /></figure>
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
          </div>
        </v-col>
        <v-col cols="3">
          <div class="estate_img">
            <el-card class="box-card">
              <div slot="header" class="clearfix hover14">
                <figure><img src="@image/layouts/room_13.png" alt="" /></figure>
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
          </div>
        </v-col>
        <v-col cols="3">
          <div class="estate_img">
            <el-card class="box-card">
              <div slot="header" class="clearfix hover14">
                <figure><img src="@image/layouts/room_12.png" alt="" /></figure>
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
          </div>
        </v-col>
        <v-col cols="3">
          <div class="estate_img">
            <el-card class="box-card">
              <div slot="header" class="clearfix hover14">
                <figure><img src="@image/layouts/room_11.png" alt="" /></figure>
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
          </div>
        </v-col>
        <v-col cols="3">
          <div class="estate_img">
            <el-card class="box-card">
              <div slot="header" class="clearfix hover14">
                <figure><img src="@image/layouts/room_10.png" alt="" /></figure>
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
          </div>
        </v-col>
        <v-col cols="3">
          <div class="estate_img">
            <el-card class="box-card">
              <div slot="header" class="clearfix hover14">
                <figure><img src="@image/layouts/room_04.png" alt="" /></figure>
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
          </div>
        </v-col>
        <v-col cols="3">
          <div class="estate_img">
            <el-card class="box-card">
              <div slot="header" class="clearfix hover14">
                <figure><img src="@image/layouts/room_08.png" alt="" /></figure>
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
          </div>
        </v-col>
        <v-col cols="3">
          <div class="estate_img">
            <el-card class="box-card">
              <div slot="header" class="clearfix hover14">
                <figure><img src="@image/layouts/room_15.png" alt="" /></figure>
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
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFilter: false,
      e1: [],
      e2: [],
      e3: [],
      e4: [],
      e5: [],
      e6: [],
      e7: [],
      input3: "",
      select: "1",
      states: ["BĐS Mua", "BĐS Bán", "Dự Án"],
      items: [
        "Tất cả",
        "Căn hộ/Chung cư",
        "Nhà ở riêng lẻ",
        "Nhà mặt tiền",
        "Bieeth thự-Villa",
        "Nhà nghỉ-Khách sạn",
        "Phòng trọ",
        "Kho xưởng",
        "Trang trại",
        "Loại khác",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.search_sell {
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
.search_content {
  .search_title {
    font-size: 18px;
    line-height: 18px;
    text-align: left;
    color: $color-black-01;
    font-weight: 700;
  }
  .note {
    font-size: 18px;
    line-height: 18px;
    text-align: left;
    color: $color-black-01;
    margin: 10px 0 20px;
  }
  .col-3 {
    padding: 0;
  }
  .estate_img {
    width: 100%;
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
        line-height: 40px;
        color: #000000;
      }
      .sex {
        .v-icon {
          color: #c4c4c4;
          margin-right: 15px;
        }
        font-size: 16px;
        line-height: 30px;
      }
      .address {
        .v-icon {
          color: #c4c4c4;
          margin-right: 15px;
        }
        font-size: 16px;
        line-height: 30px;
      }
    }
  }
}
</style>
