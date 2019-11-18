import Room from './components/Room/Room';
import Item from './components/Item/Item';
import Invoice from './components/Invoice/Invoice';
import Filter from './components/Filter';
import Payment from './components/Payment/Payment';

const routes = [
    {
        path: '/',
        exact: true,
        main: Room
    },
    {
        path: '/items',
        exact: true,
        main: Item
    },
    {
        path: '/invoices',
        exact: true,
        main: Invoice
    },
    {
        path: '/invoices/summarize',
        exact: true,
        main: Filter
    },
    {
        path: '/payment/:id',
        exact: true,
        main: Payment
    }
]

export default routes;