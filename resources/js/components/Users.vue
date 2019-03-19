<style>
.img-background {
  background: #f5f5f5;
  height: 100%;
}
</style>

<template>
  <v-container row wrap ma-0 m-w-100 dark>
    <v-flex xs12 pa-2 dark>
      <v-card flat dark>
        <v-layout wrap>
          <v-flex xs12 sm6 md4>
            <v-card-title class="display-1 primary--text">{{ $lang.user._users_list }}</v-card-title>
          </v-flex>
          <v-flex xs12 sm6 md4 class="mt-3">
            <add-user></add-user>
          </v-flex>
        </v-layout>
        <v-list two-line dark>
          <v-list-tile v-for="(user, i) in users" v-on:click="openModal" :key="i" dark>
            <v-list-tile-content>
              <v-list-tile-title>{{ user.firstname + " " + user.lastname }}</v-list-tile-title>
              <v-list-tile-sub-title>
                <span class="font-weight-bold">{{ user.username }}</span>
                <span>{{ "(" + user.email + ")" }}</span>
              </v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-content>
              <v-list-tile-title>{{ user.company_name }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ $lang.user._created_at + " " + user.created_at }}</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn icon v-on:click="openDeleteModal( user )" :disabled="!isAdmin">
                <v-icon color="primary">mdi-delete</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
  </v-container>
</template>


<script>
import CreateUser from "./account/CreateUser";
import AddUser from "../components/widgets/AddUser";
import { getAllUsers } from "../helper/DataFaker";

export default {
  components: {
    "create-user": CreateUser,
    "add-user": AddUser
  },

  data() {
    return {
      createModalActive: false,
      form: {
        firstname: "",
        lastname: "",
        password: "",
        repeatPassword: "",
        birthday: "",
        company: "",
        name: "",
        email: "",
        select: null,
        checkbox: false
      },
      users: [],
      snackbar: false,
      y: "top",
      x: null,
      mode: "",
      timeout: 6000,
      userCreationState: "",
      deleteModalData: {},
      deleteModalState: false,
      isAdmin: false
    };
  },

  created() {
    this.getUsers();
    this.userIsAdmin();
    this.users = getAllUsers();
  },

  mounted() {
    let _this = this;
    this.$root.$on("modalClosed", function() {
      _this.createModalActive = !this.createModalActive;
    });
  },

  methods: {
    create() {
      axios
        .post("/api/user/create", this.form)
        .then(res => {
          if (res.data.success) {
            this.userCreationState = this.$lang.user._creation_success;
            this.snackbar = true;
            this.getUsers();
          } else {
            this.userCreationState = this.$lang.user._creation_failed;
            this.snackbar = true;
          }
        })
        .catch(err => {
          console.warn(err.response.data);
        });
    },

    getUsers() {
      axios
        .get("/api/user/getAll")
        .then(res => {
          this.users = res.data.data;
        })
        .catch(err => console.warn(err.response.data));
    },

    deleteUser(userId) {
      axios.post("/api/user/delete", { id: userId }).then(res => {
        if (res.data.success) {
          this.getUsers();
          this.deleteModalState = false;
          this.userCreationState = this.$lang.user._user_has_been_deleted;
          this.snackbar = true;
        }
      });
    },

    openModal() {
      this.createModalActive = !this.createModalActive;
    },

    openDeleteModal(user) {
      this.deleteModalData = user;
      this.deleteModalState = true;
    },

    userIsAdmin() {
      axios.get("/api/user/isAdmin").then(res => {
        this.isAdmin = res.data.success;
      });
    }
  }
};
</script>
