import {defineStore} from 'pinia'
import {ref} from "vue";

export const useKidsStore = defineStore('kids', () => {
	const person = ref({
		name: '',
		age: null
	})
	const kids = ref([])
	
	function saveKids(kidsData){
		kids.value = kidsData
	}
	
	return {person, kids, saveKids}
})
