<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated style="background: linear-gradient(180deg, #090810 0%, #171236 100%);">
      <div class="row full-width flex-center">
        <div class="col-10 q-my-md">
          <q-toolbar>
            <q-toolbar-title class="logo">
              <router-link to="/">
                <q-img src="../assets/logo.svg" width="100px"/>
              </router-link>
            </q-toolbar-title>
            <div class="flex">
              <div v-if="!this.$store.state.auth.authenticated">
                <q-btn color="secondary" class="q-mr-md" to="/login">Login</q-btn>
                <q-btn color="secondary" class="q-mr-md" to="/register">Register</q-btn>
              </div>
              <div v-else>
                <q-btn
                  color="secondary"
                  label="+Add"
                  @click="newItem = !newItem"
                  style="min-width: 130px"
                />
                <q-icon
                  name="account_circle"
                  size="42px"
                  class="q-mx-md cursor-pointer"
                  @click="userMenu = !userMenu"
                />
                <div class="user-menu" v-if="userMenu">
                  <q-btn outline label="Logout" @click="logout"/>
                </div>
              </div>
              <q-btn
                round
                icon="favorite_border"
              />
            </div>
          </q-toolbar>
        </div>
      </div>
      <search class="q-py-lg"></search>
      <q-dialog
        v-model="newItem"
        transition-show="flip-down"
        transition-hide="flip-up"

      >
        <q-card style="min-width: 700px">
          <q-bar>
            <q-space />
            <q-btn dense flat icon="close" v-close-popup>
              <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
            </q-btn>
          </q-bar>

          <q-card-section>
            <div class="text-subtitle1 text-center">Add product</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <span class="text-uppercase">title</span><span class="text-red q-ml-sm">*</span>
            <q-input
              outlined
              bg-color="grey-3"
              label="For example: Los Angeles, CA"
              class="q-mb-md"
            />
            <span class="text-uppercase">Location</span><span class="text-red q-ml-sm">*</span>
            <q-input
              outlined
              bg-color="grey-3"
              label="For example: Iron man suit"
              class="q-mb-md"
            />
            <span class="text-uppercase">description</span>
            <q-input
              type="textarea"
              outlined
              bg-color="grey-3"
              label="For example: Iron man suit"
              class="q-mb-md"
            />
            <span class="text-uppercase">photos</span>
            <div class="photos-wrapper">
              <div class="add-photo">
                <q-icon name="add" />
              </div>
            </div>
            <span class="text-uppercase">price</span>
            <q-input
              outlined
              bg-color="grey-3"
              label="For example: Los Angeles, CA"
              class="q-mb-md"
            />
            <div class="flex justify-center q-mt-md">
              <q-btn color="secondary" label="submit" style="min-width: 300px" @click="addItem"/>
            </div>
          </q-card-section>
        </q-card>
      </q-dialog>
    </q-header>

    <q-page-container>
      <transition
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
        appear
        :duration="800"
      >
      <router-view />
      </transition>
    </q-page-container>
  </q-layout>
</template>

<script>
import Search from '../components/Search';

export default {
  name: 'MainLayout',
  components: {
    Search,
  },
  data() {
    return {
      leftDrawerOpen: false,
      userMenu: false,
      newItem: false,
    };
  },
  mounted() {
  },
  methods: {
    addItem() {
      this.$q.notify({ icon: 'done', color: 'warning', message: 'This feature will be added soon' });
    },
    logout() {
      this.$store.dispatch('auth/logout').then(() => {
        this.$q.notify({ icon: 'done', color: 'positive', message: 'Login success' });
        this.$q.loading.hide();
      }).catch((error) => {
        this.$q.loading.hide();
        this.$q.notify({ icon: 'report_problem', color: 'warning', message: error.message });
      });
    },
  },
};
</script>
<style lang="scss" scoped>
  .logo {
    cursor: pointer;
  }
  .user-menu {
    display: flex;
    position: absolute;
    top: 45px;
    right: 100px;
  }
  .photos-wrapper {
    font-size: 50px;
    border-radius: 3px;
    border: 1px solid $grey-5;
    background-color: $grey-3;
    .add-photo {
      background-color: $grey-5;
      width: 90px;
      margin: 15px;
      height: 90px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: $secondary;
      cursor: pointer;
    }
  }
</style>
