<template>
  <div>
      <h1>Create a new recipe</h1>
      <v-form>
          <v-text-field
                  label="Title"
                  required
          ></v-text-field>
          <v-textarea
                  label="Description"
                  required
          ></v-textarea>
          <v-text-field
                  label="Ingredients"
                  required
          ></v-text-field>
          <v-text-field
                  label="Instructions"
                  required
          ></v-text-field>
          <v-text-field
                  label="Image"
                  required
          ></v-text-field>
          <v-btn color="primary" @click="createRecipe()">Create</v-btn>
      </v-form>
  </div>
</template>

<script setup lang="ts">
const name = ref('')
const description = ref('')
const ingredients = ref([])
const instructions = ref([])
const image = ref('')
const time = ref(0)
const difficulty = ref(0)


const createRecipe = () => {
    useFetch('http://localhost:8000/api/recipes/create', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + useCookie('token').value
        },
        body: {
            name: name,
            description: description,
            ingredients: ingredients,
            instructions: instructions,
            difficulty: difficulty,
            time: time,
            image: image
        }
    }).then((res) => {
        console.log(res.data.value)
    })
}

</script>

<style scoped>

</style>