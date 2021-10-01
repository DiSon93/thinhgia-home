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
          <span v-html="blogCategory.name"></span>
        </div>

        <div class="blog_title" v-html="blogCategory.name"></div>

        <v-row class="specail_news">
          <v-col cols="12" sm="8">
            <div class="blog_news">
              <v-row v-for="(item, index) in blogCategoryList.data" :key="item.id">
                <v-col cols="12" sm="3">
                  <img :src="item.image_public[0].thumbnail" :alt="item.title" />
                  <!-- <img src="@image/layouts/architecture_01.svg" alt="" /> -->
                </v-col>
                <v-col cols="12" sm="9">
                  <NuxtLink
                    :to="'/blog/detail/' + item.slug + '-' + item.id"
                    class="tintuc"
                    v-html="item.title"
                  ></NuxtLink>
                  <div class="content" v-html="strip_tags(item.content)"></div>
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
import MostViewed from "@component/blog/MostViewed";
import Services from "@component/main/Services";
import Footer from "@component/main/Footer";

export default {
  components: {
    MostViewed,
    Services,
    Footer,
  },
  data() {
    return {
      isActive: false,
    };
  },
  computed: {
    ...mapState("blog", ["blogCategory", "blogCategoryList"]),
  },
  mounted() {
    let params = this.$route.params.slug;
    if (params != undefined) {
      params = params.split("-");
      let cat_id = params[params.length - 1];
      this.getBlogCategory(cat_id);
    }
  },
  methods: {
    ...mapActions("blog", ["getBlogCategory"]),
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
        color: #000;
        &:hover {
          color: rgba(255, 166, 0, 0.767);
          transition: all 0.5s;
        }
      }
      .content {
        font-size: 14px;
        line-height: 24px;
        margin-top: 15px;
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
