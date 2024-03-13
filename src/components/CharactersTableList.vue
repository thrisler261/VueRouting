<script setup>
defineProps(['characters']);
</script>

<template>
    <table class="table">
        <tr>
            <th>Name</th>
            <th>Image</th>
          <th></th>
        </tr>
        <tr v-for="character in characters.results" :key="character.id">
            <td>{{ character.name }}</td>
            <td><img class="img-fluid" :src="character.image" :alt="character.name" width="150"></td>
           <td>  <router-link to="/character/:id" class="btn btn-primary">Weitere Details</router-link></td>
        </tr>
    </table>
</template>