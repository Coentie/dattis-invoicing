import Layout from '../ui/Layout.jsx';
import { useState, useEffect } from 'react';
import CustomerIndexCard from './CustomerIndexCard.jsx';
import { axiosPrivate } from '../../util/axios/index.js';
import HeaderTitle from '../ui/partials/HeaderTitle.jsx';
import CreateButton from '../ui/partials/buttons/CreateButton.jsx';
import { AddOutline } from 'react-ionicons'
import BaseModal from '../ui/modals/BaseModal.jsx';
import CustomerForm from './form/CustomerForm.jsx';

const CustomerIndexList = () => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        const fetchCustomers = async () => {
            const res = await axiosPrivate.get('customers');
            setCustomers(res.data);
        }

        fetchCustomers();
    }, [])

    const renderCustomers = () => customers.map((customer, i) => {
        return <CustomerIndexCard customer={customer} key={i}/>;
    });

    return (
        <Layout>
            <div className={"flex justify-between items-center mb-8"}>
                <HeaderTitle level={1} title={"Customers"} classes={"text-4xl"} />
                <CreateButton>
                    <AddOutline
                        color={'#49B338'}
                        title={'add'}
                        height="1em"
                        width="1em"
                    />
                </CreateButton>
            </div>
            <div className={'flex flex-col space-y-4 relative'}>
                {renderCustomers()}
            </div>

            <BaseModal
                content={<CustomerForm />}
            />


        </Layout>
    );
};

export default CustomerIndexList;
