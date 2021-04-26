require('./bootstrap');

// Import modules...
import { createApp, h, ref } from 'vue';
import { App as InertiaApp, plugin as InertiaPlugin } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import moment from 'moment';

moment.locale("pt-br");

const el = document.getElementById('app');

const app = createApp(InertiaApp)

app.config.globalProperties.$filters = {
    formatDate(value) {
        if (value) {
            return moment(value).format('dd/mm/YYYY HH:mm');
        }
    }
}

createApp({
    setup() {
        const filterDate = ref('');
        return { filterDate }
    },
    render: () =>
        h(InertiaApp, {
            initialPage: JSON.parse(el.dataset.page),
            resolveComponent: (name) => require(`./Pages/${name}`).default,
        }),
})
    .mixin({ methods: { route } })
    .use(InertiaPlugin)
    .mount(el);

InertiaProgress.init({ color: '#4B5563' });
