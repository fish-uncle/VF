<template>
  <Menu class="fn-fl vf-help-left" :open-names="['1','2','3','4']" :active-name="help.helpName"
        @on-select="handleSelect">
    <Submenu name="1">
      <template slot="title">
        {{$t('help_left_1')}}
      </template>
      <MenuItem name="Introduce">{{$t('help_left_1_1')}}</MenuItem>
      <MenuItem name="Catalogue introduction">{{$t('help_left_1_2')}}</MenuItem>
    </Submenu>
<!--    <Submenu name="2">-->
<!--      <template slot="title">-->
<!--        {{$t('help_left_2')}}-->
<!--      </template>-->
<!--      <MenuItem name="Quick use">{{$t('help_left_2_1')}}</MenuItem>-->
<!--      <MenuItem name="Dynamic data">{{$t('help_left_2_2')}}</MenuItem>-->
<!--    </Submenu>-->
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
      async handleSelect(name) {
        this.$router.push(`/help/${name}`);
        const content = await import(`./${name}-${this.$i18n.locale}.md`)
        this.$store.commit('help/changeHelp', {
          helpName: name,
          helpContent: content
        })
      }
    }
  }
</script>
<style lang="less">
  .vf-help-left {
    height: calc(100vh - 80px);
  }
</style>