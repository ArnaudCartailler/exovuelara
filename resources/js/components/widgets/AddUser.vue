<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="600px" dark>
      <v-btn slot="activator" color="accent" dark v-text="$lang.user._create_user"></v-btn>
      <v-card>
        <v-card-title>{{ $lang.user._create_user }}</v-card-title>
        <form>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md4>
                  <v-text-field
                    :label="$lang.user._username"
                    required
                    @input="$v.name.$touch()"
                    @blur="$v.name.$touch()"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field
                    :label="$lang.user._firstname"
                    required
                    @input="$v.firstname.$touch()"
                    @blur="$v.firstname.$touch()"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field
                    :label="$lang.user._lastname"
                    required
                    @input="$v.lastname.$touch()"
                    @blur="$v.lastname.$touch()"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field
                    :label="$lang.user._email"
                    required
                    @input="$v.email.$touch()"
                    @blur="$v.email.$touch()"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field
                    :label="$lang.user._password"
                    type="password"
                    required
                    @input="$v.password.$touch()"
                    @blur="$v.password.$touch()"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field
                    :label="$lang.user._password_confirmation"
                    type="password"
                    required
                    @input="$v.repeatPassword.$touch()"
                    @blur="$v.repeatPassword.$touch()"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field
                    :label="$lang.user._company_name"
                    required
                    @input="$v.company.$touch()"
                    @blur="$v.company.$touch()"
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
            <small v-text="$lang.user._required_fields"></small>
          </v-card-text>
        </form>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="darken-1" flat @click="dialog = false" v-text="$lang.user._close_message"></v-btn>
          <v-btn color="primary darken-1" flat @click="dialog = false" v-text="$lang.user._save"></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    date: new Date().toISOString().substr(0, 10),
    menu: false,
    modal: false,
    menu2: false,
    dialog: false,
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
  }),

  created() {
    this.getUsers();
    this.userIsAdmin();
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
