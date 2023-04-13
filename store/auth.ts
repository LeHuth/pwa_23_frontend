import { defineStore, skipHydrate } from 'pinia'
import {useLocalStorage, useStorage} from "@vueuse/core";
const baseUrl = 'localhost:8000'

export const useAuthStore = defineStore('auth',  {
    state: () => {
        return {
            token: useCookie('token').value,
        }
    },
    persist: {
        storage: persistedState.cookiesWithOptions({
            sameSite: 'strict',
        }),
    },
    hydrate(state,initialState ) {
        state.token = useCookie<string>('token').value
    }
    /*
        const auth: Ref<{user:Object, token:string}> = ref({
            user: {},
            token: 'null',
        })

        if(localStorage.getItem('auth')) {
            auth.value = JSON.parse(localStorage.getItem('auth') || '')
        }

        watch(auth,
            (newVal, oldVal) => {
                localStorage.setItem('auth', JSON.stringify(newVal))
            },
            {deep: true}
        )

        const getToken = computed(() => {
            return auth.value.token
        })

        const changeToken = (token: string) => {
            auth.value.token = token
        }
        return {
            auth,
            changeToken,
            getToken,
        }


        actions: {
            async login(creds: { username: string, password: string }) {
                await $fetch(`${baseUrl}/api/users/auth/login`, {
                    method: 'POST',
                    body: creds
                })
                    .then(response => {
                        this.user = response
                        this.token = this.user.jwt_token
                        localStorage.setItem('user', JSON.stringify(this.user))
                        localStorage.setItem('token', JSON.stringify(this.token))
                    })
                    .catch(error => { throw error })
            },
            logout() {
                this.user = null
                this.token = null
                localStorage.removeItem('user')
                localStorage.removeItem('token')
            }
        }
        */
})