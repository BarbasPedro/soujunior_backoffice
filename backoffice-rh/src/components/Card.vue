<script setup lang="ts">
import Button from './Button.vue';
</script>

<template>
  <div class="card">
    <div class="contentOnLeft">
      <div class="field">
        <label>Nome:</label>
        <p>Jane Cooper</p>
      </div>
      <div class="field">
        <label>Área de Atuação:</label>
        <p>Marketing</p>
      </div>
      <div class="field">
        <label>Subárea de atuação:</label>
        <p>Social Media</p>
      </div>
      <div class="field">
        <label>Período de Disponibilidade:</label>
        <p>Manhã</p>
      </div>
      <div class="field">
        <label>Disponibilidade:</label>
        <p>Manhã</p>
      </div>
      <div class="field">
        <label>LinkedIn:</label>
        <p>www.linkedin.com/in/janecooper</p>
      </div>
    </div>
    <div class="contentOnRight">
        <div class="filedsOnRight">
            <div class="field">
                <label>Data da Candidatura:</label>
                <p>12/06/2024</p>
            </div>
            <div class="field">
                <label>Status:</label>
                <p>Ativo</p>
            </div>
            <div class="buttons">
                <Button placeholder="Atrelar à vaga"/>
            </div>
        </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  background-color: #ccc;
  max-width: 918px;
  width: 100%;
  max-height: 192px;
  padding: 21px 19px;
  border-radius: 16px;
  display: flex;
  position: relative;

  .contentOnLeft,
  .contentOnRight {
    .field {
      display: flex;
      label {
        margin-right: 8px;
        margin-bottom: 8px;
        font-weight: 700;
      }
    }
  }

  .contentOnRight {
    position: absolute;
    right: 0;
    padding-right: 21px;
    background-color: green;
  }
}
</style>
