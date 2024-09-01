<template>
  <div class="header">
    <img class="logo" src="../assets/pic/logo.svg" alt="logo">
    <div class="nav_buttons">
      <button @click="router.push({name: 'main'})">
        Форма
      </button>
      <button disabled @click="router.push({name: 'preview'})">
        Превью
      </button>
    </div>
  </div>
</template>

<script setup>
import {useRouter} from "vue-router";
const router = useRouter()
</script>

<style lang="scss" scoped>
.header{
  position: relative;
}
.logo{
  position: absolute;
  top: 17px;
}
.nav_buttons{
  display: flex;
  justify-content: center;
  gap: 24px;
  padding: 21px 0 25px;
  button{
    color: rgba(17, 17, 17, 0.48)
  }
}
</style>
