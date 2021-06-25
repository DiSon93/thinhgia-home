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
      <div id="rent">
        <v-select
          :items="items"
          placeholder="Cho thuê"
          solo
          filled
          multiple
          chips
        ></v-select>
      </div>

      <div id="price">
        <el-popover placement="bottom" width="360" v-model="visible02">
          <p>Khoảng giá(tỷ)</p>
          <div>
            <el-slider v-model="value02" range :marks="marks02" :max="15"> </el-slider>
          </div>
          <el-button slot="reference"
            >Khoảng giá <i class="el-icon-caret-bottom"></i
          ></el-button>
        </el-popover>
      </div>
      <div id="proccess">
        <v-select
          :items="items"
          placeholder="Tiến độ"
          solo
          filled
          multiple
          chips
        ></v-select>
        <!-- <el-popover placement="bottom" width="360" v-model="visible03">
          <p>Tiến độ</p>
          <div>
            <el-slider :marks="marks03" v-model="value03" :step="10" show-stops>
            </el-slider>
          </div>
          <el-button slot="reference"
            >Tiến độ <i class="el-icon-caret-bottom"></i
          ></el-button>
        </el-popover> -->
      </div>
      <div id="built_year">
        <v-select
          :items="items"
          placeholder="Năm XD"
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
        <v-col cols="3" class="options" align="center">
          <div class="select_city">
            <!-- <v-select
              v-model="e2"
              :items="items01"
              placeholder="Tỉnh/Thành phố"
              solo
              filled
              multiple
              chips
            ></v-select> -->
            <el-cascader
              :options="options02"
              :props="props"
              collapse-tags
              clearable
              placeholder="Tỉnh/Thành phố"
            ></el-cascader>
          </div>
        </v-col>
        <v-col cols="3" class="options" align="center">
          <div class="select_district">
            <!-- <v-select
              v-model="e3"
              :items="items02"
              placeholder="Quận/Huyện"
              solo
              filled
              multiple
              chips
            ></v-select> -->
            <el-cascader
              :options="options03"
              :props="props"
              collapse-tags
              clearable
              placeholder="Quận/Huyện"
            ></el-cascader>
          </div>
        </v-col>
        <v-col cols="3" class="options" align="center">
          <div class="select_square">
            <!-- <v-select
              v-model="e4"
              :items="items03"
              placeholder="Diện tích"
              solo
              filled
              multiple
              chips
            ></v-select> -->
            <el-cascader
              :options="options04"
              :props="props"
              collapse-tags
              clearable
              placeholder="Diện tích"
            ></el-cascader>
          </div>
        </v-col>
        <v-col cols="3" class="options" align="center">
          <div class="select_price">
            <!-- <v-select
              v-model="e6"
              :items="items04"
              placeholder="Khoảng giá"
              solo
              filled
              multiple
              chips
            ></v-select> -->
            <el-cascader
              :options="options05"
              :props="props"
              collapse-tags
              clearable
              placeholder="Khoảng giá"
            ></el-cascader>
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
          <el-button> Tất cả </el-button>
          <el-button> 1 </el-button>
          <el-button> 2 </el-button>
          <el-button> 3 </el-button>
          <el-button> 4 </el-button>
          <el-button> 5+ </el-button>
        </v-col>
        <v-col cols="6" class="direction">
          <el-button> Tất cả </el-button>
          <el-button> Đông </el-button>
          <el-button> Tây </el-button>
          <el-button> Nam </el-button>
          <el-button> Bắc </el-button>
          <el-button> Đông Bắc </el-button>
          <el-button> Tây Bắc </el-button>
          <el-button> Đông Nam </el-button>
          <el-button> Tây Nam </el-button>
        </v-col>
      </v-row>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFilter: false,
      page: 1,
      e1: [],
      e2: [],
      e3: [],
      e4: [],
      e5: [],
      e6: [],
      e7: [],
      input3: "",
      select: "3",
      items: [],
      props: { multiple: true },
      options: [
        {
          value: 1,
          label: "Tất cả",
        },
        {
          value: 14,
          label: "Căn hộ/Chung cư",
        },
        {
          value: 23,
          label: "Nhà ở riêng lẻ",
        },
        {
          value: 24,
          label: "Nhà mặt tiền",
        },
        {
          value: 25,
          label: "Biệt thự-Villa",
        },
        {
          value: 26,
          label: "Nhà nghỉ/Khách sạn",
        },
        {
          value: 27,
          label: "Phòng trọ",
        },
        {
          value: 28,
          label: "Kho xưởng",
        },
        {
          value: 29,
          label: "Trang trại",
        },
        {
          value: 30,
          label: "Loại khác",
        },
      ],
      options02: [
        {
          value: 1,
          label: "TP. Hồ Chí Minh",
        },
        {
          value: 14,
          label: "Hà Nội",
        },
        {
          value: 23,
          label: "Đà Nẵng",
        },
        {
          value: 24,
          label: "Vũng Tàu",
        },
        {
          value: 25,
          label: "Bến Tre",
        },
        {
          value: 26,
          label: "Long An",
        },
        {
          value: 27,
          label: "Tiền Giang",
        },
        {
          value: 28,
          label: "Quảng Nam",
        },
        {
          value: 29,
          label: "Quảng Ngãi",
        },
        {
          value: 30,
          label: "Bình Thuận",
        },
      ],
      options03: [
        {
          value: 1,
          label: "Quận 1",
        },
        {
          value: 14,
          label: "Quận 2",
        },
        {
          value: 23,
          label: "Quận 3",
        },
        {
          value: 11,
          label: "Quận 4",
        },
        {
          value: 12,
          label: "Quận 5",
        },
        {
          value: 13,
          label: "Quận 6",
        },
        {
          value: 14,
          label: "Quận 7",
        },
        {
          value: 24,
          label: "Quận Bình Thạnh",
        },
        {
          value: 25,
          label: "Quận Thủ Đức",
        },
        {
          value: 26,
          label: "Quận Bình Tân",
        },
        {
          value: 27,
          label: "Quận Gò Vấp",
        },
        {
          value: 28,
          label: "Quận Tân Phú",
        },
        {
          value: 29,
          label: "Quận Phú Nhuận",
        },
        {
          value: 30,
          label: "Quận Tân Bình",
        },
      ],
      options04: [
        {
          value: 1,
          label: "0 - 10m2",
        },
        {
          value: 14,
          label: "0 - 20m2",
        },
        {
          value: 23,
          label: "0 - 30m2",
        },
        {
          value: 24,
          label: "0 - 40m2",
        },
        {
          value: 25,
          label: "0 - 50m2",
        },
        {
          value: 26,
          label: "50 - 60m2",
        },
        {
          value: 27,
          label: "50 - 70m2",
        },
        {
          value: 28,
          label: "50 - 100m2",
        },
        {
          value: 29,
          label: "100 - 200m2",
        },
        {
          value: 30,
          label: "Trên 200m2",
        },
      ],
      options05: [
        {
          value: 1,
          label: "0 - 10triệu",
        },
        {
          value: 14,
          label: "0 - 20triệu",
        },
        {
          value: 23,
          label: "20 - 50triệu",
        },
        {
          value: 24,
          label: "50 - 100triệu",
        },
        {
          value: 25,
          label: "100 - 150triệu",
        },
        {
          value: 26,
          label: "100 - 500triệu",
        },
        {
          value: 27,
          label: "500 - 1tỷ",
        },
        {
          value: 28,
          label: "1 - 2tỷ",
        },
        {
          value: 29,
          label: "2 - 10tỷ",
        },
        {
          value: 30,
          label: "Trên 10tỷ",
        },
      ],
      visible02: false,
      visible03: false,
      value02: [0, 10],
      value03: 0,
      marks02: {
        0: "0",
        3: "3",
        6: "6",
        9: "9",
        12: "12",
        15: "15+",
      },
      marks03: {
        0: "Đã hoàn thành",
        1: "Đang hoàn thành",
        2: "Chưa hoàn thành",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.selection {
  display: flex;
  justify-content: space-between;
}
.filter_content {
  width: 85%;
  margin: 0 auto;
}
.filter_title {
  margin-bottom: 10px;
}
.bedrooms,
.direction {
  .el-button {
    background-color: #f5f5f5;
    font-size: 14px;
    border: 1px solid transparent;
    margin-top: 10px;
    &:focus {
      background-color: $color-white;
      border: 1px solid $color-orange;
    }
  }
}
</style>
