<template>
  <ProjectTable />
</template>

<script>
import ProjectTable from "@/components/ProjectTable.vue";

export default {
  components: {
    ProjectTable
  }
}
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 50px;
  justify-content: center;
  align-items: flex-start;
}
</style>