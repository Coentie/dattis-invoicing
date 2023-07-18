import CustomerIndexList from '../../components/customer/CustomerIndexList.jsx';
import CustomerShow from '../../components/customer/CustomerShow.jsx';
import Home from '../../Home.jsx';
import Dashboard from '../../components/dashboard/index.jsx';

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
        element: <CustomerIndexList />
    },
    {
        path: "/customers/:id",
        element: <CustomerShow />
    },
];


