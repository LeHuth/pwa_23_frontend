<template>
<div>
    <p>Foo page</p>
    <h3>Protected</h3>
</div>
</template>

<script setup lang="ts">
definePageMeta({middleware: ["auth"]})
</script>

<style scoped>

</style>