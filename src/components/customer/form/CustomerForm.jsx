import { Fragment } from 'react';
import HeaderTitle from '../../ui/partials/HeaderTitle.jsx';

export default () => {
    const onEmailInput = () => {
    };
    const onLoginClickHandler = () => {
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
                    placeholder="Uw email..."
                />
            </div>

            <div className={'w-full flex flex-col mb-4'}>
                <label htmlFor={'email'} className={'text-xl mb-1 text-gray-600'}>Naam</label>
                <input
                    className={'w-full border border-gray-200 rounded-xl py-3 px-2 active:ring-none focus:ring-none'}
                    type="text"
                    required
                    name="email"
                    id="email"
                    onInput={onEmailInput}
                    placeholder="Uw email..."
                />
            </div>

            <div className={'flex justify-end'}>
                <button type="button" onClick={onLoginClickHandler}
                        className={'px-12 mono uppercase bg-primary hover:bg-primary-700 rounded-xl py-3 transition duration-300 ease-in-out'}>
                    Login
                </button>
            </div>
        </Fragment>
    );
}
