<template>
  <div>
    <div class="input_address_tablet">
      <el-input
        placeholder="Nhập từ khóa tìm kiếm"
        v-model="frmSearch.keyword"
        class="input-with-select"
      >
        <el-select v-model="frmSearch.purpose" slot="prepend" disabled>
          <el-option label="BĐS Bán" :value="0"></el-option>
          <el-option label="BĐS Thuê" :value="1"></el-option>
        </el-select>
      </el-input>
    </div>
    <div class="selection">
      <div class="input_address">
        <el-input
          placeholder="Nhập từ khóa tìm kiếm"
          v-model="frmSearch.keyword"
          class="input-with-select"
        >
          <el-select v-model="frmSearch.purpose" slot="prepend" disabled>
            <el-option label="BĐS Bán" :value="0"></el-option>
            <el-option label="BĐS Thuê" :value="1"></el-option>
          </el-select>
        </el-input>
      </div>
      <div id="house">
        <el-cascader
          :options="dictionaryList.real_estate"
          :props="{ value: 'id', label: 'name', multiple: false }"
          collapse-tags
          clearable
          placeholder="--- Chọn danh mục ---"
          v-model="frmSearch.category"
        >
        </el-cascader>
      </div>
      <div id="square">
        <el-popover placement="bottom">
          <p>Khoảng diện tích (&#13217;)</p>
          <div class="block">
            <el-slider v-model="frmSearch.area" range :marks="areas"> </el-slider>
          </div>
          <div class="input_selectrange">
            <div class="d-flex">
              <span>Từ:</span>
              <el-input-number v-model="frmSearch.area[0]" size="small">
              </el-input-number>
            </div>
            <div class="d-flex">
              <span>Đến:</span>
              <el-input-number v-model="frmSearch.area[1]" size="small">
              </el-input-number>
            </div>
          </div>
          <el-button slot="reference" style="width: 100%">
            <div class="label">Diện tích <i class="el-icon-caret-bottom"></i></div>
            <p>
              {{
                frmSearch.area[1]
                  ? `${frmSearch.area[0]}-${frmSearch.area[1]} &#13217;`
                  : ""
              }}
            </p>
          </el-button>
        </el-popover>
      </div>
      <div id="price">
        <el-popover placement="bottom">
          <p>Khoảng giá (tỷ)</p>
          <div class="block">
            <el-slider v-model="frmSearch.price" range :marks="prices"> </el-slider>
          </div>
          <div class="input_selectrange">
            <div class="d-flex">
              <span>Từ:</span>
              <el-input-number v-model="frmSearch.price[0]" size="small">
              </el-input-number>
            </div>
            <div class="d-flex">
              <span>Đến:</span>
              <el-input-number v-model="frmSearch.price[1]" size="small">
              </el-input-number>
            </div>
          </div>
          <el-button slot="reference" style="width: 100%">
            <div class="label">Giá <i class="el-icon-caret-bottom"></i></div>
            <p>
              {{
                frmSearch.price[1] ? `${frmSearch.price[0]}-${frmSearch.price[1]} tỷ` : ""
              }}
            </p>
          </el-button>
        </el-popover>
      </div>
      <div class="responsive_square_price d-flex">
        <div id="square">
          <el-popover placement="bottom">
            <p>Khoảng diện tích (&#13217;)</p>
            <div class="block">
              <el-slider v-model="frmSearch.area" range :marks="areas"> </el-slider>
            </div>
            <div class="input_selectrange">
              <div class="d-flex">
                <span>Từ:</span>
                <el-input-number v-model="frmSearch.area[0]" size="small">
                </el-input-number>
              </div>
              <div class="d-flex">
                <span>Đến:</span>
                <el-input-number v-model="frmSearch.area[1]" size="small">
                </el-input-number>
              </div>
            </div>
            <el-button slot="reference" style="width: 100%">
              <div class="label">Diện tích <i class="el-icon-caret-bottom"></i></div>
              <p>
                {{
                  frmSearch.area[1]
                    ? `${frmSearch.area[0]}-${frmSearch.area[1]} &#13217;`
                    : ""
                }}
              </p>
            </el-button>
          </el-popover>
        </div>
        <div id="price">
          <el-popover placement="bottom">
            <p>Khoảng giá (tỷ)</p>
            <div class="block">
              <el-slider v-model="frmSearch.price" range :marks="prices"> </el-slider>
            </div>
            <div class="input_selectrange">
              <div class="d-flex">
                <span>Từ:</span>
                <el-input-number v-model="frmSearch.price[0]" size="small">
                </el-input-number>
              </div>
              <div class="d-flex">
                <span>Đến:</span>
                <el-input-number v-model="frmSearch.price[1]" size="small">
                </el-input-number>
              </div>
            </div>
            <el-button slot="reference" style="width: 100%">
              <div class="label">Giá <i class="el-icon-caret-bottom"></i></div>
              <p>
                {{
                  frmSearch.price[1]
                    ? `${frmSearch.price[0]}-${frmSearch.price[1]} tỷ`
                    : ""
                }}
              </p>
            </el-button>
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
        <v-btn color="warning" @click="btnSearch">Tìm Kiếm</v-btn>
      </div>

      <div class="responsive_square_price d-flex">
        <div class="filter">
          <v-btn outlined color="warning" @click="isFilter = !isFilter">
            Lọc thêm
            <img src="@image/icons/filter.png" alt="" />
          </v-btn>
        </div>
        <div class="timkiem">
          <v-btn color="warning" @click="btnSearch">Tìm Kiếm</v-btn>
        </div>
      </div>
    </div>
    <!-- <transition name="el-zoom-in-top">  -->
    <el-card class="filter_content box-card" v-if="isFilter">
      <v-row>
        <v-col cols="6" sm="3" class="options" align="center">
          <div class="select_city">
            <el-cascader
              :options="provinces"
              :props="{ value: 'id', label: 'name', multiple: false }"
              collapse-tags
              clearable
              filterable
              :filter-method="filterOptions"
              empty="Không tìm thấy"
              placeholder="Tỉnh/ Thành phố"
              v-model="frmSearch.province"
              @change="changeProvince"
            >
            </el-cascader>
          </div>
        </v-col>
        <v-col cols="6" sm="3" class="options" align="center">
          <div class="select_district">
            <el-cascader
              :options="districts"
              :props="{ value: 'id', label: 'name', multiple: false }"
              collapse-tags
              clearable
              filterable
              :filter-method="filterOptions"
              empty="Chọn Tỉnh/ Thành phố"
              placeholder="Quận/ Huyện"
              v-model="frmSearch.district"
              @change="changeDistrict"
            >
            </el-cascader>
          </div>
        </v-col>
        <v-col cols="6" sm="3" class="options" align="center">
          <div class="select_ward">
            <el-cascader
              :options="wards"
              :props="{ value: 'id', label: 'name', multiple: false }"
              collapse-tags
              clearable
              filterable
              :filter-method="filterOptions"
              empty="Chọn Quận/ Huyện"
              placeholder="Phường/ Xã"
              v-model="frmSearch.ward"
            >
            </el-cascader>
          </div>
        </v-col>
        <v-col cols="6" sm="3" class="options" align="center">
          <div class="select_stress">
            <el-input placeholder="Nhập tên đường" v-model="frmSearch.street"> </el-input>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" sm="3" class="options" align="center">
          <div class="select_type">
            <el-cascader
              :options="houseType"
              :props="{ value: 'id', label: 'name', multiple: false }"
              collapse-tags
              clearable
              placeholder="Loại Nhà/Đất"
              v-model="frmSearch.houseType"
            >
            </el-cascader>
          </div>
        </v-col>
        <v-col cols="6" sm="3" class="options" align="center">
          <div class="select_direction">
            <el-cascader
              :options="directions"
              :props="{ value: 'id', label: 'name', multiple: false }"
              collapse-tags
              clearable
              placeholder="Hướng"
              v-model="frmSearch.direction"
            >
            </el-cascader>
          </div>
        </v-col>
        <v-col cols="6" sm="3" class="options" align="center">
          <div class="select_bedrooms">
            <el-cascader
              :options="options08"
              :props="{ multiple: true }"
              collapse-tags
              clearable
              placeholder="Số phòng ngủ"
              v-model="frmSearch.bedroom"
            >
            </el-cascader>
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
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  data() {
    return {
      isFilter: false,
      options08: [
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
      tmpCategory: [],
      tmpDistricts: {},
      tmpWards: {},
      frmSearch: {
        purpose: 0,
        category: [],
        keyword: "",
        province: [],
        district: [],
        ward: [],
        street: "",
        typeRealEstate: "",
        houseType: "",
        direction: "",
        bedroom: [],
        area: [0, 0],
        price: [0, 0],
      },
    };
  },
  computed: {
    ...mapState("dictionary", ["dictionaryList"]),
    ...mapState("realestate", ["purpose_array"]),
    ...mapState("search", [
      "provinces",
      "districts",
      "wards",
      "areas",
      "prices",
      "typeRealEstate",
      "directions",
      "houseType",
    ]),
  },
  mounted() {
    let params = this.$route.params.slug;
    if (params != undefined) {
      let _purpose = this.$route.path.split("/");
      if (
        _purpose[2] == this.purpose_array[0].key ||
        _purpose[2] == this.purpose_array[0].slug
      ) {
        this.frmSearch.purpose = 0;
      } else {
        this.frmSearch.purpose = 1;
      }
    }

    this.tmpCategory = this.dictionaryList.real_estate;

    this.getProvince();
    this.getTypeRealEstate();
    this.getDirections();
    this.getPrices();
    this.getAreas();
    this.getHouseType();
    // get query
  },
  methods: {
    ...mapActions("realestate", ["getRealEstate"]),
    ...mapActions("search", [
      "getProvince",
      "getDistrict",
      "getWard",
      "getAreas",
      "getPrices",
      "getTypeRealEstate",
      "getDirections",
      "getHouseType",
    ]),
    ...mapMutations("search", ["setDistrict", "setWard"]),
    filterOptions(node, keyword) {
      return node.label.toLowerCase().includes(keyword.toLowerCase());
    },
    btnSearch() {
      if (this.frmSearch.category.length == 0) {
        alert("Vui lòng chọn danh mục");
        return;
      }

      let url = "/";

      if (this.purpose_array[this.frmSearch.purpose] != undefined) {
        url += "category/";
        url += this.purpose_array[this.frmSearch.purpose].key + "/";
      } else {
        url += "project/";
      }

      let cat = this.tmpCategory.filter((item) => item.id == this.frmSearch.category[0]);
      if (cat.length > 0) {
        url += cat[0].slug + "-" + cat[0].id + "?";
      }

      let query = [];

      if (this.frmSearch.keyword != "") {
        query.push("text_search=" + this.frmSearch.keyword);
      }

      if (this.frmSearch.category.length > 0) {
        query.push("real_estate_type=" + this.frmSearch.category[0]);
      }

      if (this.frmSearch.province.length > 0) {
        query.push("province_id=" + this.frmSearch.province[0]);
      }

      if (this.frmSearch.district.length > 0) {
        query.push("district_id=" + this.frmSearch.district[0]);
      }

      if (this.frmSearch.ward.length > 0) {
        query.push("ward_id=" + this.frmSearch.ward[0]);
      }

      if (this.frmSearch.street != "") {
        query.push("street=" + this.frmSearch.street);
      }

      if (this.frmSearch.area[1] > 0) {
        query.push("min_area=" + this.frmSearch.area[0]);
        query.push("max_area=" + this.frmSearch.area[1]);
      }

      if (this.frmSearch.price[1] > 0) {
        query.push("min_price=" + this.frmSearch.price[0]);
        query.push("max_price=" + this.frmSearch.price[1]);
      }

      if (this.frmSearch.houseType.length > 0) {
        query.push("house_type=" + this.frmSearch.houseType[0]);
      }

      if (this.frmSearch.direction.length > 0) {
        query.push("directions=" + this.frmSearch.direction[0]);
      }

      if (this.frmSearch.bedroom.length > 0) {
        let bedroom = this.frmSearch.bedroom.map((item) => item[0]);
        query.push("bedroom=" + bedroom.join(","));
      }

      url += query.join("&");

      this.$router.push(url);
    },
    async changeProvince(value) {
      this.frmSearch.district = [];
      this.setDistrict([]);
      if (value.length > 0) {
        if (this.tmpDistricts[value[0]] == undefined) {
          let res = await this.getDistrict(value[0]);
          this.tmpDistricts[value[0]] = res.results;
        } else {
          this.setDistrict(this.tmpDistricts[value[0]]);
        }
      }
    },
    async changeDistrict(value) {
      this.frmSearch.ward = [];
      this.setWard([]);
      if (value.length > 0) {
        if (this.tmpWards[value[0]] == undefined) {
          let res = await this.getWard(value[0]);
          this.tmpWards[value[0]] = res.results;
        } else {
          this.setWard(this.tmpWards[value[0]]);
        }
      }
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
  .el-card__body {
    padding: 5px !important;
  }
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
  .input_address_tablet {
    display: flex;
    justify-content: center;
  }
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
  .options {
    padding: 6px !important;
  }
}
</style>
