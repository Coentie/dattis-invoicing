import Layout from '../ui/Layout.jsx';
import { useEffect, useState } from 'react';
import CustomerIndexCard from './CustomerIndexCard.jsx';
import HeaderTitle from '../ui/partials/HeaderTitle.jsx';
import CreateButton from '../ui/partials/buttons/CreateButton.jsx';
import { AddOutline } from 'react-ionicons';
import BaseModal from '../ui/modals/BaseModal.jsx';
import CustomerForm from './form/CustomerForm.jsx';
import DestroyCustomerDialog from './dialogs/DestroyCustomerDialog.jsx';
import useAxios from '../../providers/useAxios.jsx';
import useCustomers from '../../providers/customer/useCustomers.jsx';

const CustomerIndexList = () => {
    const { axiosPrivate } = useAxios();
    const {customers, setCustomers} = useCustomers();
    const [isCreatingCustomer, setIsCreatingCustomer] = useState(false);
    const [isDestroyingCustomer, setIsDestroyingCustomer] = useState(false);

    useEffect(() => {
        const fetchCustomers = async () => {
            const res = await axiosPrivate.get('customers');
            setCustomers(res.data);
        };

        fetchCustomers();
    }, []);

    /**
     * Starts creating a customer.
     */
    const startCreatingCustomer = () => setIsCreatingCustomer(true);

    /**
     * Cancels creating a customer.
     */
    const onCancelHandler = () => setIsCreatingCustomer(false);

    /**
     * Starts deleting a customer
     */
    const startDestroyingCustomer = e => setIsDestroyingCustomer(e);

    /**
     * Starts deleting a customer
     */
    const onCancelDestroyHandler = () => setIsDestroyingCustomer(false);

    /**
     * Adds the customer to the customers of the context.
     *
     * @param e
     */
    const onCustomerSaveHandler = (e) => {
        setCustomers([...customers, e]);
        setIsCreatingCustomer(false);
    }

    /**
     * Destroys a customer.
     * @returns {Promise<void>}
     */
    const onDestroyHandler = async () => {
        await axiosPrivate.delete(`/customers/${isDestroyingCustomer}`);
        setCustomers(customers.filter(c => c.id !== isDestroyingCustomer));
        setIsDestroyingCustomer(false);
    };

    /**
     * Renders a customer card for a specific user.
     * @returns {unknown[]}
     */
    const renderCustomers = () => customers.map((customer, i) => {
        return <CustomerIndexCard
            onDestroyClick={startDestroyingCustomer}
            customer={customer}
            key={i}
        />;
    });

    return (
            <Layout>
                <div className={'flex justify-between items-center mb-8'}>
                    <HeaderTitle level={1} title={'Customers'} classes={'text-4xl'}/>
                    <CreateButton onClickHandler={startCreatingCustomer}>
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

                {
                    isCreatingCustomer && <BaseModal content={
                        <CustomerForm
                        onCustomerSaveHandler={onCustomerSaveHandler}
                            onCancelHandler={onCancelHandler}
                        />}
                    />
                }

                {
                    isDestroyingCustomer && <BaseModal content={
                        <DestroyCustomerDialog
                            onDestroyHandler={onDestroyHandler}
                            onCancelHandler={onCancelDestroyHandler}
                        />}
                    />
                }
            </Layout>
    );
};

export default CustomerIndexList;
