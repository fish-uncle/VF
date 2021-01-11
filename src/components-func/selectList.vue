<template>
    <div class="vf-control">
        <label>{{$t('admin_right_btn19')}}</label>
        <RadioGroup v-model="tab" type="button" size="large">
            <Radio :label="1">{{$t('admin_right_btn19_1')}}</Radio>
            <Radio :label="2">{{$t('admin_right_btn19_2')}}</Radio>
        </RadioGroup>
        <ul class="vf-select-list" v-if="tab===1">
            <li class="fn-flex flex-row">
                <span style="width: 205px">{{$t('admin_right_btn19_3')}}</span>
                <span>{{$t('admin_right_btn19_4')}}</span>
            </li>
            <li class="fn-flex flex-row" v-for="(child,index) in item.selectList" :key="child.value">
                <i-input style="width: 195px" v-model="child.label"
            
                         @on-change="e=>inputTitleChange(e,index)"/>
                <i-input style="width: 195px;margin-left: 10px;" v-model="child.value"
            
                         @on-change="e=>inputValueChange(e,index)"/>
                <span :class="item.selectList.length>1?'':'disabled'" class="vf-select-del text-center pointer"
                      @click="selectDelChange(index)">-</span>
                <span class="vf-select-add text-center pointer" @click="selectAddChange(index)">+</span>
            </li>
        </ul>
        <label v-if="tab===2" class="fn-block">{{$t('admin_right_btn19_5')}}</label>
        <i-input v-if="tab===2" v-model="item.selectListUrl"
                 @on-change="e=>selectListUrlChange(e,'selectListUrl')"/>
    </div>
</template>
<script>
    import func from '../mixins/func'
    export default {
        mixins:[func],
    }
</script>
