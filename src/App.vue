<!--Created by 熊超超 on 2017/8/4.-->
<template>
  <div id="app" flex="dir:top">
    <div :class="['content-view']">
      <router-view v-transition class="router-view"></router-view>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    data () {
      return {}
    },
    components: {},
    computed: {
      ...mapState(['toast'])
    },
    methods: {}
  }
</script>
<style lang="less">
</style>
