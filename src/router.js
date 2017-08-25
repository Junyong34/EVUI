import Vue from 'vue';
import Router from 'vue-router';
import Navi from './vue/Navigation.vue';
import Grid from './vue/grid/GridView.vue';


Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Navi
        }, {
            path: '/grid',
            component: Grid
        }
    ]
});
