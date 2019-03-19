<style>
.bibi {
  border: 1px solid white;
  width: 100%;
  color: white !important;
}
</style>

<template>
  <v-container fluid>
    <v-layout row>
      <v-list dark>
        <v-list-tile v-for="(category, i) in categories" :key="i">
          <v-btn flat justify-space-around class="bibi">
            <span>{{ $lang.charts[category.lotAType]}}</span>
            <v-layout justify-end>
              <span class="sumdate">{{ category.lotACurCode}}</span>
              <span class="sumdate">{{ category.lotACost }}</span>
            </v-layout>
          </v-btn>
        </v-list-tile>
      </v-list>

      <!-- <v-flex class="toto">
        <v-img
          src="https://www.meta-chart.com/assets/images/pie/pie_percent.png"
          srcset
          lazy-src
          class="grey darken-4"
          fluid
        ></v-img>
      </v-flex>-->
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
      categories: [],
      summary: [],
      products: [],
      productsWithDetails: [],
      panel: []
    };
  },

  created() {
    this.summary = getSummary();

    this.products = getProducts();

    this.categories = getCategories();

    this.productsWithDetails = getProductsWithDetails();

    for (let i = 0; i > getProducts().length; i++) {
      this.panel.push(false);
    }

    for (let i = 0; i > getSummary().length; i++) {
      this.panel.push(false);
    }

    for (let i = 0; i > getCategories().length; i++) {
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
