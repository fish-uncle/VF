<template>
  <div class="f-image" :class="[currentVal.dragItem.className]">
    <img :src="img" alt="" v-if="img"/>
    <label v-else for="vf-image">
      <input  accept="image/*" :disabled="currentVal.dragItem.disabled"
              id="vf-image" type="file" style="display: none;" @change="fileChange"/>
    </label>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        img: '',
        currentVal: this.value,
      }
    },
    props: ["value"],
    watch: {
      value(val) {
        this.currentVal = val;
      }
    },
    methods: {
      fileChange(e) {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          const dataURL = reader.result;
          this.img = dataURL;
          this.$store.commit('center/changeData', {
            value: dataURL,
            key: this.currentVal.dragItem.key
          })
        };
      }
    }
  }
</script>
