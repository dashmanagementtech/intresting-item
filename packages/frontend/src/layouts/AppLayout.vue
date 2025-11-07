<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import { useAuthStore } from '@/features/Auth/store/useAuthStore'
import Logo from '@/shared/components/Logo.vue'

import { resetAllStores } from '@/stores/resetAllStores'
import LogoutIcon from './icons/LogoutIcon.vue'
import { COMMON, ROUTES } from './utils/constants'

const route = useRoute()
const router = useRouter()
const userstore = useAuthStore()

const openNav = ref(false)
const userRole = computed(() => userstore.user.role)

function logUserOut() {
  try {
    resetAllStores()
    router.replace('/')
  }
  catch (e) {
    console.warn(e)
  }
}

watch(route, () => {
  openNav.value = false
}, { deep: true })
</script>

<template>
  <section class="h-screen flex bg-white overflow-hidden">
    <nav
      class="hidden w-[250px] h-screen bg-white p-5 min-lg:flex flex-col justify-between"
      :class="{ 'max-lg:fixed max-lg:top-0 max-lg:flex max-lg:left-0 max-lg:bottom-0 max-lg:bg-white max-lg:z-10 max-lg:shadow-lg': openNav }"
    >
      <div class="">
        <div class="flex items-center justify-center pb-10">
          <Logo />
        </div>
        <div class="flex flex-col gap-2">
          <template v-for="(link, key) in ROUTES" :key>
            <template v-if="link.acl && link.acl.includes(userRole)">
              <router-link
                v-if="!link.external" :to="link.uri"
                class="flex items-center gap-3 p-3 rounded hover:text-primary"
                :class="{ 'bg-primary-50 text-primary font-semibold': route.meta.parent === link.uri }"
              >
                <component :is="link.icon" class="w-[24px]" />
                {{ link.title }}
              </router-link>

              <a v-else :href="link.uri" class="flex items-center gap-3 p-3 rounded hover:text-primary" target="_blank">
                <component :is="link.icon" class="w-[24px]" />
                {{ link.title }}
              </a>
            </template>
          </template>
        </div>
      </div>
      <div class="">
        <div class="flex flex-col gap-2">
          <router-link
            v-for="(link, key) in COMMON" :key :to="link.uri"
            class="flex items-center gap-3 p-3 rounded hover:text-primary"
            :class="{ 'bg-primary-50 text-primary font-semibold': route.meta.parent === link.uri }"
          >
            <component :is="link.icon" class="w-[24px]" />
            {{ link.title }}
          </router-link>
          <a
            href=""
            class="transition ease-in-out flex items-center gap-3 p-3 rounded bg-red-100 text-red-500 hover:bg-red-500 hover:text-red-100"
            @click.prevent="logUserOut()"
          >
            <LogoutIcon class="w-[24px]" />
            Logout
          </a>
        </div>
      </div>
    </nav>
    <section class="h-screen w-full bg-white border-l border-primary-50 p-5 overflow-hidden">
      <header
        class="sticky top-0 z-[20] bg-white border-b border-primary-50 pb-5 mb-5 flex justify-between items-center"
      >
        <div class="flex items-center justify-center gap-5">
          <svg
            class="w-[24px] cursor-pointer transition-all ease-in-out min-lg:hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
            @click="openNav = !openNav"
          >
            <path v-show="!openNav" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
            <path
              v-show="openNav"
              d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
            />
          </svg>

          <h1 class="capitalize text-2xl font-semibold">
            {{ route.meta.name }}
          </h1>
        </div>
        <div class="" />
      </header>
      <div class="h-[90vh] overflow-hidden">
        <RouterView />
      </div>
    </section>
  </section>
</template>
