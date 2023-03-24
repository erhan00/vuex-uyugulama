<template>
  <div>
    <ul>
      <li class="STYLE" v-for="todo in tamamlananİşlemler" :key="todo.id">
        {{ todo.title }}
      </li>
    </ul>
  </div>
</template>

<script>

import { mapActions, mapGetters} from "vuex";
import todos from '@/components/todos';

export default {
   
    methods:{
        ...mapActions(["fetchTodos"]),
    },
    computed:{
        ...mapGetters(["tamamlananİşlemler"]),
    },
    created() {
    this.fetchTodos();
  },

}
</script>

<style scoped>
 .STYLE{
    list-style: none;
    color: dodgerblue;
 }
</style>