<template>
  <q-page class="flex flex-center column">
    <div class="login-wrapper">
      <div class="login-header text-center">
        <div class="text-h6 text-grey-9">Register</div>
      </div>
      <q-form
        @submit="onSubmit"
        class="q-gutter-md"
      >
        <div class="login-body">
          Email
          <q-input
            v-model="user.email"
            dense
            outlined
            bg-color="grey-2"
            label="Example@gmail.com"
            class="q-mb-sm"
            lazy-rules
            ref="email"
            type="email"
            :rules="[rules.required, rules.email]"
          />
          Full name
          <q-input
            ref="fullName"
            v-model="user.fullName"
            dense
            outlined
            bg-color="grey-2"
            label="Tony stark"
            class="q-mb-sm"
            :rules="[rules.required]"
            lazy-rules
            value=""
          />
          Password
          <q-input
            bg-color="grey-2"
            dense
            outlined
            v-model="user.password"
            :type="isPwd ? 'password' : 'text'"
            class="q-mb-sm"
            ref="password"
            counter
            :rules="[rules.required]"
            lazy-rules
            value=""
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
          Confirm password
          <q-input
            bg-color="grey-2"
            dense
            outlined
            v-model="user.confirmPassword"
            :type="confirmIsPwd ? 'password' : 'text'"
            class="q-mb-sm"
            ref="password"
            counter
            :rules="[rules.required]"
            lazy-rules
            value=""
          >
            <template v-slot:append>
              <q-icon
                :name="confirmIsPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="confirmIsPwd = !confirmIsPwd"
              />
            </template>
          </q-input>
        </div>
        <div class="login-footer">
          <q-btn
            color="secondary"
            type="submit"
            label="Register"
            class="full-width"
          />
        </div>
      </q-form>
    </div>
    <div class="bottom-part">
      <div class="text-subtitle1 q-mr-md">
        I already have an account,
      </div>
      <router-link to="/register" class="text-subtitle1 text-uppercase text-secondary">
        log in
      </router-link>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageRegister',
  data() {
    return {
      user: {
        email: null,
        fullName: null,
        password: null,
        confirmPassword: null,
      },
      isPwd: false,
      confirmIsPwd: false,
      rules: {
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || 'Enter correct email';
        },
        required: (v) => !!v || 'This field is required',
      },
      formHasError: false,
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
        this.$store.dispatch('auth/registration', this.user).then(() => {
          this.$q.notify({ icon: 'done', color: 'positive', message: 'Registered successful' });
          this.$q.notify({ icon: 'done', color: 'positive', message: 'Login successful' });
          this.$router.push('/');
          this.$q.loading.hide();
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
