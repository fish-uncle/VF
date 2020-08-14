<template>
  <div>
    <h2>{{$t('feedback_h2_1')}}</h2>
    <p>{{$t('feedback_p_1')}}</p>
    <h2>{{$t('feedback_h2_2')}}</h2>
    <p>
      <i class="ivu-icon ivu-icon-ios-mail"></i>：<a href="mailto:fishuncle@126.com">fishuncle@126.com</a>
    <p>
      <i class="ivu-icon ivu-icon-logo-github"></i>：<a href="https://github.com/fish-uncle" target="_blank"
                                                       rel="nofollow">Fish Uncle</a>
    </p>
    <p>
      QQ：184609680
    </p>
    <h2>{{$t('feedback_h2_3')}}</h2>
    <div id="gitalk-container"></div>
  </div>
</template>
<script>
  import 'gitalk/dist/gitalk.css';
  import Gitalk from 'gitalk';

  export default {
    mounted() {
      const gitalk = new Gitalk({
        clientID: '0cb59d60368e6e9d44aa',
        clientSecret: '8f0fe8f2b300b3a6887e5abed38581a2b6dda0ee',
        repo: 'gitalk',      // The repository of store comments,
        owner: 'fish-uncle',
        admin: ['fish-uncle'],
        id: location.pathname,      // Ensure uniqueness and length less than 50
        distractionFreeMode: false  // Facebook-like distraction free mode
      })

      gitalk.render('gitalk-container')
    }
  }
</script>