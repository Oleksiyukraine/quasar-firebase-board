<template>
  <div class="flex wrapper">
    <div class="q-ma-sm">
      <q-select
        v-model="model"
        :options="options"
        dense
        outlined
        style="min-width: 300px"
        bg-color="grey-2"
      >
        <template v-slot:prepend>
          <q-icon name="view_module" />
        </template>
      </q-select>
    </div>
    <div class="q-ma-sm">
      <q-input
        v-model="price.from"
        label="Price from (USD)"
        dense
        outlined
        bg-color="grey-2"
      />
    </div>
    <div class="q-ma-sm">
      <q-input
        v-model="price.to"
        label="Price to (USD)"
        dense
        outlined
        bg-color="grey-2"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'component-filter',
  data() {
    return {
      model: 'Please select...',
      options: [
        'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle',
      ],
      price: {
        from: null,
        to: null,
      },
    };
  },
};
</script>
<style lang="scss" scoped>
  .wrapper {
    background-color: white;
    padding: .5rem;
    border-radius: 5px;
  }
</style>
