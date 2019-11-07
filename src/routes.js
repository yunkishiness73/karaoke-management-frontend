import Room from './components/Room/Room';
import Item from './components/Item/Item';
import Invoice from './components/Invoice/Invoice';
import Filter from './components/Filter';

const routes = [
    {
        path: '/',
        exact: true,
        main: Room
    },
    {
        path: '/items',
        exact: false,
        main: Item
    },
    {
        path: '/invoices',
        exact: true,
        main: Invoice
    },
    {
        path: '/invoices/summarize',
        exact: false,
        main: Filter
    }
]

export default routes;