<template>
  <div class="form_container">
    <div class="personal_data">
      <h2 class="title">
        Персональные данные
      </h2>
      <div class="inputs">
        <div class="input_container">
          <label for="name">
            Имя
          </label>
          <input
              v-model="kidsStore.person.name"
              id="name"
              type="text"
          >
        </div>
        <div class="input_container">
          <label for="name">
            Возраст
          </label>
          <input
              v-model="kidsStore.person.age"
              id="name"
              type="number"
          >
        </div>
      </div>
    </div>
    <div class="kids_data">
      <div class="header_kids_data">
        <h2 class="title">
          Дети (макс. 5)
        </h2>
        <button
            :class="[{disabled: kids.length >= 5}, 'button_add_kid']"
            :disabled="kids.length >= 5"
            @click="addKid"
        >
          <b class="bold_plus">+</b>
          Добавить ребенка
        </button>
      </div>
      <div class="inputs">
        <div
            v-for="kid in kids"
            :key="kid.id"
            class="kid_input"
        >
          <div class="input_container">
            <label for="name">
              Имя
            </label>
            <input
                v-model="kid.name"
                id="name"
                type="text"
            >
          </div>
          <div class="input_container">
            <label for="name">
              Возраст
            </label>
            <input
                v-model="kid.age"
                id="name"
                type="number"
            >
          </div>
          <button
              class="button_delete_kid"
              @click="deleteKid(kid.id)"
          >
            Удалить
          </button>
        </div>
      </div>
    </div>
    <button
        :class="[{disabled: !isPersonInput}, 'save_button']"
        :disabled="!isPersonInput"
        @click="saveData"
    >
      Сохранить
    </button>
  </div>
</template>

<script setup>
import {computed, ref} from "vue";
import {useKidsStore} from "../stores/kids.js";
import {useRouter} from "vue-router";

const kidsStore = useKidsStore()
const router = useRouter()

const kids = ref([{
  name: '',
  age: null,
  id: Date.now()
}])

function addKid(){
  kids.value.push({
    name: '',
    age: null,
    id: Date.now()
  })
}

function deleteKid(id){
  kids.value = kids.value.filter(kid => kid.id !== id)
}

function saveData(){
  kids.value = kids.value.filter(kid => kid.age || kid.name)
  kidsStore.saveKids(kids.value)
  router.push({name: 'preview'})
}

const isPersonInput = computed(() =>{
  return kidsStore.person.name && kidsStore.person.age
})

</script>

<style lang="scss" scoped>
.form_container{
  max-width: 620px;
  width: 100%;
  margin: 0 auto;
}
.title{
  font-weight: 500;
  font-size: 16px;
}

.inputs{
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.input_container{
  width: 100%;
  position: relative;
  border: 1px solid #f1f1f1;
  border-radius: 4px;
  padding: 26px 16px 6px;
  label{
    position: absolute;
    top: 8px;
    font-size: 13px;
    color: rgba(17, 17, 17, 0.5);
  }
  input{
    font-size: 16px;
  }
}

.kids_data{
  margin-top: 44px;

  .header_kids_data{
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .button_add_kid{
    border-radius: 40px;
    font-size: 14px;
    border: 2px solid #01A7FD ;
    color: #01A7FD;
    padding: 0 20px;
    .bold_plus{
      font-size: 33px;
      font-weight: 400;
      margin-right: 2px;
    }
    &.disabled{
      display: none;
    }
  }

  .kid_input{
    display: flex;
    gap: 18px;
    .button_delete_kid{
      color: #01A7FD;
    }
  }
}


.save_button{
  margin-top: 30px;
  border-radius: 40px;
  font-size: 14px;
  border: 2px solid #01A7FD ;
  background-color: #01A7FD;
  color: white;
  padding: 10px 20px;
  &.disabled{
    background-color: rgba(1, 167, 253, 0.3);
    cursor: default;
  }
}
</style>
