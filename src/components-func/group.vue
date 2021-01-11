<template>
    <div class="vf-control">
        <label>{{$t('group2')}}</label>
        <i-select :clearable="true"
                  v-model="item.group">
            <i-option :value="item.id" v-for="item in center.group" :key="item.id">{{item.key}}</i-option>
        </i-select>
    </div>
</template>
<script>
    import func from '../mixins/func'
    export default {
        mixins:[func],
    }
</script>
