<template>
  <Menu class="fn-fl vf-help-left" :open-names="['1','2','3','4']" :active-name="help.helpName"
        @on-select="handleSelect">
    <Submenu name="1">
      <template slot="title">
        {{$t('help_left_1')}}
      </template>
      <MenuItem name="Introduce">{{$t('help_left_1_1')}}</MenuItem>
      <MenuItem name="Catalogue introduction">{{$t('help_left_1_2')}}</MenuItem>
      <MenuItem name="First example">{{$t('help_left_1_3')}}</MenuItem>
    </Submenu>
    <Submenu name="2">
      <template slot="title">
        {{$t('help_left_2')}}
      </template>
      <MenuItem name="Quick use">{{$t('help_left_2_1')}}</MenuItem>
      <MenuItem name="Dynamic data">{{$t('help_left_2_2')}}</MenuItem>
      <!--      <MenuItem name="Basic components">{{$t('help_left_2_3')}}</MenuItem>-->
      <!--      <MenuItem name="Decorating components">{{$t('help_left_2_4')}}</MenuItem>-->
    </Submenu>
    <!--    <Submenu name="3">-->
    <!--      <template slot="title">-->
    <!--        {{$t('help_left_3')}}-->
    <!--      </template>-->
    <!--      <MenuItem name="Custom components">{{$t('help_left_3_1')}}</MenuItem>-->
    <!--      <MenuItem name="Internationalization">{{$t('help_left_3_2')}}</MenuItem>-->
    <!--    </Submenu>-->
    <Submenu name="4">
      <template slot="title">
        {{$t('help_left_4')}}
      </template>
      <MenuItem name="Friendship sponsorship">{{$t('help_left_4_1')}}</MenuItem>
      <MenuItem name="Feedback">{{$t('help_left_4_2')}}</MenuItem>
    </Submenu>
  </Menu>
</template>
<script>
  import {mapState} from "vuex";

  export default {
    computed: mapState(["help"]),
    methods: {
      handleSelect(name) {
        const currentHash = decodeURIComponent(location.hash.replace('#', ''));
        const nowHash = `/help/${name}`;
        if (encodeURIComponent(currentHash.replace(/\s+/g, "")) !== encodeURIComponent(nowHash.replace(/\s+/g, ""))) {
          this.$router.push(nowHash);
        }
      }
    }
  }
</script>
<style lang="less">
  .vf-help-left {
    height: calc(100vh - 120px);
  }
</style>