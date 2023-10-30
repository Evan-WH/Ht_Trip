import { defineStore } from "pinia"
import { getCityList } from "@/service"
const useCityStore = defineStore("city", {
  state: () => ({
    citys: {},
    currentCity: {
      cityName: "北京",
    }
  }),
  actions: {
    async FetchCityList () {
      const res = await getCityList()
      this.citys = res.data
    }
  }
})
export default useCityStore