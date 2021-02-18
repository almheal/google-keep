<template>
  <form class="form" @submit.prevent="submitForm">
    <div class="form__body">
      <h3 class="form__title">{{ title }}</h3>
      <slot></slot>
      <div class="error" v-if="error">{{ error }}</div>
      <form-button :name="btnName" :activeDisabled="disabledBtn" />
    </div>
  </form>
</template>

<script>
import FormButton from '@/components/forms/FormButton'

export default {
  name: 'Form',
  components: {
    FormButton,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    btnName: {
      type: String,
      default: '',
    },
    disabledBtn: {
      type: Boolean,
      default: false,
    },
    error: {
      type: String,
      default: '',
    },
  },
  methods: {
    submitForm() {
      this.$emit('submitForm')
    },
  },
}
</script>

<style lang="scss" scoped>
.form {
  max-width: 460px;
  width: 100%;
  background-color: #fff;
  padding: 40px 30px;
  border-radius: 24px;
  box-shadow: 0px 12px 24px rgba(44, 39, 56, 0.02),
    0px 32px 64px rgba(44, 39, 56, 0.04);
}

.form__title {
  font-weight: 700;
  font-size: 34px;
  margin-bottom: 9px;
}

.wrapper__input {
  position: relative;
  width: 100%;
}

.wrapper__checkbox {
  position: relative;
}

.checkbox {
  -webkit-appearance: none;
  appearance: none;
  position: absolute;
}

.checkbox-title {
  padding-left: 36px;
  &::before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    transform: translateY(-25%);
    width: 24px;
    height: 24px;
    box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.04);
    border: 1px solid #dbe2ea;
    border-radius: 4px;
  }
  &::after {
    content: '';
    display: block;
    width: 14px;
    height: 12px;
    background: url('../../assets/img/svg/mask.svg') no-repeat;
    background-size: 15px 12px;
    position: absolute;
    left: 5px;
    top: 0;
    opacity: 0;
    cursor: pointer;
  }
}

.error {
  color: red;
  margin-bottom: 15px;
}

.input {
  display: block;
  width: 100%;
  border: 1px solid #dbe2ea;
  box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.04);
  border-radius: 6px;
  padding: 16px;
  font-size: 16px;
  transition: 0.3s;
  &:focus {
    border-color: #0880ae;
    transition: 0.3s;
  }
}

.input__title {
  display: inline-block;
  font-weight: 500;
  color: #756f86;
  margin-bottom: 7px;
}

.invalid__message {
  display: inline-block;
  color: #ff7171;
  margin-top: 8px;
}

.checkbox:checked + .checkbox-title::after {
  opacity: 1;
}

.checkbox:checked + .checkbox-title::before {
  border: 2px solid #0880ae;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

::-webkit-input-placeholder {
  font-size: 16px;
  color: #7c9cbf;
}

::-moz-placeholder {
  font-size: 16px;
  color: #7c9cbf;
}

:-moz-placeholder {
  font-size: 16px;
  color: #7c9cbf;
}

:-ms-input-placeholder {
  font-size: 16px;
  color: #7c9cbf;
}

@media (max-width: 420px) {
  .form__title {
    font-size: 30px;
  }

  .checkbox-title::before {
    transform: translateY(0%);
  }

  .checkbox:checked + .checkbox-title::after {
    top: 5px;
  }
}
</style>
