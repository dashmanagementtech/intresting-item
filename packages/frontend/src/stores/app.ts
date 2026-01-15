import { defineStore } from "pinia";
import { ref } from "vue";

export const useAppStore = defineStore('app', () => {
  const token = ref()
  const refresh = ref()
  const reloadActiveProjects = ref(false)

  const setToken = (payload: string) => token.value = payload
  const setRefresh = (payload: string) => refresh.value = payload
  const setReload = (reload: boolean) => reloadActiveProjects.value = reload

  const reset = () => {
    token.value = undefined
    refresh.value = undefined
  }

  return { token, refresh, reloadActiveProjects, setToken, setRefresh, setReload, reset}
})
