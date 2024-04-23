<script lang="ts" setup>
import Logo from "assets/svg/logo.svg";
</script>

<template>
  <header class="bg-background-header fixed top-0 inset-x-0 z-50">
    <div class="flex items-center mx-auto h-[48px] px-[15px] w-[1076px]">
      <NuxtLink to="/feed">
        <Logo color="white" />
      </NuxtLink>
    </div>
  </header>
</template>
