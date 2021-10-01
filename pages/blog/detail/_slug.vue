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
          <NuxtLink to="/"> Trang chủ </NuxtLink>
          <i class="el-icon-arrow-right"></i>
          <NuxtLink to="/blog"> Blog </NuxtLink>
          <i class="el-icon-arrow-right"></i>
          <NuxtLink :to="'/blog/category/' + blogCategory.slug + '-' + blogCategory.id">
            <span v-html="blogCategory.name"></span>
          </NuxtLink>
          <i class="el-icon-arrow-right"></i>
          <span v-html="blogDetail.title" v-if="!loading"></span>
          <v-skeleton-loader type="card-heading" v-else></v-skeleton-loader>
        </div>
        <v-row class="specail_news">
          <v-col cols="12" sm="8">
            <div class="blog_news" v-if="!loading">
              <div class="blog_title" v-html="blogDetail.title"></div>
              <div class="content" v-html="blogDetail.content"></div>
            </div>
            <v-skeleton-loader
              type="card-avatar, article, list-item-three-line, list-item-three-line"
              v-else
            ></v-skeleton-loader>
            <div class="same_news">TIN CÙNG CHUYÊN MỤC</div>
            <div class="blog_news">
              <v-row v-for="(item, index) in blogCategoryList.data" :key="item.id">
                <v-col cols="12" sm="3">
                  <router-link :to="'/blog/detail/' + item.slug + '-' + item.id">
                    <img :src="item.image_public[0].thumbnail" :alt="item.title" />
                  </router-link>
                  <!-- <img src="@image/layouts/same_06.svg" alt="" /> -->
                </v-col>
                <v-col cols="12" sm="9">
                  <NuxtLink
                    :to="'/blog/detail/' + item.slug + '-' + item.id"
                    class="tintuc"
                    v-html="item.title"
                  ></NuxtLink>
                  <div class="content_02" v-html="strip_tags(item.content)"></div>
                </v-col>
                <v-col cols="12" v-if="index < blogCategoryList.data.length - 1">
                  <el-divider></el-divider>
                </v-col>
              </v-row>
            </div>
          </v-col>

          <v-col cols="12" sm="4">
            <MostViewed />
          </v-col>
        </v-row>
        <div class="text-center pagination">
          <!-- <v-pagination v-model="page" :length="6" color="warning"></v-pagination> -->
        </div>
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
import Services from "@component/main/Services";
import Footer from "@component/main/Footer";
import MostViewed from "@component/blog/MostViewed";

export default {
  components: {
    Services,
    Footer,
    MostViewed,
  },
  data() {
    return {
      isActive: false,
      loading: false,
    };
  },
  watch: {
    blogDetail(n, o) {
      this.getBlogCategory(n.blog_type_id);
    },
  },
  computed: {
    ...mapState("blog", ["blogDetail", "blogCategoryList", "blogCategory"]),
  },
  async mounted() {
    let params = this.$route.params.slug;
    if (params != undefined) {
      this.loading = true;
      params = params.split("-");
      let cat_id = params[params.length - 1];
      await this.getBlogDetail(cat_id);
      this.loading = false;
    }
  },
  methods: {
    ...mapActions("blog", ["getBlogCategory", "getBlogDetail"]),
    strip_tags(str) {
      if (str != null) {
        str = str.replace(/(<([^>]+)>)/gi, "");
        str = str.substr(0, 500) + ".....";
      }

      return str;
    },
  },
};
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
    margin: 10px 0;
  }
  .specail_news {
    margin-top: 15px;
    .blog_news {
      padding: 12px 15px;
      background: #f2f2f2;
      box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.15);
      border-radius: 4px;

      .tintuc {
        font-weight: 500;
        font-size: 20px;
        line-height: 20px;
        margin-bottom: 25px !important;
        color: black;
        &:hover {
          color: rgba(255, 166, 0, 0.767);
          transition: all 0.5s;
        }
      }
      .content {
        font-size: 14px;
        line-height: 24px;
        // overflow: hidden;
        margin-top: 25px;
        p img {
          max-width: 100% !important;
        }
      }
      .content_02 {
        margin-top: 15px;
        font-size: 16px !important;
      }
      .classify {
        font-weight: 500;
        margin-bottom: 5px;
      }
      .photo {
        text-align: center;
      }
      img {
        width: 90%;
        margin: 0 auto;
      }
      .detail {
        font-size: 14px;
        .detail_title {
          font-size: 16px;
          font-weight: 500;
        }
      }
      .bdsViet {
        text-align: right;
      }
      .read_more {
        margin-left: 20px;
        color: $color-orange;
      }
    }
  }
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

.same_news {
  font-weight: bold;
  font-size: 24px;
  line-height: 24px;
  margin: 20px 0;
}

.el-divider.el-divider--horizontal {
  margin: 12px 0;
}

.pagination {
  margin-top: 20px;
  margin-bottom: -20px;
  .v-pagination {
    .v-pagination__navigation,
    .v-pagination__item {
      height: 14px !important;
      width: 14px !important;
    }
  }
}

@media screen and (max-width: 1200px) {
  .blog {
    padding: 0 6%;
    .specail_news .blog_news .content_02 {
      font-size: 14px !important;
      margin-top: 5px;
    }
    .specail_news .blog_news img {
      width: 100%;
      height: auto !important;
    }
  }
}
@media screen and (max-width: 600px) {
  .blog {
    padding: 0 5%;
    margin-top: 100px;
    .search {
      font-size: 14px;
    }
  }
}
</style>
