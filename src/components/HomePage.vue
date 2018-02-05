<!--Created by 熊超超 on 2018/2/5.-->
<template>
  <div>
    <div>homepage</div>
    <div class="f-title">homepage</div>
    <div class="f-con">homepage</div>
    <div class="f-des">homepage</div>
    <div class="f-sub">homepage</div>
    <div class="f-sec">homepage</div>
    <div class="f-min">homepage</div>
    <yd-button size="large" type="primary" class="line">primary</yd-button>
    <yd-button type="primary" @click.native="$router.push('/b')">primary</yd-button>

    <yd-button size="large" type="hollow">Custom Color</yd-button>

    <yd-button size="large" type="warning" @click.native="click">Custom Color</yd-button>

    <yd-button-group>
      <yd-button size="large" @click.native="$toast('请输入用户名')" type="primary">Block Button</yd-button>
    </yd-button-group>

    <yd-cell-item>
      <span slot="left">用户名：</span>
      <yd-input slot="right" required max="20" placeholder="请输入用户名"></yd-input>
    </yd-cell-item>


    <yd-icon name="tel" custom></yd-icon>
    <yd-icon name="phone2"></yd-icon>

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
    methods: {
      click() {
        this.$loading('警告框')
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../assets/css/vars.less";

  div {
    background-color: @green-press;
  }
</style>
