<style>
.resizefilter {
  margin: -40px auto auto auto;
}
</style>

<template>
  <v-container fluid grid-list-xl class="resizefilter">
    <v-layout row wrap>
      <v-flex xs12 sm12 md3>
        <v-select
          color="primary"
          label="Provider"
          background-color="#4e3a6f"
          v-model="filterList"
          :items="filters.provider"
          item-text="value"
          return-object
          height="10"
          box
          small-chips
          deletable-chips
          multiple
          dark
        ></v-select>
      </v-flex>
      <v-flex xs12 sm12 md3>
        <v-select
          color="primary"
          label="Category"
          background-color="#4e3a6f"
          v-model="filterList"
          :items="filters.product_category"
          item-text="value"
          return-object
          height="10"
          box
          small-chips
          deletable-chips
          multiple
          flat
          dark
        ></v-select>
      </v-flex>
      <v-flex xs12 sm12 md3>
        <v-select
          color="primary"
          label="Products"
          background-color="#4e3a6f"
          v-model="filterList"
          :items="filters.product"
          item-text="value"
          return-object
          height="10"
          box
          small-chips
          deletable-chips
          multiple
          dark
        ></v-select>
      </v-flex>
      <v-flex xs12 sm12 md3>
        <v-select
          color="primary"
          label="Instance"
          background-color="#4e3a6f"
          v-model="filterList"
          :items="filters.instance_type"
          item-text="value"
          return-object
          height="10"
          box
          small-chips
          deletable-chips
          multiple
          dark
        ></v-select>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 sm12 md4 class="resizefilter">
        <v-select
          color="primary"
          label="Status"
          background-color="#4e3a6f"
          v-model="filterList"
          :items="filters.status"
          item-text="value"
          return-object
          height="10"
          box
          small-chips
          deletable-chips
          multiple
          dark
        ></v-select>
      </v-flex>
      <v-flex xs12 sm12 md4 class="resizefilter">
        <v-menu
          v-model="menu1"
          :close-on-content-click="false"
          :nudge-right="40"
          lazy
          transition="scale-transition"
          offset-y
          full-width
          max-width="290px"
          min-width="290px"
          color="primary"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="date.from"
              :label="$lang.services._period_from"
              prepend-icon="event"
              readonly
              v-on="on"
              dark
            ></v-text-field>
          </template>
          <v-date-picker v-model="date.from" no-title @input="menu1 = false"></v-date-picker>
        </v-menu>
      </v-flex>
      <v-flex xs12 sm12 md4 class="resizefilter">
        <v-menu
          v-model="menu2"
          :close-on-content-click="false"
          :nudge-right="40"
          lazy
          transition="scale-transition"
          offset-y
          full-width
          max-width="290px"
          min-width="290px"
          color="primary"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="date.to"
              :label="$lang.services._to"
              prepend-icon="event"
              readonly
              v-on="on"
              dark
            ></v-text-field>
          </template>
          <v-date-picker v-model="date.to" no-title @input="menu2 = false"></v-date-picker>
        </v-menu>
      </v-flex>
      <!-- <v-flex xs12 sm12 md4 class="resizefilter">
        <v-flex shrink style="width: 60px">
          <v-text-field v-model="value3[0]" class="mt-0" hide-details single-line type="number"></v-text-field>
        </v-flex>

        <v-flex class="px-3">
          <v-range-slider v-model="value3" :max="600" :min="20" :step="10"></v-range-slider>
        </v-flex>

        <v-flex shrink style="width: 60px">
          <v-text-field v-model="value3[1]" class="mt-0" hide-details single-line type="number"></v-text-field>
        </v-flex>
      </v-flex>-->
      <!-- <v-card-text>
        <v-layout row>
          <v-flex shrink style="width: 60px">
            <v-text-field v-model="value3[0]" class="mt-0" hide-details single-line type="number"></v-text-field>
          </v-flex>

          <v-flex class="px-3">
            <v-range-slider v-model="value3" :max="600" :min="20" :step="10"></v-range-slider>
          </v-flex>

          <v-flex shrink style="width: 60px">
            <v-text-field v-model="value3[1]" class="mt-0" hide-details single-line type="number"></v-text-field>
          </v-flex>
        </v-layout>
      </v-card-text>-->
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      menu1: false,
      menu2: false,
      date: {
          from: new Date().toISOString().substr(0, 10),
          to: new Date().toISOString().substr(0, 10)
      },
      //   value3: [110, 440],
      filterList: [],
      filters: {
        provider: [
          {
            id: 1,
            key: "provider",
            value: "OVH"
          },
          {
            id: 2,
            key: "provider",
            value: "AWS"
          }
        ],
        status: [
          {
            id: 3,
            key: "status",
            value: "active"
          },
          {
            id: 4,
            key: "status",
            value: "deleted"
          }
        ],
        product_category: [
          {
            id: 5,
            key: "product_category",
            value: "compute"
          },
          {
            id: 6,
            key: "product_category",
            value: "storage"
          },
          {
            id: 7,
            key: "product_category",
            value: "network"
          },
          {
            id: 8,
            key: "product_category",
            value: "other"
          }
        ],
        product: [
          {
            id: 9,
            key: "product",
            value: "AmazonEC2"
          },
          {
            id: 10,
            key: "product",
            value: "AmazonSES"
          },
          {
            id: 11,
            key: "product",
            value: "PublicCloud"
          },
          {
            id: 12,
            key: "product",
            value: "AmazonS3"
          },
          {
            id: 13,
            key: "product",
            value: "AmazonWorkSpace"
          }
        ],
        name: [
          {
            id: 14,
            key: "name",
            value: "AmazonEC2/i-815zd54d4sd54sv2"
          },
          {
            id: 15,
            key: "name",
            value: "AmazonSES/eu-west-1"
          },
          {
            id: 16,
            key: "name",
            value: "PublicCloud/dazz-dz4-e4542ze-ze45ez4"
          },
          {
            id: 17,
            key: "name",
            value: "AmazonS3/vol-454fez56zefe45rg55e4"
          },
          {
            id: 18,
            key: "name",
            value: "AmazonWorkSpace/arn:aws-data"
          }
        ],
        created_at: [
          {
            id: 19,
            key: "created_at",
            value: "2019-03-01 11:45:20"
          }
        ]
      }
    };
  },

  computed: {

    formatDateFrom() {
      return this.formatDate(this.date.from);
    },
    formatDateTo() {
      return this.formatDate(this.date.to);
    }
  },

  watch: {
    date(val) {
      this.dateFormatted = this.formatDate(this.date);
    }
  },

  methods: {
    FilterItem(value, index) {
      this.$root.$emit("FilterItem", this.filters[index].filters[value], index);
    },

    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${month}/${day}/${year}`;
    },
    parseDate(date) {
      if (!date) return null;

      const [month, day, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    }
  },

  watch: {
    filterList: function(n, o) {
      this.$root.$emit("filterItems", n);
    }
  }
};
</script>

