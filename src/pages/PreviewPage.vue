<template>
  <div class="preview_container">
    <div class="data_container">
      <h2 class="title">
        Персональные данные
      </h2>
      <p class="font_bold">
        {{ kidsStore.person.name }}, {{kidsStore.person.age}} {{nameAge(kidsStore.person.age)}}
      </p>
    </div>
    <div class="data_container">
      <h2 class="title">
        Дети
      </h2>
      <div
          v-if="kidsStore.kids.length > 0"
          class="kids_data"
      >
        <div
            v-for="kid in kidsStore.kids"
            :key="kid.id"
            class="kid"
        >
          <p class="font_bold">
            {{ kid.name ? kid.name : '--' }}, {{kid.age ? kid.age : '--'}} {{nameAge(kid.age)}}
          </p>
        </div>
      </div>
      <div
          v-else
          class="font_bold"
      >
        Нет детей
      </div>
    </div>
  </div>
</template>

<script setup>
import {useKidsStore} from "../stores/kids.js";

const kidsStore = useKidsStore()

function nameAge(age){
  const lastTwoDigits = age % 100;
  const lastDigit = age % 10;
  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
    return "лет";
  } else if (lastDigit === 1) {
    return "год";
  } else if (lastDigit >= 2 && lastDigit <= 4) {
    return "года";
  } else {
    return "лет";
  }
}
</script>

<style lang="scss" scoped>
.preview_container{
  max-width: 620px;
  width: 100%;
  margin: 0 auto;
}
.data_container{
  display: flex;
  flex-direction: column;
  gap: 20px;
  &:last-child{
    margin-top: 60px;
  }
}

.title{
  font-weight: 500;
  font-size: 16px;
}
.font_bold{
  font-weight: bold;
}

.kids_data{
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.kid{
  padding: 10px 20px;
  background-color: #f1f1f1;
  border-radius: 5px;
  width: fit-content;
}
</style>
