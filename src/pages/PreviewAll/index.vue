<template>
  <div>
    <f-list/>
    <div class="text-center">
      <Button type="primary" @click="handleSubmit">{{$t('model_preview_submit')}}</Button>
    </div>
  </div>
</template>
<script>
  import {verifyRequired} from '../../utils';
  import {mapState} from "vuex";

  export default {
    computed: mapState(["model", "center", "language", "component"]),
    methods: {
      handleSubmit() {
        if (!verifyRequired.bind(this)()) {
          console.log(this.center.data);
        }
      },
    },
    mounted() {
      const component = this.component.list;
      const i = Math.floor(Math.random() * (component.length - 1));
      const j = Math.floor(Math.random() * (component.length - 1));
      this.$store.commit('center/clear');
      component.forEach((dragItem, index) => {
        i === index ? dragItem.required = true : void 0;
        j === index ? dragItem.required = true : void 0;
        if (dragItem.type === 'image') {
          dragItem.defaultList = [
            {
              'name': '1.jpg',
              'url': 'https://cdn.shenzhepei.com/VF/images/1.jpg'
            },
          ]
        }
        this.$store.commit('center/add', {dragItem})
      });
      const list = this.center.list;
      list.forEach((item, index) => {
        item.w = 12
        item.x = index % 2 === 0 ? 0 : 12
      })
      this.$store.commit('center/setList', {list})
    }
  }
</script>