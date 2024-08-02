<script setup>
import { RouterLink, useRoute } from 'vue-router';
import logo from '@/assets/img/logo.png';

const route = useRoute();
const isActiveLink = (routePath) => {
  return route && route.path === routePath;
};
</script>

<template>
  <nav class="bg-[#f5f5ee] border-b border-[#f5f5ee]">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between">
        <div class="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
          <!-- Logo -->
         <RouterLink class="flex flex-shrink-0 items-center mr-4" to="/">
            <img class="h-10 w-auto" :src="logo" alt="Jobs in" />
            <span class="hidden md:block text-[#FF9666] text-2xl font-bold ml-2">Jobs in</span>
          </RouterLink> 
          <div class="md:ml-auto">
              <RouterLink
                to="/"
                :class="[
                  isActiveLink('/')
                    ? 'bg-[#ffb18d] text-[#f5f5ee]'
                    : ' hover:text-[#FF9666]',
                  'text-black',
                  'px-3',
                  'py-2',
                  'rounded-md',
                ]"
                >Home</RouterLink
              >
              <RouterLink
                to="/jobs"
                :class="[
                  isActiveLink('/jobs')
                  ? 'bg-[#ffb18d] text-[#f5f5ee]'
                    : ' hover:text-[#FF9666]',
                  'text-black',
                  'px-3',
                  'py-2',
                  'rounded-md',
                ]"
                >Jobs</RouterLink
              >
              <RouterLink
                to="/jobs/add"
                :class="[
                  isActiveLink('/jobs/add')
                  ? 'bg-[#ffb18d] text-[#f5f5ee]'
                    : ' hover:text-[#FF9666]',
                  'text-black',
                  'px-3',
                  'py-2',
                  'rounded-md',
                ]"
                >Add Job</RouterLink>
  
            
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
