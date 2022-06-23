<script setup lang="ts">
import { ref } from "vue";

const suggests = ref<string[]>([]);
const value = ref<string>("");

suggests.value = ["apple", "banana", "grape", "orange", "peach"];
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-200">
    <input type="text" v-model="value" />
    <ul v-show="value !== ''">
      <li v-for="(suggestion, index) in suggests" :key="index">
        <div>
          <span>{{ suggestion }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>
