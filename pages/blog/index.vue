<template>
    <v-lazy
        v-model="isActive"
        :options="{ threshold: 0.5 }"
        min-height="200"
        transition="fade-transition"
    >
        <div>
            <div class="blog">
                <div class="search">
                    <NuxtLink to="/">
                        Trang chủ
                    </NuxtLink>
                    <i class="el-icon-arrow-right"></i>
                    Blog
                </div>
                
                <div class="blog_title">TIN TỨC NỔI BẬT</div>
                <v-row class="specail_news">
                    <v-col cols="8">
                        <div class="blog_news">
                            <v-row v-if="blogLatest.data.length > 0">
                                <v-col cols="6">
                                    <router-link :to="'/blog/category/' + blogLatest.data[0].slug + '-' + blogLatest.data[0].id">
                                        <img :src="blogLatest.data[0].image_public[0].thumbnail" :alt="blogLatest.data[0].title" />
                                        <!-- <img src="@image/layouts/blogtintuc.svg" alt="" /> -->
                                    </router-link>
                                </v-col>
                                <v-col cols="6">
                                    <NuxtLink class="tintuc" :to="'/blog/category/' + blogLatest.data[0].slug + '-' + blogLatest.data[0].id">
                                        <span v-html="blogLatest.data[0].title"></span>
                                    </NuxtLink>
                                    <div class="content" v-html="strip_tags(blogLatest.data[0].content)"></div>
                                </v-col>
                            </v-row>
                            <v-row v-if="blogLatest.data.length > 1">
                                <v-col cols="3" v-for="(item, index) in blogLatest.data" :key="index" v-if="index > 0">
                                    <!-- <img src="@image/layouts/blog_01.svg" alt="" /> -->
                                    <img :src="item.image_public[0].thumbnail" :alt="item.title" />
                                    <div v-html="item.title"></div>
                                </v-col>
                            </v-row>
                        </div>

                        <div v-if="blogList.length > 0" v-for="item in blogList" :key="item.id">
                            <div class="architecture">
                                <div v-html="item.name"></div>
                                <v-btn :to="'/blog/category/' + item.slug + '-' + item.id">Xem Tất cả &gt;&gt;</v-btn>
                            </div>    
                            <div class="blog_news" v-if="item.blogs.length > 0">
                                <v-row>
                                    <v-col cols="6">
                                        <router-link :to="''">
                                            <img :src="item.blogs[0].image_public[0].thumbnail" :alt="item.blogs[0].title" />
                                            <!-- <img src="@image/layouts/architecture_01.svg" alt=""/> -->
                                        </router-link>
                                    </v-col>
                                    <v-col cols="6">
                                        <NuxtLink :to="'/blog/detail/' + item.blogs[0].slug + '-' + item.blogs[0].id" class="tintuc" v-html="item.blogs[0].title"></NuxtLink>
                                        <div class="content" v-html="strip_tags(item.blogs[0].content)"></div>
                                    </v-col>
                                </v-row>
                                <v-row v-if="item.blogs.length > 1">
                                    <v-col cols="6" class="d-flex more_detail" v-if="index > 0" v-for="(blog, index) in item.blogs" :key="index">
                                        <img src="@image/layouts/circle.png" :alt="blog.title" />
                                        <NuxtLink :to="'/blog/detail/' + blog.slug + '-' + blog.id" class="small_content" v-html="blog.title"></NuxtLink>
                                    </v-col>
                                </v-row>
                            </div>
                        </div>
                    </v-col>

                    <v-col cols="4">
                        <MostViewed />
                    </v-col>
                </v-row>
            </div>
            <div class="footer">
                <Services />
                <Footer />
            </div>
        </div>
    </v-lazy>
</template>

<script>
    import { mapState, mapActions } from "vuex";
    import MostViewed from "@component/blog/MostViewed";
    import Services from "@component/main/Services";
    import Footer from "@component/main/Footer";

    export default {
        components: {
            MostViewed,
            Services,
            Footer
        },
        data() {
            return {
                isActive: false
            }
        },
        computed: {
            ...mapState("blog", ["blogList", "blogLatest"])
        },
        mounted() {
            this.getLatest();
            this.getBlogs();
        },
        methods: {
            ...mapActions("blog", ["getBlogs", "getLatest"]),
            strip_tags(str) {
                if (str != null) {
                    str = str.replace(/(<([^>]+)>)/gi, '');
                    str = str.substr(0, 500) + '.....';
                }

                return str;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .blog {
        padding: 0 10%;
        img {
            width: 100%;
        }
        .search {
            margin-top: 10px;
        }
        .blog_title {
            font-weight: bold;
            font-size: 20px;
            line-height: 24px;
            margin: 20px 0;
        }
        .specail_news {
            .blog_news {
                padding: 12px 15px;
                background: #f2f2f2;
                box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.15);
                border-radius: 4px;
                .tintuc {
                    font-weight: 500;
                    font-size: 20px;
                    line-height: 20px;
                    margin-bottom: 15px;
                }
                .content {
                    font-size: 14px;
                    line-height: 24px;
                }
            }
            .architecture,
            .feature,
            .fengShui,
            .finance,
            .building,
            .projects {
                font-weight: bold;
                font-size: 20px;
                line-height: 24px;
                margin: 25px 0 15px;
                display: flex;
                justify-content: space-between;
                .v-btn {
                    text-transform: capitalize;
                    border-radius: 5px;
                    box-shadow: none;
                    background-color: $color-orange-light;
                    color: $color-black-02;
                    font-size: 12px;
                }
                .v-btn:not(.v-btn--round).v-size--default {
                    min-height: 30px;
                    height: 32px;
                }
            }
            .more_detail {
                padding: 6px 12px;
                img {
                    margin-top: 6px;
                    height: 12px;
                    width: 12px;
                }
                .small_content {
                    margin-left: 12px;
                }
            }
        }
    }
</style>