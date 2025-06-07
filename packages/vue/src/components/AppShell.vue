<script setup lang="ts">
import { ref } from 'vue'

const drawer = ref(true)
</script>

<template>
  <v-app>
    <!-- App Bar (Top Navigation) -->
    <v-app-bar color="primary" dark elevation="2">
      <!-- Navigation toggle for small screens -->
      <v-app-bar-nav-icon @click="drawer = !drawer" />

      <!-- Default Title (replaceable) -->
      <v-app-bar-title>
        <slot name="title">My App</slot>
      </v-app-bar-title>

      <!-- Right side of top bar -->
      <template #append>
        <slot name="topbar-buttons" />
      </template>
    </v-app-bar>

    <!-- Sidebar Navigation -->
    <v-navigation-drawer
      v-model="drawer"
      app
      permanent
      width="260"
    >
      <slot name="sidebar" />
    </v-navigation-drawer>

    <!-- Main Content Area -->
    <v-main>
      <v-container fluid class="pa-4">
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>