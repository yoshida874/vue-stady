<script setup lang="ts">
import { ref } from "vue";

const texts = ref([""]);

const removeInput = (index: number) => {
  texts.value.splice(index, 1);
};

const addInput = () => {
  texts.value.push("");
};
</script>

<template>
  <div
    id="app"
    class="min-h-screen bg-gray-200 flex items-center justify-center"
  >
    <div
      class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col items-center justify-center"
    >
      <div v-for="(text, index) in texts" :key="index" class="mb-4">
        <input type="text" v-model="texts[index]" class="w-20 border mr-4" />
        <button
          type="button"
          @click="removeInput(index)"
          class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          削除
        </button>
      </div>

      <button
        type="button"
        @click="addInput"
        class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        追加する
      </button>
    </div>
  </div>
</template>
