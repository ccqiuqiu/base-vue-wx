<!--Created by 熊超超 on 2018/2/5.-->
<template>
  <div>
    <div>bbbb</div>
    <div class="f-24">bbbb</div>
    <yd-button type="primary" @click.native="$router.push('/b/c')">primary</yd-button>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    components: {},
    data() {
      return {}
    },
    computed: {
      ...mapState([])
    },
    methods: {}
  }
</script>

<style scoped>
  div{
    background-color: blue;
  }
</style>
