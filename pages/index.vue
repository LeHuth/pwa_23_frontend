<template>
    <div>
        <p>Index page</p>
        <v-btn @click="getRecipes()">V-btn</v-btn>
        <button @click="login()">CREDS</button>
        <button @click="$router.push('/foo')">next page</button>
    </div>
</template>

<script setup lang="ts">
import {useFetch} from "nuxt/app";
import {useStorage} from "@vueuse/core";
import {useAuthStore} from "~/store/auth";
const login = async () => {
    useFetch('http://localhost:8000/api/users/auth/login', {
        method: 'POST',
        body:{
            username: 'admin',
            password: 'admin'
        }
    }).then((res) => {
        console.log(res.data.value.token)
        const cookie = useCookie<string>('token')
        cookie.value = res.data.value.token
        const authStore = useAuthStore()
        authStore.token = cookie.value
        console.log(authStore.token, 'store token')
    })
}

const getRecipes = async () => {
    useFetch('http://localhost:8000/api/recipes/',{
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + useCookie('token').value
        },
    }).then((res) => {
        console.log(res.data.value)
    })
}

</script>

<style scoped>

</style>