<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <footer class="bg-[#f5f5ee] border-t border-[#e5e5e5] py-8">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row md:justify-between">
        <!-- Links Section -->
        <div class="mb-6 md:mb-0">
          <h3 class="text-xl font-bold mb-4">Quick Links</h3>
          <ul>
            <li>
              <RouterLink
                to="/"
                class="text-[#FF9666] hover:text-[#e18a62]">Home</RouterLink>
            </li>
            <li>
              <RouterLink
                to="/jobs"
                class="text-[#FF9666] hover:text-[#e18a62]">Jobs</RouterLink>
            </li>
            <li>
              <RouterLink
                to="/jobs/add"
                class="text-[#FF9666] hover:text-[#e18a62]">Add Job</RouterLink>
            </li>
          </ul>
        </div>

        <!-- Contact Info Section -->
        <div class="mb-6 md:mb-0">
          <h3 class="text-xl font-bold mb-4">Contact Us</h3>
          <p class="mb-2">
            <i class="pi pi-home text-[#FF9666]"></i> 123 Job Street, Job City, Kunnamkulam
          </p>
          <p class="mb-2">
            <i class="pi pi-envelope text-[#FF9666]"></i> <a href="mailto:contact@jobsin.com" class="text-[#FF9666] hover:text-[#e18a62]">contact@jobsin.com</a>
          </p>
          <p class="mb-2">
            <i class="pi pi-phone text-[#FF9666]"></i> +91 1234560404
          </p>
        </div>

        <!-- Social Media Section -->
        <div>
          <h3 class="text-xl font-bold mb-4">Follow Us</h3>
          <div class="flex space-x-4">
            <a href="https://facebook.com" target="_blank" class="text-[#FF9666] hover:text-[#e18a62]">
              <i class="pi pi-facebook text-2xl"></i>
            </a>
            
            <a href="https://linkedin.com" target="_blank" class="text-[#FF9666] hover:text-[#e18a62]">
              <i class="pi pi-linkedin text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="text-center mt-8">
        <p class="text-gray-500 text-sm">
          &copy; 2024 Hilal Ibrahim. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Add any additional styling here */
</style>
