import {Route} from 'vue-router'

declare module 'vue/types/vue' {
    interface Vue {
        $agent: any
        $route: Route
    }
}

declare global {
    interface Window {
        VF: VF
    }
}
