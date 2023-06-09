import {useAuthStore} from "~/store/auth";
// @ts-ignore
import {jwtVerify} from "jose";
import {useStorage} from "@vueuse/core";

export default defineNuxtRouteMiddleware(async (to, from) => {
    const store = useAuthStore()
    try {
        //let decoded = jwt.verify(store.token, process.env.JWT_SECRET);
        //const test = useStorage('token', 'no-token')
        //console.log('client middlew', test.value)
        console.log('client middlew', store.token)
        const decoded = await jwtVerify(store.token, new TextEncoder().encode(process.env.JWT_SECRET));
        console.log('sucess: ', decoded)
    } catch(err) {
        console.log(err)
        console.log(to,from)
        return navigateTo('/')
    }

})