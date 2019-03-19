<style>

</style>

<template>
  <v-container class="w-100">
    <navigation-drawer></navigation-drawer>
    <filter-item></filter-item>
    <v-flex>
      <product-table></product-table>
    </v-flex>
  </v-container>
</template>

<script>
import NavigationDrawer from "./navigation/NavigationDrawer";
import Filter from "./filter/Filter";
import ProductTable from "../components/services/ProductTable";

export default {
  components: {
    "navigation-drawer": NavigationDrawer,
    "filter-item": Filter,
    "product-table": ProductTable
  },

  created() {
    console.log("in cost management");
  }
};
</script>

