<template>
  <div>
    <div class="selection d-flex">
      <div>
        <el-input
          placeholder="Nhập địa chỉ tìm kiếm"
          v-model="input3"
          class="input-with-select"
        >
          <el-select v-model="select" slot="prepend" placeholder="Select">
            <el-option label="BĐS Bán" value="1"></el-option>
            <el-option label="BĐS Thuê" value="2"></el-option>
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
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
