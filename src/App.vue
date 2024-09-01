<template>
  <Wrapper>
    <Header/>
    <RouterView/>
  </Wrapper>
  <Footer/>
</template>

<script setup>
import Wrapper from "./helpers/Wrapper.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>
