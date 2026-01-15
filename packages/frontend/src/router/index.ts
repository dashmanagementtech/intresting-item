import { ElMessage } from 'element-plus'
import { createRouter, createWebHistory } from 'vue-router'

import { useAuthStore } from '@/features/Auth/store/useAuthStore'
import { useAppStore } from '@/stores/app'

const routeModules = import.meta.glob('@/features/**/route/index.ts', { eager: true })

const routes = [
  // {
  //   path: '/app/:subPaths(.*)*/invite',
  //   name: 'universal-invite',
  //   meta: {
  //     protected: true
  //   },
  //   component: () => import('@/features/Staff/view/InviteStaff.vue')
  // }
]

for (const path in routeModules) {
  const mod = routeModules[path] as any
  const config = mod.default
  
  const processRoute = (route: any) => {
    // Only target routes that start with /app
    if (route.path.startsWith('/app')) {
      if (!route.children) route.children = []
      
      route.children.push({
        path: 'invite', // This becomes /app/any-path/invite
        name: `${route.meta.name || 'dynamic'}-invite`,
        component: () => import('@/features/Staff/view/InviteStaff.vue')
      })
    }
  }

  if (Array.isArray(config)) {
    config.forEach(processRoute)
    routes.push(...config)
  } else if (config) {
    processRoute(config)
    routes.push(config)
  }
}

function routerGuard(to: any, from: any, next: any) {
  const appstore = useAppStore()
  const userstore = useAuthStore()

  if (to.meta.protected) {
    if (appstore.token === undefined) {
      ElMessage.warning('You need to login to continue')
      next('/')
    }
    else if (to.meta.acl) {
      if (!to.meta.acl.includes(userstore.user.role)) {
        ElMessage.error('You are not authorized to access this page')
      }
      else {
        next()
      }
    }
    else {
      next()
    }
  }
  else {
    next()
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => routerGuard(to, from, next))

export default router
