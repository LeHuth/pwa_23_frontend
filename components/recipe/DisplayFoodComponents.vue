<template>
    <div>
        <h2 class="mb-8">Ingredients</h2>
        <div v-for="f_component in ingredients_mock.food_components">
            <h3 class="mb-3">{{ f_component.name }}</h3>
            <div>
                <v-checkbox v-for="ingredient in f_component.ingredients"
                            class="font-size-14"
                            density="compact"
                            hide-details>
                    <template v-slot:label>
                        <span>{{ ingredient }}</span>
                    </template>
                </v-checkbox>
            </div>
        </div>
    </div>

</template>

<script lang="ts" setup>
defineComponent({
    name: 'DisplayFoodComponents'
})

defineProps(['ingredients_mock'])
</script>

<style scoped>

</style>