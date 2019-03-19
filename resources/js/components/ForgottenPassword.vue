<template>
  <v-container fluid class="w-100">
      <navigation-drawer></navigation-drawer>
    <form-pass light></form-pass>
  </v-container>
</template>

<script>
import NavigationDrawer from "./navigation/NavigationDrawer";
import FormPass from "./FormPass";

export default {
  components: {
    "navigation-drawer": NavigationDrawer,
    "form-pass": FormPass
  }
};
</script>

<style>
</style>
