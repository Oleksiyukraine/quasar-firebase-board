<template>
  <q-page class="flex flex-center column">
    <div class="login-wrapper">
      <div class="login-header text-center">
        <div class="text-h6 text-grey-9">Login</div>
      </div>
      <q-form
        @submit="onSubmit"
        class="q-gutter-md"
      >
        <div class="login-body">
          Email
          <q-input
            ref="email"
            v-model="user.email"
            dense
            outlined
            bg-color="grey-2"
            label="Example@gmail.com"
            class="q-mb-sm"
            lazy-rules
            type="email"
            :rules="[rules.required, rules.email]"
          />
          Password
          <q-input
            ref="password"
            counter
            :rules="[rules.required]"
            lazy-rules
            value=""
            bg-color="grey-2"
            dense
            outlined
            v-model="user.password"
            :type="isPwd ? 'password' : 'text'"
            class="q-mb-sm"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
          <router-link to="/">
            <div class="text-right q-mt-sm">
              Don`t remember password?
            </div>
          </router-link>
        </div>
        <div class="login-footer">
          <q-btn
            color="secondary"
            type="submit"
            label="Continue"
            class="full-width"
          />
        </div>
      </q-form>
    </div>
    <div class="bottom-part">
      <div class="text-subtitle1 q-mr-md">
        I have no account.
      </div>
      <router-link to="/register" class="text-subtitle1 text-uppercase text-secondary">
        register now
      </router-link>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageLogin',
  data() {
    return {
      user: {
        email: null,
        password: null,
      },
      isPwd: false,
      rules: {
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || 'Enter correct email';
        },
        required: (v) => !!v || 'This field is required',
      },
    };
  },
  methods: {
    onSubmit() {
      this.$refs.email.validate();
      this.$refs.password.validate();

      if (this.$refs.email.hasError || this.$refs.password.hasError) {
        this.formHasError = true;
      } else {
        this.$q.loading.show();
        this.$store.dispatch('auth/login', this.user).then(() => {
          this.$q.notify({ icon: 'done', color: 'positive', message: 'Login success' });
          this.$q.loading.hide();
          this.$router.push('/');
        }).catch((error) => {
          this.$q.loading.hide();
          this.$q.notify({ icon: 'report_problem', color: 'warning', message: error.message });
        });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
  .login-wrapper {
    min-width: 500px;
    background-color: white;
    padding: 1rem 2rem;
    box-shadow: 0 0 1px gray;
  }
  .bottom-part {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    min-width: 500px;
    background-color: white;
    padding: 1rem 2rem;
    box-shadow: 0 0 1px gray;
  }
</style>
