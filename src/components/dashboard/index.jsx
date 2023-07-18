import Layout from '../ui/Layout.jsx';
import useAuth from '../../hooks/useAuth.jsx';
import HeaderTitle from '../ui/partials/HeaderTitle.jsx';

const Dashboard = () => {
    const { auth } = useAuth();

    return (
        <Layout>
            <HeaderTitle title={"Dashboard"} level={1} classes={"text-5xl"} />
            <HeaderTitle title={`Welcome back, ${auth.userName}` } level={1} classes={"text-xl text-gray-300 font-medium"} />
        </Layout>
    )
}

export default Dashboard;
