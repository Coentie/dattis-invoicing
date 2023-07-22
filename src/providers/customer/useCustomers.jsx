import { useContext } from 'react';
import {CustomerContext} from '../../context/customer/CustomerContext.jsx';

const useCustomers = () =>  {
    return useContext(CustomerContext);
}

export default useCustomers;
