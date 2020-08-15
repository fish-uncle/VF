<template>
  <div class="f-image" :class="[currentVal.dragItem.className,currentVal.dragItem.disabled?'f-image-disabled':'',currentVal.dragItem.className]"
       :style="{width:`${currentVal.dragItem.widthRatio}%`}">
    <div class="f-image-upload-list" v-for="item in uploadList">
      <template v-if="item.status === 'finished'">
        <img :src="item.url"/>
        <div class="f-image-upload-list-cover">
          <Icon type="ios-eye-outline" @click.native="handleView(item.url)"></Icon>
          <Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>
        </div>
      </template>
      <template v-else>
        <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
      </template>
    </div>
    <Upload ref="upload"
            :action="currentVal.dragItem.action"
            :default-file-list="currentVal.dragItem.defaultList"
            type="drag"
            :max-size="currentVal.dragItem.maxSize"
            :show-upload-list="false"
            :format="fileFormat"
            :accept="currentVal.dragItem.fileAccept"
            :multiple="true"
            :on-success="handleSuccess"
            :on-format-error="handleFormatError"
            :on-exceeded-size="handleExceededError"
            :disabled="currentVal.dragItem.disabled"
            style="display: inline-block;width:58px;">
      <div style="width: 58px;height:58px;line-height: 58px;">
        <Icon type="ios-camera" size="20"></Icon>
      </div>
    </Upload>
    <Modal title="View Image" v-model="visible">
      <img :src="imgUrl" v-if="visible" style="width: 100%"/>
    </Modal>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        currentVal: this.value,
        visible: false,
        uploadList: [],
        imgUrl: '',
      }
    },
    computed: {
      fileFormat() {
        return this.currentVal.dragItem.fileFormat.split(',')
      }
    },
    props: ["value"],
    watch: {
      value(val) {
        this.currentVal = val;
      }
    },
    mounted() {
      this.init();
    },
    methods: {
      init() {
        const fileList = this.uploadList = this.$refs.upload.fileList;
        const list = fileList.map(item => item.url);
        this.$store.commit('center/changeData', {
          value: list,
          key: this.currentVal.dragItem.key
        })
      },
      handleExceededError() {
        this.$Message.error(`当前文件大小超出${this.currentVal.dragItem.maxSize}kb`)
      },
      handleFormatError() {
        this.$Message.error('当前文件格式不符合要求')
      },
      handleRemove(file) {
        const fileList = this.$refs.upload.fileList;
        this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
        const list = fileList.map(item => item.url);
        this.$store.commit('center/changeData', {
          value: list,
          key: this.currentVal.dragItem.key
        })
      },
      handleView(url) {
        this.imgUrl = url;
        this.visible = true;
      },
      handleSuccess(response, file, fileList) {
        file.url = response.data;
        file.name = response.data;
        const list = fileList.map(item => item.url);
        this.$store.commit('center/changeData', {
          value: list,
          key: this.currentVal.dragItem.key
        })
      }
    }
  }
</script>
<style lang="less">
  .f-image-upload-list {
    display: inline-block;
    width: 60px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    border: 1px solid transparent;
    border-radius: 4px;
    overflow: hidden;
    background: #fff;
    position: relative;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .2);
    margin-right: 4px;

    &:hover {
      .f-image-upload-list-cover {
        opacity: 1;
      }
    }

    img {
      width: 100%;
      height: 100%;
    }
  }

  .f-image-upload-list-cover {
    opacity: 0;
    transition: all .3s;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, .6);

    i {
      color: #fff;
      font-size: 20px;
      cursor: pointer;
      margin: 0 2px;
    }
  }

</style>
