import { useNavigate } from 'react-router-dom';
import CreateButton from '../ui/partials/buttons/CreateButton.jsx';
import { PencilOutline, TrashBinOutline } from 'react-ionicons';

const CustomerIndexCard = ({ customer, onDestroyClick = () => {} }) => {
    const navigate = useNavigate();

    /**
     * Redirects to a customer specific show page.
     *
     * @returns {*}
     */
    const redirectCustomerShow = e => {
        e.stopPropagation();
        navigate('/customers/' + customer.id);
    }

    /**
     * Redirects to a customer specific show page.
     *
     * @returns {*}
     */
    const redirectCustomerEdit = e => {
        e.stopPropagation();
    }

    /**
     * Redirects to a customer specific show page.
     *
     * @returns {*}
     */
    const redirectCustomerTrash = e => {
        e.stopPropagation();
        onDestroyClick(customer.id);
    }

    return (
        <div onClick={redirectCustomerShow}
             className={'w-full bg-white flex justify-between shadow rounded-xl px-8 py-4 cursor-pointer select-none hover:bg-primary-50'}>
            <div className={'flex flex-col'}>
                <p><span className={'font-bold'}>Name:</span> {customer.name}</p>
                <p><span className={'font-bold'}>E-mail:</span> {customer.email}</p>
            </div>

            <div className={'flex gap-4'}>
                <CreateButton onClickHandler={redirectCustomerEdit}>
                    <PencilOutline
                        color={'#2C86DB'}
                        title={'delete'}
                        height="1em"
                        width="1em"
                    />
                </CreateButton>

                <CreateButton onClickHandler={redirectCustomerTrash}>
                    <TrashBinOutline
                        color={'#F20200'}
                        title={'delete'}
                        height="1em"
                        width="1em"
                    />
                </CreateButton>
            </div>

        </div>
    );
};

export default CustomerIndexCard;
