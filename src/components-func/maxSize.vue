<template>
    <div class="vf-control">
        <label>{{$t('admin_right_btn27')}}</label>
        <i-input v-model="item.maxSize"
                 @on-change="e=>numberChange(e,'maxSize')"><span slot="append">kb</span>
        </i-input>
    </div>
</template>
<script>
    import func from '../mixins/func'
    export default {
        mixins:[func],
    }
</script>
