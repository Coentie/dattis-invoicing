import { Fragment, useState } from 'react';
import HeaderTitle from '../../ui/partials/HeaderTitle.jsx';
import useAxios from '../../../providers/useAxios.jsx';

export default ({ onCancelHandler, onCustomerSaveHandler = () => {} }) => {
    const {axiosPrivate} = useAxios();
    const [email, setEmail] = useState(null);
    const [name, setName] = useState(null);

    /**
     * Updates the email
     * @param e
     */
    const onEmailInput = e => setEmail(e.target.value);

    /**
     * Updates the name
     * @param e
     */
    const onNameInput = e => setName(e.target.value);

    /**
     * When clicked on the login handler
     * @returns {Promise<void>}
     */
    const onClickSaveCustomer = async() => {
        const res = await axiosPrivate.post('/customers', {
            email: email,
            name: name
        });

        onCustomerSaveHandler(res.data);
    };

    return (
        <Fragment>
            <HeaderTitle title={'Adding a new customer'} classes={'text-2xl mb-8'} level={3}/>

            <div className={'w-full flex flex-col mb-4'}>
                <label htmlFor={'email'} className={'text-xl mb-1 text-gray-600'}>E-mail</label>
                <input
                    className={'w-full border border-gray-200 rounded-xl py-3 px-2 active:ring-none focus:ring-none'}
                    type="text"
                    required
                    name="email"
                    id="email"
                    onInput={onEmailInput}
                    placeholder="Email van de klant..."
                />
            </div>

            <div className={'w-full flex flex-col mb-4'}>
                <label htmlFor={'email'} className={'text-xl mb-1 text-gray-600'}>Naam</label>
                <input
                    className={'w-full border border-gray-200 rounded-xl py-3 px-2 active:ring-none focus:ring-none'}
                    type="text"
                    required
                    name="name"
                    id="name"
                    onInput={onNameInput}
                    placeholder="Naam van de klant..."
                />
            </div>

            <div className={'flex justify-end space-x-4'}>
                <button type="button" onClick={onCancelHandler}
                        className={'px-12 mono uppercase bg-gray-100 hover:bg-gray-300 rounded-xl py-3 transition duration-300 ease-in-out'}>
                    Cancel
                </button>
                <button type="button" onClick={onClickSaveCustomer}
                        className={'px-12 mono uppercase bg-primary hover:bg-primary-700 rounded-xl py-3 transition duration-300 ease-in-out'}>
                    Login
                </button>
            </div>
        </Fragment>
    );
}
