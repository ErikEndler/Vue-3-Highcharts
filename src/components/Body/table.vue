<template>
  <div class="card" style="border-radius: 15px">
    <div class="card-body">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Code</th>
            <th scope="col">Name</th>
            <th scope="col">High</th>
            <th scope="col">Low</th>
            <th scope="col">Variation</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="list.length === 0">
            <td colspan="6" class="text-center"><h5>Lista vazia</h5></td>
          </tr>
          <tr v-for="item in list" :key="item.codigo">
            <td>{{ item.code }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.high }}</td>
            <td>{{ item.low }}</td>
            <td>
              <span
                class="badge rounded-pill"
                :class="{
                  'bg-danger': item.varBid < 0,
                  'bg-primary': item.varBid > 0,
                  'bg-secondary': item.varBid == 0,
                }"
              >
                {{ item.varBid }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      list: {
        required: true
      }
    }
  };
</script>

<style>
</style>
