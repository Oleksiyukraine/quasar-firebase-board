<template>
  <q-card class="my-card">
    <img src="https://cdn.quasar.dev/img/mountains.jpg">

    <q-card-actions align="left" class="card-actions">
      <div class="price">
        <div class="text-subtitle1">
          {{ card.name }}
        </div>
        <div class="text-subtitle2">
          ${{ card.price }}
        </div>
      </div>
      <div class="like">
        <q-btn
          dense
          round
          :color="card.like ? 'red' : 'black'"
          icon="favorite"
        />
      </div>
    </q-card-actions>
  </q-card>
</template>
<script>

export default {
  name: 'component-card',
  props: ['card'],
};
</script>
<style lang="scss" scoped>
  .card-actions {
    position: relative;
    .like {
      position: absolute;
      top: -16px;
      right: 5px;
    }
  }
</style>
