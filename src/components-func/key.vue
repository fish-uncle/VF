<template>
    <div class="vf-control">
        <label>{{$t('admin_right_btn7')}}</label>
        <i-input :value="item.key"
                 @on-change="e=>keyChange(e)" v-if="item.dataType!=='MultiData'"/>
        <i-input :value="item.key.split(';')[0]"
                 @on-change="e=>dateRangeKeyChange(e,'0')" v-if="item.dataType==='MultiData'"/>
        <i-input :value="item.key.split(';')[1]"
                 @on-change="e=>dateRangeKeyChange(e,'1')" v-if="item.dataType==='MultiData'"/>
    </div>
</template>
<script>
    import func from '../mixins/func'
    export default {
        mixins:[func],
    }
</script>
