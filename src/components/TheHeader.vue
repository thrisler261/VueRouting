<script setup>
import rickandmortyimage from '@/assets/rickandmorty.png';
const title = 'Rick and Morty API Demo';
</script>

<template>
    <div class="container mt-3 p-4 bg-danger text-white rounded text-center">
        <h1>{{ title }}</h1>
    </div>

    <div class="container mt-3 rounded text-center">
        <img :src="rickandmortyimage" alt="Rick and Morty Title Image" width="200">
    </div>
</template>