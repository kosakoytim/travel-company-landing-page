import Vue from 'vue'
import Router from 'vue-router'

const _5e642bac = () => import('../pages/tentang/index.vue' /* webpackChunkName: "pages/tentang/index" */).then(m => m.default || m)
const _141b7c1b = () => import('../pages/kirim-paket/index.vue' /* webpackChunkName: "pages/kirim-paket/index" */).then(m => m.default || m)
const _3b08bcc4 = () => import('../pages/jadwal/index.vue' /* webpackChunkName: "pages/jadwal/index" */).then(m => m.default || m)
const _7043f6fe = () => import('../pages/sewa-mobil/index.vue' /* webpackChunkName: "pages/sewa-mobil/index" */).then(m => m.default || m)
const _39ae9ab6 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)

Vue.use(Router)


if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/tentang",
			component: _5e642bac,
			name: "tentang"
		},
		{
			path: "/kirim-paket",
			component: _141b7c1b,
			name: "kirim-paket"
		},
		{
			path: "/jadwal",
			component: _3b08bcc4,
			name: "jadwal"
		},
		{
			path: "/sewa-mobil",
			component: _7043f6fe,
			name: "sewa-mobil"
		},
		{
			path: "/",
			component: _39ae9ab6,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
