<template>
  <div class="card" style="border-radius: 15px">
    <div class="body-card">
      <vue-highcharts
        type="chart"
        :options="chartOptions"
        :redrawOnUpdate="true"
        :oneToOneUpdate="false"
        :animateOnUpdate="true"
        @updated="onUpdated"
      />
    </div>
  </div>
</template>
<script>
  import services from "../../services";
  import { ref, computed, toRaw, onMounted, reactive } from "vue";
  import VueHighcharts from "vue3-highcharts";

  export default {
    components: {
      VueHighcharts
    },
    props: {
      list: {
        required: true
      }
    },
    setup() {
      onMounted(() => {
        listAll();
      });
      const state = reactive({
        listEmpty: false,
        list: {}
      });
      const seriesMax = ref([]);
      const seriesMin = ref([]);
      const categories = ref([]);

      function listAll() {
        services.currency
          .getAll()
          .then(resposta => {
            state.list = resposta.data;
            var obj = toRaw(state.list);
            for (var item in obj) {
              seriesMax.value.push(parseFloat(obj[item].high));
              seriesMin.value.push(parseFloat(obj[item].low));
              categories.value.push(obj[item].code);
            }
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

      const chartOptions = computed(() => ({
        chart: {
          type: "column"
        },
        title: {
          text: "Currency Max and Min"
        },
        xAxis: {
          categories: categories.value
        },
        yAxis: {
          title: {
            text: "Currency value"
          }
        },
        series: [
          {
            name: "Max.",
            data: seriesMax.value
          },
          {
            name: "Min.",
            data: seriesMin.value
          }
        ]
      }));

      const onUpdate = () => {
        console.log("Chart updated");
      };

      return {
        chartOptions,
        onUpdate
      };
    }
  };
</script>