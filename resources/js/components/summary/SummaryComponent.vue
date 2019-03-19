<style>
.sumdate {
  color: #90ee90;
}

.resizecomp
{
    margin-top : -30px;
    width: 90%;
}
</style>

<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm12 md4 v-for="(sum, i) in summary" :key="i">
        <v-card class="pa-3 resizecomp" dark elevation-5>
          <v-layout align-left justify-left>
            <span class="sumdate font-weight-bold headline">{{ $lang.home[sum.lotADate] }}</span>
          </v-layout>
          <br>
          <v-list class="pa-0">
            <v-list-tile>
              <v-list-tile-content>
                <span>{{ $lang.home._total_cost}}</span>
              </v-list-tile-content>
              <span  class="sumdate">{{ sum.lotACurCode}} {{ sum.lotACost }}</span>
            </v-list-tile>
          </v-list>
          <v-list  class="pa-0">
            <v-list-tile>
              <v-list-tile-content>
                <span>{{ $lang.home._trend}}</span>
              </v-list-tile-content>
              <span  class="sumdate">{{ sum.lotATrend }}</span>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import {
  getProducts,
  getProductsWithDetails,
  getProductDetailsFromId,
  getCurrencySymbol,
  getProductServicesFromId,
  getSummary,
  getCategories
} from "../../helper/DataFaker";

export default {
  data() {
    return {
      summary: [],
      products: [],
      productsWithDetails: [],
      panel: []
    };
  },

  created() {
    this.summary = getSummary();

    this.products = getProducts();

    this.productsWithDetails = getProductsWithDetails();

    for (let i = 0; i > getProducts().length; i++) {
      this.panel.push(false);
    }

    for (let i = 0; i > getSummary().length; i++) {
      this.panel.push(false);
    }
  },

  methods: {
    getProductDetailsFromId(productId) {
      return getProductDetailsFromId(productId);
    },

    getProductServicesFromId(productId) {
      return getProductServicesFromId(productId);
    },

    getCurrencySymbol(currency) {
      return getCurrencySymbol(currency);
    }
  }
};
</script>
