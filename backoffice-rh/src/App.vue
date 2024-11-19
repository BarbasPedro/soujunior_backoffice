<script setup lang="ts">
import Aside from "./components/Aside.vue";
import Card from "./components/Card.vue";
import Header from "./components/Header.vue";
</script>

<template>
  <div>
    <Header />
    <div class="main">
      <Aside />
      <div class="cards">
        <Card />
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  display: flex;
}

.cards { 
  padding-top: 172px;
  width: 100%;
}
</style>
