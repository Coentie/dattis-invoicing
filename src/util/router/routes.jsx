import CustomerIndexList from '../../components/customer/CustomerIndexList.jsx';
import CustomerShow from '../../components/customer/CustomerShow.jsx';
import Home from '../../Home.jsx';
import Dashboard from '../../components/dashboard/index.jsx';
import { CustomerProvider } from '../../context/customer/CustomerContext.jsx';

export default [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/dashboard',
        element: <Dashboard />
    },
    {
        path: "/customers",
        element: <CustomerProvider><CustomerIndexList /></CustomerProvider>
    },
    {
        path: "/customers/:id",
        element: <CustomerShow />
    },
];


