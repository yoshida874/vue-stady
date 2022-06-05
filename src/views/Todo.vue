<script setup lang="ts">
import { ref } from "vue";

const todo = ref("");
const todos = ref<string[]>([""]);

const addTodo = () => {
  todos.value.push(todo.value);
  todo.value = "";
};

const removeTodo = (index: number) => {
  todos.value.splice(index, 1);
};
</script>

<template>
  <div id="app">
    <h1>Todoリスト</h1>
    <input v-model="todo" /><br />
    <button @click="addTodo">追加</button>
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        {{ todo }} <span @click="removeTodo(index)">X</span>
      </li>
    </ul>
  </div>
</template>

<!-- <script lang="ts">
/**
 * vue2 の書き方
 */
// export default {
//   data() {
//     return {
//       todo: "",
//       todos: [],
//     };
//   },
//   methods: {
//     addTodo() {
//       this.todos.push(this.todo);
//       this.todo = "";
//     },
//     removeTodo(index) {
//       this.todos.splice(index, 1);
//     },
//   },
// };

/**
 * vue3 の書き方
 */
// import { defineComponent, ref } from "vue";

// export default defineComponent({
//   setup() {
//     const todo = ref("");
//     const todos = ref<string[]>([""]);

//     const addTodo = () => {
//       todos.value.push(todo.value);
//       todo.value = "";
//     };

//     const removeTodo = (index: number) => {
//       todos.value.splice(index, 1);
//     };

//     return {
//       todo,
//       todos,
//       addTodo,
//       removeTodo,
//     };
//   },
// });
</script> -->

<style></style>
