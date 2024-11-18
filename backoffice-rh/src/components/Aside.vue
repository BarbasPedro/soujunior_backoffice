<script setup lang="ts">
import Checkbox from "./Checkbox.vue";

// Lista de áreas de atuação
const workAreas = [
  "Agilista",
  "APM - Produto",
  "Business",
  "Data",
  "Design",
  "DevOps",
  "Front-End",
  "Marketing",
  "Quality Assurance (QA)",
  "Scrum Master",
  "Tech Recruiter",
  "Social Media",
];

const subAreas = [
  "Product Manager",
  "Product Growth",
  "Product Operations",
  "Product Marketing Manager",
  "Social Media",
];

const disponibilidades = [
  "5h/semanais",
  "10h/semanais",
  "15h/semanais",
  "+15h/semanais",
]

const periodos = [
  "Manhã",
  "Tarde",
  "Noite"
]
</script>

<template>
  <aside>
    <div class="roles">
      <label for="Junior">
        <input type="radio" name="role" value="Mentor" />Junior
      </label>

      <label for="Mentor">
        <input type="radio" name="role" value="Mentor" />Mentor
      </label>

      <label for="Head">
        <input type="radio" name="role" value="Head" />Head
      </label>
    </div>

    <div class="checkboxes">
      <div class="workArea">
        <h2>Área de atuação</h2>
        <Checkbox v-for="(workArea, index) in workAreas" :key="index" :label="workArea" />
      </div>

      <div class="subArea">
        <h2>Sub-área</h2>
        <Checkbox v-for="(subArea, index) in subAreas" :key="index" :label="subArea" />
      </div>
      
      <div class="availability">
        <h2>Disponibilidade</h2>
        <Checkbox v-for="(disp, index) in disponibilidades" :key="index" :label="disp" />
      </div>

      <div class="availableShift">
        <h2>Período de disponibilidade</h2>
        <Checkbox v-for="(periodo, index) in periodos" :key="index" :label="periodo" />
      </div>
    </div>
  </aside>
</template>

<style scoped>
aside {
  padding-left: 27px;

  .roles {
    display: flex;
    flex-direction: column;
    margin: 40px 141px 40px 0px;
  }

  .workArea, .subArea, .availability, .availableShift {
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
    h2 {
      text-transform: uppercase;
      font-size: 1rem;
    }
  }
}
</style>
