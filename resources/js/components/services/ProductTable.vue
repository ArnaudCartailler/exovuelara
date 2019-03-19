<style>
.tltl {
  background-color: #282a4c !important;
}
</style>

<template>
  <div id="app" class="wowo">
    <!-- <v-app id="inspire"> -->
    <v-list class="pa-0">
      <v-list-tile>
        <v-list-tile-content>
          <span>{{ $lang.costmanagement._total_cost}} {{ totalCost }} </span>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
    <div>
      <v-data-table
        :headers="headers"
        :items="filtered.length < 1 ? instances : filtered"
        :pagination.sync="pagination"
        expand
        item-key="name"
        dark
        fluid
      >
        <template slot="items" slot-scope="props" fluid>
          <tr @click="props.expanded = !props.expanded" class="tltl">
            <td class="text-md-left">
              <v-chip
                :color="props.item.provider === 'AWS' ? 'orange' : 'blue'"
                label
              >{{ props.item.provider }}</v-chip>
            </td>

            <td class="text-md-right">{{ props.item.product_category }}</td>

            <td class="text-md-right">{{ props.item.product }}</td>

            <td class="text-md-right">{{ props.item.name }}</td>
            <td class="text-md-right">{{ props.item.created_at }}</td>

            <td class="text-md-center">{{ props.item.status }}</td>

            <td class="text-md-right">{{ props.item.cost }}</td>
          </tr>
        </template>

        <!-- <template slot="expand" slot-scope="props">
            <v-card
              flat
              v-for="(instance, i) in instances"
              :key="i"
              class="light test2"
            >
              <v-list dense class="accent2">
                <v-list-tile>
                  <v-list-tile-content xs4>
                    <v-list-tile-title>{{ getInstancesV2(name).instance }}</v-list-tile-title>
                  </v-list-tile-content>
                  <v-list-tile-content class="text-md-right" xs4>
                    <v-list-tile-sub-title>{{ instance.cost }}</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card>
        </template>-->
      </v-data-table>
    </div>
    <!-- </v-app> -->
  </div>
</template>

<script>
import { getInstancesV2 } from "../../helper/DataFaker.js";

export default {
  data() {
    return {
      instances: [],
      headers: [
        {
          text: "Fournisseur",
          align: "left",
          value: "provider",
          sortable: true
        },
        {
          text: "Categorie",
          align: "right",
          value: "product_category",
          sortable: true
        },
        {
          text: "Produits",
          align: "right",
          value: "name",
          sortable: true
        },
        {
          text: "Nom",
          align: "right",
          value: "product",
          sortable: true
        },
        {
          text: "Créé le",
          align: "right",
          value: "created_at",
          sortable: true
        },
        {
          text: "Statut",
          align: "center",
          value: "status",
          sortable: true
        },
        {
          text: "Coût",
          value: "cost",
          align: "right"
        }
      ],
      filtered: [],
      filterList: [],
      pagination: {
        // descending: boolean,
        page: 1,
        rowsPerPage: 10,
        // sortBy: string,
        totalItems: 10
      }
    };
  },

  created() {
    this.instances = getInstancesV2();

    let sum = 0;

    this.instances.map(x => (sum += x.cost));

    function Round(sum) {
        return Math.round(1000 * sum) / 1000;
    };

    this.totalCost = Round(sum);
  },

  mounted() {
    let _this = this;
    this.$root.$on("filterItems", function(val) {
      if (val.length < 1) {
        _this.filtered = [];
      } else {
        _this.filterList = val;
        _this.filterItems();
      }
    });
  },

  methods: {
    getInstancesV2(instance) {
      return getInstancesV2(instance);
    },

    filterItems: function() {
      if (!(this.filterList.length < 1)) {
        let result = [];

        this.filterList.forEach(filter => {
          // résultat pour un filtre
          let res = this.instances.filter((item, i, array) => {
            return item[filter.key] === filter.value;
            // vérifier si l'objet n'est pas déjà dans le tableau (id)
          });
          // résultat total après filtre
          if (result.length < 1) {
            result = res;
            this.filtered = result;
          } else {
            this.filtered = result.concat(res);
          }
        });
      }
    }
  },

  computed: {},

  watch: {}
};
</script>
