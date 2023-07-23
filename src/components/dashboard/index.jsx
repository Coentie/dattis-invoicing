import Layout from '../ui/Layout.jsx';
import useAuth from '../../providers/useAuth.jsx';
import HeaderTitle from '../ui/partials/HeaderTitle.jsx';
import useToast from '../../providers/toast/useToast.jsx';

const Dashboard = () => {
    const { auth } = useAuth();
    const {notify} = useToast();

    return (
        <Layout>
            <HeaderTitle title={"Dashboard"} level={1} classes={"text-5xl"} />
            <HeaderTitle title={`Welcome back, ${auth.userName}` } level={1} classes={"text-xl text-gray-300 font-medium"} />
            <button onClick={() => notify('success','you logged in')} className={'bg-red-500 w-6 h-6'} />
        </Layout>
    )
}

export default Dashboard;
