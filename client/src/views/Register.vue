<template>
  <div class="user__form">
    <div class="form__inner">
      <app-form
        :title="title"
        :btnName="btnName"
        :disabledBtn="!getValid"
        :error="error"
        @submitForm="registerHandler"
      >
        <div class="login">
          <span>Уже есть аккаунт?</span>
          <router-link class="form__link" to="/login"> Войти</router-link>
        </div>
        <div class="form__body">
          <div class="wrapper__input form__input">
            <label class="input__title">Имя</label>
            <input
              type="text"
              class="input"
              placeholder="Введите Ваше имя"
              v-model="user.name"
            />
          </div>
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
          <div class="wrapper__checkbox form__input">
            <input
              class="checkbox"
              id="accept-terms"
              type="checkbox"
              v-model="terms"
            />
            <label for="accept-terms" class="input__title checkbox-title"
              >Принимаю
              <router-link class="form__link" to="/">условия</router-link>
              использования</label
            >
          </div>
        </div>
      </app-form>
    </div>
  </div>
</template>

<script>
import AppForm from '@/components/forms/AppForm'
import { mapActions } from 'vuex'
import { required, minLength, email } from 'vuelidate/lib/validators'

export default {
  name: 'Register',
  components: {
    AppForm,
  },
  data: () => ({
    user: {
      name: '',
      email: '',
      password: '',
    },
    error: '',
    terms: false,
    title: 'Регистрация',
    btnName: 'Зарегистрироваться',
  }),
  computed: {
    getValid() {
      const properties = ['name', 'email', 'password']
      const validUser = properties.every((item) => !this.$v.user[item].$invalid)
      return validUser && this.terms ? true : false
    },
  },
  methods: {
    ...mapActions({
      register: 'user/register',
    }),
    async registerHandler() {
      const response = await this.register(this.user)
      if (response.status === 201) {
        this.$router.push('/login')
        return
      } else {
        this.error = response.data.message
      }
    },
  },
  validations: {
    user: {
      name: { required },
      email: { required, email },
      password: { required, minLength: minLength(6) },
    },
    terms: { required },
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
