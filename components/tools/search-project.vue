<template>
  <div>
    <div class="selection">
      <div id="project_type_tablet">
        <el-cascader
          :options="projects"
          :props="{ value: 'id', label: 'name', multiple: false }"
          collapse-tags
          clearable
          filterable
          :filter-method="filterOptions"
          empty="Không tìm thấy"
          placeholder="Loại dự án"
          v-model="frmSearch.project"
        ></el-cascader>
      </div>
    </div>

    <div class="selection d-flex">
      <div id="project_type">
        <el-cascader
          :options="projects"
          :props="{ value: 'id', label: 'name', multiple: false }"
          collapse-tags
          clearable
          filterable
          :filter-method="filterOptions"
          empty="Không tìm thấy"
          placeholder="Loại dự án"
          v-model="frmSearch.project"
        ></el-cascader>
      </div>
      <!-- <div id="rent">
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
      </div> -->
      <!-- <div class="responsive_select">
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
      </div> -->
      <div id="proccess">
        <el-cascader
          :options="progress"
          :props="{ value: 'id', label: 'name', multiple: false }"
          collapse-tags
          clearable
          filterable
          :filter-method="filterOptions"
          empty="Không tìm thấy"
          placeholder="Tiến độ"
          v-model="frmSearch.progress"
        ></el-cascader>
      </div>
      <!-- <div id="built_year">
        <el-cascader
          :options="options10"
          :props="{ checkStrictly: true }"
          collapse-tags
          clearable
          placeholder="Năm XD"
        ></el-cascader>
      </div> -->
      <div class="responsive_select">
        <div id="proccess">
          <el-cascader
            :options="progress"
            :props="{ value: 'id', label: 'name', multiple: false }"
            collapse-tags
            clearable
            filterable
            :filter-method="filterOptions"
            empty="Không tìm thấy"
            placeholder="Tiến độ"
            v-model="frmSearch.progress"
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
        <!-- <div id="built_year">
          <el-cascader
            :options="options10"
            :props="{ checkStrictly: true }"
            collapse-tags
            clearable
            placeholder="Năm XD"
          ></el-cascader>
        </div> -->
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
      <div class="responsive_select">
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
    <!-- <transition name="el-zoom-in-top"> -->
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
            ></el-cascader>
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
            ></el-cascader>
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
            ></el-cascader>
          </div>
        </v-col>
        <v-col cols="6" sm="3" class="options" align="center">
          <div class="select_stress">
            <el-input placeholder="Nhập tên đường" v-model="frmSearch.street"> </el-input>
          </div>
        </v-col>
      </v-row>
      <!-- <v-row> </v-row> -->
      <!-- <v-row> -->
      <!-- <v-col cols="6" sm="3" class="options" align="center">
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
        </v-col> -->
      <!-- <v-col cols="12" sm="6" class="bedrooms">
          <el-button> Tất cả </el-button>
          <el-button> 1 </el-button>
          <el-button> 2 </el-button>
          <el-button> 3 </el-button>
          <el-button> 4 </el-button>
          <el-button> 5+ </el-button>
        </v-col> -->
      <!-- </el-slider> -->
      <!-- </v-row> -->
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
      tmpCategory: [],
      tmpDistricts: {},
      tmpWards: {},
      frmSearch: {
        project: [],
        progress: [],
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
    valueNew02() {
      return JSON.parse(JSON.stringify(this.value02));
    },
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
      "projects",
      "progress",
    ]),
  },
  mounted() {
    this.getProvince();
    this.getTypeRealEstate();
    this.getDirections();
    this.getPrices();
    this.getAreas();
    this.getHouseType();
    this.getProjectItemType();
    this.getProgressItemType();
  },
  methods: {
    numberChange02() {
      this.value02 = this.valueNew02;
      this.answer02 = `${this.valueNew02[0]}-${this.valueNew02[1]} tỷ`;
      this.isPrice = true;
    },

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
      "getProjectItemType",
      "getProgressItemType",
    ]),
    ...mapMutations("search", ["setDistrict", "setWard"]),
    filterOptions(node, keyword) {
      return node.label.toLowerCase().includes(keyword.toLowerCase());
    },
    btnSearch() {
      if (this.frmSearch.project.length == 0) {
        alert("Vui lòng chọn loại dự án");
        return;
      }

      let url = "";

      // if (this.purpose_array[this.frmSearch.purpose] != undefined) {
      //   url += "category/";
      //   url += this.purpose_array[this.frmSearch.purpose].key + "/";
      // } else {
      //   url += "project/";
      // }
      url += this.$route.path + `-${this.frmSearch.project[0]}?`;
      // let cat = this.tmpCategory.filter((item) => item.id == this.frmSearch.category[0]);
      // if (cat.length > 0) {
      //   url += cat[0].slug + "-" + cat[0].id + "?";
      // }

      let query = [];

      // if (this.frmSearch.keyword != "") {
      //   query.push("text_search=" + this.frmSearch.keyword);
      // }

      if (this.frmSearch.project.length > 0) {
        query.push("type=" + this.frmSearch.project[0]);
      }
      if (this.frmSearch.progress.length > 0) {
        query.push("progress=" + this.frmSearch.progress[0]);
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
        query.push("text_search=" + this.frmSearch.street);
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
