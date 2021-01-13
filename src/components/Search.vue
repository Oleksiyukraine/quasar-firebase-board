<template>
  <div class="search-wrapper row">
    <div class="search-items col-8 row">
      <div class="col-8">
        <q-input
          outlined
          dense
          label="Search products by name"
          bg-color="white"
          class="q-mr-sm"
        >
          <template v-slot:prepend>
            <q-icon name="search" />
          </template>
        </q-input>
      </div>
      <div class="col-2">
        <q-input
          label="Location"
          outlined
          dense
          bg-color="white"
          class="q-mr-sm"
        >
          <template v-slot:prepend>
            <q-icon name="location_on" />
          </template>
        </q-input>
      </div>
      <div class="search-button col-2">
        <q-btn
          label="Search"
          class="full-width"
          style="background-color: #3E3961"
        />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .search-wrapper {
    display: flex;
    justify-content: center;
    .search-items {
      display: flex;
      .search-button {
        display: flex;
        flex-direction: row;
        align-items: center;
      }
    }
  }
</style>
