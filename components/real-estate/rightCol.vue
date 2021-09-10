<template>
    <div>
        <div class="horizontal_title">NHÀ ĐẤT LIÊN QUAN</div>
        <div class="horizontal_image">
            <div class="estate_img" v-for="item in realEstateList.data" :key="item.id">
                <el-card class="box-card">
                    <div slot="header" class="clearfix hover14">
                        <figure @click="$router.push(parseUrlRealEstate(item))">
                            <img :src="item.image_public[0].thumbnail" :alt="item.title" v-if="item.image_public.length > 0" />
                            <img src="@image/layouts/room_01.png" :alt="item.title" v-else />
                        </figure>
                        <div class="overlay_title" v-html="item.title"></div>
                    </div>
                    <div class="add_detail">
                        <div class="price">
                            <div>
                                <span class="first_price" v-html="[item.price, unit_prices[item.unit_price]].join(' ')"></span>
                                <span v-html="item.land_area + ' &#13217;'"></span>
                            </div>
                            <div class="pricePerMeter">
                                <i>(100triệu/<span id="mv">&#13217;</span>)</i>
                            </div>
                        </div>
                        <NuxtLink class="name" :to="parseUrlRealEstate(item)" v-html="item.title"></NuxtLink>
                        <div class="sex d-flex">
                            <el-tooltip class="item" effect="dark" content="Hướng" placement="top">
                                <v-icon>mdi-near-me</v-icon>
                            </el-tooltip>

                            <span v-html="item.house_orientation_dict.name"></span>
                            
                            <el-tooltip class="item" effect="dark" content="Phòng ngủ" placement="top">
                                <v-icon>mdi-bed-outline</v-icon>
                            </el-tooltip>
                            
                            <span v-html="item.bedroom_number"></span>
                            
                            <el-tooltip class="item" effect="dark" content="Phòng tắm" placement="top">
                                <v-icon>mdi-shower-head</v-icon>
                            </el-tooltip>
                            
                            <span v-html="item.bathroom_number"></span>
                        </div>
                        <div class="address d-flex">
                            <el-tooltip class="item" effect="dark" content="Địa chỉ" placement="top">
                                <v-icon>mdi-map-marker</v-icon>
                            </el-tooltip>

                            <span v-html="[item.street_type_dict.name, item.district.name].join(', ')"></span>
                        </div>
                    </div>
                </el-card>
            </div>
            
            <v-btn color="warning" class="readmore" @click="$router.push('/category/'+purpose_array[purpose].key+'/'+dictionaryItem.slug+'-'+dictionaryItem.id)">
                Xem thêm <v-icon>mdi-chevron-double-right</v-icon>
            </v-btn>
        </div>
    </div>
</template>

<script>
    import { mapState, mapActions } from "vuex";

    export default {
        props: {
			real_estate_type: {
				type: Number,
				default: null,
				required: true
			},
            purpose: {
                type: Number,
				default: null,
				required: true
            }
		},
        data() {
            return {
                
            }
        },
        computed: {
            ...mapState('dictionary', ['dictionaryItem']),
            ...mapState('realestate', ['realEstateList', 'purpose_array', 'unit_prices'])
        },
        mounted() {
            this.getCategoryItem(this.real_estate_type);
            this.getRealEstate({ real_estate_type: this.real_estate_type, purpose: this.purpose });
        },
        methods: {
            ...mapActions('dictionary', ['getCategoryItem']),
            ...mapActions('realestate', ['getRealEstate']),
            parseUrlRealEstate(real_estate) {
                return '/detail/' + real_estate.slug + '-' + real_estate.id;
            },
            strip_tags(str) {
                if (str != null) {
                    str = str.replace(/(<([^>]+)>)/gi, '');
                }

                return str;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .horizontal_title {
        font-weight: 700;
        font-size: 20px;
        line-height: 24px;
        color: #000000;
        margin-top: 30px;
        text-align: center;
        position: sticky;
        top: 70px;
        z-index: 9;
        background: #f2f2f2;
        height: 50px;
        line-height: 50px;
    }

    .horizontal_image {
        width: 280px;
        margin: 0 auto;
        // margin-top: 10px;
        .readmore.v-btn {
            text-transform: capitalize;
            box-shadow: none;
            background: #fdd27f !important;
            float: right;
            color: $color-black-03;
            font-size: 12px;
            .v-icon {
                font-size: 16px;
            }
        }
        .estate_img {
            margin-bottom: 20px;
            .clearfix img {
                width: 100%;
                display: block;
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
                line-height: 28px;
                color: #000000;
                text-decoration: none;
                &:hover {
                    color: $color-orange-light;
                    // text-decoration: ;
                    transition: 0.5s;
                }
            }
            .sex {
                .v-icon {
                    color: #c4c4c4;
                    margin: 0 10px 0 15px;
                    &:first-child {
                        margin-left: 0;
                    }
                }
                font-size: 16px;
                line-height: 30px;
                margin: 10px 0;
            }
            .address {
                .v-icon {
                    color: #c4c4c4;
                    margin-right: 10px;
                }
                font-size: 16px;
                line-height: 24px;
            }
            .clearfix {
                position: relative;
                .overlay_title {
                    position: absolute;
                    background: #fdd27f;
                    border-radius: 4px;
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
    }
</style>