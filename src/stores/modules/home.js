import { defineStore } from "pinia";
import { getHotSuggests, getCategories, getHouses } from "@/service";

const useHomeStore = defineStore("home", {
  state: () => ({
    hotSuggests: [],
    categories: [],
    hosueList: [],
    currentData: 1
  }),
  actions: {
    async FetchHotSuggests () {
      const res = await getHotSuggests()
      this.hotSuggests = res.data
    },
    async FetchCategories () {
      const res = await getCategories()
      this.categories = res.data
    },
    async FetchHouses (pages) {
      const res = await getHouses(pages)
      this.hosueList.push(...res.data)
    }
  }
})
export default useHomeStore