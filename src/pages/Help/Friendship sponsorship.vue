<template>
  <div>
    <h2>{{$t('Friendship sponsorship_h2_1')}}</h2>
    <p>{{$t('Friendship sponsorship_p_1')}}
      <a href="https://github.com/fish-uncle" target="_blank"
         rel="nofollow">Fish Uncle</a>
      {{$t('Friendship sponsorship_p_2')}}<a href="javascript:please();">{{$t('Friendship sponsorship_p_3')}}</a>
      {{$t('Friendship sponsorship_p_4')}}</p>
    <h2>{{$t('Friendship sponsorship_h2_2')}}</h2>
    <ul class="vf-sponsorship-list">
      <li>
        <div class="fn-flex">
          <span>2020-08-07</span>
          <img class="circle" src="https://cdn.shenzhepei.com/VF/sponsorship/1.jpg"/>
          <span>{{$t('Friendship sponsorship_list_1')}}</span>
          <i>¥10.00</i>
        </div>
      </li>
    </ul>
  </div>
</template>
<style lang="less">
  .vf-sponsorship-list {
    li {
      height: 30px;

      span {
        line-height: 30px;
      }

      img {
        margin: 0 10px;
        width: 30px;
      }

      i {
        margin-left: 10px;
        font-style: normal;
        line-height: 30px;
      }
    }
  }
</style>