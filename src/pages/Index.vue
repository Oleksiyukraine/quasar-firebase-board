<template>
  <q-page class="flex flex-center page-wrapper row">
    <div class="body-wrapper col-8">
      <div class="filter-wrapper">
        <my-filter></my-filter>
      </div>
      <div class="cards-wrapper row">
        <div
          class="card-list col-lg-3 col-md-4 col-sm-6 q-pa-sm"
          v-for="card in cards"
          :key="card.id"
        >
          <card :card="card"></card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import Card from '../components/Card';
import MyFilter from '../components/Filter';

export default {
  components: {
    MyFilter, Card,
  },
  name: 'PageIndex',
  data() {
    return {
      cards: [
        {
          id: 1, name: 'Card name', price: 123.32, like: true,
        },
        {
          id: 2, name: 'Card name', price: 345.02, like: false,
        },
        {
          id: 3, name: 'Card name', price: 345.91, like: false,
        },
        {
          id: 4, name: 'Card name', price: 567.56, like: true,
        },
        {
          id: 5, name: 'Card name', price: 12345.91, like: false,
        },
        {
          id: 6, name: 'Card name', price: 567.11, like: true,
        },
        {
          id: 7, name: 'Card name', price: 123.09, like: false,
        },
        {
          id: 8, name: 'Card name', price: 789.99, like: false,
        },
        {
          id: 9, name: 'Card name', price: 8551.99, like: false,
        },
        {
          id: 10, name: 'Card name', price: 78.81, like: true,
        },
        {
          id: 11, name: 'Card name', price: 8769.19, like: false,
        },
        {
          id: 12, name: 'Card name', price: 398.01, like: false,
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
  .page-wrapper {
    background-color: ghostwhite;
    padding: .5rem;
    .body-wrapper {
      .filter-wrapper {
        padding: 10px 0;
      }
    }
    .cards-wrapper {
      border-radius: 5px;
      background-color: white;
    }
  }
</style>
