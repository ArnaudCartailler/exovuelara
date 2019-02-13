<template>
    <div>
        <toolbar></toolbar>
        <calendar></calendar>
        <tree></tree>
        <router-view></router-view>
    </div>

</template>

<script>

import toolbar from './Toolbar'
import tree from './Tree'
import calendar from './Calendar'

export default {
    components:{toolbar, tree, calendar}
}

</script>

<style>

</style>
