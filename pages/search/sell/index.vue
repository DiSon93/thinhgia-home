<template>
  <div class="search_sell">
    <div class="search_link">Căn hộ/Chung cư <i class="el-icon-arrow-right"></i> HCM</div>
    <div class="selection">
      <v-select v-model="e6" :items="states" multiple outlined></v-select>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      e6: [],
      e7: [],
      states: ["BĐS Mua", "BĐS Bán", "Dự Án"],
    };
  },
};
</script>

<style lang="scss" scoped>
.search_sell {
  margin-top: 150px;
  padding: 0 10%;
  .search_link {
    font-size: 18px;
  }
}
</style>
