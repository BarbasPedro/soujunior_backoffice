import { defineStore } from "pinia";

export const useJobsStore = defineStore("jobs", {
    state: () => ({
        selectedJobsIds: [] as number[],
    }),
    getters: {
        getSelectedJobs: (state) => state.selectedJobsIds
      },
    actions: {
        toggleJob(jobId: number) {
            const index = this.selectedJobsIds.indexOf(jobId)
            if (index === -1) {
            this.selectedJobsIds.push(jobId)
            } else {
            this.selectedJobsIds.splice(index, 1)
            }
        }
    }
})    
