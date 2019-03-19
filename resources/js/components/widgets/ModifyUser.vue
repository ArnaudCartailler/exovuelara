<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-btn slot="activator" color="accent" dark>Modifier</v-btn>
      <v-card dark>
        <v-card-title>{{ $lang.user._create_user }}</v-card-title>
        <form>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md4>
                  <v-text-field
                    :label="$lang.user._username"
                    :value="userInfo.username"
                    v-model="userInfo.username"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field
                    :label="$lang.user._firstname"
                    :value="userInfo.firstname"
                    v-model="userInfo.firstname"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field
                    :label="$lang.user._lastname"
                    :value="userInfo.lastname"
                    v-model="userInfo.lastname"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field
                    :label="$lang.user._email"
                    :value="userInfo.email"
                    v-model="userInfo.email"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field
                    :label="$lang.user._new_password"
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
                    :value="userInfo.company"
                    v-model="userInfo.company"
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
        </form>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="darken-1" flat @click="dialog = false">Close</v-btn>
          <v-dialog v-model="dialog2" persistent max-width="290">
            <v-btn slot="activator" color="primary" dark v-text="$lang.user._save"></v-btn>
            <v-card>
              <v-card-title class="headline">Êtes-vous sûr ?</v-card-title>
              <v-card-text>Vous allez modifier des informations lié à un compte.</v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green darken-1" flat @click="dialog = false">Annuler</v-btn>
                <v-btn color="green darken-1" flat @click="dialog = false">J'accepte</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
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
    dialog2: false,
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

  props: ["userInfo"],

  created() {},

  mounted() {
    // let _this = this;
    // this.$root.$on("modalClosed", function() {
    //   _this.createModalActive = !this.createModalActive;
    // });
  },

  methods: {
    // create() {
    //   axios
    //     .post("/api/user/create", this.form)
    //     .then(res => {
    //       if (res.data.success) {
    //         this.userCreationState = this.$lang.user._creation_success;
    //         this.snackbar = true;
    //         this.getUsers();
    //       } else {
    //         this.userCreationState = this.$lang.user._creation_failed;
    //         this.snackbar = true;
    //       }
    //     })
    //     .catch(err => {
    //       console.warn(err.response.data);
    //     });
    // },

    // openModal() {
    //   this.createModalActive = !this.createModalActive;
    // }
  }
};
</script>
