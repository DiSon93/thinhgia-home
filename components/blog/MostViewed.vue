<template>
    <div class="views">
        <div class="view_title">TIN XEM NHIỀU NHẤT</div>
        <div v-for="(blog, index) in blogMostViewed.data" :key="blog.id">
            <div class="d-flex most_views">
                <div class="view_imgs">
                    <router-link :to="'/blog/detail/' + blog.slug + '-' + blog.id">
                        <img :src="blog.image_public[0].thumbnail" :alt="blog.title" />
                        <!-- <img src="@image/layouts/view_01.svg" alt="" /> -->
                    </router-link>
                </div>
                <NuxtLink class="view_content" :to="'/blog/detail/' + blog.slug + '-' + blog.id" v-html="blog.title"></NuxtLink>
            </div>
            <el-divider v-if="index < blogMostViewed.data.length - 1"></el-divider>
        </div>
    </div>
</template>

<script>
    import { mapState, mapActions } from "vuex";

    export default {
        computed: {
            ...mapState("blog", ["blogMostViewed"])
        },
        mounted() {
            this.getMostViewed();
        },
        methods: {
            ...mapActions("blog", ["getMostViewed"])
        }
    }
</script>

<style lang="scss" scoped>
    .blog {
        .views {
            margin-left: 10px;
            padding: 12px 15px;
            background: #f2f2f2;
            box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.15);
            border-radius: 4px;
            .el-divider.el-divider--horizontal {
                margin: 12px 0;
            }
            .view_title {
                font-weight: 500;
                font-size: 18px;
                line-height: 24px;
                margin-bottom: 20px;
            }
            .most_views {
                .view_imgs {
                    width: 40%;
                    img {
                        width: 100%;
                    }
                }
                .view_content {
                    width: 60%;
                    padding-left: 10px;
                }
            }
        }
    }
</style>