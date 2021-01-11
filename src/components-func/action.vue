<template>
    <div class="vf-control">
        <label>{{$t('admin_right_btn28')}}</label>
        <i-input v-model="item.action"
                 @on-change="e=>inputChange(e,'action')">
        </i-input>
    </div>
</template>
<script>
    import func from '../mixins/func'
    export default {
        mixins:[func],
    }
</script>
