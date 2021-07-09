<template>
  <div>
    <div class="selection">
      <div id="project_type_tablet">
        <el-cascader
          :options="options"
          :props="props"
          collapse-tags
          clearable
          placeholder="Loại Dự án"
        ></el-cascader>
      </div>
    </div>

    <div class="selection d-flex">
      <div id="project_type">
        <el-cascader
          :options="options"
          :props="props"
          collapse-tags
          clearable
          placeholder="Loại Dự án"
        ></el-cascader>
      </div>
      <div id="rent">
        <el-cascader
          :options="options08"
          :props="{ checkStrictly: true }"
          collapse-tags
          clearable
          placeholder="Cho thuê"
        ></el-cascader>
      </div>

      <div id="price">
        <el-popover placement="bottom" width="420" v-model="visible02">
          <p>Khoảng giá(tỷ)</p>
          <div class="block">
            <el-slider
              v-model="value02"
              range
              :marks="marks02"
              :max="15"
              @change="numberChange02"
            >
            </el-slider>
          </div>
          <div class="input_selectrange">
            <div class="d-flex">
              <span>Từ:</span>
              <el-input-number
                @change="numberChange02"
                v-model="valueNew02[0]"
                size="small"
              ></el-input-number>
            </div>
            <div class="d-flex">
              <span>Đến:</span>
              <el-input-number
                @change="numberChange02"
                v-model="valueNew02[1]"
                size="small"
              ></el-input-number>
            </div>
          </div>
          <el-button slot="reference">
            <p v-if="isPrice">Khoảng giá</p>
            {{ answer02 }} <i class="el-icon-caret-bottom"></i
          ></el-button>
        </el-popover>
      </div>
      <div class="responsive_select">
        <div id="rent">
          <!-- <v-select
            :items="items"
            placeholder="Cho thuê"
            solo
            filled
            multiple
            chips
          ></v-select> -->
          <el-cascader
            :options="options08"
            :props="{ checkStrictly: true }"
            collapse-tags
            clearable
            placeholder="Cho thuê"
          ></el-cascader>
        </div>

        <div id="price">
          <el-popover placement="bottom" width="350" v-model="visible03">
            <p>Khoảng giá(tỷ)</p>
            <div class="block">
              <el-slider
                v-model="value02"
                range
                :marks="marks02"
                :max="15"
                @change="numberChange02"
              >
              </el-slider>
            </div>
            <div class="input_selectrange">
              <div class="d-flex">
                <span>Từ:</span>
                <el-input-number
                  @change="numberChange02"
                  v-model="valueNew02[0]"
                  size="small"
                ></el-input-number>
              </div>
              <div class="d-flex">
                <span>Đến:</span>
                <el-input-number
                  @change="numberChange02"
                  v-model="valueNew02[1]"
                  size="small"
                ></el-input-number>
              </div>
            </div>
            <div style="text-align: right" class="confirm">
              <el-button size="mini" type="text" @click="visible03 = false"
                >Xác nhận</el-button
              >
            </div>
            <el-button slot="reference">
              <p v-if="isPrice">Khoảng giá</p>
              {{ answer02 }} <i class="el-icon-caret-bottom"></i
            ></el-button>
          </el-popover>
        </div>
      </div>
      <div id="proccess">
        <el-cascader
          :options="options09"
          :props="{ checkStrictly: true }"
          collapse-tags
          clearable
          placeholder="Tiến độ"
        ></el-cascader>
        <!-- <v-select
          :items="items"
          placeholder="Tiến độ"
          solo
          filled
          multiple
          chips
        ></v-select> -->
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
        <!-- <v-select
          :items="items"
          placeholder="Năm XD"
          solo
          filled
          multiple
          chips
        ></v-select> -->
        <el-cascader
          :options="options10"
          :props="{ checkStrictly: true }"
          collapse-tags
          clearable
          placeholder="Năm XD"
        ></el-cascader>
      </div>
      <div class="responsive_select">
        <div id="proccess">
          <el-cascader
            :options="options09"
            :props="{ checkStrictly: true }"
            collapse-tags
            clearable
            placeholder="Tiến độ"
          ></el-cascader>
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
          <el-cascader
            :options="options10"
            :props="{ checkStrictly: true }"
            collapse-tags
            clearable
            placeholder="Năm XD"
          ></el-cascader>
        </div>
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
      <div class="responsive_select">
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
    </div>
    <!-- <transition name="el-zoom-in-top"> -->
    <el-card class="filter_content box-card" v-if="isFilter">
      <v-row>
        <v-col cols="6" sm="3" class="options" align="center">
          <div class="select_city">
            <el-cascader
              :options="options02"
              :props="props"
              collapse-tags
              clearable
              placeholder="Tỉnh/Thành phố"
            ></el-cascader>
          </div>
        </v-col>
        <v-col cols="6" sm="3" class="options" align="center">
          <div class="select_district">
            <el-cascader
              :options="options03"
              :props="props"
              collapse-tags
              clearable
              placeholder="Quận/Huyện"
            ></el-cascader>
          </div>
        </v-col>
        <v-col cols="6" sm="3" class="options" align="center">
          <div class="select_ward">
            <el-cascader
              :options="options04"
              :props="props"
              collapse-tags
              clearable
              placeholder="Phường/Xã"
            ></el-cascader>
          </div>
        </v-col>
        <v-col cols="6" sm="3" class="options" align="center">
          <div class="select_stress">
            <el-cascader
              :options="options05"
              :props="props"
              collapse-tags
              clearable
              placeholder="Đường phố"
              multiple
            ></el-cascader>
          </div>
        </v-col>
      </v-row>
      <v-row> </v-row>
      <v-row>
        <v-col cols="6" sm="3" class="options" align="center">
          <div class="select_type">
            <el-cascader
              :options="options06"
              :props="{ checkStrictly: true }"
              collapse-tags
              clearable
              placeholder="Loại Nhà/Đất"
            ></el-cascader>
          </div>
        </v-col>
        <v-col cols="6" sm="3" class="options" align="center">
          <div class="select_direction">
            <el-cascader
              :options="options07"
              :props="{ checkStrictly: true }"
              collapse-tags
              clearable
              placeholder="Hướng"
            ></el-cascader>
          </div>
        </v-col>
        <v-col cols="6" sm="3" class="options" align="center">
          <div class="select_bedrooms">
            <el-cascader
              :options="options11"
              :props="props"
              collapse-tags
              clearable
              multiple
              placeholder="Số phòng ngủ"
            ></el-cascader>
          </div>
        </v-col>
        <!-- <v-col cols="12" sm="6" class="bedrooms">
          <el-button> Tất cả </el-button>
          <el-button> 1 </el-button>
          <el-button> 2 </el-button>
          <el-button> 3 </el-button>
          <el-button> 4 </el-button>
          <el-button> 5+ </el-button>
        </v-col> -->
        <!-- </el-slider> -->
      </v-row>
    </el-card>
    <!-- </transition> -->
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
          label: "Nhà liền kề & Biệt thự",
        },
        {
          value: 24,
          label: "Condotel",
        },
        {
          value: 25,
          label: "Đất ở",
        },
        {
          value: 26,
          label: "Shop thương mại",
        },
        {
          value: 27,
          label: "Khu công nghiệp",
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
          label: "Bà Rịa Vũng Tàu",
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
          label: "Phường Bình Phú",
        },
        {
          value: 14,
          label: "Phường An Lạc",
        },
        {
          value: 23,
          label: "Phường Bình Hòa",
        },
        {
          value: 24,
          label: "Phường Mộc Thủy",
        },
        {
          value: 25,
          label: "Phường Tân Tạo",
        },
        {
          value: 26,
          label: "Phường Tân Phú",
        },
        {
          value: 27,
          label: "Phường Tân Thuận",
        },
        {
          value: 28,
          label: "Phường Đông Du",
        },
        {
          value: 29,
          label: "Phường An Ninh",
        },
        {
          value: 30,
          label: "Phường An Trứ",
        },
      ],
      options05: [
        {
          value: 1,
          label: "Nguyễn Cư Trinh",
        },
        {
          value: 14,
          label: "Trần Hưng Đạo",
        },
        {
          value: 23,
          label: "QL1A",
        },
        {
          value: 24,
          label: "QL13",
        },
        {
          value: 25,
          label: "Nguyễn Thái Học",
        },
        {
          value: 26,
          label: "Hồ Ngọc Lãm",
        },
        {
          value: 27,
          label: "Nguyễn Thị Minh Khai",
        },
        {
          value: 28,
          label: "Hùng Vương",
        },
        {
          value: 29,
          label: "Đinh Bộ Lĩnh",
        },
        {
          value: 30,
          label: "Ngô Tất Tố",
        },
      ],
      options06: [
        {
          value: 1,
          label: "Nhà",
        },
        {
          value: 14,
          label: "Đất",
        },
      ],
      options07: [
        {
          value: 1,
          label: "Tất cả",
        },
        {
          value: 2,
          label: "Đông",
        },
        {
          value: 3,
          label: "Tây",
        },
        {
          value: 4,
          label: "Nam",
        },
        {
          value: 5,
          label: "Bắc",
        },
        {
          value: 6,
          label: "Đông Bắc",
        },
        {
          value: 7,
          label: "Tây Bắc",
        },
        {
          value: 8,
          label: "Đông Nam",
        },
        {
          value: 9,
          label: "Tây Nam",
        },
      ],
      options08: [
        {
          value: 1,
          label: "Cho thuê",
        },
        {
          value: 2,
          label: "Mua bán",
        },
      ],
      options09: [
        {
          value: 1,
          label: "Tất cả",
        },
        {
          value: 2,
          label: "Sắp mở bán",
        },
        {
          value: 3,
          label: "Đã hoàn thành",
        },
      ],
      options10: [
        {
          value: 0,
          label: "2023",
        },
        {
          value: 1,
          label: "2022",
        },
        {
          value: 2,
          label: "2021",
        },
        {
          value: 3,
          label: "2020",
        },
        {
          value: 4,
          label: "2019",
        },
        {
          value: 5,
          label: "2018",
        },
        {
          value: 6,
          label: "2017",
        },
        {
          value: 7,
          label: "2016",
        },
        {
          value: 8,
          label: "2015",
        },
      ],
      options11: [
        {
          value: 0,
          label: "Tất cả",
        },
        {
          value: 1,
          label: "1",
        },
        {
          value: 2,
          label: "2",
        },
        {
          value: 3,
          label: "3",
        },
        {
          value: 4,
          label: "4",
        },
        {
          value: 5,
          label: "5+",
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
      answer02: "Khoảng giá",
      isPrice: false,
    };
  },
  computed: {
    valueNew02() {
      return JSON.parse(JSON.stringify(this.value02));
    },
  },
  methods: {
    numberChange02() {
      this.value02 = this.valueNew02;
      this.answer02 = `${this.valueNew02[0]}-${this.valueNew02[1]} tỷ`;
      this.isPrice = true;
    },
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
  margin-top: 10px;
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

.responsive_square_price {
  display: none !important;
}
#project_type_tablet {
  display: none;
}
.responsive_select {
  display: none;
}
@media screen and (max-width: 1250px) {
  #project_type_tablet {
    display: block !important;
    margin-bottom: 15px;
  }
  #project_type {
    display: none;
  }
  .filter_content {
    width: 92%;
  }
}
@media screen and (max-width: 960px) {
}
@media screen and (max-width: 600px) {
  #project_type_tablet {
    text-align: center;
  }
  .selection {
    display: block !important;
  }
  .filter_content {
    width: 96%;
    margin-bottom: 15px;
  }
  .type_of_estate {
    display: none !important;
  }
  .options {
    padding: 6px !important;
  }
  #rent,
  #price,
  #proccess,
  #built_year,
  .filter,
  .timkiem {
    display: none;
  }
  .responsive_select {
    display: block;
    display: flex;
    justify-content: center;
    #rent,
    #price,
    #proccess,
    #built_year,
    .filter,
    .timkiem {
      display: block;
      margin: 0 5px;
    }
  }
}
</style>
