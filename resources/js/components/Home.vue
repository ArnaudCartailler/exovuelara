<style>
</style>

<template>
  <v-container fluid class="w-100">
    <navigation-drawer></navigation-drawer>
    <summary-component></summary-component>
    <v-flex>
      <table-chart></table-chart>
    </v-flex>
  </v-container>
</template>

<script>
import NavigationDrawer from "./navigation/NavigationDrawer";
import SummaryComponent from "./summary/SummaryComponent";
import ChartBar from "./visuals/ChartGraph";
import TableChart from "./visuals/TableChart";

export default {
  components: {
    "navigation-drawer": NavigationDrawer,
    "summary-component": SummaryComponent,
    "chart-bar": ChartBar,
    "table-chart": TableChart
  },

  created() {
    console.log("in home component");
  }
};
</script>

