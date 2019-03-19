<style>

.tyty{
    margin-top: 0;
}
</style>

<template>
  <v-container fluid fill-height pa-0>
    <navigation-drawer></navigation-drawer>
    <v-layout align-start justify-start>
      <v-flex xs12 md12 pa-0>
        <v-toolbar color="accent" dark tabs >
          <v-tabs
            slot="extension"
            color="transparent"
            v-model="currentItem"
            fixed-tabs
            slider-color="primary"
          >
            <v-tab
              v-for="(item, i) in items"
              :key="i"
              :href="'#tab-' + item.title "
            >{{ $lang.user[item.title] }}</v-tab>
          </v-tabs>
        </v-toolbar>

        <v-tabs-items>
          <v-tab-item v-if=" currentItem === 'tab-_account' ">
            <account></account>
          </v-tab-item>

          <v-tab-item v-else>
            <users></users>
          </v-tab-item>
        </v-tabs-items>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import NavigationDrawer from "./navigation/NavigationDrawer";
import Account from "./Account";
import Users from "./Users";

export default {
  components: {
    "navigation-drawer": NavigationDrawer,
    account: Account,
    users: Users
  },

  data: () => ({
    currentItem: "tab-_account",
    items: [
      {
        title: "_account"
      },
      {
        title: "_users"
      }
    ]
  }),

  methods: {
    addItem(item) {
      const removed = this.items.splice(0, 1);
      this.items.push(...this.more.splice(this.more.indexOf(item), 1));
      this.more.push(...removed);
      this.$nextTick(() => {
        this.currentItem = "tab-" + item;
      });
    }
  }
};
</script>

