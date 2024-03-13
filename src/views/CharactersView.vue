<script setup>
import { ref, onMounted } from 'vue';
import CharactersTableList from '@/components/CharactersTableList.vue';

const characters = ref({});

async function getCharacters() {
  const response  = await fetch('https://rickandmortyapi.com/api/character');
  const data = await response.json();
  console.log(data);
  characters.value = data;
}

onMounted(() => {
  getCharacters();
});
</script>

<template>
    <div class="container mt-3 rounded text-center">
        <p>Number of characters: {{ characters.info?.count }}</p>
        <CharactersTableList :characters="characters"/>
    </div>
</template>