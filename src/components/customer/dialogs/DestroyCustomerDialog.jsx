import { Fragment } from 'react';
import HeaderTitle from '../../ui/partials/HeaderTitle.jsx';

export default ({ onCancelHandler, onDestroyHandler, customerDestroyed = () => {} }) => {
    return (
        <Fragment>
            <HeaderTitle title={'Deleting a new customer'} classes={'text-2xl mb-8'} level={3}/>

            <p>You are about to delete a customer. This action cannot be undone. Are you sure you want to continue?</p>

            <div className={'flex justify-end space-x-4'}>
                <button type="button" onClick={onCancelHandler}
                        className={'px-12 mono uppercase bg-gray-100 hover:bg-gray-300 rounded-xl py-3 transition duration-300 ease-in-out'}>
                    Cancel
                </button>
                <button type="button" onClick={onDestroyHandler}
                        className={'px-12 text-white mono uppercase bg-red-500 hover:bg-red-600 rounded-xl py-3 transition duration-300 ease-in-out'}>
                    Destroy
                </button>
            </div>
        </Fragment>
    );
}
