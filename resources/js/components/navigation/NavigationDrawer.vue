<style>

.title {
  margin-left: 40px;
}
</style>

<template>
  <v-navigation-drawer v-model="drawer" fixed app dark>
    <v-toolbar flat class="transparent" height="350">
      <v-list-tile-content>
        <v-toolbar-title>
          <v-btn to="/" flat color="accent" class="title">
            <span class="white--text">LotA</span>
            <span class="font-weight-light primary--text">.cloud</span>
          </v-btn>
        </v-toolbar-title>
        <v-avatar color="primary" class="mx-auto pa-5">
          <span class="display-2">RK</span>
        </v-avatar>
        <v-list-tile>
          <v-layout align-center headline font-weight-bold row>Romain Karmann</v-layout>
        </v-list-tile>
        <v-list-tile>
          <v-layout font-weight-light>{{ $lang.home._update }} : 05/03/2019</v-layout>
        </v-list-tile>
      </v-list-tile-content>
    </v-toolbar>

    <v-list class="pt-0" dense>
      <v-divider></v-divider>

      <v-list-tile v-for="item in items" :key="item.title" :to="item.route">
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{ $lang.home[item.name] }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      items: [
        { id: "home", route: "/", icon: "mdi-home", name: "_home" },
        {
          id: "costmanagement",
          route: "/costmanagement",
          icon: "mdi-currency-usd",
          name: "_cost_management"
        },
        {
          id: "settings",
          route: "/settings",
          icon: "mdi-tune",
          name: "_settings"
        },
        { id: "logout", route: "/logout", icon: "mdi-logout", name: "_logout" }
      ],
      right: null
    };
  }
};
</script>
