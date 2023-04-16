<template>
    <div>
        <h1>Create a new recipe</h1>
        <v-form>

            <v-text-field
                    v-model="temp_name"
                    label="food component name"
                    required
            ></v-text-field>
            <div v-for="(ingredient,index) in computeAmountOfFields" class="d-flex">
                <v-text-field
                        v-model="temp_ingredients[index]"
                        label="food component ingredient"
                        required
                ></v-text-field>
                <v-btn @click="addIngredient()">add ingredient</v-btn>
            </div>


            <v-btn class="ml-auto" @click="addFoodComponent()">
                Add food component
            </v-btn>
            <br>
            <br>
            <br>
            <br>
            <v-btn color="primary" @click="createRecipe()">Create</v-btn>
        </v-form>
        {{ food_components }}

        <h2>Preview</h2>
        <DisplayFoodComponents :ingredients_mock="{food_components: food_components}"/>
    </div>
</template>

<script lang="ts" setup>

import DisplayFoodComponents from "~/components/recipe/DisplayFoodComponents.vue";

const name = ref('')
const description = ref('')
const food_components: globalThis.Ref<object[]> = ref([])
const instructions = ref([])
const image = ref('')
const time = ref(0)
const difficulty = ref(0)

const temp_component: globalThis.Ref<object> = ref({
    name: '',
    ingredients: []
})
const ingredients_fields = ref(1)
const temp_name: globalThis.Ref<string> = ref('')
const temp_ingredients: globalThis.Ref<string[]> = ref([''])
const currentWrite = ref('')

const createRecipe = () => {
    useFetch('http://localhost:8000/api/recipes/create', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + useCookie('token').value
        },
        body: {
            name: name,
            description: description,
            food_components: food_components,
            instructions: instructions,
            difficulty: difficulty,
            time: time,
            image: image
        }
    }).then((res) => {
        console.log(res.data.value)
    })
}

const addFoodComponent = () => {
    food_components.value.push({
        name: temp_name.value,
        ingredients: temp_ingredients.value
    })
    temp_name.value = ''
    temp_ingredients.value = ['']
}

const addIngredient = () => {
    temp_ingredients.value.push('')
    ingredients_fields.value++
}

const computeAmountOfFields = computed(() => {
    //ts-ignore
    try {
        return temp_ingredients.value.length
    } catch (e) {
        return 0
    }

})

</script>

<style scoped>

</style>