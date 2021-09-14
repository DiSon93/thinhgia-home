<template>
    <v-lazy
        v-model="isActive"
        :options="{ threshold: 0.5 }"
        min-height="500"
        transition="fade-transition"
    >
        <div class="carousel">
            <VueSlickCarousel
                :arrows="false"
                :dots="true"
                class="carousel_img"
                v-bind="settings"
            >
                <img src="@image/layouts/background_01.svg" alt="" />
                <img src="@image/layouts/background_02.svg" alt="" />
                <img src="@image/layouts/background_03.svg" alt="" />
                <img src="@image/layouts/background_04.svg" alt="" />
            </VueSlickCarousel>

            <div class="carousel_title">
                <div class="carousel_options">
                    <v-btn-toggle v-model="frmSearch.purpose" tile color="deep-purple accent-3" group>
                        <v-btn> BĐS Bán </v-btn>
                        <v-btn> BĐS Thuê </v-btn>
                        <v-btn> Dự Án </v-btn>
                    </v-btn-toggle>
                </div>
                
                <div class="high_search">Tìm kiếm nâng cao</div>
                
                <div class="select_options">
                    <v-row>
                        <v-col cols="10" class="options d-flex">
                            <div class="select_house">
                                <el-cascader
                                    :options="tmpCategory"
                                    :props="{ value: 'id', label: 'name', multiple: false }"
                                    collapse-tags
                                    clearable
                                    placeholder="--- Chọn danh mục ---"
                                    v-model="frmSearch.category"
                                >
                                </el-cascader>
                            </div>
                            <div class="input_house">
                                <v-text-field v-model="frmSearch.keyword" placeholder="Nhập địa điểm hoặc từ khóa (Ví dụ: Vinhomes)..."></v-text-field>
                            </div>
                        </v-col>
                        <!-- <v-col cols="7" class="options">
                    
                        </v-col> -->
                        <v-col cols="2" class="options">
                            <div class="btn_search">
                                <v-btn color="warning" dark @click="btnSearch()"> Tìm kiếm </v-btn>
                            </div>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="3" class="options">
                            <div class="select_city">
                                <el-cascader
                                    :options="provinces"
                                    :props="{ value: 'id', label: 'name', multiple: false }"
                                    collapse-tags
                                    clearable
                                    filterable
                                    empty="Không tìm thấy"
                                    placeholder="Tỉnh/ Thành phố"
                                    v-model="frmSearch.province"
                                    @change="changeProvince"
                                >
                                </el-cascader>
                            </div>
                        </v-col>
                        <v-col cols="3" class="options">
                            <div class="select_district">
                                <el-cascader
                                    :options="districts"
                                    :props="{ value: 'id', label: 'name', multiple: false }"
                                    collapse-tags
                                    clearable
                                    filterable
                                    empty="Chọn Tỉnh/ Thành phố"
                                    placeholder="Quận/ Huyện"
                                    v-model="frmSearch.district"
                                >
                                </el-cascader>
                            </div>
                        </v-col>
                        <v-col cols="3" class="options">
                            <div class="select_square">
                                <el-popover placement="bottom">
                                    <p>Khoảng diện tích (m2)</p>
                                    <div class="block">
                                        <el-slider
                                            v-model="frmSearch.area"
                                            range
                                            :marks="areas"
                                        >
                                        </el-slider>
                                    </div>
                                    <div class="input_selectrange">
                                        <div class="d-flex">
                                            <span>Từ:</span>
                                            <el-input-number
                                                v-model="frmSearch.area[0]"
                                                size="small"
                                            >
                                            </el-input-number>
                                        </div>
                                        <div class="d-flex">
                                            <span>Đến:</span>
                                            <el-input-number
                                                v-model="frmSearch.area[1]"
                                                size="small"
                                            >
                                            </el-input-number>
                                        </div>
                                    </div>
                                    <el-button slot="reference" style="width: 100%;">
                                        Diện tích <i class="el-icon-caret-bottom"></i>
                                    </el-button>
                                </el-popover>
                            </div>
                        </v-col>
                        <v-col cols="3" class="options">
                            <div class="select_price">
                                <el-popover placement="bottom">
                                    <p>Khoảng giá (tỷ)</p>
                                    <div class="block">
                                        <el-slider
                                            v-model="frmSearch.price"
                                            range
                                            :marks="prices"
                                        >
                                        </el-slider>
                                    </div>
                                    <div class="input_selectrange">
                                        <div class="d-flex">
                                            <span>Từ:</span>
                                            <el-input-number
                                                v-model="frmSearch.price[0]"
                                                size="small"
                                            >
                                            </el-input-number>
                                        </div>
                                        <div class="d-flex">
                                            <span>Đến:</span>
                                            <el-input-number
                                                v-model="frmSearch.price[1]"
                                                size="small"
                                            >
                                            </el-input-number>
                                        </div>
                                    </div>
                                    <el-button slot="reference" style="width: 100%;">
                                        Giá <i class="el-icon-caret-bottom"></i>
                                    </el-button>
                                </el-popover>
                            </div>
                        </v-col>
                    </v-row>
                </div>
                <div class="select_options_mobile">
                    <v-row>
                        <v-col cols="12">
                            <el-input
                                placeholder="Nhập địa điểm hoặc từ khóa"
                                suffix-icon="el-icon-search"
                                v-model="frmSearch.keyword"
                            >
                            </el-input>
                        </v-col>
                        <v-col cols="6">
                            <el-cascader
                                :options="dictionaryList.real_estate"
                                :props="{ value: 'id', label: 'name', multiple: false }"
                                collapse-tags
                                clearable
                                placeholder="--- Chọn danh mục ---"
                                v-model="frmSearch.category"
                            >
                            </el-cascader>
                        </v-col>
                        <v-col cols="6">
                            <div class="select_square">
                                <el-popover placement="bottom">
                                    <p>Khoảng diện tích (m2)</p>
                                    <div class="block">
                                        <el-slider
                                            v-model="frmSearch.area"
                                            range
                                            :marks="areas"
                                        >
                                        </el-slider>
                                    </div>
                                    <div class="input_selectrange">
                                        <div class="d-flex">
                                            <span>Từ:</span>
                                            <el-input-number
                                                v-model="frmSearch.area[0]"
                                                size="small"
                                            >
                                            </el-input-number>
                                        </div>
                                        <div class="d-flex">
                                            <span>Đến:</span>
                                            <el-input-number
                                                v-model="frmSearch.area[1]"
                                                size="small"
                                            >
                                            </el-input-number>
                                        </div>
                                    </div>
                                    <el-button slot="reference" style="width: 100%;">
                                        Diện tích <i class="el-icon-caret-bottom"></i>
                                    </el-button>
                                </el-popover>
                            </div>
                        </v-col>
                        <v-col cols="6">
                            <div class="select_price">
                                <el-popover placement="bottom">
                                    <p>Khoảng giá (tỷ)</p>
                                    <div class="block">
                                        <el-slider
                                            v-model="frmSearch.price"
                                            range
                                            :marks="prices"
                                        >
                                        </el-slider>
                                    </div>
                                    <div class="input_selectrange">
                                        <div class="d-flex">
                                            <span>Từ:</span>
                                            <el-input-number
                                                v-model="frmSearch.price[0]"
                                                size="small"
                                            >
                                            </el-input-number>
                                        </div>
                                        <div class="d-flex">
                                            <span>Đến:</span>
                                            <el-input-number
                                                v-model="frmSearch.price[1]"
                                                size="small"
                                            >
                                            </el-input-number>
                                        </div>
                                    </div>
                                    <el-button slot="reference" style="width: 100%;">
                                        Giá <i class="el-icon-caret-bottom"></i>
                                    </el-button>
                                </el-popover>
                            </div>
                        </v-col>
                        <v-col cols="6" align="right" class="btn_search">
                            <v-btn color="warning" dark @click="btnSearch()"> Tìm kiếm </v-btn>
                        </v-col>
                    </v-row>
                </div>
            </div>
        </div>
    </v-lazy>
</template>

<script>
    import { mapState, mapActions, mapMutations } from "vuex";
    import VueSlickCarousel from "vue-slick-carousel";
    import "vue-slick-carousel/dist/vue-slick-carousel.css";
    import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

    export default {
        components: { VueSlickCarousel },
        data() {
            return {
                isActive: false,
                settings: {
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 4000,
                    fade: true,
                    speed: 800,
                    swipe: true
                },
                loading: false,
                tmpCategory: [],
                tmpDistricts: {},
                frmSearch: {
                    purpose: 0,
                    category: [],
                    keyword: '',
                    province: [],
                    district: [],
                    area: [0, 0],
                    price: [0, 0]
                }
            }
        },
        watch: {
            'frmSearch.purpose'(n, o) {
                this.frmSearch.category = [];
                if (n == 2) {
                    this.tmpCategory = this.dictionaryList.project;
                } else {
                    this.tmpCategory = this.dictionaryList.real_estate;
                }
            },
            'dictionaryList.real_estate'(n, o) {
                this.tmpCategory = n;
            }
        },
        computed: {
            ...mapState('dictionary', ['dictionaryList']),
            ...mapState('realestate', ['purpose_array']),
            ...mapState('search', ['provinces', 'districts', 'areas', 'prices'])
        },
        mounted() {
            this.tmpCategory = this.dictionaryList.real_estate;
            this.getProvince();
            this.setDistrict([]);
            this.getAreas();
            this.getPrices();
        },
        methods: {
            ...mapActions('search', ['getProvince', 'getDistrict', 'getAreas', 'getPrices']),
            ...mapMutations('search', ['setDistrict']),
            btnSearch() {
                if (this.frmSearch.category.length == 0) {
                    alert("Vui lòng chọn danh mục");
                    return;
                }
                
                let url = '/';
                
                if (this.purpose_array[this.frmSearch.purpose] != undefined) {
                    url+= 'category/';
                    url+= this.purpose_array[this.frmSearch.purpose].key + '/';
                } else {
                    url+= 'project/';
                }

                let cat = this.tmpCategory.filter(item => item.id == this.frmSearch.category[0]);
                if (cat.length > 0) {
                    url+= cat[0].slug + '-' + cat[0].id + '?';
                }

                let query = [];
                
                if (this.frmSearch.keyword != '') {
                    query.push('keyword=' + this.frmSearch.keyword);
                }

                if (this.frmSearch.province.length > 0) {
                    query.push('province_id=' + this.frmSearch.province[0]);
                }

                if (this.frmSearch.district.length > 0) {
                    query.push('district_id=' + this.frmSearch.district[0]);
                }

                if (this.frmSearch.area[1] > 0) {
                    query.push('area=' + this.frmSearch.area.join(','));
                }
                
                if (this.frmSearch.price[1] > 0) {
                    query.push('price=' + this.frmSearch.price.join(','));
                }

                url+= query.join('&');
                
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
            }
        }
    }
</script>

<style lang="scss" scoped>
    .carousel {
        position: relative;
        .carousel_img {
            img {
                width: 100%;
            }
        }
    }

    .carousel_title {
        position: absolute;
        top: 52%;
        left: 18%;
        right: 18%;
        .high_search {
            position: absolute;
            left: 81.19%;
            right: 0%;
            top: 44px;
            text-align: center;
            // align-items: center;
            font-size: 16px;
            line-height: 54px;
            height: 54px;
            background: rgba(32, 32, 32, 0.6);
            border-radius: 5px 5px 0px 0px;
        }
        .btn_search .v-btn:not(.v-btn--round).v-size--default {
            width: 96%;
        }
        .carousel_options {
            margin-bottom: 50px;
            .v-btn-toggle:not(.v-btn-toggle--dense) .v-btn.v-btn.v-size--default {
                color: $color-white;
                height: 40px;
                font-size: 16px;
                font-weight: 700;
                border-radius: 6px;
            }
            .v-btn-toggle {
                background: rgba(32, 32, 32, 0.5);
                border-radius: 5px;
            }
            .v-item--active.v-btn--active {
                background: $color-white !important;
                color: $color-black-01 !important;
                opacity: 1 !important;
                border: none;
                border-radius: 6px;
            }
            .v-btn {
                text-transform: capitalize;
            }
            .v-btn-toggle>.v-btn.v-btn {
                opacity: 1 !important;
            }
            .theme--light.v-btn--active:hover::before,
            .theme--light.v-btn--active::before {
                opacity: 0 !important;
            }
            .v-btn-toggle>.v-btn.v-btn {
                border-style: hidden;
            }
        }
        .select_options {
            background: rgba(32, 32, 32, 0.6);
            padding: 20px;
            border-radius: 8px;
            border-top-right-radius: 0px;
            .options {
                .select_house {
                    width: 25%;
                }
                .input_house {
                    width: 75%;
                    margin-left: 12px;
                }
            }
        }
        .high_search {
            color: $color-white;
        }
    }

    .select_options_mobile {
        display: none;
    }

    @media screen and (max-width: 1200px) {
        .carousel_title {
            position: absolute;
            top: 50%;
            left: 10%;
            right: 10%;
        }
        .v-btn-toggle:not(.v-btn-toggle--dense) .v-btn.v-btn.v-size--default {
            font-size: 14px !important;
        }
        .high_search {
            font-size: 14px !important;
            word-break: break-all;
        }
    }

    @media screen and (max-width: 1035px) {
        .carousel_title {
            position: absolute;
            top: 42%;
            left: 10%;
            right: 10%;
        }
    }

    @media screen and (max-width: 930px) {
        .carousel_title {
            position: absolute;
            top: 38%;
            left: 5%;
            right: 5%;
        }
    }

    @media screen and (max-width: 600px) {
        .carousel {
            margin-top: -33px !important;
            img {
                height: 650px;
                width: auto !important;
                background-position-x: center;
            }
            .carousel_title {
                text-align: center;
                top: 45%;
                .carousel_options {
                    margin-bottom: 30px;
                }
                .high_search {
                    display: none;
                }
                .select_options {
                    display: none;
                }
                .select_options_mobile {
                    display: block;
                    background: rgba(32, 32, 32, 0.6);
                    padding: 20px;
                    border-radius: 8px;
                    border-top-right-radius: 0px;
                    .v-text-field__details {
                        min-height: 0;
                        height: 0;
                    }
                    .col-12,
                    .col-6 {
                        padding: 6px;
                    }
                    .btn_search {
                        .v-btn {
                            font-size: 12px !important;
                            width: 100%;
                        }
                    }
                }
            }
        }
    }
</style>