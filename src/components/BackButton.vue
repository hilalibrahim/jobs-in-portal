<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <section>
    <div class="container m-auto py-6 px-6">
      <RouterLink
        to="/jobs"
        class="text-[#FF9666] hover:text-[#d78f6e] flex items-center"
      >
        <i class="pi pi-arrow-circle-left mr-3"></i> Back to Job Listings
      </RouterLink>
    </div>
  </section>
</template>
