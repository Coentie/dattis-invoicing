import Layout from '../ui/Layout.jsx';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import HeaderTitle from '../ui/partials/HeaderTitle.jsx';
import useAxios from '../../providers/useAxios.jsx';

export default () => {
    const {axios, axiosPrivate} = useAxios();
    const [customer, setCustomer] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        /**
         * Loads a customer from the backend.
         *
         * @returns {Promise<void>}
         */
        const loadCustomer = async () => {
            const res = await axiosPrivate.get('/customers/' + id);
            setCustomer(res.data);
        };

        loadCustomer();
    }, []);

    return (
        <Layout>
            {customer !== null ? <div className={'w-full flex flex-col'}>
                <HeaderTitle classes={"mb-8"} level={1} title={'Klant: ' + customer.name}/>

                <div className={'w-full grid grid-cols-6 gap-4'}>
                    <div className={'col-span-2 flex items-center justify-center rounded-l shadow bg-white p-4'}>
                        <div className={'w-[200px] h-[200px] rounded-full bg-gray-100'}>&nbsp;</div>
                    </div>

                    <div className={'col-span-4 rounded-l shadow bg-white p-4'}>
                        <div>{customer.id}</div>
                        <div>{customer.name}</div>
                        <div>{customer.email}</div>
                    </div>
                </div>
            </div> : <p>Loading</p>}
        </Layout>
    );
}
