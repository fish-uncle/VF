<template>
    <div class="vf-control">
        <label>{{$t('admin_right_btn15')}}</label>
        <i-input v-model="item.character"
                 @on-change="e=>inputChange(e,'character')"/>
    </div>
</template>
<script>
    import func from '../mixins/func'
    export default {
        mixins:[func],
    }
</script>
