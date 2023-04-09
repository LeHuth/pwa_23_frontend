<template>
    <div>
        <p>Index page</p>
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
        const state = useStorage('token', 'no-token')
        state.value = res.data.value.token
        const authStore = useAuthStore()
        authStore.token = res.data.value.token
        console.log(authStore.token, 'store token')
    })
}

</script>

<style scoped>

</style>