<style>
.img-background {
  background: #f5f5f5;
  height: 100%;
}
</style>

<template>
  <v-container row wrap ma-0 m-w-100 dark>
    <v-flex xs12 pa-2>
      <v-card class="border-div-primary" dark v-for="(user, i) in user" :key="i">
        <v-list two-line>
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title class="primary--text">
                <h4>{{ user.firstname + " " + user.lastname }}</h4>
              </v-list-tile-title>
              <v-list-tile-sub-title>{{ userRole }}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
        <hr class="ma-0">
        <v-list two-line >
          <v-list-tile>
            <v-list-tile-avatar>
              <v-icon large color="primary">mdi-at</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <!-- <v-text-field
                                        class="heading font-weight-bold"
                                        :label="$lang.user._email"
                                        :type="'email'"
                                        :value="user.email"
                                        v-model="user.email"
              ></v-text-field>-->
              {{ user.email }}
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile>
            <v-list-tile-avatar>
              <v-icon large color="primary">mdi-account</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>{{ user.firstname }}</v-list-tile-content>
          </v-list-tile>

          <v-list-tile>
            <v-list-tile-avatar>
              <v-icon large color="primary">mdi-account-tie</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>{{ user.lastname }}</v-list-tile-content>
          </v-list-tile>

          <v-list-tile>
            <v-list-tile-avatar>
              <v-icon large color="primary">mdi-account-circle</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>{{ user.username }}</v-list-tile-content>
          </v-list-tile>
        </v-list>
        <v-card-action>
          <modify-user :user-info="userInfo"></modify-user>
        </v-card-action>
      </v-card>

      <v-snackbar
        v-model="userEditState"
        :bottom="y === 'bottom'"
        :left="x === 'left'"
        :multi-line="mode === 'multi-line'"
        :right="x === 'right'"
        :timeout="timeout"
        :top="y === 'top'"
        :vertical="mode === 'vertical'"
      >
        {{ userEditMessage }}
        <v-btn
          color="primary"
          flat
          @click="userEditState    = false"
        >{{ this.$lang.user._close_message }}</v-btn>
      </v-snackbar>
    </v-flex>
  </v-container>
</template>


<script>
import AppStorage from "../helper/AppStorage";
import ModifyUser from "../components/widgets/ModifyUser";
import { getUser } from "../helper/DataFaker";

export default {
  components: {
    "modify-user": ModifyUser
  },

  data() {
    return {
      isEditing: false,
      user: {
        name: "",
        firstname: "",
        lastname: "",
        email: "",
        id: ""
      },
      y: "top",
      x: null,
      mode: "",
      timeout: 6000,
      userInfo: {},
      userEditState: false,
      userEditMessage: "",
      userRole: ""
    };
  },

  created() {
    this.getUserInfo();
    this.getRole();

    this.user = getUser();

  },

  computed: {},

  methods: {
    editUserInfo: function() {
      return (this.isEditing = !this.isEditing);
    },

    getUserInfo() {
      axios.get("/api/user/get").then(res => {
        this.userInfo = res.data.data;
        this.user.id = this.userInfo.id;
        this.user.name = this.userInfo.name;
        this.user.firstname = this.userInfo.firstname;
        this.user.lastname = this.userInfo.lastname;
        this.user.email = this.userInfo.email;
      });
    },
    update(user) {
      axios.post("/api/user/update", user).then(res => {
        if (res.data.success == true) {
          this.userEditMessage = this.$lang.user._user_has_been_modified;
          this.userEditState = true;
          this.getUserInfo();
        } else {
          this.userEditMessage = this.$lang.user._user_has_not_been_modified;
          this.userEditState = true;
          this.getUserInfo();
        }

        console.log(res.data);
      });
    },
    getRole() {
      axios.get("/api/user/getRole").then(res => {
        this.userRole = res.data.data.roleName;
      });
    }
  }
};
</script>
