<template>
  <div class="user-form">
    <div class="form__inner">
      <app-form
        :title="title"
        :btnName="btnName"
        :disabledBtn="!getValid"
        :error="error"
        @submitForm="loginHandler"
      >
        <div class="login">
          <span>Нет аккаунта?</span>
          <router-link class="form__link" to="/register">
            Зарегистрироваться</router-link
          >
        </div>
        <div class="form__body">
          <div class="wrapper__input form__input">
            <label class="input__title">Email</label>
            <input
              type="text"
              class="input"
              placeholder="Введите ваш email"
              v-model="user.email"
            />
          </div>
          <div class="wrapper__input form__input">
            <label class="input__title">Пароль</label>
            <input
              type="password"
              class="input"
              placeholder="Введите пароль"
              v-model="user.password"
            />
          </div>
        </div>
      </app-form>
    </div>
  </div>
</template>

<script>
import AppForm from '@/components/forms/AppForm'
import { required, minLength, email } from 'vuelidate/lib/validators'
import { mapActions } from 'vuex'

export default {
  name: 'Login',
  components: {
    AppForm,
  },
  data: () => ({
    user: {
      email: '',
      password: '',
    },
    error: '',
    title: 'Вход',
    btnName: 'Войти',
  }),
  computed: {
    getValid() {
      const properties = ['email', 'password']
      return properties.every((item) => !this.$v.user[item].$invalid)
    },
  },
  methods: {
    ...mapActions({
      login: 'user/login',
    }),
    async loginHandler() {
      const response = await this.login(this.user)
      if (response.status === 200) {
        this.$router.push('/')
      } else {
        this.error = response.data.message
      }
    },
  },
  validations: {
    user: {
      email: { required, email },
      password: { required, minLength: minLength(6) },
    },
  },
}
</script>

<style lang="scss" scoped>
.form__inner {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.login {
  font-size: 16px;
  color: #2c2738;
  margin-bottom: 56px;
}

.form__link {
  color: #0880ae;
}

.form__input {
  margin-bottom: 33px;
}
</style>
