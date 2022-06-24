<script setup lang="ts">
import { ref, watch } from "vue";

const value = ref<string>("");
const list = ref<string[]>([]);
const suggests = ref<string[]>([]);
list.value = ["apple", "banana", "grape", "orange", "peach"];

watch(value, () => {
  getSuggestion();
});

const getSuggestion = (): void => {
  suggests.value = list.value.filter((el) => {
    return el.toLocaleLowerCase().indexOf(value.value) != -1;
  });
};
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
