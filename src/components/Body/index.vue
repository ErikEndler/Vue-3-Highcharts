<template>
  <div>
    <Graphic style="margin: 10px" v-if="!state.listEmpty" />
    <CustomTable style="margin: 10px" :list="state.list" />
  </div>
</template>

<script>
  import CustomTable from "./table";
  import Graphic from "./graphic";
  import { onMounted, reactive } from "vue";
  import services from "../../services";

  export default {
    components: { CustomTable, Graphic },
    setup() {
      onMounted(() => {
        listAll();
      });
      const state = reactive({
        listEmpty: false,
        list: {}
      });
      function listAll() {
        services.currency
          .getAll()
          .then(resposta => {
            state.list = resposta.data;
            state.isLoading = true;
            if (state.list.length == 0) {
              state.listEmpty = true;
            }
          })
          .catch(error => {
            console.log(error);
            console.log(error.response);
          });
      }
      return { state };
    }
  };
</script>

<style>
</style>