<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-btn slot="activator" color="accent" dark>Modifier</v-btn>
      <v-card dark>
        <v-card-title>{{ $lang.user._modify_password }}</v-card-title>
        <form>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12>
                  <v-text-field
                    :label="$lang.user._last_password"
                    type="password"
                    required
                    @input="$v.password.$touch()"
                    @blur="$v.password.$touch()"
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
              </v-layout>
            </v-container>
          </v-card-text>
        </form>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="darken-1" flat @click="dialog = false"> {{ $lang.user._close_message}}</v-btn>
          <v-dialog v-model="dialog2" persistent max-width="290">
            <v-btn slot="activator" color="primary" dark v-text="$lang.user._save"></v-btn>
            <v-card>
              <v-card-title class="headline">{{ $lang.user._are_you_sure }}</v-card-title>
              <v-card-text>{{ $lang.user._you_are_going_to_modify_information_from_the_account }}</v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green darken-1" flat @click="dialog = false"> {{ $lang.user._cancel }}</v-btn>
                <v-btn color="green darken-1" flat @click="dialog = false"> {{ $lang.user._i_agree }}</v-btn>
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

    openModal() {
      this.createModalActive = !this.createModalActive;
    }
  }
};
</script>
