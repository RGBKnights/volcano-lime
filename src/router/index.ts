import { createRouter as createVueRouter, createWebHistory, type Router } from 'vue-router'
import { createAuthGuard } from "@auth0/auth0-vue";
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import LogoffView from '../views/LogoffView.vue'
import type { App } from 'vue';

export function createRouter(app: App): Router {
  return createVueRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: "/",
        name: "home",
        component: HomeView
      },
      {
        path: "/login",
        name: "login",
        component: LoginView
      },
      {
        path: "/logoff",
        name: "logoff",
        component: LogoffView
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutView.vue'),
        beforeEnter: createAuthGuard(app)
      },
      {
        path: '/thread',
        name: 'thrtead',
        component: () => import('../views/ThreadView.vue'),
        beforeEnter: createAuthGuard(app)
      },
      {
        path: '/thread/:id',
        name: 'thread',
        component: () => import('../views/ThreadView.vue'),
        beforeEnter: createAuthGuard(app)
      },
      {
        path: '/integrations',
        name: 'integrations',
        component: () => import('../views/IntegrationsView.vue'),
        beforeEnter: createAuthGuard(app)
      },
      {
        path: '/history',
        name: 'history',
        component: () => import('../views/HistoryView.vue'),
        beforeEnter: createAuthGuard(app)
      },
      {
        path: '/skills',
        name: 'skills',
        component: () => import('../views/SkillsView.vue'),
        beforeEnter: createAuthGuard(app)
      },
      {
        path: '/memory',
        name: 'memory',
        component: () => import('../views/MemoryView.vue'),
        beforeEnter: createAuthGuard(app)
      }
    ]
  })
}