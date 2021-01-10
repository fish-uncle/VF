<template>
  <div>
    <i-input
      class="vf-amap"
      v-bind="currentVal.props"
      :class="[currentVal.className,error?'vf-error':'']"
      v-model="address"
      :readonly="true"
      :placeholder="currentVal.placeholder"
      :style="{width:`${currentVal.widthRatio}%`}"
    >
      <Button slot="append" icon="ios-search" @click="handleClick"></Button>
    </i-input>
    <Modal v-model="amapVisible" v-if="!edit" :closable="false" :footer-hide="true">
      <div class="amap" id="amap"></div>
      <div class="text-center" :style="{marginTop:'20px'}">
        <Button type="primary" @click="handleSubmit">{{language==='zh'?'选择地址':'Choose Address'}}</Button>
      </div>
    </Modal>
  </div>
</template>
<script>
  import func from '../../../mixins/component'
  import AMap from '../../../utils/AMap'

  export default {
    data() {
      return {
        amapVisible: false,
        center: [],
      }
    },
    computed: {
      address() {
        if (this.parent.data[this.currentVal.key].length) {
          return ` 经度${this.parent.data[this.currentVal.key][0]},纬度${this.parent.data[this.currentVal.key][1]}`
        } else {
          return ''
        }
      }
    },
    mixins: [func],
    methods: {
      handleSubmit() {
        this.parent.changeData({
          value: this.center,
          key: this.currentVal.key
        })
        this.amapVisible = false
      },
      handleClick() {
        this.amapVisible = true
        const _self = this
        AMap(this.currentVal.amapKey, this.currentVal.amapVersion).then(({AMap, AMapUI}) => {
          AMapUI.loadUI(['misc/PositionPicker'], function (PositionPicker) {
            const map = new AMap.Map('amap', {
              zoom: 16,
              scrollWheel: false,
              center: _self.currentVal.amapCenter.split(',')
            })
            const positionPicker = new PositionPicker({
              mode: 'dragMap',
              map: map
            })
            positionPicker.on('success', function (positionResult) {
              _self.center = [positionResult.position.lng, positionResult.position.lat]
            })
            if (_self.parent.data[_self.currentVal.key].length) {
              positionPicker.start(_self.parent.data[_self.currentVal.key])
            } else {
              positionPicker.start()
            }
          })
        })
      },
    }
  }
</script>
<style lang="less">
  @import "../../../less/conf";

  .vf-amap.vf-error {
    input {
      border-color: @error-color;
      outline: 0;
      box-shadow: 0 0 0 2px rgba(237, 64, 20, .2);
    }
  }

  .amap {
    height: 600px;
  }
</style>
