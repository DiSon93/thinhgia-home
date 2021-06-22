<template>
  <div class="search_sell">
    <div class="search_link">Căn hộ/Chung cư <i class="el-icon-arrow-right"></i> HCM</div>
    <div class="selection">
      <v-select
        v-model="e6"
        :items="states"
        label="Select"
        multiple
        hint="Pick your favorite states"
        persistent-hint
      ></v-select>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      e6: [],
      e7: [],
      states: [
        "Alabama",
        "Alaska",
        "American Samoa",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "District of Columbia",
        "Federated States of Micronesia",
        "Florida",
        "Georgia",
        "Guam",
        "Hawaii",
        "Idaho",
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Maine",
        "Marshall Islands",
        "Maryland",
        "Massachusetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Northern Mariana Islands",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Palau",
        "Pennsylvania",
        "Puerto Rico",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        "Virgin Island",
        "Virginia",
        "Washington",
        "West Virginia",
        "Wisconsin",
        "Wyoming",
      ],
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
