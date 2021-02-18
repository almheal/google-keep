<template>
  <div class="select">
    <div class="backdrop" v-show="open" @click="openCloseSelect"></div>
    <label class="input__title">{{label}}</label>
    <div class="select__input input" @click="openCloseSelect" :class="{opened : open}">{{placeholder}}</div>
    <div class="select__dropdown" v-if="open">
      <ul class="select__list">
        <li class="select__item"
          :class="{active : item === placeholder}"
          v-for="(item,index) in items" :key="index"
          @click="selectItem(item)"
        >{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Select',
  props:{
    label:{
      type: String,
      default: ''
    },
    placeholder:{
      type: String,
      default: ''
    },
    items:{
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    open: false
  }),
  methods:{
    openCloseSelect(){
      this.open = !this.open
    },
    selectItem(item){
      if(item === this.placeholder) return
      this.openCloseSelect()
      this.$emit('selectItem', item)
    },
  }
}
</script>

<style lang="scss" scoped>
.select{
  width: 100%;
  position: relative;

  &__input{
    position: relative;
    height: 54px;
    color: #2C2738;
    padding: 16px 42px 16px 16px;
    cursor: pointer;
    &::after{
      content: '';
      position: absolute;
      right: 21px;
      top: 50%;
      transform: translateY(-50%);
      width: 16px;
      height: 9px;
      background: url('../../assets/img/svg/dropdown.svg') no-repeat;
      background-size: 16px 9px;
    }

    &.opened{
      border-color:#0880AE;
      transition: .3s;
    }
  }
  &__dropdown{
    position: absolute;
    top: 79px;
    left: 0;
    right: 0;
    z-index: 200;
    padding: 12px 0;
    max-height: 200px;
    overflow-y: auto;
    border: 1px solid #DBE2EA;
    border-radius: 6px;
    box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.04), 0px 20px 20px rgba(44, 39, 56, 0.04);
    background-color: #fff;
  }
}

.select__item{
  font-size: 16px;
  color: #756F86;
  padding: 12px 15px;
  cursor: pointer;
  transition: .3s;
  &:hover{
    background-color: #EBF4F8;
    transition: .3s;
  }
  &.active{
    background-color: #EBF4F8;
    transition: .3s;
  }
}

.backdrop{
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 50;
  background-color: rgba(0,0,0,0);
}
</style>