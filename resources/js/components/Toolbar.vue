<template>
    <v-toolbar>
    <v-toolbar-title>

                <router-link to="/">
                    <v-btn flat>Blog</v-btn>
                </router-link>

    </v-toolbar-title>

    <v-spacer></v-spacer>

    <div class="hidden-sm-and-down">

        <router-link to="/">
            <v-btn flat>Forum</v-btn>
        </router-link>

      <v-btn flat>Ask Question</v-btn>

      <v-btn flat>Category</v-btn>

    </div>

  </v-toolbar>
</template>

<script>
export default {

}
</script>

<style>

</style>
