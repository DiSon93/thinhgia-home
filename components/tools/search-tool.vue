<template>
  <div>
    <div class="input_address_tablet">
      <el-input
        placeholder="Nhập địa chỉ tìm kiếm"
        v-model="input3"
        class="input-with-select"
      >
        <el-select v-model="select" slot="prepend" placeholder="Select" disabled>
          <el-option label="BĐS Bán" value="1"></el-option>
          <el-option label="BĐS Thuê" value="2"></el-option>
          <el-option label="Dự Án" value="3"></el-option>
        </el-select>
      </el-input>
    </div>
    <div class="selection">
      <div class="input_address">
        <el-input
          placeholder="Nhập địa chỉ tìm kiếm"
          v-model="input3"
          class="input-with-select"
        >
          <el-select v-model="select" slot="prepend" placeholder="Select" disabled>
            <el-option label="BĐS Bán" value="1"></el-option>
            <el-option label="BĐS Thuê" value="2"></el-option>
            <el-option label="Dự Án" value="3"></el-option>
          </el-select>
        </el-input>
      </div>

      <div id="house">
        <el-cascader
          :options="options"
          :props="props"
          collapse-tags
          clearable
          placeholder="Loại Bất Động Sản"
        ></el-cascader>
      </div>
      <div id="square">
        <el-popover placement="bottom" width="420" v-model="visible">
          <p>Khoảng diện tích (m2)</p>
          <div class="block">
            <el-slider
              v-model="value"
              range
              :marks="marks"
              :max="500"
              @change="numberChange"
            ></el-slider>
          </div>
          <div class="input_selectrange">
            <div class="d-flex">
              <span>Từ:</span>
              <el-input-number
                @change="numberChange"
                v-model="valueNew[0]"
                size="small"
              ></el-input-number>
            </div>
            <div class="d-flex">
              <span>Đến:</span>
              <el-input-number
                @change="numberChange"
                v-model="valueNew[1]"
                size="small"
              ></el-input-number>
            </div>
          </div>
          <el-button slot="reference">
            <p v-if="isQuare">Diện tích</p>
            {{ answer }} <i class="el-icon-caret-bottom"></i
          ></el-button>
        </el-popover>
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
      <div class="responsive_square_price d-flex">
        <div id="square">
          <el-popover placement="bottom" width="350" v-model="visible03">
            <p>Khoảng diện tích (m2)</p>
            <div class="block">
              <el-slider
                v-model="value"
                range
                :marks="marks"
                :max="500"
                @change="numberChange"
              ></el-slider>
            </div>
            <div class="input_selectrange">
              <div class="d-flex">
                <span>Từ:</span>
                <el-input-number
                  @change="numberChange"
                  v-model="valueNew[0]"
                  size="small"
                ></el-input-number>
              </div>
              <div class="d-flex">
                <span>Đến:</span>
                <el-input-number
                  @change="numberChange"
                  v-model="valueNew[1]"
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
              <p v-if="isQuare">Diện tích</p>
              {{ answer }} <i class="el-icon-caret-bottom"></i
            ></el-button>
          </el-popover>
        </div>
        <div id="price">
          <el-popover placement="bottom" width="350" v-model="visible04">
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
              <el-button size="mini" type="text" @click="visible04 = false"
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
      <div class="filter">
        <v-btn outlined color="warning" @click="isFilter = !isFilter">
          Lọc thêm
          <img src="@image/icons/filter.png" alt="" />
        </v-btn>
      </div>
      <div class="timkiem">
        <v-btn color="warning">Tìm Kiếm</v-btn>
      </div>
      <div class="responsive_square_price d-flex">
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
    <!-- <transition name="el-zoom-in-top">  -->
    <el-card class="filter_content box-card" v-if="isFilter">
      <div class="filter_title">Khu vực</div>
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
          <div class="select_square">
            <el-cascader
              :options="options04"
              :props="props"
              collapse-tags
              clearable
              placeholder="Diện tích"
            ></el-cascader>
          </div>
        </v-col>
        <v-col cols="6" sm="3" class="options" align="center">
          <div class="select_price">
            <el-cascader
              :options="options05"
              :props="props"
              collapse-tags
              clearable
              placeholder="Khoảng giá"
              multiple
            ></el-cascader>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <!-- <v-col cols="6" class="">
          <div>Loại Nhà/Đất</div>
        </v-col>
        <v-col cols="6">
          <div>Số phòng ngủ</div>
        </v-col> -->
        <div class="type_of_estate d-flex">
          <div class="items">Loại Nhà/Đất</div>
          <div class="items">Số phòng ngủ</div>
        </div>
      </v-row>
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
        <div class="res_bed">Số phòng ngủ</div>
        <v-col cols="12" sm="6" class="bedrooms">
          <el-button> Tất cả </el-button>
          <el-button> 1 </el-button>
          <el-button> 2 </el-button>
          <el-button> 3 </el-button>
          <el-button> 4 </el-button>
          <el-button> 5+ </el-button>
        </v-col>
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
      value01: 0,
      value: [0, 100],
      value02: [3, 10],
      marks: {
        0: "0",
        100: "100",
        200: "200",
        300: "300",
        400: "400",
        500: "500+",
      },
      marks02: {
        0: "0",
        3: "3",
        6: "6",
        9: "9",
        12: "12",
        15: "15+",
      },
      isFilter: false,
      page: 1,
      e1: [],
      e2: [],
      e3: [],
      e4: [],
      e5: [],
      e6: [],
      e7: [],
      square: [],
      input3: "",
      select: this.$route.path == "/search/sell" ? "1" : "2",
      states: ["BĐS Thuê", "BĐS Bán", "Dự Án"],
      props: { multiple: true },
      items: [],
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
      visible: false,
      visible02: false,
      visible03: false,
      visible04: false,
      answer: "Diện tích",
      isQuare: false,
      answer02: "Khoảng giá",
      isPrice: false,
    };
  },
  computed: {
    valueNew() {
      return JSON.parse(JSON.stringify(this.value));
    },
    valueNew02() {
      return JSON.parse(JSON.stringify(this.value02));
    },
  },
  methods: {
    numberChange() {
      this.value = this.valueNew;
      this.answer = `${this.valueNew[0]}-${this.valueNew[1]} m2`;
      this.isQuare = true;
    },
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
  margin-top: 25px;
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
.res_bed {
  display: none;
}
.type_of_estate {
  width: 100%;
  display: flex;
  .items {
    width: 50%;
    margin-left: 20px;
  }
}
.responsive_square_price {
  display: none !important;
}
.input_address_tablet {
  display: none;
}
@media screen and (max-width: 1250px) {
  .input_address_tablet {
    display: block;
    margin-bottom: 15px;
  }
  .input_address {
    display: none;
  }
  .filter_content {
    width: 92%;
  }
}
@media screen and (max-width: 600px) {
  .selection {
    display: block;
  }
  .responsive_square_price {
    display: block !important;
    display: flex !important;
  }
  .filter_content {
    width: 96%;
  }
  .type_of_estate {
    display: none !important;
  }
  .res_bed {
    display: block;
    margin-left: 15px;
    margin-bottom: -10px;
    margin-top: 5px;
    font-size: 14px;
  }
  .options {
    padding: 6px !important;
  }
  .filter_title {
    font-size: 14px;
  }
}
</style>
