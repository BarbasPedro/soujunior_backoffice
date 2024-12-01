<script setup lang="ts">
import axios from 'axios';
import { onMounted, ref, watch } from 'vue';
import Checkbox from './Checkbox.vue';
import { useJobsStore } from '../stores/jobsStore';

interface JobTitle {
  id: number;
  title: string;
  is_active: boolean;
}

const jobTitles = ref<JobTitle[]>([]);
const jobsStore = useJobsStore();

watch(() => jobsStore.getSelectedJobs, (newValue) => {
  console.log('Jobs selecionados:', newValue);
}, { deep: true });

const fetchJobs = async () => {
  try {
    const response = await axios.get("http://localhost:8000/jobtitles");
    jobTitles.value = response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Erro ao buscar área de atuação:", error.message);
    } else {
      console.error("Erro ao buscar área de atuação:", error);
    }
  }
};

const handleSelectedJobs = (jobId: number, isChecked: boolean) => { 
  jobsStore.toggleJob(jobId)
}

onMounted(() => {
  fetchJobs();
});
</script>

<template>
    <ul>
        <h2>Área de atuação</h2>
        <li v-for="jobTitle in jobTitles" :key="jobTitle.id">
          <Checkbox 
            :label="jobTitle.title"
            :checked="jobsStore.getSelectedJobs.includes(jobTitle.id)"
            @change="(isChecked) => handleSelectedJobs(jobTitle.id, isChecked)"
          />
        </li>
    </ul>
</template>

<style scoped>
    ul {
      display: flex;
      flex-direction: column;
      margin-bottom: 40px;
        
      h2 {
        font-weight: 600;
        text-transform: uppercase;
        font-size: 1rem;
        margin-bottom: 8px;
      }
    }
</style>