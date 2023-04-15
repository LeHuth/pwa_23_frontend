<template>
    <div class="d-flex justify-space-between mx-auto" style="width: fit-content">
        <v-icon :icon="icon" size="28"/>
        <div class="ml-3">
            <p class="font-size-10 line-height-10 mb-1 text-uppercase text-grey-darken-1">
                {{ title }}
            </p>
            <p class="font-size-14 line-height-14">
                {{ text }}
            </p>
        </div>
    </div>
</template>

<script lang="ts" setup>
defineComponent({
    name: 'TimeInfo'
})
defineProps(['icon', 'title', 'text'])
</script>

<style scoped>

</style>