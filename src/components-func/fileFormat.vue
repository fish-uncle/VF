<template>
    <div class="vf-control">
        <label>{{$t('admin_right_btn29')}}</label>
        <i-input v-model="item.fileFormat"
                 @on-change="e=>inputChange(e,'fileFormat')"/>
    </div>
</template>
<script>
    import func from '../mixins/func'
    export default {
        mixins:[func],
    }
</script>
