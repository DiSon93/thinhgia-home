<template>
    <v-lazy
        v-model="isActive"
        :options="{ threshold: 0.5 }"
        min-height="200"
        transition="fade-transition"
    >
        <div>
            <v-row class="project_total">
                <v-col cols="6" sm="4" lg="3" v-for="item in dictionaryList.real_estate" :key="item.id">
                    <router-link :to="'/category/' + purpose + '/' + item.slug + '-' + item.id">
                        <el-card class="box-card">
                            <div slot="header" class="clearfix">
                                <img src="@image/layouts/total_01.svg" alt="" />
                            </div>
                            <div class="text item" v-html="item.name"></div>
                        </el-card>
                    </router-link>
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
    import { mapState, mapActions } from "vuex";
    import Services from "@component/main/Services";
    import Footer from "@component/main/Footer";
    import SearchTool from "@component/tools/search-tool";
    
    export default {
        components: {
            Services,
            Footer,
            SearchTool
        },
        data() {
            return {
                isActive: false,
                purpose: ''
            }
        },
        computed: {
            ...mapState("dictionary", ["dictionaryList"]),
        },
        mounted() {
            switch (this.$route.params.slug) {
                case 'mua-ban-bat-dong-san':
                    this.purpose = 'mua-ban';
                    break;
                case 'cho-thue-bat-dong-san':
                    this.purpose = 'cho-thue';
                    break;
            }
            
        },
        methods: {
            ...mapActions("dictionary", ["getCategory"])
        }
    }
</script>

<style lang="scss" scoped>
    .project_total,
    .search_project {
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
        .project_total,
        .search_project {
            padding: 0 5%;
        }
    }

    @media screen and (max-width: 600px) {
        .search_project {
            margin-top: 50px;
        }
        .col-sm-4 {
            padding: 6px;
        }
        .project_total {
            .item {
                font-size: 16px;
            }
        }
    }
</style>